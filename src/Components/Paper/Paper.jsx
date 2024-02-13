import React from "react";
import "./Paper.css"; // Update the import to match the CSS file name
import Research from "../../img/research.png";

const Paper = () => {
  return (
    <div className="paper">
      <div className="paper-header">
        <span>Latest</span>
        <br />
        <span>Research Paper</span>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={Research} alt="Research Paper" />
        </div>
        <div className="card-content">
          <h3>Insights of the Olympics: Athens to Rio</h3>
          <i>
            <p>International Journal for Research</p>
          </i>
          <p>
            The Paper aims to analyze Olympic data from 1896 to 2016 to uncover
            historical insights, compare Summer and Winter Olympics' age and
            gender stats, examine athletes' physical attributes, highlight top
            medal-winning countries and individuals, and assess gender
            participation and host cities.
          </p>
          <a
            href="https://www.ijraset.com/fileserve.php?FID=37688"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Open</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Paper;
