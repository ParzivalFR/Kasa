/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const CollapseContext = createContext();

const useCollapse = () => useContext(CollapseContext);

const CollapseProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <CollapseContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </CollapseContext.Provider>
  );
};

CollapseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CollapseProvider, useCollapse };
