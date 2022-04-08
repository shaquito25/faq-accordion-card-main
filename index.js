const svg = document.querySelector("#svg")
const lorem = document.querySelector("#lorem")

const handleclick = () =>{
   if(lorem.style.display === "none"){
        lorem.style.display = "block"
    } else{
        lorem.style.display = "none"
    }
}



svg.addEventListener("click", handleclick)
