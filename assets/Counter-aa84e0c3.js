import{c as $,a as _,i as c,d as x,t as f}from"./index-be56ed1d.js";const g=f('<div id="Counter" class="content-container"><p><b>Counter:</b> <!> <b>and Double Counter:</b> </p><div id="actions"><button class="counter-example">-</button><button class="counter-example">+</button></div></div>',15);function m(){const[e,n]=$(0),s=()=>e()*2;return _(()=>{console.log("Effect - executed because counter updated",e())}),(()=>{const l=g.cloneNode(!0),t=l.firstChild,r=t.firstChild,u=r.nextSibling,i=u.nextSibling;i.nextSibling.nextSibling.nextSibling;const a=t.nextSibling,o=a.firstChild,b=o.nextSibling;return c(t,e,i),c(t,s,null),o.$$click=()=>n(e()-1),b.$$click=()=>n(d=>d+1),l})()}x(["click"]);export{m as default};