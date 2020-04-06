import React, { Component } from "react";
import Result from "./Result";

export default class Search extends Component {
  state = {
    input: "",
    data: [
      { nama: ".space", harga: "100.000" },
      { nama: ".net", harga: "100.000" },
      { nama: ".xyz", harga: "100.000" }
    ],
    showResult: false,
    result: []
  };

  searchAction = e => {
    this.setState({ input: e.target.value });
    if (e.target.value === "") {
      this.setState({ result: [], showResult: false });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    let word = this.state.input;
    let filter = this.state.data.filter(
      input => input.nama === word.substring(word.indexOf("."), word.length)
    );
    this.setState({ result: filter });
    this.setState({ showResult: true });
  };

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center ">
        <div className="search-container py-4 px-4 rounded shadow">
          <h3 className="mb-2">Search your domain</h3>
          <form onSubmit={this.onSubmit} className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="namadomain.com"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onKeyUp={this.searchAction}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                <i style={{ marginRight: "1rem" }} className="fa fa-search"></i>
                Search
              </button>
            </div>
          </form>
          <Result
            input={this.state.input}
            data={this.state.data}
            result={this.state.result}
            showResult={this.state.showResult}
          />
        </div>
      </div>
    );
  }
}
