import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "../../../../api/axios";
import Container from "../../../../components/Generic/Layout/Container";

const API = () => {
  const params = useParams();
  const location = useLocation();

  const ID = String(location.search).split("").slice(1).join("");
  console.log(ID);
  const {
    data: api,
    isLoading: loadingAPI,
    error,
  } = useQuery(
    ["fetch-api-by-id", ID],
    async () => {
      return await axios.get(`/apis/${ID}`);
    },
    {
      onSuccess: (res) => {
        console.log("API fetch response", res);
      },
      onError: (err) => {
        console.log("API fetch error", err);
      },
    }
  );

  if (loadingAPI) {
    return <div>Loading ....</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!api.data) {
    return <div>API not found</div>;
  }

  return (
    <div className="api-page">
      <Container>
        <div className="api-page-content mt-8">
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold tracking-tight leading-none">
              {api.data.API}
            </h2>
            <span className="rounded-sm bg-primary text-white shadow border border-gray-100 px-4 py-1 ml-5">
              {api.data.Category}
            </span>
          </div>

          <div className="api-body mt-4">
            <a href={api.data.Link} target="_blank" rel="noopener noreferrer">
              {api.data.Link}
            </a>
            <p className="mt-2">{api.data.Description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default API;
