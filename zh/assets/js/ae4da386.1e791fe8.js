"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2168],{46408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=n(85893),r=n(11151);const o={title:"DROP OPERATOR"},i="DROP OPERATOR",d={id:"sql-stmts/drop-operator",title:"DROP OPERATOR",description:"Removes an operator.",source:"@site/docs/sql-stmts/drop-operator.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-operator",permalink:"/zh/docs/sql-stmts/drop-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-operator.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1734402925,formattedLastUpdatedAt:"2024\u5e7412\u670817\u65e5",frontMatter:{title:"DROP OPERATOR"},sidebar:"docsbars",previous:{title:"DROP OPERATOR FAMILY",permalink:"/zh/docs/sql-stmts/drop-operator-family"},next:{title:"DROP OWNED",permalink:"/zh/docs/sql-stmts/drop-owned"}},a={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"drop-operator",children:"DROP OPERATOR"}),"\n",(0,s.jsx)(t.p,{children:"Removes an operator."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DROP OPERATOR [IF EXISTS] <name> ( {<left_type> | NONE} , \n    {<right_type> | NONE} ) [, ...] [CASCADE | RESTRICT]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"DROP OPERATOR"})," drops an existing operator from the database system. To run this command you must be the owner of the operator."]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"IF EXISTS"})})}),"\n",(0,s.jsx)(t.p,{children:"Do not throw an error if the operator does not exist. A notice is issued in this case."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"name"})})}),"\n",(0,s.jsx)(t.p,{children:"The name (optionally schema-qualified) of an existing operator."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"left_type"})})}),"\n",(0,s.jsxs)(t.p,{children:["The data type of the operator's left operand; write ",(0,s.jsx)(t.code,{children:"NONE"})," if the operator has no left operand."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"right_type"})})}),"\n",(0,s.jsxs)(t.p,{children:["The data type of the operator's right operand; write ",(0,s.jsx)(t.code,{children:"NONE"})," if the operator has no right operand."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"CASCADE"})})}),"\n",(0,s.jsx)(t.p,{children:"Automatically drop objects that depend on the operator (such as views using it), and in turn all objects that depend on those objects."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"RESTRICT"})})}),"\n",(0,s.jsx)(t.p,{children:"Refuse to drop the operator if any objects depend on it. This is the default."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Remove the power operator ",(0,s.jsx)(t.code,{children:"a^b"})," for type ",(0,s.jsx)(t.code,{children:"integer"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DROP OPERATOR ^ (integer, integer);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Remove the left unary bitwise complement operator ",(0,s.jsx)(t.code,{children:"~b"})," for type ",(0,s.jsx)(t.code,{children:"bit"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DROP OPERATOR ~ (none, bit);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Remove the right unary factorial operator ",(0,s.jsx)(t.code,{children:"x!"})," for type ",(0,s.jsx)(t.code,{children:"bigint"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DROP OPERATOR ! (bigint, none);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Remove multiple operators in one command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DROP OPERATOR ~ (none, bit), ! (bigint, none);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["There is no ",(0,s.jsx)(t.code,{children:"DROP OPERATOR"})," statement in the SQL standard."]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/zh/docs/sql-stmts/alter-operator",children:"ALTER OPERATOR"}),", ",(0,s.jsx)(t.a,{href:"/zh/docs/sql-stmts/create-operator",children:"CREATE OPERATOR"})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);