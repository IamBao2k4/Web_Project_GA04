const apiUrl = "http://localhost:3000/data/products"; // URL của API mà bạn đã tạo trong app.js
const apiImg = "http://localhost:3000/data/images";
let data;
let imgData;

// Hàm load dữ liệu từ API
async function loadProducts() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch data from API");
    }
    const data = await response.json();
    return data;
}

async function loadImg() {
    const response = await fetch(apiImg);
    if (!response.ok) {
        throw new Error("Failed to fetch data from API");
    }
    const data = await response.json();
    return data;
}

const gridContainer = document.getElementById("grid-container");

document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Lấy dữ liệu sản phẩm và ảnh từ API
        data = await loadProducts();
        imgData = await loadImg();
        // Lặp qua từng sản phẩm và tạo phần tử HTML
        data.forEach((item) => {
            const gridItem = document.createElement("div");
            gridItem.id = "grid-item";

            const ItemHover = document.createElement("div");
            ItemHover.id = "item-hover";
            const addToCart = document.createElement("p");
            addToCart.textContent = "Add to Cart";
            const viewDetails = document.createElement("a");
            const viewDetailHref = document.createElement("p");
            viewDetailHref.textContent = "View Details";
            viewDetails.href = `/singleProduct?id=${item.product_id}`;
            viewDetails.appendChild(viewDetailHref);
            ItemHover.appendChild(addToCart);
            ItemHover.appendChild(viewDetails);
            gridItem.appendChild(ItemHover);

            const Container = document.createElement("div");
            Container.id = "item-container";
            const ItemDetails = document.createElement("div");
            ItemDetails.id = "item-details";

            // Tìm ảnh từ mảng imgData dựa trên product_id
            const productImg = imgData.find(
                (image) => image.product_id === item.product_id
            );

            // Nếu tìm thấy ảnh, sử dụng URL ảnh
            const Img = document.createElement("img");
            Img.src = productImg
                ? productImg.image_path
                : "/img/furniture-default.jpg"; // Dự phòng với ảnh mặc định nếu không tìm thấy ảnh

            const Name = document.createElement("h1");
            Name.textContent = item.name; // Tên sản phẩm
            const Price = document.createElement("h2");
            Price.textContent = "$" + item.price; // Giá sản phẩm
            const Description = document.createElement("p");
            Description.textContent = item.description; // Mô tả sản phẩm

            ItemDetails.appendChild(Name);
            ItemDetails.appendChild(Description);
            ItemDetails.appendChild(Price);
            Container.appendChild(Img);
            Container.appendChild(ItemDetails);
            gridItem.appendChild(Container);

            gridContainer.appendChild(gridItem);
        });
    } catch (error) {
        console.error("Error loading products: ", error);
    }
});
