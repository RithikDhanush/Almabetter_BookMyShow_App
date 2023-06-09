import { createContext } from "react";

// createContext is a method that allows you to create a context object that can be shared by multiple components in a React application. 
// create a context object
const BsContext = createContext();


export default BsContext;

/* By using createContext, we can easily share data or state between components without having to pass 
props through multiple levels of the component tree. */