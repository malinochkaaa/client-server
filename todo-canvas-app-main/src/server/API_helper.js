import axios from "axios";
 
const URL = "https://museumguide.herokuapp.com/";        
 
 
export async function addToFavorites(museum_id) {
    await axios.post(`${URL}add_to_favorites`, {"user_id": "1", "fav_id": museum_id, });
}
 
 
export async function showAllMuseums() {
    return await axios.get(`${URL}museums`);
}
 
 
export async function showMuseum(museum_id) {
    return await axios.get(`${URL}museums/by_id`, {"museum_id": museum_id});
}