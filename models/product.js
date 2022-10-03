class Product {
  constructor(
    id,
    name,
    slug,
    category,
    uri,
    price,
    countInStock,
    brand,
    rating,
     
    description
  ) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.category = category;
    this.uri = uri;
    this.price = price;
    this.countInStock = countInStock;
    this.brand = brand;
    this.rating = rating;
    this.description = description;
  }
}

export default Product;
