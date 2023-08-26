/*!
 * CustomBounce 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

let e,t,n,o=()=>e||"undefined"!=typeof window&&(e=window.gsap)&&e.registerPlugin&&e,i=i=>{e=o(),n=e&&e.parseEase("_CE"),n?(t=1,e.parseEase("bounce").config=e=>"object"==typeof e?f("",e):f("bounce("+e+")",{strength:+e})):i&&console.warn("Please gsap.registerPlugin(CustomEase, CustomBounce)")},s=e=>{let t,n=e.length,o=1/e[n-2];for(t=2;t<n;t+=2)e[t]=~~(e[t]*o*1e3)/1e3;e[n-2]=1},r=function(){return String.fromCharCode.apply(null,arguments)},a=r(103,114,101,101,110,115,111,99,107,46,99,111,109),u=r(103,115,97,112,46,99,111,109),d=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,c=function(t){var n="undefined"!=typeof window,o=0===(n?window.location.href:"").indexOf(r(102,105,108,101,58,47,47))||-1!==t.indexOf(r(108,111,99,97,108,104,111,115,116))||d.test(t),i=[a,u,r(99,111,100,101,112,101,110,46,105,111),r(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),r(99,111,100,101,112,101,110,46,100,101,118),r(99,111,100,101,112,101,110,46,97,112,112),r(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),r(112,101,110,115,46,99,108,111,117,100),r(99,115,115,45,116,114,105,99,107,115,46,99,111,109),r(99,100,112,110,46,105,111),r(112,101,110,115,46,105,111),r(103,97,110,110,111,110,46,116,118),r(99,111,100,101,99,97,110,121,111,110,46,110,101,116),r(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),r(99,101,114,101,98,114,97,120,46,99,111,46,117,107),r(116,121,109,112,97,110,117,115,46,110,101,116),r(116,119,101,101,110,109,97,120,46,99,111,109),r(112,108,110,107,114,46,99,111),r(104,111,116,106,97,114,46,99,111,109),r(119,101,98,112,97,99,107,98,105,110,46,99,111,109),r(97,114,99,104,105,118,101,46,111,114,103),r(99,111,100,101,115,97,110,100,98,111,120,46,105,111),r(99,115,98,46,97,112,112),r(115,116,97,99,107,98,108,105,116,122,46,99,111,109),r(115,116,97,99,107,98,108,105,116,122,46,105,111),r(99,111,100,105,101,114,46,105,111),r(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),r(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),r(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),r(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),r(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),r(106,115,102,105,100,100,108,101,46,110,101,116)],s=function(){if(n)if("loading"===document.readyState||"interactive"===document.readyState)document.addEventListener("readystatechange",s);else{document.removeEventListener("readystatechange",s);var t="object"==typeof e?e:n&&window.gsap;n&&window.console&&!window._gsapWarned&&"object"==typeof t&&!1!==t.config().trialWarn&&(console.log(r(37,99,87,97,114,110,105,110,103),r(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(r(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"CustomBounce"+r(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(r(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),r(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)}},c=i.length;for(setTimeout(s,50);--c>-1;)if(-1!==t.indexOf(i[c]))return!0;return o||!setTimeout((function(){n&&(window.location.href=r(104,116,116,112,115,58,47,47)+a+r(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin=CustomBounce&source=trial")}),4e3)}("undefined"!=typeof window?window.location.host:""),f=(e,o)=>{if(t||i(1),o=o||{},c){let t,i,r,a,u,d,c,f=.999,l=Math.min(f,o.strength||.7),g=l,h=(o.squash||0)/100,w=h,p=1/.03,m=.2,y=1,C=.1,v=[0,0,.07,0,.1,1,.1,1],E=[0,0,0,0,.1,0,.1,0];for(u=0;u<200&&(m*=g*((g+1)/2),y*=l*l,d=C+m,r=C+.49*m,a=1-y,t=C+y/p,i=r+.8*(r-t),h&&(C+=h,t+=h,r+=h,i+=h,d+=h,c=h/w,E.push(C-h,0,C-h,c,C-h/2,c,C,c,C,0,C,0,C,-.6*c,C+(d-C)/6,0,d,0),v.push(C-h,1,C,1,C,1),h*=l*l),v.push(C,1,t,a,r,a,i,a,d,1,d,1),l*=.95,p=y/(d-i),C=d,!(a>f));u++);if(o.endAtStart&&"false"!==o.endAtStart){if(r=-.1,v.unshift(r,1,r,1,-.07,0),w)for(h=2.5*w,r-=h,v.unshift(r,1,r,1,r,1),E.splice(0,6),E.unshift(r,0,r,0,r,1,r+h/2,1,r+h,1,r+h,0,r+h,0,r+h,-.6,r+h+.033,0),u=0;u<E.length;u+=2)E[u]-=r;for(u=0;u<v.length;u+=2)v[u]-=r,v[u+1]=1-v[u+1]}return h&&(s(E),E[2]="C"+E[2],n(o.squashID||e+"-squash","M"+E.join(","))),s(v),v[2]="C"+v[2],n(e,"M"+v.join(","))}};class l{constructor(e,t){this.ease=f(e,t)}static create(e,t){return f(e,t)}static register(t){e=t,i()}}o()&&e.registerPlugin(l),l.version="3.12.2";export default l;export{l as CustomBounce};