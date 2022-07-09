const apiUrl = "https://atlantia-dev-test.herokuapp.com/api";

export const getProducts = async () => {
  const url = `${apiUrl}/beer-products/`;
  const resp: any = await fetch(url);
  return await resp.json();
};

export const getShareChart = async () => {
  const url = `${apiUrl}/presence-share-chart/`;
  const resp: any = await fetch(url);
  return await resp.json();
};

export const getPriceEvolution = async () => {
    const url = `${apiUrl}/price-evolution-chart/`;
    const resp: any = await fetch(url);
    return await resp.json();
  };