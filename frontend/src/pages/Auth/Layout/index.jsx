import PropTypes from "prop-types";
import "./styles.AuthPageLayout.scss";

export function AuthPageLayout({ children, className }) {
  return <main className={`authPage container ${className || ""}`}> {children}</main>;
}

AuthPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
