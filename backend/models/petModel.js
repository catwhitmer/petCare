const mongoose = require("mongoose");

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    species: {
      type: String,
      required: [true, "Please add a species"],
    },
    breed: {
      type: String,
      required: [true, "Please add a breed"],
    },
    age: {
      type: Number,
      required: [true, "Please add an age"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pets", petSchema);
