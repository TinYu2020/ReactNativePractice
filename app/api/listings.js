import client from "./client";

const ENDPOINT = "/listings";

const getListings = () => client.get(ENDPOINT);

export default {
  getListings,
};
