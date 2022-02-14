---
sidebar_position: 5
---

# Post Processing

Post Processing allows you to customize data before it is rendered as a chart, table or number. While the data source already provides powerful features to select, aggregate and group data, some use-cases may require more customization that isn't possible or is very complicated with database queries.

> While post-processing allows powerful customization, the processing will happen in the browser. Due to this, all required data needs to be transmitted and execution may be comparatively slow.
> Using the data source query instead of complicated post-processing scripts is recommended when possible.

In the chart editor you may provide a post-processing script - by default this script will be:

```JavaScript
((data) => {
  return data;
})
```

corescopic uses JavaScript as the programming language for post-processing script.

The post-processing script is a function that takes one parameter - `data` - that contains the data fetched from the database.

The provided `data` array might look like this - but it highly depends on the data source query:

```JavaScript
[
  {
    "events.count": 2,
    "events.user_id": "O2XfWSAl8mLYJ8fNikgf9bCIoENG9bJmj4FRfpo5Iq0HRWW4ajsT3lbExOGyVmfSongPiCX8abEpR9jXHpl7U8sx5S2hRZaWH8tH",
    "events.session_id": "CcOKKdyeX6OzlVRmG0YnXtCIne0ulU7lmjJjbuWpivMt6EuY7FD87HcHPQM0Pkhhk8dK3XjsvFFoBvl1ptZ75wbiz6Kw63xZpy6b",
    "events.contents.accountType": "new"
  },
  {
    "events.count": 19,
    "events.user_id": "0HRWW4ajsT3lbExOGyVmfSongPiCX8abEpR9jXHpl7U8sx5S2hRZaWH8tHO2XfWSAl8mLYJ8fNikgf9bCIoENG9bJmj4FRfpo5Iq",
    "events.session_id": "ne0ulU7lmjJjbuWpivMt6EuY7FD87HcHPQM0Pkhhk8dK3XjsvFFoBvl1ptZ75wbiz6Kw63xZpy6bCcOKKdyeX6OzlVRmG0YnXtCI",
    "events.contents.accountType": "existing"
  }
]
```

Your function should return an array of data elements that will be used for charting.

A script must return the processed value directly (i.e. can't use methods like Promises or async) and will be terminated after 5 seconds as a script running this long will be marked as unresponsive.

For the example data provided above, you could transform the "accountType" to be a more readable "New Customer" and "Existing Customer" instead of "new" and "existing" using this script:

```JavaScript
((data) => {
  return data.map((item) => {
    item['events.contents.accountType'] = item['events.contents.accountType'] === "new" ? "New Customer" : "Existing Customer";
    return item;
  });
})
```

# Sandbox

The script will run in a sandboxed [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API). Due to the sandboxing, you may only access whitelisted functions like `parseInt` but can't access functions like `fetch`.

> While the sandbox provides some protection against malicious code, you should not run untrusted post-processing code in your user account.

Whitelisted functions and features currently are:

- Array
- Boolean
- Date
- Function
- Object
- String
- undefined
- Infinity
- isFinite
- isNaN
- Math
- NaN
- Number
- parseFloat
- parseInt
- RegExp
- console

You may use any of these features in your script. If you use any non-whitelisted features, the chart will show the data directly returned by the database and log information about the access violation into the console:

![Sandbox violation in console](/img/sandbox_violation.png)
