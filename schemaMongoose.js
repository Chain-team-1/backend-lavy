const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    id: Number,
    name: String,
    species: String,
    sex: String,
    image: String,
    wikilink: String
});