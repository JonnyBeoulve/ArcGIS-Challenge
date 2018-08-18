import React from 'react';

import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Layout from './components/Layout/Layout';
import ArcAgeSearch from './containers/ArcAgeSearch/ArcAgeSearch';

/*======================================================================
// This renders the top-level interface elements.
======================================================================*/
const App = () => {
    return (
        <Layout>
          <Header />
          <ArcAgeSearch />
          <Footer />
        </Layout>
    );
}

export default App;
