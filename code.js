const btn = document.querySelector("button")

// btn.addEventListener("click", () => {
    const jsonLoad = () =>{
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send() 
        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
            console.log(data);
            document.querySelector(".name").innerHTML = data.name
            document.querySelector(".age").innerHTML = data.age
            document.querySelector(".surname").innerHTML = data.surname
            document.querySelector(".num").innerHTML = data.num
        })
}
// })

jsonLoad();