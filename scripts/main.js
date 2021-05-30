/// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
document.getElementsByClassName('tablinks')[0].click()
function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	// check if s2 is empty or not
	if (document.getElementsByName("product").length == 0){
		s2.innerHTML = "";
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(products, s1.value);
	} else {
	// obtain a reduced list of products based on restrictions
	var ele = document.getElementsByName("product");
	var toRestrict = [];

	for (i = 0; i < ele.length; i++) {
			toRestrict.push(ele[i].value);
	}
	var newOptionArray = getProducts(toRestrict);

	s2.innerHTML = "";
	var optionArray = restrictListProducts(newOptionArray, s1.value);
	}

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.id = productPrice;
		checkbox.className = "productList";
		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		label.appendChild(document.createTextNode(": "));
		label.appendChild(document.createTextNode("$" + productPrice));
		s2.appendChild(label);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected: ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	var div = document.createElement("div");
	div.className = "listSelected"
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			div.appendChild(document.createTextNode(ele[i].value));
			div.appendChild(document.createTextNode(": $"));
			div.appendChild(document.createTextNode(ele[i].id));
			div.appendChild(document.createElement("br"));
			div.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	para.append(div);
	}
	c.appendChild(para);
	// add paragraph and total price
	var h3 = document.createElement("H3");
	var div1 = document.createElement("div");
	div1.class = "price";
	div1.id = "price";
	div1.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
	h3.appendChild(div1);
c.appendChild(h3);


}
