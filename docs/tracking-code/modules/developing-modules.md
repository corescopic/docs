---
sidebar_position: 5
---

# Developing Modules

Developing modules allows you to extend corescopic's functionality easily.

Modules are standalone JavaScript files that will get loaded using special script tag parameter. After being loaded, a module should register with the corescopic tracker to indicate that it functions correctly.

`module.js:`

```JavaScript
const moduleId = document.currentScript.getAttribute('data-corescopic-module-id');
const corescopicName = document.currentScript.getAttribute('data-corescopic-name');

window[corescopicName].api.registerModule(moduleId, (config) => {
  console.log('Module has been set up');
});
```

> To stay compatible with the tracker's namespacing feature, `window[corescopicName]` should always be used instead of accessing `window.corescopic` directly

If the module is now loaded with corescopic, this function will be called:

`index.html:`

```HTML
<script>
  window.corescopic = window.corescopic || {};
  window.corescopic.modules = window.corescopic.modules || [];
  window.corescopic.modules.push('module.js');
  // -> "Module has been set up"
</script>
```

The `config` parameter will be set to the `config` object is one is provided during load, otherwise it will be `undefined`:

`module.js:`

```JavaScript
const moduleId = document.currentScript.getAttribute('data-corescopic-module-id');
const corescopicName = document.currentScript.getAttribute('data-corescopic-name');

window[corescopicName].api.registerModule(moduleId, (config) => {
  // Set up the module here
  console.log('Config:', config);
});
```

`index.html:`

```HTML
<script>
  window.corescopic = window.corescopic || {};
  window.corescopic.modules = window.corescopic.modules || [];
  window.corescopic.modules.push({
    url: 'module.js',
    config: {
      your: 'config',
      is: 'here'
    }
  });
  // -> "Config: { your: 'config', is: 'here' }
</script>
```

In your module, you may access the current corescopic tracker using `window[corescopicName].api`.
