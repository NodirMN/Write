
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => { return response.json() })
    .then(data => { 
        data.forEach(user => {
            document.querySelector('table').innerHTML+= `
            <tr>
                <th>${user.id}</th>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.username}</td>
                <td>${user.website}</td>
                <td><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="show(${user.id})">Batafsil</button></td>
            </tr>
            `
        });
    })

function show(id){
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(response => { return response.json() }).then(userData => {
        console.log(userData)
        document.querySelector('.modal-body').innerHTML = `
        <div class="text-center">${userData.name}</div>
        <a href="mailto:${userData.email}" class="email">${userData.email}</a>
        <a href="tel:${userData.phone}" class="bold">${userData.phone}</a>
        <div class="username">${userData.username}</div>
        <a href="${userData.website}">${userData.website}</a>
        <div class="accordion mt-4" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Address
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="list-group">
                            <li class="list-group-item"><strong>City:</strong> ${userData.address.city}</li>
                            <li class="list-group-item"><strong>GEO:</strong> lat: ${userData.address.geo.lat} lng: ${userData.address.geo.lng}</li>
                            <li class="list-group-item"><strong>Street:</strong> ${userData.address.street}</li>
                            <li class="list-group-item"><strong>suite:</strong> ${userData.address.suite}</li>
                            <li class="list-group-item"><strong>zipcode:</strong> ${userData.address.zipcode}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Company
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="list-group">
                            <li class="list-group-item"><strong>bs:</strong> ${userData.company.bs}</li>
                            <li class="list-group-item"><strong>catchPhrase:</strong> ${userData.company.catchPhrase}</li>
                            <li class="list-group-item"><strong>Name:</strong> ${userData.company.name}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `
    })
}