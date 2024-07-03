function getData() {
  // Make a request for a user with a given ID
  axios
    .get("https://dummyjson.com/products")
    .then(function (response) {
      // handle success
      const products = response.data.products;
      const result = products
        .map(function (product) {
          return `
      <div class="product">
          <img src="${product.thumbnail}">
          <div class="content">
              <h2>${product.title}</h2>
              <p>$${product.price}</p>
          </div>
          <div class="button">
              <button>Add to Cart</button>
              <button><a href="details.html?id=${product.id}">Details</a></button>
          </div>
      </div>
        `;
        })
        .join("");

      document.querySelector(".products").innerHTML = result;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

getData();

/*
Axios Features: 

1- Handling Requests and Responses:
   Axios allows you to make HTTP requests to fetch or save data. It supports various request methods like GET, POST, PUT, DELETE, etc. 
   It also handles the response received from the server, making it easy to work with server data.

2- Promise-based:
   Axios returns a promise, which makes it easier to handle asynchronous operations. 
   You can use .then() and .catch() methods to handle the response and errors respectively. 
   Promises help in writing cleaner and more readable asynchronous code compared to traditional callback-based methods.

3- Supports Older Browsers:
   Axios is built with modern JavaScript but has support for older browsers through polyfills. 
   This ensures compatibility across different browser environments.
*/
