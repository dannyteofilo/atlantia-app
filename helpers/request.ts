const apiUrl = "https://atlantia-dev-test.herokuapp.com/api";

export const getProducts = async () => {
  const url = `${apiUrl}/beer-products/`;
  const resp: any = await fetch(url);
  return await resp.json();
};
