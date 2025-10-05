// 1.

// function fetchUser(users, id){
//     return new Promise((resolve, reject) => {
//         const user = users.find(user => user.id === id);
//         if(user){
//             resolve(user);
//         } else {
//             reject(new Error('User not found'));
//         }
//     });
// }

// const users = [
//     {id: 1, name: 'Ann', role: 'admin'},
//     {id: 2, name: 'John', role: 'user'},
// ]

// console.log(fetchUser(users, 2))


// 2.

// function fetchProduct(products, id){
//     return new Promise((resolve, reject) => {
//         const product = products.find(product => product.id === id);
//         if(product){
//             resolve(product);
//         } else {
//             reject(new Error('Product not found'));
//         }
//     });
// }

// const products = [
//     {id: 1, name: 'Laptop', price: '1000'},
//     {id: 2, name: 'Phone', price: '600'},
// ]

// console.log(fetchProduct(products, 1))


// 3.

// const ordersList = [];
// function createOrder(orders, userId, items) {
//     return new Promise((resolve, reject) => {
//         if (items.length === 0) {
//             reject(new Error('Items cannot be empty'));
//         } else {
//             const newOrder = {
//                 id: orders.length + 1,
//                 userId: userId,
//                 items: items,
//             };
//             orders.push(newOrder);
//             resolve(newOrder);
//         }
//     });
// }

// createOrder(ordersList, 1, [{ name: 'Laptop', price: '1000' }])
//     .then(order => console.log('Order created:', order))
//     .catch(error => console.error(error.message));


// 4.

// function deleteOrder(orders, orderId) {
//     return new Promise((resolve, reject) => {
//         const index = orders.findIndex(order => order.id === orderId);
//         if (index !== -1) {
//             const deletedOrder = orders.splice(index, 1)[0];
//             resolve(deletedOrder);
//         } else {
//             reject(new Error('Order not found'));
//         }
//     });
// }

// const orders = [
//     { id: 1, total: 100 },
//     { id: 2, total: 200 },
// ];

// deleteOrder(orders, 1)
//     .then(order => console.log('Order deleted:', order))
//     .catch(error => console.error(error.message));


// 5.

// function updateUserRole(users, userId, role) {
//     return new Promise((resolve, reject) => {
//         const user = users.find(user => user.id === userId);
//         if (user) {
//             user.role = role;
//             resolve(user);
//         } else {
//             reject(new Error('User not found'));
//         }
//     });
// }

// const users = [
//     { id: 1, name: 'Anna', role: 'admin' },
//     { id: 2, name: 'John', role: 'user' },
// ];

// updateUserRole(users, 2, 'admin')
//     .then(user => console.log('User role updated:', user))
//     .catch(error => console.error(error.message));


// 6.

// function checkStock(products, productId) {
//     return new Promise((resolve, reject) => {
//         const product = products.find(product => product.id === productId);
//         if (product) {
//             if (product.stock > 0) {
//                 resolve(`Product is in stock.`);
//             } else {
//                 reject(new Error(`Product is out of stock.`));
//             }
//         } else {
//             reject(new Error('Product not found'));
//         }
//     });
// }

// const products = [
//     { id: 1, name: 'Laptop', stock: 5 },
//     { id: 2, name: 'Phone', stock: 0 },
// ];

// checkStock(products, 1)
//     .then(message => console.log(message))
//     .catch(error => console.error(error.message));


// 7.

// function changeOrderStatus(orders, orderId, status) {
//     return new Promise((resolve, reject) => {
//         const order = orders.find(order => order.id === orderId);
//         if (order) {
//             order.status = status;
//             resolve(order);
//         } else {
//             reject(new Error('Order not found'));
//         }
//     });
// }

// const orders = [
//     { id: 1, total: 100, status: 'created' },
//     { id: 2, total: 200, status: 'created' },
// ];

// changeOrderStatus(orders, 1, 'shipped')
//     .then(order => console.log('Order status updated:', order))
//     .catch(error => console.error(error.message));


// 8.

// function productsAbovePrice(products, price) {
//     return new Promise((resolve, reject) => {
//         if (price <= 0) {
//             reject(new Error('Price must be greater than zero'));
//         } else {
//             const filteredProducts = products.filter(product => product.price > price);
//             if (filteredProducts.length > 0) {
//                 resolve(filteredProducts);
//             } else {
//                 reject(new Error('No products found above the given price'));
//             }
//         }
//     });
// }

// const products = [
//     { id: 1, name: 'Laptop', price: 1000 },
//     { id: 2, name: 'Phone', price: 600 },
//     { id: 3, name: 'Tablet', price: 300 },
// ];

// productsAbovePrice(products, 500)
//     .then(filteredProducts => console.log('Products above price:', filteredProducts))
//     .catch(error => console.error(error.message));


// 9.

function blockUser(users, userId) {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.id === userId);
        if (user) {
            user.role = true;
            resolve(user);
        } else {
            reject(new Error('User not found'));
        }
    });
}

const users = [
    { id: 1, name: 'Anna', role: "admin" },
    { id: 2, name: 'John', role: "user" },
];

blockUser(users, 1)
    .then(user => console.log('User blocked:', user))
    .catch(error => console.error(error.message));