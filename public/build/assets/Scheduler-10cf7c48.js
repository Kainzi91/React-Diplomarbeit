import{r as m,R as _,K as ue,j as t,F as me,a as i,n as Ne}from"./app-fd3260ab.js";import{s as He,r as Ee,i as Ce,a as Ie,L as Pe}from"./ChangeNavbarComponent-8306cf9e.js";import{H as ae}from"./react-datepicker-e36b52e7.js";import{D as Fe}from"./DropdownForm-d2b6c418.js";import{T as q,I as Y}from"./TextInput-ac8b0610.js";import{I as B}from"./InputLabel-62338169.js";import{U as Z}from"./UniversalButtonComponent-5ca19481.js";import{D as Te}from"./index.esm-1de28a00.js";import{V as X,y as K,T as Le,d as we,o as O,C as Ae,u as W,p as ne,X as J,j as re,s as Oe,l as ze}from"./transition-0484715f.js";import{n as pe,E as he,L as Ge,I as U,b as V,a as L,h as Ve,F as Ye,o as G,r as Re,e as We,N as ce}from"./use-owner-64ba8ff6.js";import{E as Ue,n as Be,h as ie,a as de,s as A}from"./use-event-listener-6f092eeb.js";var Ke=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ke||{}),qe=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(qe||{});let Ze={[0]:e=>({...e,popoverState:W(e.popoverState,{[0]:1,[1]:0})}),[1](e){return e.popoverState===1?e:{...e,popoverState:1}},[2](e,s){return e.button===s.button?e:{...e,button:s.button}},[3](e,s){return e.buttonId===s.buttonId?e:{...e,buttonId:s.buttonId}},[4](e,s){return e.panel===s.panel?e:{...e,panel:s.panel}},[5](e,s){return e.panelId===s.panelId?e:{...e,panelId:s.panelId}}},fe=m.createContext(null);fe.displayName="PopoverContext";function oe(e){let s=m.useContext(fe);if(s===null){let D=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(D,oe),D}return s}let ve=m.createContext(null);ve.displayName="PopoverAPIContext";function ge(e){let s=m.useContext(ve);if(s===null){let D=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(D,ge),D}return s}let be=m.createContext(null);be.displayName="PopoverGroupContext";function _e(){return m.useContext(be)}let ye=m.createContext(null);ye.displayName="PopoverPanelContext";function Xe(){return m.useContext(ye)}function Je(e,s){return W(s.type,Ze,e,s)}let Qe="div",et=X(function(e,s){var D;let n=m.useRef(null),x=K(s,Le(d=>{n.current=d})),a=m.useRef([]),o=m.useReducer(Je,{popoverState:1,buttons:a,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:m.createRef(),afterPanelSentinel:m.createRef()}),[{popoverState:p,button:u,buttonId:M,panel:S,panelId:N,beforePanelSentinel:c,afterPanelSentinel:k},w]=o,P=pe((D=n.current)!=null?D:u),$=m.useMemo(()=>{if(!u||!S)return!1;for(let Q of document.querySelectorAll("body > *"))if(Number(Q==null?void 0:Q.contains(u))^Number(Q==null?void 0:Q.contains(S)))return!0;let d=he(),f=d.indexOf(u),j=(f+d.length-1)%d.length,I=(f+1)%d.length,R=d[j],z=d[I];return!S.contains(R)&&!S.contains(z)},[u,S]),E=we(M),F=we(N),C=m.useMemo(()=>({buttonId:E,panelId:F,close:()=>w({type:1})}),[E,F,w]),l=_e(),g=l==null?void 0:l.registerPopover,T=O(()=>{var d;return(d=l==null?void 0:l.isFocusWithinPopoverGroup())!=null?d:(P==null?void 0:P.activeElement)&&((u==null?void 0:u.contains(P.activeElement))||(S==null?void 0:S.contains(P.activeElement)))});m.useEffect(()=>g==null?void 0:g(C),[g,C]),Ue(P==null?void 0:P.defaultView,"focus",d=>{var f,j,I,R;p===0&&(T()||!u||!S||d.target!==window&&((j=(f=c.current)==null?void 0:f.contains)!=null&&j.call(f,d.target)||(R=(I=k.current)==null?void 0:I.contains)!=null&&R.call(I,d.target)||w({type:1})))},!0),Ge([u,S],(d,f)=>{w({type:1}),Ve(f,Ye.Loose)||(d.preventDefault(),u==null||u.focus())},p===0);let h=O(d=>{w({type:1});let f=(()=>d?d instanceof HTMLElement?d:"current"in d&&d.current instanceof HTMLElement?d.current:u:u)();f==null||f.focus()}),b=m.useMemo(()=>({close:h,isPortalled:$}),[h,$]),v=m.useMemo(()=>({open:p===0,close:h}),[p,h]),y=e,r={ref:x};return _.createElement(fe.Provider,{value:o},_.createElement(ve.Provider,{value:b},_.createElement(Ae,{value:W(p,{[0]:ne.Open,[1]:ne.Closed})},J({ourProps:r,theirProps:y,slot:v,defaultTag:Qe,name:"Popover"}))))}),tt="button",at=X(function(e,s){let D=U(),{id:n=`headlessui-popover-button-${D}`,...x}=e,[a,o]=oe("Popover.Button"),{isPortalled:p}=ge("Popover.Button"),u=m.useRef(null),M=`headlessui-focus-sentinel-${U()}`,S=_e(),N=S==null?void 0:S.closeOthers,c=Xe()!==null;m.useEffect(()=>{if(!c)return o({type:3,buttonId:n}),()=>{o({type:3,buttonId:null})}},[c,n,o]);let[k]=m.useState(()=>Symbol()),w=K(u,s,c?null:r=>{if(r)a.buttons.current.push(k);else{let d=a.buttons.current.indexOf(k);d!==-1&&a.buttons.current.splice(d,1)}a.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),r&&o({type:2,button:r})}),P=K(u,s),$=pe(u),E=O(r=>{var d,f,j;if(c){if(a.popoverState===1)return;switch(r.key){case G.Space:case G.Enter:r.preventDefault(),(f=(d=r.target).click)==null||f.call(d),o({type:1}),(j=a.button)==null||j.focus();break}}else switch(r.key){case G.Space:case G.Enter:r.preventDefault(),r.stopPropagation(),a.popoverState===1&&(N==null||N(a.buttonId)),o({type:0});break;case G.Escape:if(a.popoverState!==0)return N==null?void 0:N(a.buttonId);if(!u.current||$!=null&&$.activeElement&&!u.current.contains($.activeElement))return;r.preventDefault(),r.stopPropagation(),o({type:1});break}}),F=O(r=>{c||r.key===G.Space&&r.preventDefault()}),C=O(r=>{var d,f;Re(r.currentTarget)||e.disabled||(c?(o({type:1}),(d=a.button)==null||d.focus()):(r.preventDefault(),r.stopPropagation(),a.popoverState===1&&(N==null||N(a.buttonId)),o({type:0}),(f=a.button)==null||f.focus()))}),l=O(r=>{r.preventDefault(),r.stopPropagation()}),g=a.popoverState===0,T=m.useMemo(()=>({open:g}),[g]),h=He(e,u),b=c?{ref:P,type:h,onKeyDown:E,onClick:C}:{ref:w,id:a.buttonId,type:h,"aria-expanded":e.disabled?void 0:a.popoverState===0,"aria-controls":a.panel?a.panelId:void 0,onKeyDown:E,onKeyUp:F,onClick:C,onMouseDown:l},v=Be(),y=O(()=>{let r=a.panel;if(!r)return;function d(){W(v.current,{[A.Forwards]:()=>V(r,L.First),[A.Backwards]:()=>V(r,L.Last)})===ce.Error&&V(he().filter(f=>f.dataset.headlessuiFocusGuard!=="true"),W(v.current,{[A.Forwards]:L.Next,[A.Backwards]:L.Previous}),{relativeTo:a.button})}d()});return _.createElement(_.Fragment,null,J({ourProps:b,theirProps:x,slot:T,defaultTag:tt,name:"Popover.Button"}),g&&!c&&p&&_.createElement(ie,{id:M,features:de.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:y}))}),nt="div",rt=re.RenderStrategy|re.Static,lt=X(function(e,s){let D=U(),{id:n=`headlessui-popover-overlay-${D}`,...x}=e,[{popoverState:a},o]=oe("Popover.Overlay"),p=K(s),u=Oe(),M=(()=>u!==null?u===ne.Open:a===0)(),S=O(c=>{if(Re(c.currentTarget))return c.preventDefault();o({type:1})}),N=m.useMemo(()=>({open:a===0}),[a]);return J({ourProps:{ref:p,id:n,"aria-hidden":!0,onClick:S},theirProps:x,slot:N,defaultTag:nt,features:rt,visible:M,name:"Popover.Overlay"})}),ot="div",st=re.RenderStrategy|re.Static,ct=X(function(e,s){let D=U(),{id:n=`headlessui-popover-panel-${D}`,focus:x=!1,...a}=e,[o,p]=oe("Popover.Panel"),{close:u,isPortalled:M}=ge("Popover.Panel"),S=`headlessui-focus-sentinel-before-${U()}`,N=`headlessui-focus-sentinel-after-${U()}`,c=m.useRef(null),k=K(c,s,h=>{p({type:4,panel:h})}),w=pe(c);ze(()=>(p({type:5,panelId:n}),()=>{p({type:5,panelId:null})}),[n,p]);let P=Oe(),$=(()=>P!==null?P===ne.Open:o.popoverState===0)(),E=O(h=>{var b;switch(h.key){case G.Escape:if(o.popoverState!==0||!c.current||w!=null&&w.activeElement&&!c.current.contains(w.activeElement))return;h.preventDefault(),h.stopPropagation(),p({type:1}),(b=o.button)==null||b.focus();break}});m.useEffect(()=>{var h;e.static||o.popoverState===1&&((h=e.unmount)==null||h)&&p({type:4,panel:null})},[o.popoverState,e.unmount,e.static,p]),m.useEffect(()=>{if(!x||o.popoverState!==0||!c.current)return;let h=w==null?void 0:w.activeElement;c.current.contains(h)||V(c.current,L.First)},[x,c,o.popoverState]);let F=m.useMemo(()=>({open:o.popoverState===0,close:u}),[o,u]),C={ref:k,id:n,onKeyDown:E,onBlur:x&&o.popoverState===0?h=>{var b,v,y,r,d;let f=h.relatedTarget;!f||!c.current||(b=c.current)!=null&&b.contains(f)||(p({type:1}),((y=(v=o.beforePanelSentinel.current)==null?void 0:v.contains)!=null&&y.call(v,f)||(d=(r=o.afterPanelSentinel.current)==null?void 0:r.contains)!=null&&d.call(r,f))&&f.focus({preventScroll:!0}))}:void 0,tabIndex:-1},l=Be(),g=O(()=>{let h=c.current;if(!h)return;function b(){W(l.current,{[A.Forwards]:()=>{var v;V(h,L.First)===ce.Error&&((v=o.afterPanelSentinel.current)==null||v.focus())},[A.Backwards]:()=>{var v;(v=o.button)==null||v.focus({preventScroll:!0})}})}b()}),T=O(()=>{let h=c.current;if(!h)return;function b(){W(l.current,{[A.Forwards]:()=>{var v;if(!o.button)return;let y=he(),r=y.indexOf(o.button),d=y.slice(0,r+1),f=[...y.slice(r+1),...d];for(let j of f.slice())if(j.dataset.headlessuiFocusGuard==="true"||(v=o.panel)!=null&&v.contains(j)){let I=f.indexOf(j);I!==-1&&f.splice(I,1)}V(f,L.First,{sorted:!1})},[A.Backwards]:()=>{var v;V(h,L.Previous)===ce.Error&&((v=o.button)==null||v.focus())}})}b()});return _.createElement(ye.Provider,{value:n},$&&M&&_.createElement(ie,{id:S,ref:o.beforePanelSentinel,features:de.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:g}),J({ourProps:C,theirProps:a,slot:F,defaultTag:ot,features:st,visible:$,name:"Popover.Panel"}),$&&M&&_.createElement(ie,{id:N,ref:o.afterPanelSentinel,features:de.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:T}))}),it="div",dt=X(function(e,s){let D=m.useRef(null),n=K(D,s),[x,a]=m.useState([]),o=O(w=>{a(P=>{let $=P.indexOf(w);if($!==-1){let E=P.slice();return E.splice($,1),E}return P})}),p=O(w=>(a(P=>[...P,w]),()=>o(w))),u=O(()=>{var w;let P=We(D);if(!P)return!1;let $=P.activeElement;return(w=D.current)!=null&&w.contains($)?!0:x.some(E=>{var F,C;return((F=P.getElementById(E.buttonId.current))==null?void 0:F.contains($))||((C=P.getElementById(E.panelId.current))==null?void 0:C.contains($))})}),M=O(w=>{for(let P of x)P.buttonId.current!==w&&P.close()}),S=m.useMemo(()=>({registerPopover:p,unregisterPopover:o,isFocusWithinPopoverGroup:u,closeOthers:M}),[p,o,u,M]),N=m.useMemo(()=>({}),[]),c=e,k={ref:n};return _.createElement(be.Provider,{value:S},J({ourProps:k,theirProps:c,slot:N,defaultTag:it,name:"Popover.Group"}))}),H=Object.assign(et,{Button:at,Overlay:lt,Panel:ct,Group:dt});const je=(e,s)=>{const D=new Date(e.start),n=new Date(e.end);let x=D;for(;x<n;){const a=new Date(x.getFullYear(),x.getMonth()+1,0),o=n>a?a:n,p={...e,start:x.toISOString(),end:o.toISOString(),entryNumber:e.entryNumber};s.push(p),x=new Date(a.getFullYear(),a.getMonth()+1,1)}},ut=(e,s,D)=>{e.forEach(n=>{const x=s.find(a=>a.id===n.id);if(x){const a={start:n.start,end:n.end,project:n.project,entryNumber:n.entryNumber,department:n.department};let o=[];je(a,o);for(let p=0;p<o.length;p++)x.unavailable.push(o[p])}else{let a=[];const o={start:n.start,end:n.end,project:n.project,entryNumber:n.entryNumber,department:n.department};je(o,a),s.push({id:n.id,color:n.color,department:n.department,name:n.name,lastname:n.lastname,unavailable:a})}})};var xe={},mt=Ce;Object.defineProperty(xe,"__esModule",{value:!0});var le=xe.default=void 0,pt=mt(Ee()),ht=Ie,ft=(0,pt.default)((0,ht.jsx)("path",{d:"M3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"DisabledByDefault");le=xe.default=ft;var Se={},vt=Ce;Object.defineProperty(Se,"__esModule",{value:!0});var De=Se.default=void 0,gt=vt(Ee()),bt=Ie,yt=(0,gt.default)((0,bt.jsx)("path",{d:"M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2zm-5 0H9V6h6v2z"}),"HomeRepairService");De=Se.default=yt;const ee={maxWidth:"500px",width:"100%",margin:"0.5rem"};function xt(e){const{data:s,setData:D,post:n,processing:x,errors:a,reset:o}=ue({staffingid:e.staffingid,firstname:e.firstname,lastname:e.lastname,projectName:e.projectName,startDate:e.startDate,endDate:e.endDate,description:""}),p=k=>{D(k.target.name,k.target.value)},[u,M]=m.useState({startDate:e.startDate,endDate:e.endDate}),S=k=>{M(k),s.startDate=k.startDate,s.endDate=k.endDate},N=k=>{k.preventDefault(),axios.post("/api/updateStaffing",s).then(()=>{window.location.href="Scheduler"}).catch(w=>{})},c=k=>{k.preventDefault(),axios.post("/api/deleteStaffing",e).then(()=>{window.location.href="Scheduler"})};return t(me,{children:i("div",{children:[t("div",{className:"flex justify-center align-center p-12",children:i("form",{children:[i("div",{style:ee,children:[t(B,{className:"mt-4",forInput:"firstname",value:"Vorname"}),t(q,{id:"firstname",name:"firstname",value:e.firstname,className:"mt-1 block w-full",autoComplete:"firstname",handleChange:p,locked:!0}),t(Y,{message:a.firstname,className:"mt-2"})]}),i("div",{style:ee,children:[t(B,{className:"mt-4",forInput:"lastname",value:"Zuname"}),t(q,{id:"lastname",name:"lastname",value:e.lastname,className:"mt-1 block w-full",autoComplete:"lastname",handleChange:p,locked:!0}),t(Y,{message:a.lastname,className:"mt-2"})]}),i("div",{style:ee,children:[t(B,{className:"mt-4",forInput:"lastname",value:"Projektname"}),t(Fe,{projects:e.projects,onHandleChange:p,value:e.projectName,id:"projectName",name:"projectName",autoComplete:"projectName"}),t(Y,{message:a.lastname,className:"mt-2"})]}),i("div",{style:ee,children:[t(B,{className:"mt-4",forInput:"datum",value:"Datum"}),t(Te,{value:u,onChange:S})]})]})}),i("div",{className:"flex justify-center align-center",children:[t("form",{onSubmit:N,children:t(Z,{type:"submit",text:"Update"})}),t("form",{onSubmit:c,children:t(Z,{type:"submit",text:"Delete"})})]})]})})}const te={maxWidth:"500px",width:"100%",margin:"0.5rem"};function St(e){const{data:s,setData:D,post:n,processing:x,errors:a,reset:o}=ue({personid:e.personid,firstname:e.firstname,lastname:e.lastname,projectName:"",startDate:"",endDate:"",description:""}),p=c=>{D(c.target.name,c.target.value)},[u,M]=m.useState({startDate:e.startDate,endDate:e.endDate}),S=c=>{M(c),s.startDate=c.startDate,s.endDate=c.endDate,console.log("newValue:",s.endDate)},N=c=>{c.preventDefault(),axios.post("/api/insertStaffing",s).then(()=>{window.location.href="Scheduler"}).catch(k=>{})};return t(me,{children:i("div",{children:[t("div",{className:"flex justify-center align-center p-12",children:i("form",{children:[i("div",{style:te,children:[t(B,{className:"mt-4",forInput:"firstname",value:"Vorname"}),t(q,{id:"firstname",name:"firstname",value:e.firstname,className:"mt-1 block w-full",autoComplete:"firstname",handleChange:p,locked:!0}),t(Y,{message:a.firstname,className:"mt-2"})]}),i("div",{style:te,children:[t(B,{className:"mt-4",forInput:"lastname",value:"Zuname"}),t(q,{id:"lastname",name:"lastname",value:e.lastname,className:"mt-1 block w-full",autoComplete:"lastname",handleChange:p,locked:!0}),t(Y,{message:a.lastname,className:"mt-2"})]}),i("div",{style:te,children:[t(B,{className:"mt-4",forInput:"lastname",value:"Projektname"}),t(Fe,{projects:e.projects,onHandleChange:p,value:e.projects,id:"projectName",name:"projectName",autoComplete:"projectName"})]}),i("div",{style:te,children:[t(B,{className:"mt-4",forInput:"datum",value:"Datum"}),t(Te,{value:u,onChange:S})]})]})}),t("div",{className:"flex justify-center align-center",children:t("form",{onSubmit:N,children:t(Z,{type:"submit",text:"Hinzufügen"})})})]})})}const Dt={overflowX:"auto",overflowY:"auto",maxHeight:"80vh",maxWidth:"100%",flexGrow:1},Nt={display:"flex",flexDirection:"column",height:"100%",padding:"1rem",margin:"70px 20px 20px 20px"},$e={position:"sticky",left:-1,background:"rgb(31 41 55)",zIndex:10,boxShadow:"2px 0px 4px rgba(0, 0, 0, 0.1)",borderRight:"1px solid #dee2e6",borderLeft:"1px solid #dee2e6",backgroundColor:"rgb(31 41 55)"};function Pt(e){const[s,D]=m.useState(new Date),n=new Date,x=new Date(n.getFullYear(),n.getMonth(),1),[a,o]=m.useState(x),p=new Date(n.getFullYear(),n.getMonth()+1,0),[u,M]=m.useState(p),[S,N]=m.useState(""),[c,k]=m.useState("");m.useEffect(()=>{C()},[c]);const w=()=>{const l=e.projects.map(g=>t("option",{value:g.name,children:g.name},g.name));return i(m.Fragment,{children:[t("label",{htmlFor:"project-filter",className:"mr-2",children:"Projektfilter:"}),i("select",{id:"project-filter",value:S,onChange:g=>N(g.target.value),className:"rounded-md border-gray-300",children:[t("option",{value:"",children:"Alle Projekte"}),l]})]})},P=()=>{const l=e.departments.map(g=>t("option",{value:g.name,children:g.name},g.name));return i(m.Fragment,{children:[t("label",{htmlFor:"department-filter",className:"mr-2",children:"Abteilungsfilter:"}),i("select",{id:"department-filter",value:c,onChange:g=>k(g.target.value),className:"rounded-md border-gray-300",children:[t("option",{value:"",children:"Alle Abteilungen"}),l]})]})},$=Math.floor((u.getTime()-a.getTime())/(1e3*60*60*24))+1,E=()=>{const l=[],g=["So","Mo","Di","Mi","Do","Fr","Sa"],T=["01","02","03","04","05","06","07","08","09","10","11","12"];let h=new Date(a);for(let b=0;b<$;b++){const v=g[h.getDay()],y=T[h.getMonth()],r=v+" "+h.getDate().toString().padStart(2,"0")+"."+y;l.push(t("th",{scope:"col",className:"border px-3 py-2 bg-gray-800 color text-gray-300 text-sm",children:r},b)),h.setDate(h.getDate()+1)}return l},F=[],C=()=>(ut(e.data,F,e.allPersons),F.filter(l=>c&&l.department!==c?!1:S?l.unavailable.some(({project:g})=>g===S):!0).map((l,g)=>{const T=[];l.unavailable.forEach(({start:b,end:v,project:y,entryNumber:r,department:d})=>{const f=new Date(b),j=new Date(v);if((!S||y===S)&&(!c||d===c)&&f.getTime()<=u.getTime()&&j.getTime()>=a.getTime()){const I=new Date(Math.max(f.getTime(),a.getTime())),R=new Date(Math.min(j.getTime(),u.getTime()));T.push({project:y,start:Math.floor((I.getTime()-a.getTime())/(1e3*60*60*24)),end:Math.floor((R.getTime()-a.getTime())/(1e3*60*60*24)),start_Date:b,end_Date:v,entryNumber:r})}});const h=[[]];return T.forEach(b=>{let v=!1;for(const y of h){const r=y[y.length-1];if(!r||b.start>r.end){y.push(b),v=!0;break}}v||h.push([b])}),h.map((b,v)=>{const y=[];let r=0;return b.forEach(({project:d,start:f,end:j,start_Date:I,end_Date:R,entryNumber:z})=>{r<f&&y.push(t("td",{colSpan:f-r,className:"border px-3 py-2"},`gap-${v}-${r}`)),y.push(t("td",{colSpan:j-f+1,className:`border px-3 py-2 bg-${l.color}-200 rounded-lg `,children:i(H,{className:"relative",children:[t(H.Button,{children:`${d}`}),t(H.Panel,{className:"fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center",children:i("div",{className:"bg-gray-400 rounded-lg",children:[t("div",{className:"bg-gray-400 rounded-lg mt-2 mr-2",children:i("div",{className:"flex justify-between items-start",children:[t("div",{className:"flex-grow text-center",children:t("h1",{children:"Projekt Einteilung"})}),t("div",{className:"flex-shrink-0",children:t("a",{className:"text-black-500 hover:text-black-700",href:"Scheduler",children:t(le,{})})})]})}),t(xt,{firstname:l.name,lastname:l.lastname,projectName:d,startDate:I,endDate:R,start:f,end:j,month:s.getMonth()+1,staffingid:z,projects:e.projects})]})})]})},`entry-${z}-person-${l.id}-project-${d}-start-${f}-end-${j}-color-${l.color}`)),r=j+1}),r<$&&y.push(t("td",{colSpan:$-r,className:"border px-4 py-2"},`gap-${v}-${r}`)),i("tr",{children:[v===0&&t("td",{rowSpan:h.length,className:"border px-3 py-2 bg-gray-800 color text-gray-300 text-m",style:$e,children:i(H,{className:"relative",children:[i(H.Button,{className:"text-left d-flex align-items-end",children:[t("div",{children:l.name}),t("div",{children:l.lastname}),i("div",{className:"d-flex align-items-end",children:[t(De,{}),t("span",{className:"relative top-0.5",children:"-"+l.department})]})]}),t(H.Panel,{className:"fixed z-50 top-0 left-0 w-screen h-screen text-black flex items-center justify-center",children:i("div",{className:"bg-gray-400 rounded-lg",children:[t("div",{className:"bg-gray-400 rounded-lg mt-2 mr-2",children:i("div",{className:"flex justify-between items-start",children:[t("div",{className:"flex-grow text-center",children:t("h1",{children:"Projekt Einteilung"})}),t("div",{className:"flex-shrink-0",children:t("a",{className:"text-black-500 hover:text-black-700",href:"Scheduler",children:t(le,{})})})]})}),t(St,{personid:l.id,firstname:l.name,lastname:l.lastname,projects:e.projects})]})})]})}),y]},`person-${l.id}-row-${v}-color-${l.color}`)})}));return i("div",{style:Nt,children:[t("div",{className:"flex justify-center mb-4 w-auto",children:i("div",{className:"flex items-center justify-center space-x-4",children:[w(),P(),t("label",{htmlFor:"start-date-picker",className:"mr-2",children:"Startdatum:"}),t(ae,{id:"start-date-picker",selected:a,onChange:l=>o(l),dateFormat:"dd.MM.yyyy",selectsStart:!0,startDate:a,endDate:u,className:"rounded-md border-gray-300"}),t("label",{htmlFor:"end-date-picker",className:"mr-2",children:"Enddatum:"}),t(ae,{id:"end-date-picker",selected:u,onChange:l=>M(l),dateFormat:"dd.MM.yyyy",selectsEnd:!0,startDate:a,endDate:u,minDate:a,className:"rounded-md border-gray-300"})]})}),t("div",{style:Dt,children:i("table",{className:"table-auto border-collapse border border-blue-800 w-full",children:[t("thead",{children:i("tr",{children:[t("th",{className:"border px-4 py-2 bg-gray-800 text-gray-300 text-left",style:$e,children:"Mitarbeiter"}),E()]})}),t("tbody",{children:C()})]})})]})}const ke=(e,s)=>{const D=new Date(e.start),n=new Date(e.end);let x=D;for(;x<n;){const a=new Date(x.getFullYear(),x.getMonth()+1,0),o=n>a?a:n,p={...e,start:x.toISOString(),end:o.toISOString(),entryNumber:e.entryNumber};s.push(p),x=new Date(a.getFullYear(),a.getMonth()+1,1)}},wt=(e,s,D)=>{e.forEach(n=>{const x=s.find(a=>a.id===n.id);if(x){const a={start:n.start,end:n.end,project:n.project,entryNumber:n.entryNumber,department:n.department};let o=[];ke(a,o);for(let p=0;p<o.length;p++)x.unavailable.push(o[p])}else{let a=[];const o={start:n.start,end:n.end,project:n.project,entryNumber:n.entryNumber,department:n.department};ke(o,a),s.push({id:n.id,color:n.color,department:n.department,name:n.name,lastname:n.lastname,unavailable:a})}})},se={maxWidth:"500px",width:"100%",margin:"0.5rem"},jt={backgroundColor:"white",borderRadius:"8px",padding:"2rem",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"};function $t(e){const{data:s,setData:D,post:n,processing:x,errors:a,reset:o}=ue({user_id:e.user.user.id,projectName:e.projectName,sliderValue:0,note:""});console.log(e);const p=N=>{D(N.target.name,N.target.value)},u=N=>{D("sliderValue",N.target.value)},M=N=>{N.preventDefault(),axios.post("/api/insertNote",s).then(()=>{window.location.href="Scheduler"}).catch(c=>{console.log(s)})},S=()=>{window.location.href="Scheduler"};return t(me,{children:i("div",{children:[t("div",{className:"flex justify-center align-center p-12",children:t("div",{style:jt,children:i("form",{children:[i("div",{style:se,children:[t(q,{id:"project",name:"project",value:e.projectName,locked:!0,className:"mt-1 block w-full",handleChange:p}),t(Y,{message:a.lastname,className:"mt-2"})]}),i("div",{style:se,children:[t(B,{className:"mt-4",forInput:"note",value:"Notiz"}),t("textarea",{id:"note",name:"note",value:s.note,className:"mt-1 block w-full border rounded p-2",rows:"5",autoComplete:"off",onChange:p}),t(Y,{message:a.note,className:"mt-2"})]}),i("div",{style:se,children:[t(B,{className:"mt-4",forInput:"slider",value:"Prozent (0-100)"}),t("input",{type:"range",id:"slider",name:"slider",min:"0",max:"100",value:s.sliderValue,className:"mt-1 block w-full",onChange:u}),i("span",{className:"mt-2 text-sm",children:[s.sliderValue,"%"]})]})]})})}),i("div",{className:"flex justify-center align-center",children:[t("form",{onSubmit:M,children:t(Z,{type:"submit",text:"Senden"})}),t("form",{onSubmit:S,children:t(Z,{type:"submit",text:"Zurück"})})]})]})})}const kt={overflowX:"auto",overflowY:"auto",maxHeight:"80vh",maxWidth:"100%",flexGrow:1},Mt={display:"flex",flexDirection:"column",height:"100%",padding:"1rem",margin:"70px 20px 20px 20px"},Me={position:"sticky",left:-1,background:"rgb(31 41 55)",zIndex:10,boxShadow:"2px 0px 4px rgba(0, 0, 0, 0.1)",borderRight:"1px solid #dee2e6",borderLeft:"1px solid #dee2e6",backgroundColor:"rgb(31 41 55)"};function Et(e){const[s,D]=m.useState(new Date),n=new Date,x=new Date(n.getFullYear(),n.getMonth(),1),[a,o]=m.useState(x),p=new Date(n.getFullYear(),n.getMonth()+1,0),[u,M]=m.useState(p),[S,N]=m.useState(""),[c,k]=m.useState(""),w=()=>{const l=e.projects.map(g=>t("option",{value:g.name,children:g.name},g.name));return i(m.Fragment,{children:[t("label",{htmlFor:"project-filter",className:"mr-2",children:"Projektfilter:"}),i("select",{id:"project-filter",value:S,onChange:g=>N(g.target.value),className:"rounded-md border-gray-300",children:[t("option",{value:"",children:"Alle Projekte"}),l]})]})};m.useEffect(()=>{C()},[c]);const P=()=>{const l=e.departments.map(g=>t("option",{value:g.name,children:g.name},g.name));return i(m.Fragment,{children:[t("label",{htmlFor:"department-filter",className:"mr-2",children:"Abteilungsfilter:"}),i("select",{id:"department-filter",value:c,onChange:g=>k(g.target.value),className:"rounded-md border-gray-300",children:[t("option",{value:"",children:"Alle Abteilungen"}),l]})]})},$=Math.floor((u.getTime()-a.getTime())/(1e3*60*60*24))+1,E=()=>{const l=[],g=["So","Mo","Di","Mi","Do","Fr","Sa"],T=["01","02","03","04","05","06","07","08","09","10","11","12"];let h=new Date(a);for(let b=0;b<$;b++){const v=g[h.getDay()],y=T[h.getMonth()],r=v+" "+h.getDate().toString().padStart(2,"0")+"."+y;l.push(t("th",{scope:"col",className:"border px-3 py-2 bg-gray-800 color text-gray-300 text-sm",children:r},b)),h.setDate(h.getDate()+1)}return l},F=[],C=()=>(wt(e.data,F,e.allPersons),F.filter(l=>c&&l.department!==c?!1:S?l.unavailable.some(({project:g})=>g===S):!0).map((l,g)=>{const T=[];l.unavailable.forEach(({start:b,end:v,project:y,entryNumber:r,department:d})=>{const f=new Date(b),j=new Date(v);if((!S||y===S)&&(!c||d===c)&&f.getTime()<=u.getTime()&&j.getTime()>=a.getTime()){const I=new Date(Math.max(f.getTime(),a.getTime())),R=new Date(Math.min(j.getTime(),u.getTime()));T.push({project:y,start:Math.floor((I.getTime()-a.getTime())/(1e3*60*60*24)),end:Math.floor((R.getTime()-a.getTime())/(1e3*60*60*24)),start_Date:b,end_Date:v,entryNumber:r})}});const h=[[]];return T.forEach(b=>{let v=!1;for(const y of h){const r=y[y.length-1];if(!r||b.start>r.end){y.push(b),v=!0;break}}v||h.push([b])}),h.map((b,v)=>{const y=[];let r=0;return b.forEach(({project:d,start:f,end:j,start_Date:I,end_Date:R,entryNumber:z})=>{r<f&&y.push(t("td",{colSpan:f-r,className:"border px-3 py-2"},`gap-${v}-${r}`)),y.push(t("td",{colSpan:j-f+1,className:`border px-3 py-2 bg-${l.color}-200 rounded-lg `,children:i(H,{className:"relative",children:[t(H.Button,{children:`${d}`}),t(H.Panel,{className:"fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center",children:i("div",{className:"bg-gray-400 rounded-lg",children:[t("div",{className:"bg-gray-400 rounded-lg mt-2 mr-2",children:i("div",{className:"flex justify-between items-start",children:[t("div",{className:"flex-grow text-center",children:t("h1",{children:"Notizen"})}),t("div",{className:"flex-shrink-0",children:t("a",{className:"text-black-500 hover:text-black-700",href:"Scheduler",children:t(le,{})})})]})}),t($t,{user:e.auth,firstname:l.name,lastname:l.lastname,projectName:d,startDate:I,endDate:R,start:f,end:j,month:s.getMonth()+1,staffingid:z,projects:e.projects})]})})]})},`entry-${z}-person-${l.id}-project-${d}-start-${f}-end-${j}-color-${l.color}`)),r=j+1}),r<$&&y.push(t("td",{colSpan:$-r,className:"border px-4 py-2"},`gap-${v}-${r}`)),i("tr",{children:[v===0&&i("td",{rowSpan:h.length,className:"border px-3 py-2 bg-gray-800 color text-gray-300 text-m",style:Me,children:[t("div",{children:l.name}),t("div",{children:l.lastname}),i("div",{className:"d-flex align-items-end",children:[t(De,{}),t("span",{className:"relative top-0.5",children:"-"+l.department})]})]}),y]},`person-${l.id}-row-${v}-color-${l.color}`)})}));return i("div",{style:Mt,children:[t("div",{className:"flex justify-center mb-4 w-auto",children:i("div",{className:"flex items-center justify-center space-x-4",children:[w(),P(),t("label",{htmlFor:"start-date-picker",className:"mr-2",children:"Startdatum:"}),t(ae,{id:"start-date-picker",selected:a,onChange:l=>o(l),dateFormat:"dd.MM.yyyy",selectsStart:!0,startDate:a,endDate:u,className:"rounded-md border-gray-300"}),t("label",{htmlFor:"end-date-picker",className:"mr-2",children:"Enddatum:"}),t(ae,{id:"end-date-picker",selected:u,onChange:l=>M(l),dateFormat:"dd.MM.yyyy",selectsEnd:!0,startDate:a,endDate:u,minDate:a,className:"rounded-md border-gray-300"})]})}),t("div",{style:kt,children:i("table",{className:"table-auto border-collapse border border-blue-800 w-full",children:[t("thead",{children:i("tr",{children:[t("th",{className:"border px-4 py-2 bg-gray-800 text-gray-300 text-left",style:Me,children:"Mitarbeiter"}),E()]})}),t("tbody",{children:C()})]})})]})}function zt(e){return e.auth.user.role==3?i("div",{children:[t(Ne,{title:"Scheduler"}),t(Pe,{auth:e.auth}),t("header",{className:"bg-white shadow",children:t("div",{className:"max-w-7xl mx-auto text-xl py-6 px-4 sm:px-6 lg:px-8",children:"Personaleinteilung"})}),t(Et,{auth:e.auth,allPersons:e.allPersons,data:e.data,projects:e.projects,departments:e.departments})]}):i("div",{children:[t(Ne,{title:"Scheduler"}),t(Pe,{auth:e.auth}),t("header",{className:"bg-white shadow",children:t("div",{className:"max-w-7xl mx-auto text-xl py-6 px-4 sm:px-6 lg:px-8",children:"Personaleinteilung"})}),t(Pt,{allPersons:e.allPersons,data:e.data,projects:e.projects,departments:e.departments})]})}export{zt as default};
