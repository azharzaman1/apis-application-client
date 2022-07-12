import { useQuery } from "react-query";
import Container from "../../../components/Generic/Layout/Container";
import axios from "../../../api/axios";
import APICard from "../../../components/Dashboard/API/APICard";
import Pagination from "../../../components/Generic/Pagination";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useSelector } from "react-redux";
import Heading from "../../../components/Generic/Heading";

const APIs = () => {
  const query = useSelector((state) => state.appStore.query);
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
    [
      "fetch-all-apis",
      `query_${query}`,
      `page_${page}`,
      `entries_${entriesPerPage}`,
    ],
    async () => {
      return await axios.get(
        `/apis?query=${query}&page=${page}&limit=${entriesPerPage}`
      );
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

  return (
    <div className="apis-page">
      <Container>
        <div className="apis-page-content pt-10 pb-10">
          <div className="page-header apis-page-header flex items-center justify-between bg-gray-100 px-4 min-h-[60px]">
            <div className="apis-page-header-left">
              <Heading>APIs Archive</Heading>
            </div>

            {/* Only display Pagination when APIs found -atleast one */}
            {apis.data.data?.length > 0 && (
              <div className="apis-page-header-right">
                <Pagination
                  totalEntries={apis.data.totalDocs}
                  page={page}
                  rowsPerPage={entriesPerPage}
                  onPageChange={handleChangePage}
                  onEntriesPerPageChange={handleEntriesPerPageChange}
                />
              </div>
            )}
          </div>

          {/* APIs found - atleast one */}
          {apis.data.data?.length > 0 && (
            <div className="apis-list mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {apis.data?.data?.map((api) => (
                <APICard key={api._id} data={api} />
              ))}
            </div>
          )}

          {/* APIs not found - not a single one */}
          {!apis.data.data?.length && (
            <div className="mt-8">
              {query ? `Nothing found for "${query}"` : "Nothing found"}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default APIs;
