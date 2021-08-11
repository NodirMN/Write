let obj = new XMLHttpRequest()
let arr = []
let table  = document.querySelector('table')
obj.open('GET','https://jsonplaceholder.typicode.com/posts')

obj.onload = () =>{
arr = JSON.parse(obj.responseText)
arr.forEach(item =>{
    table.innerHTML +=`
    <tr>
    <td>${item.id}</td>
    <td>${item.title}</td>
    <td>${item.body}</td>
    <td>${item.userId}</td>
    </tr>
    `
});
}

obj.send()