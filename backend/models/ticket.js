const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
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
    price: {
        type: String,
        required: true, 
    }, 
    number_of_seats: {
        type: String,
        required: true,   
    },
   
    dateCreated: {
        type: Date,
        default: Date.now
    }
   
})


ticketSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

ticketSchema.set('toJSON', {
    virtuals: true,
});


exports.Ticket = mongoose.model('Ticket', ticketSchema);
