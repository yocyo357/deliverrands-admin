import axios from "axios"
import { headers } from "../utils/utils"

export async function fetchGroceryOrders() {
    try {
        let response = await axios.get(`http://18.216.125.206/api/orders/fetch_grocery_orders.php`)
        return response.data
    } catch (error) {
        alert(error)
    }
}

export async function fetchPalengkeOrders() {
    try {
        let response = await axios.get(`http://18.216.125.206/api/orders/fetch_palengke_orders.php`)
        return response.data
    } catch (error) {
        alert(error)
    }
}

export async function fetchOrderItems(order_id) {
    let data = JSON.stringify({
        order_id: order_id
    })
    try {
        let response = await axios.post(`http://18.216.125.206/api/orders/fetch_grocery_palengke_order_items.php`, data, headers())
        return response.data
    } catch (error) {
        alert(error)
    }
}

