const addFileToIPFS = async (content) => {  const {create} = await import("ipfs-http-client"); const ipfs = create({ host: "localhost", port: "8119", protocol: "http" }); const { cid } = await ipfs.add(content); console.log("File added to IPFS with CID:", cid.toString()); return cid.toString(); };

const getFileFromIPFS = async (cid) => { const { create } = await import("ipfs-http-client"); const ipfs = create({ host: "localhost", port: "5001", protocol: "http" }); const stream = ipfs.cat(cid); let content = ""; for await (const chunk of stream) { content += chunk.toString(); } return content; };

module.exports = { addFileToIPFS, getFileFromIPFS };