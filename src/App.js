import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';

import { useState, useEffect } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
const override = {
  display: 'block',
  textAlign: 'center',
  transform: 'translate(0, 500%)',
};

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <Router>
      {loading ? (
        <SyncLoader color="#d32f2fd6" cssOverride={override} />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="*"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
