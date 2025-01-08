# Assignment: Render HTML on Route `/`

## Overview

Your task is to modify the existing code in `app.get("/")` to render an HTML file instead of sending a plain text response. This assignment will help you understand how to serve static files and HTML content in an Express.js application.

---

## ## Assignment

Replace the res.send("this is your assignment") with code to render an HTML file.


## Current Code

In `backend/index.js`, you currently have:

```javascript
app.get("/", (req, res) => {
  // send static frontend here
  res.send("this is your assignment");
});





