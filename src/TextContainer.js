import React, { Component} from "react";
import { connect } from "react-redux";
import { addComment } from "./actions";

const mapDispatchToProps = (dispatch) => ({
  addComment: (text) => dispatch(addComment(text)) 
});

const mapStateToProps = state => {
  return {
    comments: state.comments,
    form: state.form
  }
};

class TextForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      id: ""
    };
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state.text);
    this.setState({text: ""});
  }

  render() {
    return(
      <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <textarea
            value = {this.state.text}
            onChange = {(e) => this.handleChange(e)}
            rows = "8"
            cols = "40"
            />
        </div>
        <div>
          <button type="submit">Add comment</button>
        </div>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextForm)
