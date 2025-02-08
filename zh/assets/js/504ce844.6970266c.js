"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7929],{75038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=n(85893),r=n(11151);const l={title:"DROP EXTERNAL TABLE"},i="DROP EXTERNAL TABLE",a={id:"sql-stmts/drop-external-table",title:"DROP EXTERNAL TABLE",description:"Removes an external table definition.",source:"@site/docs/sql-stmts/drop-external-table.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-external-table",permalink:"/zh/docs/sql-stmts/drop-external-table",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-external-table.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1737527923,formattedLastUpdatedAt:"2025\u5e741\u670822\u65e5",frontMatter:{title:"DROP EXTERNAL TABLE"},sidebar:"docsbars",previous:{title:"DROP EXTENSION",permalink:"/zh/docs/sql-stmts/drop-extension"},next:{title:"DROP FOREIGN DATA WRAPPER",permalink:"/zh/docs/sql-stmts/drop-foreign-data-wrapper"}},d={},o=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"drop-external-table",children:"DROP EXTERNAL TABLE"}),"\n",(0,s.jsx)(t.p,{children:"Removes an external table definition."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DROP EXTERNAL [WEB] TABLE [IF EXISTS] <name> [CASCADE | RESTRICT]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"DROP EXTERNAL TABLE"})," drops an existing external table definition from the database system. The external data sources or files are not deleted. To run this command you must be the owner of the external table."]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"WEB"})})}),"\n",(0,s.jsx)(t.p,{children:"Optional keyword for dropping external web tables."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"IF EXISTS"})})}),"\n",(0,s.jsx)(t.p,{children:"Do not throw an error if the external table does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"name"})})}),"\n",(0,s.jsx)(t.p,{children:"The name (optionally schema-qualified) of an existing external table."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"CASCADE"})})}),"\n",(0,s.jsx)(t.p,{children:"Automatically drop objects that depend on the external table (such as views)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"RESTRICT"})})}),"\n",(0,s.jsx)(t.p,{children:"Refuse to drop the external table if any objects depend on it. This is the default."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Remove the external table named ",(0,s.jsx)(t.code,{children:"staging"})," if it exists:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DROP EXTERNAL TABLE IF EXISTS staging;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["There is no ",(0,s.jsx)(t.code,{children:"DROP EXTERNAL TABLE"})," statement in the SQL standard."]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/zh/docs/sql-stmts/create-external-table",children:(0,s.jsx)(t.code,{children:"CREATE EXTERNAL TABLE"})}),", ",(0,s.jsx)(t.a,{href:"/zh/docs/sql-stmts/alter-external-table",children:(0,s.jsx)(t.code,{children:"ALTER EXTERNAL TABLE"})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const r={},l=s.createContext(r);function i(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);