const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click', function (e) {
        const x = e.clientX       //have a position of a click on the entire page on x-axis
        const y = e.clientY       //have a position of a click on the entire page on y-axis


        const buttonTop = e.target.offsetTop         //position of the top bar of the button on the page 
        const buttonLeft = e.target.offsetLeft       //position of the left bar of the button on the page 

        const xInside = x - buttonLeft    //position inside button on x-axis
        const yInside = y - buttonTop     //position inside button on y-axis

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'        //styling pattern in javascript
        circle.style.left = xInside + 'px'

        this.appendChild(circle)             //arrow functions are not allowed with THIS keyword

        setTimeout(() => circle.remove(), 500)      
    })
})