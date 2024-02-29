import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const appRouter = createBrowserRouter([{
    path: "./",
    element: <Body />
  }])
  return (
    <Provider store={store}>
    <div className="scrollbar-hide">
      <Header />
      <RouterProvider router={appRouter}/>
      
    </div>
    </Provider>
  );
}

export default App;
