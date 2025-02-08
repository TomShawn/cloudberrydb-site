"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[6019],{46679:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var c=s(85893),t=s(11151);const i={title:"ALTER SEQUENCE"},a="ALTER SEQUENCE",r={id:"sql-stmts/alter-sequence",title:"ALTER SEQUENCE",description:"Changes the definition of a sequence generator.",source:"@site/docs/sql-stmts/alter-sequence.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-sequence",permalink:"/docs/sql-stmts/alter-sequence",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-sequence.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1737527923,formattedLastUpdatedAt:"Jan 22, 2025",frontMatter:{title:"ALTER SEQUENCE"},sidebar:"docsbars",previous:{title:"ALTER SCHEMA",permalink:"/docs/sql-stmts/alter-schema"},next:{title:"ALTER SERVER",permalink:"/docs/sql-stmts/alter-server"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"alter-sequence",children:"ALTER SEQUENCE"}),"\n",(0,c.jsx)(n.p,{children:"Changes the definition of a sequence generator."}),"\n",(0,c.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"ALTER SEQUENCE [ IF EXISTS ] <name>\n     [ AS <data_type> ]\n     [INCREMENT [ BY ] <increment>] \n\xa0\xa0\xa0\xa0\xa0[MINVALUE <minvalue> | NO MINVALUE] \n\xa0\xa0\xa0\xa0\xa0[MAXVALUE <maxvalue> | NO MAXVALUE] \n\xa0\xa0\xa0\xa0\xa0[START [ WITH ] <start> ]\n     [RESTART [ [ WITH ] <restart>] ]\n\xa0\xa0\xa0\xa0\xa0[CACHE <cache>] [[ NO ] CYCLE] \n\xa0\xa0\xa0\xa0\xa0[OWNED BY {<table_name.column_name> | NONE}]\n\nALTER SEQUENCE [ IF EXISTS ] <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n\nALTER SEQUENCE [ IF EXISTS ] <name> RENAME TO <new_name>\n\nALTER SEQUENCE [ IF EXISTS ] <name> SET SCHEMA <new_schema>\n"})}),"\n",(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ALTER SEQUENCE"})," changes the parameters of an existing sequence generator. Any parameters not specifically set in the ",(0,c.jsx)(n.code,{children:"ALTER SEQUENCE"})," command retain their prior settings."]}),"\n",(0,c.jsxs)(n.p,{children:["You must own the sequence to use ",(0,c.jsx)(n.code,{children:"ALTER SEQUENCE"}),". To change a sequence's schema, you must also have ",(0,c.jsx)(n.code,{children:"CREATE"})," privilege on the new schema. Note that superusers have all these privileges automatically."]}),"\n",(0,c.jsxs)(n.p,{children:["To alter the owner, you must be a direct or indirect member of the new owning role, and that role must have ",(0,c.jsx)(n.code,{children:"CREATE"})," privilege on the sequence's schema. (These restrictions enforce that altering the owner does not do anything you could not do by dropping and recreating the sequence. However, a superuser can alter ownership of any sequence anyway.)"]}),"\n",(0,c.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"name"})})}),"\n",(0,c.jsx)(n.p,{children:"The name (optionally schema-qualified) of a sequence to be altered."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"IF EXISTS"})})}),"\n",(0,c.jsx)(n.p,{children:"Do not throw an error if the sequence does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"data_type"})})}),"\n",(0,c.jsxs)(n.p,{children:["The optional clause ",(0,c.jsx)(n.code,{children:"AS data_type"})," changes the data type of the sequence. Valid types are ",(0,c.jsx)(n.code,{children:"smallint"}),", ",(0,c.jsx)(n.code,{children:"integer"}),", and ",(0,c.jsx)(n.code,{children:"bigint"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Changing the data type automatically changes the minimum and maximum values of the sequence if and only if the previous minimum and maximum values were the minimum or maximum value of the old data type (in other words, if the sequence had been created using ",(0,c.jsx)(n.code,{children:"NO MINVALUE"})," or ",(0,c.jsx)(n.code,{children:"NO MAXVALUE"}),", implicitly or explicitly). Otherwise, the minimum and maximum values are preserved, unless new values are given as part of the same command. If the minimum and maximum values do not fit into the new data type, Cloudberry Database generates an error."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"increment"})})}),"\n",(0,c.jsxs)(n.p,{children:["The clause ",(0,c.jsx)(n.code,{children:"INCREMENT BY increment"})," is optional. A positive value will make an ascending sequence, a negative one a descending sequence. If unspecified, the old increment value will be maintained."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"minvalue"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"NO MINVALUE"})})]}),"\n",(0,c.jsxs)(n.p,{children:["The optional clause ",(0,c.jsx)(n.code,{children:"MINVALUE minvalue"})," determines the minimum value a sequence can generate. If ",(0,c.jsx)(n.code,{children:"NO MINVALUE"})," is specified, the defaults of ",(0,c.jsx)(n.code,{children:"1"})," and the minimum value of the data type for ascending and descending sequences, respectively, will be used. If neither option is specified, the current minimum value will be maintained."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"maxvalue"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"NO MAXVALUE"})})]}),"\n",(0,c.jsxs)(n.p,{children:["The optional clause ",(0,c.jsx)(n.code,{children:"MAXVALUE maxvalue"})," determines the maximum value for the sequence. If ",(0,c.jsx)(n.code,{children:"NO MAXVALUE"})," is specified, the defaults of the maximum value of the data type and ",(0,c.jsx)(n.code,{children:"-1"})," for ascending and descending sequences, respectively, will be used. If neither option is specified, the current maximum value will be maintained."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"start"})})}),"\n",(0,c.jsxs)(n.p,{children:["The optional clause ",(0,c.jsx)(n.code,{children:"START WITH start"})," changes the recorded start value of the sequence. This has no effect on the ",(0,c.jsx)(n.em,{children:"current"})," sequence value; it simply sets the value that future ",(0,c.jsx)(n.code,{children:"ALTER SEQUENCE RESTART"})," commands will use."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"restart"})})}),"\n",(0,c.jsxs)(n.p,{children:["The optional clause ",(0,c.jsx)(n.code,{children:"RESTART [ WITH restart ]"})," changes the current value of the sequence. This is equivalent to calling the ",(0,c.jsx)(n.code,{children:"setval(sequence, start_val, is_called)"})," function with ",(0,c.jsx)(n.code,{children:"is_called = false"}),". The specified value will be returned by the ",(0,c.jsx)(n.em,{children:"next"})," call of the ",(0,c.jsx)(n.code,{children:"nextval(sequence)"})," function. Writing ",(0,c.jsx)(n.code,{children:"RESTART"})," with no restart value is equivalent to supplying the start value that was recorded by ",(0,c.jsx)(n.code,{children:"CREATE SEQUENCE"})," or last set by ",(0,c.jsx)(n.code,{children:"ALTER SEQUENCE START WITH"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["In contrast to a ",(0,c.jsx)(n.code,{children:"setval()"})," call, a ",(0,c.jsx)(n.code,{children:"RESTART"})," operation on a sequence is transactional and blocks concurrent transactions from obtaining numbers from the same sequence. If that's not the desired mode of operation, ",(0,c.jsx)(n.code,{children:"setval()"})," should be used"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"cache"})})}),"\n",(0,c.jsxs)(n.p,{children:["The clause ",(0,c.jsx)(n.code,{children:"CACHE cache"})," enables sequence numbers to be preallocated and stored in memory for faster access. The minimum value is 1 (only one value can be generated at a time, i.e., no cache). If unspecified, the old cache value will be maintained."]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Note"})," When operating with a cache of sequence numbers (",(0,c.jsx)(n.code,{children:"cache > 1"}),"), Cloudberry Database may discard some cached sequence values. If you require consecutive values, you must explicitly set ",(0,c.jsx)(n.code,{children:"CACHE 1"})," when you create or alter the sequence."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"CYCLE"})})}),"\n",(0,c.jsxs)(n.p,{children:["The optional ",(0,c.jsx)(n.code,{children:"CYCLE"})," key word may be used to enable the sequence to wrap around when the ",(0,c.jsx)(n.code,{children:"maxvalue"})," or ",(0,c.jsx)(n.code,{children:"minvalue"})," has been reached by an ascending or descending sequence. If the limit is reached, the next number generated will be the respective ",(0,c.jsx)(n.code,{children:"minvalue"})," or ",(0,c.jsx)(n.code,{children:"maxvalue"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"NO CYCLE"})})}),"\n",(0,c.jsxs)(n.p,{children:["If the optional ",(0,c.jsx)(n.code,{children:"NO CYCLE"})," key word is specified, any calls to ",(0,c.jsx)(n.code,{children:"nextval()"})," after the sequence has reached its maximum value will return an error. If neither ",(0,c.jsx)(n.code,{children:"CYCLE"})," or ",(0,c.jsx)(n.code,{children:"NO CYCLE"})," are specified, the old cycle behavior will be maintained."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"OWNED BY table_name.column_name"})}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"OWNED BY NONE"})})]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"OWNED BY"})," option causes the sequence to be associated with a specific table column, such that if that column (or its whole table) is dropped, the sequence will be automatically dropped as well. If specified, this association replaces any previously specified association for the sequence. The specified table must have the same owner and be in the same schema as the sequence. Specifying ",(0,c.jsx)(n.code,{children:"OWNED BY NONE"})," removes any existing table column association."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,c.jsx)(n.p,{children:"The user name of the new owner of the sequence."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"new_name"})})}),"\n",(0,c.jsx)(n.p,{children:"The new name for the sequence."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,c.jsx)(n.p,{children:"The new schema for the sequence."}),"\n",(0,c.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ALTER SEQUENCE"})," will not immediately affect ",(0,c.jsx)(n.code,{children:"nextval()"})," results in backends, other than the current one, that have preallocated (cached) sequence values. They will use up all cached values prior to noticing the changed sequence generation parameters. The current backend will be affected immediately."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ALTER SEQUENCE"})," blocks concurrent ",(0,c.jsx)(n.code,{children:"nextval()"})," and ",(0,c.jsx)(n.code,{children:"setval()"})," calls."]}),"\n",(0,c.jsxs)(n.p,{children:["For historical reasons, ",(0,c.jsx)(n.code,{children:"ALTER TABLE"})," can be used with sequences too; but the only variants of ",(0,c.jsx)(n.code,{children:"ALTER TABLE"})," that are allowed with sequences are equivalent to the forms shown above."]}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsxs)(n.p,{children:["Restart a sequence called ",(0,c.jsx)(n.code,{children:"serial"})," at ",(0,c.jsx)(n.code,{children:"105"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"ALTER SEQUENCE serial RESTART WITH 105;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ALTER SEQUENCE"})," conforms to the SQL standard, except for the ",(0,c.jsx)(n.code,{children:"AS"}),", ",(0,c.jsx)(n.code,{children:"START WITH"}),", ",(0,c.jsx)(n.code,{children:"OWNED BY"}),", ",(0,c.jsx)(n.code,{children:"OWNER TO"}),", ",(0,c.jsx)(n.code,{children:"RENAME TO"}),", and ",(0,c.jsx)(n.code,{children:"SET SCHEMA"})," clauses, which are Cloudberry Database extensions."]}),"\n",(0,c.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/sql-stmts/create-sequence",children:"CREATE SEQUENCE"}),", ",(0,c.jsx)(n.a,{href:"/docs/sql-stmts/drop-sequence",children:"DROP SEQUENCE"}),", ",(0,c.jsx)(n.a,{href:"/docs/sql-stmts/alter-table",children:"ALTER TABLE"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var c=s(67294);const t={},i=c.createContext(t);function a(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);