---
sidebar_position: 6
---

# CQL

Under the hood, corescopic uses the corescopic Query Language (CQL) to fetch chart data and create statistics. CQL is written in JSON but most of its terminology is based on SQL's namings. Having a robust understanding of SQL will help getting started with CQL quickly.

CQL is built to provide a better experience creating statistics by adding small abstractions over SQL, allowing the query to be easily parsed and displayed by the chart creator and allowing it to be easily verified by our backend. Internally CQL queries will be transpiled into SQL queries to be run against the events database so all rules of SQL also apply to CQL queries.

## Structure

CQL is a JSON object that conatins various values to specify what data to fetch. At its minimum, a CQL query contains an `exports` array with columns to fetch and a `where` array:

```JSON
{
  "exports": ["events.name"],
  "where": []
}
```

### Column Names

Column names are used throughout CQL, e.g. when exporting columns, using where clauses or grouping rows.

The names always follow the format of `tableName.columnNameOrModifier[.subColumnorModifier[.submodifier]]`. Valid table names are `events` for the list of events and `sessions` for the list of all sessions.

Next a column name or modifier must be added. Examples for this is `events.name` to get the event name, `events.count` to count the number of events or `sessions.user_id` to get the user ID of a session.

The `events` table contains the following columns and modifiers:
- `events.name`: Name of the event
- `events.tracker_id`: Tracker ID used for the event
- `events.session_id`: Connected session ID. This might be -1 if collected in unconsented mode
- `events.user_id`: Connected user ID. This might be -1 if collected in unconsented mode
- `events.timestamp`: Time of the event
- `events.count`: Number of events

Any additional data you provided when adding the event can be accessed using `events.contents.[name]`, e.g. `events.contents.shop_username` if you provided a `shop_username` parameter.
Contents can be modified by using the submodifier: E.g. using `events.contents.purchase_value.sum` to sum all values or `events.contents.purchase_value.count` to count the number of items with the specific property.

The `sessions` table contains the following columns and modifiers:
- `sessions.id`: ID of the session
- `sessions.user_id`: Connected user ID
- `sessions.isBounce`: `true` if the user has bounced
- `sessions.user_agent`: Last known user agent of the user
- `sessions.created_at`: Time that the session was first created
- `sessions.updated_at`: Time that the session was last modified
- `sessions.count`: Number of sessions

## exports

Exports are columns that should be returned by the statement, similar to SQL's `SELECT` items. The array should contain at least one [column name](#column-name), otherwise the query will be regarded as invalid.

```JSON
"exports": ["events.name", "sessions.user_agent"],
```

When using both events and sessions, session details will automatically be `LEFT JOIN`ed with event details so both tables can be used easily.

## where

The `where` array provides conditions for selecting rows, just like SQL `WHERE`. Each item in the where array can be another sub-array to group conditions or a where clause object.

This is what the `where` array might look like:

```JSON
"where": [
  {
    "clause": "time",
    "type": "BETWEEN",
    "column": "events.timestamp",
    "value": "2021-01-01 00:00:00",
    "value2": "NOW - 1m"
  },
  {
    "clause": "connection",
    "type": "AND",
  },
  [
    {
      "clause": "compare",
      "type": "EQUAL",
      "column": "events.name",
      "value": "purchase"
    },
    {
      "clause": "connection",
      "type": "OR",
    },
    {
      "clause": "compare",
      "type": "EQUAL",
      "column": "events.name",
      "value": "lead"
    },
  ]
]
```

This will select all rows that occured between 01/01/2020 and 7 days ago and where the `events.name` is `purchase` or `lead`. When using SQL, this could be translated into

```SQL
WHERE 
  events.timestamp < DateAdd(DD,-7,GETDATE()) AND events.timestamp > 2021-01-01 00-00-00 
  AND
  (
    events.name = 'purchase'
    OR
    events.name = 'lead'
  )
```

### Connection Clauses

CQL supports different comparison clauses (compare, time with different types each) but all comparisons need to be connected using a connection clause (AND or OR).

For example, this CQL snippet is invalid because there are two comparison clauses in sequence without a connection clause:

```JSON
"where": [
  {
    "clause": "compare",
    "type": "EQUAL",
    "column": "events.name",
    "value": "purchase"
  },
  {
    "clause": "compare",
    "type": "EQUAL",
    "column": "events.name",
    "value": "lead"
  },
]
```

This CQL Snippet is valid as there is a connecting `OR` between both comparisons:

```JSON
"where": [
  {
    "clause": "compare",
    "type": "EQUAL",
    "column": "events.name",
    "value": "purchase"
  },
  {
    "clause": "connection",
    "type": "OR",
  },
  {
    "clause": "compare",
    "type": "EQUAL",
    "column": "events.name",
    "value": "lead"
  },
]
```

A connection clause should always have `"clause": "connection"` and can have a `type` of `AND` or `OR`.

OR-Connection:
```JSON
{
  "clause": "connection",
  "type": "OR",
},
```

AND-Connection:
```JSON
{
  "clause": "connection",
  "type": "AND",
},
```

### Compare clause

Compare clauses can be used for normal value comparisons. Those clauses should always have `"clause": "compare"` and can have a `type` of "GREATER", "GREATER_EQUAL", "SMALLER", "SMALLER_EQUAL", "EQUAL" or "NOT_EQUAL".

When comparing timestamps, it is advices to use [Time clauses](#time-clause) instead as those are specialized to make working with time comparison easier.

A compare clause should also always have a `column`, which is the column name that should be compared against, and a `value` which is the value to compare to.

Equal-comparison:
```JSON
{
  "clause": "compare",
  "type": "EQUAL",
  "column": "events.name",
  "value": "lead"
}
```

Greater-comparison:
```JSON
{
  "clause": "compare",
  "type": "GREATER",
  "column": "events.contents.value",
  "value": "100"
}
```

### Time clause

Time clause should be used when handling comparisons of timestamps. While it is possible to use normal compare clauses, time clauses provide an additional abstraction over the raw timestamp data.

The clauses should always have `"clause": "time"` and can have a `type` of "BEFORE", "AFTER", "ON" or "BETWEEN" corresponding to "SMALLER", "GREATER", "EQUAL" and "BETWEEN" respectively.

As with compare clauses, time clauses should contain a `column` to compare and at least a `value` to compare against (see [time values](#time-values)).

For example, only get rows before 01/01/2022:

```JSON
{
  "clause": "time",
  "type": "BEFORE",
  "column": "events.timestamp",
  "value": "2022-01-01 00:00:00"
}
```

Only get rows from the last 7 days:
```JSON
{
  "clause": "time",
  "type": "AFTER",
  "column": "events.timestamp",
  "value": "NOW - 7d"
}
```

A special case is the `BETWEEN` clause as it takes two time values: A lower and a upper limit. The lower limit should be provided using `value` but the upper limit should be provided via `value2`.

```JSON
{
  "clause": "time",
  "type": "BETWEEN",
  "column": "events.timestamp",
  "value": "2021-01-02 00:00:00",
  "value2": "NOW + 7d"
}
```

#### Time values

The value can be provided in two formats: absolute or relative. 

An absolute time value describes a point in time that will not change, regardless of when the query has been executed. Absolute time values should have the format `YYYY-MM-DD HH:MM:SS`, e.g. `2021-01-01 00:00:00`.

Relative time values describe values relative to the time the query is executed. This could be used to always return the events of the last 30 days instead of having to update the absolute value manually each time. A relative value mus start with the keyword `NOW` to indicate it being relative to the current time. After that, any subtraction or addition might be performed to get a time.

For example, to get the time 7 days in the past, use `NOW + 7d`. To get the time 23 hours in the past you might use `NOW - 23h` or use `NOW - 1d + 1h`.

Please note that whitespaces are ignored in relative time values, resulting in `NOW+7d`, `NOW + 7 d`, `NOW  +   7d` and `NOW+ 7  d` all being valid values.

Valid units are:
- ms: Milliseconds
- s: seconds
- m: Minutes
- h: Hours
- d: Days
- w: Weeks
- M: Months
- y: Years

### Groups

Groups allow grouping multiple clauses together, like using parenthesis in SQL. CQL also allows multi-level nesting so your groups can contain sub-groups, which can also contain sub-groups etc..

Groups are indicated by using a sub-array in the main `where` array.

Groups are treated like normal compare clauses so groups must be connected to other clauses by using connection clauses.

While not being very useful, this snippet shows an example of multi-level grouping:

```JSON
"where": [
  // No group
  {
    "clause": "compare",
    "type": "EQUAL",
    "column": "events.name",
    "value": "not grouped"
  },
  // Connection clause is needed here
  {
    "clause": "connection",
    "type": "OR",
  },
  // Start first group
  [
    {
      "clause": "compare",
      "type": "EQUAL",
      "column": "events.name",
      "value": "one"
    },
    // Connection clause is needed here
    {
      "clause": "connection",
      "type": "OR",
    },
    // Start sub-group
    [
      {
        "clause": "compare",
        "type": "EQUAL",
        "column": "events.name",
        "value": "two"
      },
      {
        "clause": "connection",
        "type": "OR",
      },
      {
        "clause": "compare",
        "type": "EQUAL",
        "column": "events.name",
        "value": "three"
      },
    ]
  ]
]
```

This example can be compared to this SQL code:
```SQL
WHERE 
  events.name = 'not grouped' 
  OR 
  (
    events.name = 'one'
    OR
    (
      events.name = 'two'
      OR
      events.name = 'three'
    )
  )
```

## Examples

## Examples

1. Selecting Event in the last 30 minutes that have a name of "purchase" or a value > 0
```json
{
  "exports": ["events.name", "events.contents.amount", "events.contents.orderId", "events.count"],
  "where": [
    {
      "type": "TIME",
      "mode": "relative",
      "column": "event.timestamp",
      "from": "NOW - 30m",
      "to": "NOW"
    },
    {
      "type": "AND"
    },
    [
      {
        "type": "EQUAL",
        "column": "event.name",
        "value": "purchase"
      },
      {
        "type": "OR"
      },
      {
        "type": "GREATER",
        "column": "event.contents.amount",
        "value": "0"
      }
    ]
  ]
}
```

This is comparable to this SQL Query:
```SQL
SELECT 
  events.name, events.contents.amount, events.contents.orderId, count(events.*)
FROM
  events
WHERE
  events.timestamp >= ?
  AND
  events.timestamp <= ?
  AND
  (
    events.name = "purchase"
    OR
    events.contents.amount > 0
  )
```

2. Selecting sessions that have been created aftert 02.01.2021 but before 7 days ago
```JSON
{
    "exports": ["sessions.id"],
    "where": [
      {
        "clause": "time",
        "type": "BETWEEN",
        "column": "sessions.created_at",
        "value": "2021-01-02 00:00:00",
        "value2": "NOW - 7d"
      }
    ]
}
```

3. Select event names and user agents with session ids
```JSON
{
  "exports": ["events.name", "events.contents.user_agent", "session.id"],
  "where": [
    {
      "clause": "compare",
      "type": "EQUAL",
      "column": "events.name",
      "value": "pageview"
    }
  ]
}
```
Please note that this requires a table join and you can access the session ID the events table, too. This results in this query returning the same results but with a better performance:

```JSON
{
  "exports": ["events.name", "events.contents.user_agent", "events.session_id"],
  "where": [
    {
      "clause": "compare",
      "type": "EQUAL",
      "column": "events.name",
      "value": "pageview"
    }
  ]
}
```

4. Get the total number of events
```JSON
{
  "exports": ["events.count"],
  "where": []
}
```

5. Sum the total value of all events with a value greater 0
```JSON
{
    "exports": ["events.contents.value.sum"],
    "where": [
      {
        "clause": "compare",
        "type": "GREATER",
        "column": "events.contents.value",
        "value": "0"
      }
    ]
}
```