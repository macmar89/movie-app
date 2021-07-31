import React from "react";

const userContext = React.createContext();

const UserProvider = userContext.Provider;
const UserCustomer = userContext.Consumer;

export { UserCustomer, UserProvider };
