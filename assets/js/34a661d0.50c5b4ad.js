"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3771],{70752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(85893),a=n(11151);const i={title:"SET TRANSACTION"},o="SET TRANSACTION",r={id:"sql-stmts/set-transaction",title:"SET TRANSACTION",description:"Sets the characteristics of the current transaction.",source:"@site/docs/sql-stmts/set-transaction.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/set-transaction",permalink:"/docs/sql-stmts/set-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/set-transaction.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1740044194,formattedLastUpdatedAt:"Feb 20, 2025",frontMatter:{title:"SET TRANSACTION"},sidebar:"docsbars",previous:{title:"SET SESSION AUTHORIZATION",permalink:"/docs/sql-stmts/set-session-authorization"},next:{title:"SET",permalink:"/docs/sql-stmts/set"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"set-transaction",children:"SET TRANSACTION"}),"\n",(0,s.jsx)(t.p,{children:"Sets the characteristics of the current transaction."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SET TRANSACTION <transaction_mode> [, ...]\nSET TRANSACTION SNAPSHOT <snapshot_id>\nSET SESSION CHARACTERISTICS AS TRANSACTION <transaction_mode> [, ...] \n     [READ ONLY | READ WRITE]\n     [NOT] DEFERRABLE\n\n-- where <transaction_mode> is one of:\n\n    ISOLATION LEVEL {SERIALIZABLE | REPEATABLE READ | READ COMMITTED | READ UNCOMMITTED}\n    READ WRITE | READ ONLY\n    [NOT] DEFERRABLE\n\n-- and <snapshot_id> is the id of the existing transaction whose snapshot you want this transaction to run with.\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SET TRANSACTION"})," command sets the characteristics of the current transaction. It has no effect on any subsequent transactions. ",(0,s.jsx)(t.code,{children:"SET SESSION CHARACTERISTICS"})," sets the default transaction characteristics for subsequent transactions of a session. These defaults can be overridden by ",(0,s.jsx)(t.code,{children:"SET TRANSACTION"})," for an individual transaction."]}),"\n",(0,s.jsx)(t.p,{children:"The available transaction characteristics are the transaction isolation level, the transaction access mode (read/write or read-only), and the deferrable mode. In addition, a snapshot can be selected, though only for the current transaction, not as a session default."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Deferrable transactions require the transaction to be serializable. Cloudberry Database does not support serializable transactions, so including the ",(0,s.jsx)(t.code,{children:"DEFERRABLE"})," clause has no effect."]})}),"\n",(0,s.jsx)(t.p,{children:"The isolation level of a transaction determines what data the transaction can see when other transactions are running concurrently."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"READ COMMITTED"})," \u2014 A statement can only see rows committed before it began. This is the default."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"REPEATABLE READ"})," \u2014 All statements in the current transaction can only see rows committed before the first query or data-modification statement run in the transaction."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The SQL standard defines two additional levels, ",(0,s.jsx)(t.code,{children:"READ UNCOMMITTED"})," and ",(0,s.jsx)(t.code,{children:"SERIALIZABLE"}),". In Cloudberry Database, ",(0,s.jsx)(t.code,{children:"READ UNCOMMITTED"})," is treated as ",(0,s.jsx)(t.code,{children:"READ COMMITTED"}),". If you specify ",(0,s.jsx)(t.code,{children:"SERIALIZABLE"}),", Cloudberry Database falls back to ",(0,s.jsx)(t.code,{children:"REPEATABLE READ"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The transaction isolation level cannot be changed after the first query or data-modification statement (",(0,s.jsx)(t.code,{children:"SELECT"}),", ",(0,s.jsx)(t.code,{children:"INSERT"}),", ",(0,s.jsx)(t.code,{children:"DELETE"}),", ",(0,s.jsx)(t.code,{children:"UPDATE"}),", ",(0,s.jsx)(t.code,{children:"FETCH"}),", or ",(0,s.jsx)(t.code,{children:"COPY"}),") of a transaction has been run."]}),"\n",(0,s.jsxs)(t.p,{children:["The transaction access mode determines whether the transaction is read/write or read-only. Read/write is the default. When a transaction is read-only, the following SQL commands are disallowed: ",(0,s.jsx)(t.code,{children:"INSERT"}),", ",(0,s.jsx)(t.code,{children:"UPDATE"}),", ",(0,s.jsx)(t.code,{children:"DELETE"}),", and ",(0,s.jsx)(t.code,{children:"COPY FROM"})," if the table they would write to is not a temporary table; all ",(0,s.jsx)(t.code,{children:"CREATE"}),", ",(0,s.jsx)(t.code,{children:"ALTER"}),", and ",(0,s.jsx)(t.code,{children:"DROP"})," commands; ",(0,s.jsx)(t.code,{children:"COMMENT"}),", ",(0,s.jsx)(t.code,{children:"GRANT"}),", ",(0,s.jsx)(t.code,{children:"REVOKE"}),", ",(0,s.jsx)(t.code,{children:"TRUNCATE"}),"; and ",(0,s.jsx)(t.code,{children:"EXPLAIN ANALYZE"})," and ",(0,s.jsx)(t.code,{children:"EXECUTE"})," if the command they would run is among those listed. This is a high-level notion of read-only that does not prevent all writes to disk."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"DEFERRABLE"})," transaction property has no effect unless the transaction is also ",(0,s.jsx)(t.code,{children:"SERIALIZABLE"})," and ",(0,s.jsx)(t.code,{children:"READ ONLY"}),". When all of these properties are set on a transaction, the transaction may block when first acquiring its snapshot, after which it is able to run without the normal overhead of a ",(0,s.jsx)(t.code,{children:"SERIALIZABLE"})," transaction and without any risk of contributing to or being cancelled by a serialization failure. This mode is well suited for long-running reports or backups. ",(0,s.jsxs)(t.em,{children:["Because Cloudberry Database does not support serializable transactions, the ",(0,s.jsx)(t.code,{children:"DEFERRABLE"})," transaction property has no effect in Cloudberry Database."]})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SET TRANSACTION SNAPSHOT"})," command allows a new transaction to run with the same snapshot as an existing transaction. The pre-existing transaction must have exported its snapshot with the ",(0,s.jsx)(t.code,{children:"pg_export_snapshot()"})," function. That function returns a snapshot identifier, which must be given to ",(0,s.jsx)(t.code,{children:"SET TRANSACTION SNAPSHOT"})," to specify which snapshot is to be imported. The identifier must be written as a string literal in this command, for example ",(0,s.jsx)(t.code,{children:"'000003A1-1'"}),". ",(0,s.jsx)(t.code,{children:"SET TRANSACTION SNAPSHOT"})," can only be executed at the start of a transaction, before the first query or data-modification statement (",(0,s.jsx)(t.code,{children:"SELECT"}),", ",(0,s.jsx)(t.code,{children:"INSERT"}),", ",(0,s.jsx)(t.code,{children:"DELETE"}),", ",(0,s.jsx)(t.code,{children:"UPDATE"}),", ",(0,s.jsx)(t.code,{children:"FETCH"}),", or ",(0,s.jsx)(t.code,{children:"COPY"}),") of the transaction. Furthermore, the transaction must already be set to ",(0,s.jsx)(t.code,{children:"SERIALIZABLE"})," or ",(0,s.jsx)(t.code,{children:"REPEATABLE READ"})," isolation level (otherwise, the snapshot would be discarded immediately, since ",(0,s.jsx)(t.code,{children:"READ COMMITTED"})," mode takes a new snapshot for each command). If the importing transaction uses ",(0,s.jsx)(t.code,{children:"SERIALIZABLE"})," isolation level, then the transaction that exported the snapshot must also use that isolation level. Also, a non-read-only serializable transaction cannot import a snapshot from a read-only transaction."]}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"SET TRANSACTION"})," is run without a prior ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/start-transaction",children:"START TRANSACTION"})," or ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/begin",children:(0,s.jsx)(t.code,{children:"BEGIN"})}),", it emits a warning and otherwise has no effect."]}),"\n",(0,s.jsxs)(t.p,{children:["It is possible to dispense with ",(0,s.jsx)(t.code,{children:"SET TRANSACTION"})," by instead specifying the desired transaction_modes in ",(0,s.jsx)(t.code,{children:"BEGIN"})," or ",(0,s.jsx)(t.code,{children:"START TRANSACTION"}),". But that option is not available for ",(0,s.jsx)(t.code,{children:"SET TRANSACTION SNAPSHOT"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The session default transaction modes can also be set or examined via the configuration parameters ",(0,s.jsx)(t.code,{children:"default_transaction_isolation"}),", ",(0,s.jsx)(t.code,{children:"default_transaction_read_only"}),", and ",(0,s.jsx)(t.code,{children:"default_transaction_deferrable"}),". (In fact ",(0,s.jsx)(t.code,{children:"SET SESSION CHARACTERISTICS"})," is just a verbose equivalent for setting these variables with ",(0,s.jsx)(t.code,{children:"SET"}),".) This means the defaults can be set in the configuration file, via ",(0,s.jsx)(t.code,{children:"ALTER DATABASE"}),", etc."]}),"\n",(0,s.jsxs)(t.p,{children:["The current transaction's modes can similarly be set or examined via the configuration parameters ",(0,s.jsx)(t.code,{children:"transaction_isolation"}),", ",(0,s.jsx)(t.code,{children:"transaction_read_only"}),", and ",(0,s.jsx)(t.code,{children:"transaction_deferrable"}),". Setting one of these parameters acts the same as the corresponding ",(0,s.jsx)(t.code,{children:"SET TRANSACTION"})," option, with the same restrictions on when it can be done. However, these parameters cannot be set in the configuration file, or from any source other than live SQL."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"To begin a new transaction with the same snapshot as an already existing transaction, first export the snapshot from the existing transaction. That will return the snapshot identifier, for example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSELECT pg_export_snapshot();\n pg_export_snapshot\n---------------------\n 00000003-0000001B-1\n(1 row)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then give the snapshot identifier in a ",(0,s.jsx)(t.code,{children:"SET TRANSACTION SNAPSHOT"})," command at the beginning of the newly opened transaction:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSET TRANSACTION SNAPSHOT '00000003-0000001B-1';\n"})}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["These commands are defined in the SQL standard, except for the ",(0,s.jsx)(t.code,{children:"DEFERRABLE"})," transaction mode and the ",(0,s.jsx)(t.code,{children:"SET TRANSACTION SNAPSHOT"})," form, which are Cloudberry Database extensions."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"SERIALIZABLE"})," is the default transaction isolation level in the standard. In Cloudberry Database, the default is ",(0,s.jsx)(t.code,{children:"READ COMMITTED"}),". Due to lack of predicate locking, Cloudberry Database does not fully support the ",(0,s.jsx)(t.code,{children:"SERIALIZABLE"})," level, so it falls back to the ",(0,s.jsx)(t.code,{children:"REPEATABLE READ"})," level when ",(0,s.jsx)(t.code,{children:"SERIALIZABLE"})," is specified. Essentially, a predicate-locking system prevents phantom reads by restricting what is written, whereas a multi-version concurrency control model (MVCC) as used in Cloudberry Database prevents them by restricting what is read."]}),"\n",(0,s.jsx)(t.p,{children:"In the SQL standard, there is one other transaction characteristic that can be set with these commands: the size of the diagnostics area. This concept is specific to embedded SQL, and therefore is not implemented in the Cloudberry Database server."}),"\n",(0,s.jsx)(t.p,{children:"The SQL standard requires commas between successive transaction_modes, but for historical reasons Cloudberry Database allows the commas to be omitted."}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/sql-stmts/begin",children:(0,s.jsx)(t.code,{children:"BEGIN"})})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);