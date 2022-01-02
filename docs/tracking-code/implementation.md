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

`TRACKER_ID` should be replaced with your page's unique tracker ID which can be found in your corescopic dashboard. Currently, corescopic only supports one corescopic tracker ID per page - this feature might be added in the future.

After the installation, corescopic will automatically track new page views and add them to your corescopic page. Using this base installation, corescopic will however only track very limited amounts of data as the [Consented Mode](/docs/tracking-code/consent-mode) has not been activated yet.

✨ Next steps:
- Implement [Consented Mode](/docs/tracking-code/consent-mode) to get more data
- Track [events](/docs/tracking-code/events) to gain more insights
- Import [additional modules](/docs/tracking-code/modules/usage) to fit your page
