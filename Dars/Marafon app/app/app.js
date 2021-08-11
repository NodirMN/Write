//lenta
let viewRow = document.querySelector('.view__list .view__row')

//navigator
let links = document.querySelectorAll('.view__nav a')

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault()
        document.querySelector('.view__nav a.active').classList.remove('active')
        link.classList.add('active')

    })

})
//categoriya filtirlash
let cats = document.querySelectorAll('.view__category--list button')

cats.forEach(cat => {
            cat.addEventListener('click', function () {
                let filterValue = cat.getAttribute('data-filter')
                document.querySelector('.view__category--list button.active').classList.remove('active')
                cat.classList.add('active')
                let filteredProducts = products.filter(product => {
                    return product.category.toLowerCase() ==
                        filterValue.toLowerCase()
                })
                if (filterValue == 'all')
                    show(products)
                else
                    show(filteredProducts);
            })
            })


            //mahsulotlar
            let products = [{
                    title: 'Pancake',
                    time: '>60 mins',
                    author: 'Calum Lewis',
                    author_img: 'human1png.png',
                    img: 'Cace1.jpg',
                    category: 'food',
                    id: 1

                },
                {
                    title: 'FruitMix',
                    time: '>60 mins',
                    author: 'Eilif Sonas',
                    author_img: 'human2.png',
                    img: 'Cace1.jpg',
                    category: 'drink',
                    id: 2

                },
                {
                    title: 'Maxito',
                    time: '>60 mins',
                    author: 'Elena Shelby',
                    author_img: 'human3.png',
                    img: 'Cace1.jpg',
                    category: 'drink',
                    id: 3

                },
                {
                    title: 'Pancake',
                    time: '>60 mins',
                    author: 'John Priyadi',
                    author_img: 'human4.png',
                    img: 'Cace1.jpg',
                    category: 'food',
                    id: 4

                },
            ]

            function show(arr) {
                viewRow.innerHTML = ''
                arr.forEach(item => {
                    viewRow.innerHTML += `<div class="col-6">
                            <div class="product__box">
                                <div class="product__author">
                                    <div class="product__author--img" style="background-image: url(img/${item.author_img});">
                                    </div>
                                    <div class="products__author--title">${item.auther}
                                    </div>
                                </div>
                                <div class="product__img" style="background-image: url(img/${item.img});">
                                    <button class="product__fav"><svg width="20" height="20" viewBox="0 0 20 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9.80076 17.3781C7.99192 16.2649 6.30918 14.9547 4.78266 13.471C3.70945 12.4025 2.89242 11.0998 2.39417 9.66282C1.49754 6.87525 2.54486 3.68402 5.47585 2.7396C7.01626 2.2437 8.69863 2.52713 9.99666 3.50123C11.2952 2.52831 12.977 2.24498 14.5175 2.7396C17.4485 3.68402 18.5033 6.87525 17.6067 9.66282C17.1084 11.0998 16.2914 12.4025 15.2182 13.471C13.6917 14.9547 12.0089 16.2649 10.2001 17.3781L10.0042 17.5L9.80076 17.3781Z"
                                                stroke="white" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <a href="#title1" class="product__link">${item.title}</a>
                                <div class="product__bottom">
                                    <div class="product__cat">
                                       ${item.category}
                                    </div>
                                    <div class="product__time">
                                        ${item.title}
                                    </div>
                                </div>
                            </div>
                        </div>`
                })
            }
            show(products);