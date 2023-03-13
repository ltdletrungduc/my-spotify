class Path {
  constructor() {
    this.home = "/";
    this.search = "/search";
    this.collection = "/collection";
    this.likedSongs = this.collection + "/tracks";
    this.playlist = "/playlist";
  }
}

const path = new Path();
export default path;
