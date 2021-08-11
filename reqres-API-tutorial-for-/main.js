let obj = new XMLHttpRequest()
let arr = []
let list = document.querySelector('.list')
obj.open('GET', 'https://reqres.in/api/users')

obj.onload = () => {
    arr = JSON.parse(obj.responseText).data
    console.log(arr);
    arr.forEach(element => {
        
        list.innerHTML += `    
        <li class="card-container">      
        <div class="name-container"> 
        <span class="firstName">${element.first_name}</span>
        <span class="lastName">${element.last_name}</span> 
        </div> 
        <p class="email">${element.email}</p>  
        <div class="image-container">
        <img class="round" src="${element.avatar}">    
        </div>
        </li>
        
    `
    });
}

obj.send()