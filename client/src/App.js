import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './routes/Root';
import Cooking from './routes/Cooking';
import Gaming from './routes/Gaming';
import Header from './components/globalComponents/Header';
import Footer from './components/globalComponents/Footer';

function App() {


  
  return (
    <>
      <Router>
        <div>
          <Header/>
            <div>
              <Routes>
                <Route 
                  path ='/' 
                   element={<Root/>}
                />
                <Route 
                  path ='/Cooking' 
                  element={<Cooking/>}
                />
                <Route 
                  path ='/Gaming' 
                  element={<Gaming/>}
                />
              </Routes>
            </div>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
