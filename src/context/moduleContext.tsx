import React, { ReactNode } from "react";

interface PropsUserContext {
  children: ReactNode;
}

interface IUserContext {
  userData: object | unknown;
  setUserData: React.Dispatch<React.SetStateAction<undefined>>;
}

const initValue = {
  userData: [{}],
  setUserData: () => {},
};

export const UseContext = React.createContext<IUserContext>(initValue);

export const UseContextProvider = ({ children }: PropsUserContext) => {
  const [userData, setUserData] = React.useState();

  return (
    <UseContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </UseContext.Provider>
  );
};
