// import Link from 'next/link';
import Layout from '../components/layout'
//
export default function Home() {
  return (
  <Layout>
    <div className="container">
      <h1 className="mt-2">About</h1>
      <p>jamstackの関連記事を公開予定しております。</p>
      <hr />
      <p>Date: 2021/02/15</p>
      <hr />
      <h3>author :</h3>
      <p>
        <a className="" href="https://twitter.com/kuc_arc_f">@kuc_arc_f</a>
      </p>
      <p><a className="" href="https://kuc-arc-f.com">https://kuc-arc-f.com</a>
      </p>      
    </div>
  </Layout>
  )
}
