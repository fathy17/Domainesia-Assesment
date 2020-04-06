import React, { Component } from "react";

export default class Result extends Component {
  render() {
    console.log(this.props.result);
    return (
      <div>
        {!this.props.result.length && this.props.showResult ? (
          <div>
            <small className="not-found">Sorry, Domain isn't available</small>
            <hr />
            <h5>Recomendation For You</h5>
            {this.props.data.map(item => {
              return (
                <div
                  key={item.nama}
                  className="d-flex align-items-center justify-content-between"
                >
                  <div>
                    <p>
                      {this.props.input.substring(
                        0,
                        this.props.input.indexOf(".")
                      )}
                      {item.nama}
                    </p>
                    <small style={{ color: "#54a9f2" }}>Rp. {item.harga}</small>
                  </div>
                  <button className="buy">Buy</button>
                </div>
              );
            })}
          </div>
        ) : this.props.result.length ? (
          <div>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
              <p style={{ color: "#4cdb83" }}>Domain is Available!</p>
              <button className="buy">Buy</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
