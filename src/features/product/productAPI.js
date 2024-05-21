export function fetchAllProducts(amount = 1) {
  return new Promise(async (resolve) => {
    //We will nothard-codeserver URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  //filter = {"category":"smartphone","laptops"}
  //sort ={_sort:"price",_order="desc"}
  // TODO: On Server we will support multi values
  let queryString = "";
  for (let key in filter) {
    const catagoryValues = filter[key];
    if (catagoryValues.length) {
      const lastCategoryValue = catagoryValues[catagoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  return new Promise(async (resolve) => {
    //We will nothard-codeserver URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
