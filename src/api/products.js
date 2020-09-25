import axios from 'axios';
import { headers } from '../utils/utils';

export async function fetchGroceries() {
  let data = JSON.stringify({
    place: "grocery"
  })
  try {
    let response = await axios.post(`http://18.216.125.206/api/products_and_groceries/fetch_products_by_place.php`, data, headers())
    return response.data
  } catch (error) {
    alert(error)
  }
}
export async function fetchPalengke() {
  let data = JSON.stringify({
    place: "palengke"
  })
  try {
    let response = await axios.post(`http://18.216.125.206/api/products_and_groceries/fetch_products_by_place.php`, data, headers())
    return response.data
  } catch (error) {
    alert(error)
  }
}

export async function addProducts(data,place){
  data.place = place;
  try {
    let response = await axios.post(`http://18.216.125.206/api/products_and_groceries/add_products.php`,JSON.stringify(data) , headers())
    return response.data
  } catch (error) {
    alert(error)
  }
}

export async function deleteProducts(id){
  try {
    let response = await axios.post(`http://18.216.125.206/api/products_and_groceries/delete_products.php`,JSON.stringify({id:id}) , headers())
    return response.data
  } catch (error) {
    alert(error)
  }
}

export async function updateProducts(data){
  try {
    let response = await axios.post(`http://18.216.125.206/api/products_and_groceries/update_products.php`,JSON.stringify(data) , headers())
    return response.data
  } catch (error) {
    alert(error)
  } 
}

