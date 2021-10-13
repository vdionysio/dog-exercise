import React, { Component, createContext } from 'react'

export const MyContext = createContext();

export class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      urls: ["https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg"],
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
