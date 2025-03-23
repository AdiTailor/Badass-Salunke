import React, { useState } from "react";
import bugs from "./img-1.jpg";
import tweety from "./img-2.webp";
import sy from "./img-3.jpg";
import wile from "./img-4.jpg";
import rr from "./img-5.jpg"; // New image for the box below mode button
import { Link } from "react-router-dom";
import "./fonts.css";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSize=25000000;
    if (file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "video/mp4", "video/mkv"];
      if (allowedTypes.includes(file.type)) {
        if (file.size > maxSize) {
            alert(`File "${file.name}" exceeds the 25MB size limit and will not be uploaded.`);
            setSelectedFile(null);
            setFileName("No file chosen");
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
          } 
        else {
            setSelectedFile(file);
            setFileName(file.name);
          }
      } else {
        alert("Invalid file type. Only .jpg, .jpeg, .png, .mp4, .mkv are allowed.");
        setSelectedFile(null);
        setFileName("No file chosen");
        // Reset the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }
    
    const url = 'https://httpbin.org/post';
    const formData = new FormData();
    formData.append("file", selectedFile);
    
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => alert("File uploaded successfully!"))
    .catch(error => alert("Upload failed. Please try again."));
  };
  
  return (
    <div className="borg1" style={{ 
      backgroundColor: darkMode ? "#1a1a1a" : "white", 
      color: darkMode ? "white" : "black", 
      minHeight: "100vh", 
      width: "100vw", 
      position: "relative",
      overflowY: "auto",
      paddingBottom: "50px" 
    }}>
      {/* Pink Box at Top Left */}
      <div className="borg1" style={{ position: "absolute", top: "15px", left: "45px", width: "200px", height: "75px", backgroundColor: "#EB1294", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        USER_NAME
      </div>
      
      {/* Mode Toggle Button Below Pink Box */}
      <button 
        onClick={toggleMode} 
        style= {{ 
          position: "absolute", 
          top: "110px", 
          left: "45px", 
          width: "200px", 
          height: "60px", 
          backgroundColor: darkMode ? "#f0f0f0" : "#333", 
          color: darkMode ? "black" : "white", 
          borderRadius: "8px", 
          border: "none", 
          cursor: "pointer", 
          fontSize: "38px",
          display: "flex",       
          alignItems: "center",     
          justifyContent: "center" 
        }}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Link to="/">
      <button 
        onClick={toggleMode} 
        style= {{ 
          position: "absolute", 
          top: "180px", 
          left: "45px", 
          width: "200px", 
          height: "50px", 
          backgroundColor: "gray", 
          borderRadius: "8px", 
          border: "none", 
          cursor: "pointer", 
          fontSize: "38px",
          display: "flex",       
          alignItems: "center",     
          justifyContent: "center" 
        }}>
        {"Sign Out"}
      </button>
      </Link>

      <div className="blanka1" style={{ 
        position: "absolute", 
        top: "15px", 
        right: "45px", 
        width: "1200px", 
        height: "75px", 
        backgroundColor: "red", 
        borderRadius: "8px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
      }}>
        ROAD RUNNERS
      </div>
       <div className = "blanka1" style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "110px", right: "45px", width: "1200px" }}>
              {[bugs, tweety, sy, wile].map((image, index) => (
                <div key={index} style={{ width: "280px", height: "120px", backgroundColor: "gray", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
                  <img src={image} alt={`Image ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} />
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "25px", fontWeight: "bold", textAlign: "center", padding: "10px" ,color:"#FF8C00"}}>
                    {["Reputation score: XX", "Active Complaints: XXX", "User Complaints: XX", "Registered Complaints: XX"][index]}
                  </div>
                </div>
              ))}
            </div>
        
      <div style={{ 
        position: "absolute", 
        top: "270px", 
        left: "770px", 
        width: "700px", 
        height: "720px", 
        backgroundColor: "#D3D3D3", 
        borderRadius: "8px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "20px", 
        boxShadow: "2px 2px 10px rgba(0,0,0,0.2)"
      }}>
        
        <h3 className="borg1" style={{ marginBottom: "10px" }}>Upload File</h3>
        <p className="pulp" style={{ fontSize: "30px", color: "gray", marginBottom: "20px" }}>Upload max size: 25MB</p>

        <form onSubmit={handleSubmit}>
        <label className="custom-file-label">
  Choose File
  <input type="file" className="hidden-file-input" accept=".jpg,.jpeg,.png,.mp4,.mkv" onChange={handleFileChange} />
</label>

          {selectedFile && <p style={{ marginTop: "10px" , fontSize:"40px"}}>Selected File: {selectedFile.name}</p>}
          <button type="submit" style={{ position:"absolute" , top : "535px" , left : "380px" , marginTop: "20px", padding: "10px 20px", borderRadius: "8px", border: "none", backgroundColor: "#4CAF50", color: "white", cursor: "pointer", fontSize: "16px" }}>Upload</button>
        </form>
      </div>


      <div style={{ 
        position: "absolute", 
        top: "270px", 
        left: "45px", 
        width: "700px", 
        height: "750px", 
        backgroundColor: "gray", 
        overflow: "hidden", 
        position: "relative" 
      }}>

      <img src={rr} alt="Mode Image" style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover", 
                opacity: 0.4, 
                position: "absolute", 
                top: 0, 
                left: 0, 
                zIndex: "0" 
              }} />



<div className = "pulp" style ={{ 
  position: "absolute", 
  top: 0, 
  left: 0, 
  width: "100%", 
  height: "100%", 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center", 
  padding: "5px", 
  lineHeight: "1.5", 
  zIndex: "1",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)" // This ensures text remains readable
}}>

Welcome to “Road Runners”, a crowdsourced website where you can upload images or videos indicating rash driving, violation of traffic rules as well as animal injury as a result of such activities.
          You start with a reputation score of 50, and your score is <br/>modified on the veracity of the complaint you make. An invalid complaint drops your score by 15, whereas a valid one increases<br/> it by 5. This score is also taken into consideration when <br/>verifying the complaint you have made.
          <br/><br/>
          If your reputation score goes below 25, then you are only allowed to upload videos and your submission will be checked thoroughly by our technical methods as well as community-wide vote. If <br/> your reputation score goes below 10, then your account will be permanently banned with no scope of recovery.
          <br/><br/>
          If media is uploaded unrelated to the topics mentioned, then the user can face a direct permanent ban. As you can only use your BITS mail for login, no further accounts can be created with different emails. As such we take disinformation very seriously, so please only upload authentic videos or images to help<br/> keep our campus safe.
        </div>
      </div>
    </div>


  );
};

export default Dashboard;