# Next.js Frontend Exploration

## 📁 `(auth)` Folder
Files inside the `(auth)` directory are ignored by Next.js during routing. They're typically used for logic that doesn't need to be exposed as a page.

---

## 🧠 Understanding `"use client"`

In Next.js (App Router), some features are exclusive to the client side, such as:

- `useState`
- `useEffect`
- Event handlers like `onClick`, `onChange`, etc.

Since these are not supported during server-side rendering, we must explicitly tell Next.js that a component should be rendered on the client. This is done by adding the following directive at the very top of your component file:

```js
"use client";


## for writing backend create a folder api inside app