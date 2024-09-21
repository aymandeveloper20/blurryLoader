# Blurry Counter

## Overview
Blurry Counter is a web application that displays a counter with a blurry effect. The project combines HTML, CSS, and JavaScript to create a visually appealing and interactive experience.

## HTML Structure
The HTML structure of the project consists of a single `index.html` file, which includes:

- A `<head>` section with:
  - A `<title>` element
  - A `<meta>` element for character encoding
  - A `<link>` element for linking an external stylesheet (`style.css`)

- A `<body>` section containing:
  - An `<h2>` element with an ID of "counter" to display the counter value
  - A `<div>` element with an ID of "blurry" and a class of "blur" to apply the blurry effect
  - A `<script>` element to link the external JavaScript file (`index.js`)

## CSS Styles
The CSS styles are defined in the `style.css` file and are used to customize the appearance of the application. The styles include:

- **Font family:** `'Space Grotesk', sans-serif`
- **Background image:** `bg.jpg`
- **Text color:** `#fff`
- **Layout settings:**
  - `display: flex`
  - `align-items: center`
  - `justify-content: center`
  - `overflow: hidden`
  - `font-size: 5rem`
  - `margin: 0`
  - `padding: 0`
- **Blurry effect:** The `.blur` class with `backdrop-filter: blur(10px)` and animation using `@keyframes` rule
- **Normal effect:** The `.normal` class with `backdrop-filter: blur(0px)`

## JavaScript Functionality
The JavaScript code is defined in the `index.js` file and is used to add interactivity to the application. The code:

- Retrieves the `<h2>` element with an ID of "counter" and the `<div>` element with an ID of "blurry" using `document.getElementById`
- Uses a `setInterval` function to increment the counter value every 20 milliseconds and update the `<h2>` element's `innerHTML` property
- Uses a `setTimeout` function to remove the blurry effect after 50 seconds

## Blurry Effect
The blurry effect is achieved using the `backdrop-filter` CSS property, which is applied to the `<div>` element with an ID of "blurry" using the `.blur` class. The effect is animated using the `@keyframes` rule, which defines the animation sequence for the blurry effect. The animation is triggered by adding the `.blur` class to the `<div>` element with an ID of "blurry".
