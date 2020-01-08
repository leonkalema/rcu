import {
  readable
} from "svelte/store";
import {
  API_BASE_URL,
  API_SPACE_ID,
  API_TOKEN
} from "./config";
import axios from "axios";

let images = [];

export const imageStore = readable(images, set => {
  axios
    .get(
      `${API_BASE_URL}/spaces/${API_SPACE_ID}/assets?access_token=${API_TOKEN}`
    )
    .then(function(response) {
      const images = response.data.items;
      console.log(response.data.items);
      set(images);
    })
    .catch(function(error) {
      console.log(error);
    });

  return () => {};
});
