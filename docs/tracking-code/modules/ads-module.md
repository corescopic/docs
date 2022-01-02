---
sidebar_position: 2
---

# Tracking ad compaigns: The ads module

corescopic allows importing conversions into your Google, Microsoft and Facebook Ads accounts. To enable this, corescopic needs to track user's click IDs which are provided by your ad campaigns.

To enable corescopic to track click ID, the `ads` module simply needs to be imported into your pages and corescopic will automatically take care of everything else.

To import the module, add this script to your corescopic configuration:

```HTML
<script>
  window.corescopic = window.corescopic || {};
  window.corescopic.modules = window.corescopic.modules || [];
  window.corescopic.modules.push('https://t.corescopic.com/modules/ads.js');
</script>
```

By default, corescopic will track click IDs for all supported ad platforms. If only specific ad platforms should be tracked, a list of enabled platforms can be provided:

```HTML
<script>
  window.corescopic = window.corescopic || {};
  window.corescopic.modules = window.corescopic.modules || [];
  window.corescopic.modules.push({
    url: 'https://t.corescopic.com/modules/ads.js',
    config: {
      // Ads types that should be tracked
      ads: ['google', 'facebook', 'microsoft']
    }
  });
</script>
```

