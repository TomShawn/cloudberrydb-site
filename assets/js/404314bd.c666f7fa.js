"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8897],{26592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=t(85893),i=t(11151);const o={title:"DROP FUNCTION"},r="DROP FUNCTION",d={id:"sql-stmts/drop-function",title:"DROP FUNCTION",description:"Removes a function.",source:"@site/docs/sql-stmts/drop-function.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-function",permalink:"/docs/sql-stmts/drop-function",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-function.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1739329693,formattedLastUpdatedAt:"Feb 12, 2025",frontMatter:{title:"DROP FUNCTION"},sidebar:"docsbars",previous:{title:"DROP FOREIGN TABLE",permalink:"/docs/sql-stmts/drop-foreign-table"},next:{title:"DROP GROUP",permalink:"/docs/sql-stmts/drop-group"}},c={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"drop-function",children:"DROP FUNCTION"}),"\n",(0,s.jsx)(n.p,{children:"Removes a function."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP FUNCTION [IF EXISTS] name ( [ [argmode] [argname] argtype [, ...] ] )\n    [CASCADE | RESTRICT]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DROP FUNCTION"})," removes the definition of an existing function. To run this command the user must be the owner of the function. The argument types to the function must be specified, since several different functions may exist with the same name and different argument lists."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"IF EXISTS"})})}),"\n",(0,s.jsx)(n.p,{children:"Do not throw an error if the function does not exist. A notice is issued in this case."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing function."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argmode"})})}),"\n",(0,s.jsxs)(n.p,{children:["The mode of an argument: either ",(0,s.jsx)(n.code,{children:"IN"}),", ",(0,s.jsx)(n.code,{children:"OUT"}),", ",(0,s.jsx)(n.code,{children:"INOUT"}),", or ",(0,s.jsx)(n.code,{children:"VARIADIC"}),". If omitted, the default is ",(0,s.jsx)(n.code,{children:"IN"}),". Note that ",(0,s.jsx)(n.code,{children:"DROP FUNCTION"})," does not actually pay any attention to ",(0,s.jsx)(n.code,{children:"OUT"})," arguments, since only the input arguments are needed to determine the function's identity. So it is sufficient to list the ",(0,s.jsx)(n.code,{children:"IN"}),", ",(0,s.jsx)(n.code,{children:"INOUT"}),", and ",(0,s.jsx)(n.code,{children:"VARIADIC"})," arguments."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argname"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of an argument. Note that ",(0,s.jsx)(n.code,{children:"DROP FUNCTION"})," does not actually pay any attention to argument names, since only the argument data types are needed to determine the function's identity."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argtype"})})}),"\n",(0,s.jsx)(n.p,{children:"The data type(s) of the function's arguments (optionally schema-qualified), if any."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"CASCADE"})})}),"\n",(0,s.jsx)(n.p,{children:"Automatically drop objects that depend on the function (such as operators)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"RESTRICT"})})}),"\n",(0,s.jsx)(n.p,{children:"Refuse to drop the function if any objects depend on it. This is the default."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"This command removes the square root function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP FUNCTION sqrt(integer);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"DROP FUNCTION"})," statement is defined in the SQL standard, but it is not compatible with this command."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/sql-stmts/create-function",children:"CREATE FUNCTION"}),", ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/alter-function",children:"ALTER FUNCTION"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);