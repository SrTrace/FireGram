(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{20:function(e,t,a){e.exports=a(28)},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(18),l=a.n(c),i=(a(25),a(8)),s=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"FireGram"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))},u=a(12),o=a.n(u),m=a(19),d=a(11);a(29),a(30);d.a.initializeApp({apiKey:"AIzaSyDIlqnZ1xXRp20XPS705QGIxq2X3u40VUU",authDomain:"firegram-fb18a.firebaseapp.com",projectId:"firegram-fb18a",storageBucket:"firegram-fb18a.appspot.com",messagingSenderId:"484498955607",appId:"1:484498955607:web:9114f780d2dd5ba045f212"});var p=d.a.storage(),f=d.a.firestore(),g=d.a.firestore.FieldValue.serverTimestamp,b=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],d=s[1],b=Object(n.useState)(null),E=Object(i.a)(b,2),v=E[0],j=E[1];return Object(n.useEffect)((function(){var t=p.ref(e.name),a=f.collection("images");t.put(e).on("state-changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){d(e)}),Object(m.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=g(),a.add({url:n,createdAt:r}),j(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:v,error:u}},E=a(32),v=function(e){var t=e.file,a=e.setFile,c=b(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(E.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}},"")},j=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],o=s[1],m=["image/png","image/jpeg","image/jpg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),o("")):(c(null),o("Please select an image file (png or jpeg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},u&&r.a.createElement("div",{className:"error"},u),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(v,{file:a,setFile:c})))},O=a(14),y=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=f.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},h=function(e){var t=e.setSelectedImg,a=y("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(E.a.div,{className:"img-wrap",key:e.id,onClick:function(){return t(e.url)},layout:!0,whileHover:{opacity:1}},r.a.createElement(E.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transintion:{delay:1}}))})))},S=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(E.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(E.a.img,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))};var I=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(j,null),r.a.createElement(h,{setSelectedImg:c}),a&&r.a.createElement(S,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d1a40ab1.chunk.js.map