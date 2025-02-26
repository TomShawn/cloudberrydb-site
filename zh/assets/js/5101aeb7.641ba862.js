"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7097],{15851:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var n=t(85893),r=t(11151);const i={title:"gpmemwatcher"},o="gpmemwatcher",a={id:"sys-utilities/gpmemwatcher",title:"gpmemwatcher",description:"Tracks the memory usage of each process in a Cloudberry Database cluster.",source:"@site/docs/sys-utilities/gpmemwatcher.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpmemwatcher",permalink:"/zh/docs/sys-utilities/gpmemwatcher",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpmemwatcher.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740470606,formattedLastUpdatedAt:"2025\u5e742\u670825\u65e5",frontMatter:{title:"gpmemwatcher"},sidebar:"docsbars",previous:{title:"gpmemreport",permalink:"/zh/docs/sys-utilities/gpmemreport"},next:{title:"gpmovemirrors",permalink:"/zh/docs/sys-utilities/gpmovemirrors"}},l={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"gpmemwatcher",children:"gpmemwatcher"}),"\n",(0,n.jsx)(s.p,{children:"Tracks the memory usage of each process in a Cloudberry Database cluster."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpmemwatcher [-f | --host_file <hostfile>]   \n        \ngpmemwatcher --stop [-f | --host_file <hostfile>]  \n\ngpmemwatcher --version\n\ngpmemwatcher -h | --help\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"gpmemwatcher"})," utility is a daemon that runs on all servers of a Cloudberry Database cluster. It tracks the memory usage of each process by collecting the output of the ",(0,n.jsx)(s.code,{children:"ps"})," command every 60 seconds. It is a low impact process that only consumes 4 MB of memory. It will generate approximately 30 MB of data over a 24-hour period."]}),"\n",(0,n.jsxs)(s.p,{children:["You may use this utility if Cloudberry Database is reporting ",(0,n.jsx)(s.code,{children:"Out of memory"})," errors and causing segments to go down or queries to fail. You collect the memory usage information of one or multiple servers within the Cloudberry Database cluster with ",(0,n.jsx)(s.code,{children:"gpmemwatcher"})," and then use ",(0,n.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpmemreport",children:"gpmemreport"})," to analyze the files collected."]}),"\n",(0,n.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-f | --host_file hostfile"})})}),"\n",(0,n.jsx)(s.p,{children:"Indicates the hostfile input file that lists the hosts from which the utility should collect memory usage information. The file must include the hostnames and a working directory that exists on each one of the hosts. For example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"cdw:/home/gpadmin/gpmemwatcher_dir/working\nsdw1:/home/gpadmin/gpmemwatcher_dir/working\nsdw2:/home/gpadmin/gpmemwatcher_dir/working\nsdw3:/home/gpadmin/gpmemwatcher_dir/working\nsdw4:/home/gpadmin/gpmemwatcher_dir/working\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--stop"})})}),"\n",(0,n.jsxs)(s.p,{children:["Stops all the ",(0,n.jsx)(s.code,{children:"gpmemwatcher"})," processes, generates ",(0,n.jsx)(s.code,{children:".gz"})," data files in the current directory, and removes all the work files from all the hosts."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--version"})})}),"\n",(0,n.jsx)(s.p,{children:"Displays the version of this utility."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-h | --help"})})}),"\n",(0,n.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example 1: Start the utility specifying the list of hosts from which to collect the information"})}),"\n",(0,n.jsxs)(s.p,{children:["Create the file ",(0,n.jsx)(s.code,{children:"/home/gpadmin/hostmap.txt"})," that contains the following:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"cdw:/home/gpadmin/gpmemwatcher_dir/working\nsdw1:/home/gpadmin/gpmemwatcher_dir/working\nsdw2:/home/gpadmin/gpmemwatcher_dir/working\nsdw3:/home/gpadmin/gpmemwatcher_dir/working\nsdw4:/home/gpadmin/gpmemwatcher_dir/working\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Make sure that the path ",(0,n.jsx)(s.code,{children:"/home/gpadmin/gpmemwatcher_dir/working"})," exists on all hosts."]}),"\n",(0,n.jsx)(s.p,{children:"Start the utility:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"$ gpmemwatcher -f /home/gpadmin/hostmap.txt\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.strong,{children:["Example 2: Stop utility and dump the resulting into a ",(0,n.jsx)(s.code,{children:".gz"})," file"]})}),"\n",(0,n.jsx)(s.p,{children:"Stop the utility you started in Example 1:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"$ gpmemwatcher -f /home/gpadmin/hostmap.txt --stop\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The results ",(0,n.jsx)(s.code,{children:".gz"})," files will be dumped into the directory where you are running the command:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"$ [gpadmin@gpdb-m]$ ls -thrl\n\n-rw-rw-r--. 1 gpadmin gpadmin 2.8K Nov 19 15:17 cdw.ps.out.gz\n-rw-rw-r--. 1 gpadmin gpadmin 2.8K Nov 19 15:17 sdw1.ps.out.gz\n-rw-rw-r--. 1 gpadmin gpadmin 2.8K Nov 19 15:17 sdw2.ps.out.gz\n-rw-rw-r--. 1 gpadmin gpadmin 2.8K Nov 19 15:17 sdw3.ps.out.gz\n-rw-rw-r--. 1 gpadmin gpadmin 2.8K Nov 19 15:17 sdw4.ps.out.gz\n"})}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpmemreport",children:"gpmemreport"})})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>o});var n=t(67294);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);