---
sidebar_position: 1
---

# Implementation

Similar to other analytics platforms, corescopic provides a JavaScript library that handles tracking page views and events on your page.

For the base installation, this code snippet should be added to your page:

```HTML
<script>
  window.corescopic = window.corescopic || {
    modules: []
  };
</script>
<script src="https://t.corescopic.com/main.js" data-id="TRACKER_ID"></script>
```

`TRACKER_ID` should be replaced with your page's unique tracker ID which can be found in your corescopic dashboard.

After the installation, corescopic will automatically track new page views and add them to your corescopic page. Using this base installation, corescopic will however only track very limited amounts of data as the [Consented Mode](/docs/tracking-code/consent-mode) has not been activated yet.

## Using multiple trackers on one page: Namespaces

corescopic supports loading mutliple corescopic Trackers on one page using namespaces. Changing the namespace will change the name on `window` that corescopic will use.

You can set a tracker's namespace by setting `data-name` on the main script, e.g:

```HTML
<script>
  window.secondCorescopicTracker = window.secondCorescopicTracker || {
    modules: []
  };
</script>
<script src="https://t.corescopic.com/main.js" data-id="TRACKER_ID" data-name="secondCorescopicTracker"></script>
```

Please note that all interactions with this tracker must now be made over `window.secondCorescopicTracker` instead of `window.corescopic`.

## ✨ Next steps:

- Customize [the tracker configuration](/docs/tracking-code/configuration) to fit your needs
- Implement [Consented Mode](/docs/tracking-code/consent-mode) to get more data
- Track [events](/docs/tracking-code/events) to gain more insights
- Import [additional modules](/docs/tracking-code/modules/usage) to fit your page
