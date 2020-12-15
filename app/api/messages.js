import client from "./client";

const send = (message, listingId) =>
  client.post("/messages", {
    message,
    listingId,
  });

const get = (userId) =>
  client.get("/messages", {
    userId,
  });

export default {
  send,
  get,
};
