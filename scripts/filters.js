function filterCategorys() {
    const ul = document.querySelector('#card_list')
    const buttons = document.querySelectorAll('.bt-category')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            ul.innerHTML =''
            const filter = button.innerText

            if (filter === 'Todos') {
                renderAlbumCards(products)
            }

            const filteredCategory = categorysFilter(filter)
        
            renderAlbumCards(filteredCategory)
        })
    })

}

function categorysFilter(filter) {
const categoryFiltered = products.filter(product => product.category.includes(filter))
  return categoryFiltered
}

filterCategorys()

function filterPrice() {
    const ul = document.querySelector('#card_list')
    const input = document.querySelector('#input-range-value')

    input.addEventListener('mousemove', () => {
        ul.innerHTML=''
        const filter = input.value
        const filteredPrice = priceFiltered(filter)

        renderAlbumCards(filteredPrice)
    })
}
filterPrice()
function priceFiltered(filter) {
    const filtered = products.filter(product => product.price <= filter)
    return filtered
}
