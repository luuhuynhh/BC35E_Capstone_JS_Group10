window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');

    //call api load lên giao diện
    const getProductById = async (id) => {
        try {
            let res = await axios({
                url: `https://shop.cyberlearn.vn//api/Product/getbyid?id=${id}`,
                method: "GET",
                responeType: "json"
            });
            return res.data.content;
        } catch (err) {
            console.log(err);
        }
    }

    const renderSizes = (sizeAvailable) => {
        let html = `<div class="sizeBtns">`;
        for (const i in sizeAvailable) {
            html += `<button>${sizeAvailable[i]}</button>`
        }
        html += "</div>";
        return html;
    }

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
                        <a href="./detail.html?id=${product.id}" class="btn btn-buy">Buy now</a>
                        <span>${product.price}$</span>
                      </div>
                    </div>
                </div>
            `;
        }

        document.querySelector("#productFeature .row").innerHTML = htmlContent;
    }

    const renderProductDetail = async () => {
        const product = await getProductById(myParam);
        console.log(product);
        if (product) {
            let html = `
            <div class="left col-lg-4">
                <img  src="${product.image}" alt="">
            </div>
            <div class="right col-lg-8">
                <h3>${product.name}</h3>
                <p class="describe">${product.description}</p>
                <div class="size">
                <div class="label">Available size</div>
                ${renderSizes(product.size)}
                </div>
                <div class="price">${product.price}$</div>
                <div class="count-group">
                <button class="inc btn">+</button>
                <div class="count">0</div>
                <button class="desc btn">-</button>
                </div>
                <button class="addToCart">Add To Cart</button>
            </div>
            `;
            document.querySelector("#productDetail").innerHTML = html;
            renderListProducts(product.relatedProducts);
        }
    }
    renderProductDetail();
}

