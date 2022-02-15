"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Getting started","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Tracking Code","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Implementation","href":"/docs/tracking-code/implementation","docId":"tracking-code/implementation"},{"type":"link","label":"Consented Mode","href":"/docs/tracking-code/consent-mode","docId":"tracking-code/consent-mode"},{"type":"link","label":"Events","href":"/docs/tracking-code/events","docId":"tracking-code/events"},{"type":"link","label":"Heart Beat","href":"/docs/tracking-code/heart-beat","docId":"tracking-code/heart-beat"},{"type":"category","label":"Modules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Using modules","href":"/docs/tracking-code/modules/usage","docId":"tracking-code/modules/usage"},{"type":"link","label":"Tracking ad compaigns: The ads module","href":"/docs/tracking-code/modules/ads-module","docId":"tracking-code/modules/ads-module"},{"type":"link","label":"Tracking SPAs: The hashRouter module","href":"/docs/tracking-code/modules/hashrouter","docId":"tracking-code/modules/hashrouter"},{"type":"link","label":"Developing Modules","href":"/docs/tracking-code/modules/developing-modules","docId":"tracking-code/modules/developing-modules"}]},{"type":"link","label":"Tracker JavaScript API","href":"/docs/tracking-code/api","docId":"tracking-code/api"}]},{"type":"category","label":"Creating Charts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Chart Types","href":"/docs/creating-charts/chart-types","docId":"creating-charts/chart-types"},{"type":"category","label":"Data Source","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configuration","href":"/docs/creating-charts/data-source/configuration","docId":"creating-charts/data-source/configuration"},{"type":"link","label":"CQL","href":"/docs/creating-charts/data-source/cql","docId":"creating-charts/data-source/cql"}]},{"type":"link","label":"Post Processing","href":"/docs/creating-charts/post-processing","docId":"creating-charts/post-processing"}]}]},"docs":{"creating-charts/chart-types":{"id":"creating-charts/chart-types","title":"Chart Types","description":"","sidebar":"tutorialSidebar"},"creating-charts/data-source/configuration":{"id":"creating-charts/data-source/configuration","title":"Configuration","description":"","sidebar":"tutorialSidebar"},"creating-charts/data-source/cql":{"id":"creating-charts/data-source/cql","title":"CQL","description":"Under the hood, corescopic uses the corescopic Query Language (CQL) to fetch chart data and create statistics. CQL is written in JSON but most of its terminology is based on SQL\'s namings. Having a robust understanding of SQL will help getting started with CQL quickly.","sidebar":"tutorialSidebar"},"creating-charts/post-processing":{"id":"creating-charts/post-processing","title":"Post Processing","description":"Post Processing allows you to customize data before it is rendered as a chart, table or number. While the data source already provides powerful features to select, aggregate and group data, some use-cases may require more customization that isn\'t possible or is very complicated with database queries.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Getting started","description":"This tutorial will give a quick 15 minute introduction into how to use corescopic.","sidebar":"tutorialSidebar"},"tracking-code/api":{"id":"tracking-code/api","title":"Tracker JavaScript API","description":"Additional information about using the corescopic tracker API will be provided in the future.","sidebar":"tutorialSidebar"},"tracking-code/consent-mode":{"id":"tracking-code/consent-mode","title":"Consented Mode","description":"corescopic is not retro-fitted to GDPR-compliance - it has been built from the ground up with current privacy regulations like GDPR in mind. Consented Mode is a result of this approach:","sidebar":"tutorialSidebar"},"tracking-code/events":{"id":"tracking-code/events","title":"Events","description":"With corescopic, everything is an event. There is no distinction between page views, conversions and leads but instead everything will be tracked as events with different event names.","sidebar":"tutorialSidebar"},"tracking-code/heart-beat":{"id":"tracking-code/heart-beat","title":"Heart Beat","description":"corescopic performs \\"heart beats\\" to determine how long a user has visited a site. For these heart beats, corescopic will send small pings to the event server to indicate that the page is still open.","sidebar":"tutorialSidebar"},"tracking-code/implementation":{"id":"tracking-code/implementation","title":"Implementation","description":"Similar to other analytics platforms, corescopic provides a JavaScript library that handles tracking page views and events on your page.","sidebar":"tutorialSidebar"},"tracking-code/modules/ads-module":{"id":"tracking-code/modules/ads-module","title":"Tracking ad compaigns: The ads module","description":"corescopic allows importing conversions into your Google, Microsoft and Facebook Ads accounts. To enable this, corescopic needs to track user\'s click IDs which are provided by your ad campaigns.","sidebar":"tutorialSidebar"},"tracking-code/modules/developing-modules":{"id":"tracking-code/modules/developing-modules","title":"Developing Modules","description":"Developing modules allows you to extend corescopic\'s functionality easily.","sidebar":"tutorialSidebar"},"tracking-code/modules/hashrouter":{"id":"tracking-code/modules/hashrouter","title":"Tracking SPAs: The hashRouter module","description":"","sidebar":"tutorialSidebar"},"tracking-code/modules/usage":{"id":"tracking-code/modules/usage","title":"Using modules","description":"The main corescopic tracking code is kept lean to not waste additional network traffic or impact your page\'s performance. This does not however mean that corescopic\'s tracker does not have powerful build-in functionality to automatically provide insights into your users.","sidebar":"tutorialSidebar"}}}')}}]);