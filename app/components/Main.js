import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <row>
          <column cols="4">
            <h1>Hello World!</h1>
            <h2>Hello World!</h2>
            <h3>Hello World!</h3>
            <h6>Hello World!</h6>
          </column>

          <column cols="4">
            <span className="label">Label</span>
            <span className="label label-default">Default</span>
            <span className="label label-black">Black</span>
            <span className="label label-primary">Primary</span>
            <span className="label label-error">Error</span>
            <span className="label label-success">Success</span>
            <span className="label label-warning">Warning</span>
            <span className="label label-white">White</span>
          </column>

          <column cols="4">
            <button small outline upper>Button</button>
            <button type="black" data-small data-outline data-upper>Button</button>
            <button type="primary" small outline upper>Button</button>
          </column>
        </row>
      </div>
    );
  }

}

ReactDOM.render(<Main />, document.getElementById('app'));
