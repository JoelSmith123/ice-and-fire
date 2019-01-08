import React, { Component } from 'react';
// import { mapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import { fetchHouseData } from '../../thunks/fetchHouseData'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount = async () => {
    await this.props.fetchData()
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <div className='Container'>
            {
              this.props.houseData.map(house => {
                console.log(house)
                return (
                  <div className='Card'>
                    <h1>{house.name}</h1>
                    <h3>{house.founded}</h3>
                    <h3>{house.seats}</h3>
                    <h3>{house.titles}</h3>
                    <h3>{house.coatOfArms}</h3>
                    <h3>{house.ancestralWeapons}</h3>
                    <h3>{house.words}</h3>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  houseData: state.hasFetchedHouseData
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchHouseData())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
