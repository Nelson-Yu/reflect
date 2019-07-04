import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 600
  };

  state = {
    valuesIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
      });
    }, this.props.interval);
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;
