export const postForm = async (form) => {
  const url = "https://frontend-take-home.fetchrewards.com/form";

  const requestOptions = {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(form),
  };

  const response = await fetch(url, requestOptions);

  return response;
};
