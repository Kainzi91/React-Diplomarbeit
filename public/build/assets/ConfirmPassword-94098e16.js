import{K as l,r as c,a,j as s,n as p}from"./app-16c74621.js";import{G as u}from"./GuestLayout-70a1d439.js";import{T as f,I as w}from"./TextInput-46c5b2dc.js";import{I as h}from"./InputLabel-d6439b67.js";import{P as g}from"./PrimaryButton-d0eec7e1.js";function y(){const{data:e,setData:t,post:o,processing:n,errors:m,reset:i}=l({password:""});c.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(u,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(w,{message:m.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:n,children:"Confirm"})})]})]})}export{y as default};
