let burger = document.querySelector(".burger_menu") ;
burger.addEventListener("click" , (e) => {
    let main = document.querySelector("section") ;
    main.classList.toggle("blur") ;
    let nav = document.querySelector(".navigation_resp") ;
    nav.classList.toggle("active") ;
})