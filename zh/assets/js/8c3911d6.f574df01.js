"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4362],{29284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(85893),s=t(11151);const a={title:"CREATE FOREIGN DATA WRAPPER"},i="CREATE FOREIGN DATA WRAPPER",o={id:"sql-stmts/create-foreign-data-wrapper",title:"CREATE FOREIGN DATA WRAPPER",description:"Defines a new foreign-data wrapper.",source:"@site/docs/sql-stmts/create-foreign-data-wrapper.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-foreign-data-wrapper",permalink:"/zh/docs/sql-stmts/create-foreign-data-wrapper",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-foreign-data-wrapper.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1739157355,formattedLastUpdatedAt:"2025\u5e742\u670810\u65e5",frontMatter:{title:"CREATE FOREIGN DATA WRAPPER"},sidebar:"docsbars",previous:{title:"CREATE EXTERNAL TABLE",permalink:"/zh/docs/sql-stmts/create-external-table"},next:{title:"CREATE FOREIGN TABLE",permalink:"/zh/docs/sql-stmts/create-foreign-table"}},d={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-foreign-data-wrapper",children:"CREATE FOREIGN DATA WRAPPER"}),"\n",(0,r.jsx)(n.p,{children:"Defines a new foreign-data wrapper."}),"\n",(0,r.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE FOREIGN DATA WRAPPER <name>\n    [ HANDLER <handler_function> | NO HANDLER ]\n    [ VALIDATOR <validator_function> | NO VALIDATOR ]\n    [ OPTIONS ( [ mpp_execute { 'coordinator' | 'any' | 'all segments' } [, ] ] <option> '<value>' [, ... ] ) ]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CREATE FOREIGN DATA WRAPPER"})," creates a new foreign-data wrapper in the current database. The user who defines the foreign-data wrapper becomes its owner."]}),"\n",(0,r.jsx)(n.p,{children:"The foreign-data wrapper name must be unique within the database."}),"\n",(0,r.jsx)(n.p,{children:"Only superusers can create foreign-data wrappers."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})})}),"\n",(0,r.jsx)(n.p,{children:"The name of the foreign-data wrapper to create. The name must be unique within the database."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"HANDLER handler_function"})})}),"\n",(0,r.jsxs)(n.p,{children:["The name of a previously registered function that Cloudberry Database calls to retrieve the execution functions for foreign tables. hander_function must take no arguments, and its return type must be ",(0,r.jsx)(n.code,{children:"fdw_handler"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"It is possible to create a foreign-data wrapper with no handler function, but you can only declare, not access, foreign tables using such a wrapper."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"VALIDATOR validator_function"})})}),"\n",(0,r.jsxs)(n.p,{children:["The name of a previously registered function that Cloudberry Database calls to check the generic options provided to the foreign-data wrapper. This function also checks the options for foreign servers, user mappings, and foreign tables that use the foreign-data wrapper. If no validator function or ",(0,r.jsx)(n.code,{children:"NO VALIDATOR"})," is specified, Cloudberry Database does not check options at creation time. (Depending upon the implementation, foreign-data wrappers may ignore or reject invalid options at runtime.)"]}),"\n",(0,r.jsxs)(n.p,{children:["validator_function must take two arguments: one of type ",(0,r.jsx)(n.code,{children:"text[]"}),", which contains the array of options as stored in the system catalogs, and one of type ",(0,r.jsx)(n.code,{children:"oid"}),", which identifies the OID of the system catalog containing the options."]}),"\n",(0,r.jsxs)(n.p,{children:["The return type is ignored; validator_function should report invalid options using the ",(0,r.jsx)(n.code,{children:"ereport(ERROR)"})," function."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"OPTIONS ( option 'value' [, ... ] )"})})}),"\n",(0,r.jsx)(n.p,{children:"The options for the new foreign-data wrapper. Option names must be unique. The option names and values are foreign-data wrapper-specific and are validated using the foreign-data wrappers' validator_function."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"mpp_execute { 'coordinator' | 'any' | 'all segments' }"})})}),"\n",(0,r.jsx)(n.p,{children:"A Cloudberry Database-specific option that identifies the host from which the foreign-data wrapper reads or writes data:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"coordinator"})," (the default)\u2014Read or write data from the coordinator host."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"any"}),"\u2014Read data from either the coordinator host or any one segment, depending on which path costs less."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"all segments"}),"\u2014Read or write data from all segments. To support this option value, the foreign-data wrapper must have a policy that matches the segments to data."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," Cloudberry Database supports parallel writes to foreign tables only when you set ",(0,r.jsx)(n.code,{children:"mpp_execute 'all segments'"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Support for the foreign-data wrapper ",(0,r.jsx)(n.code,{children:"mpp_execute"})," option, and the specific modes, is foreign-data wrapper-specific."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"mpp_execute"})," option can be specified in multiple commands: ",(0,r.jsx)(n.code,{children:"CREATE FOREIGN TABLE"}),", ",(0,r.jsx)(n.code,{children:"CREATE SERVER"}),", and ",(0,r.jsx)(n.code,{children:"CREATE FOREIGN DATA WRAPPER"}),". The foreign table setting takes precedence over the foreign server setting, followed by the foreign-data wrapper setting."]}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.p,{children:"The foreign-data wrapper functionality is still under development. Optimization of queries is primitive (and mostly left to the wrapper)."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Create a useless foreign-data wrapper named ",(0,r.jsx)(n.code,{children:"dummy"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE FOREIGN DATA WRAPPER dummy;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a foreign-data wrapper named ",(0,r.jsx)(n.code,{children:"file"})," with a handler function named ",(0,r.jsx)(n.code,{children:"file_fdw_handler"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE FOREIGN DATA WRAPPER file HANDLER file_fdw_handler;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a foreign-data wrapper named ",(0,r.jsx)(n.code,{children:"mywrapper"})," that includes an option:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE FOREIGN DATA WRAPPER mywrapper OPTIONS (debug 'true');\n"})}),"\n",(0,r.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CREATE FOREIGN DATA WRAPPER"})," conforms to ISO/IEC 9075-9 (SQL/MED), with the exception that the ",(0,r.jsx)(n.code,{children:"HANDLER"})," and ",(0,r.jsx)(n.code,{children:"VALIDATOR"})," clauses are extensions, and the standard clauses ",(0,r.jsx)(n.code,{children:"LIBRARY"})," and ",(0,r.jsx)(n.code,{children:"LANGUAGE"})," are not implemented in Cloudberry Database."]}),"\n",(0,r.jsx)(n.p,{children:"Note, however, that the SQL/MED functionality as a whole is not yet conforming."}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-foreign-data-wrapper",children:"ALTER FOREIGN DATA WRAPPER"}),", ",(0,r.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-foreign-data-wrapper",children:"DROP FOREIGN DATA WRAPPER"}),", ",(0,r.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-foreign-table",children:"CREATE FOREIGN TABLE"}),", ",(0,r.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-server",children:"CREATE SERVER"}),", ",(0,r.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-user-mapping",children:"CREATE USER MAPPING"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);