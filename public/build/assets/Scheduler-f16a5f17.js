import{r as i,R as B,K as Se,j as t,F as Pe,a as v,n as $e}from"./app-12650165.js";import{s as ke,r as Ce,i as Me,a as Fe,L as Te}from"./ChangeNavbarComponent-d1485a32.js";import{H as ge}from"./react-datepicker-4c0e04ba.js";import{D as De}from"./DropdownForm-d25cc8a0.js";import{T as ee,I as V}from"./TextInput-8a672dd7.js";import{I as L}from"./InputLabel-691b96a6.js";import{U as re}from"./UniversalButtonComponent-d4c5054f.js";import{D as Ne}from"./index.esm-64f79c49.js";import{V as Y,y as z,T as Oe,d as be,o as C,C as Be,u as U,p as te,X as q,j as ae,s as we,l as Re}from"./transition-2d633456.js";import{n as ce,E as ie,L as Le,h as Ge,F as _e,I as W,o as A,r as Ee,b as H,a as G,e as Ae,N as le}from"./use-owner-859edfb2.js";import{E as He,n as Ie,h as oe,a as se,s as _}from"./use-event-listener-b85232aa.js";var Ue=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ue||{}),Ke=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(Ke||{});let We={[0]:e=>({...e,popoverState:U(e.popoverState,{[0]:1,[1]:0})}),[1](e){return e.popoverState===1?e:{...e,popoverState:1}},[2](e,l){return e.button===l.button?e:{...e,button:l.button}},[3](e,l){return e.buttonId===l.buttonId?e:{...e,buttonId:l.buttonId}},[4](e,l){return e.panel===l.panel?e:{...e,panel:l.panel}},[5](e,l){return e.panelId===l.panelId?e:{...e,panelId:l.panelId}}},de=i.createContext(null);de.displayName="PopoverContext";function ne(e){let l=i.useContext(de);if(l===null){let b=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(b,ne),b}return l}let me=i.createContext(null);me.displayName="PopoverAPIContext";function pe(e){let l=i.useContext(me);if(l===null){let b=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(b,pe),b}return l}let fe=i.createContext(null);fe.displayName="PopoverGroupContext";function je(){return i.useContext(fe)}let he=i.createContext(null);he.displayName="PopoverPanelContext";function ze(){return i.useContext(he)}function Ve(e,l){return U(l.type,We,e,l)}let Ye="div",qe=Y(function(e,l){var b;let u=i.useRef(null),P=z(l,Oe(o=>{u.current=o})),a=i.useRef([]),n=i.useReducer(Ve,{popoverState:1,buttons:a,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:i.createRef(),afterPanelSentinel:i.createRef()}),[{popoverState:m,button:c,buttonId:$,panel:y,panelId:I,beforePanelSentinel:s,afterPanelSentinel:w},x]=n,g=ce((b=u.current)!=null?b:c),E=i.useMemo(()=>{if(!c||!y)return!1;for(let X of document.querySelectorAll("body > *"))if(Number(X==null?void 0:X.contains(c))^Number(X==null?void 0:X.contains(y)))return!0;let o=ie(),d=o.indexOf(c),j=(d+o.length-1)%o.length,T=(d+1)%o.length,R=o[j],Z=o[T];return!y.contains(R)&&!y.contains(Z)},[c,y]),k=be($),M=be(I),F=i.useMemo(()=>({buttonId:k,panelId:M,close:()=>x({type:1})}),[k,M,x]),f=je(),D=f==null?void 0:f.registerPopover,O=C(()=>{var o;return(o=f==null?void 0:f.isFocusWithinPopoverGroup())!=null?o:(g==null?void 0:g.activeElement)&&((c==null?void 0:c.contains(g.activeElement))||(y==null?void 0:y.contains(g.activeElement)))});i.useEffect(()=>D==null?void 0:D(F),[D,F]),He(g==null?void 0:g.defaultView,"focus",o=>{var d,j,T,R;m===0&&(O()||!c||!y||o.target!==window&&((j=(d=s.current)==null?void 0:d.contains)!=null&&j.call(d,o.target)||(R=(T=w.current)==null?void 0:T.contains)!=null&&R.call(T,o.target)||x({type:1})))},!0),Le([c,y],(o,d)=>{x({type:1}),Ge(d,_e.Loose)||(o.preventDefault(),c==null||c.focus())},m===0);let p=C(o=>{x({type:1});let d=(()=>o?o instanceof HTMLElement?o:"current"in o&&o.current instanceof HTMLElement?o.current:c:c)();d==null||d.focus()}),S=i.useMemo(()=>({close:p,isPortalled:E}),[p,E]),h=i.useMemo(()=>({open:m===0,close:p}),[m,p]),N=e,r={ref:P};return B.createElement(de.Provider,{value:n},B.createElement(me.Provider,{value:S},B.createElement(Be,{value:U(m,{[0]:te.Open,[1]:te.Closed})},q({ourProps:r,theirProps:N,slot:h,defaultTag:Ye,name:"Popover"}))))}),Ze="button",Xe=Y(function(e,l){let b=W(),{id:u=`headlessui-popover-button-${b}`,...P}=e,[a,n]=ne("Popover.Button"),{isPortalled:m}=pe("Popover.Button"),c=i.useRef(null),$=`headlessui-focus-sentinel-${W()}`,y=je(),I=y==null?void 0:y.closeOthers,s=ze()!==null;i.useEffect(()=>{if(!s)return n({type:3,buttonId:u}),()=>{n({type:3,buttonId:null})}},[s,u,n]);let[w]=i.useState(()=>Symbol()),x=z(c,l,s?null:r=>{if(r)a.buttons.current.push(w);else{let o=a.buttons.current.indexOf(w);o!==-1&&a.buttons.current.splice(o,1)}a.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),r&&n({type:2,button:r})}),g=z(c,l),E=ce(c),k=C(r=>{var o,d,j;if(s){if(a.popoverState===1)return;switch(r.key){case A.Space:case A.Enter:r.preventDefault(),(d=(o=r.target).click)==null||d.call(o),n({type:1}),(j=a.button)==null||j.focus();break}}else switch(r.key){case A.Space:case A.Enter:r.preventDefault(),r.stopPropagation(),a.popoverState===1&&(I==null||I(a.buttonId)),n({type:0});break;case A.Escape:if(a.popoverState!==0)return I==null?void 0:I(a.buttonId);if(!c.current||E!=null&&E.activeElement&&!c.current.contains(E.activeElement))return;r.preventDefault(),r.stopPropagation(),n({type:1});break}}),M=C(r=>{s||r.key===A.Space&&r.preventDefault()}),F=C(r=>{var o,d;Ee(r.currentTarget)||e.disabled||(s?(n({type:1}),(o=a.button)==null||o.focus()):(r.preventDefault(),r.stopPropagation(),a.popoverState===1&&(I==null||I(a.buttonId)),n({type:0}),(d=a.button)==null||d.focus()))}),f=C(r=>{r.preventDefault(),r.stopPropagation()}),D=a.popoverState===0,O=i.useMemo(()=>({open:D}),[D]),p=ke(e,c),S=s?{ref:g,type:p,onKeyDown:k,onClick:F}:{ref:x,id:a.buttonId,type:p,"aria-expanded":e.disabled?void 0:a.popoverState===0,"aria-controls":a.panel?a.panelId:void 0,onKeyDown:k,onKeyUp:M,onClick:F,onMouseDown:f},h=Ie(),N=C(()=>{let r=a.panel;if(!r)return;function o(){U(h.current,{[_.Forwards]:()=>H(r,G.First),[_.Backwards]:()=>H(r,G.Last)})===le.Error&&H(ie().filter(d=>d.dataset.headlessuiFocusGuard!=="true"),U(h.current,{[_.Forwards]:G.Next,[_.Backwards]:G.Previous}),{relativeTo:a.button})}o()});return B.createElement(B.Fragment,null,q({ourProps:S,theirProps:P,slot:O,defaultTag:Ze,name:"Popover.Button"}),D&&!s&&m&&B.createElement(oe,{id:$,features:se.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:N}))}),Je="div",Qe=ae.RenderStrategy|ae.Static,et=Y(function(e,l){let b=W(),{id:u=`headlessui-popover-overlay-${b}`,...P}=e,[{popoverState:a},n]=ne("Popover.Overlay"),m=z(l),c=we(),$=(()=>c!==null?c===te.Open:a===0)(),y=C(s=>{if(Ee(s.currentTarget))return s.preventDefault();n({type:1})}),I=i.useMemo(()=>({open:a===0}),[a]);return q({ourProps:{ref:m,id:u,"aria-hidden":!0,onClick:y},theirProps:P,slot:I,defaultTag:Je,features:Qe,visible:$,name:"Popover.Overlay"})}),tt="div",at=ae.RenderStrategy|ae.Static,nt=Y(function(e,l){let b=W(),{id:u=`headlessui-popover-panel-${b}`,focus:P=!1,...a}=e,[n,m]=ne("Popover.Panel"),{close:c,isPortalled:$}=pe("Popover.Panel"),y=`headlessui-focus-sentinel-before-${W()}`,I=`headlessui-focus-sentinel-after-${W()}`,s=i.useRef(null),w=z(s,l,p=>{m({type:4,panel:p})}),x=ce(s);Re(()=>(m({type:5,panelId:u}),()=>{m({type:5,panelId:null})}),[u,m]);let g=we(),E=(()=>g!==null?g===te.Open:n.popoverState===0)(),k=C(p=>{var S;switch(p.key){case A.Escape:if(n.popoverState!==0||!s.current||x!=null&&x.activeElement&&!s.current.contains(x.activeElement))return;p.preventDefault(),p.stopPropagation(),m({type:1}),(S=n.button)==null||S.focus();break}});i.useEffect(()=>{var p;e.static||n.popoverState===1&&((p=e.unmount)==null||p)&&m({type:4,panel:null})},[n.popoverState,e.unmount,e.static,m]),i.useEffect(()=>{if(!P||n.popoverState!==0||!s.current)return;let p=x==null?void 0:x.activeElement;s.current.contains(p)||H(s.current,G.First)},[P,s,n.popoverState]);let M=i.useMemo(()=>({open:n.popoverState===0,close:c}),[n,c]),F={ref:w,id:u,onKeyDown:k,onBlur:P&&n.popoverState===0?p=>{var S,h,N,r,o;let d=p.relatedTarget;!d||!s.current||(S=s.current)!=null&&S.contains(d)||(m({type:1}),((N=(h=n.beforePanelSentinel.current)==null?void 0:h.contains)!=null&&N.call(h,d)||(o=(r=n.afterPanelSentinel.current)==null?void 0:r.contains)!=null&&o.call(r,d))&&d.focus({preventScroll:!0}))}:void 0,tabIndex:-1},f=Ie(),D=C(()=>{let p=s.current;if(!p)return;function S(){U(f.current,{[_.Forwards]:()=>{var h;H(p,G.First)===le.Error&&((h=n.afterPanelSentinel.current)==null||h.focus())},[_.Backwards]:()=>{var h;(h=n.button)==null||h.focus({preventScroll:!0})}})}S()}),O=C(()=>{let p=s.current;if(!p)return;function S(){U(f.current,{[_.Forwards]:()=>{var h;if(!n.button)return;let N=ie(),r=N.indexOf(n.button),o=N.slice(0,r+1),d=[...N.slice(r+1),...o];for(let j of d.slice())if(j.dataset.headlessuiFocusGuard==="true"||(h=n.panel)!=null&&h.contains(j)){let T=d.indexOf(j);T!==-1&&d.splice(T,1)}H(d,G.First,{sorted:!1})},[_.Backwards]:()=>{var h;H(p,G.Previous)===le.Error&&((h=n.button)==null||h.focus())}})}S()});return B.createElement(he.Provider,{value:u},E&&$&&B.createElement(oe,{id:y,ref:n.beforePanelSentinel,features:se.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:D}),q({ourProps:F,theirProps:a,slot:M,defaultTag:tt,features:at,visible:E,name:"Popover.Panel"}),E&&$&&B.createElement(oe,{id:I,ref:n.afterPanelSentinel,features:se.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:O}))}),rt="div",lt=Y(function(e,l){let b=i.useRef(null),u=z(b,l),[P,a]=i.useState([]),n=C(x=>{a(g=>{let E=g.indexOf(x);if(E!==-1){let k=g.slice();return k.splice(E,1),k}return g})}),m=C(x=>(a(g=>[...g,x]),()=>n(x))),c=C(()=>{var x;let g=Ae(b);if(!g)return!1;let E=g.activeElement;return(x=b.current)!=null&&x.contains(E)?!0:P.some(k=>{var M,F;return((M=g.getElementById(k.buttonId.current))==null?void 0:M.contains(E))||((F=g.getElementById(k.panelId.current))==null?void 0:F.contains(E))})}),$=C(x=>{for(let g of P)g.buttonId.current!==x&&g.close()}),y=i.useMemo(()=>({registerPopover:m,unregisterPopover:n,isFocusWithinPopoverGroup:c,closeOthers:$}),[m,n,c,$]),I=i.useMemo(()=>({}),[]),s=e,w={ref:u};return B.createElement(fe.Provider,{value:y},q({ourProps:w,theirProps:s,slot:I,defaultTag:rt,name:"Popover.Group"}))}),K=Object.assign(qe,{Button:Xe,Overlay:et,Panel:nt,Group:lt});const ye=(e,l)=>{const b=new Date(e.start),u=new Date(e.end);let P=b;for(;P<u;){const a=new Date(P.getFullYear(),P.getMonth()+1,0),n=u>a?a:u,m={...e,start:P.toISOString(),end:n.toISOString(),entryNumber:e.entryNumber};l.push(m),P=new Date(a.getFullYear(),a.getMonth()+1,1)}},ot=(e,l,b)=>{e.forEach(u=>{const P=l.find(a=>a.id===u.id);if(P){const a={start:u.start,end:u.end,project:u.project,entryNumber:u.entryNumber,department:u.department};let n=[];ye(a,n);for(let m=0;m<n.length;m++)P.unavailable.push(n[m])}else{let a=[];const n={start:u.start,end:u.end,project:u.project,entryNumber:u.entryNumber,department:u.department};ye(n,a),l.push({id:u.id,color:u.color,department:u.department,name:u.name,lastname:u.lastname,unavailable:a})}})};var ve={},st=Me;Object.defineProperty(ve,"__esModule",{value:!0});var ue=ve.default=void 0,ut=st(Ce()),ct=Fe,it=(0,ut.default)((0,ct.jsx)("path",{d:"M3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"DisabledByDefault");ue=ve.default=it;const J={maxWidth:"500px",width:"100%",margin:"0.5rem"};function dt(e){const{data:l,setData:b,post:u,processing:P,errors:a,reset:n}=Se({staffingid:e.staffingid,firstname:e.firstname,lastname:e.lastname,projectName:e.projectName,startDate:e.startDate,endDate:e.endDate,description:""}),m=w=>{b(w.target.name,w.target.value)},[c,$]=i.useState({startDate:e.startDate,endDate:e.endDate}),y=w=>{$(w),l.startDate=w.startDate,l.endDate=w.endDate},I=w=>{w.preventDefault(),axios.post("/api/updateStaffing",l).then(()=>{window.location.href="Scheduler"}).catch(x=>{})},s=w=>{w.preventDefault(),axios.post("/api/deleteStaffing",e).then(()=>{window.location.href="Scheduler"})};return t(Pe,{children:v("div",{children:[t("div",{className:"flex justify-center align-center p-12",children:v("form",{children:[v("div",{style:J,children:[t(L,{className:"mt-4",forInput:"firstname",value:"Vorname"}),t(ee,{id:"firstname",name:"firstname",value:e.firstname,className:"mt-1 block w-full",autoComplete:"firstname",handleChange:m,locked:!0}),t(V,{message:a.firstname,className:"mt-2"})]}),v("div",{style:J,children:[t(L,{className:"mt-4",forInput:"lastname",value:"Zuname"}),t(ee,{id:"lastname",name:"lastname",value:e.lastname,className:"mt-1 block w-full",autoComplete:"lastname",handleChange:m,locked:!0}),t(V,{message:a.lastname,className:"mt-2"})]}),v("div",{style:J,children:[t(L,{className:"mt-4",forInput:"lastname",value:"Projektname"}),t(De,{projects:e.projects,onHandleChange:m,value:e.projectName,id:"projectName",name:"projectName",autoComplete:"projectName"}),t(V,{message:a.lastname,className:"mt-2"})]}),v("div",{style:J,children:[t(L,{className:"mt-4",forInput:"datum",value:"Datum"}),t(Ne,{value:c,onChange:y})]})]})}),v("div",{className:"flex justify-center align-center",children:[t("form",{onSubmit:I,children:t(re,{type:"submit",text:"Update"})}),t("form",{onSubmit:s,children:t(re,{type:"submit",text:"Delete"})})]})]})})}const Q={maxWidth:"500px",width:"100%",margin:"0.5rem"};function mt(e){const{data:l,setData:b,post:u,processing:P,errors:a,reset:n}=Se({personid:e.personid,firstname:e.firstname,lastname:e.lastname,projectName:"",startDate:"",endDate:"",description:""}),m=s=>{b(s.target.name,s.target.value)},[c,$]=i.useState({startDate:e.startDate,endDate:e.endDate}),y=s=>{$(s),l.startDate=s.startDate,l.endDate=s.endDate,console.log("newValue:",l.endDate)},I=s=>{s.preventDefault(),axios.post("/api/insertStaffing",l).then(()=>{window.location.href="Scheduler"}).catch(w=>{})};return t(Pe,{children:v("div",{children:[t("div",{className:"flex justify-center align-center p-12",children:v("form",{children:[v("div",{style:Q,children:[t(L,{className:"mt-4",forInput:"firstname",value:"Vorname"}),t(ee,{id:"firstname",name:"firstname",value:e.firstname,className:"mt-1 block w-full",autoComplete:"firstname",handleChange:m,locked:!0}),t(V,{message:a.firstname,className:"mt-2"})]}),v("div",{style:Q,children:[t(L,{className:"mt-4",forInput:"lastname",value:"Zuname"}),t(ee,{id:"lastname",name:"lastname",value:e.lastname,className:"mt-1 block w-full",autoComplete:"lastname",handleChange:m,locked:!0}),t(V,{message:a.lastname,className:"mt-2"})]}),v("div",{style:Q,children:[t(L,{className:"mt-4",forInput:"lastname",value:"Projektname"}),t(De,{projects:e.projects,onHandleChange:m,value:e.projects,id:"projectName",name:"projectName",autoComplete:"projectName"})]}),v("div",{style:Q,children:[t(L,{className:"mt-4",forInput:"datum",value:"Datum"}),t(Ne,{value:c,onChange:y})]})]})}),t("div",{className:"flex justify-center align-center",children:t("form",{onSubmit:I,children:t(re,{type:"submit",text:"Hinzufügen"})})})]})})}const pt={overflowX:"auto",overflowY:"auto",maxHeight:"80vh",maxWidth:"100%",flexGrow:1},ft={display:"flex",flexDirection:"column",height:"100%",padding:"1rem",margin:"70px 20px 20px 20px"},xe={position:"sticky",left:-1,background:"rgb(31 41 55)",zIndex:10,boxShadow:"2px 0px 4px rgba(0, 0, 0, 0.1)",borderRight:"1px solid #dee2e6",borderLeft:"1px solid #dee2e6",backgroundColor:"rgb(31 41 55)"};function ht(e){const[l,b]=i.useState(new Date),u=new Date,P=new Date(u.getFullYear(),u.getMonth(),1),[a,n]=i.useState(P),m=new Date(u.getFullYear(),u.getMonth()+1,0),[c,$]=i.useState(m),[y,I]=i.useState(""),[s,w]=i.useState(""),x=()=>{const f=e.projects.map(D=>t("option",{value:D.name,children:D.name},D.name));return v(i.Fragment,{children:[t("label",{htmlFor:"project-filter",className:"mr-2",children:"Projektfilter:"}),v("select",{id:"project-filter",value:y,onChange:D=>I(D.target.value),className:"rounded-md border-gray-300",children:[t("option",{value:"",children:"Alle Projekte"}),f]})]})},g=()=>{const f=e.departments.map(D=>t("option",{value:D.name,children:D.name},D.name));return v(i.Fragment,{children:[t("label",{htmlFor:"department-filter",className:"mr-2",children:"Abteilungsfilter:"}),v("select",{id:"department-filter",value:s,onChange:D=>w(D.target.value),className:"rounded-md border-gray-300",children:[t("option",{value:"",children:"Alle Abteilungen"}),f]})]})},E=Math.floor((c.getTime()-a.getTime())/(1e3*60*60*24))+1,k=()=>{const f=[],D=["So","Mo","Di","Mi","Do","Fr","Sa"],O=["01","02","03","04","05","06","07","08","09","10","11","12"];let p=new Date(a);for(let S=0;S<E;S++){const h=D[p.getDay()],N=O[p.getMonth()],r=h+" "+p.getDate().toString().padStart(2,"0")+"."+N;f.push(t("th",{scope:"col",className:"border px-3 py-2 bg-gray-800 color text-gray-300 text-sm",children:r},S)),p.setDate(p.getDate()+1)}return f},M=[],F=()=>(ot(e.data,M,e.allPersons),console.log(s),M.map((f,D)=>{const O=[];f.unavailable.forEach(({start:S,end:h,project:N,entryNumber:r,department:o})=>{const d=new Date(S),j=new Date(h);if((!y||N===y)&&(!s||o===s)&&d.getTime()<=c.getTime()&&j.getTime()>=a.getTime()){const T=new Date(Math.max(d.getTime(),a.getTime())),R=new Date(Math.min(j.getTime(),c.getTime()));O.push({project:N,start:Math.floor((T.getTime()-a.getTime())/(1e3*60*60*24)),end:Math.floor((R.getTime()-a.getTime())/(1e3*60*60*24)),start_Date:S,end_Date:h,entryNumber:r})}});const p=[[]];return O.forEach(S=>{let h=!1;for(const N of p){const r=N[N.length-1];if(!r||S.start>r.end){N.push(S),h=!0;break}}h||p.push([S])}),p.map((S,h)=>{const N=[];let r=0;return S.forEach(({project:o,start:d,end:j,start_Date:T,end_Date:R,entryNumber:Z})=>{r<d&&N.push(t("td",{colSpan:d-r,className:"border px-3 py-2"},`gap-${h}-${r}`)),N.push(t("td",{colSpan:j-d+1,className:`border px-3 py-2 bg-${f.color}-200 rounded-lg `,children:v(K,{className:"relative",children:[t(K.Button,{children:`${o}`}),t(K.Panel,{className:"fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center",children:v("div",{className:"bg-gray-400 rounded-lg",children:[t("div",{className:"bg-gray-400 rounded-lg mt-2 mr-2",children:v("div",{className:"flex justify-between items-start",children:[t("div",{className:"flex-grow text-center",children:t("h1",{children:"Projekt Einteilung"})}),t("div",{className:"flex-shrink-0",children:t("a",{className:"text-black-500 hover:text-black-700",href:"Scheduler",children:t(ue,{})})})]})}),t(dt,{firstname:f.name,lastname:f.lastname,projectName:o,startDate:T,endDate:R,start:d,end:j,month:l.getMonth()+1,staffingid:Z,projects:e.projects})]})})]})},`entry-${Z}-person-${f.id}-project-${o}-start-${d}-end-${j}-color-${f.color}`)),r=j+1}),r<E&&N.push(t("td",{colSpan:E-r,className:"border px-4 py-2"},`gap-${h}-${r}`)),v("tr",{children:[h===0&&t("td",{rowSpan:p.length,className:"border px-3 py-2 bg-gray-800 color text-gray-300 text-m",style:xe,children:v(K,{className:"relative",children:[v(K.Button,{className:"text-left",children:[f.name,t("br",{}),f.lastname]}),t(K.Panel,{className:"fixed z-50 top-0 left-0 w-screen h-screen text-black flex items-center justify-center",children:v("div",{className:"bg-gray-400 rounded-lg",children:[t("div",{className:"bg-gray-400 rounded-lg mt-2 mr-2",children:v("div",{className:"flex justify-between items-start",children:[t("div",{className:"flex-grow text-center",children:t("h1",{children:"Projekt Einteilung"})}),t("div",{className:"flex-shrink-0",children:t("a",{className:"text-black-500 hover:text-black-700",href:"Scheduler",children:t(ue,{})})})]})}),t(mt,{personid:f.id,firstname:f.name,lastname:f.lastname,projects:e.projects})]})})]})}),N]},`person-${f.id}-row-${h}`)})}));return v("div",{style:ft,children:[t("div",{className:"flex justify-center mb-4 w-auto",children:v("div",{className:"flex items-center justify-center space-x-4",children:[x(),g(),t("label",{htmlFor:"start-date-picker",className:"mr-2",children:"Startdatum:"}),t(ge,{id:"start-date-picker",selected:a,onChange:f=>n(f),dateFormat:"dd.MM.yyyy",selectsStart:!0,startDate:a,endDate:c,className:"rounded-md border-gray-300"}),t("label",{htmlFor:"end-date-picker",className:"mr-2",children:"Enddatum:"}),t(ge,{id:"end-date-picker",selected:c,onChange:f=>$(f),dateFormat:"dd.MM.yyyy",selectsEnd:!0,startDate:a,endDate:c,minDate:a,className:"rounded-md border-gray-300"})]})}),t("div",{style:pt,children:v("table",{className:"table-auto border-collapse border border-blue-800 w-full",children:[t("thead",{children:v("tr",{children:[t("th",{className:"border px-4 py-2 bg-gray-800 text-gray-300 text-left",style:xe,children:"Mitarbeiter"}),k()]})}),t("tbody",{children:F()})]})})]})}function It(e){return v("div",{children:[t($e,{title:"Scheduler"}),t(Te,{auth:e.auth}),t("header",{className:"bg-white shadow",children:t("div",{className:"max-w-7xl mx-auto text-xl py-6 px-4 sm:px-6 lg:px-8",children:"Personaleinteilung"})}),t(ht,{allPersons:e.allPersons,data:e.data,projects:e.projects,departments:e.departments})]})}export{It as default};
