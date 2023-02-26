# Frontend Mentor - Pomodoro app solution

This is a solution to the [Pomodoro app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

A pomodoro app. Times for pomodoros and breaks as well as the color and font themes can be customized in the settings. A coloured arc around the timer shrinks while the time is counted down. At 0:00 a tibetan bell rings.

### The challenge

Users should be able to:

- Set a pomodoro timer and short & long break timers
- Customize how long each timer runs for
- See a circular progress bar that updates every minute and represents how far through their timer they are
- Customize the appearance of the app with the ability to set preferences for colors and fonts

### Screenshot

![Screenshot](./pomodoro_app.png)

### Links

- Solution URL: [GitHub repository](https://github.com/StephanUllmann/pomodoro-app)
- Live Site URL: [pomodoro-su.netlify.app](https://pomodoro-su.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- JavaScript

### What I learned

- labels as customized (hidden) radio buttons
- implementing SVGs as icont in the markup to minimize HTTP requests
- manipulating SVGs by JavaScript to animate the timer arc ([see resources](#useful-resources))
- increasing accessability by making elements tabbable
- using design files (figma) as template

### Useful resources

- [SVGs](https://www.mediaevent.de/tutorial/svg-circle-arc.html) - (German) This page helped me to see how SVGs are built up and can be used.
- [How SVG arcs can be calculated and alterated](https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle) - A great thread on stackoverflow on displaying and manipulating SVG circles via JavaScript.

## Author

Stephan Ullmann

- Frontend Mentor - [@StephanUllmann](https://www.frontendmentor.io/profile/StephanUllmann)

## Acknowledgments

[Tibetan Bowl sound from inoshirodesign](https://pixabay.com/sound-effects/singing-bowl-strike-sound-84682/)
