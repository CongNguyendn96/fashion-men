import axiosClient from "./axiosClient";

const cartApi = {
  async getAll() {
    const response = await axiosClient.get("carts/");
    return response;
  },

  async get(id) {
    const url = `carts/${id}/`;
    const response = await axiosClient.get(url);
    return response;
  },

  async add(data) {
    const url = `carts/`;
    const response = await axiosClient.post(url, data);
    return response;
  },

  async remove(id) {
    const url = `carts/${id}/`;
    const response = await axiosClient.delete(url);
    return response;
  },
  async put(id, data) {
    const url = `carts/${id}/`;
    const response = await axiosClient.put(url,data);
    return response;
  },
};

export default cartApi;
