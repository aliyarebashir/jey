let planButton =document.querySelectorAll(".button")
let modal=document.querySelector(".modal")
let backdrop=document.querySelector('.backdrop')
let negativeButton=document.querySelector(".no_button")
function closeModal(){
    backdrop.style.display="none";
    modal.style.display="none";
}

for (let i =0; i <planButton.length; i++)
planButton[i].addEventListener("click"  ,function(){
    backdrop.style.display="block";
    modal.style.display="block";
})

backdrop.addEventListener('click',closeModal)
negativeButton.addEventListener('click',closeModal)