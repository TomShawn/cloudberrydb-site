"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9339],{74508:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(85893),i=s(11151);const r={title:"ALTER VIEW"},o="ALTER VIEW",a={id:"sql-stmts/alter-view",title:"ALTER VIEW",description:"Changes properties of a view.",source:"@site/docs/sql-stmts/alter-view.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-view",permalink:"/docs/sql-stmts/alter-view",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-view.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1739157355,formattedLastUpdatedAt:"Feb 10, 2025",frontMatter:{title:"ALTER VIEW"},sidebar:"docsbars",previous:{title:"ALTER USER",permalink:"/docs/sql-stmts/alter-user"},next:{title:"ANALYZE",permalink:"/docs/sql-stmts/analyze"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"alter-view",children:"ALTER VIEW"}),"\n",(0,t.jsx)(n.p,{children:"Changes properties of a view."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER VIEW [ IF EXISTS ] <name> ALTER [ COLUMN ] <column_name> SET DEFAULT <expression>\n\nALTER VIEW [ IF EXISTS ] <name> ALTER [ COLUMN ] <column_name> DROP DEFAULT\n\nALTER VIEW [ IF EXISTS ] <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n\nALTER VIEW [ IF EXISTS ] <name> RENAME TO <new_name>\n\nALTER VIEW [ IF EXISTS ] <name> SET SCHEMA <new_schema>\n\nALTER VIEW [ IF EXISTS ] <name> SET ( <view_option_name> [= <view_option_value>] [, ... ] )\n\nALTER VIEW [ IF EXISTS ] <name> RESET ( <view_option_name> [, ... ] )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ALTER VIEW"})," changes various auxiliary properties of a view. (If you want to modify the view's defining query, use ",(0,t.jsx)(n.code,{children:"CREATE OR REPLACE VIEW"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["You must own the view to use ",(0,t.jsx)(n.code,{children:"ALTER VIEW"}),". To change a view's schema you must also have ",(0,t.jsx)(n.code,{children:"CREATE"})," privilege on the new schema. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,t.jsx)(n.code,{children:"CREATE"})," privilege on the view's schema. These restrictions enforce that altering the owner does not do anything you could not do by dropping and recreating the view. However, a superuser can alter ownership of any view."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})})}),"\n",(0,t.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing view."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IF EXISTS"})})}),"\n",(0,t.jsx)(n.p,{children:"Do not throw an error if the view does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET/DROP DEFAULT"})})}),"\n",(0,t.jsxs)(n.p,{children:["These forms set or remove the default value for a column. A view column's default value is substituted into any ",(0,t.jsx)(n.code,{children:"INSERT"})," or ",(0,t.jsx)(n.code,{children:"UPDATE"})," command whose target is the view, before applying any rules or triggers for the view. The view's default will therefore take precedence over any default values from underlying relations."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,t.jsx)(n.p,{children:"The user name of the new owner of the view."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_name"})})}),"\n",(0,t.jsx)(n.p,{children:"The new name of the view."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,t.jsx)(n.p,{children:"The new schema for the view."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET ( view_option_name [= view_option_value] [, ... ] )"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"RESET ( view_option_name [, ... ] )"})})]}),"\n",(0,t.jsx)(n.p,{children:"Sets or resets a view option. Currently supported options are:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"check_option (string)"})})}),"\n",(0,t.jsxs)(n.p,{children:["Changes the check option of the view. The value must be ",(0,t.jsx)(n.code,{children:"local"})," or ",(0,t.jsx)(n.code,{children:"cascaded"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"security_barrier (boolean)"})})}),"\n",(0,t.jsxs)(n.p,{children:["Changes the security-barrier property of the view. The value must be a Boolean value, such as ",(0,t.jsx)(n.code,{children:"true"})," or ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.p,{children:["For historical reasons, ",(0,t.jsx)(n.code,{children:"ALTER TABLE"})," can be used with views, too; however, the only variants of ",(0,t.jsx)(n.code,{children:"ALTER TABLE"})," that are allowed with views are equivalent to the statements shown above."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["To rename the view ",(0,t.jsx)(n.code,{children:"foo"})," to ",(0,t.jsx)(n.code,{children:"bar"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER VIEW foo RENAME TO bar;\n"})}),"\n",(0,t.jsx)(n.p,{children:"To attach a default column value to an updatable view:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE base_table (id int, ts timestamptz);\nCREATE VIEW a_view AS SELECT * FROM base_table;\nALTER VIEW a_view ALTER COLUMN ts SET DEFAULT now();\nINSERT INTO base_table(id) VALUES(1);  -- ts will receive a NULL\nINSERT INTO a_view(id) VALUES(2);  -- ts will receive the current time\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ALTER VIEW"})," is a Cloudberry Database extension of the SQL standard."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/sql-stmts/create-view",children:"CREATE VIEW"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/drop-view",children:"DROP VIEW"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(67294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);