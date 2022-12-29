function loadProducts(products) {
	const cartArray = []
	products.forEach((product) => {
		const productDiv = document.createElement("div")
		productDiv.className = "product-div"
		const productImage = productDiv.appendChild(document.createElement("img"))
		productImage.className = "product-image"
		productImage.src = product.image_url
		const productName = productDiv.appendChild(document.createElement("h3"))
		productName.innerHTML = product.name
		const productDesc = productDiv.appendChild(document.createElement("h6"))
		productDesc.innerHTML = product.description
		const productCategory = productDiv.appendChild(document.createElement("h4"))
		productCategory.innerHTML = product.category
		const productPrice = productDiv.appendChild(document.createElement("h4"))
		productPrice.innerHTML = "Price: " + product.price + "₪"
		const productId = productDiv.appendChild(document.createElement("h6"))
		productId.innerHTML = "Id: " + product.id
		const buttonDiv = productDiv.appendChild(document.createElement("div"))
		const productBtn = buttonDiv.appendChild(document.createElement("button"))
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
					document.createElement("h6")
				)
				cartProductTimes.innerHTML = "x" + inc

				document.getElementById("cart").append(cartProductDiv)
			}
		})
		document.getElementById("catalog").append(productDiv)
	})
}

module.exports = loadProducts
