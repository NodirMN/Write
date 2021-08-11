let users = []


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {return response.json()})
.then(data => {
    users =data 
    let count =1
    users.forEach(user => {
        document.querySelector('table').innerHTML+=
        ` <tr>
            <th scope="row">${count}</th>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.username}</td>
            <td>${user.website}</td>
        </tr>`
        count++
        
    });
})