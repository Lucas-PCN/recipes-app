export default async function fetchSearchByName(name) {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
}
