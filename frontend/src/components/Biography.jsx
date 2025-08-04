import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>My Self Alok Kumar</h3>
          <p>
            We are Create a powerful Hospital Management System (HMS) using the
            MERN stack—MongoDB, Express.js, React.js, and Node.js. The goal was
            to modernize how hospitals handle day-to-day operations like patient
            registration, doctor scheduling, appointment management, and medical
            record keeping.
          </p>
          <p>
            This system offers a centralized platform where hospital staff can
            manage tasks seamlessly, reduce paperwork, avoid manual errors, and
            improve patient care. By leveraging real-time data, secure backend
            logic, and responsive frontend design, it ensures efficiency across
            departments.
          </p>
          <p>The project combines strong technical architecture with user-focused features such as:</p>
          <p>
            <ul>
              <li>Role-based access for doctors, nurses, and admin staff</li>
              <li>Digital appointment scheduling</li>
              <li>Patient record tracking</li>
              <li>Alerts and notifications</li>
              <li>Scalable database support</li>
            
            </ul>
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
