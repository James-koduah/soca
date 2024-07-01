function cool_scroll_translate(element, offset = 0, instant=false){
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > element.offsetTop - window.innerHeight + offset){
            element.style.transform = 'translate(0px, 0px)'
            element.style.opacity = 1
        }
    })
    if (instant){
        element.style.transform = 'translate(0px, 0px)'
        element.style.opacity = 1
    }
    if (window.scrollY > element.offsetTop - window.innerHeight + offset){
        element.style.transform = 'translate(0px, 0px)'
        element.style.opacity = 1
    }
}


let onscroll_l = document.getElementsByClassName('onscroll_l')
let onscroll_r = document.getElementsByClassName('onscroll_r')
let onscroll_t = document.getElementsByClassName('onscroll_t')
let onscroll_d = document.getElementsByClassName('onscroll_d')
let combinedArray = [
    ...Array.from(onscroll_l),
    ...Array.from(onscroll_r),
    ...Array.from(onscroll_t),
    ...Array.from(onscroll_d)
  ];

for (let item of combinedArray){
    cool_scroll_translate(item, 150)
}



let faq_questions = document.getElementsByClassName('question')
for (let item of faq_questions){
    let main = item.getElementsByClassName('question_main')[0]
    let svg = main.getElementsByTagName('svg')[0]
    let ans = item.getElementsByClassName('question_ans')[0]
    main.addEventListener('click', ()=>{
        if (ans.style.display == '' || ans.style.display == 'none'){
            ans.style.display = 'block'
            item.style.height = '0px'
            svg.style.transform = 'rotate(0deg)'
            item.style.height = ans.clientHeight + main.clientHeight + 20 + 'px'
            setTimeout(() => {    
                ans.style.opacity = 1
                ans.style.transform = 'translate(0px, 0px)'
            }, 100);
        }else{
            svg.style.transform = 'rotate(180deg)'
            ans.style.opacity = 0
            ans.style.transform = 'translate(0px, -50px)'
            item.style.height = item.clientHeight - 40 + 'px'
                item.style.height = main.clientHeight + 'px'
            setTimeout(() => {
                ans.style.display = 'none'
            }, 200);
        }
    })
}








document.getElementById('nav_main').addEventListener('click', ()=>{
    let dropdown = document.getElementById('nav_dropdown')
    let button = document.getElementById('nav_left_button')
    if (dropdown.style.display == '' || dropdown.style.display == 'none'){
        dropdown.style.display = 'flex';
        setTimeout(() => {
        dropdown.style.top = '100%'
        dropdown.style.opacity = '1'
        button.style.border = 'none'
        button.getElementsByTagName('p')[0].style.display = 'block'
        }, 100);
    }else{
        button.style.border = '2px #555 solid'
        button.style.borderLeft = 'none'
        button.style.borderRight = 'none'
        button.getElementsByTagName('p')[0].style.display = 'none'
        dropdown.style.top = '-100%'
        dropdown.style.opacity = '0'
        setTimeout(() => {
            dropdown.style.display = 'none'
        }, 600);
    }
    
})