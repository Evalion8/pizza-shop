import './_app.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './scss/components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <div className="container">
            <Routes>
              <Route path="notFound" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              {/* полседний */}
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
