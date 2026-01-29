const loginButton = document.querySelector("#loginButton")

export const login = function() {
    loginButton.addEventListener("click", function(e){
        const values = []
        e.preventDefault()
        const nameInput = document.querySelector("#nameInput")
        const emailInput = document.querySelector("#emailInput")
        const rolSelect = document.querySelector("#selectRol")
    
        console.log("hi");
        values.push(nameInput.value, emailInput.value, rolSelect.value)
        
        return values
    })
    return values
}

export const data = login()