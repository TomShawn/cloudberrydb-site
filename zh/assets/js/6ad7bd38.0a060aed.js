"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2175],{73281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var n=a(85893),r=a(11151),s=a(52991);const d={title:"Data Loading Overview"},i="Data Loading Overview",o={id:"data-loading/index",title:"Data Loading Overview",description:"Cloudberry Database loads data mainly by transforming external data into external tables (or foreign tables) via loading tools. Then it reads data from these external tables or writes data into them to achieve external data loading.",source:"@site/docs/data-loading/index.md",sourceDirName:"data-loading",slug:"/data-loading/",permalink:"/zh/docs/data-loading/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/data-loading/index.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1740044194,formattedLastUpdatedAt:"2025\u5e742\u670820\u65e5",frontMatter:{title:"Data Loading Overview"},sidebar:"docsbars",previous:{title:"\u5355\u8ba1\u7b97\u8282\u70b9\u6a21\u5f0f\u90e8\u7f72",permalink:"/zh/docs/deploy-cbdb-with-single-node"},next:{title:"\u4f7f\u7528 COPY \u52a0\u8f7d\u6570\u636e",permalink:"/zh/docs/data-loading/load-data-using-copy"}},l={},c=[{value:"Loading process",id:"loading-process",level:2},{value:"Loading methods and scenarios",id:"loading-methods-and-scenarios",level:2},{value:"Learn more",id:"learn-more",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-loading-overview",children:"Data Loading Overview"}),"\n",(0,n.jsx)(t.p,{children:"Cloudberry Database loads data mainly by transforming external data into external tables (or foreign tables) via loading tools. Then it reads data from these external tables or writes data into them to achieve external data loading."}),"\n",(0,n.jsx)(t.h2,{id:"loading-process",children:"Loading process"}),"\n",(0,n.jsx)(t.p,{children:"The general process of loading external data into Cloudberry Database is as follows:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Assess the data loading scenario (such as data source location, data type, and data volume) and select an appropriate loading tool."}),"\n",(0,n.jsx)(t.li,{children:"Set up and enable the loading tool."}),"\n",(0,n.jsxs)(t.li,{children:["Create an external table, specifying information such as the protocol of the loading tool, data source address, data format in the ",(0,n.jsx)(t.code,{children:"CREATE EXTERNAL TABLE"})," statement."]}),"\n",(0,n.jsxs)(t.li,{children:["Once the external table is created, data from the external table can be queried directly using the ",(0,n.jsx)(t.code,{children:"SELECT"})," statement, or data can be imported from the external table using ",(0,n.jsx)(t.code,{children:"INSERT INTO SELECT"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"loading-methods-and-scenarios",children:"Loading methods and scenarios"}),"\n",(0,n.jsx)(t.p,{children:"Cloudberry Database offers multiple data loading solutions, and you can select different data loading methods according to different data sources."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Loading method"}),(0,n.jsx)(t.th,{children:"Data source"}),(0,n.jsx)(t.th,{children:"Data format"}),(0,n.jsx)(t.th,{children:"Parallel or not"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/data-loading/load-data-using-copy.md",children:(0,n.jsx)(t.code,{children:"copy"})})}),(0,n.jsxs)(t.td,{children:["Local file system",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\u2022 Coordinator node host (for a single file)",(0,n.jsx)("br",{}),"\u2022 Segment node host (for multiple files)"]}),(0,n.jsxs)(t.td,{children:["\u2022 TXT",(0,n.jsx)("br",{}),"\u2022 CSV",(0,n.jsx)("br",{}),"\u2022 Binary"]}),(0,n.jsx)(t.td,{children:"No"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(t.a,{href:"/docs/data-loading/load-data-using-file-protocol.md",children:[(0,n.jsx)(t.code,{children:"file://"})," protocol"]})}),(0,n.jsx)(t.td,{children:"Local file system (local segment host, accessible only by superuser)"}),(0,n.jsxs)(t.td,{children:["\u2022 TXT",(0,n.jsx)("br",{}),"\u2022 CSV"]}),(0,n.jsx)(t.td,{children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/data-loading/load-data-using-gpfdist.md",children:(0,n.jsx)(t.code,{children:"gpfdist"})})}),(0,n.jsx)(t.td,{children:"Local host files or files accessible via internal network"}),(0,n.jsxs)(t.td,{children:["\u2022 TXT",(0,n.jsx)("br",{}),"\u2022 CSV",(0,n.jsx)("br",{}),"\u2022 Any delimited text format supported by the ",(0,n.jsx)(t.code,{children:"FORMAT"})," clause",(0,n.jsx)("br",{}),"\u2022 XML and JSON (requires conversion to text format via YAML configuration file)"]}),(0,n.jsx)(t.td,{children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.a,{href:"/docs/data-loading/load-data-using-gpload.md",children:["Batch loading using ",(0,n.jsx)(t.code,{children:"gpload"})]})," (with ",(0,n.jsx)(t.code,{children:"gpfdist"})," as the underlying worker)"]}),(0,n.jsx)(t.td,{children:"Local host files or files accessible via internal network"}),(0,n.jsxs)(t.td,{children:["\u2022 TXT",(0,n.jsx)("br",{}),"\u2022 CSV",(0,n.jsx)("br",{}),"\u2022 Any delimited text format supported by the ",(0,n.jsx)(t.code,{children:"FORMAT"})," clause",(0,n.jsx)("br",{}),"\u2022 XML and JSON (require conversion to text format via YAML configuration file)"]}),(0,n.jsx)(t.td,{children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/data-loading/load-data-from-web-services.md",children:"Creating external web tables"})}),(0,n.jsx)(t.td,{children:"Data pulled from network services or from any source accessible by command lines"}),(0,n.jsxs)(t.td,{children:["\u2022 TXT",(0,n.jsx)("br",{}),"\u2022 CSV"]}),(0,n.jsx)(t.td,{children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/data-loading/load-data-from-kafka-using-fdw.md",children:"Kafka FDW"})}),(0,n.jsx)(t.td,{children:"Streaming data from Apache Kafka"}),(0,n.jsxs)(t.td,{children:["\u2022 JSON",(0,n.jsx)("br",{}),"\u2022 CSV"]}),(0,n.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n","\n","\n",(0,n.jsx)(s.Z,{})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},52991:(e,t,a)=>{a.d(t,{Z:()=>g});a(67294);var n=a(90512),r=a(53438),s=a(33692),d=a(13919),i=a(95999),o=a(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var c=a(85893);function h(e){let{href:t,children:a}=e;return(0,c.jsx)(s.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer),children:a})}function x(e){let{href:t,icon:a,title:r,description:s}=e;return(0,c.jsxs)(h,{href:t,children:[(0,c.jsxs)(o.Z,{as:"h2",className:(0,n.Z)("text--truncate",l.cardTitle),title:r,children:[a," ",r]}),s&&(0,c.jsx)("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const a=(0,r.LM)(t);return a?(0,c.jsx)(x,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const a=(0,d.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(t.docId??void 0);return(0,c.jsx)(x,{href:t.href,icon:a,title:t.label,description:t.description??n?.description})}function j(e){let{item:t}=e;switch(t.type){case"link":return(0,c.jsx)(u,{item:t});case"category":return(0,c.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const a=(0,r.jA)();return(0,c.jsx)(g,{items:a.items,className:t})}function g(e){const{items:t,className:a}=e;if(!t)return(0,c.jsx)(f,{...e});const s=(0,r.MN)(t);return(0,c.jsx)("section",{className:(0,n.Z)("row",a),children:s.map(((e,t)=>(0,c.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,c.jsx)(j,{item:e})},t)))})}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>d});var n=a(67294);const r={},s=n.createContext(r);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);