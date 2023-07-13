const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=>highlightCups(idx))
})

function highlightCups(idx){
    // adding or removing 'full' class for small cups
    if(smallCups[idx].classList.contains('full')&&!smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }
    smallCups.forEach((cup, id)=>{
        if(id <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    // getting the cups that are clicked
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // getting all the cups
    const totalCups = smallCups.length

    // condition for filling big cup
    if(fullCups===0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totalCups*330}px`
        percentage.innerText = `${fullCups/totalCups*100}%`
    }

    // conditions for showing remaining percentage
    if (fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2-(250*fullCups/1000)}L`
    }
}