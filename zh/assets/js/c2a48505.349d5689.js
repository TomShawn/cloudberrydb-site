"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8976],{16315:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=t(85893),i=t(11151);const r={title:"ABORT"},a="ABORT",c={id:"sql-stmts/abort",title:"ABORT",description:"Terminates the current transaction.",source:"@site/docs/sql-stmts/abort.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/abort",permalink:"/zh/docs/sql-stmts/abort",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/abort.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1739329693,formattedLastUpdatedAt:"2025\u5e742\u670812\u65e5",frontMatter:{title:"ABORT"},sidebar:"docsbars",previous:{title:"SQL Statements Index",permalink:"/zh/docs/sql-stmts/"},next:{title:"ALTER AGGREGATE",permalink:"/zh/docs/sql-stmts/alter-aggregate"}},o={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"abort",children:"ABORT"}),"\n",(0,n.jsx)(s.p,{children:"Terminates the current transaction."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ABORT [WORK | TRANSACTION] [AND [NO] CHAIN]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ABORT"})," rolls back the current transaction and causes all the updates made by the transaction to be discarded. This command is identical in behavior to the standard SQL command ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/rollback",children:(0,n.jsx)(s.code,{children:"ROLLBACK"})}),", and is present only for historical reasons."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"WORK"})}),(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TRANSACTION"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional key words. They have no effect."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"AND CHAIN"})})}),"\n",(0,n.jsxs)(s.p,{children:["If ",(0,n.jsx)(s.code,{children:"AND CHAIN"})," is specified, a new transaction is immediately started with the same transaction characteristics (see ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/set-transaction",children:"SET TRANSACTION"}),") as the just finished one. Otherwise, no new transaction is started."]}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/commit",children:(0,n.jsx)(s.code,{children:"COMMIT"})})," to successfully terminate a transaction."]}),"\n",(0,n.jsxs)(s.p,{children:["Issuing ",(0,n.jsx)(s.code,{children:"ABORT"})," outside of a transaction block emits a warning and otherwise has no effect."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"To terminate all changes:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ABORT;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["This command is a Cloudberry Database extension present for historical reasons. ",(0,n.jsx)(s.code,{children:"ROLLBACK"})," is the equivalent standard SQL command."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/begin",children:(0,n.jsx)(s.code,{children:"BEGIN"})}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/commit",children:(0,n.jsx)(s.code,{children:"COMMIT"})}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/rollback",children:(0,n.jsx)(s.code,{children:"ROLLBACK"})})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>a});var n=t(67294);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);