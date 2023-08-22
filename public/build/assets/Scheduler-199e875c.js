import{r as h,R as _,K as ue,j as t,F as me,a as d,n as Ne}from"./app-f6dc6595.js";import{s as He,r as Ee,i as Ce,a as Ie,L as Pe}from"./ChangeNavbarComponent-4f8e904a.js";import{H as ae}from"./react-datepicker-ed6d3435.js";import{D as Fe}from"./DropdownForm-6becc9ee.js";import{T as K,I as V}from"./TextInput-49bd6040.js";import{I as B}from"./InputLabel-245f1cdb.js";import{U as q}from"./UniversalButtonComponent-5e77f6d7.js";import{D as Te}from"./index.esm-9ad37da7.js";import{V as Z,y as U,T as Le,d as we,o as O,C as Ae,u as Y,p as ne,X,j as re,s as Oe,l as ze}from"./transition-33886f4e.js";import{n as pe,E as he,L as Ge,I as W,b as G,a as L,h as Ve,F as Ye,o as z,r as Re,e as We,N as ce}from"./use-owner-9e5db67b.js";import{E as Ue,n as Be,h as ie,a as de,s as A}from"./use-event-listener-52e43e69.js";var Ke=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ke||{}),qe=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(qe||{});let Ze={[0]:e=>({...e,popoverState:Y(e.popoverState,{[0]:1,[1]:0})}),[1](e){return e.popoverState===1?e:{...e,popoverState:1}},[2](e,r){return e.button===r.button?e:{...e,button:r.button}},[3](e,r){return e.buttonId===r.buttonId?e:{...e,buttonId:r.buttonId}},[4](e,r){return e.panel===r.panel?e:{...e,panel:r.panel}},[5](e,r){return e.panelId===r.panelId?e:{...e,panelId:r.panelId}}},fe=h.createContext(null);fe.displayName="PopoverContext";function oe(e){let r=h.useContext(fe);if(r===null){let p=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,oe),p}return r}let ve=h.createContext(null);ve.displayName="PopoverAPIContext";function ge(e){let r=h.useContext(ve);if(r===null){let p=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,ge),p}return r}let be=h.createContext(null);be.displayName="PopoverGroupContext";function _e(){return h.useContext(be)}let ye=h.createContext(null);ye.displayName="PopoverPanelContext";function Xe(){return h.useContext(ye)}function Je(e,r){return Y(r.type,Ze,e,r)}let Qe="div",et=Z(function(e,r){var p;let s=h.useRef(null),y=U(r,Le(c=>{s.current=c})),a=h.useRef([]),l=h.useReducer(Je,{popoverState:1,buttons:a,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:h.createRef(),afterPanelSentinel:h.createRef()}),[{popoverState:b,button:m,buttonId:E,panel:D,panelId:N,beforePanelSentinel:i,afterPanelSentinel:k},w]=l,P=pe((p=s.current)!=null?p:m),j=h.useMemo(()=>{if(!m||!D)return!1;for(let Q of document.querySelectorAll("body > *"))if(Number(Q==null?void 0:Q.contains(m))^Number(Q==null?void 0:Q.contains(D)))return!0;let c=he(),g=c.indexOf(m),M=(g+c.length-1)%c.length,F=(g+1)%c.length,R=c[M],J=c[F];return!D.contains(R)&&!D.contains(J)},[m,D]),C=we(E),T=we(N),I=h.useMemo(()=>({buttonId:C,panelId:T,close:()=>w({type:1})}),[C,T,w]),n=_e(),f=n==null?void 0:n.registerPopover,$=O(()=>{var c;return(c=n==null?void 0:n.isFocusWithinPopoverGroup())!=null?c:(P==null?void 0:P.activeElement)&&((m==null?void 0:m.contains(P.activeElement))||(D==null?void 0:D.contains(P.activeElement)))});h.useEffect(()=>f==null?void 0:f(I),[f,I]),Ue(P==null?void 0:P.defaultView,"focus",c=>{var g,M,F,R;b===0&&($()||!m||!D||c.target!==window&&((M=(g=i.current)==null?void 0:g.contains)!=null&&M.call(g,c.target)||(R=(F=k.current)==null?void 0:F.contains)!=null&&R.call(F,c.target)||w({type:1})))},!0),Ge([m,D],(c,g)=>{w({type:1}),Ve(g,Ye.Loose)||(c.preventDefault(),m==null||m.focus())},b===0);let u=O(c=>{w({type:1});let g=(()=>c?c instanceof HTMLElement?c:"current"in c&&c.current instanceof HTMLElement?c.current:m:m)();g==null||g.focus()}),x=h.useMemo(()=>({close:u,isPortalled:j}),[u,j]),v=h.useMemo(()=>({open:b===0,close:u}),[b,u]),S=e,o={ref:y};return _.createElement(fe.Provider,{value:l},_.createElement(ve.Provider,{value:x},_.createElement(Ae,{value:Y(b,{[0]:ne.Open,[1]:ne.Closed})},X({ourProps:o,theirProps:S,slot:v,defaultTag:Qe,name:"Popover"}))))}),tt="button",at=Z(function(e,r){let p=W(),{id:s=`headlessui-popover-button-${p}`,...y}=e,[a,l]=oe("Popover.Button"),{isPortalled:b}=ge("Popover.Button"),m=h.useRef(null),E=`headlessui-focus-sentinel-${W()}`,D=_e(),N=D==null?void 0:D.closeOthers,i=Xe()!==null;h.useEffect(()=>{if(!i)return l({type:3,buttonId:s}),()=>{l({type:3,buttonId:null})}},[i,s,l]);let[k]=h.useState(()=>Symbol()),w=U(m,r,i?null:o=>{if(o)a.buttons.current.push(k);else{let c=a.buttons.current.indexOf(k);c!==-1&&a.buttons.current.splice(c,1)}a.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),o&&l({type:2,button:o})}),P=U(m,r),j=pe(m),C=O(o=>{var c,g,M;if(i){if(a.popoverState===1)return;switch(o.key){case z.Space:case z.Enter:o.preventDefault(),(g=(c=o.target).click)==null||g.call(c),l({type:1}),(M=a.button)==null||M.focus();break}}else switch(o.key){case z.Space:case z.Enter:o.preventDefault(),o.stopPropagation(),a.popoverState===1&&(N==null||N(a.buttonId)),l({type:0});break;case z.Escape:if(a.popoverState!==0)return N==null?void 0:N(a.buttonId);if(!m.current||j!=null&&j.activeElement&&!m.current.contains(j.activeElement))return;o.preventDefault(),o.stopPropagation(),l({type:1});break}}),T=O(o=>{i||o.key===z.Space&&o.preventDefault()}),I=O(o=>{var c,g;Re(o.currentTarget)||e.disabled||(i?(l({type:1}),(c=a.button)==null||c.focus()):(o.preventDefault(),o.stopPropagation(),a.popoverState===1&&(N==null||N(a.buttonId)),l({type:0}),(g=a.button)==null||g.focus()))}),n=O(o=>{o.preventDefault(),o.stopPropagation()}),f=a.popoverState===0,$=h.useMemo(()=>({open:f}),[f]),u=He(e,m),x=i?{ref:P,type:u,onKeyDown:C,onClick:I}:{ref:w,id:a.buttonId,type:u,"aria-expanded":e.disabled?void 0:a.popoverState===0,"aria-controls":a.panel?a.panelId:void 0,onKeyDown:C,onKeyUp:T,onClick:I,onMouseDown:n},v=Be(),S=O(()=>{let o=a.panel;if(!o)return;function c(){Y(v.current,{[A.Forwards]:()=>G(o,L.First),[A.Backwards]:()=>G(o,L.Last)})===ce.Error&&G(he().filter(g=>g.dataset.headlessuiFocusGuard!=="true"),Y(v.current,{[A.Forwards]:L.Next,[A.Backwards]:L.Previous}),{relativeTo:a.button})}c()});return _.createElement(_.Fragment,null,X({ourProps:x,theirProps:y,slot:$,defaultTag:tt,name:"Popover.Button"}),f&&!i&&b&&_.createElement(ie,{id:E,features:de.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S}))}),nt="div",rt=re.RenderStrategy|re.Static,lt=Z(function(e,r){let p=W(),{id:s=`headlessui-popover-overlay-${p}`,...y}=e,[{popoverState:a},l]=oe("Popover.Overlay"),b=U(r),m=Oe(),E=(()=>m!==null?m===ne.Open:a===0)(),D=O(i=>{if(Re(i.currentTarget))return i.preventDefault();l({type:1})}),N=h.useMemo(()=>({open:a===0}),[a]);return X({ourProps:{ref:b,id:s,"aria-hidden":!0,onClick:D},theirProps:y,slot:N,defaultTag:nt,features:rt,visible:E,name:"Popover.Overlay"})}),ot="div",st=re.RenderStrategy|re.Static,ct=Z(function(e,r){let p=W(),{id:s=`headlessui-popover-panel-${p}`,focus:y=!1,...a}=e,[l,b]=oe("Popover.Panel"),{close:m,isPortalled:E}=ge("Popover.Panel"),D=`headlessui-focus-sentinel-before-${W()}`,N=`headlessui-focus-sentinel-after-${W()}`,i=h.useRef(null),k=U(i,r,u=>{b({type:4,panel:u})}),w=pe(i);ze(()=>(b({type:5,panelId:s}),()=>{b({type:5,panelId:null})}),[s,b]);let P=Oe(),j=(()=>P!==null?P===ne.Open:l.popoverState===0)(),C=O(u=>{var x;switch(u.key){case z.Escape:if(l.popoverState!==0||!i.current||w!=null&&w.activeElement&&!i.current.contains(w.activeElement))return;u.preventDefault(),u.stopPropagation(),b({type:1}),(x=l.button)==null||x.focus();break}});h.useEffect(()=>{var u;e.static||l.popoverState===1&&((u=e.unmount)==null||u)&&b({type:4,panel:null})},[l.popoverState,e.unmount,e.static,b]),h.useEffect(()=>{if(!y||l.popoverState!==0||!i.current)return;let u=w==null?void 0:w.activeElement;i.current.contains(u)||G(i.current,L.First)},[y,i,l.popoverState]);let T=h.useMemo(()=>({open:l.popoverState===0,close:m}),[l,m]),I={ref:k,id:s,onKeyDown:C,onBlur:y&&l.popoverState===0?u=>{var x,v,S,o,c;let g=u.relatedTarget;!g||!i.current||(x=i.current)!=null&&x.contains(g)||(b({type:1}),((S=(v=l.beforePanelSentinel.current)==null?void 0:v.contains)!=null&&S.call(v,g)||(c=(o=l.afterPanelSentinel.current)==null?void 0:o.contains)!=null&&c.call(o,g))&&g.focus({preventScroll:!0}))}:void 0,tabIndex:-1},n=Be(),f=O(()=>{let u=i.current;if(!u)return;function x(){Y(n.current,{[A.Forwards]:()=>{var v;G(u,L.First)===ce.Error&&((v=l.afterPanelSentinel.current)==null||v.focus())},[A.Backwards]:()=>{var v;(v=l.button)==null||v.focus({preventScroll:!0})}})}x()}),$=O(()=>{let u=i.current;if(!u)return;function x(){Y(n.current,{[A.Forwards]:()=>{var v;if(!l.button)return;let S=he(),o=S.indexOf(l.button),c=S.slice(0,o+1),g=[...S.slice(o+1),...c];for(let M of g.slice())if(M.dataset.headlessuiFocusGuard==="true"||(v=l.panel)!=null&&v.contains(M)){let F=g.indexOf(M);F!==-1&&g.splice(F,1)}G(g,L.First,{sorted:!1})},[A.Backwards]:()=>{var v;G(u,L.Previous)===ce.Error&&((v=l.button)==null||v.focus())}})}x()});return _.createElement(ye.Provider,{value:s},j&&E&&_.createElement(ie,{id:D,ref:l.beforePanelSentinel,features:de.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:f}),X({ourProps:I,theirProps:a,slot:T,defaultTag:ot,features:st,visible:j,name:"Popover.Panel"}),j&&E&&_.createElement(ie,{id:N,ref:l.afterPanelSentinel,features:de.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:$}))}),it="div",dt=Z(function(e,r){let p=h.useRef(null),s=U(p,r),[y,a]=h.useState([]),l=O(w=>{a(P=>{let j=P.indexOf(w);if(j!==-1){let C=P.slice();return C.splice(j,1),C}return P})}),b=O(w=>(a(P=>[...P,w]),()=>l(w))),m=O(()=>{var w;let P=We(p);if(!P)return!1;let j=P.activeElement;return(w=p.current)!=null&&w.contains(j)?!0:y.some(C=>{var T,I;return((T=P.getElementById(C.buttonId.current))==null?void 0:T.contains(j))||((I=P.getElementById(C.panelId.current))==null?void 0:I.contains(j))})}),E=O(w=>{for(let P of y)P.buttonId.current!==w&&P.close()}),D=h.useMemo(()=>({registerPopover:b,unregisterPopover:l,isFocusWithinPopoverGroup:m,closeOthers:E}),[b,l,m,E]),N=h.useMemo(()=>({}),[]),i=e,k={ref:s};return _.createElement(be.Provider,{value:D},X({ourProps:k,theirProps:i,slot:N,defaultTag:it,name:"Popover.Group"}))}),H=Object.assign(et,{Button:at,Overlay:lt,Panel:ct,Group:dt});const je=(e,r)=>{const p=new Date(e.start),s=new Date(e.end);let y=p;for(;y<s;){const a=new Date(y.getFullYear(),y.getMonth()+1,0),l=s>a?a:s,b={...e,start:y.toISOString(),end:l.toISOString(),entryNumber:e.entryNumber};r.push(b),y=new Date(a.getFullYear(),a.getMonth()+1,1)}},ut=(e,r)=>{e.forEach(p=>{const s=r.find(y=>y.id===p.id);if(s){const y={start:p.start,end:p.end,project:p.project,entryNumber:p.entryNumber,department:p.department};let a=[];je(y,a);for(let l=0;l<a.length;l++)s.unavailable.push(a[l])}else{let y=[];const a={start:p.start,end:p.end,project:p.project,entryNumber:p.entryNumber,department:p.department};je(a,y),r.push({id:p.id,color:p.color,department:p.department,name:p.name,lastname:p.lastname,unavailable:y})}})};var xe={},mt=Ce;Object.defineProperty(xe,"__esModule",{value:!0});var le=xe.default=void 0,pt=mt(Ee()),ht=Ie,ft=(0,pt.default)((0,ht.jsx)("path",{d:"M3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"DisabledByDefault");le=xe.default=ft;var Se={},vt=Ce;Object.defineProperty(Se,"__esModule",{value:!0});var De=Se.default=void 0,gt=vt(Ee()),bt=Ie,yt=(0,gt.default)((0,bt.jsx)("path",{d:"M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2zm-5 0H9V6h6v2z"}),"HomeRepairService");De=Se.default=yt;const ee={maxWidth:"500px",width:"100%",margin:"0.5rem"};function xt(e){const{data:r,setData:p,post:s,processing:y,errors:a,reset:l}=ue({staffingid:e.staffingid,firstname:e.firstname,lastname:e.lastname,projectName:e.projectName,startDate:e.startDate,endDate:e.endDate,description:""}),b=k=>{p(k.target.name,k.target.value)},[m,E]=h.useState({startDate:e.startDate,endDate:e.endDate}),D=k=>{E(k),r.startDate=k.startDate,r.endDate=k.endDate},N=k=>{k.preventDefault(),axios.post("/api/updateStaffing",r).then(()=>{window.location.href="Scheduler"}).catch(w=>{})},i=k=>{k.preventDefault(),axios.post("/api/deleteStaffing",e).then(()=>{window.location.href="Scheduler"})};return t(me,{children:d("div",{children:[t("div",{className:"flex justify-center align-center p-12",children:d("form",{children:[d("div",{style:ee,children:[t(B,{className:"mt-4",forInput:"firstname",value:"Vorname"}),t(K,{id:"firstname",name:"firstname",value:e.firstname,className:"mt-1 block w-full",autoComplete:"firstname",handleChange:b,locked:!0}),t(V,{message:a.firstname,className:"mt-2"})]}),d("div",{style:ee,children:[t(B,{className:"mt-4",forInput:"lastname",value:"Zuname"}),t(K,{id:"lastname",name:"lastname",value:e.lastname,className:"mt-1 block w-full",autoComplete:"lastname",handleChange:b,locked:!0}),t(V,{message:a.lastname,className:"mt-2"})]}),d("div",{style:ee,children:[t(B,{className:"mt-4",forInput:"lastname",value:"Projektname"}),t(Fe,{projects:e.projects,onHandleChange:b,value:e.projectName,id:"projectName",name:"projectName",autoComplete:"projectName"}),t(V,{message:a.lastname,className:"mt-2"})]}),d("div",{style:ee,children:[t(B,{className:"mt-4",forInput:"datum",value:"Datum"}),t(Te,{value:m,onChange:D})]})]})}),d("div",{className:"flex justify-center align-center",children:[t("form",{onSubmit:N,children:t(q,{type:"submit",text:"Update"})}),t("form",{onSubmit:i,children:t(q,{type:"submit",text:"Delete"})})]})]})})}const te={maxWidth:"500px",width:"100%",margin:"0.5rem"};function St(e){const{data:r,setData:p,post:s,processing:y,errors:a,reset:l}=ue({personid:e.personid,firstname:e.firstname,lastname:e.lastname,projectName:"",startDate:"",endDate:"",description:""}),b=i=>{p(i.target.name,i.target.value)},[m,E]=h.useState({startDate:e.startDate,endDate:e.endDate}),D=i=>{E(i),r.startDate=i.startDate,r.endDate=i.endDate,console.log("newValue:",r.endDate)},N=i=>{i.preventDefault(),axios.post("/api/insertStaffing",r).then(()=>{window.location.href="Scheduler"}).catch(k=>{})};return t(me,{children:d("div",{children:[t("div",{className:"flex justify-center align-center p-12",children:d("form",{children:[d("div",{style:te,children:[t(B,{className:"mt-4",forInput:"firstname",value:"Vorname"}),t(K,{id:"firstname",name:"firstname",value:e.firstname,className:"mt-1 block w-full",autoComplete:"firstname",handleChange:b,locked:!0}),t(V,{message:a.firstname,className:"mt-2"})]}),d("div",{style:te,children:[t(B,{className:"mt-4",forInput:"lastname",value:"Zuname"}),t(K,{id:"lastname",name:"lastname",value:e.lastname,className:"mt-1 block w-full",autoComplete:"lastname",handleChange:b,locked:!0}),t(V,{message:a.lastname,className:"mt-2"})]}),d("div",{style:te,children:[t(B,{className:"mt-4",forInput:"lastname",value:"Projektname"}),t(Fe,{projects:e.projects,onHandleChange:b,value:e.projects,id:"projectName",name:"projectName",autoComplete:"projectName"})]}),d("div",{style:te,children:[t(B,{className:"mt-4",forInput:"datum",value:"Datum"}),t(Te,{value:m,onChange:D})]})]})}),t("div",{className:"flex justify-center align-center",children:t("form",{onSubmit:N,children:t(q,{type:"submit",text:"Hinzufügen"})})})]})})}const Dt={overflowX:"auto",overflowY:"auto",maxHeight:"80vh",maxWidth:"100%",flexGrow:1},Nt={display:"flex",flexDirection:"column",height:"100%",padding:"1rem",margin:"70px 20px 20px 20px"},$e={position:"sticky",left:-1,background:"rgb(31 41 55)",zIndex:10,boxShadow:"2px 0px 4px rgba(0, 0, 0, 0.1)",borderRight:"1px solid #dee2e6",borderLeft:"1px solid #dee2e6",backgroundColor:"rgb(31 41 55)"};function Pt(e){const[r,p]=h.useState(new Date),s=new Date,y=new Date(s.getFullYear(),s.getMonth(),1),[a,l]=h.useState(y),b=new Date(s.getFullYear(),s.getMonth()+1,0),[m,E]=h.useState(b),[D,N]=h.useState(""),[i,k]=h.useState("");h.useEffect(()=>{I()},[i]);const w=()=>{const n=e.projects.map(f=>t("option",{value:f.name,children:f.name},f.name));return d(h.Fragment,{children:[t("label",{htmlFor:"project-filter",className:"mr-2",children:"Projektfilter:"}),d("select",{id:"project-filter",value:D,onChange:f=>N(f.target.value),className:"rounded-md border-gray-300",children:[t("option",{value:"",children:"Alle Projekte"}),n]})]})},P=()=>{const n=e.departments.map(f=>t("option",{value:f.name,children:f.name},f.name));return d(h.Fragment,{children:[t("label",{htmlFor:"department-filter",className:"mr-2",children:"Abteilungsfilter:"}),d("select",{id:"department-filter",value:i,onChange:f=>k(f.target.value),className:"rounded-md border-gray-300",children:[t("option",{value:"",children:"Alle Abteilungen"}),n]})]})},j=Math.floor((m.getTime()-a.getTime())/(1e3*60*60*24))+1,C=()=>{const n=[],f=["So","Mo","Di","Mi","Do","Fr","Sa"],$=["01","02","03","04","05","06","07","08","09","10","11","12"];let u=new Date(a);for(let x=0;x<j;x++){const v=f[u.getDay()],S=$[u.getMonth()],o=v+" "+u.getDate().toString().padStart(2,"0")+"."+S;n.push(t("th",{scope:"col",className:"border px-3 py-2 bg-gray-800 color text-gray-300 text-sm sticky top-0",children:o},x)),u.setDate(u.getDate()+1)}return n},T=[],I=()=>(ut(e.data,T),T.filter(n=>{if(i&&n.department!==i)return!1;if(D){let f=!1;for(let $=0;$<n.unavailable.length;$++)if(n.unavailable[$].project===D){f=!0;break}return f}return!0}).map(n=>{const f=[];n.unavailable.forEach(({start:u,end:x,project:v,entryNumber:S,department:o})=>{const c=new Date(u),g=new Date(x);if((!D||v===D)&&(!i||o===i)&&c.getTime()<=m.getTime()&&g.getTime()>=a.getTime()){const M=new Date(Math.max(c.getTime(),a.getTime())),F=new Date(Math.min(g.getTime(),m.getTime()));f.push({project:v,start:Math.floor((M.getTime()-a.getTime())/(1e3*60*60*24)),end:Math.floor((F.getTime()-a.getTime())/(1e3*60*60*24)),start_Date:u,end_Date:x,entryNumber:S})}});const $=[[]];return f.forEach(u=>{let x=!1;for(const v of $){const S=v[v.length-1];if(!S||u.start>S.end){v.push(u),x=!0;break}}x||$.push([u])}),$.map((u,x)=>{const v=[];let S=0;return u.forEach(({project:o,start:c,end:g,start_Date:M,end_Date:F,entryNumber:R})=>{S<c&&v.push(t("td",{colSpan:c-S,className:"border px-3 py-2"},`gap-${x}-${S}`)),v.push(t("td",{colSpan:g-c+1,className:`border px-3 py-2 bg-${n.color}-200 rounded-lg `,children:d(H,{className:"relative",children:[t(H.Button,{children:`${o}`}),t(H.Panel,{className:"fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center",children:d("div",{className:"bg-gray-400 rounded-lg",children:[t("div",{className:"bg-gray-400 rounded-lg mt-2 mr-2",children:d("div",{className:"flex justify-between items-start",children:[t("div",{className:"flex-grow text-center",children:t("h1",{children:"Projekt Einteilung"})}),t("div",{className:"flex-shrink-0",children:t("a",{className:"text-black-500 hover:text-black-700",href:"Scheduler",children:t(le,{})})})]})}),t(xt,{firstname:n.name,lastname:n.lastname,projectName:o,startDate:M,endDate:F,start:c,end:g,month:r.getMonth()+1,staffingid:R,projects:e.projects})]})})]})},`entry-${R}-person-${n.id}-project-${o}-start-${c}-end-${g}-color-${n.color}`)),S=g+1}),S<j&&v.push(t("td",{colSpan:j-S,className:"border px-4 py-2"},`gap-${x}-${S}`)),d("tr",{children:[x===0&&t("td",{rowSpan:$.length,className:"border px-3 py-2 bg-gray-800 color text-gray-300 text-m",style:$e,children:d(H,{className:"relative",children:[d(H.Button,{className:"text-left d-flex align-items-end",children:[t("div",{children:n.name}),t("div",{children:n.lastname}),d("div",{className:"d-flex align-items-end",children:[t(De,{}),t("span",{className:"relative top-0.5",children:"-"+n.department})]})]}),t(H.Panel,{className:"fixed z-50 top-0 left-0 w-screen h-screen text-black flex items-center justify-center",children:d("div",{className:"bg-gray-400 rounded-lg",children:[t("div",{className:"bg-gray-400 rounded-lg mt-2 mr-2",children:d("div",{className:"flex justify-between items-start",children:[t("div",{className:"flex-grow text-center",children:t("h1",{children:"Projekt Einteilung"})}),t("div",{className:"flex-shrink-0",children:t("a",{className:"text-black-500 hover:text-black-700",href:"Scheduler",children:t(le,{})})})]})}),t(St,{personid:n.id,firstname:n.name,lastname:n.lastname,projects:e.projects})]})})]})}),v]},`person-${n.id}-row-${x}-color-${n.color}`)})}));return d("div",{style:Nt,children:[t("div",{className:"flex justify-center mb-4 w-auto",children:d("div",{className:"flex items-center justify-center space-x-4",children:[w(),P(),t("label",{htmlFor:"start-date-picker",className:"mr-2",children:"Startdatum:"}),t(ae,{id:"start-date-picker",selected:a,onChange:n=>l(n),dateFormat:"dd.MM.yyyy",selectsStart:!0,startDate:a,endDate:m,className:"rounded-md border-gray-300"}),t("label",{htmlFor:"end-date-picker",className:"mr-2",children:"Enddatum:"}),t(ae,{id:"end-date-picker",selected:m,onChange:n=>E(n),dateFormat:"dd.MM.yyyy",selectsEnd:!0,startDate:a,endDate:m,minDate:a,className:"rounded-md border-gray-300"})]})}),t("div",{style:Dt,children:d("table",{className:"table-auto border-collapse border border-blue-800 w-full",children:[t("thead",{children:d("tr",{children:[t("th",{className:"border px-4 py-2 bg-gray-800 text-gray-300 text-left",style:$e,children:"Mitarbeiter"}),C()]})}),t("tbody",{children:I()})]})})]})}const ke=(e,r)=>{const p=new Date(e.start),s=new Date(e.end);let y=p;for(;y<s;){const a=new Date(y.getFullYear(),y.getMonth()+1,0),l=s>a?a:s,b={...e,start:y.toISOString(),end:l.toISOString(),entryNumber:e.entryNumber};r.push(b),y=new Date(a.getFullYear(),a.getMonth()+1,1)}},wt=(e,r,p)=>{e.forEach(s=>{const y=r.find(a=>a.id===s.id);if(y){const a={start:s.start,end:s.end,project:s.project,entryNumber:s.entryNumber,department:s.department};let l=[];ke(a,l);for(let b=0;b<l.length;b++)y.unavailable.push(l[b])}else{let a=[];const l={start:s.start,end:s.end,project:s.project,entryNumber:s.entryNumber,department:s.department};ke(l,a),r.push({id:s.id,color:s.color,department:s.department,name:s.name,lastname:s.lastname,unavailable:a})}})},se={maxWidth:"500px",width:"100%",margin:"0.5rem"},jt={backgroundColor:"white",borderRadius:"8px",padding:"2rem",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"};function $t(e){const{data:r,setData:p,post:s,processing:y,errors:a,reset:l}=ue({user_id:e.user.user.id,projectName:e.projectName,sliderValue:0,note:""});console.log(e);const b=N=>{p(N.target.name,N.target.value)},m=N=>{p("sliderValue",N.target.value)},E=N=>{N.preventDefault(),axios.post("/api/insertNote",r).then(()=>{window.location.href="Scheduler"}).catch(i=>{console.log(r)})},D=()=>{window.location.href="Scheduler"};return t(me,{children:d("div",{children:[t("div",{className:"flex justify-center align-center p-12",children:t("div",{style:jt,children:d("form",{children:[d("div",{style:se,children:[t(K,{id:"project",name:"project",value:e.projectName,locked:!0,className:"mt-1 block w-full",handleChange:b}),t(V,{message:a.lastname,className:"mt-2"})]}),d("div",{style:se,children:[t(B,{className:"mt-4",forInput:"note",value:"Notiz"}),t("textarea",{id:"note",name:"note",value:r.note,className:"mt-1 block w-full border rounded p-2",rows:"5",autoComplete:"off",onChange:b}),t(V,{message:a.note,className:"mt-2"})]}),d("div",{style:se,children:[t(B,{className:"mt-4",forInput:"slider",value:"Prozent (0-100)"}),t("input",{type:"range",id:"slider",name:"slider",min:"0",max:"100",value:r.sliderValue,className:"mt-1 block w-full",onChange:m}),d("span",{className:"mt-2 text-sm",children:[r.sliderValue,"%"]})]})]})})}),d("div",{className:"flex justify-center align-center",children:[t("form",{onSubmit:E,children:t(q,{type:"submit",text:"Senden"})}),t("form",{onSubmit:D,children:t(q,{type:"submit",text:"Zurück"})})]})]})})}const kt={overflowX:"auto",overflowY:"auto",maxHeight:"80vh",maxWidth:"100%",flexGrow:1},Mt={display:"flex",flexDirection:"column",height:"100%",padding:"1rem",margin:"70px 20px 20px 20px"},Me={position:"sticky",left:-1,background:"rgb(31 41 55)",zIndex:10,boxShadow:"2px 0px 4px rgba(0, 0, 0, 0.1)",borderRight:"1px solid #dee2e6",borderLeft:"1px solid #dee2e6",backgroundColor:"rgb(31 41 55)"};function Et(e){const[r,p]=h.useState(new Date),s=new Date,y=new Date(s.getFullYear(),s.getMonth(),1),[a,l]=h.useState(y),b=new Date(s.getFullYear(),s.getMonth()+1,0),[m,E]=h.useState(b),[D,N]=h.useState(""),[i,k]=h.useState(""),w=()=>{const n=e.projects.map(f=>t("option",{value:f.name,children:f.name},f.name));return d(h.Fragment,{children:[t("label",{htmlFor:"project-filter",className:"mr-2",children:"Projektfilter:"}),d("select",{id:"project-filter",value:D,onChange:f=>N(f.target.value),className:"rounded-md border-gray-300",children:[t("option",{value:"",children:"Alle Projekte"}),n]})]})};h.useEffect(()=>{I()},[i]);const P=()=>{const n=e.departments.map(f=>t("option",{value:f.name,children:f.name},f.name));return d(h.Fragment,{children:[t("label",{htmlFor:"department-filter",className:"mr-2",children:"Abteilungsfilter:"}),d("select",{id:"department-filter",value:i,onChange:f=>k(f.target.value),className:"rounded-md border-gray-300",children:[t("option",{value:"",children:"Alle Abteilungen"}),n]})]})},j=Math.floor((m.getTime()-a.getTime())/(1e3*60*60*24))+1,C=()=>{const n=[],f=["So","Mo","Di","Mi","Do","Fr","Sa"],$=["01","02","03","04","05","06","07","08","09","10","11","12"];let u=new Date(a);for(let x=0;x<j;x++){const v=f[u.getDay()],S=$[u.getMonth()],o=v+" "+u.getDate().toString().padStart(2,"0")+"."+S;n.push(t("th",{scope:"col",className:"border px-3 py-2 bg-gray-800 color text-gray-300 text-sm sticky top-0",children:o},x)),u.setDate(u.getDate()+1)}return n},T=[],I=()=>(wt(e.data,T,e.allPersons),T.filter(n=>{if(i&&n.department!==i)return!1;if(D){let f=!1;for(let $=0;$<n.unavailable.length;$++)if(n.unavailable[$].project===D){f=!0;break}return f}return!0}).map((n,f)=>{const $=[];n.unavailable.forEach(({start:x,end:v,project:S,entryNumber:o,department:c})=>{const g=new Date(x),M=new Date(v);if((!D||S===D)&&(!i||c===i)&&g.getTime()<=m.getTime()&&M.getTime()>=a.getTime()){const F=new Date(Math.max(g.getTime(),a.getTime())),R=new Date(Math.min(M.getTime(),m.getTime()));$.push({project:S,start:Math.floor((F.getTime()-a.getTime())/(1e3*60*60*24)),end:Math.floor((R.getTime()-a.getTime())/(1e3*60*60*24)),start_Date:x,end_Date:v,entryNumber:o})}});const u=[[]];return $.forEach(x=>{let v=!1;for(const S of u){const o=S[S.length-1];if(!o||x.start>o.end){S.push(x),v=!0;break}}v||u.push([x])}),u.map((x,v)=>{const S=[];let o=0;return x.forEach(({project:c,start:g,end:M,start_Date:F,end_Date:R,entryNumber:J})=>{o<g&&S.push(t("td",{colSpan:g-o,className:"border px-3 py-2"},`gap-${v}-${o}`)),S.push(t("td",{colSpan:M-g+1,className:`border px-3 py-2 bg-${n.color}-200 rounded-lg `,children:d(H,{className:"relative",children:[t(H.Button,{children:`${c}`}),t(H.Panel,{className:"fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center",children:d("div",{className:"bg-gray-400 rounded-lg",children:[t("div",{className:"bg-gray-400 rounded-lg mt-2 mr-2",children:d("div",{className:"flex justify-between items-start",children:[t("div",{className:"flex-grow text-center",children:t("h1",{children:"Notizen"})}),t("div",{className:"flex-shrink-0",children:t("a",{className:"text-black-500 hover:text-black-700",href:"Scheduler",children:t(le,{})})})]})}),t($t,{user:e.auth,firstname:n.name,lastname:n.lastname,projectName:c,startDate:F,endDate:R,start:g,end:M,month:r.getMonth()+1,staffingid:J,projects:e.projects})]})})]})},`entry-${J}-person-${n.id}-project-${c}-start-${g}-end-${M}-color-${n.color}`)),o=M+1}),o<j&&S.push(t("td",{colSpan:j-o,className:"border px-4 py-2"},`gap-${v}-${o}`)),d("tr",{children:[v===0&&d("td",{rowSpan:u.length,className:"border px-3 py-2 bg-gray-800 color text-gray-300 text-m",style:Me,children:[t("div",{children:n.name}),t("div",{children:n.lastname}),d("div",{className:"d-flex align-items-end",children:[t(De,{}),t("span",{className:"relative top-0.5",children:"-"+n.department})]})]}),S]},`person-${n.id}-row-${v}-color-${n.color}`)})}));return d("div",{style:Mt,children:[t("div",{className:"flex justify-center mb-4 w-auto",children:d("div",{className:"flex items-center justify-center space-x-4",children:[w(),P(),t("label",{htmlFor:"start-date-picker",className:"mr-2",children:"Startdatum:"}),t(ae,{id:"start-date-picker",selected:a,onChange:n=>l(n),dateFormat:"dd.MM.yyyy",selectsStart:!0,startDate:a,endDate:m,className:"rounded-md border-gray-300"}),t("label",{htmlFor:"end-date-picker",className:"mr-2",children:"Enddatum:"}),t(ae,{id:"end-date-picker",selected:m,onChange:n=>E(n),dateFormat:"dd.MM.yyyy",selectsEnd:!0,startDate:a,endDate:m,minDate:a,className:"rounded-md border-gray-300"})]})}),t("div",{style:kt,children:d("table",{className:"table-auto border-collapse border border-blue-800 w-full",children:[t("thead",{children:d("tr",{children:[t("th",{className:"border px-4 py-2 bg-gray-800 text-gray-300 text-left",style:Me,children:"Mitarbeiter"}),C()]})}),t("tbody",{children:I()})]})})]})}function zt(e){return e.auth.user.role==3?d("div",{children:[t(Ne,{title:"Scheduler"}),t(Pe,{auth:e.auth}),t("header",{className:"bg-white shadow",children:t("div",{className:"max-w-7xl mx-auto text-xl py-6 px-4 sm:px-6 lg:px-8",children:"Personaleinteilung"})}),t(Et,{auth:e.auth,allPersons:e.allPersons,data:e.data,projects:e.projects,departments:e.departments})]}):d("div",{children:[t(Ne,{title:"Scheduler"}),t(Pe,{auth:e.auth}),t("header",{className:"bg-white shadow",children:t("div",{className:"max-w-7xl mx-auto text-xl py-6 px-4 sm:px-6 lg:px-8",children:"Personaleinteilung"})}),t(Pt,{allPersons:e.allPersons,data:e.data,projects:e.projects,departments:e.departments})]})}export{zt as default};