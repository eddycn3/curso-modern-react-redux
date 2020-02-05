import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSummit = event => {
    event.preventDefault();
    this.props.onSummit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSummit}>
          <div className="field">
            <label>Busca de Imagens</label>
            <input
              value={this.state.term}
              type="text"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
