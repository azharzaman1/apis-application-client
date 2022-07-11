import React from "react";
import { useNavigate } from "react-router-dom";

const APICard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="card-primary flex flex-col content-card api-card px-4 py-4 bg-gray-50 shadow border border-gray-100">
      <div className="header flex justify-between items-center max-w-full">
        <h2
          className="cursor-pointer font-medium text-base md:text-lg lg:text-xl"
          onClick={() => {
            navigate({
              pathname: `${String(data.API)
                .split(" ")
                .join("-")
                .toLowerCase()}`,
              search: data._id,
            });
          }}
        >
          {data.API}
        </h2>
        <h3>{data.Category}</h3>
      </div>
      <div className="mt-4">
        <p>{data.Description}</p>
      </div>
      <div className="mt-4">
        <a
          className="text-gray-600 font-italic text-sm force-wrap"
          href={data.Link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.Link}
        </a>
      </div>
    </div>
  );
};

export default APICard;