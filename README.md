# CodeHub - One Platform, Endless Collaboration!

![Homepage](https://github.com/grandmaster0110/CodeHub/assets/139354543/0219fa45-b1c7-4225-b5f6-04fede2d1496)

CodeHub is a collaborative coding platform designed to cater to the diverse needs of developers, team leads, and project managers. It is dedicated to empowering individuals and teams to efficiently achieve their coding goals. Whether you're a developer seeking real-time collaboration or a team lead in need of robust project management tools, CodeHub is your one-stop solution.

This project has been done as a requirement for the CSN-254 course (Software Engineering) of IIT Roorkee. 

## 🔗 Relevant Links

* [Project Presentation](https://docs.google.com)
* [Project Report](https://docs.google.com)
* [Video Demo](https://drive.google.com)

## 📌 Table of Contents
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Flow Diagram](#architecture)
* [Getting Started](#getting-started)
* [User Guide](#user-guide)
* [Future Scope](#scope)
* [Bug Reporting](#bug)
* [Support Us](#Support)
* [About Developers](#About)

<a id="features"></a>
## 🔮 Features

-   💻 Real-time collaboration on code editing across multiple files
-   🚀 Unique project generation with project ID & password for collaboration
-   🌈 Syntax highlighting for various file types with auto-language detection
-   💡 Auto suggestion based on programming language
-   ⏱️ Instant updates and synchronization of code changes across all files
-   📣 Notifications for user join and leave events
-   🎨 Multiple themes for personalized coding experience
-   🌍 Comprehensive language support for versatile programming
-   🔠 Option to change font size and font family
-   👥 User presence list of users currently in the collaboration session, including online/offline status indicators
-   📁 Open, edit, save, and delete file functionalities
-   💾 Option to download files edited within the collaboration session
-   💬 Group chatting allows users to communicate in real-time while working on code.
-   🎩 Real-time tooltip displaying users currently editing
-   📋 Issue assigning for streamlined project management
-   👨🏼‍💻 User authentication through Sign-up and login functionality
-   🕵🏼‍♂️ Adding developers by admin.

<a id="tech-stack"></a>
## 💻 Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Socket io](https://img.shields.io/badge/Socket.io-ffffff?style=for-the-badge)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<a id="architecture"></a>
## 🪢 Flow Diagram

<img width="500" alt="architecture" src="https://github.com/grandmaster0110/CodeHub/assets/139354543/563dc7f1-1a25-4adc-8615-95d2ea5522a6">

<a id="getting-started"></a>
## 📦 Getting Started
1. **Fork this repository:** Click the Fork button located in the top-right corner of this page to fork the repository.
2. **Clone the repository:**
    ```bash
    git clone https://github.com/<your-username>/CodeHub.git
    ```
3. **Set .env file:**
   Inside the client and server directory, create or edit the .env file and add the following line:  
   Frontend:

    ```bash
    VITE_BACKEND_URL=<your_server_url>
    ```

    Backend:

    ```bash
    PORT=3000
    ```

4. **Install dependencies:**
   Navigate to the frontend and backend directories separately and run:
    ```bash
     npm install
    ```
5. **Start the frontend and backend servers:**  
   Frontend:
    ```bash
    cd client
    npm run dev
    ```
    Backend:
    ```bash
    cd server
    npm run dev
    ```
6. **Access the application:**
   Open a browser and enter the following URL:
    ```bash
    http://localhost:5173/
    ```

<a id="user-guide"></a>
## 📖 User Guide

### Home Page 

<img width="1432" alt="Home-2" src="https://github.com/grandmaster0110/CodeHub/assets/139354543/b02d004f-904a-4104-95fd-dd9b772be7ec">

### Login/Signup

<img width="1440" alt="log-in" src="https://github.com/grandmaster0110/CodeHub/assets/139354543/58c52c6c-1738-44dd-a32c-1c023e10addf">

<img width="1440" alt="log-in" src="https://github.com/grandmaster0110/CodeHub/assets/139354543/d61ad2f5-1fe0-49c4-93c5-4eb97803382a">

### Join/Create

<img width="1440" alt="log-in" src="https://github.com/grandmaster0110/CodeHub/assets/139354543/864c710e-3469-4ca2-bc56-6b37d6a74c18">

<img width="1440" alt="log-in" src="https://github.com/grandmaster0110/CodeHub/assets/139354543/1e2e08f0-792c-44bc-8138-57b66c2ddbed">

### Editor's Page

<img width="1440" alt="log-in" src="https://github.com/grandmaster0110/CodeHub/assets/139354543/6fc51a94-cc5b-4d24-ab70-f401582d1caa">

<a id="scope"></a>
## 🔮 Future Scope

-   **Compile Functionality:** Implement an compile system to manage and access programming features.
-   **Search and Replace:** Implement a search and replace functionality for efficient code navigation.

<a id="bug"></a>
## 🐛 Bug Reporting
Feel free to [open an issue](https://github.com/grandmaster0110/CodeHub/issues) on GitHub if you find bugs.

<a id="Support"></a>
## 🌟 Support Us

If you find this helpful or valuable, please consider 🌟 starring the repository. It helps us gain visibility and encourages further development. We appreciate your support!

<a id="About"></a>
## ✍️ About Developers

<table>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://github.com/grandmaster0110/CodeHub/assets/139354543/54205179-acb4-486e-aa0b-196756ffb0a4" width="120px;" height="120px;" alt="Dev 1"/>
        <br />
        <b>Ansh Saini</b>
        <br />
        <a href="https://github.com/anshSeven">
          <img src="https://img.shields.io/badge/GitHub-100000.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Dev 1"/>
        </a>
      </td>
      <td align="center">
        <img src="https://github.com/grandmaster0110/CodeHub/assets/139354543/9871c96a-7ead-4bed-b446-8e67037b7b2e" width="120px;" height="120px;" alt="Dev 2"/>
        <br />
        <b>Shaurya Jain</b>
        <br />
        <a href="https://github.com/grandmaster0110">
          <img src="https://img.shields.io/badge/GitHub-100000.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Dev 2"/>
        </a>
      </td>
      <td align="center">
        <img src="https://github.com/grandmaster0110/CodeHub/assets/139354543/9e825d1f-8433-48ea-adaf-e641c44cca2d" width="120px;" height="120px;" alt="Dev 3"/>
        <br />
        <b>Vansh Saini</b>
        <br />
        <a href="https://github.com/vanshsaini-yy">
          <img src="https://img.shields.io/badge/GitHub-100000.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Dev 3"/>
        </a>
      </td>
      <td align="center">
        <img src="https://github.com/grandmaster0110/CodeHub/assets/139354543/f8c2a7c4-11ea-4c6e-b406-966e579046cc" width="120px;" height="120px;" alt="Dev 4"/>
        <br />
        <b>Nikunj Kansal</b>
        <br />
        <a href="https://github.com/NIKKS1234">
          <img src="https://img.shields.io/badge/GitHub-100000.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Dev 4"/>
        </a>
      </td>
      <td align="center">
        <img src="https://github.com/dev5.png" width="120px;" height="120px;" alt="Dev 5"/>
        <br />
        <b>Varun Fadia</b>
        <br />
        <a href="https://github.com/dev5">
          <img src="https://img.shields.io/badge/GitHub-100000.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Dev 5"/>
        </a>
      </td>
    </tr>
  </tbody>
</table>
