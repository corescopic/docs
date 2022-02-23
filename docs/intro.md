---
sidebar_position: 1
---

# Getting started

This tutorial will give a quick introduction into how to use corescopic.

1. Create a corescopic account

First, create a new corescopic account or log in to your existing account on https://coresocpic.com

2. Create a new page

After logging in, you will be prompted to add a page to corescopic. Simply give the page a name - in most cases the page's URL is most recognizable - and add it.

3. Add the tracking script to your website

When adding a page, corescopic will automatically create a 9-digit tracker id used to identify the page. Simply add the tracker script corescopic presents you to your website to let corescopic track basic events on your page.

Alternatively, take a look at the [more detailed tracking implementation documentation](/docs/tracking-code/implementation) to implement all of corescopic's features.

4. Add a view to your corescopic dashboard

Your dashboard is split into multiple views with charts. You can create a new view in the left sidebar.
To get started, let's can create a new view called "Overview" with any icon you want.

5. Add a chart to your view

After creating a view, you will be greeted by a blank page - let's add a chart to that! To get started, enable editing using the button in the top right corner, then click on "Add chart".

For the name, input "All Events", choose "Table" for the chart type and under data source select "Raw SQL" to use SQL for fetching data. Enter `SELECT * FROM events;` into the code editor underneath that to get all information on all events corescopic collected this far.

Lastly, click on "Save chart" to save the chart to your view.

6. Resize the chart

Currently, the table we've created is relatively small. Again, click "Enable editing" in the top right and simply resize the chart to a more usable size. When you're done, click "Disable editing" to prevent accidental edits to your view layout.

And that's it - you've succesfully created a page, implemented tracking and added your first custom chart!

## ✨ Next steps:

- Implement [more tracking features](/docs/tracking-code/implementation)
- Learn more about [how to create charts](/docs/creating-charts/chart-types)
