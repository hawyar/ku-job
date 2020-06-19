import React from "react";
import { Link } from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";

export const LinkWrapper = ({ children, to }) => (
  <Link as={RouterLink} to={to} textDecoration="none">
    {children}
  </Link>
);
