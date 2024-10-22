import mongoose from "mongoose";

const AgencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Agency name is required"],
    minlength: [3, "Agency name must be at least 3 characters long"],
    maxlength: [100, "Agency name cannot be longer than 100 characters"],
  },
  address1: {
    type: String,
    required: [true, "Address1 is required"],
  },
  address2: {
    type: String,
  },
  state: {
    type: String,
    required: [true, "State is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
  },
});

const Agency = mongoose.model("Agency", AgencySchema);
export default Agency;
