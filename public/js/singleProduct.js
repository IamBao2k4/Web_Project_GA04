const currentUrl = window.location.href;
var queryString = window.location.search;

// Sử dụng URLSearchParams để phân tích cú pháp chuỗi truy vấn
var urlParams = new URLSearchParams(queryString);

// Lấy giá trị của tham số 'id'
var id = urlParams.get('id');

// const urlParams = window.location.search; // Lấy tham số truy vấn từ URL
// const productId = urlParams.get("id"); // Lấy productId từ URL
const apiImg = "http://localhost:3000/data/images";
const apiProduct = `http://localhost:3000/data/products`;
let imgData;
let productData;

async function loadImg() {
    const response = await fetch(apiImg);
    if (!response.ok) {
        throw new Error("Failed to fetch image data from API");
    }
    const data = await response.json();
    imgData = data;
}

async function getProductDetail() {
    try {
        console.log(apiProduct);
        const response = await fetch(apiProduct);
        const productData = await response.json();
        let cur_product = productData.find((product) => product.product_id == id);

        // Cập nhật thông tin sản phẩm
        document.querySelector(".name-product").textContent = cur_product.name;
        document.querySelector(".title").textContent = cur_product.name;
        document.querySelector(".desc").textContent = cur_product.description;
        document.querySelector(
            ".price"
        ).textContent = `Rs. ${cur_product.price}`;

        // Tìm ảnh sản phẩm và cập nhật
        const productImg = imgData.find(
            (image) => image.product_id == id
        );
        const imgSrc = productImg
            ? productImg.image_path
            : "/img/furniture-default.jpg"; // Dự phòng ảnh mặc định nếu không có
        document.querySelector(".main-photo").src = imgSrc;
        document.querySelectorAll(".picture-product img").forEach((pic) => {
            pic.src = imgSrc;
        });
    } catch (error) {
        console.error("Error fetching product details: ", error);
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    await loadImg(); // Tải dữ liệu ảnh
    await getProductDetail(); // Tải thông tin sản phẩm
});
