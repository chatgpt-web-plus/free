import{e as U,q as $,s as N,aW as K,b2 as L,be as j,bf as q,b3 as I,bh as Z,b4 as z,b5 as O,b6 as W,o as i,g as X,h as e,w as a,u as t,a$ as Y,Z as s,j as g,C as G,k as r,m as c,y as D,V as H,am as F,aX as J,aY as Q,ab as ee,aZ as ae,b1 as le}from"./.pnpm.de1384b3.js";import{u as te,_ as ue}from"./usePaging.a9f35d76.js";import{_ as oe}from"./index.9c35de43.js";import{b as se}from"./model.676a7d21.js";import{_ as ne}from"./edit.vue_vue_type_script_setup_true_lang.7d81bd97.js";import"./index.284c7132.js";import"./index.vue_vue_type_style_index_0_scoped_a5e5144a_lang.c2c454f0.js";const ie=g("br",null,null,-1),de={class:"flex"},re={class:"mt-4"},ce={class:"flex justify-end mt-4"},ye=U({__name:"index",setup(me){const y=$(!1),p=N(),n=K({key:"",model:"",status:"",isPlus:-1}),V=async()=>{var _;y.value=!0,await F(),(_=p.value)==null||_.open("add")},x=async _=>{var u,b;y.value=!0,await F(),(u=p.value)==null||u.open("edit"),(b=p.value)==null||b.setFormData(_)},{pager:m,getLists:f,resetPage:v,resetParams:A}=te({fetchFun:se,params:n});return L(()=>{f()}),f(),(_,u)=>{const b=J,h=Q,d=j,C=q,E=ee,P=ae,w=le,R=oe,o=I,k=Z,B=z,T=O,M=ue,S=W;return i(),X("div",null,[e(w,{class:"!border-none hidden",shadow:"never"},{default:a(()=>[e(P,{ref:"formRef",class:"mb-[-16px]",model:t(n),inline:!0},{default:a(()=>[e(h,{label:"\u5185\u5BB9"},{default:a(()=>[e(b,{class:"w-[280px]",modelValue:t(n).key,"onUpdate:modelValue":u[0]||(u[0]=l=>t(n).key=l),placeholder:"sk-",clearable:"",onKeyup:Y(t(v),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(h,{label:"\u7C7B\u578B"},{default:a(()=>[e(C,{class:"w-[280px]",modelValue:t(n).isPlus,"onUpdate:modelValue":u[1]||(u[1]=l=>t(n).isPlus=l)},{default:a(()=>[e(d,{label:"\u5168\u90E8",value:-1}),e(d,{label:"\u666E\u901A",value:0}),e(d,{label:"PLUS",value:1})]),_:1},8,["modelValue"])]),_:1}),e(h,{label:"\u72B6\u6001"},{default:a(()=>[e(C,{class:"w-[280px]",modelValue:t(n).status,"onUpdate:modelValue":u[2]||(u[2]=l=>t(n).status=l)},{default:a(()=>[e(d,{label:"\u5168\u90E8",value:""}),e(d,{label:"\u6709\u6548",value:10}),e(d,{label:"\u8017\u5C3D",value:20}),e(d,{label:"\u5C01\u7981",value:30})]),_:1},8,["modelValue"])]),_:1}),ie,e(h,null,{default:a(()=>[e(E,{type:"primary",onClick:t(v)},{default:a(()=>[s("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(E,{onClick:t(A)},{default:a(()=>[s("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(w,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[g("div",de,[e(E,{type:"success",onClick:V},{icon:a(()=>[e(R,{name:"el-icon-Plus"})]),default:a(()=>[s(" \u6DFB\u52A0 ")]),_:1})]),g("div",re,[G((i(),r(T,{size:"large",data:t(m).lists,height:"600",style:{width:"100%"}},{default:a(()=>[e(o,{label:"\u9A71\u52A8",prop:"driver",sortable:"","min-width":"120"}),e(o,{label:"\u6A21\u578B",prop:"name",sortable:"","min-width":"150"}),e(o,{label:"\u522B\u540D",prop:"alias",sortable:"","min-width":"150"}),e(o,{label:"\u6700\u4F4E\u79EF\u5206",prop:"minPoints",sortable:"","min-width":"120"}),e(o,{label:"\u8BA1\u8D39\u6A21\u5F0F","min-width":"120"},{default:a(({row:l})=>[l.chargeMode=="times"?(i(),r(k,{key:0},{default:a(()=>[s("\u63D0\u95EE\u6B21\u6570")]),_:1})):c("",!0),l.chargeMode=="tokens"?(i(),r(k,{key:1},{default:a(()=>[s("\u6D88\u8017tokens")]),_:1})):c("",!0)]),_:1}),e(o,{label:"\u8BA1\u8D39\u500D\u6570",prop:"chargeRate",sortable:"","min-width":"120"}),e(o,{label:"\u6D88\u8017\u79EF\u5206","min-width":"150"},{default:a(({row:l})=>[l.chargeMode=="times"?(i(),r(k,{key:0},{default:a(()=>[s("\u63D0\u95EE\u6B21\u6570 * "+D(l.chargeRate),1)]),_:2},1024)):c("",!0),l.chargeMode=="tokens"?(i(),r(k,{key:1},{default:a(()=>[s("\u6D88\u8017tokens * "+D(l.chargeRate),1)]),_:2},1024)):c("",!0)]),_:1}),e(o,{label:"\u663E\u793A\u987A\u5E8F",prop:"sort",sortable:"","min-width":"150"}),e(o,{label:"\u542F\u7528\u72B6\u6001","min-width":"120"},{default:a(({row:l})=>[l.isDisable==0?(i(),r(B,{key:0,type:"success"},{default:a(()=>[s("\u542F\u7528")]),_:1})):c("",!0),l.isDisable==1?(i(),r(B,{key:1,type:"danger"},{default:a(()=>[s("\u7981\u7528")]),_:1})):c("",!0)]),_:1}),e(o,{label:"\u64CD\u4F5C","min-width":"70",fixed:"right"},{default:a(({row:l})=>[e(E,{type:"primary",link:"",onClick:_e=>x(l)},{default:a(()=>[s(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[S,t(m).loading]]),g("div",ce,[e(M,{modelValue:t(m),"onUpdate:modelValue":u[3]||(u[3]=l=>H(m)?m.value=l:null),onChange:t(f)},null,8,["modelValue","onChange"])])])]),_:1}),e(ne,{ref_key:"editRef",ref:p,onSuccess:t(f)},null,8,["onSuccess"])])}}});export{ye as default};
