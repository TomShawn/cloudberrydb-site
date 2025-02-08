"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2515],{93813:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var d=s(85893),o=s(11151);const r={title:"dropdb"},t="dropdb",i={id:"sys-utilities/dropdb",title:"dropdb",description:"Removes a database.",source:"@site/docs/sys-utilities/dropdb.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/dropdb",permalink:"/docs/sys-utilities/dropdb",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/dropdb.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1737527923,formattedLastUpdatedAt:"Jan 22, 2025",frontMatter:{title:"dropdb"},sidebar:"docsbars",previous:{title:"vacuumdb",permalink:"/docs/sys-utilities/vacuumdb"},next:{title:"dropuser",permalink:"/docs/sys-utilities/dropuser"}},c={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Connection options",id:"connection-options",level:3},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"dropdb",children:"dropdb"}),"\n",(0,d.jsx)(n.p,{children:"Removes a database."}),"\n",(0,d.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"dropdb [<connection-option> ...] [-e] [-i] <dbname>\n\ndropdb -? | --help\n\ndropdb -V | --version\n"})}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dropdb"})," destroys an existing database. The user who runs this command must be a superuser or the owner of the database being dropped."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dropdb"})," is a wrapper around the SQL command ",(0,d.jsx)(n.code,{children:"DROP DATABASE"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"dbname"})})}),"\n",(0,d.jsx)(n.p,{children:"The name of the database to be removed."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"-e | --echo"})})}),"\n",(0,d.jsxs)(n.p,{children:["Echo the commands that ",(0,d.jsx)(n.code,{children:"dropdb"})," generates and sends to the server."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"-i | --interactive"})})}),"\n",(0,d.jsx)(n.p,{children:"Issues a verification prompt before doing anything destructive."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"-V | --version"})})}),"\n",(0,d.jsxs)(n.p,{children:["Print the ",(0,d.jsx)(n.code,{children:"dropdb"})," version and exit."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"--if-exists"})})}),"\n",(0,d.jsx)(n.p,{children:"Do not throw an error if the database does not exist. A notice is issued in this case."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"-? | --help"})})}),"\n",(0,d.jsxs)(n.p,{children:["Show help about ",(0,d.jsx)(n.code,{children:"dropdb"})," command line arguments, and exit."]}),"\n",(0,d.jsx)(n.h3,{id:"connection-options",children:"Connection options"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"-h host | --host=host"})})}),"\n",(0,d.jsxs)(n.p,{children:["The host name of the machine on which the Cloudberry coordinator database server is running. If not specified, reads from the environment variable ",(0,d.jsx)(n.code,{children:"PGHOST"})," or defaults to localhost."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"-p port | --port=port"})})}),"\n",(0,d.jsxs)(n.p,{children:["The TCP port on which the Cloudberry coordinator database server is listening for connections. If not specified, reads from the environment variable ",(0,d.jsx)(n.code,{children:"PGPORT"})," or defaults to 5432."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"-U username | --username=username"})})}),"\n",(0,d.jsxs)(n.p,{children:["The database role name to connect as. If not specified, reads from the environment variable ",(0,d.jsx)(n.code,{children:"PGUSER"})," or defaults to the current system role name."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"-w | --no-password"})})}),"\n",(0,d.jsxs)(n.p,{children:["Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a ",(0,d.jsx)(n.code,{children:".pgpass"})," file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"-W | --password"})})}),"\n",(0,d.jsx)(n.p,{children:"Force a password prompt."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"--maintenance-db=dbname"})})}),"\n",(0,d.jsxs)(n.p,{children:["Specifies the name of the database to connect to in order to drop the target database. If not specified, the ",(0,d.jsx)(n.code,{children:"postgres"})," database will be used; if that does not exist (or if it is the name of the database being dropped), ",(0,d.jsx)(n.code,{children:"template1"})," will be used."]}),"\n",(0,d.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsxs)(n.p,{children:["To destroy the database named ",(0,d.jsx)(n.code,{children:"demo"})," using default connection parameters:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"dropdb demo\n"})}),"\n",(0,d.jsxs)(n.p,{children:["To destroy the database named ",(0,d.jsx)(n.code,{children:"demo"})," using connection options, with verification, and a peek at the underlying command:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:'dropdb -p 54321 -h coordinatorhost -i -e demo\nDatabase "demo" will be permanently deleted.\nAre you sure? (y/n) y\nDROP DATABASE "demo"\nDROP DATABASE\n'})}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/sys-utilities/createdb",children:"createdb"}),", ",(0,d.jsx)(n.a,{href:"/docs/sql-stmts/drop-database",children:(0,d.jsx)(n.code,{children:"DROP DATABASE"})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>t});var d=s(67294);const o={},r=d.createContext(o);function t(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);