---
sidebar_position: 5
---

# Developing Modules

Developing modules allows you to extend corescopic's functionality easily.

Modules are ES6 modules that are `import`ed by the main corescopic tracker once it has been requested to import the script. A module should always `export default` a function that will be used to set up the module.

`module.js:`
```JavaScript
export default function setup(config) {
  // Set up the module here
  console.log('Module has been set up');
}
```

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
export default function setup(config) {
  // Set up the module here
  console.log('Config:', config);
}
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

In your module, you may access the current corescopic tracker using `window.corescopic.api`. Additional information about using the corescopic tracker API will be provided in the future.
