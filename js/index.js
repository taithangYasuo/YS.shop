let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll('.slide');

hideAllSide = () => {
    slides.forEach(e =>{
        e.classList.remove('active');
    })
}

showSlide = () =>{
    hideAllSide()
    slides[slide_index].classList.add('active');
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 :slide_index + 1;

prevSlide = () => slide_index = slide_index -1 < 0 ? slides.length -1 : slide_index -1;

document.querySelector('.slider').addEventListener('mouseover',  () => slide_play = false );


document.querySelector('.slider').addEventListener('mouseleave',  () => slide_play = true );

showSlide()

// slide controll
document.querySelector('.slide-next').addEventListener('click', () => {
    prevSlide()
    showSlide()
})


// setInterval(() => {
//     if(!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'Chị Sáu Đấm Bốc',
        image1: './images/vi-1.png',
        image2: './images/vi-2.png',
        old_price: '1.000.000VND',
        curr_price: '900.000VND'
    }, {
        name: 'Chị Sáu Đấm Bốc',
        image1: './images/vi-1.png',
        image2: './images/vi-2.png',
        old_price: '1.000.000VND',
        curr_price: '900.000VND'
    }, {
        name: 'Chị Sáu Đấm Bốc',
        image1: './images/vi-1.png',
        image2: './images/vi-2.png',
        old_price: '1.000.000VND',
        curr_price: '900.000VND'
    },

   
]

let product_list = document.querySelector('#latest-products');
let best_product_list = document.querySelector('#best-products');

products.forEach(e =>{
    let prod = `
    <div class="col-3 col-md-6 col-sm-12">
        <div class="product-card">
            <div class="product-card-img">
                <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                        </div>  
                            <div class="product-card-info">
                                <div class="product-btn">
                                    <button class="btn-flat btn-hover btn-shop-now">
                                    Mua ngay
                                    </button>
                                    <button class="btn-flat btn-hover btn-cart-add">
                                        <i class='bx bx-cart-add'></i>
                                    </button>
                                    <button class="btn-flat btn-hover btn-cart-add">
                                        <i class='bx bx-heart' ></i>
                                    </button>
                                </div>
                                <div class="product-card-name">
                                ${e.name}
                                </div>
                                <div class="product-card-price">
                                    <span><del>${e.old_price}</del></span> <br>
                                    <span class="curr-price">${e.curr_price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
    `
    product_list.insertAdjacentHTML("beforeend" , prod);
    best_product_list.insertAdjacentHTML("afterbegin" , prod);
});
