(this.webpackJsonpwhat_to_eat_today=this.webpackJsonpwhat_to_eat_today||[]).push([[0],{35:function(e,t,a){e.exports=a(66)},62:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(14),l=a(12),r=a(2),i=a(33),s=a.n(i),m=a(11),u=a.n(m),d=a(15),p=a(7),g=a(16),h=a.n(g),E=a(9),b=a.n(E),f={Haze:{iconName:"./images/009-cloudy.png",title:"Haze"},Thunderstorm:{iconName:"./images/013-thunder.png",title:"Thunderstrom"},Drizzle:{iconName:"./images/021-rain.png",title:"Drizzle"},Rain:{iconName:"./images/002-rainy.png",title:"Rain"},Snow:{iconName:"./images/025-snow.png",title:"Snow"},Clear:{iconName:"./images/005-sun.png",title:"Clear"},Clouds:{iconName:"./images/001-cloud.png",title:"Clouds"},Mist:{iconName:"./images/016-mist.png",title:"Mist"},Dust:{iconName:"./images/012-windy.png",title:"Dust"},Tornado:{iconName:"./images/015-tornado.png",title:"Tornado"}},y=function(e){var t=e.temp,a=e.condition;return o.a.createElement("div",{className:"weatherbox"},o.a.createElement("p",{className:"weatherTemp"},Math.round(t),"\u02daC"),o.a.createElement("img",{src:f[a].iconName,className:"weatherIcon",alt:a}))},N=function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"Chae Hyerin \xa9 ",o.a.createElement("a",{href:"https://github.com/sloth-hub/whattoeattoday",target:"_blank",rel:"noopener noreferrer"},"github")))},v=(a(62),function(){var e=Object(n.useState)({isLoading:!0,condition:"",temp:"",city:""}),t=Object(p.a)(e,2),a=t[0],c=t[1],r=localStorage.getItem("cords"),i=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,o,l,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=").concat("80e4e2378e235fae347d6f18a4538af9","&units=metric"));case 2:n=e.sent,o=n.data,l=o.main.temp,r=o.weather,i=o.name,c({isLoading:!1,condition:r[0].main,temp:l,city:i});case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(null===r)window.navigator.geolocation?window.navigator.geolocation.getCurrentPosition((function(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude};localStorage.setItem("cords",JSON.stringify(t)),window.location.reload()})):alert("GPS\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");else{var e=JSON.parse(r);i(e.latitude,e.longitude)}}),[]),o.a.createElement("div",{className:"container"},null===r?o.a.createElement("div",{className:"loader"},o.a.createElement("h2",null,"\uc704\uce58\ud655\uc778 \ud5c8\uc6a9\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694.")):o.a.createElement(b.a,null,o.a.createElement("div",{className:"home_container"},o.a.createElement("section",{className:"home_title"},o.a.createElement("h1",null,"WHAT TO EAT TODAY?"),o.a.createElement("h2",null,"\uc624\ub298 \ubb50 \uba39\uc9c0?")),o.a.createElement("section",{className:"home_weather"},a.isLoading?o.a.createElement("p",{className:"home_loading"},"loading.."):o.a.createElement(b.a,null,o.a.createElement(y,{temp:a.temp,condition:a.condition,city:a.city}))),o.a.createElement("section",{className:"home_start"},o.a.createElement(l.b,{to:{pathname:"/ask",state:{temp:a.temp,condition:a.condition}}},o.a.createElement("button",{className:"btn"},"START"))))),o.a.createElement(N,null))}),w=function(){Object(n.useEffect)((function(){window.Kakao.init("3e3386155ff10f2ce4483d3a453c928e")}),[]);return o.a.createElement("button",{id:"kakao-link-btn",className:"sns_btn",onClick:function(){window.Kakao.isInitialized()&&window.Kakao.Link.sendCustom({templateId:39266,templateArgs:{currentFood:document.querySelector("meta[property='og\\:image']").getAttribute("content")}})}},o.a.createElement("img",{src:"//dev.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png",alt:"kakao-share-icon"}))},k=function(e){var t=e.img;return o.a.createElement(c.a,null,o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:title",content:"WHAT TO EAT TODAY?"}),o.a.createElement("meta",{property:"og:url",content:"https://sloth-hub.github.io/whattoeattoday/"}),o.a.createElement("meta",{property:"og:description",content:'"\uc624\ub298 \ubb50 \uba39\uc9c0?" \ud558\uace0 \uace0\ubbfc\ud558\uc168\uc8e0? \uc774 \uba54\ub274 \uc5b4\ub54c\uc694?'}),o.a.createElement("meta",{property:"og:image",content:t}))},_=function(e){var t=e.state,a=Object(n.useState)({isLoading:!0}),c=Object(p.a)(a,2),l=c[0],r=c[1],i=Object(n.useState)(""),s=Object(p.a)(i,2),m=s[0],g=s[1],E=Object(n.useState)(""),f=Object(p.a)(E,2),y=f[0],N=f[1],v=Object(n.useState)(""),_=Object(p.a)(v,2),C=_[0],O=_[1],j=1;Object(n.useEffect)((function(){x()}),[]);var x=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://whattoeattoday-5c793.firebaseio.com/.json");case 2:t=e.sent,a=t.data.foods,S(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){var a;a=t.temp<10?"cold":t.temp>=10&&t.temp<24?"normal":"hot";var n=e.filter((function(e){return e.weather.includes(t.condition)&&e.mood.includes(t.mood)&&e.taste===t.taste&&e.temp.includes(a)})).sort((function(){return.5-Math.random()}));g(n),r({isLoading:!1}),N(n[0].name),O(n[0].img)},T=function(e){var t=document.querySelectorAll(".list_item");e>t.length&&(j=1),e<1&&(j=t.length),t.forEach((function(e){e.style.display="none",e.classList.remove("active")})),t[j-1].style.display="initial",t[j-1].classList.add("active");var a=document.querySelector("img.active");document.querySelector("span.foodName").innerText=a.alt,document.querySelector("meta[property='og\\:image']").setAttribute("content",a.src)},F=function(e){var t=e.length,a=e.img,n=e.name;return o.a.createElement(b.a,null,o.a.createElement("img",{src:a,alt:n,className:0===t?"list_item active":"list_item"}))};return o.a.createElement("div",{className:"result_container"},o.a.createElement(b.a,null,l.isLoading?o.a.createElement("img",{src:"./images/loading.gif",alt:"loading...",className:"result_loading"}):o.a.createElement("div",{className:"result_wrap"},o.a.createElement("div",{className:"result_list"},m.map((function(e,t){return o.a.createElement(F,{key:t,length:t,name:e.name,img:e.img})}))),o.a.createElement("h1",{className:"result_title"},o.a.createElement("span",{className:"foodName"},y)," \uc5b4\ub5a0\uc138\uc694?"),o.a.createElement("div",{className:"result_btn"},o.a.createElement("button",{className:"nextBtn btn",onClick:function(){T(j+=1)}},"\ub2e4\ub978\uac70!"),o.a.createElement("button",{className:"homeBtn btn",onClick:function(){window.location.replace("https://sloth-hub.github.io/whattoeattoday/")}},"\ud648\uc73c\ub85c")),o.a.createElement("div",{className:"result_share"},o.a.createElement(w,null),o.a.createElement("button",{id:"facebook-link-icon",className:"sns_btn fb-share-button",onClick:function(){window.open("https://www.facebook.com/sharer.php?u=".concat(encodeURIComponent(window.location.href)))}},o.a.createElement("img",{src:"/whattoeattoday/images/facebook-icon.png",alt:"facebook-share-icon"})),o.a.createElement(k,{img:C}),o.a.createElement("button",{id:"twitter-link-icon",className:"sns_btn",onClick:function(){return function(){var e=document.querySelector("meta[property='og\\:description']").getAttribute("content");window.open("https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(e),"&url=").concat(encodeURIComponent(window.location.href)))}()}},o.a.createElement("img",{src:"/whattoeattoday/images/twitter-icon.png",alt:"facebook-share-icon"}))))))},C=function(e){var t=e.state,a=e.toggle,c=e.setToggle,l=Object(n.useState)(""),r=Object(p.a)(l,2),i=r[0],s=r[1],m=function(e){s(e.target.value)};return a.isGetFood?o.a.createElement(_,{state:t}):o.a.createElement("div",{className:"food_container"},o.a.createElement(b.a,null,o.a.createElement("div",{className:"food_box"},o.a.createElement("h1",{className:"food_ask"},"\uc9c0\uae08 \uc5b4\ub5a4 \ub9db\uc774 \ub561\uae30\ub098\uc694?"),o.a.createElement("div",{className:"foods"},o.a.createElement("div",{className:"radiobox"},o.a.createElement("input",{type:"radio",name:"taste",value:"spicy",id:"spicy",onChange:m}),o.a.createElement("label",{htmlFor:"spicy"},o.a.createElement("span",{className:"text"},"\ub9e4\uc6b4\uac70",o.a.createElement("span",{role:"img","aria-label":"spicy"},"\ud83c\udf36")))),o.a.createElement("div",{className:"radiobox"},o.a.createElement("input",{type:"radio",name:"taste",value:"oily",id:"oily",onChange:m}),o.a.createElement("label",{htmlFor:"oily"},o.a.createElement("span",{className:"text"},"\uae30\ub984\uc9c4\uac70",o.a.createElement("span",{role:"img","aria-label":"oily"},"\ud83c\udf57")))),o.a.createElement("div",{className:"radiobox"},o.a.createElement("input",{type:"radio",name:"taste",value:"light",id:"light",onChange:m}),o.a.createElement("label",{htmlFor:"light"},o.a.createElement("span",{className:"text"},"\ub2f4\ubc31\ud55c\uac70",o.a.createElement("span",{role:"img","aria-label":"light"},"\ud83e\udd6a")))),o.a.createElement("div",{className:"radiobox"},o.a.createElement("input",{type:"radio",name:"taste",value:"soup",id:"soup",onChange:m}),o.a.createElement("label",{htmlFor:"soup"},o.a.createElement("span",{className:"text"},"\ud638\ub85c\ub85d \uad6d\ubb3c\uc788\ub294\uac70",o.a.createElement("span",{role:"img","aria-label":"soup"},"\ud83e\udd63"))))),o.a.createElement("button",{className:"food_next btn",onClick:function(){""===i?alert("\ub561\uae30\ub294 \ub9db\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."):(t.taste=i,c({isGetMood:!0,isGetFood:!0}))}},"NEXT"))))},O=function(e){var t=e.state,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],r=c[1],i=Object(n.useState)(""),s=Object(p.a)(i,2),m=s[0],u=s[1],d=function(e){u(e.target.value)};return l.isGetMood?o.a.createElement(C,{state:t,toggle:l,setToggle:r}):o.a.createElement("div",{className:"mood_container"},o.a.createElement(b.a,null,o.a.createElement("div",{className:"mood_box"},o.a.createElement("h1",{className:"mood_ask"},"\ub2f9\uc2e0\uc758 \uc624\ub298 \uae30\ubd84\uc740 \uc5b4\ub5a4\uac00\uc694?"),o.a.createElement("div",{className:"moods"},o.a.createElement("label",{htmlFor:"good"},o.a.createElement("input",{type:"radio",name:"mood",className:"good",id:"good",value:"good",onChange:d}),o.a.createElement("img",{src:"/whattoeattoday/images/001-icon-569501_select.png",alt:"good"})),o.a.createElement("label",{htmlFor:"happy"},o.a.createElement("input",{type:"radio",name:"mood",className:"happy",id:"happy",value:"happy",onChange:d}),o.a.createElement("img",{src:"/whattoeattoday/images/002-icon-569531_select.png",alt:"happy"})),o.a.createElement("label",{htmlFor:"melancholy"},o.a.createElement("input",{type:"radio",name:"mood",className:"melancholy",id:"melancholy",value:"melancholy",onChange:d}),o.a.createElement("img",{src:"/whattoeattoday/images/003-icon-569513_select.png",alt:"melancholy"})),o.a.createElement("label",{htmlFor:"sad"},o.a.createElement("input",{type:"radio",name:"mood",className:"sad",id:"sad",value:"sad",onChange:d}),o.a.createElement("img",{src:"/whattoeattoday/images/004-icon-569569_select.png",alt:"sad"})),o.a.createElement("label",{htmlFor:"angry"},o.a.createElement("input",{type:"radio",name:"mood",className:"angry",id:"angry",value:"angry",onChange:d}),o.a.createElement("img",{src:"/whattoeattoday/images/005-icon-569518_select.png",alt:"angry"}))),o.a.createElement("button",{className:"mood_next btn",onClick:function(){""===m?alert("\uae30\ubd84\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."):(t.mood=m,r({isGetMood:!0,isGetFood:!1}))}},"NEXT"))))},j=function(e){return void 0===e.location.state&&window.location.replace("https://sloth-hub.github.io/whattoeattoday/"),o.a.createElement("div",{className:"container"},o.a.createElement(O,{state:e.location.state}),o.a.createElement(N,null))},x=(a(65),function(){return o.a.createElement(l.a,null,o.a.createElement(r.a,{path:"/",exact:!0,component:v}),o.a.createElement(r.a,{path:"/ask",component:j}))}),S=document.getElementById("root");s.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null),o.a.createElement(c.a,null,o.a.createElement("script",{src:"https://developers.kakao.com/sdk/js/kakao.js"}),o.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v8.0",nonce:"k6exFkce"}))),S)}},[[35,1,2]]]);
//# sourceMappingURL=main.1e35403b.chunk.js.map