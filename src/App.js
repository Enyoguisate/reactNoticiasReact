import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';
import PropTypes from 'prop-types';

class App extends Component {
  // a8e79a04ca6d44799f55d2986da68c8d
  // https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-26&sortBy=publishedAt&apiKey=a8e79a04ca6d44799f55d2986da68c8d
  // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a8e79a04ca6d44799f55d2986da68c8d
  // https://newsapi.org/v2/everything?q=apple&from=2019-11-25&to=2019-11-25&sortBy=popularity&apiKey=a8e79a04ca6d44799f55d2986da68c8d
  // https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a8e79a04ca6d44799f55d2986da68c8d
  // https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a8e79a04ca6d44799f55d2986da68c8d
  state = { 
    noticias: [],
    categoria: ''
   }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a8e79a04ca6d44799f55d2986da68c8d`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({noticias: noticias.articles});
  }

  render() { 
    return ( 
      <Fragment>
        <Header 
          titulo='Noticias React API'>
        </Header>
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias}></Formulario>
          <ListaNoticias noticias={this.state.noticias}></ListaNoticias>
        </div>
      </Fragment>
     );
  }
}

export default App;
