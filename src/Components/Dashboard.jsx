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
      minHeight: "145vh", 
      width: "100vw", 
      position: "relative",
    
      paddingBottom: "7.19vh"
    }}>
      {/* Pink Box at Top Left */}
      <div className="borg1" style={{ position: "absolute", top: "2.15vh", left: "6.45vh", width: "28.77vh", height: "10.79vh", backgroundColor: "#EB1294", borderRadius: "1.15vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        USER_NAME
      </div>
      
      {/* Mode Toggle Button Below Pink Box */}
      <button 
        onClick={toggleMode} 
        style= {{ 
          position: "absolute", 
          top: "15.82vh", 
          left: "6.47vh", 
          width: "28.77vh", 
          height: "8.63vh", 
          backgroundColor: darkMode ? "#f0f0f0" : "#333", 
          color: darkMode ? "black" : "white", 
          borderRadius: "1.15vh", 
          border: "none", 
          cursor: "pointer", 
          fontSize: "5.46vh",
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
          top: "25.9vh", 
          left: "6.47vh", 
          width: "28.77vh", 
          height: "7.19vh", 
          backgroundColor: "gray", 
          borderRadius: "1.15vh", 
          border: "none", 
          cursor: "pointer", 
          fontSize: "5.46vh",
          display: "flex",       
          alignItems: "center",     
          justifyContent: "center" 
        }}>
        {"Sign Out"}
      </button>
      </Link>

      <div className="blanka1" style={{ position: "absolute", top: "2.15vh", left: "43.45vh", width: "174vh", height: "10.79vh", backgroundColor: "red", borderRadius: "1.15vh", display: "flex", alignItems: "center", justifyContent: "center" ,fontSize:"7.63vh"}}>
        ROAD-RUNNERS
      </div>
     
      <div className="blanka1" style={{ 
  position: "absolute", 
  overflow : "hidden",
  top: "15.75vh", 
  left: "43.45vh", 
  width: "38vh", 
  height: "16vh", 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center", 
  borderRadius: "1.15vh", 
  border: "none", 
  padding: "0.72vh", 
  lineHeight: "1.5", 
  zIndex: "1",
  color: "#003366",
  fontSize : "4.5vh",
  textAlign: "center"
}}>
  <img 
    src={bugs} 
    alt="Road Runners Logo" 
    style={{
        width: "100%", 
        height: "100%", 
        objectFit: "cover", 
        opacity: 0.4, 
        position: "absolute", 
        top: 0, 
        left: 0, 
        zIndex: "0"
    }}
  />
  Reputation Score : <br/> XX
</div>

     
<div className="blanka1" style={{ 
  position: "absolute", 
  overflow : "hidden",
  top: "15.75vh", 
  left: "88.45vh", 
  width: "38vh", 
  height: "16vh", 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center", 
  borderRadius: "1.15vh", 
  border: "none", 
  padding: "0.72vh", 
  lineHeight: "1.5", 
  zIndex: "1",
  color: "#003366",
  fontSize : "4.5vh",
  textAlign: "center"
}}>
  <img 
    src={tweety} 
    alt="Road Runners Logo" 
    style={{
        width: "100%", 
        height: "100%", 
        objectFit: "cover", 
        opacity: 0.4, 
        position: "absolute", 
        top: 0, 
        left: 0, 
        zIndex: "0"
    }}
  />
  Active Complaints : <br/> XXX
</div>
        
            
<div className="blanka1" style={{ 
  position: "absolute", 
  overflow : "hidden",
  top: "15.75vh", 
  left: "133.45vh", 
  width: "38vh", 
  height: "16vh", 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center", 
  borderRadius: "1.15vh", 
  border: "none", 
  padding: "0.72vh", 
  lineHeight: "1.5", 
  zIndex: "1",color: "#003366",
  fontSize : "4.5vh",
  textAlign: "center"
}}>
  <img 
    src={sy} 
    alt="Road Runners Logo" 
    style={{
        width: "100%", 
        height: "100%", 
        objectFit: "cover", 
        opacity: 0.4, 
        position: "absolute", 
        top: 0, 
        left: 0, 
        zIndex: "0"
    }}
  />
  User Complaints : <br/> XX
</div>

     
<div className="blanka1" style={{ 
  position: "absolute", 
  overflow : "hidden",
  top: "15.75vh", 
  left: "178.45vh", 
  width: "38vh", 
  height: "16vh", 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center", 
  borderRadius: "1.15vh", 
  border: "none", 
  padding: "0.72vh", 
  lineHeight: "1.5", 
  zIndex: "1",
  color: "#003366",
  fontSize : "4.5vh",
  textAlign: "center"
}}>
  <img 
    src={wile} 
    alt="Road Runners Logo" 
    style={{
        width: "100%", 
        height: "100%", 
        objectFit: "cover", 
        opacity: 0.4, 
        position: "absolute", 
        top: 0, 
        left: 0, 
        zIndex: "0"
    }}
  />
  Registered Complaints : <br/> XX
</div>


      <div style={{ 
        position: "absolute", 
        top: "38.85vh", 
        left: "110.79vh", 
        width: "100.72vh", 
        height: "102vh", 
        backgroundColor: "#D3D3D3", 
        borderRadius: "1.15vh", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "2.87vh", 
        boxShadow: "0.28vh 0.28vh 1.4vh rgba(0,0,0,0.2)"
      }}>
        
        <h3 className="borg1" style={{ marginBottom: "1.43vh" }}>Upload File</h3>
        <p className="pulp" style={{ fontSize: "4.31vh", color: "gray", marginBottom: "2.86vh" }}>Upload max size: 25MB</p>

        <form onSubmit={handleSubmit}>
        <label className="custom-file-label">
            Choose File
        <input type="file" className="hidden-file-input" accept=".jpg,.jpeg,.png,.mp4,.mkv" onChange={handleFileChange} />
        </label>

          {selectedFile && <p style={{ marginTop: "1.43vh" , fontSize:"5.72vh"}}>Selected File: {selectedFile.name}</p>}
          <button type="submit" style={{ position:"absolute" , top : "76.3vh" , left : "60vh" , marginTop: "2.87vh", padding: "1.43vh 2.87vh", borderRadius: "1.15vh", border: "none", backgroundColor: "#4CAF50", color: "white", cursor: "pointer", fontSize: "2.3vh",height : "6.5vh" }}>Upload</button>
        </form>
      </div>


      <div style={{ 
        position: "absolute", 
        top: "38.85vh", 
        left: "6.47vh", 
        width: "100.72vh", 
        height: "107.91vh", 
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
  overflow : "hidden",
  top: 0, 
  left: 0, 
  width: "100%", 
  height: "100%", 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center", 
  padding: "0.72vh", 
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
