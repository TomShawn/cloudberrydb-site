"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7661],{16199:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=s(85893),r=s(11151);const c={title:"DROP CAST"},o="DROP CAST",i={id:"sql-stmts/drop-cast",title:"DROP CAST",description:"Removes a cast.",source:"@site/docs/sql-stmts/drop-cast.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-cast",permalink:"/docs/sql-stmts/drop-cast",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-cast.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732259e3,formattedLastUpdatedAt:"Nov 22, 2024",frontMatter:{title:"DROP CAST"},sidebar:"docsbars",previous:{title:"DROP AGGREGATE",permalink:"/docs/sql-stmts/drop-aggregate"},next:{title:"DROP COLLATION",permalink:"/docs/sql-stmts/drop-collation"}},a={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"drop-cast",children:"DROP CAST"}),"\n",(0,n.jsx)(t.p,{children:"Removes a cast."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP CAST [IF EXISTS] (<sourcetype> AS <targettype>) [CASCADE | RESTRICT]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"DROP CAST"})," will delete a previously defined cast. To be able to drop a cast, you must own the source or the target data type. These are the same privileges that are required to create a cast."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(t.p,{children:"Do not throw an error if the cast does not exist. A notice is issued in this case."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"sourcetype"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of the source data type of the cast."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"targettype"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of the target data type of the cast."}),"\n",(0,n.jsxs)(t.p,{children:["CASCADE\n",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"RESTRICT"})})]}),"\n",(0,n.jsx)(t.p,{children:"These keywords have no effect since there are no dependencies on casts."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["To drop the cast from type ",(0,n.jsx)(t.code,{children:"text"})," to type ",(0,n.jsx)(t.code,{children:"int"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP CAST (text AS int);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["There ",(0,n.jsx)(t.code,{children:"DROP CAST"})," command conforms to the SQL standard."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/sql-stmts/create-cast",children:"CREATE CAST"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var n=s(67294);const r={},c=n.createContext(r);function o(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);