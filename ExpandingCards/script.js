const panels = document.querySelectorAll('.panel')
console.log(panels[2])

panels.forEach((panel)=> {
    console.log(panel)

    panel.addEventListener('mouseover', () =>{
        // you can add 'click' instead of click
        console.log(123)
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}