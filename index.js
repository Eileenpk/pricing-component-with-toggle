
const selected = document.querySelectorAll('section')
const basic = document.querySelector('.pricing-basic')
const professional = document.querySelector('.pricing-professional')
const master = document.querySelector('.pricing-master')
let clicked = false

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

// add eventListener for clicks on toggle. 
document.querySelector('.slider').addEventListener('click', () => {
    // Changes the Html for basic, professional, and master
    if(!clicked) {
        basic.innerHTML = `<p>&dollar;19.99</p>`
        professional.innerHTML =`<p>&dollar;24.99</p>`
        master.innerHTML = `<p>&dollar;39.99</p>`
        clicked = true
    } else {
        clicked = false
        basic.innerHTML = `<p>&dollar;199.99</p>`
        professional.innerHTML =`<p>&dollar;249.99</p>`
        master.innerHTML = `<p>&dollar;399.99</p>` 
    }
})

