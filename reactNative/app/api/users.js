import client from "./client";

const register = (userInfo) => client.post("/users", userInfo);

const getUserById = (userId) => client.get("/users", userId);

export default { register, getUserById };
