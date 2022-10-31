export const getOccupationAndState = async () => {
  const url = "https://frontend-take-home.fetchrewards.com/form";

  const response = await fetch(url, { method: "GET" });
  return response.json();
};
