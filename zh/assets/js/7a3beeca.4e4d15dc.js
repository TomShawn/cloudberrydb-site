"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4056],{3836:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(85893),a=t(11151);const i={title:"START TRANSACTION"},r="START TRANSACTION",o={id:"sql-stmts/start-transaction",title:"START TRANSACTION",description:"Starts a transaction block.",source:"@site/docs/sql-stmts/start-transaction.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/start-transaction",permalink:"/zh/docs/sql-stmts/start-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/start-transaction.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1740044194,formattedLastUpdatedAt:"2025\u5e742\u670820\u65e5",frontMatter:{title:"START TRANSACTION"},sidebar:"docsbars",previous:{title:"SHOW",permalink:"/zh/docs/sql-stmts/show"},next:{title:"TRUNCATE",permalink:"/zh/docs/sql-stmts/truncate"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"start-transaction",children:"START TRANSACTION"}),"\n",(0,n.jsx)(s.p,{children:"Starts a transaction block."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"START TRANSACTION [<transaction_mode>] [, ...]\n\n-- where <transaction_mode> is one of:\n\n   ISOLATION LEVEL {SERIALIZABLE | REPEATABLE READ | READ COMMITTED | READ UNCOMMITTED}\n   READ WRITE | READ ONLY\n   [NOT] DEFERRABLE\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"START TRANSACTION"})," begins a new transaction block. If the isolation level, read/write mode, or deferrable mode is specified, the new transaction has those characteristics, as if ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/set-transaction",children:"SET TRANSACTION"})," was run. This is the same as the ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/begin",children:(0,n.jsx)(s.code,{children:"BEGIN"})})," command."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["Refer to ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/set-transaction",children:"SET TRANSACTION"})," for information on the meaning of the parameters to this statement."]}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["In the standard, it is not necessary to issue ",(0,n.jsx)(s.code,{children:"START TRANSACTION"})," to start a transaction block: any SQL command implicitly begins a block. Cloudberry Database's behavior can be seen as implicitly issuing a ",(0,n.jsx)(s.code,{children:"COMMIT"})," after each command that does not follow ",(0,n.jsx)(s.code,{children:"START TRANSACTION"})," (or ",(0,n.jsx)(s.code,{children:"BEGIN"}),"), and it is therefore often called 'autocommit'. Other relational database systems may offer an autocommit feature as a convenience."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"DEFERRABLE"})," transaction_mode is a Cloudberry Database language extension."]}),"\n",(0,n.jsx)(s.p,{children:"The SQL standard requires commas between successive transaction_modes, but for historical reasons Cloudberry Database allows the commas to be omitted."}),"\n",(0,n.jsxs)(s.p,{children:["See also the compatibility section of ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/set-transaction",children:"SET TRANSACTION"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/begin",children:(0,n.jsx)(s.code,{children:"BEGIN"})}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/commit",children:(0,n.jsx)(s.code,{children:"COMMIT"})}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/rollback",children:(0,n.jsx)(s.code,{children:"ROLLBACK"})}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/savepoint",children:(0,n.jsx)(s.code,{children:"SAVEPOINT"})}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/set-transaction",children:(0,n.jsx)(s.code,{children:"SET TRANSACTION"})})]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var n=t(67294);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);