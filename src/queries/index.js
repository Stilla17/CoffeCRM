import { getAllCategories } from "../services/category";
import { getAllProducts } from "../services/products";

export const getAllCategoriesQuery = () => ({
   queryKey:["category"],
   queryFn:async () => await getAllCategories()
})
export const getAllProductsQuery = () => ({
  queryKey: ["products"],
  queryFn: async () => await getAllProducts(),
});