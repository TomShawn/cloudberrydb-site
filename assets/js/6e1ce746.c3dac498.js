"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8465],{81577:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=s(85893),o=s(11151);const i={title:"DROP EXTENSION"},r="DROP EXTENSION",d={id:"sql-stmts/drop-extension",title:"DROP EXTENSION",description:"Removes an extension from a Cloudberry Database.",source:"@site/docs/sql-stmts/drop-extension.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-extension",permalink:"/docs/sql-stmts/drop-extension",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-extension.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1734402925,formattedLastUpdatedAt:"Dec 17, 2024",frontMatter:{title:"DROP EXTENSION"},sidebar:"docsbars",previous:{title:"DROP DOMAIN",permalink:"/docs/sql-stmts/drop-domain"},next:{title:"DROP EXTERNAL TABLE",permalink:"/docs/sql-stmts/drop-external-table"}},a={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-extension",children:"DROP EXTENSION"}),"\n",(0,t.jsx)(n.p,{children:"Removes an extension from a Cloudberry Database."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP EXTENSION [ IF EXISTS ] <name> [, ...] [ CASCADE | RESTRICT ]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DROP EXTENSION"})," removes extensions from the database. Dropping an extension causes its component objects to be dropped as well."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The supporting extension files that were installed to create the extension (for example, the library and ",(0,t.jsx)(n.code,{children:".control"})," files) are not deleted. The files must be manually removed from the Cloudberry Database hosts."]})}),"\n",(0,t.jsxs)(n.p,{children:["You must own the extension to use ",(0,t.jsx)(n.code,{children:"DROP EXTENSION"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IF EXISTS"})})}),"\n",(0,t.jsx)(n.p,{children:"Do not throw an error if the extension does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})})}),"\n",(0,t.jsx)(n.p,{children:"The name of an installed extension."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"CASCADE"})})}),"\n",(0,t.jsxs)(n.p,{children:["Automatically drop objects that depend on the extension, and in turn all objects that depend on those objects. Refer to the PostgreSQL ",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/ddl-depend.html",children:"Dependency Tracking"})," documentation for more information."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Before issuing a ",(0,t.jsx)(n.code,{children:"DROP EXTENSION"})," with the ",(0,t.jsx)(n.code,{children:"CASCADE"})," keyword, you should be aware of all object that depend on the extension to avoid unintended consequences."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"RESTRICT"})})}),"\n",(0,t.jsxs)(n.p,{children:["Refuse to drop an extension if any objects depend on it (other than its own member objects and other extensions listed in the same ",(0,t.jsx)(n.code,{children:"DROP"})," command). This is the default."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["To remove the extension ",(0,t.jsx)(n.code,{children:"hstore"})," from the current database:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP EXTENSION hstore;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command fails if any of the extension objects are in use in the database. For example, if a table is defined with columns of the ",(0,t.jsx)(n.code,{children:"hstore"})," type. Add the ",(0,t.jsx)(n.code,{children:"CASCADE"})," option to forcibly remove those dependent objects."]}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DROP EXTENSION"})," is a Cloudberry Database extension."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/sql-stmts/create-extension",children:(0,t.jsx)(n.code,{children:"CREATE EXTENSION"})}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/alter-extension",children:(0,t.jsx)(n.code,{children:"ALTER EXTENSION"})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var t=s(67294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);