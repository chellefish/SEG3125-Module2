// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Brocoli",
		lactose: true,
		nutAllergy: true,
		organic: false,
		price: 1.99
	},
	{
		name: "Bread",
		lactose: true,
		nutAllergy: true,
		organic: false,
		price: 2.99
	},
	{
		name: "Salmon",
		lactose: true,
		nutAllergy: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Almond Milk",
		lactose: true,
		nutAllergy: false,
		organic: false,
		price: 3.99
	},
	{
		name: "Organic Apple",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 1.5
	},
	{
		name: "Organic Bananas",
		lactose: true,
		nutAllergy: true,
		organic: true,
		price: 2.48
	},
	{
		name: "10% Half and Half Cream",
		lactose: false,
		nutAllergy: true,
		organic: false,
		price: 3.99
	},
	{
		name: "Organic Peanut Butter",
		lactose: true,
		nutAllergy: false,
		organic: true,
		price: 5.99
	},
	{
		name: "Organic Butter",
		lactose: false,
		nutAllergy: true,
		organic: true,
		price: 7.99
	},
	{
		name: "2% Milk",
		lactose: false,
		nutAllergy: true,
		organic: false,
		price: 4.99
	},
	{
		name: "Tomato",
		lactose: false,
		nutAllergy: false,
		organic: false,
		price: 0.65
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactose == false)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].nutAllergy == false)){
			product_names.push(prods[i].name);
		}
		{
		else if ((restriction == "Organic" && prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
