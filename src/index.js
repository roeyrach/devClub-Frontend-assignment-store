import { bro } from "./bro"
import "./styles/styles.css"
import { loadProducts } from "./init"

const products = require("./products.js")
const loadProductsR = require("./init.js")
loadProductsR(products)
