import http from "../utils/http";

const URL = "artists";

const artistAPI = {
  getArtistById(id) {
    return http.get(`${URL}/${id}`);
  },
};

export default artistAPI;
