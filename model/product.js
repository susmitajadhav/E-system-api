const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    No: {
        type: Number,
        required: true
    },

    ITEM: {
        type: String,
        required: true
    },

    GR_WEIGHT: {
        type: Number,
        required: true
    },

    L_WEIGHT: {
        type: Number,
        required: true
    },


    NET_WEIGHT: {
        type: Number,
        required: true
    },

    TUNCH: {
        type: Number,
        required: true
    },

    WSTG: {
        type: Number,
        required: true
    },

    PCS: {
        type: Number,
        required: true
    },

    LAB_RATE: {
        type: Number,
        required: true
    },

    MAJURI: {
        type: Number,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('product', productSchema)