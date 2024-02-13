import React from "react";
const Login = React.lazy(() => import('MicroFrontend/Login'))
const App = () => {
  return (
    <>
      <div>Main-App</div>
      <Login />
    </>
  );
};

export default App;
