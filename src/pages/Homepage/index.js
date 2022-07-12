import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "../../api/axios";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "API Archive";
  }, []);

  const [synced, setSynced] = useState(false);

  // react-query - fetches data from API and saves to MongoDB
  const {
    isLoading: syncingData,
    error,
    refetch: syncData,
  } = useQuery(
    "sync-data-in-db",
    async () => {
      return await axios.get(`/apis/sync`);
    },
    {
      enabled: false,
      onSuccess: (res) => {
        console.log("Database sync response", res);
        setSynced(true);
      },
      onError: (err) => {
        console.log(err.message);
      },
    }
  );

  const handleDataSync = () => syncData();

  return (
    <div className="page home-page w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-heading text-3xl font-medium">Homepage Goes Here</h1>
      <div className="mt-4 flex flex-col items-center">
        {error && <Alert severity="error">{error.message}</Alert>}
        {synced ? (
          <Alert severity="success">
            201 - Data fetched and synced with API
          </Alert>
        ) : (
          <button
            className="mt-4 cursor-pointer disabled:cursor-wait border-2 border-primary bg-primary text-white px-4 py-1.5 rounded shadow hover:bg-opacity-90 disabled:bg-opacity-80 disabled:hover:bg-opacity-80 transition-colors duration-150 min-w-[120px]"
            disabled={syncingData}
            onClick={handleDataSync}
          >
            {syncingData ? "..." : "Sync Data"}
          </button>
        )}
      </div>
      <div className="mt-4">
        <Link to="dashboard">
          <button className="flex items-center justify-center text-gray-800 hover:text-primary transition-colors duration-150">
            <span>Dashboard</span>

            <span className="ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
