"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7241],{60329:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(85893),t=r(11151);const i={title:"DROP USER MAPPING"},o="DROP USER MAPPING",a={id:"sql-stmts/drop-user-mapping",title:"DROP USER MAPPING",description:"Removes a user mapping for a foreign server.",source:"@site/docs/sql-stmts/drop-user-mapping.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-user-mapping",permalink:"/zh/docs/sql-stmts/drop-user-mapping",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-user-mapping.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1737527923,formattedLastUpdatedAt:"2025\u5e741\u670822\u65e5",frontMatter:{title:"DROP USER MAPPING"},sidebar:"docsbars",previous:{title:"DROP TYPE",permalink:"/zh/docs/sql-stmts/drop-type"},next:{title:"DROP USER",permalink:"/zh/docs/sql-stmts/drop-user"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"drop-user-mapping",children:"DROP USER MAPPING"}),"\n",(0,n.jsx)(s.p,{children:"Removes a user mapping for a foreign server."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP USER MAPPING [ IF EXISTS ] { <user_name> | USER | CURRENT_USER | PUBLIC } \n    SERVER <server_name>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP USER MAPPING"})," removes an existing user mapping from a foreign server."]}),"\n",(0,n.jsxs)(s.p,{children:["The owner of a foreign server can drop user mappings for that server for any user. Also, a user can drop a user mapping for their own user name if they have been granted the ",(0,n.jsx)(s.code,{children:"USAGE"})," privilege on the server."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not throw an error if the user mapping does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"user_name"})})}),"\n",(0,n.jsxs)(s.p,{children:["User name of the mapping. ",(0,n.jsx)(s.code,{children:"CURRENT_USER"})," and ",(0,n.jsx)(s.code,{children:"USER"})," match the name of the current user. ",(0,n.jsx)(s.code,{children:"PUBLIC"})," is used to match all present and future user names in the system."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"server_name"})})}),"\n",(0,n.jsx)(s.p,{children:"Server name of the user mapping."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Drop the user mapping named ",(0,n.jsx)(s.code,{children:"bob"}),", server ",(0,n.jsx)(s.code,{children:"foo"})," if it exists:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP USER MAPPING IF EXISTS FOR bob SERVER foo;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP SERVER"})," conforms to ISO/IEC 9075-9 (SQL/MED). The ",(0,n.jsx)(s.code,{children:"IF EXISTS"})," clause is a Cloudberry Database extension."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-user-mapping",children:"CREATE USER MAPPING"}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-user-mapping",children:"ALTER USER MAPPING"})]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>o});var n=r(67294);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);