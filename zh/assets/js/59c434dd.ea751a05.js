"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9490],{57211:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var l=n(85893),s=n(11151);const c={title:"Directory Table"},d="Directory Table",i={id:"advanced-analytics/directory-tables",title:"Directory Table",description:"\u81ea v1.5.3 \u7248\u672c\u8d77\uff0cCloudberry Database \u5f15\u5165\u4e86 Directory Table\uff0c\u7528\u4e8e\u7edf\u4e00\u7eb3\u7ba1\u5bf9\u8c61\u5b58\u50a8\u4e0a\u7684\u975e\u7ed3\u6784\u5316\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced-analytics/directory-tables.md",sourceDirName:"advanced-analytics",slug:"/advanced-analytics/directory-tables",permalink:"/zh/docs/advanced-analytics/directory-tables",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/advanced-analytics/directory-tables.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740470606,formattedLastUpdatedAt:"2025\u5e742\u670825\u65e5",frontMatter:{title:"Directory Table"},sidebar:"docsbars",previous:{title:"\u5730\u7406\u7a7a\u95f4\u5206\u6790",permalink:"/zh/docs/advanced-analytics/postgis"},next:{title:"Use pgvector for Vector Similarity Search",permalink:"/zh/docs/advanced-analytics/pgvector-search"}},t={},a=[{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u521b\u5efa Directory Table",id:"\u521b\u5efa-directory-table",level:3},{value:"\u5728\u672c\u5730\u5b58\u50a8\u4e2d\u521b\u5efa",id:"\u5728\u672c\u5730\u5b58\u50a8\u4e2d\u521b\u5efa",level:4},{value:"\u5728\u5916\u90e8\u5b58\u50a8\u4e2d\u521b\u5efa",id:"\u5728\u5916\u90e8\u5b58\u50a8\u4e2d\u521b\u5efa",level:4},{value:"\u67e5\u770b Directory Table \u7684\u5b57\u6bb5\u4fe1\u606f",id:"\u67e5\u770b-directory-table-\u7684\u5b57\u6bb5\u4fe1\u606f",level:3},{value:"\u52a0\u8f7d\u6587\u4ef6\u81f3 Directory Table",id:"\u52a0\u8f7d\u6587\u4ef6\u81f3-directory-table",level:3},{value:"\u67e5\u8be2\u548c\u4f7f\u7528 Directory Table \u6587\u4ef6",id:"\u67e5\u8be2\u548c\u4f7f\u7528-directory-table-\u6587\u4ef6",level:3},{value:"\u5220\u9664 Directory  Table \u6240\u7eb3\u7ba1\u7684\u6587\u4ef6",id:"\u5220\u9664-directory--table-\u6240\u7eb3\u7ba1\u7684\u6587\u4ef6",level:3},{value:"\u5220\u9664 Directory Table",id:"\u5220\u9664-directory-table",level:3}];function o(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h1,{id:"directory-table",children:"Directory Table"}),"\n",(0,l.jsx)(r.p,{children:"\u81ea v1.5.3 \u7248\u672c\u8d77\uff0cCloudberry Database \u5f15\u5165\u4e86 Directory Table\uff0c\u7528\u4e8e\u7edf\u4e00\u7eb3\u7ba1\u5bf9\u8c61\u5b58\u50a8\u4e0a\u7684\u975e\u7ed3\u6784\u5316\u6570\u636e\u3002"}),"\n",(0,l.jsx)(r.p,{children:"\u5728\u5927\u6a21\u578b AI \u5feb\u901f\u53d1\u5c55\u7684\u80cc\u666f\u4e0b\uff0cAI \u5e94\u7528\u50ac\u751f\u51fa\u4e86\u7ba1\u7406\u975e\u7ed3\u6784\u5316\u591a\u6a21\u6001\u8bed\u6599\u6570\u636e\u7684\u9700\u6c42\u3002\u9700\u8981\u6301\u7eed\u51c6\u5907\u5927\u91cf\u975e\u7ed3\u6784\u5316\u7684\u9ad8\u8d28\u91cf\u7cbe\u9009\u8bed\u6599\u3001\u6570\u636e\u8fed\u4ee3\u8bad\u7ec3\u5927\u6a21\u578b\uff0c\u4ee5\u53ca\u5f52\u7eb3\u4e30\u5bcc\u7684\u77e5\u8bc6\u5e93\u3002\u56e0\u6b64\uff0c\u5728\u7ed3\u6784\u5316\u8bed\u6599\u6570\u636e\u7ba1\u7406\u4e0e\u8bed\u6599\u52a0\u5de5\u65b9\u9762\uff0c\u9762\u4e34\u6280\u672f\u6311\u6218\u3002"}),"\n",(0,l.jsx)(r.p,{children:"\u9762\u5bf9\u8fd9\u4e9b\u6280\u672f\u6311\u6218\uff0cCloudberry Database \u5b9a\u4e49\u4e86\u4e00\u79cd Directory Table \u8868\uff0c\u7528\u4e8e\u7eb3\u7ba1\u591a\u79cd\u7c7b\u578b\u7684\u975e\u7ed3\u6784\u5316\u6570\u636e\u3002\u5f00\u53d1\u8005\u7528\u6237\u53ea\u9700\u4f7f\u7528\u7b80\u5355\u7684 SQL \u8bed\u53e5\u5c31\u80fd\u8c03\u7528\u5404\u79cd\u8ba1\u7b97\u5f15\u64ce\u7684\u80fd\u529b\uff0c\u5b9e\u73b0\u4e00\u7ad9\u5f0f\u6570\u636e\u52a0\u5de5\u548c\u5e94\u7528\u5f00\u53d1\u3002"}),"\n",(0,l.jsx)(r.p,{children:"Directory Table \u5b9a\u4f4d\u4e8e\u5b58\u50a8\u3001\u7ba1\u7406\u548c\u5206\u6790\u975e\u7ed3\u6784\u5316\u6570\u636e\u5bf9\u8c61\u3002Directory Table \u4f4d\u4e8e\u8868\u7a7a\u95f4\u4e2d\uff0c\u5c06\u975e\u7ed3\u6784\u5316\u6570\u636e\u6587\u4ef6\u5bfc\u5165 Directory Table \u540e\uff0c\u4f1a\u5728 Directory Table \u4e0a\u521b\u5efa\u4e00\u6761\u8bb0\u5f55\uff0c\u5373\u8be5\u6587\u4ef6\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u800c\u6587\u4ef6\u672c\u8eab\u5219\u52a0\u8f7d\u8fdb\u5bf9\u8c61\u5b58\u50a8\u4e2d\u3002\u8868\u4e0a\u7684\u5143\u6570\u636e\u4e0e\u5bf9\u8c61\u5b58\u50a8\u4e0a\u7684\u5bf9\u5e94\u6587\u4ef6\u76f8\u5173\u8054\u3002"}),"\n",(0,l.jsx)(r.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,l.jsx)(r.h3,{id:"\u521b\u5efa-directory-table",children:"\u521b\u5efa Directory Table"}),"\n",(0,l.jsx)(r.p,{children:"\u4f60\u53ef\u4ee5\u5728\u672c\u5730\u5b58\u50a8\u7684\u8868\u7a7a\u95f4\u4e2d\u521b\u5efa Directory Table\uff0c\u4e5f\u53ef\u4ee5\u5728\u5916\u90e8\u5b58\u50a8\uff08\u5982\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u6216 HDFS \u7b49\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\uff09\u7684\u8868\u7a7a\u95f4\u4e2d\u521b\u5efa Directory Table\u3002"}),"\n",(0,l.jsx)(r.h4,{id:"\u5728\u672c\u5730\u5b58\u50a8\u4e2d\u521b\u5efa",children:"\u5728\u672c\u5730\u5b58\u50a8\u4e2d\u521b\u5efa"}),"\n",(0,l.jsxs)(r.p,{children:["\u5728\u672c\u5730\u5b58\u50a8\u521b\u5efa Directory Table \u7684\u8bed\u6cd5\u5982\u4e0b\u3002\u4f60\u9700\u8981\u5c06 ",(0,l.jsx)(r.code,{children:"<table_name>"})," \u548c ",(0,l.jsx)(r.code,{children:"<tablespace_name>"})," \u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u8868\u540d\u548c\u8868\u7a7a\u95f4\u540d\u3002"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"-- \u65b9\u6cd5\u4e00\uff1a\u4e0d\u6307\u5b9a\u8868\u7a7a\u95f4\uff0c\u5373\u5728\u5df2\u6709\u7684\u9ed8\u8ba4\u8868\u7a7a\u95f4\u4e2d\u521b\u5efa Directory Table\u3002\nCREATE DIRECTORY TABLE <table_name>\uff1b\n\n-- \u65b9\u6cd5\u4e8c\uff1a\u5148\u521b\u5efa\u8868\u7a7a\u95f4\uff0c\u518d\u5728\u8868\u7a7a\u95f4\u4e2d\u521b\u5efa Directory Table\u3002\nCREATE TABLESPACE <tablespace_name>\n       LOCATION '<tablespace_path>';\n\nCREATE DIRECTORY TABLE <table_name>\n       TABLESPACE <tablespace_name>;\n"})}),"\n",(0,l.jsx)(r.h4,{id:"\u5728\u5916\u90e8\u5b58\u50a8\u4e2d\u521b\u5efa",children:"\u5728\u5916\u90e8\u5b58\u50a8\u4e2d\u521b\u5efa"}),"\n",(0,l.jsx)(r.p,{children:"\u8981\u5728\u5916\u90e8\u5b58\u50a8\u4e2d\u521b\u5efa Directory Table\uff0c\u4f60\u9700\u8981\u5148\u5728\u5916\u90e8\u5b58\u50a8\u4e2d\u521b\u5efa\u8868\u7a7a\u95f4\u3002\u4f60\u9700\u8981\u63d0\u4f9b\u8bbf\u95ee\u5916\u90e8\u5b58\u50a8\u670d\u52a1\u5668\u6240\u9700\u8981\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u5305\u62ec\u670d\u52a1\u5668\u7684 IP \u5730\u5740\u3001\u534f\u8bae\u3001\u8bbf\u95ee\u5bc6\u94a5\u7b49\u3002\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u5728\u9752\u4e91\u5bf9\u8c61\u5b58\u50a8\u548c HDFS \u4e0a\u521b\u5efa Directory Table\u3002"}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:["\u521b\u5efa\u670d\u52a1\u5668\u5bf9\u8c61\uff0c\u5e76\u5b9a\u4e49\u5916\u90e8\u6570\u636e\u6e90\u7684\u8fde\u63a5\u65b9\u5f0f\u3002Cloudberry Database \u652f\u6301\u591a\u79cd\u5b58\u50a8\u7684\u534f\u8bae\uff0c\u5305\u62ec S3 \u5bf9\u8c61\u5b58\u50a8 \u548c HDFS\u3002\u4ee5\u4e0b\u793a\u4f8b\u5206\u522b\u5728\u9752\u4e91\u548c HDFS \u4e0a\u521b\u5efa\u4e86\u540d\u4e3a ",(0,l.jsx)(r.code,{children:"oss_server"})," \u548c ",(0,l.jsx)(r.code,{children:"hdfs_server"})," \u7684\u670d\u52a1\u5668\u5bf9\u8c61\u3002"]}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"\u9752\u4e91\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"CREATE STORAGE SERVER oss_server OPTIONS(protocol 'qingstor', prefix '<\u8def\u5f84\u524d\u7f00>', endpoint '<\u7ec8\u7aef\u5730\u5740>', https 'true', virtual_host 'false');\n"})}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"HDFS\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"CREATE STORAGE SERVER hdfs_server OPTIONS(protocol 'hdfs', namenode '<HDFS \u8282\u70b9 IP:\u7aef\u53e3>', https 'false');\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"\u4ee5\u4e0a\u547d\u4ee4\u4e2d\u6d89\u53ca\u7684\u53c2\u6570\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"protocol"}),"\uff1a\u7528\u4e8e\u8fde\u63a5\u5916\u90e8\u6570\u636e\u6e90\u7684\u534f\u8bae\u3002\u5728\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,l.jsx)(r.code,{children:"'qingstor'"})," \u8868\u793a\u4f7f\u7528\u9752\u4e91\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u7684\u534f\u8bae\uff0c",(0,l.jsx)(r.code,{children:"'hdfs'"})," \u8868\u793a\u4f7f\u7528 HDFS \u5b58\u50a8\u670d\u52a1\u534f\u8bae\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"prefix"}),"\uff1a\u8bbe\u7f6e\u8bbf\u95ee\u5bf9\u8c61\u5b58\u50a8\u65f6\u7684\u8def\u5f84\u524d\u7f00\u3002\u8bbe\u7f6e\u4e86\u8be5\u524d\u7f00\uff0c\u8868\u660e\u6240\u6709\u64cd\u4f5c\u90fd\u5c06\u9650\u5b9a\u5728\u8fd9\u4e2a\u7279\u5b9a\u7684\u8def\u5f84\u4e0b\uff0c\u4f8b\u5982 ",(0,l.jsx)(r.code,{children:"prefix '/rose-oss-test4/usf1'"}),"\u3002\u8fd9\u901a\u5e38\u7528\u4e8e\u7ec4\u7ec7\u548c\u9694\u79bb\u5b58\u50a8\u5728\u540c\u4e00\u5b58\u50a8\u6876\u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"endpoint"}),"\uff1a\u6307\u5b9a\u5916\u90e8\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u7684\u7f51\u7edc\u5730\u5740\u3002\u4f8b\u5982\uff0c",(0,l.jsx)(r.code,{children:"'pek3b.qingstor.com'"})," \u662f\u9752\u4e91\u670d\u52a1\u7684\u4e00\u4e2a\u7279\u5b9a\u533a\u57df\u8282\u70b9\u3002\u901a\u8fc7\u8fd9\u4e2a\u7aef\u70b9\uff0cCloudberry Database \u53ef\u4ee5\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"https"}),"\uff1a\u6307\u5b9a\u662f\u5426\u901a\u8fc7 HTTPS \u534f\u8bae\u8fde\u63a5\u5230\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u3002\u5728\u6b64\u547d\u4ee4\u4e2d\uff0c",(0,l.jsx)(r.code,{children:"'false'"})," \u8868\u793a\u4f7f\u7528\u975e\u52a0\u5bc6\u7684 HTTP \u8fde\u63a5\u3002\u8fd9\u4e2a\u8bbe\u7f6e\u53ef\u80fd\u53d7\u5230\u6570\u636e\u4f20\u8f93\u5b89\u5168\u8981\u6c42\u7684\u5f71\u54cd\uff0c\u901a\u5e38\u63a8\u8350\u4f7f\u7528 HTTPS \u6765\u786e\u4fdd\u6570\u636e\u5b89\u5168\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"virtual_host"}),"\uff1a\u786e\u5b9a\u662f\u5426\u4f7f\u7528\u865a\u62df\u4e3b\u673a\u65b9\u5f0f\u8bbf\u95ee\u5b58\u50a8\u6876\u3002",(0,l.jsx)(r.code,{children:"'false'"})," \u610f\u5473\u7740\u4e0d\u4f7f\u7528\u865a\u62df\u4e3b\u673a\u6837\u5f0f\u7684\u6876\u8bbf\u95ee\uff08\u5373\uff0cURL \u4e2d\u4e0d\u5305\u62ec\u5b58\u50a8\u6876\u540d\u79f0\uff09\u3002\u8fd9\u4e2a\u9009\u9879\u901a\u5e38\u53d6\u51b3\u4e8e\u5b58\u50a8\u670d\u52a1\u63d0\u4f9b\u5546\u7684 URL \u683c\u5f0f\u652f\u6301\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"namenode"}),"\uff1a\u8868\u793a HDFS \u8282\u70b9\u7684 IP\u3002\u4f60\u9700\u8981\u5c06 ",(0,l.jsx)(r.code,{children:"<HDFS \u8282\u70b9 IP:\u7aef\u53e3>"})," \u66ff\u6362\u4e3a\u5b9e\u9645\u7684 IP \u5730\u5740\u548c\u7aef\u53e3\u53f7\uff0c\u4f8b\u5982 ",(0,l.jsx)(r.code,{children:"'192.168.51.106:8020'"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"\u521b\u5efa\u7528\u6237\u6620\u5c04\uff0c\u4e3a\u5f53\u524d\u7528\u6237\u63d0\u4f9b\u8bbf\u95ee\u8fd9\u4e9b\u5916\u90e8\u670d\u52a1\u5668\u6240\u9700\u7684\u8ba4\u8bc1\u4fe1\u606f\u3002"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"\u9752\u4e91\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"CREATE STORAGE USER MAPPING FOR CURRENT_USER STORAGE SERVER oss_server OPTIONS (accesskey '<\u9752\u4e91\u7684 accesskey \u5bc6\u94a5>', secretkey '<\u9752\u4e91\u7684 secretkey \u5bc6\u94a5>');\n"})}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"HDFS\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"CREATE STORAGE USER MAPPING FOR CURRENT_USER STORAGE SERVER hdfs_server OPTIONS (auth_method 'simple');\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"\u4ee5\u4e0a\u547d\u4ee4\u4e2d\u6d89\u53ca\u7684\u53c2\u6570\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"accesskey"})," \u548c ",(0,l.jsx)(r.code,{children:"secretkey"}),"\uff1a\u8fd9\u4e24\u4e2a\u53c2\u6570\u63d0\u4f9b\u5fc5\u8981\u7684\u8ba4\u8bc1\u4fe1\u606f\u3002",(0,l.jsx)(r.code,{children:"'accesskey'"})," \u548c ",(0,l.jsx)(r.code,{children:"'secretkey'"})," \u7c7b\u4f3c\u4e8e\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u7528\u4e8e\u8bbf\u95ee\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"auth_method"}),"\uff1a\u8868\u793a\u8bbf\u95ee HDFS \u7684\u8ba4\u8bc1\u6a21\u5f0f\u3002",(0,l.jsx)(r.code,{children:"simple"})," \u8868\u793a\u7b80\u5355\u8ba4\u8bc1\u6a21\u5f0f\uff0c",(0,l.jsx)(r.code,{children:"kerberos"})," \u8868\u793a\u4f7f\u7528 Kerberos \u8ba4\u8bc1\u6a21\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:["\u5728\u5916\u90e8\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u8868\u7a7a\u95f4\u3002\u8fd9\u4e9b\u8868\u7a7a\u95f4\u7279\u5b9a\u5730\u94fe\u63a5\u5230\u4e86\u524d\u9762\u5b9a\u4e49\u7684\u5916\u90e8\u670d\u52a1\u5668\uff0c\u8868\u7a7a\u95f4\u7684 ",(0,l.jsx)(r.code,{children:"location"})," \u9009\u9879\u6307\u5411\u4e86\u5916\u90e8\u5b58\u50a8\u4e0a\u7684\u7279\u5b9a\u8def\u5f84\u3002\u4ee5\u4e0b\u793a\u4f8b\u5206\u522b\u5728\u9752\u4e91\u548c HDFS \u4e0a\u521b\u5efa\u8868\u7a7a\u95f4 ",(0,l.jsx)(r.code,{children:"dir_oss"})," \u548c ",(0,l.jsx)(r.code,{children:"dir_hdfs"}),"\u3002"]}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"\u9752\u4e91\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"CREATE TABLESPACE dir_oss location '<\u5bf9\u8c61\u5b58\u50a8\u4e0a\u7684\u8868\u7a7a\u95f4\u8def\u5f84>' SERVER oss_server HANDLER '$libdir/dfs_tablespace, remote_file_handler';\n\n-- \u4f60\u9700\u8981\u5c06 <\u5bf9\u8c61\u5b58\u50a8\u4e0a\u7684\u8868\u7a7a\u95f4\u8def\u5f84> \u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u8def\u5f84\uff0c\u4f8b\u5982 /tbs-49560-0-mgq-multi/oss-server-01-17\u3002\n"})}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"HDFS\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"CREATE TABLESPACE dir_hdfs location '<\u5bf9\u8c61\u5b58\u50a8\u4e0a\u7684\u8868\u7a7a\u95f4\u8def\u5f84>' SERVER hdfs_server HANDLER '$libdir/dfs_tablespace, remote_file_handler';\n\n-- \u4f60\u9700\u8981\u5c06 <\u5bf9\u8c61\u5b58\u50a8\u4e0a\u7684\u8868\u7a7a\u95f4\u8def\u5f84> \u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u8def\u5f84\uff0c\u4f8b\u5982 /tbs-49560-0-mgq-multi/oss-server-01-17\u3002\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:["\u5728\u8868\u7a7a\u95f4\u4e2d\u521b\u5efa Directory Table\u3002\u4ee5\u4e0b\u8bed\u53e5\u5206\u522b\u5728\u8868\u7a7a\u95f4 ",(0,l.jsx)(r.code,{children:"dir_oss"})," \u548c ",(0,l.jsx)(r.code,{children:"dir_hdfs"})," \u4e2d\u521b\u5efa\u4e86 Directory Table ",(0,l.jsx)(r.code,{children:"dir_table_oss"})," \u548c ",(0,l.jsx)(r.code,{children:"dir_table_hdfs"}),"\u3002"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"CREATE DIRECTORY TABLE dir_table_oss TABLESPACE dir_oss;\nCREATE DIRECTORY TABLE dir_table_hdfs TABLESPACE dir_hdfs;\n"})}),"\n",(0,l.jsx)(r.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,l.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u5728\u521b\u5efa\u8868\u7a7a\u95f4\u65f6\uff0c\u9047\u5230 ",(0,l.jsx)(r.code,{children:"directory ... does not exist"})," \u7684\u62a5\u9519\uff0c\u4f60\u9700\u8981\u4e3a\u96c6\u7fa4\u914d\u7f6e ",(0,l.jsx)(r.code,{children:"shared_preload_libraries"})," \u5e76\u5bfc\u5165\u5230\u5bf9\u8c61\u5b58\u50a8\u3002\u4f8b\u5982\u5148\u6267\u884c ",(0,l.jsx)(r.code,{children:"gpconfig -c shared_preload_libraries -v 'dfs_tablespace'"}),"\uff0c\u518d\u6267\u884c ",(0,l.jsx)(r.code,{children:"gpstop -ra"})," \u91cd\u542f\u96c6\u7fa4\u3002"]})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"\u67e5\u770b-directory-table-\u7684\u5b57\u6bb5\u4fe1\u606f",children:"\u67e5\u770b Directory Table \u7684\u5b57\u6bb5\u4fe1\u606f"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"\\dY   -- \u5217\u51fa\u5f53\u524d\u6240\u6709\u7684 Directory Table\u3002\n\\d <directory_table>   -- \u67e5\u770b\u67d0\u5f20 Directory Table \u7684\u5b57\u6bb5\u4fe1\u606f\u3002\n"})}),"\n",(0,l.jsx)(r.p,{children:"\u901a\u5e38 Directory Table \u7684\u5b57\u6bb5\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:(0,l.jsx)(r.strong,{children:"\u5b57\u6bb5\u540d"})}),(0,l.jsx)(r.th,{children:(0,l.jsx)(r.strong,{children:"\u6570\u636e\u7c7b\u578b"})}),(0,l.jsx)(r.th,{children:"\u6ce8\u610f\u4e8b\u9879"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"RELATIVE_PATH"})}),(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"TEXT"})}),(0,l.jsx)(r.td,{})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"SIZE"})}),(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"NUMBER"})}),(0,l.jsx)(r.td,{})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"LAST_MODIFIED"})}),(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"TIMESTAMP_LTZ"})}),(0,l.jsx)(r.td,{})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"MD5"})}),(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"HEX"})}),(0,l.jsx)(r.td,{})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"TAGS"})}),(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"JSONB"})}),(0,l.jsx)(r.td,{children:'\u7528\u6237\u81ea\u5b9a\u4e49\u6807\u7b7e\u3002\u53ef\u7528\u6765\u6807\u8bb0\u6570\u636e\u8840\u7f18\uff0c\u6587\u4ef6\u4e0a\u4f20\u90e8\u95e8/\u56e2\u961f\uff0c\u5206\u7c7b\u7b49\u3002"k1=v1, k2=v2"'})]})]})]}),"\n",(0,l.jsx)(r.h3,{id:"\u52a0\u8f7d\u6587\u4ef6\u81f3-directory-table",children:"\u52a0\u8f7d\u6587\u4ef6\u81f3 Directory Table"}),"\n",(0,l.jsx)(r.p,{children:"\u5c06\u6587\u4ef6\u4e0a\u4f20\u81f3 Directory Table \u540e\uff0c\u8be5\u6587\u4ef6\u88ab\u4e0a\u4f20\u81f3 Cloudberry Database \u7ba1\u7406\u7684\u672c\u5730\u5b58\u50a8\u6216\u5bf9\u8c61\u5b58\u50a8\u4e2d\uff0c\u800c Directory Table \u5219\u7eb3\u7ba1\u8be5\u6587\u4ef6\u7684\u5143\u6570\u636e\u3002Cloudberry Database v1.5.3 \u6682\u4e0d\u652f\u6301\u7528\u6237\u81ea\u884c\u7ba1\u7406\u5bf9\u8c61\u5b58\u50a8\u76ee\u5f55\u6587\u4ef6\u3002"}),"\n",(0,l.jsx)(r.p,{children:"\u4ece\u672c\u5730\u4e0a\u4f20\u6587\u4ef6\u81f3\u6570\u636e\u5e93\u5bf9\u8c61\u5b58\u50a8\u8bed\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"\\COPY '<directory_table_name>' FROM '<local_path_to_file> <target_path>';\nCOPY '<directory_table_name>' FROM '<local_path_to_file> <target_path>';  -- \u53ef\u4ee5\u7701\u7565\u5f00\u5934\u7684 \\\n\n-- <directory_table_name> \u4e3a Directory Table \u7684\u8868\u540d\n-- <local_path_to_file> \u4e3a\u5f85\u4e0a\u4f20\u6587\u4ef6\u7684\u672c\u5730\u8def\u5f84\n-- <target_path> \u4e3a\u672c\u5730\u6216\u5bf9\u8c61\u5b58\u50a8\u4e2d\u7684\u76ee\u6807\u8def\u5f84\uff0c\u6587\u4ef6\u4f1a\u88ab\u4e0a\u4f20\u81f3\u8be5\u8def\u5f84\n"})}),"\n",(0,l.jsx)(r.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,l.jsxs)(r.p,{children:["\u5efa\u8bae\u5229\u7528 ",(0,l.jsx)(r.code,{children:"<path>"})," \u7684\u5b50\u76ee\u5f55\u80fd\u529b\uff0c\u4ee5\u786e\u4fdd\u4e0a\u4f20\u540e\u7684\u76ee\u5f55\u8def\u5f84\u4e0e\u672c\u5730\u4e00\u81f4\uff0c\u65b9\u4fbf\u5bf9\u6587\u4ef6\u8fdb\u884c\u7ba1\u7406\u3002"]})}),"\n",(0,l.jsxs)(r.p,{children:["\u4e3a\u4e86\u66f4\u597d\u5730\u7ba1\u7406\u6216\u8ddf\u8e2a\u6587\u4ef6\u548c\u6570\u636e\u6d41\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728\u4e0a\u4f20\u547d\u4ee4\u4e2d\u6dfb\u52a0 ",(0,l.jsx)(r.code,{children:"tag"})," \uff0c\u4ee5\u63d0\u4f9b\u9644\u52a0\u4fe1\u606f\u6216\u6807\u8bb0\uff1a"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"\\COPY '<directory_table_name>' FROM '<local_path_to_file>' '<target_path>' WITH tag '<tag_name>';\n"})}),"\n",(0,l.jsx)(r.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"-- \u5c06\u6587\u4ef6\u4e0a\u4f20\u81f3\u6839\u76ee\u5f55\n\\COPY BINARY dir_table_oss FROM '/data/country.data' 'country.data';\n\n-- \u5c06\u6587\u4ef6\u4e0a\u4f20\u81f3\u7279\u5b9a\u8def\u5f84 top_level/second_level\n\\COPY BINARY dir_table_oss FROM '/data/region.tbl' 'top_level/second_level/region.tbl';\n\n-- \u5c06\u6587\u4ef6\u4e0a\u4f20\u81f3\u6839\u76ee\u5f55\uff0c\u5e76\u4f7f\u7528 tag\n\\COPY BINARY dir_table_oss FROM '/data/country1.data' 'country1.data' with tag 'country';\n\n-- \u5c06\u6587\u4ef6\u4e0a\u4f20\u81f3\u7279\u5b9a\u8def\u5f84 top_level/second_level\uff0c\u5e76\u4f7f\u7528 tag\n\\COPY BINARY dir_table_oss FROM '/data/region1.tbl' 'top_level/second_level/region1.tbl' with tag 'region';\n"})}),"\n",(0,l.jsxs)(r.p,{children:["\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177 ",(0,l.jsx)(r.code,{children:"cbload"})," \u5c06\u6587\u4ef6\u6279\u91cf\u4e0a\u4f20\u81f3\u5bf9\u8c61\u5b58\u50a8\u3002\u4f7f\u7528 ",(0,l.jsx)(r.code,{children:"cbload --inputfile <\u76ee\u5f55>"})," \u8bed\u6cd5\u5c06\u4e00\u4e2a\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u4e0a\u4f20\u81f3\u5bf9\u8c61\u5b58\u50a8\u3002",(0,l.jsx)(r.code,{children:"cbload"})," \u7684\u547d\u4ee4\u884c\u53c2\u6570\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"\u7528\u6cd5\uff1a\n  cbload [flags]\n\n\u53c2\u6570\uff1a\n      --database string       \u8981\u8fde\u63a5\u7684\u6570\u636e\u5e93\uff08\u9ed8\u8ba4\u4e3a gpadmin\uff09\n      --dest-path string      \u76f8\u5bf9\u4e8e\u8868\u6839\u76ee\u5f55\u7684\u8def\u5f84\uff08\u9ed8\u8ba4\uff1a\u8868\u7684\u6839\u76ee\u5f55\uff09\n      --force-password-auth   \u5f3a\u5236\u5bc6\u7801\u63d0\u793a\uff08\u9ed8\u8ba4\u4e3a false\uff09\n      --help                  \u6253\u5370\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\n      --host string           \u8981\u8fde\u63a5\u7684\u4e3b\u673a\uff08\u9ed8\u8ba4\u4e3a localhost\uff09\n      --input-file strings    \u8f93\u5165\u7684\u6587\u4ef6\u6216\u76ee\u5f55\n      --logfile string        \u5c06\u65e5\u5fd7\u8f93\u51fa\u5230\u65e5\u5fd7\u6587\u4ef6\uff08\u9ed8\u8ba4\u65e0\uff09\n      --port int              \u8981\u8fde\u63a5\u7684\u7aef\u53e3\uff08\u9ed8\u8ba4\u4e3a 5432\uff09\n      --stop-on-error         \u5f53\u53d1\u751f\u9519\u8bef\u65f6\u505c\u6b62\u52a0\u8f7d\u6587\u4ef6\uff08\u9ed8\u8ba4\u4e3a false\uff09\n      --table string          \u8981\u52a0\u8f7d\u5230\u7684\u8868\n      --tag string            \u6587\u4ef6\u6807\u7b7e\n      --tasks int             \u540c\u65f6\u52a0\u8f7d\u6587\u4ef6\u7684\u6700\u5927\u6570\u91cf\uff08\u9ed8\u8ba4\u4e3a 1\uff09\n      --user string           \u4f5c\u4e3a\u7528\u6237\u8fde\u63a5\uff08\u9ed8\u8ba4\u4e3a gpadmin\uff09\n      --verbose               \u6307\u793a\u5de5\u5177\u5e94\u751f\u6210\u8be6\u7ec6\u8f93\u51fa\uff08\u9ed8\u8ba4\u4e3a false\uff09\n      --version               \u6253\u5370\u7248\u672c\u4fe1\u606f\u5e76\u9000\u51fa\n"})}),"\n",(0,l.jsx)(r.h3,{id:"\u67e5\u8be2\u548c\u4f7f\u7528-directory-table-\u6587\u4ef6",children:"\u67e5\u8be2\u548c\u4f7f\u7528 Directory Table \u6587\u4ef6"}),"\n",(0,l.jsx)(r.p,{children:"\u67e5\u8be2 Directory Table \u8868\u5185\u7684\u6587\u4ef6\u5143\u4fe1\u606f\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"-- \u4f7f\u7528\u8868\u51fd\u6570 directory_table() \u8bfb\u53d6\u6587\u4ef6\u5143\u6570\u636e\u53ca\u5185\u5bb9\nSELECT relative_path, \n       size, \n       last_modified, \n       md5,\n       tag,\n       content\n       FROM directory_table('<directory_table>');\n\n-- \u4f7f\u7528\u4ee5\u4e0b\u4efb\u4e00\u8bed\u53e5\u67e5\u8be2\u67d0\u5f20\u7684 Directory Table \u5185\u7684\u6570\u636e\u3002\nSELECT * FROM <directory_table>;\nSELECT * FROM DIRECTORY_TABLE('<directory_table>');\n"})}),"\n",(0,l.jsx)(r.h3,{id:"\u5220\u9664-directory--table-\u6240\u7eb3\u7ba1\u7684\u6587\u4ef6",children:"\u5220\u9664 Directory  Table \u6240\u7eb3\u7ba1\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(r.p,{children:"\u8981\u5220\u9664 Directory Table \u6240\u7eb3\u7ba1\u7684\u6587\u4ef6\uff0c\u4f60\u9700\u8981\u6709\u7ba1\u7406\u5458\u6743\u9650\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"SELECT remove_file('dir_table_oss', 'country.data');\n\n-- \u8be5\u547d\u4ee4\u5220\u9664 dir_table_oss \u8868\u6240\u7eb3\u7ba1\u7684\u6587\u4ef6 country.data\n"})}),"\n",(0,l.jsx)(r.h3,{id:"\u5220\u9664-directory-table",children:"\u5220\u9664 Directory Table"}),"\n",(0,l.jsx)(r.p,{children:"\u5220\u9664\u6307\u5b9a\u7684 Directory Table\u3002\u5220\u9664\u540e\uff0c\u8868\u5185\u7684\u6240\u6709\u6587\u4ef6\u4e5f\u4f1a\u88ab\u5220\u9664\u3002 \u8981\u5220\u9664 Directory Table\uff0c\u4f60\u9700\u8981\u6709\u7ba1\u7406\u5458\u6743\u9650\u3002"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-sql",children:"DROP DIRECTORY TABLE <table_name>;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>d});var l=n(67294);const s={},c=l.createContext(s);function d(e){const r=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(c.Provider,{value:r},e.children)}}}]);