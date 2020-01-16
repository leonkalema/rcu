import { readable } from "svelte/store";
import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from "./config";
import axios from "axios";

let projects = [];

export const projectStore= readable(projects, set => {
  axios
    .get(
      `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=projects`
    )
    .then(function(response) {
      let milles = response.data.items;
      let images = response.data.includes.Asset;

      const kalema = images.map(image => {
      return image.fields;
       });


        const leon = milles.map(header =>{
        return header.fields;
        });


let projects = kalema.map((item, i) => Object.assign({}, item, leon[i]));


      set(projects);
    })
    .catch(function(error) {
      console.log(error);
    });

  return () => {};
});
