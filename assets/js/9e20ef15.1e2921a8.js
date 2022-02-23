"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[635],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=u(t),d=s,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,o=new Array(l);o[0]=m;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1655:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=t(7462),s=t(3366),l=(t(7294),t(3905)),o=["components"],r={sidebar_position:6},i="Raw CQL",u={unversionedId:"creating-charts/data-source/raw-cql",id:"creating-charts/data-source/raw-cql",title:"Raw CQL",description:"Under the hood, corescopic uses the corescopic Query Language (CQL) to fetch chart data and create statistics. CQL is written in JSON but most of its terminology is based on SQL's namings. Having a robust understanding of SQL will help getting started with CQL quickly.",source:"@site/docs/creating-charts/data-source/raw-cql.md",sourceDirName:"creating-charts/data-source",slug:"/creating-charts/data-source/raw-cql",permalink:"/docs/creating-charts/data-source/raw-cql",editUrl:"https://github.com/corescopic/docs/edit/main/website/docs/creating-charts/data-source/raw-cql.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/creating-charts/data-source/configuration"},next:{title:"Post Processing",permalink:"/docs/creating-charts/post-processing"}},p=[{value:"Structure",id:"structure",children:[{value:"Column Names",id:"column-names",children:[],level:3}],level:2},{value:"exports",id:"exports",children:[],level:2},{value:"where",id:"where",children:[{value:"Connection Clauses",id:"connection-clauses",children:[],level:3},{value:"Compare clause",id:"compare-clause",children:[],level:3},{value:"Time clause",id:"time-clause",children:[{value:"Time values",id:"time-values",children:[],level:4}],level:3},{value:"Groups",id:"groups",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Examples",id:"examples-1",children:[],level:2}],c={toc:p};function m(e){var n=e.components,t=(0,s.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"raw-cql"},"Raw CQL"),(0,l.kt)("p",null,"Under the hood, corescopic uses the corescopic Query Language (CQL) to fetch chart data and create statistics. CQL is written in JSON but most of its terminology is based on SQL's namings. Having a robust understanding of SQL will help getting started with CQL quickly."),(0,l.kt)("p",null,"CQL is built to provide a better experience creating statistics by adding small abstractions over SQL, allowing the query to be easily parsed and displayed by the chart creator and allowing it to be easily verified by our backend. Internally CQL queries will be transpiled into SQL queries to be run against the events database so all rules of SQL also apply to CQL queries."),(0,l.kt)("p",null,"While the corescopic frontend provides you with a visual builder for CQL, you may decide to use the raw CQL editor instead."),(0,l.kt)("h2",{id:"structure"},"Structure"),(0,l.kt)("p",null,"CQL is a JSON object that conatins various values to specify what data to fetch. At its minimum, a CQL query contains an ",(0,l.kt)("inlineCode",{parentName:"p"},"exports")," array with columns to fetch and a ",(0,l.kt)("inlineCode",{parentName:"p"},"where")," array:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "exports": ["events.name"],\n  "where": []\n}\n')),(0,l.kt)("h3",{id:"column-names"},"Column Names"),(0,l.kt)("p",null,"Column names are used throughout CQL, e.g. when exporting columns, using where clauses or grouping rows."),(0,l.kt)("p",null,"The names always follow the format of ",(0,l.kt)("inlineCode",{parentName:"p"},"tableName.columnNameOrModifier[.subColumnorModifier[.submodifier]]"),". Valid table names are ",(0,l.kt)("inlineCode",{parentName:"p"},"events")," for the list of events and ",(0,l.kt)("inlineCode",{parentName:"p"},"sessions")," for the list of all sessions."),(0,l.kt)("p",null,"Next a column name or modifier must be added. Examples for this is ",(0,l.kt)("inlineCode",{parentName:"p"},"events.name")," to get the event name, ",(0,l.kt)("inlineCode",{parentName:"p"},"events.count")," to count the number of events or ",(0,l.kt)("inlineCode",{parentName:"p"},"sessions.user_id")," to get the user ID of a session."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"events")," table contains the following columns and modifiers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"events.name"),": Name of the event"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"events.tracker_id"),": Tracker ID used for the event"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"events.session_id"),": Connected session ID. This might be -1 if collected in unconsented mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"events.user_id"),": Connected user ID. This might be -1 if collected in unconsented mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"events.timestamp"),": Time of the event"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"events.count"),": Number of events")),(0,l.kt)("p",null,"Any additional data you provided when adding the event can be accessed using ",(0,l.kt)("inlineCode",{parentName:"p"},"events.contents.[name]"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"events.contents.shop_username")," if you provided a ",(0,l.kt)("inlineCode",{parentName:"p"},"shop_username")," parameter.\nContents can be modified by using the submodifier: E.g. using ",(0,l.kt)("inlineCode",{parentName:"p"},"events.contents.purchase_value.sum")," to sum all values or ",(0,l.kt)("inlineCode",{parentName:"p"},"events.contents.purchase_value.count")," to count the number of items with the specific property."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sessions")," table contains the following columns and modifiers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sessions.id"),": ID of the session"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sessions.user_id"),": Connected user ID"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sessions.isBounce"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," if the user has bounced"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sessions.user_agent"),": Last known user agent of the user"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sessions.created_at"),": Time that the session was first created"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sessions.updated_at"),": Time that the session was last modified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sessions.count"),": Number of sessions")),(0,l.kt)("h2",{id:"exports"},"exports"),(0,l.kt)("p",null,"Exports are columns that should be returned by the statement, similar to SQL's ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," items. The array should contain at least one ",(0,l.kt)("a",{parentName:"p",href:"#column-name"},"column name"),", otherwise the query will be regarded as invalid."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'"exports": ["events.name", "sessions.user_agent"],\n')),(0,l.kt)("p",null,"When using both events and sessions, session details will automatically be ",(0,l.kt)("inlineCode",{parentName:"p"},"LEFT JOIN"),"ed with event details so both tables can be used easily."),(0,l.kt)("h2",{id:"where"},"where"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"where")," array provides conditions for selecting rows, just like SQL ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),". Each item in the where array can be another sub-array to group conditions or a where clause object."),(0,l.kt)("p",null,"This is what the ",(0,l.kt)("inlineCode",{parentName:"p"},"where")," array might look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'"where": [\n  {\n    "clause": "time",\n    "type": "BETWEEN",\n    "column": "events.timestamp",\n    "value": "2021-01-01 00:00:00",\n    "value2": "NOW - 1m"\n  },\n  {\n    "clause": "connection",\n    "type": "AND",\n  },\n  [\n    {\n      "clause": "compare",\n      "type": "EQUAL",\n      "column": "events.name",\n      "value": "purchase"\n    },\n    {\n      "clause": "connection",\n      "type": "OR",\n    },\n    {\n      "clause": "compare",\n      "type": "EQUAL",\n      "column": "events.name",\n      "value": "lead"\n    },\n  ]\n]\n')),(0,l.kt)("p",null,"This will select all rows that occured between 01/01/2020 and 7 days ago and where the ",(0,l.kt)("inlineCode",{parentName:"p"},"events.name")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"purchase")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"lead"),". When using SQL, this could be translated into"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"WHERE\n  events.timestamp < DateAdd(DD,-7,GETDATE()) AND events.timestamp > 2021-01-01 00-00-00\n  AND\n  (\n    events.name = 'purchase'\n    OR\n    events.name = 'lead'\n  )\n")),(0,l.kt)("h3",{id:"connection-clauses"},"Connection Clauses"),(0,l.kt)("p",null,"CQL supports different comparison clauses (compare, time with different types each) but all comparisons need to be connected using a connection clause (AND or OR)."),(0,l.kt)("p",null,"For example, this CQL snippet is invalid because there are two comparison clauses in sequence without a connection clause:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'"where": [\n  {\n    "clause": "compare",\n    "type": "EQUAL",\n    "column": "events.name",\n    "value": "purchase"\n  },\n  {\n    "clause": "compare",\n    "type": "EQUAL",\n    "column": "events.name",\n    "value": "lead"\n  },\n]\n')),(0,l.kt)("p",null,"This CQL Snippet is valid as there is a connecting ",(0,l.kt)("inlineCode",{parentName:"p"},"OR")," between both comparisons:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'"where": [\n  {\n    "clause": "compare",\n    "type": "EQUAL",\n    "column": "events.name",\n    "value": "purchase"\n  },\n  {\n    "clause": "connection",\n    "type": "OR",\n  },\n  {\n    "clause": "compare",\n    "type": "EQUAL",\n    "column": "events.name",\n    "value": "lead"\n  },\n]\n')),(0,l.kt)("p",null,"A connection clause should always have ",(0,l.kt)("inlineCode",{parentName:"p"},'"clause": "connection"')," and can have a ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"AND")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"OR"),"."),(0,l.kt)("p",null,"OR-Connection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "clause": "connection",\n  "type": "OR",\n},\n')),(0,l.kt)("p",null,"AND-Connection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "clause": "connection",\n  "type": "AND",\n},\n')),(0,l.kt)("h3",{id:"compare-clause"},"Compare clause"),(0,l.kt)("p",null,"Compare clauses can be used for normal value comparisons. Those clauses should always have ",(0,l.kt)("inlineCode",{parentName:"p"},'"clause": "compare"')," and can have a ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),' of "GREATER",\xa0"GREATER_EQUAL",\xa0"SMALLER",\xa0"SMALLER_EQUAL", "EQUAL" or "NOT_EQUAL".'),(0,l.kt)("p",null,"When comparing timestamps, it is advices to use ",(0,l.kt)("a",{parentName:"p",href:"#time-clause"},"Time clauses")," instead as those are specialized to make working with time comparison easier."),(0,l.kt)("p",null,"A compare clause should also always have a ",(0,l.kt)("inlineCode",{parentName:"p"},"column"),", which is the column name that should be compared against, and a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," which is the value to compare to."),(0,l.kt)("p",null,"Equal-comparison:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "clause": "compare",\n  "type": "EQUAL",\n  "column": "events.name",\n  "value": "lead"\n}\n')),(0,l.kt)("p",null,"Greater-comparison:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "clause": "compare",\n  "type": "GREATER",\n  "column": "events.contents.value",\n  "value": "100"\n}\n')),(0,l.kt)("h3",{id:"time-clause"},"Time clause"),(0,l.kt)("p",null,"Time clause should be used when handling comparisons of timestamps. While it is possible to use normal compare clauses, time clauses provide an additional abstraction over the raw timestamp data."),(0,l.kt)("p",null,"The clauses should always have ",(0,l.kt)("inlineCode",{parentName:"p"},'"clause": "time"')," and can have a ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),' of "BEFORE", "AFTER", "ON" or\xa0"BETWEEN" corresponding to "SMALLER", "GREATER", "EQUAL" and "BETWEEN" respectively.'),(0,l.kt)("p",null,"As with compare clauses, time clauses should contain a ",(0,l.kt)("inlineCode",{parentName:"p"},"column")," to compare and at least a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," to compare against (see ",(0,l.kt)("a",{parentName:"p",href:"#time-values"},"time values"),")."),(0,l.kt)("p",null,"For example, only get rows before 01/01/2022:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "clause": "time",\n  "type": "BEFORE",\n  "column": "events.timestamp",\n  "value": "2022-01-01 00:00:00"\n}\n')),(0,l.kt)("p",null,"Only get rows from the last 7 days:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "clause": "time",\n  "type": "AFTER",\n  "column": "events.timestamp",\n  "value": "NOW - 7d"\n}\n')),(0,l.kt)("p",null,"A special case is the ",(0,l.kt)("inlineCode",{parentName:"p"},"BETWEEN")," clause as it takes two time values: A lower and a upper limit. The lower limit should be provided using ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," but the upper limit should be provided via ",(0,l.kt)("inlineCode",{parentName:"p"},"value2"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "clause": "time",\n  "type": "BETWEEN",\n  "column": "events.timestamp",\n  "value": "2021-01-02 00:00:00",\n  "value2": "NOW + 7d"\n}\n')),(0,l.kt)("h4",{id:"time-values"},"Time values"),(0,l.kt)("p",null,"The value can be provided in two formats: absolute or relative."),(0,l.kt)("p",null,"An absolute time value describes a point in time that will not change, regardless of when the query has been executed. Absolute time values should have the format ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD HH:MM:SS"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"2021-01-01 00:00:00"),"."),(0,l.kt)("p",null,"Relative time values describe values relative to the time the query is executed. This could be used to always return the events of the last 30 days instead of having to update the absolute value manually each time. A relative value mus start with the keyword ",(0,l.kt)("inlineCode",{parentName:"p"},"NOW")," to indicate it being relative to the current time. After that, any subtraction or addition might be performed to get a time."),(0,l.kt)("p",null,"For example, to get the time 7 days in the past, use ",(0,l.kt)("inlineCode",{parentName:"p"},"NOW + 7d"),". To get the time 23 hours in the past you might use ",(0,l.kt)("inlineCode",{parentName:"p"},"NOW - 23h")," or use ",(0,l.kt)("inlineCode",{parentName:"p"},"NOW - 1d + 1h"),"."),(0,l.kt)("p",null,"Please note that whitespaces are ignored in relative time values, resulting in ",(0,l.kt)("inlineCode",{parentName:"p"},"NOW+7d"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"NOW + 7 d"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"NOW + 7d")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"NOW+ 7 d")," all being valid values."),(0,l.kt)("p",null,"Valid units are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ms: Milliseconds"),(0,l.kt)("li",{parentName:"ul"},"s: seconds"),(0,l.kt)("li",{parentName:"ul"},"m: Minutes"),(0,l.kt)("li",{parentName:"ul"},"h: Hours"),(0,l.kt)("li",{parentName:"ul"},"d: Days"),(0,l.kt)("li",{parentName:"ul"},"w: Weeks"),(0,l.kt)("li",{parentName:"ul"},"M: Months"),(0,l.kt)("li",{parentName:"ul"},"y: Years")),(0,l.kt)("h3",{id:"groups"},"Groups"),(0,l.kt)("p",null,"Groups allow grouping multiple clauses together, like using parenthesis in SQL. CQL also allows multi-level nesting so your groups can contain sub-groups, which can also contain sub-groups etc.."),(0,l.kt)("p",null,"Groups are indicated by using a sub-array in the main ",(0,l.kt)("inlineCode",{parentName:"p"},"where")," array."),(0,l.kt)("p",null,"Groups are treated like normal compare clauses so groups must be connected to other clauses by using connection clauses."),(0,l.kt)("p",null,"While not being very useful, this snippet shows an example of multi-level grouping:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'"where": [\n  // No group\n  {\n    "clause": "compare",\n    "type": "EQUAL",\n    "column": "events.name",\n    "value": "not grouped"\n  },\n  // Connection clause is needed here\n  {\n    "clause": "connection",\n    "type": "OR",\n  },\n  // Start first group\n  [\n    {\n      "clause": "compare",\n      "type": "EQUAL",\n      "column": "events.name",\n      "value": "one"\n    },\n    // Connection clause is needed here\n    {\n      "clause": "connection",\n      "type": "OR",\n    },\n    // Start sub-group\n    [\n      {\n        "clause": "compare",\n        "type": "EQUAL",\n        "column": "events.name",\n        "value": "two"\n      },\n      {\n        "clause": "connection",\n        "type": "OR",\n      },\n      {\n        "clause": "compare",\n        "type": "EQUAL",\n        "column": "events.name",\n        "value": "three"\n      },\n    ]\n  ]\n]\n')),(0,l.kt)("p",null,"This example can be compared to this SQL code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"WHERE\n  events.name = 'not grouped'\n  OR\n  (\n    events.name = 'one'\n    OR\n    (\n      events.name = 'two'\n      OR\n      events.name = 'three'\n    )\n  )\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h2",{id:"examples-1"},"Examples"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Selecting Event in the last 30 minutes that have a name of "purchase" or a value > 0')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "exports": [\n    "events.name",\n    "events.contents.amount",\n    "events.contents.orderId",\n    "events.count"\n  ],\n  "where": [\n    {\n      "type": "TIME",\n      "mode": "relative",\n      "column": "event.timestamp",\n      "from": "NOW - 30m",\n      "to": "NOW"\n    },\n    {\n      "type": "AND"\n    },\n    [\n      {\n        "type": "EQUAL",\n        "column": "event.name",\n        "value": "purchase"\n      },\n      {\n        "type": "OR"\n      },\n      {\n        "type": "GREATER",\n        "column": "event.contents.amount",\n        "value": "0"\n      }\n    ]\n  ]\n}\n')),(0,l.kt)("p",null,"This is comparable to this SQL Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},'SELECT\n  events.name, events.contents.amount, events.contents.orderId, count(events.*)\nFROM\n  events\nWHERE\n  events.timestamp >= ?\n  AND\n  events.timestamp <= ?\n  AND\n  (\n    events.name = "purchase"\n    OR\n    events.contents.amount > 0\n  )\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Selecting sessions that have been created aftert 02.01.2021 but before 7 days ago")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "exports": ["sessions.id"],\n    "where": [\n      {\n        "clause": "time",\n        "type": "BETWEEN",\n        "column": "sessions.created_at",\n        "value": "2021-01-02 00:00:00",\n        "value2": "NOW - 7d"\n      }\n    ]\n}\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Select event names and user agents with session ids")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "exports": ["events.name", "events.contents.user_agent", "session.id"],\n  "where": [\n    {\n      "clause": "compare",\n      "type": "EQUAL",\n      "column": "events.name",\n      "value": "pageview"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Please note that this requires a table join and you can access the session ID the events table, too. This results in this query returning the same results but with a better performance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "exports": ["events.name", "events.contents.user_agent", "events.session_id"],\n  "where": [\n    {\n      "clause": "compare",\n      "type": "EQUAL",\n      "column": "events.name",\n      "value": "pageview"\n    }\n  ]\n}\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Get the total number of events")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "exports": ["events.count"],\n  "where": []\n}\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Sum the total value of all events with a value greater 0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "exports": ["events.contents.value.sum"],\n    "where": [\n      {\n        "clause": "compare",\n        "type": "GREATER",\n        "column": "events.contents.value",\n        "value": "0"\n      }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);