
//====================更换主题=====================
//
//

//cookie读写函数 getCookie()、setCookie()
//见http://www.w3school.com.cn/js/js_cookies.asp


function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}

function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

//----初始调用------
//不存在cookie则用默认css，存在cookie则用以前css
window.onload = function() {
var css_light = "http://leequangang.github.io/local/src/css/light.css";
var cookie = getCookie("mycss");//返回cookie中对应的CSS路径
var css_link = cookie?cookie:css_light;//cookie是否存在,存在则用cookie的类型,不存在则用默认的css类型
document.getElementById("cssfile").setAttribute("href",css_link);//定位id="cssfile"修改其href
}

//函数:change_css()
//功能:点击更换css,并写入cookie,保存

function change_css(){
var css_light = "http://leequangang.github.io/local/src/css/light.css";
var css_dark = "http://leequangang.github.io/local/src/css/dark.css";
var cookie = getCookie("mycss");//传入cookie名，取回cookie中css
var css_link = cookie?cookie:css_light;//cookie是否存在,存在则用,不存在则用默认的css
if(css_link == css_light){
    css_link = css_dark; }
else{ css_link = css_light; }
document.getElementById("cssfile").setAttribute("href",css_link);//每次点击交替更换主题
setCookie("mycss",css_link,365);//写入cookie,保存为1年
}

