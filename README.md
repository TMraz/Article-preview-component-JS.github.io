# Frontend Mentor - Article preview component solution

This is a solution to the Article preview component challenge on Frontend Mentor ![Article preview component challenge on Frontend Mentor](./design/desktop-preview.jpg) Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

[Desktop version](./design/desktop-design.jpg)
[Mobile version](./design/mobile-design.jpg)

### Links

- [Solution URL](https://github.com/TMraz/Article-preview-component-JS.github.io)

- [Live Site URL](https://tmraz.github.io/Article-preview-component-JS.github.io/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](./js/script.js) - JS library
- [Styled Components](./css/main.css) - For Desktop style
- [Styled Components](./css/mobile.css) - For Mobile style

### What I learned

Snippets, see below:

MediaQuery for jQuery:

```js
    // Create a media condition that targets viewports at least 700px wide
    const mediaQuery = window.matchMedia('(min-width: 700px)')

    // Check if the media query is true
    //jQuery for desktop screen
    if (mediaQuery.matches) {
    // Then trigger following function
        $('.active-footer').addClass('hide');

        $('.share').click(function () {
            $(this).toggleClass('active'); 
        });

    }
    //jQuery for mobile screen
    else {
        $('.active-footer').addClass('hide');

        $('.share').click(function () {
            $(this).toggleClass('active');
        });
    }

```

