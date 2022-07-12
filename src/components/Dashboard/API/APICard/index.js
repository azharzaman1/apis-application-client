import React from "react";
import { useNavigate } from "react-router-dom";

const APICard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="card-primary flex flex-col content-card api-card px-4 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-150 shadow border border-gray-100 min-h-[200px]">
      <div className="header flex justify-between items-center max-w-full">
        <h2
          className="cursor-pointer font-medium text-base lg:text-lg tracking-tight"
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
        <div className="min-w-[125px] flex items-center justify-end">
          <span className="text-sm rounded-sm px-2 py-1 bg-primaryLight text-white shadow border border-gray-100">
            {data.Category}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-base text-gray-900 opacity-80">{data.Description}</p>
      </div>
      <div className="mt-auto">
        <a
          className="text-gray-900 opacity-70 hover:underline underline-offset-1 hover:text-primary transition-colors duration-100 font-italic text-sm force-wrap"
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
