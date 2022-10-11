const renderListProducts = function (arrProducts) {
    let htmlContent = "";
    for (let i = 0; i < arrProducts.length; i++) {
        let product = arrProducts[i];
        htmlContent += `
            <div class="card col-lg-4" style="cursor:pointer;">
                <img class="card-img" src="${product.image}" alt="Card image">
                <div class="product__content">
                  <div class="product__info">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.shortDescription}</p>
                  </div>
                  <div class="product__action">
                    <button>Buy now</button>
                    <span>${product.price}$</span>
                  </div>
                </div>
            </div>
        `;
    }

    document.querySelector("#productFeature .row").innerHTML = htmlContent;
}

const renderCarousel = function (arrProducts) {
    let htmlContent = "";
    for (let i = 0; i < arrProducts.length; i++) {
        let product = arrProducts[i];
        let active = i === 0 ? "active" : "";
        htmlContent += `
        <div class="carousel-item row ${active}">
            <img src="${product.image}">
            <div class="carousel__content">
              <h5 class="productName">${product.name}</h5>
              <p class="productDescription">${product.shortDescription}</p>
              <button class="btn btn-buy">Buy now</button>
            </div>
        </div>
        `;
    }
    document.querySelector("#carouselExampleIndicators .carousel-inner").innerHTML = htmlContent;
}

const allProducts = async function () {
    try {
        let res = await axios({
            url: "https://shop.cyberlearn.vn/api/Product",
            method: "GET",
            responeType: "json"
        });
        // console.log(res);
        return res.data.content;
    } catch (err) {
        return [];
    }
}
const promise = allProducts();
promise.then(data => {
    renderListProducts(data);
    renderCarousel(data);
}).catch(err => alert(err));
