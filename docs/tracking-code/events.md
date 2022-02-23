---
sidebar_position: 4
---

# Events

With corescopic, everything is an event. There is no distinction between page views, conversions and leads but instead everything will be tracked as events with different event names.

By default, corescopic will automatically track `pageview` events each time a user visits a page. This event contains the current URL as `url` and the title of the current page as `title`.

You may choose to track custom events with your own parameters by adding new items to corescopic's `events` array.

For example, tracking a purchase event is as simple as adding this script to the "Thank you"-page of the shop:

```HTML
<script>
  // Purchase data as provided by the shop
  var my_purchase = {
    orderId: '12345',
    orderTotal: '10.00',
    orderCurrency: 'USD',
    orderItems: [
      {
        orderItemId: '12345',
        orderItemName: 'My item',
        orderItemQuantity: '1',
        orderItemUnitPrice: '10.00',
        orderItemCurrency: 'USD'
      }
    ]
  };

  window.corescopic = window.corescopic || {};
  window.corescopic.events = window.corescopic.events || [];
  window.corescopic.events.push({
    name: 'purchase',
    orderId: my_purchase.orderId,
    orderTotal: my_purchase.orderTotal,
    orderCurrency: my_purchase.orderCurrency,
    orderItems: my_purchase.orderItems
  });
</script>
```

As always with corescopic, you might choose to customize the event and parameters to fit your needs.
