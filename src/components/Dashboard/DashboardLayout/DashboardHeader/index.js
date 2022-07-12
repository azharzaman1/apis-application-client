import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import useDebounce from "../../../../hooks/useDebounce";
import { SET_QUERY } from "../../../../redux/slices/appSlice";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);

  const location = useLocation();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (debouncedQuery.length > 2) {
      // mature query(min 3 characters)
      // update value in redux store
      dispatch(SET_QUERY(debouncedQuery));
    } else {
      // immature query
      dispatch(SET_QUERY(""));
    }
  }, [debouncedQuery, dispatch]);

  return (
    <header className="dashboard-layout-header ">
      <div className="dashboard-header-container w-full min-h-[70px] px-2 sm:px-3 md:px-4 lg:px-5 xl:px-8 py-3 bg-gray-50 shadow-sm border-b border-gray-100 flex">
        {location.pathname === "/dashboard/apis" && (
          <div className="dashboard-header-search">
            <input
              type="search"
              value={query}
              placeholder="Search ..."
              id="dashboard-header-search"
              name="dashboard-header-search"
              onChange={handleInputChange}
              className="py-2 px-2 border border-gray-200 outline-none w-64 max-w-full"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
