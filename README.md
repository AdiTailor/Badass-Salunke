# Road-Runners

## About Us

This portal was built by:

- **Aditya Ashok Tailor**  
  Student ID: 2022A7PS0389G  
  Email: [f20220389@goa.bits-pilani.ac.in](mailto:f20220389@goa.bits-pilani.ac.in)

- **Nikhil Vinay**  
  Student ID: 2022A7PS0747G  
  Email: [f20220747@goa.bits-pilani.ac.in](mailto:f20220747@goa.bits-pilani.ac.in)
  
- **Ayush Pareek**  
  Student ID: 2022A7PS0788G  
  Email: [f20220788@goa.bits-pilani.ac.in](mailto:f20220788@goa.bits-pilani.ac.in)

- **Chinmay Rao**  
  Student ID: 2022A7PS0106G  
  Email: [f20220106@goa.bits-pilani.ac.in](mailto:f20220106@goa.bits-pilani.ac.in)


## Brief Description

**Road-Runners** is a decentralized platform that empowers the campus community to report and validate traffic violations in areas not covered by existing CCTV infrastructure. By combining **blockchain** technology with a user-friendly interface, we create a transparent, tamper-proof system that promotes accountability and improves campus safety.

**Solution Overview:**

Road Runners provides a platform where:
1) Community members can securely record incidents of traffic violations and report them.
2) A distributed network of validators can verify reports.
3) Campus security receives validated evidence, and can take further action. 


## Technical Architecture: ##

**Frontend Development**

The frontend of Road-Runners is designed to be intuitive and user-friendly, allowing easy report submissions and seamless user interaction.

*Tech Stack:*
  -  React.js – For building a dynamic, component-based UI.
  -  React Router – Enables smooth navigation across the platform.
  -  Javascript - To create a relatively fun and interesting experience for the users.

*Key Features:*
  -  Incident Reporting - Users can submit reports with relevant media (images/videos) attached.
  -  Dashboard - Displays user statistics, active complaints, and status updates.
  -  Dark Mode Toggle - Enhances user experience with a light/dark mode option.
  -  Authentication System - Secure login system integrated via Google OAuth to only allow verified BITS mail ID login.
  -  Reputation Score -  Uses a reputation score to aid in validation of   uploaded content
  - +5 if uploaded content is correctly verified.
  - -15 if it is judged to be fake.
  - Everyone starts with a reputation score of 50
  - If it goes below 25, only videos can be uploaded by that user and that will also be verified by a community vote along with our technical methods.
  - If it goes below 10 then the user’s account will be banned permanently.


**Backend Development**

The backend is responsible for processing user requests, securely storing data, and handling blockchain transactions.

*Tech Stack:*
  -  Node.js & Express.js – Handles API requests and business logic.
  -  MongoDB & Mongoose – NoSQL database to store user reports, complaints, and validations.
  -  IPFS (InterPlanetary File System) – Used for decentralized and secure storage of media files.
  -  Blockchain Integration – Ensures tamper-proof validation of reported incidents (can do more work on the implementation).

*Key Features:*
  -  Report Storage - Stores complaint details in a structured format.
  -  Efficient Data Retrieval - Indexing ensures faster retrieval of reported cases.
  -  Validator System - Implements a consensus mechanism where multiple users verify complaints before they reach authorities(to be implemented).
  -  Role-based Access Control - Different levels of access for general users, validators, and campus security(to be implemented).


**Database Architecture & Data Management**

*Database:* MongoDB (NoSQL) is used for its scalability and flexibility in handling diverse data structures.


**Interplanetary File System (IPFS) & Blockchain Implementation**




## Future Prospects ##

**Feature Enhancements:**
  - Implement AI-based Violation Detection using image recognition for automated verification.
  - Integration with Campus Security Systems for real-time enforcement actions.
  - Gamification & Incentives for validators who help verify reports.

**Technical Upgrades:**
  - Migration to a more scalable blockchain solution (e.g., Polygon for lower transaction fees).
  - Expanding IPFS storage efficiency for large-scale media handling.
  - Mobile App Development for seamless access and reporting.
  - Validation Workflow - 3-5 validators randomly selected from qualified  pool, who independently review evidence against violation criteria. Each validation decision recorded as blockchain transaction. If validated, notification sent to campus security.

**Privacy & Security Measures:**
  - Automatic face blurring for pedestrians in media
  - License plate visible only to authorized security personnel
  - End-to-end encryption for all communication



## How to Run the Project Locally ##

**Prerequisites**
- Node.js (v16 or later)
- MongoDB (Local or Cloud-based Atlas Setup)

**Installation Steps**

#Clone the repo: 
*git clone https://github.com/AdiTailor/Badass-Salunke.git*

#Navigate into the Project Directory:
*cd Badass-Salunke/src*

#Start the backend server:
*cd backend*
*node server.js*

#Start the frontend server:
*npm run dev*


**Here's a few Screenshots of the various pages one would encounter upon using the app :**





 

