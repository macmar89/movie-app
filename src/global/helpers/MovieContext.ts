import React from "react";

const MovieContext = React.createContext({});

const MovieProvider = MovieContext.Provider;
const MovieCustomer = MovieContext.Consumer;

export { MovieCustomer, MovieProvider };
