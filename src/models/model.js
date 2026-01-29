import * as Config from "./config.js"

const baseUrl = Config.baseUrl  

export const getData = async function(endpoint){
    try{
        const response = await fetch(`${baseUrl}/${endpoint}`)
        const data = await response.json()

        if(!response.ok) throw new Error(`${data.message} and ${data.status}`)
            
        return data
        // return response.json()
    }catch(err){
        alert(err)
    }
}

export const putData = async function(endpoint,data) {
    try{
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        })

        if(!response.ok) throw new Error(`${data.message} and ${data.status}`)
            
        return true
        // return response.json()
    }catch(err){
        alert(err)
    }   
}

