const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//Mongoose.connect("mongodb://172.30.78.216:27017/dbexample");

const PersonModel = Mongoose.model("personas", {
  firstname: String,
  lastname: String
});

app.post("/person", async (request, response) => {
  try {
    var person = new PersonModel({firstname:"Aldo",lastname:"pizarro"});
    var result = person;
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/people", async (request, response) => {
  try {
      var result = new PersonModel({firstname:"aldo",lastname:"pizarro"});
      response.send(result);
  } catch (error) {
      response.status(500).send(error);
  }
});
app.get("/person/:id", async (request, response) => {
  try {
      var person = new PersonModel({firstname:"aldo",lastname:"pizarro"});
      response.send(person);
  } catch (error) {
      response.status(500).send(error);
  }
});
app.put("/person/:id", async (request, response) => {
  try {
      /*var person = await PersonModel.findById(request.params.id).exec();
      person.set(request.body);
      var result = await person.save();
      response.send(result);*/
  } catch (error) {
      response.status(500).send(error);
  }
});
app.delete("/person/:id", async (request, response) => {
  try {
      /*var result = await PersonModel.deleteOne({ _id: request.params.id }).exec();
      response.send(result);*/
  } catch (error) {
      response.status(500).send(error);
  }
});

app.listen(8080, () => {
  console.log("Listening at :8080...");
});