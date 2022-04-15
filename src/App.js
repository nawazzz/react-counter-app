
import React from 'react';
import './App.scss';
import cart from './cart.svg'
import refreshIcon from './refresh.svg'
import recycleIcon from './recycle.svg'
import plusIcon from './plus.svg'
import minusIcon from './minus.svg'
import trashIcon from './trash.svg'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: []
    }
  }

  componentDidUpdate = (event) => {
    // console.log(event)
  }

  increaseCounter = (event) => {
    console.log(event)
  }

  render() {
    return (
      <div className='mainContainer'>
        <div className='headerContainer'>
          <h1>Counter App</h1>
        </div>
        <div className='totalCountContainer'>
          <div className='cart'>
            <img src={cart} alt="cart" style={{width: "100%"}} />
            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
          </div>
          <div className='alldataCounter'>
              <h6>{this.state.allData.length}</h6>
          </div>
          <div className='items'>
            <h6>items</h6>
          </div>
        </div>
        <div className='countOperationContainer'>
          <div className='buttonsContainer'>
            <div className='refreshButton'>
              <img src={refreshIcon} alt={"refresh"}/>
            </div>
            <div className='recycleButton'>
              <img src={recycleIcon} alt={"recycle"}/>
            </div>
          </div>
          <div className='heroContainer'>
            <div className='buttonContainerOne'>
              <h6>Zero</h6>
            </div>
            <div id={Math.floor(Math.random()*90000) + 10000} className='buttonContainerTwo' onClick={this.increaseCounter} >
              <img src={plusIcon} alt={"plus sign"}/>
            </div>
            <div className='buttonContainerThree'>
              <img src={minusIcon} alt={"minus sign"}/>
            </div>
            <div className='buttonContainerFour'>
              <img src={trashIcon} alt={"delete sign"}/>
            </div>
          </div>
          <div className='heroContainer'>
            <div className='buttonContainerOne'>
              <h6>Zero</h6>
            </div>
            <div className='buttonContainerTwo' onClick={this.increaseCounter} >
              <img src={plusIcon} alt={"plus sign"}/>
            </div>
            <div className='buttonContainerThree'>
              <img src={minusIcon} alt={"minus sign"}/>
            </div>
            <div className='buttonContainerFour'>
              <img src={trashIcon} alt={"delete sign"}/>
            </div>
          </div>
          <div className='heroContainer'>
            <div className='buttonContainerOne'>
              <h6>Zero</h6>
            </div>
            <div className='buttonContainerTwo' onClick={this.increaseCounter} >
              <img src={plusIcon} alt={"plus sign"}/>
            </div>
            <div className='buttonContainerThree'>
              <img src={minusIcon} alt={"minus sign"}/>
            </div>
            <div className='buttonContainerFour'>
              <img src={trashIcon} alt={"delete sign"}/>
            </div>
          </div>
          <div className='heroContainer'>
            <div className='buttonContainerOne'>
              <h6>Zero</h6>
            </div>
            <div className='buttonContainerTwo' onClick={this.increaseCounter} >
              <img src={plusIcon} alt={"plus sign"}/>
            </div>
            <div className='buttonContainerThree'>
              <img src={minusIcon} alt={"minus sign"}/>
            </div>
            <div className='buttonContainerFour'>
              <img src={trashIcon} alt={"delete sign"}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

