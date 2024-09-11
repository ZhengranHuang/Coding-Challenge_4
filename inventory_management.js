//Task 1:Create an Inventory Array of Product Objects

const inventory = [
{ name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
{ name: 'Smartphone', price: 800, quantity: 2, lowStockLevel: 2 },
{ name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
{ name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
{ name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
];

//Task 2:Create a Function to Display Product Details

function displayProductDetails(product) {
    let stocklevel;
    
    if (product.quantity <= product.lowStockLevel) {
      stocklevel = 'Low Stock';
    } else if (product.quantity > product.lowStockLevel){
      stocklevel = 'In Stock';
    }
// use if to check the stock status.
console.log(`Product: ${product.name}`);
console.log(`Price: $${product.price}`);
console.log(`Quantity in Stock: ${product.quantity}`);
console.log(`Stock level(INTASK1): ${stocklevel}`);
//accepts a product object and logs the product’s name, price, quantity in stock, and stock status
}
//check the output 'Tablet'
displayProductDetails(inventory[2])

//Task 3:Create a Function to Update Product Stock After Sales

function updateStock(product, unitsSold){
let quantityaftersold = product.quantity - unitsSold;
let stocklevel;
if (quantityaftersold <= product.lowStockLevel) {
    stocklevel = 'Low Stock';
  } else if (quantityaftersold > product.lowStockLevel){
    stocklevel = 'In Stock';
  } console.log(`UnitsSold: ${unitsSold}`);
  console.log(`Quantityaftersold: ${quantityaftersold}`);
  console.log(`Stock level(INTASK2): ${stocklevel}`);
}
//check the output 'Laptop's quantity-7'
updateStock(inventory[0], 7)

//Task 4:Create a Function to Check Low Stock Products
function checklowStock(inventory){
    let checklow;
    inventory.forEach((product) => {
        if (product.quantity <= product.lowStockLevel){
            checklow = `Low`;
            console.log(`"${product.name}" stock level is ${checklow}!`)
        }
        else {checklow = `"${product.name}" stock level is good!`;
            console.log(`${checklow}`)
        }
    }
)
}
//check the output
//change the quantity of smartphone to 2
checklowStock(inventory);

