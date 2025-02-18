"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5798],{47643:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var l=i(85893),s=i(11151);const d={title:"pg_filedump"},c="pg_filedump",r={id:"sys-utilities/pg-filedump",title:"pg_filedump",description:"Filedump\uff0c\u5373\u7cfb\u7edf\u547d\u4ee4\u884c\u5de5\u5177 pg_filedump\uff0c\u662f\u4e00\u4e2a\u7528\u4e8e\u5c06 Cloudberry Database \u7684\u5806\u6587\u4ef6\u3001\u7d22\u5f15\u6587\u4ef6\u548c\u63a7\u5236\u6587\u4ef6\u683c\u5f0f\u5316\u4e3a\u4eba\u7c7b\u53ef\u8bfb\u5f62\u5f0f\u7684\u5b9e\u7528\u5de5\u5177\u3002\u901a\u8fc7 filedump\uff0c\u7528\u6237\u53ef\u4ee5\u4ee5\u591a\u79cd\u65b9\u5f0f\u683c\u5f0f\u5316\u548c\u8f6c\u50a8\u6587\u4ef6\uff0c\u5982\u5728\u547d\u4ee4\u884c\u9009\u9879\u8bf4\u660e\u90e8\u5206\u6240\u8ff0\uff0c\u751a\u81f3\u53ef\u4ee5\u76f4\u63a5\u8f6c\u50a8\u4e8c\u8fdb\u5236\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/sys-utilities/pg-filedump.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/pg-filedump",permalink:"/zh/docs/sys-utilities/pg-filedump",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/sys-utilities/pg-filedump.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1739329693,formattedLastUpdatedAt:"2025\u5e742\u670812\u65e5",frontMatter:{title:"pg_filedump"},sidebar:"docsbars",previous:{title:"pg_dumpall",permalink:"/zh/docs/sys-utilities/pg-dumpall"},next:{title:"psql",permalink:"/zh/docs/sys-utilities/psql"}},t={},a=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u7f16\u8bd1\u4e0e\u5b89\u88c5",id:"\u7f16\u8bd1\u4e0e\u5b89\u88c5",level:2},{value:"\u914d\u7f6e\u9009\u9879",id:"\u914d\u7f6e\u9009\u9879",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u683c\u5f0f\u5316\u4e00\u4e2a\u5806\u6587\u4ef6",id:"\u683c\u5f0f\u5316\u4e00\u4e2a\u5806\u6587\u4ef6",level:3},{value:"\u67e5\u770b\u63a7\u5236\u6587\u4ef6\u5185\u5bb9",id:"\u67e5\u770b\u63a7\u5236\u6587\u4ef6\u5185\u5bb9",level:3},{value:"\u683c\u5f0f\u5316\u5e76\u663e\u793a\u7279\u5b9a\u5757\u8303\u56f4",id:"\u683c\u5f0f\u5316\u5e76\u663e\u793a\u7279\u5b9a\u5757\u8303\u56f4",level:3},{value:"\u4f7f\u7528 <code>-i</code> \u548c <code>-f</code> \u9009\u9879\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f",id:"\u4f7f\u7528--i-\u548c--f-\u9009\u9879\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f",level:3},{value:"\u547d\u4ee4\u9009\u9879\u8bf4\u660e",id:"\u547d\u4ee4\u9009\u9879\u8bf4\u660e",level:3}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"pg_filedump",children:"pg_filedump"}),"\n",(0,l.jsxs)(e.p,{children:["Filedump\uff0c\u5373\u7cfb\u7edf\u547d\u4ee4\u884c\u5de5\u5177 ",(0,l.jsx)(e.code,{children:"pg_filedump"}),"\uff0c\u662f\u4e00\u4e2a\u7528\u4e8e\u5c06 Cloudberry Database \u7684\u5806\u6587\u4ef6\u3001\u7d22\u5f15\u6587\u4ef6\u548c\u63a7\u5236\u6587\u4ef6\u683c\u5f0f\u5316\u4e3a\u4eba\u7c7b\u53ef\u8bfb\u5f62\u5f0f\u7684\u5b9e\u7528\u5de5\u5177\u3002\u901a\u8fc7 filedump\uff0c\u7528\u6237\u53ef\u4ee5\u4ee5\u591a\u79cd\u65b9\u5f0f\u683c\u5f0f\u5316\u548c\u8f6c\u50a8\u6587\u4ef6\uff0c\u5982\u5728",(0,l.jsx)(e.a,{href:"#%E5%91%BD%E4%BB%A4%E9%80%89%E9%A1%B9%E8%AF%B4%E6%98%8E",children:"\u547d\u4ee4\u884c\u9009\u9879\u8bf4\u660e"}),"\u90e8\u5206\u6240\u8ff0\uff0c\u751a\u81f3\u53ef\u4ee5\u76f4\u63a5\u8f6c\u50a8\u4e8c\u8fdb\u5236\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["Cloudberry Database \u7684 filedump \u4ed3\u5e93\u5730\u5740\uff1a",(0,l.jsx)(e.code,{children:"https://github.com/cloudberrydb/filedump"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,l.jsx)(e.p,{children:"Filedump \u5de5\u5177\u4e3b\u8981\u9002\u7528\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6587\u4ef6\u5206\u6790\u4e0e\u8c03\u8bd5\uff1a\u5c06\u6570\u636e\u5e93\u7684\u5806\u6587\u4ef6\u3001\u7d22\u5f15\u6587\u4ef6\u6216\u63a7\u5236\u6587\u4ef6\u8f6c\u5316\u4e3a\u53ef\u8bfb\u683c\u5f0f\uff0c\u6709\u52a9\u4e8e\u5206\u6790\u6587\u4ef6\u5185\u5bb9\u3001\u8c03\u8bd5\u6570\u636e\u5e93\u95ee\u9898\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u6570\u636e\u6062\u590d\uff1a\u5728\u6570\u636e\u5e93\u6587\u4ef6\u635f\u574f\u65f6\uff0c\u4f7f\u7528 filedump \u53ef\u4ee5\u5e2e\u52a9\u63d0\u53d6\u6570\u636e\u5e76\u8fdb\u884c\u6062\u590d\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u6570\u636e\u5e93\u5b66\u4e60\u4e0e\u7814\u7a76\uff1a\u5bf9\u4e8e\u7814\u7a76\u6570\u636e\u5e93\u5185\u90e8\u7ed3\u6784\u6216\u5b66\u4e60\u6570\u636e\u5e93\u6587\u4ef6\u683c\u5f0f\u7684\u5f00\u53d1\u8005\u548c\u7ba1\u7406\u5458\uff0cfiledump \u63d0\u4f9b\u4e86\u76f4\u63a5\u67e5\u770b\u6570\u636e\u5e93\u6587\u4ef6\u5185\u5bb9\u7684\u624b\u6bb5\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7f16\u8bd1\u4e0e\u5b89\u88c5",children:"\u7f16\u8bd1\u4e0e\u5b89\u88c5"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u7f16\u8bd1 filedump \u524d\uff0c\u4f60\u9700\u8981\u5b89\u88c5\u597d\u4e00\u5957 Cloudberry Database v1.0.0 \u53ca\u4ee5\u4e0a\u7248\u672c\u7684\u96c6\u7fa4\uff0c\u4ee5\u4e0b\u662f\u5178\u578b\u7684\u7f16\u8bd1\u6b65\u9aa4\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u786e\u4fdd CloudberryDB \u5305\u53ef\u4ee5\u88ab\u627e\u5230\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"su - gpadmin\nsource /usr/local/cloudberry-db/greenplum_path.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5c06 GitHub \u4ed3\u5e93 ",(0,l.jsx)(e.code,{children:"cloudberrydb/filedump"})," \u514b\u9686\u81f3\u672c\u5730\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/cloudberrydb/filedump.git\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8fdb\u5165\u4ed3\u5e93\u76ee\u5f55\uff0c\u5e76\u6267\u884c\u7f16\u8bd1\u547d\u4ee4\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"cd filredump\nmake\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5b89\u88c5 ",(0,l.jsx)(e.code,{children:"pg_filedump"}),"\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"make install\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u914d\u7f6e\u9009\u9879",children:"\u914d\u7f6e\u9009\u9879"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\uff0c\u4ee5\u4e0b\u914d\u7f6e\u9009\u9879\u662f\u53ef\u7528\u7684\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"ENABLE_ZLIB"}),"\uff1a\u7528\u4e8e\u5728 zlib \u538b\u7f29\u7684\u6570\u636e\u6587\u4ef6\u4e0a\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"pg_filedump"}),"\u3002\u5982\u679c\u68c0\u6d4b\u5230 ",(0,l.jsx)(e.code,{children:"zlib"})," \u5934\u6587\u4ef6\u548c\u5e93\uff0c",(0,l.jsx)(e.code,{children:"zlib"})," \u652f\u6301\u4f1a\u81ea\u52a8\u542f\u7528\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5f3a\u5236\u542f\u7528 zlib \u652f\u6301\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"make -f Makefile ENABLE_ZLIB=y\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5c06\u6b64\u53d8\u91cf\u8bbe\u7f6e\u4e3a ",(0,l.jsx)(e.code,{children:"n"})," \u6765\u5f3a\u5236\u4e0d\u542f\u7528 ",(0,l.jsx)(e.code,{children:"zlib"})," \u652f\u6301\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"ENABLE_ZSTD"}),"\uff1a\u7c7b\u4f3c\u8bbe\u7f6e\u7528\u4e8e ",(0,l.jsx)(e.code,{children:"zstd"})," \u538b\u7f29\u65b9\u6cd5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,l.jsxs)(e.p,{children:["\u5047\u8bbe\u4f60\u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u4e86 ",(0,l.jsx)(e.code,{children:"filedump"}),"\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684\u547d\u4ee4\u793a\u4f8b\uff1a"]}),"\n",(0,l.jsx)(e.h3,{id:"\u683c\u5f0f\u5316\u4e00\u4e2a\u5806\u6587\u4ef6",children:"\u683c\u5f0f\u5316\u4e00\u4e2a\u5806\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"pg_filedump -f /path/to/heap/file\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ pg_filedump -f /home/gpadmin/datadirs/dbfast1/demoDataDir0/base/13347/16385\n\n*******************************************************************\n* PostgreSQL File/Block Formatted Dump Utility\n*\n* File: /home/gpadmin/datadirs/dbfast1/demoDataDir0/base/13347/16385\n* Options used: -f\n*******************************************************************\n\nBlock    0 ********************************************************\n<Header> -----\nBlock Offset: 0x00000000         Offsets: Lower      44 (0x002c)\nBlock: Size 32768  Version   14            Upper    32568 (0x7f38)\nLSN:  logid      0 recoff 0x0c084ef8      Special  32768 (0x8000)\nItems:    5                      Free Space: 32524\nChecksum: 0x27ac  Prune XID: 0x00000000  Flags: 0x0000 ()\nLength (including item array): 44\n\n0000: 00000000 f84e080c ac270000 2c00387f  .....N...'..,.8.\n0010: 00800e80 00000000 d8ff4800 b0ff5000  ..........H...P.\n0020: 88ff5000 60ff5000 38ff5000           ..P.`.P.8.P.    \n\n<Data> -----\nItem   1 -- Length:   36  Offset: 32728 (0x7fd8)  Flags: NORMAL\n7fd8: 1b030000 00000000 00000000 00000000  ................\n7fe8: 01000300 02081800 02000000 09426f62  .............Bob\n7ff8: 19000000                             ....            \n\nItem   2 -- Length:   40  Offset: 32688 (0x7fb0)  Flags: NORMAL\n7fb0: 1b030000 00000000 00000000 00000000  ................\n7fc0: 02000300 02081800 03000000 11436861  .............Cha\n7fd0: 726c6965 23000000                    rlie#...        \n\nItem   3 -- Length:   40  Offset: 32648 (0x7f88)  Flags: NORMAL\n7f88: 1c030000 00000000 00000000 00000000  ................\n7f98: 03000300 02081800 04000000 0d446176  .............Dav\n7fa8: 69640000 1c000000                    id......        \n\nItem   4 -- Length:   40  Offset: 32608 (0x7f60)  Flags: NORMAL\n7f60: 1d030000 00000000 00000000 00000000  ................\n7f70: 04000300 02081800 07000000 11436861  .............Cha\n7f80: 726c6965 23000000                    rlie#...        \n\nItem   5 -- Length:   40  Offset: 32568 (0x7f38)  Flags: NORMAL\n7f38: 1d030000 00000000 00000000 00000000  ................\n7f48: 05000300 02081800 08000000 0d446176  .............Dav\n7f58: 69640000 1c000000                    id......        \n\n*** End of File Encountered. Last Block Read: 0 ***\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u67e5\u770b\u63a7\u5236\u6587\u4ef6\u5185\u5bb9",children:"\u67e5\u770b\u63a7\u5236\u6587\u4ef6\u5185\u5bb9"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"pg_filedump -c /path/to/pg_control\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ pg_filedump -c /home/gpadmin/datadirs/qddir/demoDataDir-1/global/pg_control\n\n*******************************************************************\n* PostgreSQL File/Block Formatted Dump Utility\n*\n* File: /home/gpadmin/datadirs/qddir/demoDataDir-1/global/pg_control\n* Options used: -c\n*******************************************************************\n\n<pg_control Contents> *********************************************\n\n                        CRC: Correct\n        pg_control Version: 13000700\n            Catalog Version: 302406171\n            System Identifier: 7405502447288557259\n                        State: IN PRODUCTION\n                Last Mod Time: Wed Aug 21 16:20:06 2024\n    Last Checkpoint Record: Log File (0) Offset (0x0c088f80)\nLast Checkpoint Record Redo: Log File (0) Offset (0x0c088f48)\n        |-       TimeLineID: 1\n        |-         Next XID: 0/809\n        |-         Next OID: 24576\n        |- Next Relfilenode: 24576\n        |-       Next Multi: 1\n        |-    Next MultiOff: 0\n        |-             Time: Wed Aug 21 16:20:06 2024\n    Minimum Recovery Point: Log File (0) Offset (0x00000000)\n        Backup Start Record: Log File (0) Offset (0x00000000)\n            Backup End Record: Log File (0) Offset (0x00000000)\nEnd-of-Backup Record Required: no\n    Maximum Data Alignment: 8\n        Floating-Point Sample: 1234567\n        Database Block Size: 32768\n        Blocks Per Segment: 32768\n            XLOG Block Size: 32768\n            XLOG Segment Size: 67108864\n    Maximum Identifier Length: 64\n        Maximum Index Keys: 32\n            TOAST Chunk Size: 8140\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u683c\u5f0f\u5316\u5e76\u663e\u793a\u7279\u5b9a\u5757\u8303\u56f4",children:"\u683c\u5f0f\u5316\u5e76\u663e\u793a\u7279\u5b9a\u5757\u8303\u56f4"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"pg_filedump -R 0 10 -f /path/to/heap/file\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ pg_filedump -R 0 10 -f /home/gpadmin/datadirs/dbfast1/demoDataDir0/base/13347/16385\n\n*******************************************************************\n* PostgreSQL File/Block Formatted Dump Utility\n*\n* File: /home/gpadmin/datadirs/dbfast1/demoDataDir0/base/13347/16385\n* Options used: -R 0 10 -f\n*******************************************************************\n\nBlock    0 ********************************************************\n<Header> -----\nBlock Offset: 0x00000000         Offsets: Lower      44 (0x002c)\nBlock: Size 32768  Version   14            Upper    32568 (0x7f38)\nLSN:  logid      0 recoff 0x0c084ef8      Special  32768 (0x8000)\nItems:    5                      Free Space: 32524\nChecksum: 0x27ac  Prune XID: 0x00000000  Flags: 0x0000 ()\nLength (including item array): 44\n\n0000: 00000000 f84e080c ac270000 2c00387f  .....N...'..,.8.\n0010: 00800e80 00000000 d8ff4800 b0ff5000  ..........H...P.\n0020: 88ff5000 60ff5000 38ff5000           ..P.`.P.8.P.    \n\n<Data> -----\nItem   1 -- Length:   36  Offset: 32728 (0x7fd8)  Flags: NORMAL\n7fd8: 1b030000 00000000 00000000 00000000  ................\n7fe8: 01000300 02081800 02000000 09426f62  .............Bob\n7ff8: 19000000                             ....            \n\nItem   2 -- Length:   40  Offset: 32688 (0x7fb0)  Flags: NORMAL\n7fb0: 1b030000 00000000 00000000 00000000  ................\n7fc0: 02000300 02081800 03000000 11436861  .............Cha\n7fd0: 726c6965 23000000                    rlie#...        \n\nItem   3 -- Length:   40  Offset: 32648 (0x7f88)  Flags: NORMAL\n7f88: 1c030000 00000000 00000000 00000000  ................\n7f98: 03000300 02081800 04000000 0d446176  .............Dav\n7fa8: 69640000 1c000000                    id......        \n\nItem   4 -- Length:   40  Offset: 32608 (0x7f60)  Flags: NORMAL\n7f60: 1d030000 00000000 00000000 00000000  ................\n7f70: 04000300 02081800 07000000 11436861  .............Cha\n7f80: 726c6965 23000000                    rlie#...        \n\nItem   5 -- Length:   40  Offset: 32568 (0x7f38)  Flags: NORMAL\n7f38: 1d030000 00000000 00000000 00000000  ................\n7f48: 05000300 02081800 08000000 0d446176  .............Dav\n7f58: 69640000 1c000000                    id......        \n\n\n\n*** End of File Encountered. Last Block Read: 0 ***\n"})}),"\n",(0,l.jsxs)(e.h3,{id:"\u4f7f\u7528--i-\u548c--f-\u9009\u9879\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f",children:["\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"-i"})," \u548c ",(0,l.jsx)(e.code,{children:"-f"})," \u9009\u9879\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"pg_filedump -i -f /path/to/heap/file\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ pg_filedump -i -f /home/gpadmin/datadirs/dbfast1/demoDataDir0/base/13347/16385\n\n*******************************************************************\n* PostgreSQL File/Block Formatted Dump Utility\n*\n* File: /home/gpadmin/datadirs/dbfast1/demoDataDir0/base/13347/16385\n* Options used: -i -f\n*******************************************************************\n\nBlock    0 ********************************************************\n<Header> -----\n Block Offset: 0x00000000         Offsets: Lower      44 (0x002c)\n Block: Size 32768  Version   14            Upper    32568 (0x7f38)\n LSN:  logid      0 recoff 0x0c084ef8      Special  32768 (0x8000)\n Items:    5                      Free Space: 32524\n Checksum: 0x27ac  Prune XID: 0x00000000  Flags: 0x0000 ()\n Length (including item array): 44\n\n  0000: 00000000 f84e080c ac270000 2c00387f  .....N...'..,.8.\n  0010: 00800e80 00000000 d8ff4800 b0ff5000  ..........H...P.\n  0020: 88ff5000 60ff5000 38ff5000           ..P.`.P.8.P.    \n\n<Data> -----\n Item   1 -- Length:   36  Offset: 32728 (0x7fd8)  Flags: NORMAL\n  XMIN: 795  XMAX: 0  CID|XVAC: 0\n  Block Id: 0  linp Index: 1   Attributes: 3   Size: 24\n  infomask: 0x0802 (HASVARWIDTH|XMAX_INVALID) \n\n  7fd8: 1b030000 00000000 00000000 00000000  ................\n  7fe8: 01000300 02081800 02000000 09426f62  .............Bob\n  7ff8: 19000000                             ....            \n\n Item   2 -- Length:   40  Offset: 32688 (0x7fb0)  Flags: NORMAL\n  XMIN: 795  XMAX: 0  CID|XVAC: 0\n  Block Id: 0  linp Index: 2   Attributes: 3   Size: 24\n  infomask: 0x0802 (HASVARWIDTH|XMAX_INVALID) \n\n  7fb0: 1b030000 00000000 00000000 00000000  ................\n  7fc0: 02000300 02081800 03000000 11436861  .............Cha\n  7fd0: 726c6965 23000000                    rlie#...        \n\n Item   3 -- Length:   40  Offset: 32648 (0x7f88)  Flags: NORMAL\n  XMIN: 796  XMAX: 0  CID|XVAC: 0\n  Block Id: 0  linp Index: 3   Attributes: 3   Size: 24\n  infomask: 0x0802 (HASVARWIDTH|XMAX_INVALID) \n\n  7f88: 1c030000 00000000 00000000 00000000  ................\n  7f98: 03000300 02081800 04000000 0d446176  .............Dav\n  7fa8: 69640000 1c000000                    id......        \n\n Item   4 -- Length:   40  Offset: 32608 (0x7f60)  Flags: NORMAL\n  XMIN: 797  XMAX: 0  CID|XVAC: 0\n  Block Id: 0  linp Index: 4   Attributes: 3   Size: 24\n  infomask: 0x0802 (HASVARWIDTH|XMAX_INVALID) \n\n  7f60: 1d030000 00000000 00000000 00000000  ................\n  7f70: 04000300 02081800 07000000 11436861  .............Cha\n  7f80: 726c6965 23000000                    rlie#...        \n\n Item   5 -- Length:   40  Offset: 32568 (0x7f38)  Flags: NORMAL\n  XMIN: 797  XMAX: 0  CID|XVAC: 0\n  Block Id: 0  linp Index: 5   Attributes: 3   Size: 24\n  infomask: 0x0802 (HASVARWIDTH|XMAX_INVALID) \n\n  7f38: 1d030000 00000000 00000000 00000000  ................\n  7f48: 05000300 02081800 08000000 0d446176  .............Dav\n  7f58: 69640000 1c000000                    id......        \n\n\n\n*** End of File Encountered. Last Block Read: 0 ***\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u547d\u4ee4\u9009\u9879\u8bf4\u660e",children:"\u547d\u4ee4\u9009\u9879\u8bf4\u660e"}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528 filedump \u5de5\u5177\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u683c\u5f0f\u5316\u548c\u8f6c\u50a8\u6570\u636e\u5e93\u6587\u4ef6\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"pg_filedump [-abcdfhikxy] [-R startblock [endblock]] [-D attrlist] [-S blocksize] [-s segsize] [-n segnumber] file\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\uff1a\u76f8\u5bf9\u5730\u5740\u663e\u793a\u3001\u683c\u5f0f\u5316\u6574\u4e2a\u6587\u4ef6\u3001\u4f7f\u7528\u6587\u4ef6\u7b2c 0 \u5757\u4e2d\u5217\u51fa\u7684\u5757\u5927\u5c0f\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u9009\u9879\u9002\u7528\u4e8e\u5806\u6587\u4ef6\u548c\u7d22\u5f15\u6587\u4ef6\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-a"}),"\uff1a\u5728\u683c\u5f0f\u5316\u65f6\u663e\u793a\u7edd\u5bf9\u5730\u5740\uff08\u5757\u5934\u4fe1\u606f\u59cb\u7ec8\u4e3a\u76f8\u5bf9\u5730\u5740\uff09\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-b"}),"\uff1a\u663e\u793a\u6307\u5b9a\u8303\u56f4\u5185\u7684\u4e8c\u8fdb\u5236\u5757\u56fe\u50cf\uff08\u6b64\u9009\u9879\u4f1a\u5173\u95ed\u6240\u6709\u683c\u5f0f\u5316\u9009\u9879\uff09\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-d"}),"\uff1a\u663e\u793a\u683c\u5f0f\u5316\u7684\u5757\u5185\u5bb9\u8f6c\u50a8\uff08\u6b64\u9009\u9879\u4f1a\u5173\u95ed\u6240\u6709\u5176\u4ed6\u683c\u5f0f\u5316\u9009\u9879\uff09\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-D"}),"\uff1a\u4f7f\u7528\u7ed9\u5b9a\u7684\u9017\u53f7\u5206\u9694\u7c7b\u578b\u5217\u8868\u89e3\u7801\u5143\u7ec4\u3002\u652f\u6301\u7684\u7c7b\u578b\u5217\u8868\u5305\u62ec\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"bigint"}),"\n",(0,l.jsx)(e.li,{children:"bigserial"}),"\n",(0,l.jsx)(e.li,{children:"bool"}),"\n",(0,l.jsx)(e.li,{children:"char"}),"\n",(0,l.jsx)(e.li,{children:"charN -- char(n)"}),"\n",(0,l.jsx)(e.li,{children:"date"}),"\n",(0,l.jsx)(e.li,{children:"float"}),"\n",(0,l.jsx)(e.li,{children:"float4"}),"\n",(0,l.jsx)(e.li,{children:"float8"}),"\n",(0,l.jsx)(e.li,{children:"int"}),"\n",(0,l.jsx)(e.li,{children:"json"}),"\n",(0,l.jsx)(e.li,{children:"macaddr"}),"\n",(0,l.jsx)(e.li,{children:"name"}),"\n",(0,l.jsx)(e.li,{children:"oid"}),"\n",(0,l.jsx)(e.li,{children:"real"}),"\n",(0,l.jsx)(e.li,{children:"serial"}),"\n",(0,l.jsx)(e.li,{children:"smallint"}),"\n",(0,l.jsx)(e.li,{children:"smallserial"}),"\n",(0,l.jsx)(e.li,{children:"text"}),"\n",(0,l.jsx)(e.li,{children:"time"}),"\n",(0,l.jsx)(e.li,{children:"timestamp"}),"\n",(0,l.jsx)(e.li,{children:"timetz"}),"\n",(0,l.jsx)(e.li,{children:"uuid"}),"\n",(0,l.jsx)(e.li,{children:"varchar"}),"\n",(0,l.jsx)(e.li,{children:"varcharN -- varchar(n)"}),"\n",(0,l.jsx)(e.li,{children:"xid"}),"\n",(0,l.jsx)(e.li,{children:"xml"}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"~"}),"\uff1a\u5ffd\u7565\u5143\u7ec4\u4e2d\u5269\u4e0b\u7684\u6240\u6709\u5c5e\u6027"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-f"}),"\uff1a\u663e\u793a\u683c\u5f0f\u5316\u7684\u5757\u5185\u5bb9\u8f6c\u50a8\u5e76\u8fdb\u884c\u89e3\u91ca\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-h"}),"\uff1a\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-i"}),"\uff1a\u663e\u793a\u89e3\u91ca\u7684\u9879\u76ee\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-k"}),"\uff1a\u9a8c\u8bc1\u5757\u7684\u6821\u9a8c\u548c\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-R"}),"\uff1a\u663e\u793a\u6587\u4ef6\u4e2d\u7684\u7279\u5b9a\u5757\u8303\u56f4\uff08\u5757\u4ece 0 \u5f00\u59cb\u7d22\u5f15\uff09\u3002","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"[startblock]"}),"\uff1a\u5f00\u59cb\u5757\u7f16\u53f7\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"[endblock]"}),"\uff1a\u7ed3\u675f\u5757\u7f16\u53f7\uff08\u4e0d\u5305\u62ec\u6b64\u5757\uff09\u3002\u5982\u679c\u53ea\u6307\u5b9a\u4e86 ",(0,l.jsx)(e.code,{children:"startblock"}),"\uff0c\u5219\u4ec5\u683c\u5f0f\u5316\u8be5\u5355\u4e2a\u5757\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-s"}),"\uff1a\u5f3a\u5236\u6bb5\u5927\u5c0f\u4e3a ",(0,l.jsx)(e.code,{children:"[segsize]"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-n"}),"\uff1a\u5f3a\u5236\u6bb5\u7f16\u53f7\u4e3a ",(0,l.jsx)(e.code,{children:"[segnumber]"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-S"}),"\uff1a\u5f3a\u5236\u5757\u5927\u5c0f\u4e3a ",(0,l.jsx)(e.code,{children:"[blocksize]"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-x"}),"\uff1a\u5f3a\u5236\u5c06\u5757\u9879\u76ee\u89e3\u91ca\u4e3a\u7d22\u5f15\u9879\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-y"}),"\uff1a\u5f3a\u5236\u5c06\u5757\u9879\u76ee\u89e3\u91ca\u4e3a\u5806\u9879\u76ee\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u9009\u9879\u9002\u7528\u4e8e\u63a7\u5236\u6587\u4ef6\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-c"}),"\uff1a\u5c06\u6307\u5b9a\u7684\u6587\u4ef6\u89e3\u91ca\u4e3a\u63a7\u5236\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-f"}),"\uff1a\u663e\u793a\u683c\u5f0f\u5316\u5185\u5bb9\u8f6c\u50a8\u5e76\u8fdb\u884c\u89e3\u91ca\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-S"}),"\uff1a\u5f3a\u5236\u5757\u5927\u5c0f\u4e3a ",(0,l.jsx)(e.code,{children:"[blocksize]"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u901a\u5e38\u63a8\u8350\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"-i"})," \u548c ",(0,l.jsx)(e.code,{children:"-f"})," \u9009\u9879\u4ee5\u83b7\u53d6\u6700\u6709\u7528\u7684\u8f6c\u50a8\u8f93\u51fa\u3002"]})]})}function o(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>c});var l=i(67294);const s={},d=l.createContext(s);function c(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);