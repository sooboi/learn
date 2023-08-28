import React from "react";
import Counter from "./components/Counter";

export default class extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("컴포넌트 마운트");
  }

  componentWillUnmount() {
    console.log("컴포넌트 언마운트");
  }

  render() {
    return (
      <div className="container">
        <div className="banner">
          Total Count : {this.state.count} {this.state.count > 10 ? "🤯" : "🥺"}
        </div>
        <div className="counter">
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
