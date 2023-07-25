const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  upc_id: String,
  name: String,
  email: String,
  contactNo: Number,
  alt_contact: Number,
  gender: String,
  DOB: String,
  father_name: String,
  mother_name: String,
  father_email: String,
  category: String,
  nationality: String,
  pwd: String,
  marital_status: String,
  id_type: String,
  id_number: String,
  address_present: Object,
  address_permanent: Object,
  education_details: Array,
  password: String,
  imp_docs: Array,
  examsCleared: Array,
  application_sector: String,
  additionalInfo: Object,
  applicationFor: Object,
  presentEmployment: Object,
  areaOfInterest: String,
  internships: Array,
  workExperiences: Array,
  projects: Array,
  achievements: Array,
  skills: Array,
  ExtraCurriculars: Array,
  publication: Object,
  reference: Object,
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  } else {
    next();
  }
});

module.exports = mongoose.model("User", userSchema);
