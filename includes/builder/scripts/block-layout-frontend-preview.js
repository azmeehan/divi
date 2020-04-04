/*! This minified app bundle contains open source software from several third party developers. Please review CREDITS.md in the root directory or LICENSE.md in the current directory for complete licensing, copyright and patent information. This file and the included code may not be redistributed without the attributions listed in LICENSE.md, including associate copyright notices and licensing information. */!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=605)}({19:function(t,e){t.exports=jQuery},605:function(t,e,i){(function(t){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=/ \d+vh/,o=/ \d+vh/g;!function(t){var n,s,r=ET_Builder.Frames.top,a=ETBlockLayoutPreview.blockId,l=!1;function c(t){if("string"!=typeof t)return!1;var e=t.substr(-3,3);if(-1<["deg","rem"].indexOf(e))return e;var i=t.substr(-2,2);if(-1<["em","px","cm","mm","in","pt","pc","ex","vh","vw","ms"].indexOf(i))return i;var o=t.substr(-1,1);return-1<["%"].indexOf(o)&&o}var d={vhStylesArray:[],vhStyles:"",styleId:"et-block-layout-preview-overwrite-vh-style",init:function(){if(!(this.vhStylesArray.length>0)){var e=[],o=function(e){var o=[],n=[];if("string"==typeof e.style.cssText&&t(e.style.cssText.split(";")).each(function(t,e){i.test(e)&&n.push(e.trim()+";")}),n.length>0){var s=e.selectorText+"{"+n.join(" ")+"}";o.push(s)}return o};t(document.styleSheets).each(function(n,s){try{t(s.cssRules).each(function(n,s){if(s.selectorText&&i.test(s.cssText)&&(e=e.concat(o(s))),s.media&&i.test(s.cssText)){var r=[];t(s.cssRules).each(function(t,e){r=r.concat(o(e))}),e=e.concat(["@media "+s.conditionText+" {"+r.join(" ")+"}"])}})}catch(t){}}),this.vhStylesArray=e,this.vhStyles=e.join(" "),t("<style>",{id:this.styleId}).html(this.getStyles()).appendTo("body")}},getStyles:function(){var e=this.vhStyles,i=r||window,n=r.jQuery(".edit-post-header").outerHeight(),s=(t(i).height()-n)/100;return e.replace(o,function(t){return parseInt(t)*s+"px"})},onEditorWindowResize:function(){t("style#"+d.styleId).html(d.getStyles())}},p={position:{settings:{fixed:[],blockOffsetTop:0},isActive:function(){return"object"===e(ETBlockLayoutPreview.assistiveSettings.position)},getAssistiveSettings:function(){return ETBlockLayoutPreview.assistiveSettings.position},init:function(){if(this.isActive()&&"object"===e(ETBlockLayoutPreview.styleModes)){var i=t("#page-container"),o=i.outerWidth(),n=i.css("margin-left"),a=r.jQuery(".edit-post-header").outerHeight(),l=r.jQuery("#wpadminbar").outerHeight(),d=parseInt(r.innerHeight)-a-l,u=s.position().top,f=this.getAssistiveSettings();ETBlockLayoutPreview.styleModes.forEach(function(e){for(var i,s,r,a,l,v,y,h,m,b,g,w,x,E,k=0;k<f.length;k++)if("fixed"===f[k].settings.position[e]){if(s=(i=f[k]).selector,l=(r="string"==typeof i.settings.position_fixed_origin[e]?i.settings.position_fixed_origin[e].split("_"):[])[0],y=r[1],g="desktop"===e?"0px":null,w=void 0!==i.settings.position.tablet,x=void 0!==i.settings.position.phone,E=w||x,-1<["top","center","bottom"].indexOf(l)){var _,S=c(_=i.settings.vertical_offset[e]);v=-1<["%","vh"].indexOf(S)?parseInt(_)/100*d+"px":_,"top"===l&&(a="string"==typeof v&&""!==v?v:g),"center"===l&&(a=d/2+"px"),"bottom"===l&&(p.position.setStyle("verticalOffset",s,"bottom: auto !important;",e,E),a=d-parseInt(t(s).outerHeight())+"px",v&&(a="calc("+a+" - "+v+")")),"string"==typeof a&&(p.position.settings.fixed.push({selector:s,property:"top",initialValue:a,mode:e,isResponsive:E}),p.position.setStyle("verticalOffset",s,"top: "+(parseInt(a)-u)+"px !important; bottom: auto !important;",e,E))}-1<["left","right"].indexOf(y)&&(m=c(h=i.settings.horizontal_offset[e]),"string"==typeof(b=-1<["%","vw"].indexOf(m)?parseInt(h)/100*o+"px":"string"==typeof h&&""!==h?h:g)&&p.position.setStyle("horizontalOffset",s,y+": calc("+n+" + "+b+") !important;",e,E))}p.position.settings.blockOffsetTop=u})}},reinit:function(){p.position.settings.fixed=[],p.position.init(),p.position.applyFixedAdjustment()},applyFixedAdjustment:function(e){if(void 0===e){var i=r.document.getElementsByClassName("edit-post-layout__content");i[0]&&(e=t(i[0]).scrollTop())}var o=p.position.settings,n=e-o.blockOffsetTop;o.fixed.forEach(function(t){p.position.setStyle("verticalOffset",t.selector,t.property+": calc("+t.initialValue+" + "+n+"px) !important; bottom: auto !important;",t.mode,t.isResponsive)})},setStyle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments[1],o=arguments[2],n=arguments[3],s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=i+("hover"===n?":hover":"")+"{"+o+"}";s&&"desktop"===n?r="@media all and (min-width: 981px) { "+r+" }":s&&"tablet"===n?r="@media all and (max-width: 980px) { "+r+" }":s&&"phone"===n&&(r="@media all and (max-width: 767px) { "+r+" }"),t(i+" .et-builder-adjustment-style.et-builder-adjustment-style--"+e+"-"+n).remove(),t(i).append(t("<style />",{class:"et-builder-adjustment-style et-builder-adjustment-style--"+e+"-"+n,type:"text/css",text:r}))},onEditorScroll:function(){var e=t(this).scrollTop();p.position.applyFixedAdjustment(e)},onGbBlockOrderChange:function(){setTimeout(function(){p.position.reinit()},300)},onEditorWindowResize:function(){p.position.reinit()}}};t(document).ready(function(){n=r.jQuery('iframe[name="divi-layout-iframe-'+a+'"]'),s=n.closest('.wp-block[data-type="divi/layout"]'),s.offset(),t("html").each(function(){"hidden"!==t(this).css("overflow")&&"scroll"!==t(this).css("overflow-y")||t(this).addClass("et-block-layout-force-overflow-auto")});var e=new CustomEvent("ETBlockLayoutPreviewReady",{detail:{blockId:ETBlockLayoutPreview.blockId}});function i(){var e=t("html").height(),i=r.jQuery('iframe[name="divi-layout-iframe-'+a+'"]'),o=i.closest('.wp-block[data-type="divi/layout"]');if(o.length<1&&(o=i.closest(".wp-block.is-reusable")),t("#et-boc").parents().addClass("et-pb-layout-preview-ancestor"),t("body").hasClass("et_divi_builder")&&t("#page-container .et-pb-layout-preview-ancestor").each(function(){t(this).width()!==t(this).parent().width()&&t(this).addClass("et-pb-layout-preview-width-correction")}),i.length&&(i.height(e),i.parent().css({lineHeight:1}),l&&i.closest(".et-block").css({height:""})),i.closest(".editor-inserter__menu").length>0){var n=r.innerWidth,s=e*(i.parent().width()/n);i.closest(".et-block").height(s)}else{var c="margin: 0 auto !important;",d=t("#page-container .et_pb_section:first").attr("data-box-shadow-offset");d&&(c+=" padding-top: "+d+" !important;");var u=t("#page-container .et_pb_section:last").attr("data-box-shadow-offset");u&&(c+=" padding-bottom: "+u+" !important;");var f="0px"===o.css("paddingRight")?0:28;t("#page-container").css({cssText:c,width:!window.ETBuilderBackend&&o.outerWidth()-f}),p.position.isActive()&&p.position.onEditorWindowResize()}}function o(){i(),setTimeout(function(){l=!0,i(),l=!1},1e3)}r.document.dispatchEvent(e),o(),t(window).on("resize",et_pb_debounce(function(){o()},350)),d.init(),p.position.init();var c=window.et_pb_debounce(function(){d.onEditorWindowResize(),p.position.isActive()&&p.position.onEditorWindowResize()},500);if(r.addEventListener("resize",c),p.position.isActive()){var u=r.document.getElementsByClassName("edit-post-layout__content");u[0]&&u[0].addEventListener("scroll",p.position.onEditorScroll),window.addEventListener("ETBlockGbBlockOrderChange",p.position.onGbBlockOrderChange)}window.addEventListener("unload",function(){r.removeEventListener("resize",c),p.position.isActive()&&u[0]&&u[0].removeEventListener("scroll",p.position.onEditorScroll)}),t("body").on("click","a",function(e){var i=t(this).attr("href").substr(0,1);if(!("#"===i)&&!t(this).is(".et_pb_ajax_pagination_container .wp-pagenavi a,.et_pb_ajax_pagination_container .pagination a"))return e.preventDefault(),""!==i&&(r.document.dispatchEvent(new CustomEvent("ETBlockLayoutExternalLinkClick",{detail:{blockId:ETBlockLayoutPreview.blockId}})),!1)}),t("body").on("submit","form",function(t){return t.preventDefault(),r.document.dispatchEvent(new CustomEvent("ETBlockLayoutUnwantedFormSubmission",{detail:{blockId:ETBlockLayoutPreview.blockId}})),!1})})}(t)}).call(this,i(19))}});
//# sourceMappingURL=block-layout-frontend-preview.js.map