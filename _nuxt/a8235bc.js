(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,5,7,8,9],{306:function(t,e,o){var content=o(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("845710b6",content,!0,{sourceMap:!1})},309:function(t,e,o){"use strict";o.r(e);var n={name:"TagChip",props:["text"]},r=(o(312),o(21)),component=Object(r.a)(n,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"chip"},[t._v(t._s(t.text))])}),[],!1,null,"61412b50",null);e.default=component.exports},312:function(t,e,o){"use strict";o(306)},313:function(t,e,o){var n=o(40)(!1);n.push([t.i,".chip[data-v-61412b50]{margin-right:8px;padding:6px 10px;background:var(--soft-red-transparent);color:var(--soft-red);border-radius:0;font-family:var(--headings-font),var(--headings-font-backup),sans-serif;font-weight:300;font-style:normal;font-size:small;text-transform:uppercase}",""]),t.exports=n},314:function(t,e,o){var content=o(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("63d1d078",content,!0,{sourceMap:!1})},317:function(t,e,o){"use strict";o.r(e);var n={name:"ImageWithBorder",props:["img","padding","css","colour"],data:function(){return{borderColours:{gradient:"linear-gradient(to bottom right, var(--orange-red), var(--purple))",orange:"var(--orange-red)",red:"var(--soft-red)",purple:"var(--purple)"}}},computed:{cssProps:function(){return{"--image-padding":this.padding+"px","--border-colour":this.borderColours[this.colour]}}}},r=(o(323),o(21)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"img-wrapper",style:t.cssProps},[e("img",{staticClass:"img-responsive",style:t.css,attrs:{src:t.img,id:"component-image"}}),t._v(" "),e("div",{staticClass:"img-border-overlay"}),t._v(" "),e("div",{staticClass:"img-border"})])}),[],!1,null,"5d0ed5cd",null);e.default=component.exports},318:function(t,e,o){t.exports=o.p+"img/me.d270b76.jpg"},319:function(t,e,o){t.exports=o.p+"img/motto.87e1010.png"},320:function(t,e,o){var content=o(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("61f1d60d",content,!0,{sourceMap:!1})},323:function(t,e,o){"use strict";o(314)},324:function(t,e,o){var n=o(40)(!1);n.push([t.i,"#component-image[data-v-5d0ed5cd]{padding-right:var(--image-padding);padding-bottom:var(--image-padding)}.img-wrapper[data-v-5d0ed5cd]{position:relative}.img-border-overlay[data-v-5d0ed5cd]{position:absolute;top:calc(var(--image-padding) + 2px);left:calc(var(--image-padding) + 2px);z-index:-5;width:calc(100% - var(--image-padding) - 4px);height:calc(100% - var(--image-padding) - 4px);background:var(--dark-background-grey)}.img-border[data-v-5d0ed5cd]{position:absolute;top:var(--image-padding);left:var(--image-padding);z-index:-10;width:calc(100% - var(--image-padding));height:calc(100% - var(--image-padding));background:var(--border-colour)}",""]),t.exports=n},327:function(t,e,o){var map={"./augmented_room/app_temp.png":329,"./augmented_room/app_temp_7_5.png":330,"./augmented_room/discord_call.png":331,"./me.jpg":318,"./me_2.jpeg":332,"./motto.png":319,"./motto_outline.png":333,"./nereus/nereus_01.png":334,"./opengl_java/1.jpg":335,"./triolingo/triolingo.jpg":336};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=327},328:function(t,e,o){"use strict";o.r(e);var n={name:"ScrollDownIcon"},r=(o(339),o(21)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])}],!1,null,"5d13b24b",null);e.default=component.exports},329:function(t,e,o){t.exports=o.p+"img/app_temp.7b882b1.png"},330:function(t,e,o){t.exports=o.p+"img/app_temp_7_5.4f53ca0.png"},331:function(t,e,o){t.exports=o.p+"img/discord_call.2626e63.png"},332:function(t,e,o){t.exports=o.p+"img/me_2.568537c.jpeg"},333:function(t,e,o){t.exports=o.p+"img/motto_outline.116f67e.png"},334:function(t,e,o){t.exports=o.p+"img/nereus_01.f6719c6.png"},335:function(t,e,o){t.exports=o.p+"img/1.690f021.jpg"},336:function(t,e,o){t.exports=o.p+"img/triolingo.c9f8fa6.jpg"},339:function(t,e,o){"use strict";o(320)},340:function(t,e,o){var n=o(40)(!1);n.push([t.i,"span[data-v-5d13b24b]{position:absolute;top:0;left:50%;width:20px;height:20px;margin-left:-10px;border-left:2px solid #fff;border-bottom:2px solid #fff;opacity:0;box-sizing:border-box;transform:rotate(-45deg);animation:arrowDown-5d13b24b 4s infinite}span[data-v-5d13b24b]:first-of-type{animation-delay:0s}span[data-v-5d13b24b]:nth-of-type(2){top:16px;animation-delay:.15s}span[data-v-5d13b24b]:nth-of-type(3){top:32px;animation-delay:.3s}@keyframes arrowDown-5d13b24b{20%{opacity:0}50%{opacity:1}80%{opacity:0}}",""]),t.exports=n},343:function(t,e,o){var content=o(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("367a1a90",content,!0,{sourceMap:!1})},344:function(t,e,o){var content=o(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("f77bcec0",content,!0,{sourceMap:!1})},358:function(t,e,o){"use strict";o(343)},359:function(t,e,o){var n=o(40)(!1);n.push([t.i,"#bg-hero-div[data-v-7c050412]{position:absolute;left:0;top:0;z-index:-1;height:100vh;padding:0;background:var(--dark-background-grey)}#hero[data-v-7c050412]{width:100vw;height:calc(100vh - var(--navbar-height))}#hero-words[data-v-7c050412]{position:relative;top:0;left:6%;margin-top:calc(20px - var(--navbar-height));margin-bottom:40px;font-family:var(--headings-font),var(--headings-font-backup),sans-serif;font-weight:700;font-size:4em;color:#fff;text-align:left}@supports (-webkit-text-stroke-color:inherit){#hero-words[data-v-7c050412]{text-transform:uppercase;-webkit-text-fill-color:transparent;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:inherit}}#hero-words a[data-v-7c050412]{position:relative;overflow:hidden;color:#fff}#hero-words .orange-red[data-v-7c050412]{--underline-color:var(--orange-red)}#hero-words .soft-red[data-v-7c050412]{--underline-color:var(--soft-red)}#hero-words .purple[data-v-7c050412]{--underline-color:var(--purple)}#hero-words a[data-v-7c050412]:hover{text-decoration:underline;-webkit-text-decoration-style:wavy;text-decoration-style:wavy;-webkit-text-decoration-color:var(--underline-color);text-decoration-color:var(--underline-color)}@media (max-width:600px){#hero-words[data-v-7c050412]{font-size:3em}}#scroll-down-icon[data-v-7c050412]{position:absolute;left:50vw;top:85vh}",""]),t.exports=n},360:function(t,e,o){"use strict";o(344)},361:function(t,e,o){var n=o(40)(!1);n.push([t.i,"#project[data-v-4f8f4783]{padding:20px 0}.card[data-v-4f8f4783]{border:transparent;background:transparent;padding-bottom:20px}.card-title[data-v-4f8f4783]{font-weight:700;font-size:x-large}.card-subtitle[data-v-4f8f4783],.card-title[data-v-4f8f4783]{font-family:var(--headings-font),var(--headings-font-backup),sans-serif;font-style:normal}.card-subtitle[data-v-4f8f4783]{font-weight:300;color:var(--grey)}.project-type[data-v-4f8f4783]{color:var(--grey);font-size:medium}.card-body[data-v-4f8f4783]{text-align:justify}#button-div[data-v-4f8f4783]{text-align:right}@media (max-width:480px){#button-div[data-v-4f8f4783]{padding-top:10px}}.card-image[data-v-4f8f4783]{padding:0;margin:16px 16px 0}",""]),t.exports=n},363:function(t,e,o){"use strict";o.r(e);o(17),o(350);var n=o(155),r=o(156),c=o(351),l=o(353),d=o(338),f=o(328),v=o(384);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var h={name:"HeroSection",components:{ScrollDownIcon:f.default},mounted:function(){var t=function(t){Object(c.a)(o,t);var e=m(o);function o(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Object(n.a)(this,o),(t=e.call(this)).xp=r,t.yp=c,t.scale=l,t}return Object(r.a)(o,[{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new v.p,o=this.xp*t,n=Math.sin(this.yp*Math.PI*t),r=0;return e.set(o,n,r).multiplyScalar(this.scale)}}]),o}(v.d),e=new v.c,canvas=document.querySelector("#bg-hero"),l=new v.k;l.fog=new v.e(789516,.015,100);var d=new v.i(45,window.innerWidth/window.innerHeight,.1,1e3),f=new v.q({canvas:canvas});f.setPixelRatio(window.devicePixelRatio),f.setSize(window.innerWidth,window.innerHeight),f.setClearColor(789516),d.position.setZ(50);new v.b(5);window.addEventListener("resize",(function(){d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)}),!1);var h=new v.j(16777215,12);h.position.set(5,5,5);var x=new v.a(16777215);l.add(h,x);var _=(new v.n).load(o(319),(function(t){t.minFilter=v.h})),w=new v.m(15),y=new v.l({vertexShader:"varying vec2 vUv;\r\nuniform float uTime;\r\n\r\nvoid main() {\r\n    vUv = uv;\r\n\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n}",fragmentShader:"varying vec2 vUv;\r\nuniform float uTime;\r\nuniform sampler2D uTexture;\r\n\r\nvoid main(){\r\n    float time = uTime * 0.1;\r\n\r\n    vec2 uv = fract(vUv * vec2(4.0,4.0) + vec2(0.0, time));\r\n\r\n    vec4 colour = texture2D(uTexture, uv);\r\n\r\n    gl_FragColor = colour;\r\n}",uniforms:{uTime:{value:0},uTexture:{value:_}},transparent:!0}),C=new v.f(w,y);C.rotation.setFromVector3(new v.p(-Math.PI/4,-Math.PI/12,-Math.PI/6)),C.position.z-=50,l.add(C);var path=new t(4,4,6),k=new v.o(path,80,2,10,!1),j=new v.g({color:15355180}),M=new v.f(k,j);M.rotation.setFromVector3(new v.p(Math.PI/12,Math.PI/12,Math.PI/12)),M.position.x+=40,M.position.y-=20,M.position.z-=30,function t(){requestAnimationFrame(t),y.uniforms.uTime.value=e.getElapsedTime(),f.render(l,d)}()}},x=h,_=(o(358),o(21)),component=Object(_.a)(x,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{attrs:{id:"scroll-down-icon"}},[e("ScrollDownIcon")],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"columns flex-centered",attrs:{id:"hero"}},[t("div",{staticClass:"column col-12",attrs:{id:"bg-hero-div"}},[t("canvas",{attrs:{id:"bg-hero"}})])])}],!1,null,"7c050412",null);e.default=component.exports;installComponents(component,{ScrollDownIcon:o(328).default})},365:function(t,e,o){"use strict";o.r(e);o(213);var n=o(309),r=o(115),c=o(317),l={name:"ProjectTile",props:["title","dates","type","img","description","one_liner","tags","link"],components:{TagChip:n.default,Button:r.default,ImageWithBorder:c.default}},d=(o(360),o(21)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns",attrs:{id:"project"}},[e("div",{staticClass:"column col-5 col-mx-auto hide-md flex-centered"},[e("NuxtLink",{attrs:{to:t.link}},[e("ImageWithBorder",{attrs:{img:t.img,padding:"12",colour:"gradient",css:"\n                    max-height: 260px;\n                    width: auto;\n            "}})],1)],1),t._v(" "),e("div",{staticClass:"column col-7 col-md-12 col-mx-auto"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header text-left"},[e("div",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"card-subtitle"},[t._v(t._s(t.dates)+" • "+t._s(t.type))])]),t._v(" "),e("div",{staticClass:"card-image show-md"},[e("NuxtLink",{attrs:{to:t.link}},[e("img",{staticClass:"img-responsive",attrs:{src:t.img}})])],1),t._v(" "),e("div",{staticClass:"card-body"},[e("p",[t._v("\n                "+t._s(t.one_liner)+"\n                ")])]),t._v(" "),e("div",{staticClass:"card-footer columns col-gapless"},[e("div",{staticClass:"column col-8 col-xl-6 col-xs-12 col-mr-auto",attrs:{id:"tag-chips"}},t._l(t.tags,(function(t){return e("TagChip",{attrs:{text:t}})})),1),t._v(" "),e("div",{staticClass:"column col-4 col-xl-6 col-xs-12 col-ml-auto",attrs:{id:"button-div"}},[e("Button",{attrs:{text:"Learn More ›",link:this.link,btn_style:"btn-dark-2"}})],1)])])])])}),[],!1,null,"4f8f4783",null);e.default=component.exports;installComponents(component,{ImageWithBorder:o(317).default,TagChip:o(309).default,Button:o(115).default})},382:function(t,e,o){var content=o(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("009a04a2",content,!0,{sourceMap:!1})},507:function(t,e,o){"use strict";o(382)},508:function(t,e,o){var n=o(40)(!1);n.push([t.i,"#s-intro[data-v-66fa2b89]{padding-bottom:60px;color:#fff;background:var(--dark-background-grey)}#hi[data-v-66fa2b89]{font-size:xx-large;margin-bottom:40px}#intro-text-1[data-v-66fa2b89]{margin-top:0;padding-bottom:20px;font-family:var(--headings-font),var(--headings-font-backup),sans-serif;font-size:x-large}#intro-text-2[data-v-66fa2b89]{margin-top:60px}@media (max-width:600px){#intro-text-2[data-v-66fa2b89]{margin-top:20px}}#intro-text-2 .columns[data-v-66fa2b89]{padding:0}.intro-text-2-col[data-v-66fa2b89]{font-weight:300;font-style:normal;margin-top:20px}.intro-emphasis[data-v-66fa2b89]{font-weight:700;font-style:italic;background:var(--purple);background:linear-gradient(135deg,var(--orange-red),var(--purple));-webkit-background-clip:text;-webkit-text-fill-color:transparent}#projects-heading[data-v-66fa2b89]{margin-top:10px;margin-bottom:30px}#s-projects-end-callout[data-v-66fa2b89]{color:#000;background:linear-gradient(135deg,var(--orange-red),var(--purple));padding-bottom:60px}#callout-heading[data-v-66fa2b89]{padding-top:10px}#callout-heading h3[data-v-66fa2b89]{margin-bottom:20px;-webkit-text-decoration-color:#000;text-decoration-color:#000}#callout-buttons[data-v-66fa2b89]{margin-top:20px}#callout-buttons a[data-v-66fa2b89]{margin:20px}",""]),t.exports=n},525:function(t,e,o){"use strict";o.r(e);var n=o(11),r=(o(53),o(363)),c=o(365),l=o(115),d={name:"IndexPage",head:{title:"Alba NR — Portfolio"},components:{HeroSection:r.default,ProjectTile:c.default,Button:l.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,n=t.params,e.next=3,o(n.slug).where({highlight:!0}).without("body").sortBy("rank").sortBy("title").fetch();case 3:return r=e.sent,e.abrupt("return",{projects:r});case 5:case"end":return e.stop()}}),e)})))()}},f=(o(507),o(21)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("HeroSection"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"columns",attrs:{id:"s-projects"}},[e("div",{staticClass:"column col-12 col-mx-auto"},[e("h3",{staticClass:"text-center",attrs:{id:"projects-heading"}},[t._v("Projects I've worked on :)")]),t._v(" "),t._l(t.projects,(function(t){return e("ProjectTile",{attrs:{title:t.title,dates:t.dates,type:t.proj_type,img:o(327)("./"+t.main_img),description:t.proj_description,one_liner:t.one_liner,tags:t.tags,link:"projects/"+t.slug}})}))],2)]),t._v(" "),e("div",{staticClass:"columns",attrs:{id:"s-projects-end-callout"}},[t._m(1),t._v(" "),e("div",{staticClass:"column col-12 col-mx-auto text-center",attrs:{id:"callout-buttons"}},[e("Button",{attrs:{text:"About Me ›",link:"about",btn_style:"btn-light-2"}}),t._v(" "),e("Button",{attrs:{text:"More Projects ›",link:"projects#more-projects",btn_style:"btn-light-2"}})],1)])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns section-header",attrs:{id:"s-intro"}},[e("div",{staticClass:"column col-6 col-sm-12 col-mx-auto text-left",attrs:{id:"intro-text-1"}},[e("p"),e("h3",{attrs:{id:"hi"}},[t._v("Hi! I'm Alba,")]),e("p"),t._v("\n      a "),e("u",{staticClass:"purple"},[t._v("Software Engineer")]),t._v("\n      passionate about creating engaging digital experiences through \n      "),e("u",{staticClass:"orange-red"},[t._v("Computer Graphics")]),t._v(" and "),e("u",{staticClass:"orange-red"},[t._v("Games Development")]),t._v(".\n    ")]),t._v(" "),e("div",{staticClass:"column col-5 col-sm-12 col-mx-auto text-left",attrs:{id:"intro-text-2"}},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column col-12 text-left intro-text-2-col"},[t._v("\n          › I recently graduated from the "),e("u",{staticClass:"purple"},[t._v("University of Cambridge")]),t._v(" \n          with a BA (Hons) in Computer Sciene and Management Studies.\n        ")]),t._v(" "),e("div",{staticClass:"column col-12 text-left intro-text-2-col"},[t._v("\n          › Currently based in "),e("u",{staticClass:"purple"},[t._v("London")]),t._v(", working on the next generation of AAA games\n          at "),e("u",{staticClass:"purple"},[t._v("Iconic AI")]),t._v(".\n        ")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"column col-12 col-mx-auto",attrs:{id:"callout-heading"}},[t("h3",{staticClass:"text-center"},[this._v("Want to know more?")])])}],!1,null,"66fa2b89",null);e.default=component.exports;installComponents(component,{HeroSection:o(363).default,ProjectTile:o(365).default,Button:o(115).default})}}]);