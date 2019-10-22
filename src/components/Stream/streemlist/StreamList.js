import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllStreams } from "../../../actions";
class StreamList extends Component {
  componentDidMount() {
    this.props.getAllStreams();
  }
  renderList = stream => {
    return (
      <li className="collection-item avatar " key={stream.id}>
        <i className="material-icons circle teal">camera_enhance</i>
        <p className="title "> {stream.title}</p>
        <p>{stream.description}</p>
        {this.props.currentUserId === stream.userId ? this.renderButton() : ""}
      </li>
    );
  };
  renderButton = () => {
    return (
      <div className="secondary-content">
        <button className="waves-effect waves-light orange btn-small ">
          <i className="material-icons left">edit</i>Edit
        </button>
        <button
          className="waves-effect waves-light red btn-small "
          style={{ marginLeft: "1rem" }}
        >
          <i className="material-icons left">delete</i>
          Delete
        </button>
      </div>
    );
  };
  render() {
    return (
      <div>
        <h3>Streams</h3>
        <div className="card">
          <div className="collection" style={{ border: "0" }}>
            {this.props.streams.map(stream => this.renderList(stream))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  };
};
export default connect(
  mapStateToProps,
  { getAllStreams }
)(StreamList);
