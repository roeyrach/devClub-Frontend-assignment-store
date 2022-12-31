const cartArray = []
let sum = 0
function loadProducts(products) {
	products.forEach((product) => {
		const productDiv = document.createElement("div")
		productDiv.className = "product-div"
		const productImage = productDiv.appendChild(document.createElement("img"))
		productImage.className = "product-image"
		productImage.src = product.image_url
		const productInfo = productDiv.appendChild(document.createElement("div"))
		productInfo.className = "product-info"
		const productName = productInfo.appendChild(document.createElement("h3"))
		productName.innerHTML = product.name
		const productDesc = productInfo.appendChild(document.createElement("h6"))
		productDesc.innerHTML = product.description
		const productCategory = productInfo.appendChild(document.createElement("h5"))
		productCategory.innerHTML = product.category
		const productPrice = productInfo.appendChild(document.createElement("h4"))
		productPrice.innerHTML = product.price + "₪"
		const productId = productInfo.appendChild(document.createElement("h6"))
		productId.innerHTML = "Id: " + product.id
		const buttonDiv = productDiv.appendChild(document.createElement("div"))
		buttonDiv.className = "product-btn-div"
		const productBtn = buttonDiv.appendChild(document.createElement("button"))
		productBtn.className = "product-btn"
		productBtn.innerHTML = "Add"
		const incProduct = buttonDiv.appendChild(document.createElement("span"))
		let inc = 0
		incProduct.innerHTML = " + " + inc

		productBtn.addEventListener("click", () => {
			let flag = false
			inc += 1
			incProduct.innerHTML = " + " + inc

			for (let i = 0; i < cartArray.length; i++) {
				if (product.id === cartArray[i]) {
					flag = true
				}
			}

			if (flag === true) {
				const hi = document.getElementById(product.id).children[3]
				hi.innerHTML = "x" + inc
				const total = document.getElementById("total-sum")
				sum += product.price
				console.log(sum)
				total.innerHTML = sum + "₪"
			} else {
				cartArray.push(product.id)
				const cartProductDiv = document.createElement("div")
				cartProductDiv.className = "cart-inner-div"
				cartProductDiv.id = product.id
				const cartProductImage = cartProductDiv.appendChild(
					document.createElement("img")
				)
				cartProductImage.className = "cart-image"
				cartProductImage.src = product.image_url

				const cartProductName = cartProductDiv.appendChild(
					document.createElement("h3")
				)
				cartProductName.innerHTML = product.name

				const cartProductPrice = cartProductDiv.appendChild(
					document.createElement("h3")
				)
				cartProductPrice.innerHTML = product.price + "₪"

				const cartProductTimes = cartProductDiv.appendChild(
					document.createElement("h4")
				)
				cartProductTimes.innerHTML = "x" + inc
				const total = document.getElementById("total-sum")
				sum += product.price
				console.log(sum)
				total.innerHTML = sum + "₪"
				const deleteBtn = cartProductDiv.appendChild(
					document.createElement("button")
				)
				deleteBtn.className = "product-btn"
				deleteBtn.id = "product-delete-btn"
				deleteBtn.innerHTML = "Delete"
				deleteBtn.addEventListener("click", () => {
					if (inc === 1) {
						sum -= product.price
						total.innerHTML = sum + "₪"
						inc -= 1
						cartProductTimes.innerHTML = "x" + inc
						incProduct.innerHTML = " + " + inc
						console.log(cartArray.length)
						var index = cartArray.indexOf(product.id)
						cartArray.splice(index, 1)
						console.log(cartArray.length)
						cartProductDiv.remove()
					} else {
						sum -= product.price
						total.innerHTML = sum + "₪"
						inc -= 1
						cartProductTimes.innerHTML = "x" + inc
						incProduct.innerHTML = " + " + inc
					}
				})
				document.getElementById("cart").append(cartProductDiv)
			}
		})
		document.getElementById("catalog").append(productDiv)
	})
}

module.exports = loadProducts
