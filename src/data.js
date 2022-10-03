// const list = {
//     products: [
//       {
//         id:123,
//         name: 'Nike Slim shirt',
//         slug: 'nike-slim-shirt',
//         category: 'Shirts',
//         uri: require("../assets/images/p1.jpg"),
//         price: 120,
//         countInStock: 10,
//         brand: 'Nike',
//         rating: 4.5,
//         numReviews: 10,
//         description: 'high quality shirt',
//       },
//       {
//         id:234,
//         name: 'Adidas Fit Shirt',
//         slug: 'adidas-fit-shirt',
//         category: 'Shirts',
//         uri: require("../assets/images/p2.jpg"),
//         price: 250,
//         countInStock: 20,
//         brand: 'Adidas',
//         rating: 4.0,
//         numReviews: 10,
//         description: 'high quality product',
//       },
//       {
//         id:345,
//         name: 'Nike Slim Pant',
//         slug: 'nike-slim-pant',
//         category: 'Pants',
//         uri: require("../assets/images/p3.jpg"),
//         price: 25,
//         countInStock: 15,
//         brand: 'Nike',
//         rating: 4.5,
//         numReviews: 14,
//         description: 'high quality product',
//       },
//       {
//         id:456,
//         name: 'Adidas Fit Pant',
//         slug: 'adidas-fit-pant',
//         category: 'Pants',
//         uri: require("../assets/images/p4.jpg"),
//         price: 65,
//         countInStock: 5,
//         brand: 'Puma',
//         rating: 4.5,
//         numReviews: 10,
//         description: 'high quality product',
//       },
//     ],
//   };
//   export default list;

 
import Product from "../models/product";

// export const CATEGORIES = [
//   new Category('c1', 'Italian', '#f5428d'),
//   new Category('c2', 'Quick & Easy', '#f54242'),
//   new Category('c3', 'Hamburgers', '#f5a442'),
//   new Category('c4', 'German', '#f5d142'),
//   new Category('c5', 'Light & Lovely', '#368dff'),
//   new Category('c6', 'Exotic', '#41d95d'),
//   new Category('c7', 'Breakfast', '#9eecff'),
//   new Category('c8', 'Asian', '#b9ffb0'),
//   new Category('c9', 'French', '#ffc7ff'),
//   new Category('c10', 'Summer', '#47fced')
// ];

export const PRODUCTS = [
  new Product(
    "123",
    "Nike Slim shirt",
    "nike-slim-pant",
    "Shirts",
    require("../assets/images/p1.jpg"),
    250,
    10,
    "Nike",
    4.5,
  
    "This is a black cotton Nike t-shirt emblazoned with the “Just Do It” slogan in yellow and “Nike” with the “swoosh” underneath it in pink. The Nike “swoosh” became the trademark of the brand in the early 1970s, while “Just Do It” was first used during a 1988 ad campaign."
  ),

  new Product(
      234,
    "Adidas Fit Shirt",
    "adidas-fit-shirt",
    "Shirts",
    require("../assets/images/p2.jpg"),
    250,
    20,
    "Adidas",
    4.0,
   
    "Give your all at every workout session. This versatile tee will accompany you in the most demanding workouts. The moisture-absorbing AEROREADY fabric keeps your body dry at all times. The adidas logo lends the tee an authentic sporty style."
  ),

  new Product(
    345,
    "Nike Slim Pant",
    "nike-slim-pant",
    "Pants",
    require("../assets/images/p3.jpg"),
    25,
    5,
    "Nike",
    4.5,
 
    "This is a black cotton Nike t-shirt emblazoned with the “Just Do It” slogan in yellow and “Nike” with the “swoosh” underneath it in pink. The Nike “swoosh” became the trademark of the brand in the early 1970s, while “Just Do It” was first used during a 1988 ad campaign."
  ),

  new Product(
     456,
  'Adidas Fit Pant',
  'adidas-fit-pant',
  'Pants',
  require("../assets/images/p4.jpg"),
  65,
  5,
  'Puma',
  4.5,
 
  'Give your all at every workout session. This versatile tee will accompany you in the most demanding workouts. The moisture-absorbing AEROREADY fabric keeps your body dry at all times. The adidas logo lends the tee an authentic sporty style.',
  ),

]

   