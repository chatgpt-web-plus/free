import{e as I,aW as K,b2 as P,b3 as L,b4 as S,b5 as U,n as $,b6 as j,o as g,g as N,h as e,w as t,u as a,a$ as D,Z as i,C as R,k as q,j as f,y as b,V as M,a0 as Z,aX as z,aY as H,ab as W,aZ as X,b1 as Y}from"./.pnpm.532eafd7.js";import{u as G,_ as J}from"./usePaging.a579c08d.js";import{r as C,f as O}from"./index.7458312b.js";function Q(d){return C.get({url:"/chat/list",params:d})}function ee(d){return C.get({url:"/chat/delete",params:d})}const te=f("br",null,null,-1),ae={href:"javascript:void(0);"},le={class:"flex justify-end mt-4"},se=I({__name:"index",setup(d){const n=K({userId:"",prompt:"",startTime:"",endTime:""}),w=c=>{Z.alert(c,"AI \u56DE\u590D",{center:!0,draggable:!0,dangerouslyUseHTMLString:!0})},{pager:s,getLists:r,resetPage:p,resetParams:k}=G({fetchFun:Q,params:n}),y=async c=>{await O.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await ee({id:c}),r()};return P(()=>{r()}),r(),(c,u)=>{const E=z,m=H,_=W,F=X,h=Y,o=L,v=S,B=U,V=J,x=$("edit-popup"),A=j;return g(),N("div",null,[e(h,{class:"!border-none",shadow:"never"},{default:t(()=>[e(F,{ref:"formRef",class:"mb-[-16px]",model:a(n),inline:!0},{default:t(()=>[e(m,{label:"\u63D0\u95EE\u4EBAID"},{default:t(()=>[e(E,{class:"w-[280px]",modelValue:a(n).userId,"onUpdate:modelValue":u[0]||(u[0]=l=>a(n).userId=l),placeholder:"",clearable:"",onKeyup:D(a(p),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(m,{label:"\u63D0\u95EE\u95EE\u9898"},{default:t(()=>[e(E,{class:"w-[280px]",modelValue:a(n).prompt,"onUpdate:modelValue":u[1]||(u[1]=l=>a(n).prompt=l),placeholder:"\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeyup:D(a(p),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),te,e(m,null,{default:t(()=>[e(_,{type:"primary",onClick:a(p)},{default:t(()=>[i("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(_,{onClick:a(k)},{default:t(()=>[i("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(h,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[R((g(),q(B,{size:"large",data:a(s).lists,height:"600",style:{width:"100%"}},{default:t(()=>[e(o,{label:"\u63D0\u95EE\u4EBAID",prop:"user.id",sortable:"","min-width":"120"}),e(o,{label:"\u63D0\u95EE\u4EBA\u8D26\u53F7",prop:"user.account",sortable:"","min-width":"160"}),e(o,{label:"\u5145\u5F53\u89D2\u8272",prop:"role",sortable:"","min-width":"120"}),e(o,{label:"\u63D0\u95EE\u95EE\u9898",prop:"prompt",sortable:"","min-width":"200"}),e(o,{label:"AI\u56DE\u590D","min-width":"100"},{default:t(({row:l})=>[f("a",ae,[e(v,{type:"success",onClick:T=>w(l.content)},{default:t(()=>[i("\u67E5\u770B\u56DE\u590D")]),_:2},1032,["onClick"])])]),_:1}),e(o,{label:"\u4F7F\u7528\u6A21\u578B",prop:"model",sortable:"","min-width":"150"}),e(o,{label:"\u6D88\u8017tokens","min-width":"150",sortable:""},{default:t(({row:l})=>[i(b(l.promptTokens)+" + "+b(l.completionTokens)+"= "+b(l.totalTokens),1)]),_:1}),e(o,{label:"\u6D88\u8017\u79EF\u5206",prop:"totalPoints",sortable:"","min-width":"130"}),e(o,{label:"\u63D0\u95EE\u65F6\u95F4",prop:"createdAt",sortable:"","min-width":"180"}),e(o,{label:"\u64CD\u4F5C",width:"70",fixed:"right"},{default:t(({row:l})=>[e(_,{type:"danger",link:"",onClick:T=>y(l.id)},{default:t(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[A,a(s).loading]]),f("div",le,[e(V,{modelValue:a(s),"onUpdate:modelValue":u[2]||(u[2]=l=>M(s)?s.value=l:null),onChange:a(r)},null,8,["modelValue","onChange"])])]),_:1}),e(x,{ref:"editRef",onSuccess:a(r)},null,8,["onSuccess"])])}}});export{se as default};
