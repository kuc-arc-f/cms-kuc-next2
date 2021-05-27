import React from 'react'
import Head from 'next/head';

import Layout from '../components/layout'
import TopHeadBox from '../components/TopHeadBox'
import PagingBox from '../components/PagingBox'
import LibCommon from '../libs/LibCommon'
import LibPagenate from '../libs/LibPagenate'
import LibCms from '../libs/LibCms'
import IndexRow from './IndexRow';
import PagesRow from './PagesRow';
import CategoryRow from './CategoryRow';
//
function Page(data) {
  var items = data.blogs
  var json = data.json
  var page_items = json.page_items
  var category_items = json.category_items
  var paginateDisp = data.display
// console.log( items )
  return (
  <Layout>
    <Head><title key="title">{data.site_name}</title></Head>      
    <div className="body_main_wrap">
      <TopHeadBox site_name={data.site_name} info_text={data.info_text} />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="btn_disp_ara_wrap mt-0">
              <div className="pages_wrap card shadow-sm my-2">
                <h5 className="card-header myblog_color_accent">Pages</h5>
                <div className="card-body">
                  <div className="page_btn_wrap mb-0">
                    {page_items.map((item, index) => {
        // console.log(item.show_id ,item.created_at )
                    return (<PagesRow save_id={item.save_id} key={index} 
                      title={item.title} />) 
                    })}
                  </div>
                </div>
              </div>
              <div className="category_wrap card shadow-sm my-2">
                <h5 className="card-header myblog_color_accent">Category</h5>
                <div className="card-body">
                  <div className="category_btn_wrap mb-0">
                  {category_items.map((item, index) => {
    // console.log(item )
                    return (<CategoryRow id={item.save_id} key={index} 
                      name={item.name} />
                    )
                  })}                    
                  </div>              
                </div>
              </div>
            </div>   
            <div className="body_wrap card shadow-sm my-4">
              <span className="badge_post badge pt-2 pb-1 rounded myblog_bgcolor_accent px-3">
                <h5>Posts</h5>
              </span>              
              <div id="post_items_box" className="card-body mt-2 mb-4">
                <div id="div_news">
                </div>
                <div className="posts_items_row my-3">
                  {items.map((item, index) => {
      // console.log(item )
                    var category_name = item.category.name
                    return (<IndexRow key={index}
                      id={item.id} save_id={item.save_id} title={item.title}
                      date={item.created_at} category_name={category_name} />       
                    )
                  })}
                </div>
                <PagingBox page="1" paginateDisp={paginateDisp} />
              </div>
            </div>                      
          </div>
          <div className="col-md-4 py-2">
            <a className="twitter-timeline" href="https://twitter.com/kuc_arc_f?ref_src=twsrc%5Etfw">
              Tweets by kuc_arc_f
            </a> 
          </div>
        </div>
      </div>
    </div>
    <style>{`
    .body_wrap{ position:relative; }
    .page_post{
      position:absolute; top:-15px; left:10px;  border: 2px solid var(--bs-orange); 
    }
    .badge_post{
      position:absolute; top:-15px; left:10px; 
    }    
    .card_col_body{ text-align: left; width: 100%;}
    .card_col_icon{ font-size: 2.4rem; }
    .task_card_box{ width : 95%;}
    `}</style>      
  </Layout>
  )
}
//
export const getStaticProps = async context => {
  var dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
  var url = process.env.MY_JSON_URL+ '?' + dt
  const req = await fetch( url );
  const json = await req.json();  
  var items = json.items 
//console.log("len=" , items.length )
  items =  LibCommon.get_reverse_items(items)
  LibPagenate.init()
  items = LibPagenate.getOnepageItems(items, 0 , 10)
  var display = LibPagenate.is_paging_display(items.length)      
  return {
    props : {
      blogs: items,
      json: json,
      site_name : process.env.MY_SITE_NAME,
      info_text : process.env.MY_SITE_INFO,        
      display: display
    }
  };
}

export default Page
