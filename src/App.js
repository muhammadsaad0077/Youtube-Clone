import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import WatchPage from './components/WatchPage';
import VideoPage from './components/VideoPage';


function App() {
  return (
    <Provider store={store}>
      <Router>
      
        <div className="scrollbar-hide">
          <Header />
          {/* Define your routes using Routes component */}
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/searchresult" element={<VideoPage />} />
          </Routes>
          

         
           {/* Move this component outside of Routes if it should be rendered always */}
        </div>
        
      </Router>
      
    </Provider>
  );
}

export default App;
