import React from "react";
import { Link } from "react-router-dom";

export const Links = ( {to, children} ) => <Link className="link" to={to}>{children}</Link>