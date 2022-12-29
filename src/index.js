import { bro } from "./bro"
import "./styles/styles.css"
import { loadProducts } from "./init"

const products = require("./products.js")
const loadProductsR = require("./init.js")

search.addEventListener("input", function () {
	let parentNode = document.getElementById("catalog")
	removeAllChildNodes(parentNode)
	let searchValue = search.value.toLowerCase()
	let filteredProducts = products.filter(function (product) {
		return product.name.toLowerCase().includes(searchValue)
	})
	console.log(filteredProducts)
	loadProductsR(filteredProducts)
})

function removeAllChildNodes(parentNode) {
	while (parentNode.firstChild) {
		parentNode.removeChild(parentNode.firstChild)
	}
}
loadProductsR(products)
