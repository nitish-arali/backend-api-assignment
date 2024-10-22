import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  agencyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agency",
    required: [true, "Agency ID is required"], // Custom error message
  },
  name: {
    type: String,
    required: [true, "Client name is required"],
    minlength: [3, "Client name must be at least 3 characters long"],
    maxlength: [100, "Client name cannot be longer than 100 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^\d{10}$/, "Please enter a valid 10 digit number"],
  },
  totalBill: {
    type: Number,
    required: [true, "Total bill is required"],
  },
});

const Client = mongoose.model("Client", ClientSchema);
export default Client;
