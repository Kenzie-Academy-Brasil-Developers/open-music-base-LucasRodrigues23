/* Desenvolva sua lógica aqui ... */
function renderCategoryList(list) {
    const form = document.querySelector('#category_list')
    list.forEach((elem) => {
        let li = CategoryCreator(elem)
        form.appendChild(li)
    });
}
renderCategoryList(categories)

function CategoryCreator(elem) {
    let li = document.createElement('li')
    li.classList.add('bt-category')
    li.id = elem

    let p = document.createElement('p')
    p.innerText = elem
   
    li.appendChild(p)
    return li
}


function renderAlbumCards(list) {
    const ul = document.querySelector('#card_list')

    list.forEach((elem) => {
        let li = renderAlbumCardCreator(elem)
        ul.appendChild(li)
    })
}

renderAlbumCards(products)

function renderAlbumCardCreator(elem) {
    let li = document.createElement('li')
    li.classList ='card-box flex flex-col gap-20'
    li.insertAdjacentHTML('afterbegin', `
    <img src="${elem.img}" class="img-card">
    <div class="album-infos flex flex-col gap-20">
    <div class="flex al-center jus-start gap-20">
      <p class="text-3">${elem.band}</p>
      <p class="text-3">${elem.year}</p>
    </div>
    <p class="title-2">${elem.title}</p>
    <div class="flex al-center jus-between">
      <p class="title-2 product-price">R$${elem.price.toFixed(2)}</p>
      <button class="bt-buy text-2">Comprar</button>
    </div>
    </div>
    `)

    return li
}

function renderPriceValue() {
    let input = document.querySelector('#input-range-value')
    let price = document.querySelector('#input_value')

    input.addEventListener('mousemove', (event) => {
        price.innerText = `R$${input.value}`
    })
    
  
}
renderPriceValue()