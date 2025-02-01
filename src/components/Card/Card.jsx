import PropTypes from "prop-types";

export function Card({ children, className = "" }) {
  return <div className={`card shadow-lg rounded-3 ${className}`}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
