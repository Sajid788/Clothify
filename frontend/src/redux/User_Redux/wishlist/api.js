import axios from "axios";
import { cookiesGetter } from "../../../utils/cookies";
export const get_wishlist_from_api = async () => {
  const { token } = cookiesGetter(`${process.env.REACT_APP_USER_TOKEN}`);
  try {
    const res = await axios.get(`https://clothify-backend.up.railway.app/wishlist`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const add_wishlist_to_api = async (payload) => {
  const { token } = cookiesGetter(`${process.env.REACT_APP_USER_TOKEN}`);
  try {
    const res = await axios.post(
      `https://clothify-backend.up.railway.app/wishlist`,
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

export const delete_wishlist_to_api = async (id) => {
  const { token } = cookiesGetter(`${process.env.REACT_APP_USER_TOKEN}`);
  try {
    const res = await axios.delete(
      `https://clothify-backend.up.railway.app/wishlist/${id}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};