const container = document.querySelector('.card-list')

container.innerHTML = ''

const productTemplate = (product) => `
<div class="card">
            <img  class="card-img" src="${product.image_url}" alt="">
            <div class="card-content">
                <div class="card-content-description">
                    <h2 class="card-price">${product.price}</h2>
                    <p class="card-title">-${product.name}</p>
                </div>
                <button class="buy-button">buy</button>
            </div>    
        </div>
`

const response = await fetch ('./goods.json')

if  (!response.ok) throm new Error('ашибка зогрузки таворов -как и это сообщение-')
 
const goods = await response.json()

goods.forEach(product => {
    container.insertAdjacentElement('beforeend', productTemplate(product))
});


