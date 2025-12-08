class Product {
    constructor(id, name, price, description, stock, category, imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.category = category;
        this.imageUrl = imageUrl;
    }
}
module.exports = Product;
