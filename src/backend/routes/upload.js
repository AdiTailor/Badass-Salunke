const express = require("express");
const multer = require("multer");
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const { addFileToIPFS, getFileFromIPFS } = require("../utils/ipfs.js");// This must match the field name in the frontend
router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    console.log("Received file:", req.file.originalname);

    // Convert Buffer to IPFS
    const ipfsHash = await addFileToIPFS(req.file.buffer);
    console.log("File added to IPFS:", ipfsHash);

    // Save to DB
    //const fileEntry = new FileModel({ ipfsHash, name: req.file.originalname });
    //await fileEntry.save();

    res.json({ message: "File uploaded successfully!", ipfsHash });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Route to retrieve a file from IPFS by CID
//router.get("/retrieve/:cid", retrieveFile);
module.exports = router;
