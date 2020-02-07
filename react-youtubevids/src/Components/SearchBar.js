import React from "react";

class SearchBar extends React.Component {
  state = { texto: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSummit(this.state.texto);
  };

  onInputChange = e => {
    this.setState({ texto: e.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <div className="ui icon input">
              <input
                type="text"
                value={this.state.texto}
                onChange={this.onInputChange}
              />
              <i className="search icon" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
