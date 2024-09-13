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
    //create a variable to confirm stock status
    if (product.quantity <= product.lowStockLevel) {
      stocklevel = 'Low Stock';
    } else if (product.quantity > product.lowStockLevel){
      stocklevel = 'In Stock';
    }
// use if to check the stock status.
console.log(`Product: ${product.name}`);
console.log(`Price: $${product.price}`);
console.log(`Quantity in Stock: ${product.quantity}`);
console.log(`Stock level(INTASK2): ${stocklevel}`);
//accepts a product object and logs the product’s name, price, quantity in stock, and stock status
}
//check the output product 'Tablet'
displayProductDetails(inventory[2])
//Output: Product: Tablet, Price: $400, Quantity in Stock: 7, Stock level(INTASK2): In Stock

//Task 3:Create a Function to Update Product Stock After Sales

function updateStock(product, unitsSold){
let quantityaftersold = product.quantity - unitsSold;
////create a variable to get qiantityaftersold
let stocklevel;
//create a variable to confirm stock status
if (quantityaftersold <= product.lowStockLevel) {
    stocklevel = 'Low Stock';
  } else if (quantityaftersold > product.lowStockLevel){
    stocklevel = 'In Stock';
    // use if to check the stock status after the quantityaftersold
  } console.log(`Product Name: ${product.name}`)
  console.log(`UnitsSold: ${unitsSold}`);
  console.log(`Quantityaftersold: ${quantityaftersold}`);
  console.log(`Stock level(INTASK3): ${stocklevel}`);
}
//check the output 'Laptop quantity-7'
updateStock(inventory[0], 7)
//Output:Product Name: Laptop, UnitsSold: 7, Quantityaftersold: 3, Stock level(INTASK3): Low Stock

//Task 4:Create a Function to Check Low Stock Products
function checklowStock(inventory){
    let checklow;
    inventory.forEach((product) => {
      //Use forEach to iterate through the array
        if (product.quantity <= product.lowStockLevel){
            checklow = `Low`;
            console.log(`"${product.name}" stock level is ${checklow}!`)
        }
        else {checklow = `good`;
            console.log(`"${product.name}" stock level is ${checklow}!`)
            //use if to check all of stock status in foreach method
        }
    }
)
}
//check the output
//change the quantity of smartphone to 2 for check
checklowStock(inventory);
//Output: "Laptop" stock level is good!, "Smartphone" stock level is Low!, "Tablet" stock level is good!, "Headphones" stock level is good!, "Smartwatch" stock level is good!

//Task 5:Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(inventory){
let total = inventory.reduce((i, product) => {
return i +(product.quantity * product.price);
},0);
//use reduce method Use reduce to calculate the cumulative sum of all product values, "i" is the accumulator,"0" is the initial value of i
console.log(`Total Values is $${total}`);}
//check the output
calculateInventoryValue(inventory);
//Output:Total Values is $18650

//Task 6:Create a Function to Process a Sale
function processSale(productname, unitsSold){
const product = inventory.find(item => item.name === productname)
//use find method to find the productname same with the item.name in inventory
if (product) {
updateStock(product, unitsSold);
}//if find the same name in inventory, use updateStock function
else{
console.log(`The product is not in the inventory`)
}//if not find the same name
}
//check the output
processSale('Laptop', 1)
processSale('Noting', 1)
//Output:Product Name: Laptop, UnitsSold: 1, Quantityaftersold: 9, Stock level(INTASK3): In Stock
//Output:The product is not in the inventory