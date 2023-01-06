import { get, post } from "../common/ApiHelper";

export const getProducts = async () => {
  try {
    const result = await get('get-list');
    return result;
  } catch (err) {
    return err.response;
  }
};


export const generateAuthToken = async () => {
    try {
      const result = await post('generate-auth-token');
      return result;
    } catch (err) {
      return err.response;
    }
  };
