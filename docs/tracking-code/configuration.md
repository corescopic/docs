---
sidebar_position: 2
---

# Configuration

corescopic's tracker can be customized using the `window.corescopic` object. Available options are:

## id

```HTML
<script>
  window.corescopic = window.corecopic || {};
  window.corescopic.id = 123456789;
</script>
```

Current corescopic page ID to track for. Normally, this is set directly in the corescopic script tag (e.g. `<script src="https://t.corescopic.com/main.js" data-id="123456789"></script>`) but it can be alternatively provided using the corescopic config _before_ loading the script.

When the tracker id is provided using the script tag, the tracker script will automatically set `window.corescopic.id` to the provided id.

## followDoNotTrack

```HTML
<script>
  window.corescopic = window.corecopic || {};
  window.corescopic.followDoNotTrack = true;
</script>
```

If set to `true`, corescopic will not track any data if the browser has enabled the ["Do Not Track" Flag](https://en.wikipedia.org/wiki/Do_Not_Track). By default, this will be set to false.

## noPageView

```HTML
<script>
  window.corescopic = window.corecopic || {};
  window.corescopic.noPageView = true;
</script>
```

If set to `true`, corescopic will not send track a page view or time-on-page event.

## heartBeatLength

```HTML
<script>
  window.corescopic = window.corecopic || {};
  window.corescopic.heartBeatLength = 120;
</script>
```

Customize the length of a heart beat the tracker sends. For more information, take a look at the [heart beat documentation](/docs/tracking-code/heart-beat)

## consented

```HTML
<script>
  window.corescopic = window.corecopic || {};
  window.corescopic.consented = true;
</script>
```

Enable or disable corescopic's consented mode. For more information, take a look at the [consented mode documentation](/docs/tracking-code/consent-mode)
