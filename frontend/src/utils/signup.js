import axios from 'axios';

export const signupFunction = async (payload) => {
  try {
    const res = await axios.post(
      `https://clothify-backend.up.railway.app/user/register`,
      payload,
    );

    if (res.status === 200) {
      return true;
    }
  } catch (error) {
    return error.response.data.error;
  }
};
