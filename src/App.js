import React from 'react';
import Card from './components/Card';
import Menu from './components/Menu';
import BaptistereContextProvider from './contexts/BaptistereContext';

function App() {
    return (
        <BaptistereContextProvider>
            <Menu />
            <Card />
        </BaptistereContextProvider>
    );
}

export default App;