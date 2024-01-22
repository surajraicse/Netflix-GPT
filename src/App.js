import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Test from "./components/Test";
import appStore from "./store/store";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/test',
      element: <Test />
    }
  ])
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider  router={appRoutes} />
      </Provider>
    </div>
  );
}

export default App;
