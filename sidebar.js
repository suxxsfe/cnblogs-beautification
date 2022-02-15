
<script>
/*此文件只需修改下面两行信息*/
/*分别写你的用户名，博客开始使用的年、月、日*/
var USERNAME="suxxsfe";
var STARTY=2020,STARTM=1,STARTD=12;
</script>

<script>
function sleep(time){
	var startTime = new Date().getTime() + parseInt(time, 10);
	while(new Date().getTime() < startTime) {}
}

/*回到顶部*/
var scrolling;
function gotoTopWork(){
	let dy = document.documentElement.scrollTop / 10; // 每次更新scrollTop改变的大小
	if(document.documentElement.scrollTop > 0) {
		document.documentElement.scrollTop -= Math.max(dy, 10);
		setTimeout(() => {
			gotoTopWork();
		}, 15);
	}
}
function gotoTop() {
	if(scrolling) return;
	scrolling=1;
	gotoTopWork();
	setTimeout(function(){
		scrolling=0;
	},800);
}

function gotoBottomWork(){
	let dy = (document.documentElement.scrollHeight-document.documentElement.clientHeight-document.documentElement.scrollTop) / 10; 
	if(document.documentElement.scrollHeight-document.documentElement.clientHeight-document.documentElement.scrollTop> 0) {
		document.documentElement.scrollTop += Math.max(dy, 10);
		setTimeout(()=>{
			gotoBottomWork();
		},15);
	}
}
function gotoBottom(){
	if(scrolling) return;
	scrolling=1;
	gotoBottomWork();
	setTimeout(function(){
		scrolling=0;
	},800);
}
</script>



<script>

/*对首页/非首页的处理*/

/*首页和非首页公用*/
var nowUrl=window.location.pathname,is_user_name=0;
console.log(nowUrl);
var titlePage=document.getElementById("titlePage");
var marginTop=document.createElement("style");
marginTop.type="text/css";
var titlePageHeight=document.createElement("style");
titlePageHeight.type="text/css";
var userNameStyle=document.createElement("style");
userNameStyle.type="text/css";

/*预处理*/
document.getElementById("mainContent").style="width:100% !important;padding-left:25px !important;padding-right:25px !important;";

/*home width*/
var home_min_width;
if(nowUrl=="/"+USERNAME+"/"||nowUrl=="/"+USERNAME) home_min_width=830;
else home_min_width=770;

let width=document.body.clientWidth;
var want_width=Math.max(home_min_width,Math.floor(width*0.7));
console.log("want 70% of width is: "+want_width+"and the width: "+width);
var Home=document.getElementById("home");
if(width<want_width) Home.style="width:100%",document.getElementById("topMenuMain").style="width:100%";
else Home.style="width:"+want_width+"px;",document.getElementById("topMenuMain").style="width:"+want_width+"px;";
/*
let Home=document.createElement("style");
Home.type="text/css";
Home.innerHTML="#home{width:"+width+"px;}";
document.getElementsByTagName("HEAD")[0].appendChild(Home);
Home.innerHTML="@media only screen and (max-width:"+width+"px){#home{width:100%;margin-left:0px;margin-right:0px;}}";
document.getElementsByTagName("HEAD")[0].appendChild(Home);
*/

/*****************************************************************/


/*******************************************************************************************/

if(nowUrl=="/"+USERNAME+"/"||nowUrl=="/"+USERNAME){
//  is_user_name=1;
  console.log("first page!");
  var backgroundimg=["https://pic.downk.cc/item/5e7b1493504f4bcb04d6cd00.jpg",
"https://pic.downk.cc/item/5e7cdc83504f4bcb04e1a729.png",
"https://pic.downk.cc/item/5e7b1494504f4bcb04d6cda4.jpg",
"https://pic.downk.cc/item/5e7cd9d5504f4bcb04e063ec.jpg",
"https://pic.downk.cc/item/5e7b16a0504f4bcb04d8f5aa.jpg",
"https://pic.downk.cc/item/5e7cd9d5504f4bcb04e063ce.jpg",
"https://pic.downk.cc/item/5e7b16a0504f4bcb04d8f5ba.png",
"https://pic.downk.cc/item/5e7b16a0504f4bcb04d8f5c0.jpg",
"https://pic.downk.cc/item/5e7b16bf504f4bcb04d91097.jpg",
"https://pic.downk.cc/item/5e7b16bf504f4bcb04d910c8.jpg",
"https://pic.downk.cc/item/5e7b16bf504f4bcb04d910cd.jpg",
"https://pic.downk.cc/item/5e7b16c0504f4bcb04d91138.jpg",
"https://pic.downk.cc/item/5e7b16c0504f4bcb04d911a1.jpg",
"https://pic.downk.cc/item/5e7b16e5504f4bcb04d93062.png",
"https://pic.downk.cc/item/5e7b16e5504f4bcb04d93068.png",
"https://pic.downk.cc/item/5e7b16e5504f4bcb04d930b7.jpg",
"https://pic.downk.cc/item/5e7b16e5504f4bcb04d930c9.jpg",
"https://pic.downk.cc/item/5e7b16e5504f4bcb04d930cd.png",
"https://pic.downk.cc/item/5e7b1700504f4bcb04d94964.png",
"https://pic.downk.cc/item/5e7b1700504f4bcb04d94968.png",/*也可非主页*/
"https://pic.downk.cc/item/5e7b1700504f4bcb04d94976.png",
"https://pic.downk.cc/item/5e7b171b504f4bcb04d961d9.jpg",
"https://pic.downk.cc/item/5e7b171b504f4bcb04d961dd.jpg",
"https://pic.downk.cc/item/5e7b16a0504f4bcb04d8f5b4.jpg",
"https://pic.downk.cc/item/5e7b1494504f4bcb04d6cda9.jpg",
"https://pic.downk.cc/item/5e7e25c2504f4bcb04a1b388.jpg",
"https://pic.downk.cc/item/5e7e25c2504f4bcb04a1b38d.jpg",
"https://pic.downk.cc/item/5e7e25c2504f4bcb04a1b390.png",
"https://pic.downk.cc/item/5e7e25c2504f4bcb04a1b398.jpg",
"https://pic.downk.cc/item/5e7e25c2504f4bcb04a1b39f.jpg",
"https://pic.downk.cc/item/5e7e2656504f4bcb04a232e2.jpg",
"https://pic.downk.cc/item/5e7e25fe504f4bcb04a1e75a.jpg",
"https://pic.downk.cc/item/5e7e25fe504f4bcb04a1e761.jpg",
"https://pic.downk.cc/item/5e7e25fe504f4bcb04a1e765.jpg",
"https://pic.downk.cc/item/5e7e25fe504f4bcb04a1e768.jpg",
"https://pic.downk.cc/item/5e7e272e504f4bcb04a2ed1d.jpg",
"https://pic.downk.cc/item/5e7e272e504f4bcb04a2ed20.jpg",
"https://pic.downk.cc/item/5e7e272e504f4bcb04a2ed22.jpg"];
  titlePage.style.backgroundImage="url(\" "+backgroundimg[Math.floor(Math.random()*38)]+"\")";
/*titlePage.style.backgroundImage="url(\"https://p.pstatp.com/origin/1372100003fe4b14ecb28\")";*/
  titlePage.style.height="100vh";

  document.getElementById("onePoem").style.display="block";
  document.getElementById("onePoemTitle").style.display="block";
  
  marginTop.innerHTML="#home{margin-top:100vh}"
  document.getElementsByTagName("HEAD")[0].appendChild(marginTop);

  var style=document.createElement("style");
  style.type="text/css";
  style.innerHTML="@media only screen and (max-width:1000px){#titlePage{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 68vh;    height: 68vh;    max-height:68vh;    padding: 15% 0;}#home{  margin-top:68vh;}}@media only screen and (max-width:950px){#titlePage{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 64vh;    height:64vh;    max-height:64vh;    padding: 15% 0;}#home{  margin-top:64vh;}}@media only screen and (max-width:900px){#titlePage{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 60vh;    height: 60vh;    max-height:60vh;    padding: 15% 0;}#home{  margin-top:60vh;}}@media only screen and (max-width:850px){#titlePage{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 56vh;    height: 56vh;    max-height:56vh;    padding: 15% 0;}#home{  margin-top:56vh;}}@media only screen and (max-width:800px){#titlePage{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 53vh;    height: 53vh;    max-height:53vh;    padding: 15% 0;}#home{  margin-top:53vh;}}@media only screen and (max-width:760px){#titlePage{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 50vh;    height: 50vh;    max-height: 50vh;    padding: 15% 0;}#home{  margin-top:50vh;}}@media only screen and (max-width:700px){#titlePage{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 46vh;    height: 46vh;    max-height:46vh;    padding: 15% 0;}#home{  margin-top:46vh;}}@media only screen and (max-width:650px){#titlePage{    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 43vh;    height: 43vh;    max-height:43vh;    padding: 15% 0;}#home{  margin-top:43vh;}}"
  document.getElementsByTagName("HEAD")[0].appendChild(style);
}

/************************非首页******************/

else{
  console.log("this is not first page")
  console.log(nowUrl);

/*寻找当前的标题并处理*/
  var articleTitle;
  articleTitle=document.getElementsByClassName("PostListTitle")[0];/*标签列表标题*/
  if(!articleTitle) articleTitle=document.getElementsByClassName("entrylistTitle")[0];/*分类列表标题，随便，文章档案标题*/
  if(!articleTitle) articleTitle=document.getElementById("cb_post_title_url");/*文章的标题*/
  if(!articleTitle) articleTitle=document.getElementById("taglist_title");
  if(!articleTitle) articleTitle=document.getElementsByClassName("big_a_top")[0],is_user_name=1;/*名字*/
  var userName=document.getElementById("userName");
  userName.innerHTML=articleTitle.innerHTML;
  console.log(articleTitle.innerHTML);
  if(!is_user_name){
	  articleTitle.style.display="none";
	  document.getElementById("topTitle_p").innerHTML=articleTitle.innerHTML;
  }
  else document.getElementById("topTitle").style.display="none";

/*处理home的位置*/
  marginTop.innerHTML="#home{margin-top:45vh;}";
  document.getElementsByTagName("HEAD")[0].appendChild(marginTop);
  titlePageHeight.innerHTML="#titlePage{height:45vh;}";
  document.getElementsByTagName("HEAD")[0].appendChild(titlePageHeight);
  userNameStyle.innerHTML="#userName{font-size:3em;font-weight:800;}";
  document.getElementsByTagName("HEAD")[0].appendChild(userNameStyle);

/*背景图*/
  var backgroundimg=["https://pic.downk.cc/item/5e7b1700504f4bcb04d9496b.jpg",
"https://pic.downk.cc/item/5e7e23ac504f4bcb049ff1b2.png",
"https://pic.downk.cc/item/5e7e24a0504f4bcb04a0cc60.png"];
  titlePage.style.backgroundImage="url(\" "+backgroundimg[Math.floor(Math.random()*3)]+"\")";

  var style=document.createElement("style");
  style.type="text/css";
  style.innerHTML="@media only screen and (max-width:900px){#titlePage{  -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 35vh;    height: 35vh;    max-height:35vh;}#home{    margin-top:35vh !important;}}@media only screen and (max-width:800px){#titlePage{  -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 32vh;    height: 32vh;    max-height:32vh;}#userName{  font-size:2em !important;}#home{    margin-top:32vh !important;}}@media only screen and (max-width:700px){#titlePage{  -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    min-height: 28vh;    height: 28vh;    max-height:28vh;  min-height:28vh;}#userName{  font-size:2em !important;}#home{    margin-top:28vh !important;}}@media only screen and (max-width:600px){#titlePage{  -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;  min-height:25vh; height: 25vh;    max-height:25vh;  min-height:25vh;}#userName{  font-size:1.5em !important;}#home{    margin-top:25vh !important;}}";
  document.getElementsByTagName("HEAD")[0].appendChild(style);

}
document.getElementById("userName").style.display="block";

</script>

<script>

/**************Hide and Show*************/

function hideAndShow(){
	let tmp=this.parentElement.childNodes,div_;
	let show=0;
	for(let i=0;i<tmp.length;i++)if(tmp[i].className=="ShowAndHideButton"){
		if(tmp[i].value=="Show") tmp[i].value="Hide",show=1;
		else tmp[i].value="Show",show=0;
		break;
	}
	for(let i=0;i<tmp.length;i++)if(tmp[i].className!="ShowAndHideButton"&&tmp[i].tagName){
		if(show) tmp[i].style.display="block";
		else {
			tmp[i].style.display="none";
		}
	}
//	console.log(div_);
	// if(div_.style.display=="block"){
	// 	div_.style.display="none";
	// 	this.innerHTML="Show";
	// }
	// else{
	// 	div_.style.display="block";
	// 	this.innerHTML="Hide";
	// }
}

let hide=document.getElementsByClassName("hide_at_first");
let button_,div_;
for(let i=0;i<hide.length;i++){
	button_=document.createElement("input");
	button_.type="button";
	button_.value="Hide";
	button_.classList.add("ShowAndHideButton");
		console.log("hide[i]: "+hide[i]);
	hide[i].insertAdjacentHTML("afterbegin",button_.outerHTML);
}
let show=document.getElementsByClassName("show_at_first");
for(let i=0;i<show.length;i++){
	button_=document.createElement("input");
	button_.type="button";
	button_.value="Hide";
	button_.classList.add("ShowAndHideButton");
	show[i].insertAdjacentHTML("afterbegin",button_.outerHTML);
}
for(let el of document.querySelectorAll('.ShowAndHideButton')){
	el.onclick=hideAndShow;
	if(el.parentElement.className=="hide_at_first") el.onclick();
}

</script>

<script>
window.onresize=function(){
	let width_now=document.body.clientWidth;
	if(width_now<want_width) Home.style="width:100%;";
	else Home.style="width:"+want_width+"px;";
	if(Math.max(home_min_width,Math.floor(width_now*0.7))>want_width) want_width=Math.max(home_min_width,Math.floor(width_now*0.7));
//	console.log("now,want_width is : "+want_width);
}
</script>


<script>
var topMenu=document.getElementById("topMenu"),now,last=0,type=0;
//type=0 表示顶部菜单为链接，1 代表为标题
window.onscroll=function(){
	now=document.documentElement.scrollTop||document.body.scrollTop;
	if(now>last&&!type){/*向上*/
		setTimeout(function(){
			type=1;
			topMenu.style.transform="translateY(-55px)";
			if(!is_user_name) topMenu.style.height="110px";
		},130);
	}
	else if(now<last&&type){/*向下*/
		setTimeout(function(){
			type=0;
			topMenu.style.transform="translateY(0px)";
			topMenu.style.height="55px";
		},130);
	}
	last=now;
}
</script>

<script>

/*弹出和关闭menu*/
function getMenu(){
  var menuList=document.getElementById("menuList");
  var menus=document.getElementById("menus");
  var menus2=document.getElementById("menus2");
  if(menus.style.display=="block"){
    menus.style.display="none";
    menus2.style.display="block";
    menuList.style.width="250px";
	menuList.style.paddingLeft="10px";
  }
  else{
    menus.style.display="block";
    menus2.style.display="none";
    menuList.style.width="0px";
	menuList.style.paddingLeft="0px";
  }
}

/*离开当前页面时，关闭menu*/
document.addEventListener("visibilitychange", function(){
    if(document.hidden){
		if(document.getElementById("menus2").style.display=="block") getMenu();
	}
});
</script>

<script>

/*一言*/
                  var st=["<center>没有神的光环，我们生而平凡 <br> <center>这就是你不拿rank1得理由？<br>",                          "<center>我遇见你，我记住你<br><center>这座城市天生适合恋爱，<br><center>你的灵魂天生适合我<br>",                          "<center>你知道<br><center>Nice to meet you<br><center>是什么意思么？<br><center>很高兴见到你呗<br><center>不啊，“有生之年，幸得相逢。”<br>",                          "<center>前半生无你<br><center>余生请指教.<br>",                          "<center>你好，冒昧打搅了<br><center>我今天也特别喜欢你.<br>",                          "<center>it takes sonebody an hour to like someonoe,<br><center>and a day to like someone,<br><center>but it takes a life time to forget someone.<br>",                          "<center>you have only one life and one chance to do all the things you want to do.<br>",                          "<center>你就像桌上那份时事报,<br><center>当时读新鲜，以后读怀念<br><center>悲欢越来越远,<br><center>可还是会小心翼翼地折好，安放<br>",                          "<center>你特别好，我喜欢你<br>",                          "<center>我终不能改变那个开始，<br><center>何不忘了那个结局呢？<br>",                          "<center>it takes only a smile to make a darkday seem bright<br>",                          "<center>无论在哪里遇上你，<br><center>我都会喜欢你<br>",                          "<center> 你若盛开，清风自来<br>",                          "<center>用我一生,<br><center>换你十年天真。<br><center>忘了我吧，<br><center>吴邪。<br>",                          "<center>太想摘取星星得人，<br><center>往往忽视了脚下得鲜花。<br>",                          "<center> 无论发生什么，<br><center>希望你都不要后悔与我得相识。<br>",                          "<center> 生生生生暗生始，<br><center>死死死死冥死终。<br>",                          "<center> 未来不是被给予的，<br><center>而是自己争取的。 <br>",                          "<center> あたいってば最強ね！ <br>",                          "<center> 十步杀一人，<br><center> 千里不留行。<br>",                          "<center> 当一切都消失得时候<br><center> 你就会明白生命有何价值<br>",                          "<center> 不是他，变成他<br>",                          "<center> 也许我们都没有长大，<br><center> 只是世界变小了。<br>",                          "<center> Time waits for no one.<br>",                          "<center> 和绝望，</center><br><center>和睦相处</center><br>" , "<center>某天，你无端想起一个人<br>她曾让你对明天有所期许，但是却完全没有出现在你的明天里<br>——《再见金华站》","<center>但我们也知道，故事一定是要结束的<br>命运安排这一场<br>是为了后半生的午夜梦回做了个铺垫</center>","<center>目之所及皆是回忆，心之所想皆是过往，眼之所看皆是遗憾。</center>","<center>一瞬错过，一辈子不见。</center>"];
document.getElementById("onePoem").innerHTML=st[Math.floor((Math.random()*29))];

</script>



<script>
/*将侧边栏复制到menu里*/
$(document).ready(function(){
  $("#myBlogStats").html($(".blogStats").html());
  $("#myMenu").html($("#sideBarMain").html());

  $("#others").html($("#footer").html());
});
</script>

<script>
/*时间*/
function getTime(){
  let date=new Date();
  let x=date.getTime();
  date=new Date(STARTY,STARTM,STARTD);
  let beginTime=date.getTime();
  x=x-beginTime;
  x=Math.floor(x/1000);
  let sec=x%60;
  x=Math.floor(x/60);
  let min=x%60;
  x=Math.floor(x/60);
  let hour=x%24;
  x=Math.floor(x/24);
  let day=x;
  let htmlDate=document.getElementById("date");
  htmlDate.innerHTML="This blog has running: "+day+" days "+hour+" hours "+min+" minutes "+sec+" seconds"
}
setInterval("getTime()", 500);
</script>


 
