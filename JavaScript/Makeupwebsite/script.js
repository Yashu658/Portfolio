const URL = "./mekeup.json";;

async function fetchitems() {
    
  const response = await fetch(URL);
  const data = await response.json();
  const makeup = data.makeup;

  console.log(data.makeup);
  const container = document.getElementById("items");

  data.forEach((element) => {
    console.log(element);
    const item = document.createElement("div");
    item.innerHTML = `
            <div class="row border rounded shadow p-3 my-3"  >
                <div class="">
                  <img
                    src="${element.image_link}"
                    alt="${element.name}"
                    class="object-fit-contain"
                    width="100px"
                  />
                </div>
                <div class="d-flex flex-column">
                  <label for="title" class="fs-2 fw-bold">${element.brand}</label>
                  <label for="author" class="fs-5">${element.name}</label>
                  <label for="price" class="fs-4 text-danger my-4">${element.price}</label>
                </div>
                <div class="">
                  <button type="button" class="btn btn-primary form-control my-3">
                    Buy Now
                  </button>
                  <button type="button" class="btn btn-secondary form-control">
                    Add to Cart
                  </button>
                </div>
              </div>
    `;

    container.appendChild(item)
  });
}

    ;

fetchitems();