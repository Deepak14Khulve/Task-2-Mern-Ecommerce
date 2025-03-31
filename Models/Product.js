const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: Number,
    discount: Number,
    offerprice: Number,
    reviews: Number,
  });
  const Product = mongoose.model('Product', ProductSchema);
  