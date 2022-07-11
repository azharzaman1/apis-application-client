const Container = ({ children }) => {
  return (
    <div className="layout-container px-2 sm:px-3 md:px-4 lg:px-5 xl:px-8">
      {children}
    </div>
  );
};

export default Container;
