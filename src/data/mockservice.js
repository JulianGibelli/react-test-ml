export default async function apiCall(parametroUrl) {
  let url;
  if (parametroUrl === undefined) {
    //si no le paso parametro al llamar a apicall hace esto!
    url = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1055";
  }

  if (parametroUrl === "/remeras") {
    url = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1276";
  }
  if (parametroUrl === "/pantalones") {
    url = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1430";
  }
  if (parametroUrl === "/zapatillas") {
    url = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1246";
  }

  let response = await fetch(url);
  let responseData = await response.json();

  return responseData;
}
