const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    owneremail: {
        type: String,
        required: true,    
    },
    name: {
        type: String,
        required: true,    
    },
    type: {
        type: String,
        required: true,    
    },
    description: {
        type: String,
        required: true,    
    },
    mobile: {
        type: Number,
        required: true,  
    },
    location: {
        type: String,
        required: true,  
    },
    address: {
        type: String,
        required: true,    
    },
    city: {
        type: String,
        required: true,    
    },
   
    price: {
        type: String,
        required: true,    
    },
    image: {
        type: String, // Assuming imagePath is a string containing the path to the image file
                         // Optional: Provide a default value if no image is uploaded
      },
    status:{
        type: String,
        default:'Pending'
    },
    lat: {
        type: Number,  
        default: 0,         
    },
    long: {
        type: Number,
        default: 0,   
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    date_time: {
        type: String,
        required: true,    
    }
})


eventSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

eventSchema.set('toJSON', {
    virtuals: true,
});


exports.Event = mongoose.model('Event', eventSchema);
