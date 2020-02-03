import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  //BOM LUGAR PARA REALIZAR DATA-LOADING QUANDO STATE/PROPS SAO ALTERADOS
  componentDidMount() {
    console.log("Component was redered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  //BOM LUGAR PARA REALIZAR DATA-LOADING
  componentDidUpdate() {
    console.log("Component was updated");
  }


  //
  componentWillUnmount(){

  }

  //RETORNE SOMENTE JSX DAQUI.... EVITE REALIZAR OU RETORNAR OUTRAS COISAS
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Msg. Erro : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>"Carregando..."</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
