*{
box-sizing:border-box;
list-style: none;
background-color: #f5f5f5;
color:#424242;
text-align: center;
}
a {
  text-decoration: none;
}
h2 {
  font-size:40px;
}
img {
box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24);
}
.container {
  width:100%;
  max-width: 1024px;
  padding: 0 15px;
  margin: 0 auto;
}


body {
font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic'

}


#fab {
    display: block;
    width: 56px;
    height: 56px;
    background: #a52a2a;
    text-align: center;
    border-radius: 50%;
    transition: .2s;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24);
    position:fixed;
    bottom:24px;
    right:24px;
    z-index:10;
}
#fab i {
  color: white;
  line-height: 40px;
  margin:8px 0px;
  font-size: 18px;
  transition: .2s;
  background: #a52a2a;
}
#fab:hover {
  background:#800000;/*背景色を変更*/
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);/*浮き上がる*/}

#fab:hover i {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);/*回転角度*/
  background:#800000;
  line-height: 40px;
  margin:8px 0px;
}

#fab:hover .fa:before {
  content: '\f2b6';/*変更後のアイコン*/

}


/* ヘッダーについて*/
header {
  height:60px;
  width: 105%;
  background-color: rgba(255, 255, 255, 1);
  position:fixed;
  top:0px;
  z-index:10;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,.44);
}
.header-left {
  float: left;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0);
  width:30%;
  text-align: left;
}
.header-left a{
  line-height: 60px;
  color:#800000;
  background-color: rgba(255, 255, 255, 0);
  font-size:20px;
  font-weight: bold;
  cursor : pointer;
}
.header-right {
  float: right;
  display: block;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.9s;
  width:70%;
}
.header-right li{
  float: right;
  font-size: 0.875rem;
  line-height: 60px;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.1s;
}
.header-right li:hover {
  border-bottom:3px solid #dc143c;
  background-color: rgba(255, 255, 255, 0);
}
.header-right a:hover {
  color:#800000;
}
.header-right a {
  line-height: 40px;
  font-size: 12px;
  height:35px;
  padding: 0px 20px;
  color:#4C4B4D;
  display: block;
  background-color: rgba(255, 255, 255, 0);
  font-weight: bold;
  transition: all 0.5s;
}
.contact-btn{
  border:3px solid #dc143c;
  border-radius: 5px;
  margin-left:10px;
}
.contact-btn a{
  height: 30px;
  padding:5px 20px;
  line-height:25px;
  animation: all 0.5s;
}
.contact-btn a:hover{
  background-color: #dc143c;
  color:white;
}

/*  スマホ用ヘッダー*/
/*チェックボックス等は非表示に*/
.nav-unshown {
  display:none;
}
/*中身*/
#nav-content {
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;/*最前面に*/
    width: 90%;/*右側に隙間を作る*/
    max-width: 330px;/*最大幅*/
    height: 100%;
    background: #fff;/*背景色*/
    transition: .3s ease-in-out;/*滑らかに表示*/
    -webkit-transform: translateX(-105%);
    transform: translateX(-105%);/*左に隠しておく*/
}
/*  */
/*  topページ*/
/*  */
.top-wrapper{
  height: 820px; /*高さ画面幅１００％*/
  margin-top:60px;
}
.top-img {
  width:100%;
}

/*  */
/*  aboutThisSiteページ*/
/*  */
.aboutThisSite-wrapper{
  height: 850px;
  padding-top:200px;

}
.aboutThisSite-text{
  text-align: center;
  padding-top:170px;
}
.aboutThisSite-text p{
  line-height: 35px;
  font-size:20px;
  margin:0px 10%;
}


/*  */
/*  aboutMeページ*/
/*  */
.aboutMe-wrapper{
  height: 900px;
  text-align: center;
  padding-top:200px;
}
.aboutMe-image{
  float:left;
  width:45%;
}
.aboutMe-image img{
  height: 500px;
}
.aboutMe-text{
  float: left;
  height:500px;
  margin-left:2%;
  width:53%;
  padding-top:30px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24);
}
.aboutMe-text p{
  background-color: white;
  line-height: 35px;
  font-size:20px;
  margin:0px 10%;
}
.aboutMe-text h2{
  background-color: white;
  font-size: 25px;
  padding-bottom:30px;
  margin:30px 10%;
  border-bottom:1px solid #c0c0c0;
}
.aboutMe-text span{
  font-weight: normal;
  background-color: white;
}

/*  */
/*  portfolioページ*/
/*  */
.portfolio-wrapper {
  height:800px;
  padding-top:150px;
}
.portfolio-left{
  float: left;
  margin-left: 3%;
  width:59%;
  height:500px;
}
.portfolio-right{
  float:left;
  width:33%;
  margin:0px 3% 0 2%;
  height:500px;
}
.portfolio-up img {
  margin-bottom: 16px;
}




.form-wrapper{
  height:650px;
  margin-top:200px;
}
.form-sheet{
  position:relative;
  margin: auto;
  height:400px;
  width:600px;
  background-color: white;
  box-shadow: 0 6px 30px 0 rgba(0,0,0,0.3);
}



.submit {
    width: 70px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    background-color:#800000;
    opacity:0.8;
    transition:all 0.5s;
}
  .submit:hover {
  opacity:1;
}
.submit a{
  color:white;
  width:100%;
  display: inline-block;
  background-color:#800000;
  font-size:30px;
  line-height: 400px;
  transition: all 0.15s;
}
.submit a:hover{
  font-size:35px;
}





/*  フッター*/
footer {
  width:100%;
  height:80px;
  background-color: rgba(34, 49, 52, 0.9);
}

footer p{
  float:left;
  line-height: 80px;
  color:white;
  margin:0px;
  background-color: rgba(34, 49, 52, 0.0);
}
