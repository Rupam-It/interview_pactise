-- =====================================================
-- COMPLETE E-COMMERCE DATABASE SETUP
-- =====================================================

-- Drop database if exists and create fresh
DROP DATABASE IF EXISTS ecommerce_master;
CREATE DATABASE ecommerce_master;
USE ecommerce_master;

-- =====================================================
-- TABLE CREATION
-- =====================================================

-- Customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    city VARCHAR(50),
    country VARCHAR(50),
    registration_date DATE,
    loyalty_points INT DEFAULT 0
);

-- Categories table
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL,
    parent_category_id INT,
    FOREIGN KEY (parent_category_id) REFERENCES categories(category_id)
);

-- Products table
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    category_id INT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    supplier_id INT,
    created_date DATE,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    order_date DATETIME,
    total_amount DECIMAL(10, 2),
    status VARCHAR(20),
    shipping_address VARCHAR(200),
    payment_method VARCHAR(30),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Order Items table
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT,
    unit_price DECIMAL(10, 2),
    discount_percentage DECIMAL(5, 2) DEFAULT 0,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Suppliers table
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(100) NOT NULL,
    contact_person VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    country VARCHAR(50),
    rating DECIMAL(3, 2)
);

-- Reviews table
CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    customer_id INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_text TEXT,
    review_date DATE,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Employees table
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department VARCHAR(50),
    position VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);

-- =====================================================
-- DATA INSERTION
-- =====================================================

-- Insert Suppliers
INSERT INTO suppliers (supplier_name, contact_person, email, phone, country, rating) VALUES
('TechWorld Inc', 'John Smith', 'john@techworld.com', '555-0101', 'USA', 4.5),
('Global Electronics', 'Maria Garcia', 'maria@globalelec.com', '555-0102', 'China', 4.2),
('Fashion Hub', 'Ahmed Ali', 'ahmed@fashionhub.com', '555-0103', 'India', 4.7),
('Home Essentials', 'Sarah Johnson', 'sarah@homeess.com', '555-0104', 'Germany', 4.3),
('Sports Pro', 'Carlos Rodriguez', 'carlos@sportspro.com', '555-0105', 'Spain', 4.6);

-- Insert Categories
INSERT INTO categories (category_name, parent_category_id) VALUES
('Electronics', NULL),
('Clothing', NULL),
('Home & Garden', NULL),
('Sports', NULL),
('Books', NULL),
('Smartphones', 1),
('Laptops', 1),
('Mens Wear', 2),
('Womens Wear', 2),
('Furniture', 3);

-- Insert Products
INSERT INTO products (product_name, category_id, price, stock_quantity, supplier_id, created_date) VALUES
('iPhone 15 Pro', 6, 999.99, 50, 1, '2024-01-15'),
('Samsung Galaxy S24', 6, 899.99, 45, 2, '2024-01-20'),
('MacBook Pro 16', 7, 2499.99, 20, 1, '2024-02-01'),
('Dell XPS 15', 7, 1799.99, 30, 2, '2024-02-05'),
('Sony WH-1000XM5', 1, 349.99, 100, 2, '2024-01-10'),
('Mens Cotton T-Shirt', 8, 29.99, 200, 3, '2024-01-25'),
('Womens Summer Dress', 9, 79.99, 150, 3, '2024-02-10'),
('Nike Running Shoes', 4, 129.99, 80, 5, '2024-01-30'),
('Yoga Mat Pro', 4, 49.99, 120, 5, '2024-02-15'),
('Office Chair Ergonomic', 10, 299.99, 40, 4, '2024-01-05'),
('LED Desk Lamp', 3, 39.99, 90, 4, '2024-02-20'),
('Wireless Mouse', 1, 24.99, 250, 1, '2024-01-12'),
('Mechanical Keyboard', 1, 89.99, 75, 1, '2024-01-18'),
('4K Monitor 27inch', 1, 399.99, 35, 2, '2024-02-08'),
('USB-C Hub', 1, 49.99, 180, 2, '2024-02-12');

-- Insert Customers
INSERT INTO customers (first_name, last_name, email, phone, city, country, registration_date, loyalty_points) VALUES
('Emma', 'Wilson', 'emma.w@email.com', '555-1001', 'New York', 'USA', '2023-01-15', 850),
('Liam', 'Brown', 'liam.b@email.com', '555-1002', 'London', 'UK', '2023-02-20', 1200),
('Olivia', 'Davis', 'olivia.d@email.com', '555-1003', 'Toronto', 'Canada', '2023-03-10', 450),
('Noah', 'Martinez', 'noah.m@email.com', '555-1004', 'Los Angeles', 'USA', '2023-04-05', 2100),
('Ava', 'Anderson', 'ava.a@email.com', '555-1005', 'Sydney', 'Australia', '2023-05-12', 680),
('Ethan', 'Taylor', 'ethan.t@email.com', '555-1006', 'Chicago', 'USA', '2023-06-18', 920),
('Sophia', 'Thomas', 'sophia.t@email.com', '555-1007', 'Berlin', 'Germany', '2023-07-22', 1500),
('Mason', 'Moore', 'mason.m@email.com', '555-1008', 'Paris', 'France', '2023-08-30', 340),
('Isabella', 'Jackson', 'isabella.j@email.com', '555-1009', 'Tokyo', 'Japan', '2023-09-14', 1800),
('Lucas', 'White', 'lucas.w@email.com', '555-1010', 'Dubai', 'UAE', '2023-10-25', 560),
('Mia', 'Harris', 'mia.h@email.com', '555-1011', 'Mumbai', 'India', '2023-11-08', 720),
('Alexander', 'Clark', 'alex.c@email.com', '555-1012', 'Singapore', 'Singapore', '2023-12-01', 990),
('Charlotte', 'Lewis', 'charlotte.l@email.com', '555-1013', 'Amsterdam', 'Netherlands', '2024-01-10', 410),
('James', 'Walker', 'james.w@email.com', '555-1014', 'Seattle', 'USA', '2024-01-20', 1300),
('Amelia', 'Hall', 'amelia.h@email.com', '555-1015', 'Melbourne', 'Australia', '2024-02-05', 880);

-- Insert Orders
INSERT INTO orders (customer_id, order_date, total_amount, status, shipping_address, payment_method) VALUES
(1, '2024-01-20 10:30:00', 1349.98, 'Delivered', '123 Main St, New York', 'Credit Card'),
(2, '2024-01-22 14:15:00', 899.99, 'Delivered', '456 Oak Ave, London', 'PayPal'),
(3, '2024-01-25 09:45:00', 459.97, 'Delivered', '789 Maple Dr, Toronto', 'Credit Card'),
(4, '2024-02-01 16:20:00', 2499.99, 'Shipped', '321 Pine St, Los Angeles', 'Credit Card'),
(5, '2024-02-03 11:30:00', 179.98, 'Delivered', '654 Elm Rd, Sydney', 'Debit Card'),
(1, '2024-02-05 13:45:00', 89.99, 'Delivered', '123 Main St, New York', 'Credit Card'),
(6, '2024-02-08 10:15:00', 429.98, 'Delivered', '987 Cedar Ln, Chicago', 'PayPal'),
(7, '2024-02-10 15:30:00', 1799.99, 'Shipped', '147 Birch Ave, Berlin', 'Credit Card'),
(8, '2024-02-12 12:00:00', 79.99, 'Processing', '258 Spruce St, Paris', 'Credit Card'),
(9, '2024-02-14 09:20:00', 999.99, 'Delivered', '369 Willow Dr, Tokyo', 'PayPal'),
(10, '2024-02-16 14:40:00', 349.99, 'Delivered', '741 Ash Rd, Dubai', 'Credit Card'),
(2, '2024-02-18 11:10:00', 299.99, 'Shipped', '456 Oak Ave, London', 'Debit Card'),
(11, '2024-02-20 16:25:00', 159.98, 'Processing', '852 Fir Ln, Mumbai', 'Credit Card'),
(12, '2024-02-22 10:50:00', 2899.98, 'Delivered', '963 Palm Ave, Singapore', 'PayPal'),
(4, '2024-02-24 13:15:00', 129.99, 'Cancelled', '321 Pine St, Los Angeles', 'Credit Card');

-- Insert Order Items
INSERT INTO order_items (order_id, product_id, quantity, unit_price, discount_percentage) VALUES
(1, 1, 1, 999.99, 0),
(1, 5, 1, 349.99, 0),
(2, 2, 1, 899.99, 0),
(3, 5, 1, 349.99, 10),
(3, 12, 2, 24.99, 0),
(3, 11, 1, 39.99, 0),
(4, 3, 1, 2499.99, 0),
(5, 8, 1, 129.99, 0),
(5, 9, 1, 49.99, 0),
(6, 13, 1, 89.99, 0),
(7, 14, 1, 399.99, 5),
(7, 6, 1, 29.99, 0),
(8, 4, 1, 1799.99, 0),
(9, 7, 1, 79.99, 0),
(10, 1, 1, 999.99, 0),
(11, 5, 1, 349.99, 0),
(12, 10, 1, 299.99, 0),
(13, 8, 1, 129.99, 0),
(13, 6, 1, 29.99, 0),
(14, 3, 1, 2499.99, 0),
(14, 14, 1, 399.99, 0),
(15, 8, 1, 129.99, 0);

-- Insert Reviews
INSERT INTO reviews (product_id, customer_id, rating, review_text, review_date) VALUES
(1, 1, 5, 'Absolutely love this phone! Best camera quality.', '2024-01-25'),
(1, 9, 4, 'Great phone but a bit pricey.', '2024-02-18'),
(2, 2, 5, 'Excellent value for money. Highly recommend!', '2024-01-28'),
(3, 4, 5, 'Best laptop I have ever owned. Super fast!', '2024-02-08'),
(5, 3, 4, 'Great noise cancellation, comfortable for long use.', '2024-02-01'),
(5, 1, 5, 'Perfect for travel and work. Worth every penny.', '2024-02-10'),
(8, 5, 5, 'Very comfortable running shoes. Great grip.', '2024-02-08'),
(10, 6, 4, 'Good chair but assembly was tricky.', '2024-02-15'),
(4, 7, 5, 'Powerful laptop, handles all my design work easily.', '2024-02-20'),
(13, 6, 5, 'Best keyboard for typing. Love the mechanical feel.', '2024-02-12');

-- Insert Employees
INSERT INTO employees (first_name, last_name, department, position, salary, hire_date, manager_id) VALUES
('Robert', 'Chen', 'Management', 'CEO', 250000.00, '2020-01-01', NULL),
('Jennifer', 'Lopez', 'Sales', 'Sales Director', 120000.00, '2020-03-15', 1),
('Michael', 'Brown', 'IT', 'IT Director', 130000.00, '2020-02-20', 1),
('Emily', 'Davis', 'Sales', 'Sales Manager', 85000.00, '2021-01-10', 2),
('David', 'Wilson', 'Sales', 'Sales Representative', 55000.00, '2021-06-15', 4),
('Sarah', 'Miller', 'Sales', 'Sales Representative', 58000.00, '2021-08-20', 4),
('John', 'Anderson', 'IT', 'Senior Developer', 95000.00, '2020-11-05', 3),
('Lisa', 'Taylor', 'IT', 'Developer', 75000.00, '2022-01-15', 7),
('Mark', 'Thomas', 'IT', 'Developer', 72000.00, '2022-03-20', 7),
('Anna', 'Martinez', 'HR', 'HR Manager', 80000.00, '2021-02-10', 1),
('Chris', 'Garcia', 'Marketing', 'Marketing Manager', 82000.00, '2021-04-15', 1),
('Rachel', 'Lee', 'Marketing', 'Content Specialist', 60000.00, '2022-05-10', 11);

-- Add foreign key for supplier_id in products (if needed)
ALTER TABLE products ADD FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id);

-- =====================================================
-- VERIFY DATA
-- =====================================================

SELECT 'Database setup complete!' AS Status;
SELECT COUNT(*) AS Total_Customers FROM customers;
SELECT COUNT(*) AS Total_Products FROM products;
SELECT COUNT(*) AS Total_Orders FROM orders;
SELECT COUNT(*) AS Total_Employees FROM employees;


