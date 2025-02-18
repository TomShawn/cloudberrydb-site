"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[68],{37574:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=s(85893),i=s(11151);const r={title:"UNLISTEN"},l="UNLISTEN",c={id:"sql-stmts/unlisten",title:"UNLISTEN",description:"Stops listening for a notification.",source:"@site/docs/sql-stmts/unlisten.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/unlisten",permalink:"/docs/sql-stmts/unlisten",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/unlisten.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1739329693,formattedLastUpdatedAt:"Feb 12, 2025",frontMatter:{title:"UNLISTEN"},sidebar:"docsbars",previous:{title:"TRUNCATE",permalink:"/docs/sql-stmts/truncate"},next:{title:"UPDATE",permalink:"/docs/sql-stmts/update"}},o={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"unlisten",children:"UNLISTEN"}),"\n",(0,t.jsx)(n.p,{children:"Stops listening for a notification."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UNLISTEN { <channel> | * }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UNLISTEN"})," is used to remove an existing registration for ",(0,t.jsx)(n.code,{children:"NOTIFY"})," events. ",(0,t.jsx)(n.code,{children:"UNLISTEN"})," cancels any existing registration of the current Cloudberry Database session as a listener on the notification channel named channel. The special wildcard ",(0,t.jsx)(n.code,{children:"*"})," cancels all listener registrations for the current session."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/sql-stmts/notify",children:"NOTIFY"})," contains a more extensive discussion of the use of ",(0,t.jsx)(n.code,{children:"LISTEN"})," and ",(0,t.jsx)(n.code,{children:"NOTIFY"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"channel"})})}),"\n",(0,t.jsx)(n.p,{children:"The name of a notification channel (any identifier)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"*"})})}),"\n",(0,t.jsx)(n.p,{children:"All current listen registrations for this session are cleared."}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.p,{children:"You can unlisten something you were not listening for; no warning or error will appear."}),"\n",(0,t.jsxs)(n.p,{children:["At the end of each session, ",(0,t.jsx)(n.code,{children:"UNLISTEN *"})," is automatically executed."]}),"\n",(0,t.jsxs)(n.p,{children:["A transaction that has executed ",(0,t.jsx)(n.code,{children:"UNLISTEN"})," cannot be prepared for two-phase commit."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"To make a registration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'LISTEN virtual;\nNOTIFY virtual;\nAsynchronous notification "virtual" received from server process with PID 8448.\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Once ",(0,t.jsx)(n.code,{children:"UNLISTEN"})," has been executed, further ",(0,t.jsx)(n.code,{children:"NOTIFY"})," messages will be ignored:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UNLISTEN virtual;\nNOTIFY virtual;\n-- no NOTIFY event is received\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:["There is no ",(0,t.jsx)(n.code,{children:"UNLISTEN"})," statement in the SQL standard."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/sql-stmts/listen",children:"LISTEN"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/notify",children:"NOTIFY"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var t=s(67294);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);