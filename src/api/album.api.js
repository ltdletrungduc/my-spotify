import http from "@utils/http";

const URL = "albums";

const albumAPI = {
  getAlbumById(id) {
    return http.get(`${URL}/${id}`);
  },
};

export default albumAPI;
