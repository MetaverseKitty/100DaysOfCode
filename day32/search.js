const formTag = document.querySelector("form")
const inputTag = formTag.querySelector("input")
const resultsTag = document.querySelector("section.results")

const accessKey="4w3qiAtgWwyWn4R3PzwdtF90DAP1yBEZqUaRVyfpIQw"
const apiUrl ="https://api.unsplash.com/search/photos?per_page=24&query="

const searchUnsplash = function (term) {
  const query = apiUrl + term;
  return fetch(query, {
    method: "GET",
    headers: {
      "Authorization" : "Client-ID " + accessKey
    }
  }) 
  .then(response => response.json())
  .then(data => {
   //  console.log(data)
   // format unsplash's results to suit our needs 
   return data.results.map(result => {
    return {
      imageSrc: result.urls.regular,
     // width: result.width,
     // height: result.height,
    //  name: result.user,
    //  title: (result.description || "Untitled")
     }
    })
  })
}

// add results to page
const addResults = function (results) {
// remove all the loading tags 
resultsTag.innerHTML= " "
// loop over each individual result and add to the results tag
results.forEach(result => {
  resultsTag.innerHTML = resultsTag.innerHTML + `
  <div class= "single-result" >
    <img src="${result.imageSrc}">
    </div>
  `
  })
}
 
// when we submit the form, get the info from input
formTag.addEventListener("submit", function(event) {
  //get the info from input!
  const searchTerm = inputTag.value

  searchUnsplash(searchTerm)
    .then(results => { 
      addResults(results)
  })

  //stop the form from going to the usual next page
  event.preventDefault()
})
