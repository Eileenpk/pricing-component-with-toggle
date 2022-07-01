# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size

### Screenshot

![screen shot of full screen webpage](https://github.com/Eileenpk/order-summary-component/blob/main/images/Screenshot-full-website.png)
![screen shot of mobile webpage](https://github.com/Eileenpk/order-summary-component/blob/main/images/Screenshot-mobile.png)
### Links

- Solution URL: [GitHub](https://github.com/Eileenpk/pricing-component-with-toggle)
- Live Site URL: [live site](https://eileenpk.github.io/pricing-component-with-toggle/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

This was a good way to have a class added to only one element at a time when its clicked.

```js
const selected = document.querySelectorAll('section')
// adds selected class to each clicked element
selected.forEach(el => {
    el.addEventListener('click', () => {
        // removes selected class on all other elements so that only one is selected at a time.
        selected.forEach(el => {
            el.classList.remove('selected')
        })
        el.classList.add('selected')
    })
})

```

## Author

- Frontend Mentor - [@Eileenpk](https://www.frontendmentor.io/profile/Eileenpk)
