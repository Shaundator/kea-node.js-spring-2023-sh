test();

async function test() {
  const objects = await fetchAllObject();
  console.log(objects[0]);
}

function fetchAllObject() {
  // USED
  return fetch("http://localhost:8080/api/v1/product")
    .then((response) => response.json())
    .then((object) => {
      return object;
    });
}
