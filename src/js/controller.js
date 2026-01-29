// import * as State from "./state.js"
import * as Model from "./model.js"
import * as View from "./view.js"

// Auth
// const loginButton = document.querySelector("#loginButton")

loginButton.addEventListener("click",async function(e){
    alert()
    e.preventDefault()
    
    // const nameInput = document.querySelector("#nameInput")
    // const emailInput = document.querySelector("#emailInput")
    // const rolSelect = document.querySelector("#selectRol")

    const info = View.data 
    console.log(info);
    
    const users = await Model.getData("users")
    // const found = users.find(user=> emailInput.value === user.email && nameInput.value === user.name && rolSelect.value === user.rol )
    // console.log(found);

    // if(!found) return

    if(rolSelect.value === "admin"){
        await Model.putData("state",State.state.authAdmin = true)
        console.log("hi");
        
        // window.location.href = "admin.html"
    }
    
    if(rolSelect.value === "user"){
        sessionStorage.setItem("isUser", "yes")
        State.state.authUser = true
        // window.location.href = "index.html"
    }

})
