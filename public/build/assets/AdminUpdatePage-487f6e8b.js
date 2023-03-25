import{r as p,K as w,j as e,F as b,a as t,n as x}from"./app-3b59d9f2.js";import{L as T}from"./ChangeNavbarComponent-4f6691b8.js";import{T as o,I as n}from"./TextInput-a901f471.js";import{I as m}from"./InputLabel-6dd05063.js";import{U as f}from"./UniversalButtonComponent-13a421d2.js";import{D as I}from"./DropdownForm-39db0268.js";import"./transition-a801b1ee.js";import"./use-owner-76427fec.js";const i={width:"500px"};function C(d){const[k,N]=p.useState("");let u;const[v,y]=p.useState(!0);u=new URLSearchParams(window.location.search).get("id"),console.log(d);const{data:r,setData:h,post:z,processing:S,errors:s,reset:U}=w({name:"",email:"",password:"",password_confirmation:"",firstname:"",lastname:"",department:"",TelNr1:"",TelNr2:"",rank:"",country:"",zip:"",city:"",street:"",role:""});console.log(r),p.useEffect(()=>{(async()=>{try{const a=await axios.post("/api/editUser",{id:u});N(a.data),h({id:u,name:a.data.user.name,email:a.data.user.email,role:a.data.user.role,firstname:a.data.persons.firstname,lastname:a.data.persons.lastname,department:a.data.persons.department,TelNr1:a.data.persons.TelNr1,TelNr2:a.data.persons.TelNr2,rank:a.data.persons.rank,personAddress_id:a.data.persons.personAddress_id,country:a.data.address.country,zip:a.data.address.ZIP,city:a.data.address.city,street:a.data.address.street})}catch(a){console.error("Fehler beim Laden der Daten:",a)}finally{y(!1)}})()},[u]);const g=c=>{c.preventDefault(),axios.post("/api/updateUser",r).then(()=>{window.location.href="AdminHome"}).catch(a=>{console.log("ERROR:: ",a.response.data),console.log(r)})},l=c=>{h(c.target.name,c.target.value)};return v?e("div",{children:"Laden..."}):e(b,{children:e("div",{children:e("div",{className:"flex justify-center align-center p-12",children:t("form",{onSubmit:g,children:[t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"name",value:"Username"}),e(o,{id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:l,required:!0}),e(n,{message:s.name,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"email",value:"Email"}),e(o,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:l,required:!0}),e(n,{message:s.email,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"firstname",value:"Vorname"}),e(o,{id:"firstname",name:"firstname",value:r.firstname,className:"mt-1 block w-full",autoComplete:"firstname",isFocused:!0,handleChange:l,required:!0}),e(n,{message:s.firstname,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"lastname",value:"Nachname"}),e(o,{id:"lastname",name:"lastname",value:r.lastname,className:"mt-1 block w-full",autoComplete:"lastname",handleChange:l,required:!0}),e(n,{message:s.lastname,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"department",value:"Abteilung"}),e(I,{projects:d.name.department,onHandleChange:l,value:r.department,id:"department",name:"department",autoComplete:"department"}),e(n,{message:s.department,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"TelNr1",value:"Telefonnummer 1"}),e(o,{id:"TelNr1",name:"TelNr1",value:r.TelNr1,className:"mt-1 block w-full",autoComplete:"TelNr1",handleChange:l,required:!0}),e(n,{message:s.TelNr1,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"TelNr2",value:"Telefonnummer 2"}),e(o,{id:"TelNr2",name:"TelNr2",value:r.TelNr2,className:"mt-1 block w-full",autoComplete:"TelNr2",handleChange:l,required:!0}),e(n,{message:s.TelNr2,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"role",value:"Role"}),t("div",{className:"relative mt-1",children:[t("select",{id:"role",name:"role",value:r.role,onChange:l,className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",required:!0,children:[e("option",{value:"",children:"Select a role"}),e("option",{value:"1",children:"Admin"}),e("option",{value:"2",children:"Manager"}),e("option",{value:"3",children:"Mitarbeiter"})]}),e("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:e("svg",{className:"fill-current h-4 w-4",viewBox:"0 0 20 20",children:e("path",{d:"M10 12l-6-6h12l-6 6z"})})})]}),e(n,{message:s.role,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"country",value:"Country"}),e(o,{id:"country",name:"country",value:r.country,className:"mt-1 block w-full",autoComplete:"country",handleChange:l,required:!0}),e(n,{message:s.country,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"zip",value:"Postleitzahl"}),e(o,{id:"zip",name:"zip",value:r.zip,className:"mt-1 block w-full",autoComplete:"zip",handleChange:l,required:!0}),e(n,{message:s.zip,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"city",value:"City"}),e(o,{id:"city",name:"city",value:r.city,className:"mt-1 block w-full",autoComplete:"city",handleChange:l,required:!0}),e(n,{message:s.city,className:"mt-2"})]}),t("div",{style:i,children:[e(m,{className:"mt-4",forInput:"street",value:"Street"}),e(o,{id:"street",name:"street",value:r.street,className:"mt-1 block w-full",autoComplete:"street",handleChange:l,required:!0}),e(n,{message:s.street,className:"mt-2"})]}),t("div",{className:"flex justify-center align-center p-5",children:[e(f,{type:"submit",text:"Update"}),e("div",{className:"mx-2"}),e(f,{type:"button",href:"AdminHome",text:"Zurück"})]})]})})})})}function M(d){return t("div",{children:[e(x,{title:"AdminUpdatePage"}),e(T,{auth:d.auth}),e("header",{className:"bg-white shadow",children:e("h1",{className:"max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:"Mitarbeiter bearbeiten"})}),e(C,{name:d})]})}export{M as default};
