!function(e){function t(t){for(var n,a,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==i[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={0:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,1]),r()}([function(e,t,r){"use strict";r.r(t);r(1),r(2)},function(e,t){$(".header__burger").click((function(){$(".header__mobile-menu").slideToggle()})),$(".tabs__item").click((function(){if(!$(this).hasClass("active")){$(".tabs__item").removeClass("active"),$(this).addClass("active"),$(".tabs__wrap").removeClass("active");var e=$(this).attr("data-index");$(".tabs__wrap").eq(e).addClass("active")}})),$(".preim__head a").click((function(e){if(e.preventDefault(),!$(this).parent().hasClass("active")){$(".preim__head li").removeClass("active"),$(this).parent().addClass("active");var t=$(".preim__head li.active").index();$(".preim__wrap").removeClass("active"),$(".preim__wrap").eq(t).addClass("active")}return!1})),$(document).ready((function(){$(".first-slider").slick({infinite:!0,dots:!1,asNavFor:".second-slider",prevArrow:$(".slide-button_prev"),nextArrow:$(".slide-button_next")}),$(".slider-about").slick({infinite:!0,dots:!1,centerMode:!0,slidesToShow:1.65}),$(".second-slider").slick({infinite:!0,arrows:!1,dots:!1,slidesToShow:3,asNavFor:".first-slider",focusOnSelect:!0}),$(".slider-vendors").slick({infinite:!0,arrows:!1,dots:!1,variableWidth:!0})})),$(".top").click((function(){$("html, body").animate({scrollTop:$(".header").offset().top},500)})),$(window).scroll((function(){$(document).scrollTop()>200?$(".top").fadeIn():$(".top").fadeOut()}))},function(e,t,r){var n=r(3),i=r(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);e.exports=i.locals||{}},,function(e,t,r){}]);