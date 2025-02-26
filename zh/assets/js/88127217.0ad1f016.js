"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5572],{38430:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var r=s(85893),c=s(11151);const d={title:"\u5728 macOS \u4e0a"},l="\u5728 macOS \u4e0a\u7f16\u8bd1\u548c\u5b89\u88c5 Cloudberry Database",i={id:"cbdb-macos-compile",title:"\u5728 macOS \u4e0a",description:"\u672c\u6587\u6863\u6765\u81ea GitHub \u4ed3\u5e93 cloudberrydb/cloudberrydb\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cbdb-macos-compile.md",sourceDirName:".",slug:"/cbdb-macos-compile",permalink:"/zh/docs/cbdb-macos-compile",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/cbdb-macos-compile.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740470606,formattedLastUpdatedAt:"2025\u5e742\u670825\u65e5",frontMatter:{title:"\u5728 macOS \u4e0a"},sidebar:"docsbars",previous:{title:"\u4e0e Greenplum \u7684\u7279\u6027\u5bf9\u6bd4",permalink:"/zh/docs/cbdb-vs-gp-features"},next:{title:"\u5728 Linux \u4e0a",permalink:"/zh/docs/cbdb-linux-compile"}},a={},o=[{value:"\u7b2c 1 \u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56\u9879",id:"\u7b2c-1-\u6b65\u5b89\u88c5\u4f9d\u8d56\u9879",level:2},{value:"\u7b2c 2 \u6b65\uff1a\u4e3a\u672c\u5730\u4e3b\u673a\u914d\u7f6e\u514d\u5bc6 SSH \u767b\u5f55",id:"\u7b2c-2-\u6b65\u4e3a\u672c\u5730\u4e3b\u673a\u914d\u7f6e\u514d\u5bc6-ssh-\u767b\u5f55",level:2},{value:"\u7b2c 3 \u6b65\uff1a\u914d\u7f6e\u3001\u7f16\u8bd1\u548c\u5b89\u88c5",id:"\u7b2c-3-\u6b65\u914d\u7f6e\u7f16\u8bd1\u548c\u5b89\u88c5",level:2},{value:"\u7b2c 4 \u6b65\uff1a\u9a8c\u8bc1\u96c6\u7fa4",id:"\u7b2c-4-\u6b65\u9a8c\u8bc1\u96c6\u7fa4",level:2}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5728-macos-\u4e0a\u7f16\u8bd1\u548c\u5b89\u88c5-cloudberry-database",children:"\u5728 macOS \u4e0a\u7f16\u8bd1\u548c\u5b89\u88c5 Cloudberry Database"}),"\n",(0,r.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,r.jsxs)(n.p,{children:["\u672c\u6587\u6863\u6765\u81ea GitHub \u4ed3\u5e93 ",(0,r.jsx)(n.a,{href:"https://github.com/cloudberrydb/cloudberrydb/blob/main/deploy/build/README.macOS.md",children:(0,r.jsx)(n.code,{children:"cloudberrydb/cloudberrydb"})}),"\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u6863\u5206\u4eab\u4e86\u5982\u4f55\u5728 macOS \u4e0a\uff08\u5355\u8282\u70b9\uff09\u6784\u5efa\u3001\u7f16\u8bd1\u548c\u5b89\u88c5 Cloudberry Database \u4ee5\u4f9b\u5f00\u53d1\u6d4b\u8bd5\u4f7f\u7528\u3002\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636e\u6211\u4eec\u7684\u6d4b\u8bd5\uff0c\u5728\u914d\u5907 Intel \u548c Apple \u82af\u7247\u5904\u7406\u5668\uff08M1 \u6216 M2\uff09\u7684 macOS Ventura 13.4+ \u4e0a\uff0c\u4ee5\u4e0b\u6b65\u9aa4\u80fd\u987a\u5229\u6267\u884c\u3002\u5982\u679c\u4f60\u6709\u65e9\u524d\u7248\u672c\u7684 macOS\uff0c\u5efa\u8bae\u5148\u5347\u7ea7\u7cfb\u7edf\u3002\u8bf7\u786e\u4fdd\u4f60\u7684 Mac \u7535\u8111\u81f3\u5c11\u6709 4 \u6838\u5904\u7406\u5668\u548c 8 GB \u5185\u5b58\uff0c\u5e76\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u3002"}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,r.jsx)(n.p,{children:"\u8bf7\u52ff\u4f7f\u7528\u672c\u6307\u5357\u8fdb\u884c\u751f\u4ea7\u90e8\u7f72\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c-1-\u6b65\u5b89\u88c5\u4f9d\u8d56\u9879",children:"\u7b2c 1 \u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56\u9879"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5c06 Cloudberry Database \u7684\u6e90\u4ee3\u7801\u4ece GitHub \u514b\u9686\u5230\u672c\u5730 Mac\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:cloudberrydb/cloudberrydb.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8fdb\u5165 ",(0,r.jsx)(n.code,{children:"cloudberrydb/"})," \u76ee\u5f55\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd cloudberrydb/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u4f9d\u8d56\u9879\u3002\u7cfb\u7edf\u4f1a\u63d0\u793a\u4f60\u8f93\u5165 macOS \u7cfb\u7edf\u7684 sudo \u5bc6\u7801\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source deploy/build/README.macOS.bash\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,r.jsxs)(n.p,{children:["\u5982\u679c\u7cfb\u7edf\u4e2d\u672a\u5b89\u88c5 ",(0,r.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"}),"\uff0c\u6b64\u547d\u4ee4\u4f1a\u81ea\u52a8\u5b89\u88c5 Homebrew\u3002"]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c-2-\u6b65\u4e3a\u672c\u5730\u4e3b\u673a\u914d\u7f6e\u514d\u5bc6-ssh-\u767b\u5f55",children:"\u7b2c 2 \u6b65\uff1a\u4e3a\u672c\u5730\u4e3b\u673a\u914d\u7f6e\u514d\u5bc6 SSH \u767b\u5f55"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6253\u5f00 macOS \u7cfb\u7edf\u7684",(0,r.jsx)(n.strong,{children:"\u7cfb\u7edf\u8bbe\u7f6e"})," > ",(0,r.jsx)(n.strong,{children:"\u901a\u7528"})," > ",(0,r.jsx)(n.strong,{children:"\u5171\u4eab"})," > ",(0,r.jsx)(n.strong,{children:"\u8fdc\u7a0b\u767b\u5f55"}),"\uff0c\u5728 macOS \u4e0a\u542f\u7528",(0,r.jsx)(n.strong,{children:"\u8fdc\u7a0b\u767b\u5f55"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u9a8c\u8bc1 macOS \u7cfb\u7edf\u662f\u5426\u5f00\u542f\u4e0e localhost \u7684\u514d\u5bc6 SSH \u8fde\u63a5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh $(hostname)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4ee5\u4e0a\u547d\u4ee4\u8fd0\u884c\u6ca1\u6709\u62a5\u9519\u6216\u6ca1\u6709\u63d0\u793a\u8f93\u5165\u5bc6\u7801\uff0c\u8bf7\u6267\u884c ",(0,r.jsx)(n.code,{children:"exit"})," \u5e76\u9605\u8bfb\u4e0b\u4e00\u8282",(0,r.jsx)(n.a,{href:"#%E7%AC%AC-3-%E6%AD%A5%E9%85%8D%E7%BD%AE%E7%BC%96%E8%AF%91%E5%92%8C%E5%AE%89%E8%A3%85",children:"\u7b2c 3 \u6b65\uff1a\u914d\u7f6e\u3001\u7f16\u8bd1\u548c\u5b89\u88c5"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u8f93\u5165\u5bc6\u7801\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8bbe\u7f6e\u514d\u5bc6\u7801 SSH \u8fde\u63a5\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6267\u884c ",(0,r.jsx)(n.code,{children:"ssh-keygen"}),"\uff0c\u7136\u540e\u6267\u884c ",(0,r.jsx)(n.code,{children:"cat ~/.ssh/id_rsa.pub >>  ~/.ssh/authorized_keys"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u518d\u6b21\u6267\u884c ",(0,r.jsx)(n.code,{children:"ssh $(hostname)"}),"\uff0c\u68c0\u67e5\u514d\u5bc6\u7801 SSH \u8fde\u63a5\u662f\u5426\u53ef\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u53ef\u7528\uff0c\u6267\u884c ",(0,r.jsx)(n.code,{children:"exit"})," \u5e76\u9605\u8bfb\u4e0b\u4e00\u8282",(0,r.jsx)(n.a,{href:"#%E7%AC%AC-3-%E6%AD%A5%E9%85%8D%E7%BD%AE%E7%BC%96%E8%AF%91%E5%92%8C%E5%AE%89%E8%A3%85",children:"\u7b2c 3 \u6b65\uff1a\u914d\u7f6e\u3001\u7f16\u8bd1\u548c\u5b89\u88c5"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"ssh"})," \u8fde\u63a5\u5230 localhost\uff0c\u5728\u9047\u5230\u4ee5\u4e0b\u63d0\u793a\u65f6\uff0c\u4f60\u9700\u8981\u786e\u8ba4\u7ee7\u7eed\u8fde\u63a5\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"The authenticity of host '<your hostname>' can't be established.\nECDSA key fingerprint is SHA256:<fingerprint here>.\nAre you sure you want to continue connecting (yes/no)?\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4e3b\u673a\u540d\u65e0\u6cd5\u89e3\u6790\uff0c\u8bf7\u5c1d\u8bd5\u5c06\u4f60\u7684\u673a\u5668\u540d\u6dfb\u52a0\u5230 ",(0,r.jsx)(n.code,{children:"/etc/hosts"}),"\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'echo -e "127.0.0.1\\t$HOSTNAME" | sudo tee -a /etc/hosts\n'})}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c-3-\u6b65\u914d\u7f6e\u7f16\u8bd1\u548c\u5b89\u88c5",children:"\u7b2c 3 \u6b65\uff1a\u914d\u7f6e\u3001\u7f16\u8bd1\u548c\u5b89\u88c5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# \u5728 `cloudberrydb/` \u76ee\u5f55\u4e0b\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\n# 1. \u914d\u7f6e\u6784\u5efa\u73af\u5883\u3002\n\nBREWPREFIX=$(brew --prefix); export PATH="$BREWPREFIX/opt/gnu-sed/libexec/gnubin:$BREWPREFIX/opt/apr/bin:$PATH"; CXXFLAGS="-I $BREWPREFIX/include" CFLAGS="-ggdb -Og -g3 -fno-omit-frame-pointer -I $BREWPREFIX/include" LDFLAGS="-L $BREWPREFIX/lib" CC=$(which gcc-13) CXX=$(which g++-13) ./configure --enable-debug --prefix=$(cd ~; pwd)/install/cbdb;\n\n# 2. \u7f16\u8bd1\u5e76\u5b89\u88c5 Cloudberry Database\u3002\n\nmake -j8\nmake -j8 install\n\n# 3. \u5c06 Cloudberry Database \u7684 Greenplum \u73af\u5883\u5f15\u5165\u8fd0\u884c\u4e2d\u7684 shell\u3002\n\nsource $(cd ~; pwd)/install/cbdb/greenplum_path.sh\n\n# 4. \u5b89\u88c5 Python \u4f9d\u8d56\u3002\n\npip3 install --user -r python-dependencies.txt\n\n# 5. \u5f00\u542f\u793a\u4f8b\u96c6\u7fa4\u3002\n\nPORT_BASE=8000 make create-demo-cluster\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u8be5\u547d\u4ee4\u4f1a\u914d\u7f6e\u7aef\u53e3\u548c\u73af\u5883\u53d8\u91cf\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"PGPORT"}),"\uff08\u4e3b\u8282\u70b9\u7684\u9ed8\u8ba4\u7aef\u53e3\uff09 \u548c ",(0,r.jsx)(n.code,{children:"COORDINATOR_DATA_DIRECTORY"}),"\uff08\u4e3b\u8282\u70b9\u7684\u6570\u636e\u76ee\u5f55\uff09\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source gpAux/gpdemo/gpdemo-env.sh\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c-4-\u6b65\u9a8c\u8bc1\u96c6\u7fa4",children:"\u7b2c 4 \u6b65\uff1a\u9a8c\u8bc1\u96c6\u7fa4"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u9a8c\u8bc1\u96c6\u7fa4\u662f\u5426\u5df2\u6210\u529f\u542f\u52a8\u3002\u5982\u679c\u6210\u529f\u542f\u52a8\uff0c\u4f60\u4f1a\u5728\u8f93\u51fa\u7ed3\u679c\u4e2d\u770b\u5230\u7aef\u53e3\u5728 ",(0,r.jsx)(n.code,{children:"8000"})," \u5230 ",(0,r.jsx)(n.code,{children:"8007"})," \u4e4b\u95f4\u7684\u591a\u4e2a ",(0,r.jsx)(n.code,{children:"postgres"})," \u8fdb\u7a0b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ps -ef | grep postgres\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8fde\u63a5\u81f3 Cloudberry Database\uff0c\u901a\u8fc7\u67e5\u8be2\u7cfb\u7edf\u8868 ",(0,r.jsx)(n.code,{children:"gp_segement_configuration"})," \u67e5\u770b\u6d3b\u8dc3 segment \u7684\u4fe1\u606f\u3002\u5173\u4e8e\u6b64\u7cfb\u7edf\u8868\u7684\u8be6\u7ec6\u63cf\u8ff0\uff0c\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"https://docs.vmware.com/en/VMware-Greenplum/7/greenplum-database/ref_guide-system_catalogs-gp_segment_configuration.html",children:"Greenplum \u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"$ psql -p 8000 postgres\npostgres=# select version();\npostgres=# select * from gp_segment_configuration;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ psql -p 8000 postgres\npsql (14.4, server 14.4)\nType "help" for help.\n\npostgres=# select version();\n                                                                                         version                                                                                         \n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n PostgreSQL 14.4 (Cloudberry Database 1.0.0+1c0d6e2224 build dev) on x86_64-apple-darwin22.4.0, compiled by gcc-13 (Homebrew GCC 13.2.0) 13.2.0, 64-bit compiled on Sep 22 2023 10:56:01\n(1 row)\n\npostgres=# select * from gp_segment_configuration;\n dbid | content | role | preferred_role | mode | status | port |          hostname           |           address           |                                                 datadir                                                  | warehouseid \n------+---------+------+----------------+------+--------+------+-----------------------------+-----------------------------+----------------------------------------------------------------------------------------------------------+-------------\n    1 |      -1 | p    | p              | n    | u      | 8000 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/qddir/demoDataDir-1         |           0\n    8 |      -1 | m    | m              | s    | u      | 8001 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/standby                     |           0\n    3 |       1 | p    | p              | s    | u      | 8003 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast2/demoDataDir1        |           0\n    6 |       1 | m    | m              | s    | u      | 8006 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror2/demoDataDir1 |           0\n    2 |       0 | p    | p              | s    | u      | 8002 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast1/demoDataDir0        |           0\n    5 |       0 | m    | m              | s    | u      | 8005 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror1/demoDataDir0 |           0\n    4 |       2 | p    | p              | s    | u      | 8004 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast3/demoDataDir2        |           0\n    7 |       2 | m    | m              | s    | u      | 8007 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror3/demoDataDir2 |           0\n(8 rows)\n\npostgres=# \n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8\u96c6\u7fa4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5728\u4f60\u514b\u9686\u6e90\u4ee3\u7801\u7684\u6587\u4ef6\u5939\u4e2d\nmake installcheck-world\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u606d\u559c \ud83c\udf89\uff01\u4f60\u5df2\u6210\u529f\u5b89\u88c5\u5e76\u521b\u5efa\u4e86 CloudberryDB \u96c6\u7fa4\u3002\u795d\u4f60\u5f00\u5fc3\uff01\ud83d\ude09"})]})}function b(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var r=s(67294);const c={},d=r.createContext(c);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);