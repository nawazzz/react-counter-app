
import React from 'react';
import './App.scss';
import cart from './cart.svg'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='mainContainer'>
        <div className='headerContainer'>
          <h1>Counter App</h1>
        </div>
        <div className='totalCountContainer'>
          <div style={{width: "20px"}}>
            <img src={cart} alt="cart" style={{width: "100%"}} />
            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
          </div>
          <div className=''>
              <h6>0</h6>
          </div>
          <div>
            <h6>items</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

