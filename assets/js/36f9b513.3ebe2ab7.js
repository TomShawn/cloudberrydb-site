"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9986],{17785:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(85893),o=s(11151);const i={title:"ALTER CONVERSION"},r="ALTER CONVERSION",c={id:"sql-stmts/alter-conversion",title:"ALTER CONVERSION",description:"Changes the definition of a conversion.",source:"@site/docs/sql-stmts/alter-conversion.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-conversion",permalink:"/docs/sql-stmts/alter-conversion",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-conversion.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732259e3,formattedLastUpdatedAt:"Nov 22, 2024",frontMatter:{title:"ALTER CONVERSION"},sidebar:"docsbars",previous:{title:"ALTER COLLATION",permalink:"/docs/sql-stmts/alter-collation"},next:{title:"ALTER DATABASE",permalink:"/docs/sql-stmts/alter-database"}},l={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"alter-conversion",children:"ALTER CONVERSION"}),"\n",(0,t.jsx)(n.p,{children:"Changes the definition of a conversion."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER CONVERSION <name> RENAME TO <new_name>\n\nALTER CONVERSION <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n\nALTER CONVERSION <name> SET SCHEMA <new_schema>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ALTER CONVERSION"})," changes the definition of a conversion."]}),"\n",(0,t.jsxs)(n.p,{children:["You must own the conversion to use ",(0,t.jsx)(n.code,{children:"ALTER CONVERSION"}),". To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,t.jsx)(n.code,{children:"CREATE"})," privilege on the conversion's schema. (These restrictions enforce that altering the owner does not do anything you could not do by dropping and recreating the conversion. However, a superuser can alter ownership of any conversion anyway.)"]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})})}),"\n",(0,t.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing conversion."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_name"})})}),"\n",(0,t.jsx)(n.p,{children:"The new name of the conversion."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,t.jsx)(n.p,{children:"The new owner of the conversion."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,t.jsx)(n.p,{children:"The new schema for the conversion."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["To rename the conversion ",(0,t.jsx)(n.code,{children:"iso_8859_1_to_utf8"})," to ",(0,t.jsx)(n.code,{children:"latin1_to_unicode"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER CONVERSION iso_8859_1_to_utf8 RENAME TO latin1_to_unicode;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To change the owner of the conversion ",(0,t.jsx)(n.code,{children:"iso_8859_1_to_utf8"})," to ",(0,t.jsx)(n.code,{children:"joe"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER CONVERSION iso_8859_1_to_utf8 OWNER TO joe;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:["There is no ",(0,t.jsx)(n.code,{children:"ALTER CONVERSION"})," statement in the SQL standard."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/sql-stmts/create-conversion",children:"CREATE CONVERSION"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/drop-conversion",children:"DROP CONVERSION"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(67294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);