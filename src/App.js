import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import userThunkAC from "./redux/userThunkAC";

class MainPage extends React.Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
  };

  sendUserRequest = () => {
    this.props.dispatch(userThunkAC(this.props.dispatch));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Redux check</h1>
          <div>
            <input type="button" value="Send" onClick={this.sendUserRequest} />
            <span>Send users/me request</span>
          </div>
          <div>
            <span>Status: {this.props.currentUser.status}</span>
          </div>
          {this.props.currentUser.data && (
            <h3>Hello, {this.props.currentUser.data.firstName}</h3>
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.user,
  };
};

export default connect(mapStateToProps)(MainPage);
