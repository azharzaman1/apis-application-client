import PropTypes from "prop-types";

const Text = (props) => {
  const { Tag = "p", children, className, ...rest } = props;
  return (
    <Tag
      className={`text text-base text-gray-900 opacity-80 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

Text.propTypes = {
  Tag: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Text;
