import TablePagination from "@mui/material/TablePagination";

const Pagination = ({
  totalEntries,
  page,
  rowsPerPage,
  onPageChange,
  onEntriesPerPageChange,
}) => {
  return (
    <TablePagination
      component="div"
      count={totalEntries}
      page={page - 1} // take index instead of page number
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[15, 30, 50, 100]}
      onPageChange={onPageChange}
      onRowsPerPageChange={onEntriesPerPageChange}
      disable
    />
  );
};

export default Pagination;
