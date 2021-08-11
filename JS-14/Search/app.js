let search = document.getElementById('search')
let res = document.getElementById('res')
let humans = ['Ali', 'Begzod', 'Sherzod', 'Lola', 'Anvar']
res.textContent = humans

function show(arr) {
    let list = '<ul>'
    arr.forEach(a => {
        list += `<li>${a}</li>`
    });
    list += '</ul>'
    res.innerHTML = list
}
show(humans)
search.addEventListener('input', function () {
    let filteredHumans = humans.filter(humans => {
        return humans.toLowerCase().indexOf(search.value.toLowerCase()) !== -1
    })
    show(filteredHumans)
})