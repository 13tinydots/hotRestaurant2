// This is the DATABASE SERVER address

import axios from "axios";

const BASE_URL = "http://localhost:3000";

export default {
  // `async` function returns a promise
  async index(type = "tables") {
    // object destructuring
    const { data } = await axios.get(`${BASE_URL}/${type}`);
    return data;
  },

  async add(newCustomer) {
    const { data } = await axios.post(`${BASE_URL}/tables`, newCustomer);
  },
};
