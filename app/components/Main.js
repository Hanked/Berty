import React from 'react';
import ReactDOM from 'react-dom';
import '../../sass/primer-2.4.0/primer.scss';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick() {
    console.log('click!!!');
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" type="button" onClick={this.handleClick}>
          Primary button
        </button>

        <div className="flash flash-warn">
          Flash message goes here. Foo!
        </div>
      </div>
    );
  }

}

ReactDOM.render(<Main />, document.getElementById('app'));
