import React from "react";
import { useQuery } from "react-query";
import Container from "../../../components/Generic/Layout/Container";
import axios from "../../../api/axios";
import APICard from "../../../components/Dashboard/API/APICard";
import Pagination from "../../../components/Generic/Pagination";
import useLocalStorage from "../../../hooks/useLocalStorage";

const APIs = () => {
  const [page, setPage] = useLocalStorage("api-application-apis-page", 1);
  const [entriesPerPage, setEntriesPerPage] = useLocalStorage(
    "api-application-apis-per-page",
    15
  );

  const {
    data: apis,
    error,
    isLoading: loadingAPIs,
  } = useQuery(
    ["fetch-all-apis", `page_${page}`, `entries_${entriesPerPage}`],
    async () => {
      return await axios.get(`/apis?page=${page}&limit=${entriesPerPage}`);
    },
    {
      onSuccess: (res) => {
        console.log("APIs fetch response", res);
      },
      onError: (err) => {
        console.log(err.message);
      },
    }
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleEntriesPerPageChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  if (loadingAPIs) {
    return <div>Loading ....</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!apis.data) {
    return <div>No APIs were found</div>;
  }

  return (
    <div className="apis-page">
      <Container>
        <div className="apis-page-content pt-10 pb-10">
          <div className="page-header apis-page-header flex items-center justify-between bg-gray-100 px-4">
            <div className="apis-page-header-left">
              <h2 className="text-3xl font-semibold tracking-tight leading-none">
                APIs Archive
              </h2>
            </div>
            <div className="apis-page-header-right">
              <Pagination
                totalEntries={apis.data.totalDocs}
                page={page}
                rowsPerPage={entriesPerPage}
                onPageChange={handleChangePage}
                onEntriesPerPageChange={handleEntriesPerPageChange}
              />
            </div>
          </div>

          <div className="apis-list mt-8 grid grid-cols-3 gap-4">
            {apis.data?.data?.map((api) => (
              <APICard key={api._id} data={api} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default APIs;
