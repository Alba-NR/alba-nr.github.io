(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,9],{306:function(t,r,e){var content=e(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("845710b6",content,!0,{sourceMap:!1})},309:function(t,r,e){"use strict";e.r(r);var o={name:"TagChip",props:["text"]},d=(e(312),e(21)),component=Object(d.a)(o,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"chip"},[t._v(t._s(t.text))])}),[],!1,null,"61412b50",null);r.default=component.exports},312:function(t,r,e){"use strict";e(306)},313:function(t,r,e){var o=e(40)(!1);o.push([t.i,".chip[data-v-61412b50]{margin-right:8px;padding:6px 10px;background:var(--soft-red-transparent);color:var(--soft-red);border-radius:0;font-family:var(--headings-font),var(--headings-font-backup),sans-serif;font-weight:300;font-style:normal;font-size:small;text-transform:uppercase}",""]),t.exports=o},314:function(t,r,e){var content=e(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("63d1d078",content,!0,{sourceMap:!1})},317:function(t,r,e){"use strict";e.r(r);var o={name:"ImageWithBorder",props:["img","padding","css","colour"],data:function(){return{borderColours:{gradient:"linear-gradient(to bottom right, var(--orange-red), var(--purple))",orange:"var(--orange-red)",red:"var(--soft-red)",purple:"var(--purple)"}}},computed:{cssProps:function(){return{"--image-padding":this.padding+"px","--border-colour":this.borderColours[this.colour]}}}},d=(e(323),e(21)),component=Object(d.a)(o,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"img-wrapper",style:t.cssProps},[r("img",{staticClass:"img-responsive",style:t.css,attrs:{src:t.img,id:"component-image"}}),t._v(" "),r("div",{staticClass:"img-border-overlay"}),t._v(" "),r("div",{staticClass:"img-border"})])}),[],!1,null,"5d0ed5cd",null);r.default=component.exports},323:function(t,r,e){"use strict";e(314)},324:function(t,r,e){var o=e(40)(!1);o.push([t.i,"#component-image[data-v-5d0ed5cd]{padding-right:var(--image-padding);padding-bottom:var(--image-padding)}.img-wrapper[data-v-5d0ed5cd]{position:relative}.img-border-overlay[data-v-5d0ed5cd]{position:absolute;top:calc(var(--image-padding) + 2px);left:calc(var(--image-padding) + 2px);z-index:-5;width:calc(100% - var(--image-padding) - 4px);height:calc(100% - var(--image-padding) - 4px);background:var(--dark-background-grey)}.img-border[data-v-5d0ed5cd]{position:absolute;top:var(--image-padding);left:var(--image-padding);z-index:-10;width:calc(100% - var(--image-padding));height:calc(100% - var(--image-padding));background:var(--border-colour)}",""]),t.exports=o},344:function(t,r,e){var content=e(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("f77bcec0",content,!0,{sourceMap:!1})},360:function(t,r,e){"use strict";e(344)},361:function(t,r,e){var o=e(40)(!1);o.push([t.i,"#project[data-v-4f8f4783]{padding:20px 0}.card[data-v-4f8f4783]{border:transparent;background:transparent;padding-bottom:20px}.card-title[data-v-4f8f4783]{font-weight:700;font-size:x-large}.card-subtitle[data-v-4f8f4783],.card-title[data-v-4f8f4783]{font-family:var(--headings-font),var(--headings-font-backup),sans-serif;font-style:normal}.card-subtitle[data-v-4f8f4783]{font-weight:300;color:var(--grey)}.project-type[data-v-4f8f4783]{color:var(--grey);font-size:medium}.card-body[data-v-4f8f4783]{text-align:justify}#button-div[data-v-4f8f4783]{text-align:right}@media (max-width:480px){#button-div[data-v-4f8f4783]{padding-top:10px}}.card-image[data-v-4f8f4783]{padding:0;margin:16px 16px 0}",""]),t.exports=o},365:function(t,r,e){"use strict";e.r(r);e(213);var o=e(309),d=e(115),n=e(317),l={name:"ProjectTile",props:["title","dates","type","img","description","one_liner","tags","link"],components:{TagChip:o.default,Button:d.default,ImageWithBorder:n.default}},c=(e(360),e(21)),component=Object(c.a)(l,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"columns",attrs:{id:"project"}},[r("div",{staticClass:"column col-5 col-mx-auto hide-md flex-centered"},[r("NuxtLink",{attrs:{to:t.link}},[r("ImageWithBorder",{attrs:{img:t.img,padding:"12",colour:"gradient",css:"\n                    max-height: 260px;\n                    width: auto;\n            "}})],1)],1),t._v(" "),r("div",{staticClass:"column col-7 col-md-12 col-mx-auto"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header text-left"},[r("div",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"card-subtitle"},[t._v(t._s(t.dates)+" • "+t._s(t.type))])]),t._v(" "),r("div",{staticClass:"card-image show-md"},[r("NuxtLink",{attrs:{to:t.link}},[r("img",{staticClass:"img-responsive",attrs:{src:t.img}})])],1),t._v(" "),r("div",{staticClass:"card-body"},[r("p",[t._v("\n                "+t._s(t.one_liner)+"\n                ")])]),t._v(" "),r("div",{staticClass:"card-footer columns col-gapless"},[r("div",{staticClass:"column col-8 col-xl-6 col-xs-12 col-mr-auto",attrs:{id:"tag-chips"}},t._l(t.tags,(function(t){return r("TagChip",{attrs:{text:t}})})),1),t._v(" "),r("div",{staticClass:"column col-4 col-xl-6 col-xs-12 col-ml-auto",attrs:{id:"button-div"}},[r("Button",{attrs:{text:"Learn More ›",link:this.link,btn_style:"btn-dark-2"}})],1)])])])])}),[],!1,null,"4f8f4783",null);r.default=component.exports;installComponents(component,{ImageWithBorder:e(317).default,TagChip:e(309).default,Button:e(115).default})}}]);