require('dotenv').config();
const mongoose= require("mongoose");

const {
   DB_PASSWORD,DB_USER
} = process.env;

main().catch(err => console.log(err));


async function main() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(`mongodb+srv://labodegadelreo122:6VXwlnue09MPHlOU@cluster0.193s2bq.mongodb.net/LaBodegaDelReo_DB?retryWrites=true&w=majority`);
}