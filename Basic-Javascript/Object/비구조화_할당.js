const nike_product = {
    name : 'nike hood',
    size : 'XL',
    price : 100000,
    stock : 10,
    category : 'TOP'
}

function getProductInfo(product)   {
    let text = `제품명은 ${product.name}, 사이즈는 ${product.size}, 가격은 ${product.price}, 재고는 ${product.stock}, 종류는 ${product.category} 입니다.`;
    console.log(text);
}

function getFewProductInfo(product)   {
    const {name, price, category} = product
    let text = `제품명은 ${name}, 가격은 ${price}, 종류는 ${category} 입니다.`;
    console.log(text);
}

function getLittleProductInfo({size, stock})   {
    let text = `사이즈는 ${size}, 재고는 ${stock} 입니다.`;
    console.log(text);
}

getProductInfo(nike_product);
getFewProductInfo(nike_product);
getLittleProductInfo(nike_product);
