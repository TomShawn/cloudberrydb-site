"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7123],{53427:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var n=t(85893),r=t(11151);const c={title:"CLOSE"},l="CLOSE",o={id:"sql-stmts/close",title:"CLOSE",description:"Closes a cursor.",source:"@site/docs/sql-stmts/close.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/close",permalink:"/docs/sql-stmts/close",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/close.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1739157355,formattedLastUpdatedAt:"Feb 10, 2025",frontMatter:{title:"CLOSE"},sidebar:"docsbars",previous:{title:"CHECKPOINT",permalink:"/docs/sql-stmts/checkpoint"},next:{title:"CLUSTER",permalink:"/docs/sql-stmts/cluster"}},i={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"close",children:"CLOSE"}),"\n",(0,n.jsx)(s.p,{children:"Closes a cursor."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CLOSE { <cursor_name> | ALL }\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"CLOSE"})," frees the resources associated with an open cursor. After the cursor is closed, no subsequent operations are allowed on it. A cursor should be closed when it is no longer needed."]}),"\n",(0,n.jsxs)(s.p,{children:["Every non-holdable open cursor is implicitly closed when a transaction is terminated by ",(0,n.jsx)(s.code,{children:"COMMIT"})," or ",(0,n.jsx)(s.code,{children:"ROLLBACK"}),". A holdable cursor is implicitly closed if the transaction that created it is prematurely ended via ",(0,n.jsx)(s.code,{children:"ROLLBACK"}),". If the creating transaction successfully commits, the holdable cursor remains open until an explicit ",(0,n.jsx)(s.code,{children:"CLOSE"})," is run, or the client disconnects."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"cursor_name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of an open cursor to close."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"ALL"})})}),"\n",(0,n.jsx)(s.p,{children:"Close all open cursors."}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:["Cloudberry Database does not have an explicit ",(0,n.jsx)(s.code,{children:"OPEN"})," cursor statement. A cursor is considered open when it is declared. Use the ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/declare",children:"DECLARE"})," statement to declare (and open) a cursor."]}),"\n",(0,n.jsxs)(s.p,{children:["You can see all available cursors by querying the ",(0,n.jsx)(s.code,{children:"pg_cursors"})," system view."]}),"\n",(0,n.jsxs)(s.p,{children:["If a cursor is closed after a savepoint which is later rolled back, the ",(0,n.jsx)(s.code,{children:"CLOSE"})," is not rolled back; that is, the cursor remains closed."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Close the cursor ",(0,n.jsx)(s.code,{children:"portala"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CLOSE portala;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"CLOSE"})," is fully conforming with the SQL standard. ",(0,n.jsx)(s.code,{children:"CLOSE ALL"})," is a Cloudberry Database extension."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/declare",children:"DECLARE"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/fetch",children:"FETCH"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/move",children:"MOVE"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/retrieve",children:"RETRIEVE"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>l});var n=t(67294);const r={},c=n.createContext(r);function l(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);