import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';

// import React, { useState, useEffect } from 'react';
// import SyncLoader  from 'react-spinners/SyncLoader';

function App() {
	return (
		<Router>
			{/* <div className="sweet-loading">
        		<SyncLoader color="#36d7b7" />
      		</div> */}
			<Routes>
				<Route
					path='/'
					element={
						<DefaultLayout>
							<Home />
						</DefaultLayout>
					}
				/>
				<Route
					path='*'
					element={
						<DefaultLayout>
							<Home />
						</DefaultLayout>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
