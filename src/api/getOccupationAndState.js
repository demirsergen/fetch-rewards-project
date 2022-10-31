export const getOccupationAndState = async () => {
  const url = "https://frontend-take-home.fetchrewards.com/form";

  return fetch(url, { method: "GET" }).then((response) => response.json());
};
