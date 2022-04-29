export default async function fetchSearchByName() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=Arrabiata';

  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
