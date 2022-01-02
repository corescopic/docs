---
sidebar_position: 2
---

# Consented Mode

corescopic is not retro-fitted to GDPR-compliance - it has been built from the ground up with current privacy regulations like GDPR in mind. Consented Mode is a result of this approach: 

By default, corescopic will run in unconsented mode. This mode will not store session or user IDs, resulting in events and page views from different users to be indistinguishable from another - making the data non-personal to fit GDPR regulations.

Consented Mode should only be enabled when the user has accepted corescopic in your Cookie Banner or Consent Manager to adhere to privacy regulations. 

With Consented Mode enabled, corescopic will:
- Generate a random, unique session and user ID for the current browser and stores it in the localstorage of the users browser
- Previously sent events on the current page (e.g. page views) will be updated to the newly generated unique session so no data gets lost
- Additionally, with Consented Mode enabled, corescopic will save the user's IP address and an estimated location based on that address to allow you to perform geographical analytics

Consented Mode can be simply enabled by setting `window.corescopic.consented` to `true`. For example, you might add this script to your consent manager to automatically run when corescopic has been consented:

```HTML
<script>
  window.corescopic = window.corecopic || {};
  window.corescopic.consented = true;
</script>
```