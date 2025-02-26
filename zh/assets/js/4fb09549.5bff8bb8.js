"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3473],{12529:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(85893),t=i(11151);const r={title:"INSERT"},o="INSERT",a={id:"sql-stmts/insert",title:"INSERT",description:"Creates new rows in a table.",source:"@site/docs/sql-stmts/insert.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/insert",permalink:"/zh/docs/sql-stmts/insert",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/insert.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740470606,formattedLastUpdatedAt:"2025\u5e742\u670825\u65e5",frontMatter:{title:"INSERT"},sidebar:"docsbars",previous:{title:"IMPORT FOREIGN SCHEMA",permalink:"/zh/docs/sql-stmts/import-foreign-schema"},next:{title:"LISTEN",permalink:"/zh/docs/sql-stmts/listen"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Inserting",id:"inserting",level:3},{value:"On conflict clause",id:"on-conflict-clause",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"insert",children:"INSERT"}),"\n",(0,s.jsx)(n.p,{children:"Creates new rows in a table."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"[ WITH [ RECURSIVE ] <with_query> [, ...] ]\nINSERT INTO <table_name> [ AS <alias> ] [( <column_name> [, ...] )]\n   [ OVERRIDING { SYSTEM | USER } VALUE ]\n\xa0\xa0\xa0{DEFAULT VALUES | VALUES ( {<expression> | DEFAULT} [, ...] ) [, ...] | <query>}\n   [ ON CONFLICT [ <conflict_target> ] <conflict_action> ]\n   [RETURNING * | <output_expression> [ [AS] <output_name> ] [, ...]]\n\n-- where <conflict_target> can be one of:\n\n    ( { <index_column_name> | ( <index_expression> ) } [ COLLATE <collation> ] [ <opclass> ] [, ...] )\n    [ WHERE <index_predicate> ]\n    ON CONSTRAINT <constraint_name>\n\n-- and <conflict_action> is one of:\n\n    DO NOTHING\n    DO UPDATE SET { <column_name> = { <expression> | DEFAULT } |\n                    ( <column_name> [, ...] ) = [ ROW ] ( { <expression> | DEFAULT } [, ...] ) |\n                    ( <column_name> [, ...] ) = ( sub-SELECT )\n                  } [, ...]\n              [ WHERE <condition> ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"INSERT"})," inserts new rows into a table. One can insert one or more rows specified by value expressions, or zero or more rows resulting from a query."]}),"\n",(0,s.jsxs)(n.p,{children:["The target column names may be listed in any order. If no list of column names is given at all, the default is the columns of the table in their declared order; or the first ",(0,s.jsx)(n.em,{children:"N"})," column names, if there are only ",(0,s.jsx)(n.em,{children:"N"})," columns supplied by the ",(0,s.jsx)(n.code,{children:"VALUES"})," clause or query. The values supplied by the ",(0,s.jsx)(n.code,{children:"VALUES"})," clause or query are associated with the explicit or implicit column list left-to-right."]}),"\n",(0,s.jsx)(n.p,{children:"Each column not present in the explicit or implicit column list will be filled with a default value, either its declared default value or null if there is no default."}),"\n",(0,s.jsx)(n.p,{children:"If the expression for any column is not of the correct data type, Cloudberry Database attempts automatic type conversion."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"INSERT"})," into tables that lack unique indexes will not be blocked by concurrent activity. Tables with unique indexes might block if concurrent sessions perform actions that lock or modify rows matching the unique index values being inserted; the details are covered in ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/12/index-unique-checks.html",children:"Index Uniqueness Checks"})," in the PostgreSQL documentation. ",(0,s.jsx)(n.code,{children:"ON CONFLICT"})," can be used to specify an alternative action to raising a unique constraint or exclusion constraint violation error. (See ",(0,s.jsx)(n.a,{href:"#on-conflict-clause",children:"ON CONFLICT Clause"})," below.)"]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.code,{children:"RETURNING"})," clause causes ",(0,s.jsx)(n.code,{children:"INSERT"})," to compute and return value(s) based on each row actually inserted (or updated, if an ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," clause was used). This is primarily useful for obtaining values that were supplied by defaults, such as a serial sequence number. However, any expression using the table's columns is allowed. The syntax of the ",(0,s.jsx)(n.code,{children:"RETURNING"})," list is identical to that of the output list of ",(0,s.jsx)(n.code,{children:"SELECT"}),". Only rows that were successfully inserted or updated will be returned. For example, if a row was locked but not updated because an ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE ... WHERE"})," clause condition was not satisfied, the row will not be returned."]}),"\n",(0,s.jsxs)(n.p,{children:["You must have ",(0,s.jsx)(n.code,{children:"INSERT"})," privilege on a table in order to insert into it. If ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," is present, ",(0,s.jsx)(n.code,{children:"UPDATE"})," privilege on the table is also required."]}),"\n",(0,s.jsxs)(n.p,{children:["When a column list is specified, you only need ",(0,s.jsx)(n.code,{children:"INSERT"})," privilege on the listed columns. Similarly, when ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," is specified, you only need ",(0,s.jsx)(n.code,{children:"UPDATE"})," privilege on the column(s) that are listed to be updated. However, ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," also requires ",(0,s.jsx)(n.code,{children:"SELECT"})," privilege on any column whose values are read in the ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," expressions or condition."]}),"\n",(0,s.jsxs)(n.p,{children:["Use of the ",(0,s.jsx)(n.code,{children:"RETURNING"})," clause requires ",(0,s.jsx)(n.code,{children:"SELECT"})," privilege on all columns mentioned in ",(0,s.jsx)(n.code,{children:"RETURNING"}),". If you use the query clause to insert rows from a query, you must have ",(0,s.jsx)(n.code,{children:"SELECT"})," privilege on any table or column referenced in the query."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"inserting",children:"Inserting"}),"\n",(0,s.jsxs)(n.p,{children:["This section covers parameters that may be used when only inserting new rows. Parameters exclusively used with the ",(0,s.jsx)(n.code,{children:"ON CONFLICT"})," clause are described separately."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"with_query"})})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"WITH"})," clause allows you to specify one or more subqueries that can be referenced by name in the ",(0,s.jsx)(n.code,{children:"INSERT"})," query."]}),"\n",(0,s.jsxs)(n.p,{children:["It is possible for the query (",(0,s.jsx)(n.code,{children:"SELECT"})," statement) to also contain a ",(0,s.jsx)(n.code,{children:"WITH"})," clause. In such a case both sets of with_query can be referenced within the ",(0,s.jsx)(n.code,{children:"INSERT"})," query, but the second one takes precedence since it is more closely nested."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"table_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing table."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"alias"})})}),"\n",(0,s.jsxs)(n.p,{children:["A substitute name for table_name. When an alias is provided, it completely hides the actual name of the table. This is particularly useful when ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," targets a table named ",(0,s.jsx)(n.code,{children:"excluded"}),", since that will otherwise be taken as the name of the special table representing the row proposed for insertion."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"column_name"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of a column in the table named by table_name. The column name can be qualified with a subfield name or array subscript, if needed. (Inserting into only some fields of a composite column leaves the other fields null.) When referencing a column with ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"}),", do not include the table's name in the specification of a target column. For example, ",(0,s.jsx)(n.code,{children:"INSERT INTO table_name ... ON CONFLICT DO UPDATE SET table_name.col = 1"})," is invalid (this follows the general behavior for ",(0,s.jsx)(n.code,{children:"UPDATE"}),")."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"OVERRIDING SYSTEM VALUE"})})}),"\n",(0,s.jsxs)(n.p,{children:["Without this clause, it is an error to specify an explicit value (other than ",(0,s.jsx)(n.code,{children:"DEFAULT"}),") for an identity column defined as ",(0,s.jsx)(n.code,{children:"GENERATED ALWAYS"}),". This clause overrides that restriction."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"OVERRIDING USER VALUE"})})}),"\n",(0,s.jsxs)(n.p,{children:["If this clause is specified, then any values supplied for identity columns defined as ",(0,s.jsx)(n.code,{children:"GENERATED BY DEFAULT"})," are ignored and the default sequence-generated values are applied."]}),"\n",(0,s.jsxs)(n.p,{children:["This clause is useful for example when copying values between tables. Writing ",(0,s.jsx)(n.code,{children:"INSERT INTO tbl2 OVERRIDING USER VALUE SELECT * FROM tbl1"})," will copy from ",(0,s.jsx)(n.code,{children:"tbl1"})," all columns that are not identity columns in ",(0,s.jsx)(n.code,{children:"tbl2"})," while values for the identity columns in ",(0,s.jsx)(n.code,{children:"tbl2"})," will be generated by the sequences associated with ",(0,s.jsx)(n.code,{children:"tbl2"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"DEFAULT VALUES"})})}),"\n",(0,s.jsxs)(n.p,{children:["All columns will be filled with their default values. (An ",(0,s.jsx)(n.code,{children:"OVERRIDING"})," clause is not permitted in this form.)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"expression"})})}),"\n",(0,s.jsx)(n.p,{children:"An expression or value to assign to the corresponding column."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"DEFAULT"})})}),"\n",(0,s.jsx)(n.p,{children:"The corresponding column will be filled with its default value."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"query"})})}),"\n",(0,s.jsxs)(n.p,{children:["A query (",(0,s.jsx)(n.code,{children:"SELECT"})," statement) that supplies the rows to be inserted. Refer to the ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/select",children:"SELECT"})," statement for a description of the syntax."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"output_expression"})})}),"\n",(0,s.jsxs)(n.p,{children:["An expression to be computed and returned by the ",(0,s.jsx)(n.code,{children:"INSERT"})," command after each row is inserted or updated. The expression can use any column names of the table named by table_name. Write ",(0,s.jsx)(n.code,{children:"*"})," to return all columns of the inserted row(s)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"output_name"})})}),"\n",(0,s.jsx)(n.p,{children:"A name to use for a returned column."}),"\n",(0,s.jsxs)(n.p,{children:["To insert data into a partitioned table, you specify the root partitioned table, the table created with the ",(0,s.jsx)(n.code,{children:"CREATE TABLE"})," command. You also can specify a leaf partition in an ",(0,s.jsx)(n.code,{children:"INSERT"})," command. An error is returned if the data is not valid for the specified leaf partition. Specifying a table that is not a leaf partition in the ",(0,s.jsx)(n.code,{children:"INSERT"})," command is not supported. Execution of other DML commands such as ",(0,s.jsx)(n.code,{children:"UPDATE"})," and ",(0,s.jsx)(n.code,{children:"DELETE"})," on any child table of a partitioned table is not supported. These commands must be run on the root partitioned table, the table created with the ",(0,s.jsx)(n.code,{children:"CREATE TABLE"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["For a partitioned table, all the child tables are locked during the ",(0,s.jsx)(n.code,{children:"INSERT"})," operation when the Global Deadlock Detector is not enabled (the default). Only some of the leaf partitions are locked when the Global Deadlock Detector is enabled."]}),"\n",(0,s.jsx)(n.h2,{id:"on-conflict-clause",children:"On conflict clause"}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.code,{children:"ON CONFLICT"})," clause specifies an alternative action to raising a unique violation or exclusion constraint violation error. For each individual row proposed for insertion, either the insertion proceeds, or, if an arbiter constraint or index specified by conflict_target is violated, the alternative conflict_action is taken. ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO NOTHING"})," simply avoids inserting a row as its alternative action. ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," updates the existing row that conflicts with the row proposed for insertion as its alternative action."]}),"\n",(0,s.jsxs)(n.p,{children:["conflict_target can perform unique index inference. When performing inference, it consists of one or more index_column_name columns and/or index_expression expressions, and an optional index_predicate. All table_name unique indexes that, without regard to order, contain exactly the conflict_target-specified columns/expressions are inferred (chosen) as arbiter indexes. If an index_predicate is specified, it must, as a further requirement for inference, satisfy arbiter indexes. Note that this means a non-partial unique index (a unique index without a predicate) will be inferred (and thus used by ",(0,s.jsx)(n.code,{children:"ON CONFLICT"}),") if such an index satisfying every other criteria is available. If an attempt at inference is unsuccessful, Cloudberry Database raises an error."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," guarantees an atomic ",(0,s.jsx)(n.code,{children:"INSERT"})," or ",(0,s.jsx)(n.code,{children:"UPDATE"})," outcome; provided there is no independent error, one of those two outcomes is guaranteed, even under high concurrency. This is also known as ",(0,s.jsx)(n.em,{children:"UPSERT"})," \u2014 ",(0,s.jsx)(n.code,{children:"UPDATE"})," or ",(0,s.jsx)(n.code,{children:"INSERT"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"conflict_target"})})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies which conflicts ",(0,s.jsx)(n.code,{children:"ON CONFLICT"})," takes the alternative action on by choosing arbiter indexes. Either performs unique index inference, or names a constraint explicitly. For ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO NOTHING"}),", it is optional to specify a conflict_target; when omitted, conflicts with all usable constraints (and unique indexes) are handled. For ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"}),", a conflict_target must be provided."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"conflict_action"})})}),"\n",(0,s.jsxs)(n.p,{children:["conflict_action specifies an alternative ",(0,s.jsx)(n.code,{children:"ON CONFLICT"})," action. It can be either ",(0,s.jsx)(n.code,{children:"DO NOTHING"}),", or a ",(0,s.jsx)(n.code,{children:"DO UPDATE"})," clause specifying the exact details of the ",(0,s.jsx)(n.code,{children:"UPDATE"})," action to be performed in case of a conflict. The ",(0,s.jsx)(n.code,{children:"SET"})," and ",(0,s.jsx)(n.code,{children:"WHERE"})," clauses in ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," have access to the existing row using the table's name (or an alias), and to the row proposed for insertion using the special excluded table. ",(0,s.jsx)(n.code,{children:"SELECT"})," privilege is required on any column in the target table where corresponding excluded columns are read."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the effects of all per-row ",(0,s.jsx)(n.code,{children:"BEFORE INSERT"})," triggers are reflected in excluded values, since those effects may have contributed to the row being excluded from insertion."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"index_column_name"})})}),"\n",(0,s.jsxs)(n.p,{children:["The name of a table_name column. Used to infer arbiter indexes. Follows ",(0,s.jsx)(n.code,{children:"CREATE INDEX"})," format. ",(0,s.jsx)(n.code,{children:"SELECT"})," privilege on index_column_name is required."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"index_expression"})})}),"\n",(0,s.jsxs)(n.p,{children:["Similar to index_column_name, but used to infer expressions on table_name columns appearing within index definitions (not simple columns). Follows ",(0,s.jsx)(n.code,{children:"CREATE INDEX"})," format. ",(0,s.jsx)(n.code,{children:"SELECT"})," privilege on any column appearing within index_expression is required."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"collation"})})}),"\n",(0,s.jsxs)(n.p,{children:["When specified, mandates that corresponding index_column_name or index_expression use a particular collation in order to be matched during inference. Typically this is omitted, as collations usually do not affect whether or not a constraint violation occurs. Follows ",(0,s.jsx)(n.code,{children:"CREATE INDEX"})," format."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"opclass"})})}),"\n",(0,s.jsxs)(n.p,{children:["When specified, mandates that corresponding index_column_name or index_expression use particular operator class in order to be matched during inference. Typically this is omitted, as the equality semantics are often equivalent across a type's operator classes anyway, or because it's sufficient to trust that the defined unique indexes have the pertinent definition of equality. Follows ",(0,s.jsx)(n.code,{children:"CREATE INDEX"})," format."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"index_predicate"})})}),"\n",(0,s.jsxs)(n.p,{children:["Used to allow inference of partial unique indexes. Any indexes that satisfy the predicate (which need not actually be partial indexes) can be inferred. Follows ",(0,s.jsx)(n.code,{children:"CREATE INDEX"})," format. ",(0,s.jsx)(n.code,{children:"SELECT"})," privilege on any column appearing within index_predicate is required."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"constraint_name"})})}),"\n",(0,s.jsx)(n.p,{children:"Explicitly specifies an arbiter constraint by name, rather than inferring a constraint or index."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"condition"})})}),"\n",(0,s.jsxs)(n.p,{children:["An expression that returns a value of type ",(0,s.jsx)(n.code,{children:"boolean"}),". Only rows for which this expression returns ",(0,s.jsx)(n.code,{children:"true"})," will be updated, although all rows will be locked when the ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," action is taken. Note that condition is evaluated last, after a conflict has been identified as a candidate to update."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that exclusion constraints are not supported as arbiters with ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"}),". In all cases, only ",(0,s.jsx)(n.code,{children:"NOT DEFERRABLE"})," constraints and unique indexes are supported as arbiters."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"INSERT"})," with an ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"}),' clause is a "deterministic" statement. This means that the command will not be allowed to affect any single existing row more than once; a cardinality violation error will be raised when this situation arises. Rows proposed for insertion should not duplicate each other in terms of attributes constrained by an arbiter index or constraint.']}),"\n",(0,s.jsxs)(n.p,{children:["Note that it is currently not supported for the ",(0,s.jsx)(n.code,{children:"ON CONFLICT DO UPDATE"})," clause of an ",(0,s.jsx)(n.code,{children:"INSERT"})," applied to a partitioned table to update the partition key of a conflicting row such that it requires the row be moved to a new partition."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tip:"})," It is often preferable to use unique index inference rather than naming a constraint directly using ",(0,s.jsx)(n.code,{children:"ON CONFLICT ON CONSTRAINT constraint_name"}),". Inference will continue to work correctly when the underlying index is replaced by another more or less equivalent index in an overlapping way, for example when using ",(0,s.jsx)(n.code,{children:"CREATE UNIQUE INDEX ... CONCURRENTLY"})," before dropping the index being replaced."]}),"\n",(0,s.jsx)(n.h2,{id:"outputs",children:"Outputs"}),"\n",(0,s.jsxs)(n.p,{children:["On successful completion, an ",(0,s.jsx)(n.code,{children:"INSERT"})," command returns a command tag of the form:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT <oid> <count>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The count is the number of rows inserted or updated. oid is always ",(0,s.jsx)(n.code,{children:"0"})," (it used to be the OID assigned to the inserted row if count was exactly one and the target table was declared ",(0,s.jsx)(n.code,{children:"WITH OIDS"})," and 0 otherwise, but creating a table ",(0,s.jsx)(n.code,{children:"WITH OIDS"})," is no longer supported)."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"INSERT"})," command contains a ",(0,s.jsx)(n.code,{children:"RETURNING"})," clause, the result will be similar to that of a ",(0,s.jsx)(n.code,{children:"SELECT"})," statement containing the columns and values defined in the ",(0,s.jsx)(n.code,{children:"RETURNING"})," list, computed over the row(s) inserted or updated by the command."]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.p,{children:"If the specified table is a partitioned table, Cloudberry Database routes each row to the appropriate partition and inserts into it. If the specified table is a partition, an error will occur if one of the input rows violates the partition constraint."}),"\n",(0,s.jsxs)(n.p,{children:["For a partitioned table, all of the child tables are locked during the ",(0,s.jsx)(n.code,{children:"INSERT"})," operation when the Global Deadlock Detector is not enabled (the default). Only some of the leaf child tables are locked when the Global Deadlock Detector is enabled."]}),"\n",(0,s.jsxs)(n.p,{children:["Cloudberry Database supports a maximum of 127 concurrent ",(0,s.jsx)(n.code,{children:"INSERT"})," transactions into a single append-optimized table."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Insert a single row into table ",(0,s.jsx)(n.code,{children:"films"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO films VALUES\n    ('UA502', 'Bananas', 105, '1971-07-13', 'Comedy', '82 minutes');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"len"})," column is omitted and therefore it will have the default value:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO films (code, title, did, date_prod, kind)\n    VALUES ('T_601', 'Yojimbo', 106, '1961-06-16', 'Drama');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This example uses the ",(0,s.jsx)(n.code,{children:"DEFAULT"})," clause for the ",(0,s.jsx)(n.code,{children:"date_prod"})," column rather than specifying a value:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO films VALUES\n    ('UA502', 'Bananas', 105, DEFAULT, 'Comedy', '82 minutes');\nINSERT INTO films (code, title, did, date_prod, kind)\n    VALUES ('T_601', 'Yojimbo', 106, DEFAULT, 'Drama');\n"})}),"\n",(0,s.jsx)(n.p,{children:"To insert a row consisting entirely of default values:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO films DEFAULT VALUES;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To insert multiple rows using the multirow ",(0,s.jsx)(n.code,{children:"VALUES"})," syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO films (code, title, did, date_prod, kind) VALUES\n    ('B6717', 'Tampopo', 110, '1985-02-10', 'Comedy'),\n    ('HG120', 'The Dinner Game', 140, DEFAULT, 'Comedy');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This example inserts some rows into table ",(0,s.jsx)(n.code,{children:"films"})," from a table ",(0,s.jsx)(n.code,{children:"tmp_films"})," with the same column layout as ",(0,s.jsx)(n.code,{children:"films"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO films SELECT * FROM tmp_films WHERE date_prod < \n'2004-05-07';\n"})}),"\n",(0,s.jsx)(n.p,{children:"This example inserts into array columns:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'-- Create an empty 3x3 gameboard for noughts-and-crosses\nINSERT INTO tictactoe (game, board[1:3][1:3])\n    VALUES (1, \'{{" "," "," "},{" "," "," "},{" "," "," "}}\');\n-- The subscripts in the above example aren\'t really needed\nINSERT INTO tictactoe (game, board)\n    VALUES (2, \'{{X," "," "},{" ",O," "},{" ",X," "}}\');\n'})}),"\n",(0,s.jsx)(n.p,{children:"Insert a single row into table distributors, returning the sequence number generated by the DEFAULT clause:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO distributors (did, dname) VALUES (DEFAULT, 'XYZ Widgets')\n   RETURNING did;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Increment the sales count of the salesperson who manages the account for Acme Corporation, and record the whole updated row along with current time in a log table:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"WITH upd AS (\n  UPDATE employees SET sales_count = sales_count + 1 WHERE id =\n    (SELECT sales_person FROM accounts WHERE name = 'Acme Corporation')\n    RETURNING *\n)\nINSERT INTO employees_log SELECT *, current_timestamp FROM upd;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Insert or update new distributors as appropriate. Assumes a unique index has been defined that constrains values appearing in the ",(0,s.jsx)(n.code,{children:"did"})," column. Note that the special ",(0,s.jsx)(n.code,{children:"excluded"})," table is used to reference values originally proposed for insertion:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO distributors (did, dname)\n    VALUES (5, 'Gizmo Transglobal'), (6, 'Associated Computing, Inc')\n    ON CONFLICT (did) DO UPDATE SET dname = EXCLUDED.dname;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Insert a distributor, or do nothing for rows proposed for insertion when an existing, excluded row (a row with a matching constrained column or columns after before row insert triggers fire) exists. Example assumes a unique index has been defined that constrains values appearing in the ",(0,s.jsx)(n.code,{children:"did"})," column:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO distributors (did, dname) VALUES (7, 'Redline GmbH')\n    ON CONFLICT (did) DO NOTHING;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Insert or update new distributors as appropriate. Example assumes a unique index has been defined that constrains values appearing in the ",(0,s.jsx)(n.code,{children:"did"})," column. ",(0,s.jsx)(n.code,{children:"WHERE"})," clause is used to limit the rows actually updated (any existing row not updated will still be locked, though):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Don't update existing distributors based in a certain ZIP code\nINSERT INTO distributors AS d (did, dname) VALUES (8, 'Anvil Distribution')\n    ON CONFLICT (did) DO UPDATE\n    SET dname = EXCLUDED.dname || ' (formerly ' || d.dname || ')'\n    WHERE d.zipcode <> '21201';\n\n-- Name a constraint directly in the statement (uses associated\n-- index to arbitrate taking the DO NOTHING action)\nINSERT INTO distributors (did, dname) VALUES (9, 'Antwerp Design')\n    ON CONFLICT ON CONSTRAINT distributors_pkey DO NOTHING;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Insert new distributor if possible; otherwise ",(0,s.jsx)(n.code,{children:"DO NOTHING"}),". Example assumes a unique index has been defined that constrains values appearing in the ",(0,s.jsx)(n.code,{children:"did"})," column on a subset of rows where the ",(0,s.jsx)(n.code,{children:"is_active"})," Boolean column evaluates to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'-- This statement could infer a partial unique index on "did"\n-- with a predicate of "WHERE is_active", but it could also\n-- just use a regular unique constraint on "did"\nINSERT INTO distributors (did, dname) VALUES (10, \'Conrad International\')\n    ON CONFLICT (did) WHERE is_active DO NOTHING;\n'})}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"INSERT"})," conforms to the SQL standard, except that the ",(0,s.jsx)(n.code,{children:"RETURNING"})," clause is a Cloudberry Database extension, as is the ability to use ",(0,s.jsx)(n.code,{children:"WITH"})," with ",(0,s.jsx)(n.code,{children:"INSERT"}),", and the ability to specify an alternative action with ",(0,s.jsx)(n.code,{children:"ON CONFLICT"}),". Also, the case in which a column name list is omitted, but not all of the columns are filled from the ",(0,s.jsx)(n.code,{children:"VALUES"})," clause or query, is disallowed by the standard."]}),"\n",(0,s.jsxs)(n.p,{children:["The SQL standard specifies that ",(0,s.jsx)(n.code,{children:"OVERRIDING SYSTEM VALUE"})," can only be specified if an identity column that is generated always exists. Cloudberry Database allows the clause in any case and ignores it if it is not applicable."]}),"\n",(0,s.jsxs)(n.p,{children:["Possible limitations of the query clause are documented under ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/select",children:"SELECT"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/select",children:"SELECT"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(67294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);