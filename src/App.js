import React from 'react';
import Product from './Components/Product';
import './App.css';
import './Style.css'

function App() {
  return (
    <div className="App">
        <h1 style={{marginTop:'20px'}}>Workshop React Props</h1>
        <div className='product'>
            <Product name='iPhone' price='1000$' mark='Apple' age={3}>
              <img src='https://www.mytrendyphone.eu/images/iPhone-12-Pro-Max-128GB-Graphite-0194252021200-25102020-1-p.jpg' alt='iPhone'/>
            </Product>
            <Product name='S20' price='900$' mark='Samsung'>
              <img src="https://cdn-files.kimovil.com/default/0004/23/thumb_322972_default_big.jpeg" alt="s20"/>
            </Product>
            <Product name='N8' price='500$' mark='Nokia'>
              <img src="https://cdn-files.kimovil.com/default/0004/40/thumb_339755_default_big.jpeg" alt="nokia"/>
            </Product>
        </div>
    </div>
  );
}

export default App;
