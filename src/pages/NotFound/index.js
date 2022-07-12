import Link from "../../components/Generic/Link";

const NotFound = () => {
  return (
    <div className="page home-page w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-heading text-3xl font-medium">
        Hey Newton! You are lost
      </h1>
      <div className="mt-4">
        <Link to="/">
          <button className="flex items-center justify-center text-gray-800 hover:text-primary transition-colors duration-150">
            <span>Homepage</span>
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

export default NotFound;
