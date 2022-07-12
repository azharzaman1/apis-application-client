import PropTypes from "prop-types";

const Link = ({ children, href, italic, className, ...rest }) => {
  return (
    <a
      href={href}
      className={`link text-gray-900 opacity-70 hover:underline underline-offset-1 hover:text-primary transition-colors duration-100 text-sm force-wrap ${
        italic && "font-italic"
      } ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  italic: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default Link;
