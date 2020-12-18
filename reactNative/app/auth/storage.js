import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const KEY = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(KEY, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(KEY);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(KEY);
  } catch (error) {
    console.log("Error removing the token", error);
  }
};

export default {
  getToken,
  getUser,
  removeToken,
  storeToken,
};
