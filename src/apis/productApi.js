import axiosClient from "./axiosClient";

const productApi = {
  async getAll() {
    const response = await axiosClient.get("products/");
    return response;
  },

  async get(id) {
    const url = `products/${id}/`;
    const response = await axiosClient.get(url);
    return response;
  },

  async add(data) {
    const url = `products/`;
    const response = await axiosClient.post(url, data);
    return response;
  },
};

export default productApi;
