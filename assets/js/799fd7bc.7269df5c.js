"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7923],{43467:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(85893),a=t(11151);const i={title:"BEGIN"},r="BEGIN",o={id:"sql-stmts/begin",title:"BEGIN",description:"Starts a transaction block.",source:"@site/docs/sql-stmts/begin.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/begin",permalink:"/docs/sql-stmts/begin",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/begin.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732259e3,formattedLastUpdatedAt:"Nov 22, 2024",frontMatter:{title:"BEGIN"},sidebar:"docsbars",previous:{title:"ANALYZE",permalink:"/docs/sql-stmts/analyze"},next:{title:"CALL",permalink:"/docs/sql-stmts/call"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"begin",children:"BEGIN"}),"\n",(0,n.jsx)(s.p,{children:"Starts a transaction block."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"BEGIN [WORK | TRANSACTION] [<transaction_mode>]\n\n-- where <transaction_mode> is:\n\n   ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE}\n   READ WRITE | READ ONLY\n   [NOT] DEFERRABLE\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"BEGIN"})," initiates a transaction block, that is, all statements after a ",(0,n.jsx)(s.code,{children:"BEGIN"})," command will be run in a single transaction until an explicit ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/commit",children:"COMMIT"})," or ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/rollback",children:"ROLLBACK"})," is given. By default (without ",(0,n.jsx)(s.code,{children:"BEGIN"}),'), Cloudberry Database runs transactions in "autocommit" mode, that is, each statement is run in its own transaction and a commit is implicitly performed at the end of the statement (if execution was successful, otherwise a rollback is done).']}),"\n",(0,n.jsx)(s.p,{children:"Statements are run more quickly in a transaction block, because transaction start/commit requires significant CPU and disk activity. Execution of multiple statements inside a transaction is also useful to ensure consistency when making several related changes: other sessions will be unable to see the intermediate states wherein not all the related updates have been done."}),"\n",(0,n.jsxs)(s.p,{children:["If the isolation level, read/write mode, or deferrable mode is specified, the new transaction has those characteristics, as if ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/set-transaction",children:"SET TRANSACTION"})," was run."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["WORK\n",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TRANSACTION"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional key words. They have no effect."}),"\n",(0,n.jsxs)(s.p,{children:["Refer to ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/set-transaction",children:"SET TRANSACTION"})," for information on the meaning of the other parameters to this statement."]}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/start-transaction",children:"START TRANSACTION"})," has the same functionality as ",(0,n.jsx)(s.code,{children:"BEGIN"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/commit",children:"COMMIT"})," or ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/rollback",children:"ROLLBACK"})," to terminate a transaction block."]}),"\n",(0,n.jsxs)(s.p,{children:["Issuing ",(0,n.jsx)(s.code,{children:"BEGIN"})," when already inside a transaction block will provoke a warning message. The state of the transaction is not affected. To nest transactions within a transaction block, use savepoints (see ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/savepoint",children:"SAVEPOINT"}),")."]}),"\n",(0,n.jsx)(s.p,{children:"For reasons of backwards compatibility, the commas between successive transaction_modes can be omitted."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"To begin a transaction block:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"BEGIN;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"BEGIN"})," is a Cloudberry Database language extension. It is equivalent to the SQL-standard command ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/start-transaction",children:"START TRANSACTION"}),", whose reference page contains additional compatibility information."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"DEFERRABLE"})," transaction_mode is a Cloudberry Database language extension."]}),"\n",(0,n.jsxs)(s.p,{children:["Incidentally, the ",(0,n.jsx)(s.code,{children:"BEGIN"})," key word is used for a different purpose in embedded SQL. You are advised to be careful about the transaction semantics when porting database applications."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/commit",children:"COMMIT"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/rollback",children:"ROLLBACK"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/savepoint",children:"SAVEPOINT"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/start-transaction",children:"START TRANSACTION"})]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var n=t(67294);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);