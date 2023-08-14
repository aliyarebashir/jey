let planButton =document.querySelectorAll(".button")
let modal=document.querySelector(".modal")
let backdrop=document.querySelector('.backdrop')
let negativeButton=document.querySelector(".no_button")
let toggleButton=document.querySelector(".toggle-button")
let mobileNav=document.querySelector(".mobile_header_nav")
function closeModal(){
    backdrop.style.display="none";
    modal.style.display="none";
}

for (let i =0; i <planButton.length; i++)
planButton[i].addEventListener("click"  ,function(){
    backdrop.style.display="block";
    modal.style.display="block";
})

backdrop.addEventListener('click',function(){
    mobileNav.style.display="none"
    closeModal()
})
if(negativeButton){negativeButton.addEventListener('click',closeModal)}
toggleButton.addEventListener("click",function(){
    backdrop.style.display="block";
    mobileNav.style.display="block"

})
