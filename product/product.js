const response = await fetch('../goods.json')

if (!response.ok) throw new Error('ашибка зогрузки таворов -как и это сообщение-')

const goods = await response.json()

const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get('id')

const product = goods.find((product) => product.id == productId)

if (!product) {
    document.querySelector('.product-card').innerHTML = 'Товара нету'
}
else {
    document.querySelector('.product-card__title').textContent = product.name
    document.querySelector('.product-card__description').textContent = product.descrition
    console.log(document.querySelector('.product-card__price'), product.price)
    document.querySelector('.product-card__price').textContent = product.price
    document.querySelector('.product-card__image').src = product.image_url
    document.querySelector('.product-card__amount').textContent = product.amount
}