import axios from "axios";
import { cookiesGetter } from "../../../utils/cookies";

export const get_order_from_api = async () => {
  const { token } = cookiesGetter(`${process.env.REACT_APP_USER_TOKEN}`);
  try {
    const res = await axios.get(`https://clothify-backend.up.railway.app/order`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const add_order_to_api = async (payload) => {
  const { token } = cookiesGetter(`${process.env.REACT_APP_USER_TOKEN}`);
  try {
    const res = await axios.post(
      `https://clothify-backend.up.railway.app/order`,
      payload,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const delete_order_to_api = async (id) => {
  const { token } = cookiesGetter(`${process.env.REACT_APP_USER_TOKEN}`);
  try {
    const res = await axios.delete(`https://clothify-backend.up.railway.app/order/${id}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const update_order_to_api = async (id, payload) => {
  const { token } = cookiesGetter(`${process.env.REACT_APP_USER_TOKEN}`);
  try {
    const res = await axios.patch(
      `https://clothify-backend.up.railway.app/order/${id}`,
      payload,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};