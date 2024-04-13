import axios from 'axios';

export const handlesingleproduct = async (id) => {
  try {
    const res = await axios.get(`https://clothify-backend.up.railway.app/product/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};