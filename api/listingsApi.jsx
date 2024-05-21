import apiClient from "./client";

const endpoint = '/listings'

const getListings = ()=> {
    return apiClient.get(endpoint)
}

const addListings = (listing, onUploadProgress) => {
    const formData = new FormData();
    formData.append('title', listing.title),
    formData.append('price', listing.price),
    formData.append('categoryId', listing.category.value)
    formData.append('description', listing.description)

    listing.images.map((image,index) => {
        formData.append('images', {
            name: "image"+index,
            type: 'image/jpeg',
            uri: image
        })
    })
    if(listing.location){
        formData.append('location', JSON.stringify(listing.location))
    }

    return apiClient.post(endpoint, formData, {
        onUploadProgress: (progress) => onUploadProgress(progress.loaded/progress.total)
    })
}

export default {
    getListings,
    addListings
}