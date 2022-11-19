const asyncHandler = require("express-async-handler");

const Pet = require("../models/petModel");

// @desc Get pets
// @route GET /api/pets
// @access Private
const getPets = asyncHandler(async (req, res) => {
  const pets = await Pet.find();

  res.status(200).json(pets);
});

// @desc Set pets
// @route POST /api/pets
// @access Private
const setPet = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name");
  }

  const pet = await Pet.create({
    name: req.body.name,
    species: req.body.species,
    breed: req.body.breed,
    age: req.body.age,
  });
  res.status(200).json(pet);
});

// @desc Update pet
// @route PUT /api/pets/:id
// @access Private
const updatePet = asyncHandler(async (req, res) => {
  const pet = await Pet.findById(req.params.id);

  if (!pet) {
    res.status(400);
    throw new Error("Pet not found");
  }

  const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPet);
});

// @desc Delete pet
// @route DELETE /api/pets/:id
// @access Private
const deletePet = asyncHandler(async (req, res) => {
  const pet = await Pet.findById(req.params.id);

  if (!pet) {
    res.status(400);
    throw new Error("Pet not found");
  }

  await pet.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPets,
  setPet,
  updatePet,
  deletePet,
};
