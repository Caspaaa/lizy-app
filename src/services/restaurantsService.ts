export const fetchRestaurants = async (search: any) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/search`, {
    method: "POST",
    body: JSON.stringify(search),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
