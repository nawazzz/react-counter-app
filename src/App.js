
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
      counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
      ],
      allCounters: 0
    }
  }

  componentDidUpdate = (event) => {
    console.log(this.state)
  }

  increaseCounter = (event) => {
    console.log(event)
    const addToCounter = this.state.counters.filter((elm, index) => {
      if (elm.id === event.target.id) {
        elm.value++
      }
    })
    this.setState({
      counters: addToCounter
    })
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
              <h6>{this.state.counters.length}</h6>
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
          <div className='heroContainer' onClick={this.increaseCounter}>
            <div className='buttonContainerOne' id={1}>
              <h6>{this.state.counters.length>0? this.state.counters.length:"Zero"}</h6>
            </div>
            <div id={2} className='buttonContainerTwo' >
              <img src={plusIcon} alt={"plus sign"}/>
            </div>
            <div id={3} className='buttonContainerThree'>
              <img src={minusIcon} alt={"minus sign"}/>
            </div>
            <div id={4} className='buttonContainerFour'>
              <img src={trashIcon} alt={"delete sign"}/>
            </div>
          </div>
          <div className='heroContainer' onClick={this.increaseCounter}>
            <div id={1} className='buttonContainerOne'>
              <h6>Zero</h6>
            </div>
            <div id={2} className='buttonContainerTwo' >
              <img src={plusIcon} alt={"plus sign"}/>
            </div>
            <div id={3} className='buttonContainerThree'>
              <img src={minusIcon} alt={"minus sign"}/>
            </div>
            <div id={4} className='buttonContainerFour'>
              <img src={trashIcon} alt={"delete sign"}/>
            </div>
          </div>
          <div className='heroContainer' onClick={this.increaseCounter}>
            <div className='buttonContainerOne'>
              <h6>Zero</h6>
            </div>
            <div className='buttonContainerTwo'>
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

