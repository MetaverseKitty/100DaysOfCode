const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const priceTag = document.querySelector("h1")
const spanTag = document.querySelector("span")
const paragraphTag = document.querySelector("p")
let currency = "USD" 

// lets make a function to grab data from Coindesk
const checkPrice = function () {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      priceTag.innerHTML = data.bpi[currency].rate_float.toFixed(1)
    })
}
 
// Run this on load
checkPrice()


// loop over every nav link and add a click event
const navLinks = document.querySelectorAll("nav a")
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    currency = this.getAttribute("data-currency")
    checkPrice()

      // remove ALL previous selected states 
  navLinks.forEach(link => link.classList.remove("selected"))

  // and then only do it on the clicked links
  this.classList.add("selected")

  // update the span tag accordingly
  // spanTag.innerHTML = currency
  paragraphTag.innerHTML = currency + " per BTC"
  })
})

// check the price every 60 seconds
setInterval(function () {
  checkPrice()
}, 60000)