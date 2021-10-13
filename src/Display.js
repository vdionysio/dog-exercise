import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDog, remove } from './redux/actions'

class Display extends Component {
  render() {
    const { urls, fetchImg, removeImg } = this.props;
    return (
      <div>
        { urls.map((src, index) => (
          <input
            type="image"
            key={ index }
            width="100px"
            src={ src }
            alt="random dog"
            onClick={ () => removeImg(src)}
          />
        ))}
        <button
          type="button"
          onClick={ fetchImg }
        >
          Adicionar Dog
        </button>
        <p>Click na imagem para remover da lista</p>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  urls: state.dog.urls,
  isLoading: state.dog.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  fetchImg: () => dispatch(fetchDog()),
  removeImg: (src) => dispatch(remove(src)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
