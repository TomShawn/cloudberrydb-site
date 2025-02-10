"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[6681],{66594:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var s=t(85893),n=t(11151);const d={title:"Create and Manage Database"},r="Create and Manage Cloudberry Database",o={id:"create-and-manage-database",title:"Create and Manage Database",description:"A Cloudberry Database system is a single instance of Cloudberry Database. There can be multiple running Cloudberry Database systems co-existing with each other, but usually a client can only connect to one of them.",source:"@site/docs/create-and-manage-database.md",sourceDirName:".",slug:"/create-and-manage-database",permalink:"/docs/create-and-manage-database",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/create-and-manage-database.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1739157355,formattedLastUpdatedAt:"Feb 10, 2025",frontMatter:{title:"Create and Manage Database"},sidebar:"docsbars",previous:{title:"Load Data from Kafka Using Kafka FDW",permalink:"/docs/data-loading/load-data-from-kafka-using-fdw"},next:{title:"Start and Stop Database",permalink:"/docs/start-and-stop-cbdb-database"}},l={},c=[{value:"About template and default databases",id:"about-template-and-default-databases",level:2},{value:"Create a database",id:"create-a-database",level:2},{value:"Clone a database",id:"clone-a-database",level:3},{value:"Create a database with a different owner",id:"create-a-database-with-a-different-owner",level:3},{value:"View the list of databases",id:"view-the-list-of-databases",level:2},{value:"Alter a database",id:"alter-a-database",level:2},{value:"Drop a database",id:"drop-a-database",level:2}];function i(e){const a={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"create-and-manage-cloudberry-database",children:"Create and Manage Cloudberry Database"}),"\n",(0,s.jsx)(a.p,{children:"A Cloudberry Database system is a single instance of Cloudberry Database. There can be multiple running Cloudberry Database systems co-existing with each other, but usually a client can only connect to one of them."}),"\n",(0,s.jsxs)(a.p,{children:["There can be multiple databases in a Cloudberry Database system. This is different from some database management systems (such as Oracle) where the database instance ",(0,s.jsx)(a.em,{children:"is"})," the database. Although you can create many databases in a Cloudberry Database system, client programs can connect to and access only one database at a time \u2014 you cannot cross-query between databases."]}),"\n",(0,s.jsx)(a.h2,{id:"about-template-and-default-databases",children:"About template and default databases"}),"\n",(0,s.jsxs)(a.p,{children:["Cloudberry Database provides some template databases and a default database, ",(0,s.jsx)(a.em,{children:"template1"}),", ",(0,s.jsx)(a.em,{children:"template0"}),", and ",(0,s.jsx)(a.em,{children:"postgres"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["By default, each new database you create is based on a ",(0,s.jsx)(a.em,{children:"template1"})," database. Cloudberry Database uses ",(0,s.jsx)(a.em,{children:"template1"})," to create databases unless you specify another template. Creating objects in ",(0,s.jsx)(a.em,{children:"template1"})," is not recommended. The objects will be in every database you create using the default template database."]}),"\n",(0,s.jsxs)(a.p,{children:["Cloudberry Database uses another database template, ",(0,s.jsx)(a.em,{children:"template0"}),", internally. Do not drop or modify ",(0,s.jsx)(a.em,{children:"template0"}),". You can use ",(0,s.jsx)(a.em,{children:"template0"})," to create a completely clean database containing only the standard objects predefined by Cloudberry Database at initialization."]}),"\n",(0,s.jsxs)(a.p,{children:["You can use the ",(0,s.jsx)(a.em,{children:"postgres"})," database to connect to Cloudberry Database for the first time. Cloudberry Database uses ",(0,s.jsx)(a.em,{children:"postgres"})," as the default database for administrative connections."]}),"\n",(0,s.jsx)(a.h2,{id:"create-a-database",children:"Create a database"}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"CREATE DATABASE"})," command creates a new database. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"=> CREATE DATABASE <new_dbname>;\n"})}),"\n",(0,s.jsx)(a.p,{children:"To create a database, you must have privileges to create a database or be a Cloudberry Database superuser. If you do not have the correct privileges, you cannot create a database. Contact your Cloudberry Database administrator to either give you the necessary privilege or to create a database for you."}),"\n",(0,s.jsxs)(a.p,{children:["You can also use the client program ",(0,s.jsx)(a.code,{children:"createdb"})," to create a database. For example, running the following command in a command line terminal connects to Cloudberry Database using the provided host name and port and creates a database named ",(0,s.jsx)(a.em,{children:"mydatabase"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ createdb -h coordinator_host -p 5432 mydatabase\n"})}),"\n",(0,s.jsx)(a.p,{children:"The host name and port must match the host name and port of the installed Cloudberry Database system."}),"\n",(0,s.jsx)(a.p,{children:"Some objects, such as roles, are shared by all the databases in a Cloudberry Database system. Other objects, such as tables that you create, are known only in the database in which you create them."}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"CREATE DATABASE"})," command is not transactional."]})}),"\n",(0,s.jsx)(a.h3,{id:"clone-a-database",children:"Clone a database"}),"\n",(0,s.jsxs)(a.p,{children:["By default, a new database is created by cloning the standard system database template, ",(0,s.jsx)(a.em,{children:"template1"}),". Any database can be used as a template when creating a new database, thereby providing the capability to 'clone' or copy an existing database and all objects and data within that database. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"=> CREATE DATABASE <new_dbname> TEMPLATE <old_dbname>;\n"})}),"\n",(0,s.jsx)(a.h3,{id:"create-a-database-with-a-different-owner",children:"Create a database with a different owner"}),"\n",(0,s.jsx)(a.p,{children:"Another database owner can be assigned when a database is created:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"=> CREATE DATABASE <new_dbname> WITH <owner=new_user>;\n"})}),"\n",(0,s.jsx)(a.h2,{id:"view-the-list-of-databases",children:"View the list of databases"}),"\n",(0,s.jsxs)(a.p,{children:["If you are working in the ",(0,s.jsx)(a.code,{children:"psql"})," client program, you can use the ",(0,s.jsx)(a.code,{children:"\\l"})," meta-command to show the list of databases and templates in your Cloudberry Database system. If using another client program and you are a superuser, you can query the list of databases from the ",(0,s.jsx)(a.code,{children:"pg_database"})," system catalog table. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"=> SELECT datname from pg_database;\n"})}),"\n",(0,s.jsx)(a.h2,{id:"alter-a-database",children:"Alter a database"}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"ALTER DATABASE"})," command changes database attributes such as owner, name, or default configuration attributes. For example, the following command alters a database by setting its default schema search path (the ",(0,s.jsx)(a.code,{children:"search_path"})," configuration parameter):"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"=> ALTER DATABASE mydatabase SET search_path TO myschema, public, pg_catalog;\n"})}),"\n",(0,s.jsx)(a.p,{children:"To alter a database, you must be the owner of the database or a superuser."}),"\n",(0,s.jsx)(a.h2,{id:"drop-a-database",children:"Drop a database"}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"DROP DATABASE"})," command drops (or deletes) a database. It removes the system catalog entries for the database and deletes the database directory on disk that contains the data. You must be the database owner or a superuser to drop a database, and you cannot drop a database while you or anyone else is connected to it. Connect to ",(0,s.jsx)(a.code,{children:"postgres"})," (or another database) before dropping a database. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"=> \\c postgres\n=> DROP DATABASE mydatabase;\n"})}),"\n",(0,s.jsxs)(a.p,{children:["You can also use the client program ",(0,s.jsx)(a.code,{children:"dropdb"})," to drop a database. For example, the following command connects to Cloudberry Database using the provided host name and port and drops the database ",(0,s.jsx)(a.em,{children:"mydatabase"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ dropdb -h coordinator_host -p 5432 mydatabase\n"})}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsx)(a.p,{children:"Dropping a database cannot be undone."})}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"DROP DATABASE"})," command is not transactional."]})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>r});var s=t(67294);const n={},d=s.createContext(n);function r(e){const a=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);