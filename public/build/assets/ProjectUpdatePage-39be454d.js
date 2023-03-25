import{r as u,K as C,j as e,F as w,a as r,n as I}from"./app-9c3da217.js";import{L as x}from"./ChangeNavbarComponent-2269013b.js";import{T as i,I as m}from"./TextInput-53c20e35.js";import{I as n}from"./InputLabel-663e683a.js";import{U as f}from"./UniversalButtonComponent-f1bb592c.js";import{D as P}from"./index.esm-9fb50d51.js";import"./transition-06c8b019.js";import"./use-owner-1450a8ad.js";const o={width:"500px"};function k(p){const[S,g]=u.useState("");let d;const[y,v]=u.useState(!0);d=new URLSearchParams(window.location.search).get("id");const{data:a,setData:h,post:_,processing:L,errors:l,reset:q}=C({name:"",project_number:"",startDate:"",endDate:"",description:"",street:"",zip:"",city:"",country:""});u.useEffect(()=>{(async()=>{try{const t=await axios.post("/api/editProject",{id:d});console.log(t.data),g(t.data),h({id:d,name:t.data.project.name,project_number:t.data.project.project_number,description:t.data.project.description,startDate:t.data.project.startDate,endDate:t.data.project.endDate,street:t.data.projectAddress.street,zip:t.data.projectAddress.ZIP,city:t.data.projectAddress.city,country:t.data.projectAddress.country})}catch(t){console.error("Fehler beim Laden der Daten:",t)}finally{v(!1)}})()},[d]);const j=s=>{s.preventDefault(),axios.post("/api/updateProject",a).then(()=>{window.location.href="ProjectHome"}).catch(t=>{console.log("ERROR:: ",t.response.data)})},c=s=>{h(s.target.name,s.target.value)},[b,N]=u.useState({startDate:new Date,endDate:new Date().setMonth(11)}),D=s=>{N(s),a.startDate=s.startDate,a.endDate=s.endDate,console.log("newValue:",a.endDate)};return y?e("div",{children:"Laden..."}):e(w,{children:e("div",{children:e("div",{className:"flex justify-center align-center p-12",children:r("form",{onSubmit:j,children:[r("div",{style:o,children:[e(n,{className:"mt-4",forInput:"name",value:"Projektname"}),e(i,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:c,required:!0}),e(m,{message:l.name,className:"mt-2"})]}),r("div",{style:o,children:[e(n,{className:"mt-4",forInput:"project_number",value:"Projektnummer"}),e(i,{id:"project_number",name:"project_number",value:a.project_number,className:"mt-1 block w-full",autoComplete:"project_number",handleChange:c,required:!0}),e(m,{message:l.project_number,className:"mt-2"})]}),r("div",{style:o,children:[e(n,{className:"mt-4",forInput:"country",value:"Land"}),e(i,{id:"country",name:"country",value:a.country,className:"mt-1 block w-full",autoComplete:"country",handleChange:c,required:!0}),e(m,{message:l.country,className:"mt-2"})]}),r("div",{style:o,children:[e(n,{className:"mt-4",forInput:"zip",value:"Postleitzahl"}),e(i,{id:"zip",name:"zip",value:a.zip,className:"mt-1 block w-full",autoComplete:"zip",handleChange:c,required:!0}),e(m,{message:l.zip,className:"mt-2"})]}),r("div",{style:o,children:[e(n,{className:"mt-4",forInput:"city",value:"Ort"}),e(i,{id:"city",name:"city",value:a.city,className:"mt-1 block w-full",autoComplete:"city",handleChange:c,required:!0}),e(m,{message:l.city,className:"mt-2"})]}),r("div",{style:o,children:[e(n,{className:"mt-4",forInput:"street",value:"Straße"}),e(i,{id:"street",name:"street",value:a.street,className:"mt-1 block w-full",autoComplete:"street",handleChange:c,required:!0}),e(m,{message:l.street,className:"mt-2"})]}),r("div",{style:o,children:[e(n,{className:"mt-4",forInput:"datum",value:"Datum"}),e(P,{value:b,onChange:D})]}),r("div",{style:o,children:[e(n,{className:"mt-4",forInput:"beschreibung",value:"Beschreibung"}),e("textarea",{id:"description",name:"description",value:a.description,className:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",autoComplete:"description",onChange:c,required:!0,rows:4})]}),r("div",{className:"flex justify-center align-center p-5",children:[e(f,{type:"submit",text:"Update"}),e("div",{className:"mx-2"}),e(f,{type:"button",href:"ProjectHome",text:"Zurück"})]})]})})})})}function T(p){return r("div",{children:[e(I,{title:"AdminUpdatePage"}),e(x,{auth:p.auth}),e(k,{name:p})]})}export{T as default};