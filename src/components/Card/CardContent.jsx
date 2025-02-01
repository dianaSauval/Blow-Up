import PropTypes from "prop-types";

export function CardContent({ children, className = "" }) {
  return <div className={`card-body text-center ${className}`}>{children}</div>;
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
