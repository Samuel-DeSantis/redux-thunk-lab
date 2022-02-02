import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'
class App extends Component {
  
  componentDidMount () {this.props.fetchCats()}

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

/* 
Any key/value pairs returned by mapStateToProps will become props
in the App component
 */

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)