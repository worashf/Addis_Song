const mongoose  = require("mongoose")

const SongSchema  = mongoose.Schema({
   title:{
    type : String,
    trim: true,
    required : [true,'Song title can not be blank, Please enter the title']
   },
   artist:{
    first_name:{
        type: String,
        trim: true,
        required: [true,'Artist first name can not e blank, Please enter first name']
    },
    last_name:{
        type:String,
        trim: true,
        required: [true,'Artist last name can not e blank, Please enter last name']
    }
   },
   album:{
    album_name:{
        type:String,
        trim: true,
        required: [true,'Album name can not e blank, Please enter album  name']
    },
    numOfSongs:{
        type: Number, 
        required: [true, 'Please enter number of songs in the album'],
        maxLength: [15, 'Number of songs  can not be exceed 15'],
    }
   },
   genre:{
    type: String,
    enum:[
            'Tezeta',
            'Bati',
            'Ambassel',
            'Anchihoy',
            'Jazz',
            'Hip hop',
            'Rock music',
            'Soul music'
        ]
    
   },
   createdDate: {
    type: Date,
    default: Date.now(),
  },

})

module.exports = mongoose.model("Song", SongSchema)
