import React, { Component, createContext } from 'react'

export const MyContext = createContext();

export class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      urls: [],
      error: '',
    }
    this.fetchDog = this.fetchDog.bind(this);
    this.removeDog = this.removeDog.bind(this);
  }

  fetchDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((json) => this.setState((prev) => ({ urls: [...prev.urls, json.message] })))
  }

  removeDog(targetSrc) {
    this.setState((prev) => ({
      urls: prev.urls.filter((src) => src !== targetSrc)
    }))
  }

  render() {
    const { urls } = this.state;
    const contextValue = { urls, fetchDog: this.fetchDog, removeDog: this.removeDog}
    return (
      <MyContext.Provider value={ contextValue }>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default Context
