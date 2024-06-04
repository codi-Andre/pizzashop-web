import { api } from "@/lib/axios"

interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestaurantBody) {
  api.post("/sign-up", {
    email,
    managerName,
    phone,
    restaurantName,
  })
}
