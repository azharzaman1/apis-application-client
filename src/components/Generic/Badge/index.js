import PropTypes from "prop-types";

const Badge = ({ children, className, type = "primary" }) => {
  if (type === "primary") {
    return (
      <span
        className={`badge primary text-sm rounded-sm px-2 py-1 bg-primaryLight text-white shadow border border-gray-100 ${className}`}
      >
        {children}
      </span>
    );
  }
};

Badge.propTypes = {
  type: PropTypes.oneOf(["primary"]),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Badge;
