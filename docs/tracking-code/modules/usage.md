---
sidebar_position: 1
---

# Using modules

The main corescopic tracking code is kept lean to not waste additional network traffic or impact your page's performance. This does not however mean that corescopic's tracker does not have powerful build-in functionality to automatically provide insights into your users.

Intead of shipping everything in the main package, optional modules can be loaded that provide additional functionality automatically.

corescopic has with a number of official modules, you may however decide to load any third-party module or even [develop your own, custom modules](/docs/tracking-code/modules/developing-modules) for corescopic.

To load a module script into the corescopic tracker, simply push the module URL to the `window.corescopic.modules` array and corescopic will load and set up the module automatically.

```HTML
<script>
  window.corescopic = window.corescopic || {};
  window.corescopic.modules = window.corescopic.modules || [];
  window.corescopic.modules.push('https://t.corescopic.com/modules/hashRouter.js');
</script>
```

Some modules may require individual configuration parameters. Configuration can be provided by adding a module with a `config` object instead of only adding the URL to the modules array:

```HTML
<script>
  window.corescopic = window.corescopic || {};
  window.corescopic.modules = window.corescopic.modules || [];
  window.corescopic.modules.push({
    url: 'https://t.corescopic.com/modules/ads.js',
    config: {
      ads: ['google', 'facebook']
    }
  });
</script>
```

Currently, corescopic provides these official modules:
- [Ads Module](/docs/tracking-code/modules/ads-module) for tracking campaign success
- [Hash Router Module](/docs/tracking-code/modules/hashrouter) to track page views on SPAs that use hash routing