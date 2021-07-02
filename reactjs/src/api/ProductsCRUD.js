import axiosInstance , {API_URL} from '../axios/axiosInstance';

export const getAllProducts = () =>   {
    return axiosInstance.get(API_URL)
}
export const getProductById = (id) =>   {
    return axiosInstance.get(`${API_URL}/${id}`)
}

export const createProduct = (body) =>   {
      return axiosInstance.post(API_URL, body )
}

export const updateProduct = (id,body) =>   {

    return axiosInstance.put(`${API_URL}/${id}`,body)
}

export const deleteProduct = (id) =>   {

    return axiosInstance.delete(`${API_URL}/${id}`)
}

