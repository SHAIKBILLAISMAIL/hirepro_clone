import React from "react";

import Card from "../UI/Card";

const SingleJob = ({title,description,location}) => {
  return (
   
    <Card >
      <div className="single-job">
       <div> <p>{title}</p></div>
        <div>
          <p>{description}</p>
        </div>
        <div>{location}</div>
        <div>
          <button>Apply</button>
        </div>
      </div>
    </Card>
  );
};

export default SingleJob;
