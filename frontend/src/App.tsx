import { RouterProvider } from "react-router-dom";
import router from "./Router/Route";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        autoClose={3000}
        position={"top-center"}
        hideProgressBar={true}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
