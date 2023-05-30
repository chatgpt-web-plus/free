import{e as U,s as _,aW as I,f as Y,b9 as q,ba as w,o as p,g as A,h as a,w as o,u as l,j as i,Z as c,y as C,k as b,m as g,aY as x,aX as L,aZ as P}from"./.pnpm.de1384b3.js";import{S as d,s as T,g as h}from"./storageEnum.b0d876a7.js";import{P as G}from"./index.284c7132.js";const Q={class:"edit-popup"},Z={class:"form-tips"},j={key:0},W={class:"flex-1"},X={class:"flex-1"},$=U({__name:"edit",emits:["success"],setup(z,{expose:D,emit:S}){const m=_(),F=_(),e=I({engine:"",bucket:"",accessKey:"",secretKey:"",domain:"",region:"",isDefault:!1}),y=[{name:"\u672C\u5730\u5B58\u50A8",type:d.LOCAL,tips:"\u9700\u8981\u5C06.env\u6587\u4EF6\u91CCAPP_URL\u914D\u7F6E\u6210\u5B9E\u9645\u57DF\u540D\u5730\u5740\u6216\u8005ip:3000"},{name:"\u4E03\u725B\u4E91\u5B58\u50A8",type:d.QINIU,tips:"\u5207\u6362\u4E03\u725B\u4E91\u5B58\u50A8\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u4E03\u725B\u4E91"},{name:"\u963F\u91CC\u4E91OSS",type:d.ALIYUN,tips:"\u5207\u6362\u963F\u91CC\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u963F\u91CC\u4E91OSS"},{name:"\u817E\u8BAF\u4E91OSS",type:d.QCLOUD,tips:"\u5207\u6362\u817E\u8BAF\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u817E\u8BAF\u4E91OSS"}],V={engine:[{required:!0,message:"\u8BF7\u9009\u62E9\u5B58\u50A8\u65B9\u5F0F",trigger:"blur"}],bucket:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",trigger:"blur"}],accessKey:[{required:!0,message:"\u8BF7\u8F93\u5165ACCESS_KEY",trigger:"blur"}],secretKey:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_KEY",trigger:"blur"}],endpoint:[{required:!0,message:"\u8BF7\u8F93\u5165ENDPOINT",trigger:"blur"}],domain:[{required:!0,message:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u8F93\u5165REGION",trigger:"blur"}],isDefault:[{required:!0,message:"\u8BF7\u8F93\u5165\u9009\u62E9\u662F\u5426\u8BBE\u4E3A\u9ED8\u8BA4",trigger:"blur"}]},f=Y(()=>y.find(r=>r.type==e.engine)),K=async()=>{var r,u;await((r=m.value)==null?void 0:r.validate()),await T(e),(u=F.value)==null||u.close(),S("success")},k=async()=>{const r=await h({engine:e.engine});for(const u in r)e[u]=r[u]},v=r=>{var u;e.engine=r,(u=F.value)==null||u.open(),k()},N=()=>{var r;(r=m.value)==null||r.resetFields()};return D({open:v}),(r,u)=>{const E=q,s=x,n=L,O=w,R=P;return p(),A("div",Q,[a(G,{ref_key:"popupRef",ref:F,title:"\u8BBE\u7F6E\u5B58\u50A8",async:!0,width:"550px",onConfirm:K,onClose:N},{default:o(()=>[a(R,{ref_key:"formRef",ref:m,model:l(e),"label-width":"120px",rules:V},{default:o(()=>[a(s,{label:"\u5B58\u50A8\u65B9\u5F0F",prop:"engine"},{default:o(()=>{var t;return[i("div",null,[a(E,{"model-value":""},{default:o(()=>{var B;return[c(C((B=l(f))==null?void 0:B.name),1)]}),_:1}),i("div",Z,C((t=l(f))==null?void 0:t.tips),1)])]}),_:1}),l(e).engine!=="local"?(p(),A("div",j,[a(s,{label:"Bucket",prop:"bucket"},{default:o(()=>[i("div",W,[a(n,{modelValue:l(e).bucket,"onUpdate:modelValue":u[0]||(u[0]=t=>l(e).bucket=t),placeholder:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0(Bucket)",clearable:""},null,8,["modelValue"])])]),_:1}),a(s,{label:"ACCESS_KEY",prop:"accessKey"},{default:o(()=>[a(n,{modelValue:l(e).accessKey,"onUpdate:modelValue":u[1]||(u[1]=t=>l(e).accessKey=t),placeholder:"\u8BF7\u8F93\u5165ACCESS_KEY(AK)",clearable:""},null,8,["modelValue"])]),_:1}),a(s,{label:"SECRET_KEY",prop:"secretKey"},{default:o(()=>[a(n,{modelValue:l(e).secretKey,"onUpdate:modelValue":u[2]||(u[2]=t=>l(e).secretKey=t),placeholder:"\u8BF7\u8F93\u5165SECRET_KEY(SK)",clearable:""},null,8,["modelValue"])]),_:1}),l(e).engine==l(d).ALIYUN?(p(),b(s,{key:0,label:"ENDPOINT",prop:"endpoint"},{default:o(()=>[a(n,{modelValue:l(e).endpoint,"onUpdate:modelValue":u[3]||(u[3]=t=>l(e).endpoint=t),placeholder:"\u8BF7\u8F93\u5165ENDPOINT",clearable:""},null,8,["modelValue"])]),_:1})):g("",!0),a(s,{label:"\u7A7A\u95F4\u57DF\u540D",prop:"domain"},{default:o(()=>[i("div",X,[i("div",null,[a(n,{modelValue:l(e).domain,"onUpdate:modelValue":u[4]||(u[4]=t=>l(e).domain=t),placeholder:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D(Domain)",clearable:""},null,8,["modelValue"])])])]),_:1}),l(e).engine==l(d).QCLOUD?(p(),b(s,{key:1,label:"REGION",prop:"region"},{default:o(()=>[a(n,{modelValue:l(e).region,"onUpdate:modelValue":u[5]||(u[5]=t=>l(e).region=t),placeholder:"\u8BF7\u8F93\u5165region",clearable:""},null,8,["modelValue"])]),_:1})):g("",!0)])):g("",!0),a(s,{label:"\u8BBE\u4E3A\u9ED8\u8BA4",prop:"isDefault"},{default:o(()=>[a(O,{modelValue:l(e).isDefault,"onUpdate:modelValue":u[6]||(u[6]=t=>l(e).isDefault=t)},{default:o(()=>[a(E,{label:!1},{default:o(()=>[c("\u5426")]),_:1}),a(E,{label:!0},{default:o(()=>[c("\u662F")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{$ as _};
