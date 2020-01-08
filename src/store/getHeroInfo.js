import { readable } from "svelte/store";
import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from "./config";
import axios from "axios";

let headers = [];
let images = [];

export const heroStore= readable(headers, set => {
  axios
    .get(
      `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=heroSection&locale=en-US&include=10`
    )
    .then(function(response) {
      let headers = response.data.items;

      let arr3 = headers.map((item, i) => Object.assign({}, item, images[i]));

      console.log( arr3);


      set(headers, images);
    })
    .catch(function(error) {
      console.log(error);
    });

  return () => {};
});
