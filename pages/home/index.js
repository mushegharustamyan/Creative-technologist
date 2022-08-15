function activateBurgerMenu () {
    let burger = document.querySelector(".burger_menu") ;
    burger.addEventListener("click" , (e) => {
        let main = document.querySelectorAll(".section") ;
        main.forEach(elem => {
            elem.classList.toggle("blur") ;
        })
        let nav = document.querySelector(".navigation_resp") ;
        nav.classList.toggle("active") ;
    })
}

activateBurgerMenu() ;

