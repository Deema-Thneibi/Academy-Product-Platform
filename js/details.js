function getData() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  // Make a request for a product with a given ID
  axios
    .get(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
      // handle success
      const data = response.data;

      document.querySelector(".title").textContent = data.title;
      document.querySelector(".product-image img").src = data.thumbnail;
      document.querySelector(".description").textContent = data.description;
      document.querySelector(".price").textContent = "$" + data.price;
      document.querySelector(".discount").textContent =
        "Discount: " + data.discountPercentage + "%";
      document.querySelector(".rating").textContent = "Rating: " + data.rating;
      document.querySelector(".category").textContent =
        "Category: " + data.category;
      document.querySelector(".stock").textContent = "Stock: " + data.stock;
      document.querySelector(".brand").textContent = "Brand: " + data.brand;
      document.querySelector(".weight").textContent =
        "Weight: " + data.weight + "kg";
      document.querySelector(".dimensions").textContent =
        "Dimensions: " +
        data.dimensions.width +
        " x " +
        data.dimensions.height +
        " x " +
        data.dimensions.depth +
        " cm";
      document.querySelector(".warranty").textContent =
        "Warranty: " + data.warrantyInformation;
      document.querySelector(".shipping").textContent =
        "Shipping Information: " + data.shippingInformation;
      document.querySelector(".tags").textContent =
        "Tags: " + data.tags.join(", ");
      document.querySelector(".sku").textContent = "SKU: " + data.sku;
      document.querySelector(".availability").textContent =
        "Availability: " + data.availabilityStatus;
      document.querySelector(".return-policy").textContent =
        "Return Policy: " + data.returnPolicy;
      document.querySelector(".min-order").textContent =
        "Minimum Order Quantity: " + data.minimumOrderQuantity;
      document.querySelector(".created-at").textContent =
        "Created At: " + new Date(data.meta.createdAt).toLocaleDateString();
      document.querySelector(".qr-code").src = data.meta.qrCode;

      const reviews = data.reviews;
      const result = reviews
        .map(function (review) {
          return `<div class="review">
                            <p>Rating: ${review.rating}</p>
                            <p>Comment: ${review.comment}</p>
                            <p>Reviewer: ${
                              review.reviewerName
                            } (${review.reviewerEmail})</p>
                            <p>Date: ${new Date(
                              review.date
                            ).toLocaleDateString()}</p>
                        </div>
                `;
        })
        .join("");
      document.querySelector(".reviews").innerHTML = result;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

getData();
