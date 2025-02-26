"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8069],{91166:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=n(85893),r=n(11151);const i={title:"clusterdb"},c="clusterdb",d={id:"sys-utilities/clusterdb",title:"clusterdb",description:"Reclusters tables that were previously clustered with CLUSTER.",source:"@site/docs/sys-utilities/clusterdb.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/clusterdb",permalink:"/zh/docs/sys-utilities/clusterdb",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/clusterdb.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740470606,formattedLastUpdatedAt:"2025\u5e742\u670825\u65e5",frontMatter:{title:"clusterdb"},sidebar:"docsbars",previous:{title:"analyzedb",permalink:"/zh/docs/sys-utilities/analyzedb"},next:{title:"createuser",permalink:"/zh/docs/sys-utilities/createuser"}},o={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Connection options",id:"connection-options",level:3},{value:"Environment",id:"environment",level:2},{value:"Diagnostics",id:"diagnostics",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"clusterdb",children:"clusterdb"}),"\n",(0,t.jsxs)(s.p,{children:["Reclusters tables that were previously clustered with ",(0,t.jsx)(s.code,{children:"CLUSTER"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"clusterdb [<connection-option> ...] [--verbose | -v] [--table | -t <table>] [[--dbname | -d] <dbname]\n\nclusterdb [<connection-option> ...] [--verbose | -v] --all | -a\n\nclusterdb -? | --help\n\nclusterdb -V | --version\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"To cluster a table means to physically reorder a table on disk according to an index. Clustering helps improving index seek performance for queries that use that index. Clustering is a one-time operation: when the table is subsequently updated, the changes are not clustered. That is, no attempt is made to store new or updated rows according to their index order."}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"clusterdb"})," utility will find any tables in a database that have previously been clustered with the ",(0,t.jsx)(s.code,{children:"CLUSTER"})," SQL command, and clusters them again on the same index that was last used. Tables that have never been clustered are not affected."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"clusterdb"})," is a wrapper around the SQL command ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/cluster",children:(0,t.jsx)(s.code,{children:"CLUSTER"})}),". There is no effective difference between clustering databases via this utility and via other methods for accessing the server."]}),"\n",(0,t.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"clusterdb"})," accepts the following command-line arguments:"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-a"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--all"})})]}),"\n",(0,t.jsx)(s.p,{children:"Cluster all databases."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"[-d] dbname"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"[--dbname=]dbname"})})]}),"\n",(0,t.jsxs)(s.p,{children:["Specifies the name of the database to be clustered, when ",(0,t.jsx)(s.code,{children:"-a/--all"})," is not used. If this is not specified, the database name is read from the environment variable ",(0,t.jsx)(s.code,{children:"PGDATABASE"}),". If that is not set, the user name specified for the connection is used. The dbname can be a ",(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/libpq-connect.html#LIBPQ-CONNSTRING",children:"connection string"}),". If so, connection string parameters will override any conflicting command line options."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-e"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--echo"})})]}),"\n",(0,t.jsxs)(s.p,{children:["Echo the commands that ",(0,t.jsx)(s.code,{children:"clusterdb"})," generates and sends to the server."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-q"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--quiet"})})]}),"\n",(0,t.jsx)(s.p,{children:"Do not display progress messages."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-t table"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--table=table"})})]}),"\n",(0,t.jsxs)(s.p,{children:["Cluster the named table only. You can cluster multiple tables by specifying multiple ",(0,t.jsx)(s.code,{children:"-t"})," switches."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-v"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--verbose"})})]}),"\n",(0,t.jsx)(s.p,{children:"Print detailed information during processing."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-V"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--version"})})]}),"\n",(0,t.jsxs)(s.p,{children:["Print the ",(0,t.jsx)(s.code,{children:"clusterdb"})," version, and exit."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-?"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--help"})})]}),"\n",(0,t.jsxs)(s.p,{children:["Show help about ",(0,t.jsx)(s.code,{children:"clusterdb"})," command line arguments, and exit."]}),"\n",(0,t.jsx)(s.h3,{id:"connection-options",children:"Connection options"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"clusterdb"})," also accepts the following command-line arguments for connection parameters:"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-h host"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--host=host"})})]}),"\n",(0,t.jsxs)(s.p,{children:["Specifies the host name of the machine on which the Cloudberry coordinator database server is running. If not specified, reads from the environment variable ",(0,t.jsx)(s.code,{children:"PGHOST"})," or defaults to ",(0,t.jsx)(s.code,{children:"localhost"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-p port"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--port=port"})})]}),"\n",(0,t.jsxs)(s.p,{children:["Specifies the TCP port on which the Cloudberry coordinator database server is listening for connections. If not specified, reads from the environment variable ",(0,t.jsx)(s.code,{children:"PGPORT"})," or defaults to 5432."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-U username"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--username=username"})})]}),"\n",(0,t.jsxs)(s.p,{children:["The database role name to connect as. If not specified, reads from the environment variable ",(0,t.jsx)(s.code,{children:"PGUSER"})," or defaults to the current system role name."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-w"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--no-password"})})]}),"\n",(0,t.jsxs)(s.p,{children:["Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a ",(0,t.jsx)(s.code,{children:".pgpass"})," file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-W"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--password"})})]}),"\n",(0,t.jsxs)(s.p,{children:["Force ",(0,t.jsx)(s.code,{children:"clusterdb"})," to prompt for a password before connecting to a database."]}),"\n",(0,t.jsxs)(s.p,{children:["This option is never essential, since ",(0,t.jsx)(s.code,{children:"clusterdb"})," will automatically prompt for a password if the server demands password authentication. However, ",(0,t.jsx)(s.code,{children:"clusterdb"})," will waste a connection attempt finding out that the server wants a password. In some cases it is worth typing ",(0,t.jsx)(s.code,{children:"-W"})," to avoid the extra connection attempt."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--maintenance-db=dbname"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies the name of the database to connect to discover what other databases should be clustered. If not specified, the ",(0,t.jsx)(s.code,{children:"postgres"})," database will be used, and if that does not exist, ",(0,t.jsx)(s.code,{children:"template1"})," will be used. This can be a ",(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/libpq-connect.html#LIBPQ-CONNSTRING",children:"connection"})," string. If so, connection string parameters will override any conflicting command line options. Also, connection string parameters other than the database name itself will be re-used when connecting to other databases."]}),"\n",(0,t.jsx)(s.h2,{id:"environment",children:"Environment"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"PGDATABASE"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"PGHOST"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"PGPORT"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"PGUSER"})})]}),"\n",(0,t.jsx)(s.p,{children:"Default connection parameters."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"PG_COLOR"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies whether to use color in diagnostic messages. Possible values are ",(0,t.jsx)(s.code,{children:"always"}),", ",(0,t.jsx)(s.code,{children:"auto"}),", and ",(0,t.jsx)(s.code,{children:"never"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["This utility, like most other Cloudberry Database utilities, also uses the environment variables supported by ",(0,t.jsx)(s.code,{children:"libpq"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"diagnostics",children:"Diagnostics"}),"\n",(0,t.jsxs)(s.p,{children:["In case of difficulty, see ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/cluster",children:(0,t.jsx)(s.code,{children:"CLUSTER"})})," and ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/psql",children:"psql"})," for discussions of potential problems and error messages. The database server must be running at the targeted host. Also, any default connection settings and environment variables used by the ",(0,t.jsx)(s.code,{children:"libpq"})," front-end library will apply."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["To cluster the database named ",(0,t.jsx)(s.code,{children:"test"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"clusterdb test\n"})}),"\n",(0,t.jsxs)(s.p,{children:["To cluster a single table ",(0,t.jsx)(s.code,{children:"foo"})," in a database named ",(0,t.jsx)(s.code,{children:"xyzzy"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"clusterdb --table=foo xyzzy\n"})}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/cluster",children:(0,t.jsx)(s.code,{children:"CLUSTER"})})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>c});var t=n(67294);const r={},i=t.createContext(r);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);