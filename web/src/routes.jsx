import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Events from './pages/Events'
import Deaths from './pages/Deaths'
import Births from './pages/Births'
import Landing from './pages/Landing'

function Routes() {
  return (
      <BrowserRouter>
        <Route path='/' exact component={Landing} />
        <Route path='/events' exact component={Events} />
        <Route path='/deaths' exact component={Deaths} />
        <Route path='/births' exact component={Births} />
      </BrowserRouter>
  );
}

export default Routes;