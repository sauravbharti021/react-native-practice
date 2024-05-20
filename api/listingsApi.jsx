import apiClient from "./client";

const endpoint = '/listings'

const getListings = ()=> {
    return apiClient.get(endpoint)
}

const addListing = () => {
    const formData = new FormData();
    formData.append('title', listingsTitle)

}

export default {
    getListings,
    
}