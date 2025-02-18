"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4243],{19385:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var n=t(85893),c=t(11151);const o={title:"DROP ACCESS METHOD"},r="DROP ACCESS METHOD",d={id:"sql-stmts/drop-access-method",title:"DROP ACCESS METHOD",description:"Removes an access method",source:"@site/docs/sql-stmts/drop-access-method.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-access-method",permalink:"/docs/sql-stmts/drop-access-method",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-access-method.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1739329693,formattedLastUpdatedAt:"Feb 12, 2025",frontMatter:{title:"DROP ACCESS METHOD"},sidebar:"docsbars",previous:{title:"DO",permalink:"/docs/sql-stmts/do"},next:{title:"DROP AGGREGATE",permalink:"/docs/sql-stmts/drop-aggregate"}},i={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"drop-access-method",children:"DROP ACCESS METHOD"}),"\n",(0,n.jsx)(s.p,{children:"Removes an access method"}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP ACCESS METHOD [IF EXISTS] <name> [CASCADE | RESTRICT]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP ACCESS METHOD"})," removes an existing access method. Only superusers can drop access methods."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not throw an error if the access method does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of an existing access method."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CASCADE"})})}),"\n",(0,n.jsx)(s.p,{children:"Automatically drop objects that depend on the access method (such as operator classes, operator families, and indexes), and in turn all objects that depend on those objects."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"RESTRICT"})})}),"\n",(0,n.jsx)(s.p,{children:"Refuse to drop the access method if any objects depend on it. This is the default."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Drop the access method ",(0,n.jsx)(s.code,{children:"heptree"}),";"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP ACCESS METHOD heptree;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP ACCESS METHOD"})," is a Cloudberry Database extension."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-access-method",children:"CREATE ACCESS METHOD"})})]})}function h(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>r});var n=t(67294);const c={},o=n.createContext(c);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);