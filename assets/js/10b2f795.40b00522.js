"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5588],{74539:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=s(85893),i=s(11151);const a={title:"1.5.0"},t="Cloudberry Database v1.5.0 Release Notes",l={id:"releases/release-1.5.0",title:"1.5.0",description:"This is not an Apache release!",source:"@site/docs/releases/release-1.5.0.md",sourceDirName:"releases",slug:"/releases/release-1.5.0",permalink:"/docs/releases/release-1.5.0",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/releases/release-1.5.0.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1737527923,formattedLastUpdatedAt:"Jan 22, 2025",frontMatter:{title:"1.5.0"},sidebar:"docsbars",previous:{title:"1.5.1",permalink:"/docs/releases/release-1.5.1"}},o={},d=[{value:"New features",id:"new-features",level:2},{value:"Query processing",id:"query-processing",level:3},{value:"Cluster management",id:"cluster-management",level:3},{value:"Storage",id:"storage",level:3},{value:"Security",id:"security",level:3},{value:"Change description",id:"change-description",level:2},{value:"SQL syntax changes",id:"sql-syntax-changes",level:3},{value:"Functionality changes",id:"functionality-changes",level:3},{value:"Parameter changes",id:"parameter-changes",level:3},{value:"Bug fixes",id:"bug-fixes",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"This is not an Apache release!"})}),"\n",(0,r.jsx)(n.h1,{id:"cloudberry-database-v150-release-notes",children:"Cloudberry Database v1.5.0 Release Notes"}),"\n",(0,r.jsx)(n.p,{children:"Version number: v1.5.0"}),"\n",(0,r.jsx)(n.p,{children:"Cloudberry Database v1.5.0 adds several new features, and includes several performance/stability optimizations and bug fixes."}),"\n",(0,r.jsxs)(n.p,{children:["Quick try: ",(0,r.jsx)(n.a,{href:"https://github.com/cloudberrydb/cloudberrydb/releases/tag/1.5.0",children:"v1.5.0"})]}),"\n",(0,r.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("th",{children:"Feature"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowSpan:"4",children:"Query processing"}),(0,r.jsx)("td",{children:"Supports creating AO or AOCO tables and refreshing materialized views in parallel."})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Supports automatically using materialized views to optimize queries."})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Supports deploying a cluster with only a single computing node."})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Supports quickly deploying a cluster with only a command."})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowSpan:"2",children:"Storage"}),(0,r.jsx)("td",{children:"Supports incremental materialized views."})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Supports using unique indexes on AO tables."})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Security"}),(0,r.jsx)("td",{children:"Supports configuring user password policy using Profile."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Each new feature is described as follows:"}),"\n",(0,r.jsx)(n.h3,{id:"query-processing",children:"Query processing"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports creating AO or AOCO tables and refreshing materialized views in parallel."})}),"\n",(0,r.jsxs)(n.p,{children:["Starting from v1.5.0, Cloudberry Database supports creating append-optimized (AO) tables and append-optimized column-oriented (AOCO) tables in parallel by using the ",(0,r.jsx)(n.code,{children:"CREATE TABLE AS"})," statement, and supports refreshing materialized views in parallel based on the AO or AOCO tables. Parallel processing accelerates table creation and materialized view refresh."]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/parallel-create-ao-refresh-mv.md",children:"Create AO/AOCO Tables and Refresh Materialized Views in Parallel"})," for details."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports automatically using materialized views to optimize queries."})}),"\n",(0,r.jsx)(n.p,{children:"Starting from v1.5.0, Cloudberry Database supports automatically using materialized views to process some or all queries (called AQUMV) during the query planning phase. The applicable scenarios include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aggregation queries on large data sets: For queries that need to aggregate results from millions of records, AQUMV can significantly reduce query time."}),"\n",(0,r.jsx)(n.li,{children:"Frequently updated large tables: In an environment where data is frequently updated, IMV can ensure that the query results are real-time and accurate."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/use-auto-materialized-view-to-answer-queries.md",children:"Use Automatic Materialized Views for Query Optimization"})," for details."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cluster-management",children:"Cluster management"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports deploying a cluster with only a single computing node."})}),"\n",(0,r.jsx)(n.p,{children:"Before v1.5.0, when you deployed a Cloudberry Database cluster, you needed to deploy at least one coordinator node and one segment node, as well as specify numerous configuration information and startup parameters. This process was relatively complex and time-consuming."}),"\n",(0,r.jsx)(n.p,{children:"Starting from v1.5.0, you can deploy a single-computing-node Cloudberry Database cluster just like deploying PostgreSQL. The cluster only contains one coordinator node, without the need to specify numerous configuration parameters or pre-allocate computing resources for multiple nodes."}),"\n",(0,r.jsxs)(n.p,{children:["You can quickly deploy a single-node Cloudberry Database cluster using the tool ",(0,r.jsx)(n.code,{children:"gpdemo"}),". See ",(0,r.jsx)(n.a,{href:"/docs/deploy-cbdb-with-single-node",children:"Deploy Cloudberry Database with a Single Computing Node"})," for details."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports quickly deploying a cluster with only a command."})}),"\n",(0,r.jsxs)(n.p,{children:["Before v1.5.0, you needed to spend time writing configuration files and parameters if you wanted to deploy a small cluster with segments on a single node to make a demo. Starting from v1.5.0, to deploy a Cloudberry Database cluster with a specified number of segments, you only need to use the built-in script ",(0,r.jsx)(n.code,{children:"gpdemo"}),"  with a single command, that is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gpdemo\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/sys-utilities/gpdemo",children:"Use gpdemo to Quickly Deploy Cloudberry Database"})," for details."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports incremental materialized views."})}),"\n",(0,r.jsx)(n.p,{children:"The incremental materialized view is a special form of materialized view. When data is inserted, updated, or deleted in a base table in Cloudberry Database, the incremental materialized view does not need to recalculate all the data in the entire view. Instead, it only updates the parts that have been updated since the last refresh. This can save a lot of computing resources and time, and significantly improve performance, especially when dealing with large datasets."}),"\n",(0,r.jsxs)(n.p,{children:["Starting from v1.5.0, if a query involves intermediary result sets that require acceleration, or in scenarios with many read operations but few write operations, you can use incremental materialized views to speed up the queries. See ",(0,r.jsx)(n.a,{href:"/docs/use-incremental-materialized-view.md",children:"Incremental Materialized View in Cloudberry Database"})," for details."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports using unique indexes on AO tables."})}),"\n",(0,r.jsx)(n.p,{children:"Starting from v1.5.0, you can create a unique index on an Append-Optimized (AO) or Append-Optimized Column Store (AOCS) table in Cloudberry Database. With a unique index, Cloudberry Database checks the unique constraint when data is inserted into the AO table to ensure the uniqueness of the data. At the same time, the database optimizes specific queries with the characteristic of uniqueness to improve the query performance."}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/use-unique-index-on-ao-tables.md",children:"Create Unique Index on AO Table"})," for details."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports configuring user password policy using Profile."})}),"\n",(0,r.jsx)(n.p,{children:"Profile refers to the password policy configuration, which is used to control the password security policy of users in Cloudberry Database. You can bind  a profile to one or more users to control the password security policy of database users. Profile defines the rules for user management and password reuse. With Profile, the database administrator can use SQL to force some constraints, such as locking accounts after login failures or controlling the number of password reuses."}),"\n",(0,r.jsx)(n.p,{children:"Starting from v1.5.0, Cloudberry Database supports creating profiles through SQL statements and binding profiles to one or more users, thereby controlling the password policy for database users."}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/set-password-profile.md",children:"Configure password policy in Cloudberry Database"})," for details."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"change-description",children:"Change description"}),"\n",(0,r.jsx)(n.h3,{id:"sql-syntax-changes",children:"SQL syntax changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CREATE MATERIALIZED VIEW"})," now supports the ",(0,r.jsx)(n.code,{children:"INCREMENTAL"})," option. You can use the SQL command ",(0,r.jsx)(n.code,{children:"CREATE INCREMENTAL MATERIALIZED VIEW"})," to create incremental materialized views. The complete syntax support is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE [INCREMENTAL] MATERIALIZED VIEW [ IF NOT EXISTS ] table_name\n    [ (column_name [, ...] ) ]\n    [ USING method ]\n    [ WITH ( storage_parameter [= value] [, ... ] ) ]\n    [ TABLESPACE tablespace_name ]\n    AS query\n    [ WITH [ NO ] DATA ]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"functionality-changes",children:"Functionality changes"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h3,{id:"parameter-changes",children:"Parameter changes"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed an issue of memory overflow in AOCO tables. This bug led to the following error message:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET default_table_access_method=ao_column;\nCREATE temp TABLE nocolumns();\n\nSELECT EXISTS(SELECT * FROM nocolumns);\n\nWARNING:  detected write past chunk end in ExecutorState 0x8f79b78  (seg0 slice1 127.0.1.1:7002 pid=16215)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fixed the alignment issue of ",(0,r.jsx)(n.code,{children:"operatorMem"})," in the output results when viewing query plans using ",(0,r.jsx)(n.code,{children:"EXPLAIN"}),". The display before the fix is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET gp_resqueue_print_operator_memory_limits=ON;\nEXPLAIN(COSTS OFF) SELECT COUNT(*) FROM test_hj_spill;\n\n                                QUERY PLAN\n----------------------------------------------------------------------------\nFinalize AggregateoperatorMem: 100 kB\n\n    ->  Gather Motion 3:1  (slice1; segments: 3)operatorMem: 100 kB\n\n                ->  Partial AggregateoperatorMem: 100 kB\n\n                        ->  Seq Scan on test_hj_spilloperatorMem: 100 kB\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed an issue causing memory exception in the snapshot under certain conditions, which might lead to a core dump during transaction processing in some scenarios."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Improved the accuracy of internal table size estimation in parallel hash joins during parallel scan operations."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Added support for Semi HashJoin types during parallel scans."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Improved the logic for handling ",(0,r.jsx)(n.code,{children:"NOT IN"})," clauses. Now Cloudberry Database can correctly handle scenarios involving ",(0,r.jsx)(n.code,{children:"NULL"})," values. For example, executing queries like ",(0,r.jsx)(n.code,{children:"SELECT c1 FROM t1_lasj WHERE c1 NOT IN (SELECT c1n FROM t2_lasj_has_null WHERE c1n IS NULL OR c1n IS NULL);"})," can output the correct results."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed issues encountered when compiling and running Cloudberry Database on macOS."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fixed an issue where the user's ",(0,r.jsx)(n.code,{children:"search_path"})," was altered during ",(0,r.jsx)(n.code,{children:"CREATE EXTENSION"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var r=s(67294);const i={},a=r.createContext(i);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);