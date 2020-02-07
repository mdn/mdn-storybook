import React from "react";

import PropTypes from "prop-types";

import { gettext } from "../../utils/l10n.js";

import { ReactComponent as LogoSVG } from "../../media/svg/logo.svg";
import "../../style/components/logo.scss";

export default function Logo({ locale }) {
  return (
    <a
      href={`/${locale}/`}
      className="logo"
      aria-label={gettext("MDN Web Docs")}
    >
      <LogoSVG />
    </a>
  );
}

Logo.propTypes = {
  locale: PropTypes.string.isRequired
};
