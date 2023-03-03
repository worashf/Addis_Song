const Song  = require("../models/Song")
const catchAsyncError  = require("../middlewares/catchAsyncError")
const ErrorHandler  = require("../utils/errorHandler")


// >>>>  Song  CRUD  operation controller methods >>>>>>>>> 
// Save new song => /api/v1/songs
exports.addSong = catchAsyncError(async (req, res, next) => {
    const { title, artist, album, genre } = req.body
    if (!title || !artist || !album || !genre) {
        return  next( new ErrorHandler( "Fields can not be null, Please enter all fields!", 400))
    }
    const song = await Song.create(req.body)
    if (!song) {
        return  next( new ErrorHandler( "Something went wrong, Song does not created!", 400))
    }
    res.status(201).json({
        success: true,
        song
    })
})

// Get All songs  => /api/v1/songs
exports.getAllSongs = catchAsyncError(async (req, res, next) => {
    const songs = await Song.find({})
    if (!songs) {
        return next(new ErrorHandler("No songs found", 404))
    }
    res.status(200).json({
        success: true,
        songs
    })
})

// Edit  song  information  => /api/v1/songs/:songId

exports.editSong = catchAsyncError(async (req, res, next) => {
       const {title, artist, album, genre } = req.body
    const song = await Song.findOne({ _id: req.params.songId });
    if (!song) {
        return  next(new ErrorHandler(`No song found with song id: ${req.params.songId}`,404))
    }
    // song.title = title
    // song.artist = artist
    // song.album = album
    // song.genre = genre
    // await song.save()
    song = await Song.findByIdAndUpdate(req.params.songId,{title, artist, album, genre }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      res.status(200).json({
        success: true,
        song,
      });
})

// Delete song information => /api/v1/songs/:songId

exports.deleteSong = catchAsyncError(async (req, res, next) => {
    const {songId} =  req.params
    const song = await Song.deleteOne({ _id: songId })
    if (song.deletedCount === 0) {
        return next(new ErrorHandler(`Song not found with id: ${songId}`, 404))
    }
    res.status(200).json({
        success: true,
        message: 'Song deleted successfuly',
    })
})

// >>>>  Song  statistics controller methods >>>>>>>>>

// Total  stats like, num of  songs,  => /api/v1/songs/total
exports.songsCount = catchAsyncError(async (req, res, next) => {
    
    const totalSongs = await Song.aggregate([{
        $group: {
            _id: null,
            songsCount: {$sum: 1}
        },
    }])

    if (!totalSongs) {
        return  next (new ErrorHandler("No songs found yet", 404))
    }

    res.status(200).json({
        success: true,
        totalSongs
    })

})

// Total  stats like, num of artists,  => /api/v1/artists/total
exports.artistsCount = catchAsyncError(async (req, res, next) => {
    const totalArtistsCount = await Song.aggregate([{
        $group: {
            _id: null,
            uniqueArtists : { $addToSet: '$artist.first_name'}
            
        },
        $project: {
            uniqueartistsCount:{$size:"$uniqueArtists"}
        }
    }])
    if (!totalArtistsCount) {
        return  next (new ErrorHandler("No artists found yet", 404))
    }

    res.status(200).json({
        success: true,
        totalArtistsCount
    })

})

// Total  stats like, num of albums,  => /api/v1/albums/total
exports.albumsCount = catchAsyncError(async (req, res, next) => {
    const totalAlbumssCount = await Song.aggregate([{
        $group: {
            _id: null,
            uniqueAlbums : { $addToSet: '$album.album_name'}
            
        },
        $project: {
            uniqueAlbumCount:{$size:"$uniqueAlbums"}
        }
    }])
    if (!totalAlbumssCount) {
        return  next (new ErrorHandler("No albums found yet", 404))
    }

    res.status(200).json({
        success: true,
        totalAlbumssCount
    })

})


// Total  stats like, num of genres,  => /api/v1/genres/total
exports.genresCount = catchAsyncError(async (req, res, next) => {
    const totalGenresCount = await Song.aggregate([{
        $group: {
            _id: null,
            uniqueGenres : { $addToSet: '$genre'}
            
        },
        $project: {
            uniqueGenresCount:{$size:"$uniqueGenres"}
        }
    }])
    if (!totalGenresCount) {
        return  next (new ErrorHandler("No genres found yet", 404))
    }

    res.status(200).json({
        success: true,
        totalGenresCount
    })

})

// Total  stats like, num of songs by genre  => /api/v1/genres/songs/total
exports.songsCountByGenre = catchAsyncError(async (req, res, next) => {
    const songsCount = await Song.aggregate([{
        $group: {
            _id: "$genre",
            count : { $sum: 1}
            
        }
    
    }])
    if (!songsCount) {
        return  next (new ErrorHandler("No songs found yet", 404))
    }

    res.status(200).json({
        success: true,
        songsCount
    })

})

// Total  stats like, num of songs by artist, num of albums by artist, num of genres by artist  => /api/v1/artists/stats
exports.countByArtist = catchAsyncError(async (req, res, next) => {
    const songsCount = await Song.aggregate([{
        $group: {
            _id: "$artist.first_name",
            countByArtist: { $sum: 1 },
            uniqueAlbum: { $addToSet: "$album.album_name" },
            uniqueGenre:{$addToSet: "$genre"}
        },
        $project: {
            _id: 1, 
            countByArtist: 1,
            albumsCount: { $size: '$uniqueAlbum' },
            genresCount: { $size: '$uniqueGenre' },
          
        }
    }])
    if (!songsCount) {
        return  next (new ErrorHandler("No songs found yet", 404))
    }

    res.status(200).json({
        success: true,
        songsCount
    })

})

// Total  stats like, num of songs by album  => /api/v1/albums/songs/stats
exports.songsCountByAlbum = catchAsyncError(async (req, res, next) => {
    const songsCount = await Song.aggregate([{
        $group: {
            _id: "$album.album_name",
            countByAlbum: { $sum: 1 },
        },
        $project: {
            _id: 1, 
            countByAlbum: 1,   
        }
    }])
    if (!songsCount) {
        return  next (new ErrorHandler("No songs found yet", 404))
    }

    res.status(200).json({
        success: true,
        songsCount
    })

})

