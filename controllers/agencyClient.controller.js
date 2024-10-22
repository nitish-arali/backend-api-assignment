import Agency from "../models/agency.model.js";
import Client from "../models/client.model.js";

// 1st API - Create Agency and Clients
export const createAgencyAndClients = async (req, res) => {
  const { agency, clients } = req.body;

  try {
    const newAgency = new Agency(agency);
    await newAgency.save();

    const clientPromises = clients.map((clientData) => {
      const client = new Client({ ...clientData, agencyId: newAgency._id });
      return client.save();
    });

    await Promise.all(clientPromises);

    res.status(201).json({ msg: "Agency and clients created successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// 2nd API - Update Client Details
export const updateClient = async (req, res) => {
  const { clientId } = req.params;
  const updates = req.body;

  try {
    const updatedClient = await Client.findByIdAndUpdate(clientId, updates, {
      new: true,
    });

    if (!updatedClient)
      return res.status(404).json({ msg: "Client not found" });

    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// 3rd API - Get Agency with Top Client
export const getTopClient = async (req, res) => {
  try {
    const topClient = await Client.findOne()
      .sort({ totalBill: -1 })
      .limit(1)
      .populate("agencyId", "name");

    if (!topClient) return res.status(404).json({ msg: "No client found" });

    res.json({
      agencyName: topClient.agencyId.name,
      clientName: topClient.name,
      totalBill: topClient.totalBill,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
