import React, { Component } from 'react'
import { MyContext } from './Context';

class Display extends Component {
  render() {
    const { urls, fetchDog, removeDog } = this.context;
    return (
      <div>
        { urls.map((src) => (
          <input
            type="image"
            width="100px"
            src={src}
            alt="dog"
            onClick={ () => removeDog(src) }
          />
        ))}
        <button
          onClick={ fetchDog }
        >
          Adicionar Doguinho
        </button>
      </div>
    )
  }
}

Display.contextType = MyContext;

export default Display;
