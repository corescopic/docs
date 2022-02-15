---
sidebar_position: 4
---

# Heart Beat

corescopic performs "heart beats" to determine how long a user has visited a site. For these heart beats, corescopic will send small pings to the event server to indicate that the page is still open.

By default a heart beat will be sent:

- every 30 seconds in the first 5 minutes
- every 60 seconds after that

In most cases, heart beats are only used as a backup method as corescopic will send a last beacon before the page gets unloaded to get the most accurate time on page. If corescopic does however not get the chance to do so - e.g. because the browser doesn't support the feature -, the heart beat data will be used instead.

## Change interval

To change the interval of the heart beat, change `window.corescopic.heartBeatLength` to the time between heart beats in seconds:

```JavaScript
window.corescopic = window.corescopic || {};
window.corescopic.heartBeatLength = 30; // Always send a heart beat every 30 seconds
```

Please note that the heart beat length can be no less than 10 seconds in order to not have too large of a performance influence.

## Disable heart beats

Alternatively, set the `window.corescopic.heartBeatLength` to `-1` to disable heart beats completely. Please note that this might result in "Time on page" charts in the dashboard not showing the best possible data.

```JavaScript
window.corescopic = window.corescopic || {};
window.corescopic.heartBeatLength = -1; // Never send heart beats
```
