import{R as A,r as E}from"./app-16c74621.js";import{b as L,c as p,l as S,u as F,m as I,d as P}from"./transition-2f304351.js";var x;let W=(x=A.useId)!=null?x:function(){let e=L(),[t,r]=A.useState(e?()=>p.nextId():null);return S(()=>{t===null&&r(p.nextId())},[t]),t!=null?""+t:void 0};function b(e){return p.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let w=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(T||{}),D=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(D||{}),M=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(M||{});function N(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(w)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var h=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(h||{});function g(e,t=0){var r;return e===((r=b(e))==null?void 0:r.body)?!1:F(t,{[0](){return e.matches(w)},[1](){let o=e;for(;o!==null;){if(o.matches(w))return!0;o=o.parentElement}return!1}})}function j(e){let t=b(e);I().nextFrame(()=>{t&&!g(t.activeElement,0)&&O(e)})}function O(e){e==null||e.focus({preventScroll:!0})}let y=["textarea","input"].join(",");function R(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,y))!=null?r:!1}function H(e,t=r=>r){return e.slice().sort((r,o)=>{let i=t(r),l=t(o);if(i===null||l===null)return 0;let n=i.compareDocumentPosition(l);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function q(e,t){return U(N(),t,{relativeTo:e})}function U(e,t,{sorted:r=!0,relativeTo:o=null,skipElements:i=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?r?H(e):e:N(e);i.length>0&&n.length>1&&(n=n.filter(f=>!i.includes(f))),o=o??l.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,n.indexOf(o))-1;if(t&4)return Math.max(0,n.indexOf(o))+1;if(t&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},a=0,u=n.length,s;do{if(a>=u||a+u<=0)return 0;let f=m+a;if(t&16)f=(f+u)%u;else{if(f<0)return 3;if(f>=u)return 1}s=n[f],s==null||s.focus(c),a+=d}while(s!==l.activeElement);return t&6&&R(s)&&s.select(),s.hasAttribute("tabindex")||s.setAttribute("tabindex","0"),2}function v(e,t,r){let o=P(t);E.useEffect(()=>{function i(l){o.current(l)}return document.addEventListener(e,i,r),()=>document.removeEventListener(e,i,r)},[e,r])}function B(e,t,r=!0){let o=E.useRef(!1);E.useEffect(()=>{requestAnimationFrame(()=>{o.current=r})},[r]);function i(n,d){if(!o.current||n.defaultPrevented)return;let m=function a(u){return typeof u=="function"?a(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e),c=d(n);if(c!==null&&c.getRootNode().contains(c)){for(let a of m){if(a===null)continue;let u=a instanceof HTMLElement?a:a.current;if(u!=null&&u.contains(c)||n.composed&&n.composedPath().includes(u))return}return!g(c,h.Loose)&&c.tabIndex!==-1&&n.preventDefault(),t(n,c)}}let l=E.useRef(null);v("mousedown",n=>{var d,m;o.current&&(l.current=((m=(d=n.composedPath)==null?void 0:d.call(n))==null?void 0:m[0])||n.target)},!0),v("click",n=>{!l.current||(i(n,()=>l.current),l.current=null)},!0),v("blur",n=>i(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function X(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let o=(t==null?void 0:t.getAttribute("disabled"))==="";return o&&_(r)?!1:o}function _(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var k=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(k||{});function $(...e){return E.useMemo(()=>b(...e),[...e])}export{H as A,N as E,h as F,W as I,B as L,D as N,O as S,T as a,U as b,b as e,j as g,g as h,$ as n,k as o,X as r,q as v};
