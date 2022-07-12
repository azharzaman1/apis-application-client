import PropTypes from "prop-types";

const Heading = (props) => {
  const { Tag = "h2", type = "primary", children, className, ...rest } = props;
  if (type === "primary") {
    return (
      <Tag
        className={`heading primary text-gray-800 font-heading font-semibold text-lg lg:text-xl tracking-tight leading-normal ${className}`}
        {...rest}
      >
        {children}
      </Tag>
    );
  }

  if (type === "secondary") {
    return (
      <Tag
        className={`heading secondary text-gray-800 font-heading font-semibold text-base lg:text-lg tracking-tight leading-normal ${className}`}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
};

Heading.propTypes = {
  Tag: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Heading;
