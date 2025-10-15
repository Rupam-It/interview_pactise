// ============================================
// MONGODB COMPLETE LEARNING ENVIRONMENT
/*
docker network create mongo-network

# MongoDB
docker run -d \
  --name mongodb \
  --network mongo-network \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo:latest

# Mongo Express
docker run -d \
  --name mongo-express \
  --network mongo-network \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD=secret \
  -e ME_CONFIG_MONGODB_SERVER=mongodb \
  -p 8081:8081 \
  mongo-express

# Or simple MongoDB setup
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=pass \
  mongo:latest

# Connection String
mongodb://admin:pass@localhost:27017/admin
  username: admin
  password: pass
*/


// docker exec -it mongodb mongosh -u admin -p pass

// ============================================
// Database: TechStore (E-commerce platform)
// Collections: users, products, orders, reviews, categories

// ============================================
// PART 1: DATABASE SETUP
// ============================================

// Step 1: Create and use database
use TechStore

// ============================================
// PART 2: SAMPLE DATA INSERTION
// ============================================

// Insert Categories
db.categories.insertMany([
  { _id: 1, name: "Electronics", description: "Electronic devices and gadgets", active: true },
  { _id: 2, name: "Computers", description: "Laptops, desktops, and accessories", active: true },
  { _id: 3, name: "Mobile", description: "Smartphones and tablets", active: true },
  { _id: 4, name: "Gaming", description: "Gaming consoles and accessories", active: true },
  { _id: 5, name: "Audio", description: "Headphones, speakers, and audio equipment", active: true }
])

// Insert Users
db.users.insertMany([
  {
    _id: 1,
    username: "john_doe",
    email: "john@email.com",
    password: "hashed_password_1",
    fullName: "John Doe",
    age: 28,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA"
    },
    phone: "+1-555-0101",
    registeredDate: new Date("2023-01-15"),
    lastLogin: new Date("2024-10-01"),
    isActive: true,
    role: "customer",
    wishlist: [101, 105, 110],
    preferences: {
      newsletter: true,
      notifications: true,
      theme: "dark"
    }
  },
  {
    _id: 2,
    username: "jane_smith",
    email: "jane@email.com",
    password: "hashed_password_2",
    fullName: "Jane Smith",
    age: 32,
    address: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "USA"
    },
    phone: "+1-555-0102",
    registeredDate: new Date("2023-03-20"),
    lastLogin: new Date("2024-09-30"),
    isActive: true,
    role: "customer",
    wishlist: [102, 108],
    preferences: {
      newsletter: false,
      notifications: true,
      theme: "light"
    }
  },
  {
    _id: 3,
    username: "bob_wilson",
    email: "bob@email.com",
    password: "hashed_password_3",
    fullName: "Bob Wilson",
    age: 45,
    address: {
      street: "789 Pine Rd",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "USA"
    },
    phone: "+1-555-0103",
    registeredDate: new Date("2022-11-10"),
    lastLogin: new Date("2024-10-02"),
    isActive: true,
    role: "admin",
    wishlist: [],
    preferences: {
      newsletter: true,
      notifications: true,
      theme: "dark"
    }
  },
  {
    _id: 4,
    username: "alice_brown",
    email: "alice@email.com",
    password: "hashed_password_4",
    fullName: "Alice Brown",
    age: 25,
    address: {
      street: "321 Elm St",
      city: "Austin",
      state: "TX",
      zipCode: "73301",
      country: "USA"
    },
    phone: "+1-555-0104",
    registeredDate: new Date("2024-01-05"),
    lastLogin: new Date("2024-09-28"),
    isActive: true,
    role: "customer",
    wishlist: [103, 106, 109, 112],
    preferences: {
      newsletter: true,
      notifications: false,
      theme: "light"
    }
  },
  {
    _id: 5,
    username: "charlie_davis",
    email: "charlie@email.com",
    password: "hashed_password_5",
    fullName: "Charlie Davis",
    age: 35,
    address: {
      street: "654 Maple Dr",
      city: "Seattle",
      state: "WA",
      zipCode: "98101",
      country: "USA"
    },
    phone: "+1-555-0105",
    registeredDate: new Date("2023-06-18"),
    lastLogin: new Date("2024-09-15"),
    isActive: false,
    role: "customer",
    wishlist: [104],
    preferences: {
      newsletter: false,
      notifications: false,
      theme: "dark"
    }
  }
])

// Insert Products
db.products.insertMany([
  {
    _id: 101,
    name: "MacBook Pro 16\"",
    brand: "Apple",
    category: 2,
    price: 2499.99,
    stock: 25,
    description: "Powerful laptop for professionals",
    specs: {
      processor: "M3 Pro",
      ram: "32GB",
      storage: "1TB SSD",
      display: "16-inch Retina"
    },
    tags: ["laptop", "apple", "professional"],
    rating: 4.8,
    releaseDate: new Date("2023-11-01"),
    inStock: true,
    featured: true
  },
  {
    _id: 102,
    name: "Dell XPS 15",
    brand: "Dell",
    category: 2,
    price: 1899.99,
    stock: 18,
    description: "High-performance Windows laptop",
    specs: {
      processor: "Intel Core i9",
      ram: "32GB",
      storage: "1TB SSD",
      display: "15.6-inch 4K OLED"
    },
    tags: ["laptop", "dell", "windows"],
    rating: 4.6,
    releaseDate: new Date("2023-09-15"),
    inStock: true,
    featured: true
  },
  {
    _id: 103,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: 3,
    price: 1199.99,
    stock: 50,
    description: "Latest flagship smartphone",
    specs: {
      processor: "A17 Pro",
      ram: "8GB",
      storage: "256GB",
      display: "6.1-inch Super Retina XDR"
    },
    tags: ["smartphone", "apple", "5G"],
    rating: 4.9,
    releaseDate: new Date("2023-09-22"),
    inStock: true,
    featured: true
  },
  {
    _id: 104,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: 3,
    price: 1299.99,
    stock: 35,
    description: "Premium Android smartphone",
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "512GB",
      display: "6.8-inch Dynamic AMOLED"
    },
    tags: ["smartphone", "samsung", "android", "5G"],
    rating: 4.7,
    releaseDate: new Date("2024-01-17"),
    inStock: true,
    featured: false
  },
  {
    _id: 105,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: 5,
    price: 399.99,
    stock: 42,
    description: "Industry-leading noise cancelling headphones",
    specs: {
      type: "Over-ear",
      wireless: true,
      noiseCancelling: true,
      batteryLife: "30 hours"
    },
    tags: ["headphones", "wireless", "noise-cancelling"],
    rating: 4.8,
    releaseDate: new Date("2023-05-12"),
    inStock: true,
    featured: true
  },
  {
    _id: 106,
    name: "PlayStation 5",
    brand: "Sony",
    category: 4,
    price: 499.99,
    stock: 15,
    description: "Next-gen gaming console",
    specs: {
      processor: "AMD Zen 2",
      ram: "16GB GDDR6",
      storage: "825GB SSD",
      resolution: "8K capable"
    },
    tags: ["console", "gaming", "playstation"],
    rating: 4.9,
    releaseDate: new Date("2020-11-12"),
    inStock: true,
    featured: true
  },
  {
    _id: 107,
    name: "iPad Pro 12.9\"",
    brand: "Apple",
    category: 3,
    price: 1099.99,
    stock: 28,
    description: "Professional tablet with M2 chip",
    specs: {
      processor: "M2",
      ram: "8GB",
      storage: "256GB",
      display: "12.9-inch Liquid Retina XDR"
    },
    tags: ["tablet", "apple", "professional"],
    rating: 4.7,
    releaseDate: new Date("2022-10-18"),
    inStock: true,
    featured: false
  },
  {
    _id: 108,
    name: "Bose QuietComfort 45",
    brand: "Bose",
    category: 5,
    price: 329.99,
    stock: 55,
    description: "Premium wireless headphones",
    specs: {
      type: "Over-ear",
      wireless: true,
      noiseCancelling: true,
      batteryLife: "24 hours"
    },
    tags: ["headphones", "wireless", "bose"],
    rating: 4.6,
    releaseDate: new Date("2023-03-01"),
    inStock: true,
    featured: false
  },
  {
    _id: 109,
    name: "LG 27\" 4K Monitor",
    brand: "LG",
    category: 2,
    price: 449.99,
    stock: 22,
    description: "Ultra HD IPS monitor",
    specs: {
      size: "27-inch",
      resolution: "3840x2160",
      refreshRate: "60Hz",
      panelType: "IPS"
    },
    tags: ["monitor", "4K", "display"],
    rating: 4.5,
    releaseDate: new Date("2023-07-20"),
    inStock: true,
    featured: false
  },
  {
    _id: 110,
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    category: 2,
    price: 99.99,
    stock: 75,
    description: "Advanced wireless mouse",
    specs: {
      type: "Wireless",
      dpi: "8000",
      battery: "70 days",
      connectivity: "Bluetooth/USB"
    },
    tags: ["mouse", "wireless", "productivity"],
    rating: 4.8,
    releaseDate: new Date("2022-05-25"),
    inStock: true,
    featured: false
  },
  {
    _id: 111,
    name: "Nintendo Switch OLED",
    brand: "Nintendo",
    category: 4,
    price: 349.99,
    stock: 40,
    description: "Portable gaming console with OLED screen",
    specs: {
      display: "7-inch OLED",
      storage: "64GB",
      batteryLife: "4.5-9 hours",
      type: "Hybrid"
    },
    tags: ["console", "gaming", "portable", "nintendo"],
    rating: 4.7,
    releaseDate: new Date("2021-10-08"),
    inStock: true,
    featured: false
  },
  {
    _id: 112,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: 3,
    price: 999.99,
    stock: 30,
    description: "AI-powered smartphone",
    specs: {
      processor: "Google Tensor G3",
      ram: "12GB",
      storage: "256GB",
      display: "6.7-inch LTPO OLED"
    },
    tags: ["smartphone", "google", "android", "AI"],
    rating: 4.6,
    releaseDate: new Date("2023-10-04"),
    inStock: true,
    featured: false
  },
  {
    _id: 113,
    name: "Mechanical Keyboard RGB",
    brand: "Corsair",
    category: 2,
    price: 159.99,
    stock: 0,
    description: "Gaming mechanical keyboard",
    specs: {
      switchType: "Cherry MX Red",
      backlighting: "RGB",
      connectivity: "Wired USB-C"
    },
    tags: ["keyboard", "gaming", "mechanical"],
    rating: 4.4,
    releaseDate: new Date("2023-02-14"),
    inStock: false,
    featured: false
  }
])

// Insert Orders
db.orders.insertMany([
  {
    _id: 1001,
    userId: 1,
    orderDate: new Date("2024-09-15"),
    status: "delivered",
    items: [
      { productId: 105, quantity: 1, price: 399.99 },
      { productId: 110, quantity: 2, price: 99.99 }
    ],
    totalAmount: 599.97,
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA"
    },
    paymentMethod: "credit_card",
    deliveredDate: new Date("2024-09-20")
  },
  {
    _id: 1002,
    userId: 2,
    orderDate: new Date("2024-09-18"),
    status: "delivered",
    items: [
      { productId: 103, quantity: 1, price: 1199.99 }
    ],
    totalAmount: 1199.99,
    shippingAddress: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "USA"
    },
    paymentMethod: "paypal",
    deliveredDate: new Date("2024-09-22")
  },
  {
    _id: 1003,
    userId: 1,
    orderDate: new Date("2024-09-25"),
    status: "shipped",
    items: [
      { productId: 101, quantity: 1, price: 2499.99 },
      { productId: 109, quantity: 1, price: 449.99 }
    ],
    totalAmount: 2949.98,
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA"
    },
    paymentMethod: "credit_card",
    shippedDate: new Date("2024-09-26")
  },
  {
    _id: 1004,
    userId: 4,
    orderDate: new Date("2024-09-28"),
    status: "processing",
    items: [
      { productId: 106, quantity: 1, price: 499.99 },
      { productId: 111, quantity: 1, price: 349.99 }
    ],
    totalAmount: 849.98,
    shippingAddress: {
      street: "321 Elm St",
      city: "Austin",
      state: "TX",
      zipCode: "73301",
      country: "USA"
    },
    paymentMethod: "credit_card"
  },
  {
    _id: 1005,
    userId: 2,
    orderDate: new Date("2024-10-01"),
    status: "pending",
    items: [
      { productId: 108, quantity: 1, price: 329.99 },
      { productId: 110, quantity: 1, price: 99.99 }
    ],
    totalAmount: 429.98,
    shippingAddress: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "USA"
    },
    paymentMethod: "debit_card"
  },
  {
    _id: 1006,
    userId: 1,
    orderDate: new Date("2024-08-10"),
    status: "delivered",
    items: [
      { productId: 107, quantity: 1, price: 1099.99 }
    ],
    totalAmount: 1099.99,
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA"
    },
    paymentMethod: "credit_card",
    deliveredDate: new Date("2024-08-15")
  },
  {
    _id: 1007,
    userId: 4,
    orderDate: new Date("2024-07-22"),
    status: "delivered",
    items: [
      { productId: 104, quantity: 1, price: 1299.99 }
    ],
    totalAmount: 1299.99,
    shippingAddress: {
      street: "321 Elm St",
      city: "Austin",
      state: "TX",
      zipCode: "73301",
      country: "USA"
    },
    paymentMethod: "paypal",
    deliveredDate: new Date("2024-07-26")
  },
  {
    _id: 1008,
    userId: 2,
    orderDate: new Date("2024-06-05"),
    status: "cancelled",
    items: [
      { productId: 102, quantity: 1, price: 1899.99 }
    ],
    totalAmount: 1899.99,
    shippingAddress: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "USA"
    },
    paymentMethod: "credit_card",
    cancelledDate: new Date("2024-06-06"),
    cancellationReason: "Changed mind"
  }
])

// Insert Reviews
db.reviews.insertMany([
  {
    _id: 2001,
    productId: 105,
    userId: 1,
    rating: 5,
    title: "Best headphones ever!",
    comment: "Amazing sound quality and noise cancellation. Worth every penny.",
    date: new Date("2024-09-22"),
    helpful: 15,
    verified: true
  },
  {
    _id: 2002,
    productId: 103,
    userId: 2,
    rating: 5,
    title: "Perfect phone",
    comment: "The camera is incredible and battery life is excellent.",
    date: new Date("2024-09-25"),
    helpful: 8,
    verified: true
  },
  {
    _id: 2003,
    productId: 101,
    userId: 1,
    rating: 5,
    title: "Professional powerhouse",
    comment: "Handles everything I throw at it. M3 Pro chip is blazing fast.",
    date: new Date("2024-09-28"),
    helpful: 12,
    verified: false
  },
  {
    _id: 2004,
    productId: 106,
    userId: 4,
    rating: 5,
    title: "Gaming paradise",
    comment: "Graphics are stunning and load times are incredibly fast.",
    date: new Date("2024-09-29"),
    helpful: 20,
    verified: false
  },
  {
    _id: 2005,
    productId: 104,
    userId: 4,
    rating: 4,
    title: "Great phone but expensive",
    comment: "Love the display and S Pen functionality. Price is a bit high though.",
    date: new Date("2024-07-28"),
    helpful: 6,
    verified: true
  },
  {
    _id: 2006,
    productId: 108,
    userId: 2,
    rating: 4,
    title: "Good but not the best",
    comment: "Comfortable and good sound, but Sony edges it out slightly.",
    date: new Date("2024-08-12"),
    helpful: 4,
    verified: false
  },
  {
    _id: 2007,
    productId: 110,
    userId: 1,
    rating: 5,
    title: "Perfect for productivity",
    comment: "Ergonomic design and customizable buttons make work a breeze.",
    date: new Date("2024-09-23"),
    helpful: 9,
    verified: true
  },
  {
    _id: 2008,
    productId: 107,
    userId: 1,
    rating: 4,
    title: "Powerful tablet",
    comment: "Great for creative work but wish it came with the keyboard.",
    date: new Date("2024-08-18"),
    helpful: 7,
    verified: true
  }
])

// ============================================
// PART 3: 120 PRACTICE QUESTIONS
// (Balanced across CREATE, READ, UPDATE, DELETE)
// ============================================

// ===========================================
// SECTION 1: CREATE (INSERT) - Questions 1-30
// ===========================================

// EASY (1-15)
// 1. Insert a new user with username "sarah_jones", email "sarah@email.com", age 29, and role "customer"

// 2. Add a new product: "AirPods Pro" with price 249.99, stock 60, brand "Apple", category 5

// 3. Insert a new category with _id 6, name "Accessories", description "Tech accessories"

// 4. Create a new review for product 109 by user 2, rating 4, title "Great monitor"

// 5. Add a new order for user 3 with one item (product 105, quantity 1), status "pending"

// 6. Insert a new user with _id 6, username "mike_taylor", complete with address in Boston, MA

// 7. Add a new product: "USB-C Cable" with _id 114, price 19.99, category 6, stock 200

// 8. Create a new review for product 101 by user 4, rating 5, comment "Best laptop I've owned"

// 9. Insert a new order for user 5 with totalAmount 299.99, paymentMethod "paypal"

// 10. Add a new category called "Wearables" with appropriate description

// 11. Insert three new users at once using insertMany (make up the details)

// 12. Add two new products at once: a mouse and a keyboard

// 13. Create a new order with 3 different items in the items array

// 14. Insert a review with verified: false for product 112

// 15. Add a new product with embedded specs object containing at least 4 properties

// MODERATE (16-25)
// 16. Insert a user with a wishlist array containing product IDs [101, 103, 105]

// 17. Create a product with tags array ["new", "trending", "limited-edition"]

// 18. Add an order with shippingAddress as an embedded document (all address fields)

// 19. Insert a user with nested preferences object (newsletter, notifications, theme)

// 20. Create a product with release date set to today's date

// 21. Add a review with date field set to current date and helpful count of 0

// 22. Insert an order with items array where each item has productId, quantity, and price

// 23. Create a new user with phone number in international format

// 24. Add a product with inStock: false and stock: 0

// 25. Insert a category with active: false

// HARD (26-30)
// 26. Create an order document that references user 1 and includes 4 items, calculate correct totalAmount

// 27. Insert a user with all possible fields including registeredDate, lastLogin, isActive, role, wishlist, and preferences

// 28. Add a product with complete specs object matching the schema pattern of existing products

// 29. Create multiple reviews (at least 3) for the same product using insertMany

// 30. Insert an order with status "delivered" and include deliveredDate field

// ===========================================
// SECTION 2: READ (FIND) - Questions 31-60
// ===========================================

// EASY (31-45)
// 31. Find all users in the database

// 32. Find the product with _id 105

// 33. Count total number of orders

// 34. Find all products from brand "Apple"

// 35. Display all reviews with rating 5

// 36. Find users with role "customer"

// 37. Find all active categories (active: true)

// 38. Display products with price less than 500

// 39. Find orders with status "delivered"

// 40. Count how many products are in stock (inStock: true)

// 41. Find user with email "alice@email.com"

// 42. Display all products in category 3

// 43. Find reviews that are verified (verified: true)

// 44. Find orders placed by userId 2

// 45. Count total number of users

// MODERATE (46-55)
// 46. Find products with price between 300 and 800

// 47. Display users who live in California (address.state: "CA")

// 48. Find products with the tag "wireless"

// 49. Display orders with totalAmount greater than 1000

// 50. Find users registered after January 1, 2024

// 51. Display products sorted by price (ascending)

// 52. Find the 3 most expensive products

// 53. Display reviews with helpful count greater than 10

// 54. Find users with empty wishlist array

// 55. Display products with stock between 20 and 50

// HARD (56-60)
// 56. Find products that have "SSD" somewhere in specs.storage

// 57. Display users whose wishlist contains product 105

// 58. Find orders placed in September 2024

// 59. Display products with tags array containing both "wireless" AND "noise-cancelling"

// 60. Find users where preferences.theme is "dark" and preferences.newsletter is true

// ===========================================
// SECTION 3: UPDATE - Questions 61-90
// ===========================================

// EASY (61-75)
// 61. Update user with _id 1 to change their age to 29

// 62. Change the price of product 110 to 89.99

// 63. Update order 1005 status from "pending" to "processing"

// 64. Change the stock of product 113 from 0 to 25

// 65. Update user 5's isActive status to true

// 66. Change the rating of product 101 to 4.9

// 67. Update review 2006 to increase helpful count by 1

// 68. Change category 1 description to "Latest electronic devices"

// 69. Update user 2's lastLogin to current date

// 70. Change product 105's featured field to false

// 71. Update order 1004 to add shippedDate with today's date

// 72. Change user 4's phone number to "+1-555-9999"

// 73. Update product 111's stock by decreasing it by 5

// 74. Change the paymentMethod of order 1005 to "credit_card"

// 75. Update category 5 to set active: false

// MODERATE (76-85)
// 76. Add product 107 to user 3's wishlist array

// 77. Remove product 108 from user 2's wishlist array

// 78. Add a new tag "bestseller" to product 103's tags array

// 79. Update user 1's address.city to "Brooklyn"

// 80. Change product 102's specs.ram from "32GB" to "64GB"

// 81. Update all products in category 2 to increase price by 50

// 82. Add a new field "discount" with value 10 to product 105

// 83. Update user 4's preferences.newsletter to false

// 84. Add "express_shipping: true" to order 1003

// 85. Update all users in "Seattle" to add a field "region: Pacific Northwest"

// HARD (86-90)
// 86. Increment the stock of all products with stock less than 20 by 10

// 87. Update all orders with status "pending" to "cancelled" and add cancelledDate

// 88. For all products priced over 1000, apply a 5% discount (multiply price by 0.95)

// 89. Add product 112 to the wishlist of all users who have role "customer" and don't already have it

// 90. Update all reviews for product 105 to increase helpful count by 2

// ===========================================
// SECTION 4: DELETE - Questions 91-105
// ===========================================

// EASY (91-98)
// 91. Delete the user with _id 5

// 92. Remove the product with _id 113

// 93. Delete all reviews with rating less than 3 (there might be none)

// 94. Remove the order with _id 1008

// 95. Delete the category with _id 6 (if you created it earlier)

// 96. Remove all inactive users (isActive: false)

// 97. Delete all products that are out of stock (inStock: false)

// 98. Remove all orders with status "cancelled"

// MODERATE (99-102)
// 99. Delete all reviews that are not verified (verified: false)

// 100. Remove all products with stock equal to 0

// 101. Delete all orders older than 6 months from today

// 102. Remove product 110 from all users' wishlists

// HARD (103-105)
// 103. Delete all reviews for products that no longer exist in the products collection

// 104. Remove all orders where the userId doesn't exist in users collection

// 105. Delete all products from a specific category, then delete that category

// ===========================================
// SECTION 5: ADVANCED QUERIES - Questions 106-120
// (Mix of Aggregation, Complex Operations)
// ===========================================

// 106. Calculate the average price of all products

// 107. Find the total revenue from all delivered orders

// 108. Count how many products each brand has

// 109. Display the average rating for each product that has reviews

// 110. Find the user who has the longest wishlist

// 111. Calculate total stock value (price * stock) for all products

// 112. Find products that have never been reviewed

// 113. Display the most popular product tag (appears most frequently)

// 114. Find users who have placed more than 2 orders

// 115. Calculate the average order value (totalAmount) by payment method

// 116. Find products with above-average price

// 117. Display the total quantity of each product that has been ordered

// 118. Find the best-selling product (highest total quantity ordered)

// 119. Calculate how many orders were placed each month in 2024

// 120. Create a report showing each category's total products, average price, and total stock

// ===========================================
// BONUS CHALLENGES
// ===========================================

// BONUS 1 (UPDATE): Increase all product prices in category 3 by 10%

// BONUS 2 (CREATE): Insert 5 new orders at once with realistic data

// BONUS 3 (UPDATE): Add a "loyaltyPoints" field to all users based on total order amount (1 point per $10)

// BONUS 4 (DELETE): Remove all reviews older than 6 months

// BONUS 5 (UPDATE): For products with stock less than 10, add a field "lowStock: true"

// BONUS 6 (AGGREGATION): Find each user's favorite brand (most ordered products from that brand)

// BONUS 7 (UPDATE): Update all orders' totalAmount by recalculating from items array

// BONUS 8 (CREATE + UPDATE): Insert new product, then immediately add it to 3 random users' wishlists

// BONUS 9 (COMPLEX): Find products in wishlists but never ordered, then increase their featured status

// BONUS 10 (DELETE + CREATE): Delete all cancelled orders, then create summary stats document

// ===========================================
// HELPFUL COMMANDS FOR PRACTICE
// ===========================================

// View all collections
show collections

// Count documents in each collection
db.users.countDocuments()
db.products.countDocuments()
db.orders.countDocuments()
db.reviews.countDocuments()
db.categories.countDocuments()

// Drop a collection (careful!)
db.collectionName.drop()

// Drop entire database (very careful!)
db.dropDatabase()

// Re-run the setup script to reset data
// Just copy and paste the insert commands again

// ===========================================
// QUERY SYNTAX REMINDERS
// ===========================================

/*
CREATE (INSERT)
- insertOne({ ... })
- insertMany([{ ... }, { ... }])

READ (FIND)
- find()
- find({ field: value })
- findOne({ field: value })
- countDocuments()
- find().sort({ field: 1 or -1 })
- find().limit(n)
- find().skip(n)
- distinct("field")

UPDATE
- updateOne({ filter }, { $set: { field: value } })
- updateMany({ filter }, { $set: { field: value } })
- updateOne({ filter }, { $inc: { field: amount } })
- updateOne({ filter }, { $push: { array: value } })
- updateOne({ filter }, { $pull: { array: value } })
- updateOne({ filter }, { $unset: { field: "" } })
- findOneAndUpdate({ filter }, { update }, { returnNewDocument: true })

DELETE
- deleteOne({ filter })
- deleteMany({ filter })

AGGREGATION
- aggregate([
    { $match: { ... } },
    { $group: { _id: "$field", total: { $sum: "$field" } } },
    { $sort: { field: 1 } },
    { $project: { field: 1 } }
  ])

OPERATORS
Comparison: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
Logical: $and, $or, $not, $nor
Element: $exists, $type
Array: $all, $elemMatch, $size
*/

// ===========================================
// TIPS FOR SUCCESS
// ===========================================

/*
