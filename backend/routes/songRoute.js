const express = require("express");
const {
  addSong,
  deleteSong,
  getAllSongs,
    editSong,
    songsCount,
    artistsCount,
    albumsCount,
    genresCount,
    songsCountByGenre,
    countByArtist,
    songsCountByAlbum
    
  
} = require("../controllers/songControllers");
const router = express.Router();

// Define routes

router.route("/songs").post(addSong);
router.route("/songs").get(getAllSongs);
router.route("/songs/:songId").put(editSong).delete(deleteSong);
router.route("/songs/total").get(songsCount)
router.route("/artists/total").get(artistsCount)
router.route("/albums/total").get(albumsCount)
router.route("/genres/total").get(genresCount)
router.route("/genres/songs/total").get(songsCountByGenre)
router.route("/artists/songs/total").get(countByArtist)
router.route("/albums/songs/total").get(songsCountByAlbum)


module.exports = router
