function ToggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // if (html.classList.contains("light")) {
    // html.classList.remove("light")        
    // } else {
    //     html.classList.add("light")
    // }

    const img = document.querySelector("header img")
    
    if (html.classList.contains("light")) {
       img.setAttribute("src" , "./assets/profile.png")
       img.setAttribute("alt","Imagen de perfil light") 
    } else {
        img.setAttribute("src" , "./assets/Avatar.png")
    }
}