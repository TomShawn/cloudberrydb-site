"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2322],{94968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(85893),a=n(11151);const i={title:"gpreload"},o="gpreload",r={id:"sys-utilities/gpreload",title:"gpreload",description:"Reloads Cloudberry Database table data sorting the data based on specified columns.",source:"@site/docs/sys-utilities/gpreload.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpreload",permalink:"/docs/sys-utilities/gpreload",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpreload.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1739329693,formattedLastUpdatedAt:"Feb 12, 2025",frontMatter:{title:"gpreload"},sidebar:"docsbars",previous:{title:"gprestore",permalink:"/docs/sys-utilities/gprestore"},next:{title:"gprecoverseg",permalink:"/docs/sys-utilities/gprecoverseg"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Notes",id:"notes",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"gpreload",children:"gpreload"}),"\n",(0,s.jsx)(t.p,{children:"Reloads Cloudberry Database table data sorting the data based on specified columns."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"gpreload -d <database> [-p <port>] {-t | --table-file} <path_to_file> [-a]\n\ngpreload -h \n\ngpreload --version\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"gpreload"})," utility reloads table data with column data sorted. For tables that were created with the table storage option ",(0,s.jsx)(t.code,{children:"appendoptimized=TRUE"})," and compression enabled, reloading the data with sorted data can improve table compression. You specify a list of tables to be reloaded and the table columns to be sorted in a text file."]}),"\n",(0,s.jsx)(t.p,{children:"Compression is improved by sorting data when the data in the column has a relatively low number of distinct values when compared to the total number of rows."}),"\n",(0,s.jsx)(t.p,{children:"For a table being reloaded, the order of the columns to be sorted might affect compression. The columns with the fewest distinct values should be listed first. For example, listing state then city would generally result in better compression than listing city then state."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"public.cust_table: state, city\npublic.cust_table: city, state\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For information about the format of the file used with ",(0,s.jsx)(t.code,{children:"gpreload"}),", see the ",(0,s.jsx)(t.code,{children:"--table-file"})," option."]}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.p,{children:"To improve reload performance, indexes on tables being reloaded should be removed before reloading the data."}),"\n",(0,s.jsxs)(t.p,{children:["Running the ",(0,s.jsx)(t.code,{children:"ANALYZE"})," command after reloading table data might query performance because of a change in the data distribution of the reloaded data."]}),"\n",(0,s.jsx)(t.p,{children:"For each table, the utility copies table data to a temporary table, truncates the existing table data, and inserts data from the temporary table to the table in the specified sort order. Each table reload is performed in a single transaction."}),"\n",(0,s.jsxs)(t.p,{children:["For a partitioned table, you can reload the data of a leaf partition. However, data is inserted from the root partitioned table, which acquires a ",(0,s.jsx)(t.code,{children:"ROW EXCLUSIVE"})," lock on the entire table."]}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-a (do not prompt)"})})}),"\n",(0,s.jsxs)(t.p,{children:["Optional. If specified, the ",(0,s.jsx)(t.code,{children:"gpreload"})," utility does not prompt the user for confirmation."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-d database"})})}),"\n",(0,s.jsxs)(t.p,{children:["The database that contains the tables to be reloaded. The ",(0,s.jsx)(t.code,{children:"gpreload"})," utility connects to the database as the user running the utility."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-p port"})})}),"\n",(0,s.jsxs)(t.p,{children:["The Cloudberry Database coordinator port. If not specified, the value of the ",(0,s.jsx)(t.code,{children:"PGPORT"})," environment variable is used. If the value is not available, an error is returned."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"{-t | --table-file } path_to_file"})})}),"\n",(0,s.jsx)(t.p,{children:"The location and name of file containing list of schema qualified table names to reload and the column names to reorder from the Cloudberry Database. Only user defined tables are supported. Views or system catalog tables are not supported."}),"\n",(0,s.jsxs)(t.p,{children:["If indexes are defined on table listed in the file, ",(0,s.jsx)(t.code,{children:"gpreload"})," prompts to continue."]}),"\n",(0,s.jsx)(t.p,{children:"Each line specifies a table name and the list of columns to sort. This is the format of each line in the file:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"schema.table_name: column [desc] [, column2 [desc] ... ]"})}),"\n",(0,s.jsxs)(t.p,{children:["The table name is followed by a colon ( : ) and then at least one column name. If you specify more than one column, separate the column names with a comma. The columns are sorted in ascending order. Specify the keyword ",(0,s.jsx)(t.code,{children:"desc"})," after the column name to sort the column in descending order."]}),"\n",(0,s.jsx)(t.p,{children:"Wildcard characters are not supported."}),"\n",(0,s.jsxs)(t.p,{children:["If there are errors in the file, ",(0,s.jsx)(t.code,{children:"gpreload"})," reports the first error and exits. No data is reloaded."]}),"\n",(0,s.jsx)(t.p,{children:"The following example reloads three tables:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"public.clients: region, state, rep_id desc\npublic.merchants: region, state\ntest.lineitem: group, assy, whse \n"})}),"\n",(0,s.jsxs)(t.p,{children:["In the first table ",(0,s.jsx)(t.code,{children:"public.clients"}),", the data in the ",(0,s.jsx)(t.code,{children:"rep_id"})," column is sorted in descending order. The data in the other columns are sorted in ascending order."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--version (show utility version)"})})}),"\n",(0,s.jsx)(t.p,{children:"Displays the version of this utility."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-? (help)"})})}),"\n",(0,s.jsx)(t.p,{children:"Displays the online help."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["This example command reloads the tables in the database ",(0,s.jsx)(t.code,{children:"mytest"})," that are listed in the file ",(0,s.jsx)(t.code,{children:"data-tables.txt"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"gpreload -d mytest --table-file data-tables.txt\n"})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/sql-stmts/create-table",children:(0,s.jsx)(t.code,{children:"CREATE TABLE"})})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);