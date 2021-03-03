
# export Data

***

* CMSデータのエクスポート、インポート可能なshell になります
* 全てのサイトデータが、エクポート対象になります
 (指定サイト単位のエクスポートは出来ません)
* mongoexport 等で mongo collection 単位でエクスポートできます
* バックアップ、移行(他mongodb に引越し)ツール的な利用が可能です
* shell内の変数で、db名を指定しています。
  初期のdb名から変更している場合、修正が必要になります

***
### ■ shのフォルダ

https://github.com/kuc-arc-f/headless-1/tree/main/data/db

***
### ■ export

./export.sh

* linux実行する場合、実行権限が必要になります
* exportされた。jsonファイルが出力されます


***
### ■ import

./import.sh

* linux実行する場合、実行権限が必要になります
* exportされたjsonファイルを、import可能です

**
