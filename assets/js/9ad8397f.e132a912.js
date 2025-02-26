"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5745],{47489:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>h,default:()=>o,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var t=s(85893),c=s(11151);const n={title:"Create and Manage Schemas"},h="Create and Manage Schemas in Cloudberry Database",r={id:"create-and-manage-schemas",title:"Create and Manage Schemas",description:"In Cloudberry Database, schemas logically organize objects and data in a database. Schemas allow you to have more than one object (such as tables) with the same name in the database without conflict if the objects are in different schemas.",source:"@site/docs/create-and-manage-schemas.md",sourceDirName:".",slug:"/create-and-manage-schemas",permalink:"/docs/create-and-manage-schemas",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/create-and-manage-schemas.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740470606,formattedLastUpdatedAt:"Feb 25, 2025",frontMatter:{title:"Create and Manage Schemas"},sidebar:"docsbars",previous:{title:"Create and Manage Tables",permalink:"/docs/create-and-manage-tables"},next:{title:"Create and Manage Views",permalink:"/docs/create-and-manage-views"}},i={},l=[{value:"The Default &quot;Public&quot; Schema",id:"the-default-public-schema",level:2},{value:"Create a schema",id:"create-a-schema",level:2},{value:"Schema search paths",id:"schema-search-paths",level:2},{value:"Set the schema search path",id:"set-the-schema-search-path",level:3},{value:"View the current schema",id:"view-the-current-schema",level:3},{value:"Drop a schema",id:"drop-a-schema",level:2},{value:"System schemas",id:"system-schemas",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"create-and-manage-schemas-in-cloudberry-database",children:"Create and Manage Schemas in Cloudberry Database"}),"\n",(0,t.jsx)(a.p,{children:"In Cloudberry Database, schemas logically organize objects and data in a database. Schemas allow you to have more than one object (such as tables) with the same name in the database without conflict if the objects are in different schemas."}),"\n",(0,t.jsx)(a.h2,{id:"the-default-public-schema",children:'The Default "Public" Schema'}),"\n",(0,t.jsxs)(a.p,{children:["Every database has a default schema named ",(0,t.jsx)(a.em,{children:"public"}),". If you do not create any schemas, objects are created in the ",(0,t.jsx)(a.em,{children:"public"})," schema. All database roles (users) have ",(0,t.jsx)(a.code,{children:"CREATE"})," and ",(0,t.jsx)(a.code,{children:"USAGE"})," privileges in the ",(0,t.jsx)(a.em,{children:"public"})," schema. When you create a schema, you grant privileges to your users to allow access to the schema."]}),"\n",(0,t.jsx)(a.h2,{id:"create-a-schema",children:"Create a schema"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"CREATE SCHEMA"})," command to create a new schema. For example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"=> CREATE SCHEMA myschema;\n"})}),"\n",(0,t.jsx)(a.p,{children:"To create or access objects in a schema, write a qualified name consisting of the schema name and table name separated by a period. For example:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"myschema.table\n"})}),"\n",(0,t.jsxs)(a.p,{children:["See ",(0,t.jsx)(a.a,{href:"#schema-search-paths",children:"Schema search paths"})," for information about accessing a schema."]}),"\n",(0,t.jsx)(a.p,{children:"You can create a schema owned by someone else, for example, to restrict the activities of your users to well-defined namespaces. The syntax is:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"=> CREATE SCHEMA `schemaname` AUTHORIZATION `username`;\n"})}),"\n",(0,t.jsx)(a.h2,{id:"schema-search-paths",children:"Schema search paths"}),"\n",(0,t.jsx)(a.p,{children:"To specify an object's location in a database, use the schema-qualified name. For example:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"=> SELECT * FROM myschema.mytable;\n"})}),"\n",(0,t.jsxs)(a.p,{children:["You can set the ",(0,t.jsx)(a.code,{children:"search_path"})," configuration parameter to specify the order in which to search the available schemas for objects. The schema listed first in the search path becomes the ",(0,t.jsx)(a.em,{children:"default"})," schema. If a schema is not specified, objects are created in the default schema."]}),"\n",(0,t.jsx)(a.h3,{id:"set-the-schema-search-path",children:"Set the schema search path"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"search_path"})," configuration parameter sets the schema search order. The ",(0,t.jsx)(a.code,{children:"ALTER DATABASE"})," command sets the search path. For example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"=> ALTER DATABASE mydatabase SET search_path TO myschema, \npublic, pg_catalog;\n"})}),"\n",(0,t.jsxs)(a.p,{children:["You can also set ",(0,t.jsx)(a.code,{children:"search_path"})," for a particular role (user) using the ",(0,t.jsx)(a.code,{children:"ALTER ROLE"})," command. For example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"=> ALTER ROLE sally SET search_path TO myschema, public, \npg_catalog;\n"})}),"\n",(0,t.jsxs)(a.admonition,{type:"tip",children:[(0,t.jsx)(a.p,{children:"When working with Cloudberry Database, it is recommended that you:"}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Explicitly specify the schema when creating new objects to ensure they are created in the intended schema."}),"\n",(0,t.jsxs)(a.li,{children:["Not rely on ",(0,t.jsx)(a.code,{children:"search_path"})," to implicitly direct the creation of new objects to a specific schema other than ",(0,t.jsx)(a.code,{children:"public"}),". Otherwise, the database might create the objects in an unintended schema."]}),"\n"]})]}),"\n",(0,t.jsx)(a.h3,{id:"view-the-current-schema",children:"View the current schema"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"current_schema()"})," function to view the current schema. For example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"=> SELECT current_schema();\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"SHOW"})," command to view the current search path. For example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"=> SHOW search_path;\n"})}),"\n",(0,t.jsx)(a.h2,{id:"drop-a-schema",children:"Drop a schema"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"DROP SCHEMA"})," command to drop (delete) a schema. For example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"=> DROP SCHEMA myschema;\n"})}),"\n",(0,t.jsx)(a.p,{children:"By default, the schema must be empty before you can drop it. To drop a schema and all of its objects (tables, data, functions, and so on) use:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"=> DROP SCHEMA myschema CASCADE;\n"})}),"\n",(0,t.jsx)(a.h2,{id:"system-schemas",children:"System schemas"}),"\n",(0,t.jsx)(a.p,{children:"The following system-level schemas exist in every database:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"pg_catalog"})," contains the system catalog tables, built-in data types, functions, and operators. It is always part of the schema search path, even if it is not explicitly named in the search path."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"information_schema"})," consists of a standardized set of views that contain information about the objects in the database. These views get system information from the system catalog tables in a standardized way."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"pg_toast"})," stores large objects such as records that exceed the page size. This schema is used internally by the Cloudberry Database system."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"pg_bitmapindex"})," stores bitmap index objects such as lists of values. This schema is used internally by the Cloudberry Database system."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"pg_aoseg"})," stores append-optimized table objects. This schema is used internally by the Cloudberry Database system."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"gp_toolkit"})," is an administrative schema that contains external tables, views, and functions that you can access with SQL commands. All database users can access ",(0,t.jsx)(a.code,{children:"gp_toolkit"})," to view and query the system log files and other system metrics."]}),"\n"]})]})}function o(e={}){const{wrapper:a}={...(0,c.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>r,a:()=>h});var t=s(67294);const c={},n=t.createContext(c);function h(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:h(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);