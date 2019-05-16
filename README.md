## Setup

Initialize and run the app: `npm install && npm start`

## Existing components

Look through the src/components folder. You should see four different components. We will focus on Home, About and Contact for now. Take a look inside and see that they are basic components that render some text on the page. We want to be able to navigate between those components.

## Router

- Create a file called `Router.js` in the src folder (not in the components folder).
- On the first line import `React` as we always do for custom components: `import React from 'react'`
- On the second line import `Switch` and `Route` from `react-router-dom`
- Create a _stateless_ component called `Router` and make sure you export it as default
- The first thing we are going to do is insert the `Switch` component into our new componenet
like this: `<Switch></Switch>`
- The next thing we are going to do is import `Home` from `components/Home.js` and create our first route. It should
look like this: `<Route exact path="/" component={Home} />`
- Now, go to your `App.js` file an import the following:
  - `import { BrowserRouter } from 'react-router-dom'`
  - `import Router from './Router'`
- Add `<Router />` right below the Header component and replace the words `Fragment` with `BrowserRouter`. Also, remove the `<Home />` component. Reload the page. Nothing happened.. but we set the base for using our router
- Just like you added the `Home` component to the router a couple steps ago, likewise add the `About` and `Contact`, giving them appropriate `paths`
- Navigate to the `/about` and `/contact` routes in your browser. What happens?

## Header

- Go to the `Header.css` file and comment out the `display: none;` value. You should now see the Header component. Let's edit it
- In `Header.js` import the `Link` component: `import { Link } from 'react-router-dom'`
- Now add a link: `<Link to="/">Home</Link>`
- Restructure `Header.js` so that it returns an unordered list (`<ul>`) of links for the following routes:
  - `<Link to="/">Home</Link>`
  - `<Link to="/about">About</Link>`
  - `<Link to="/contact">Contact</Link>`
- Style the list so that it flexs horizontally across the page

## Final thoughts 
- At this point you should have a working app routing to multiple pages
- Add two more custom components in the `components` folder and add them to the router and the header
- Now you're done!
