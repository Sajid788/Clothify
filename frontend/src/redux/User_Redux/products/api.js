import axios from 'axios';

export const get_product_from_api = async (params) => {
  try {
    let response = await axios.get(`https://clothify-backend.up.railway.app/product`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};