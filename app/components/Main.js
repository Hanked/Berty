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
          <column data-cols="4">
            <h1>Hello World!</h1>
            <h2>Hello World!</h2>
            <h3>Hello World!</h3>
            <h6>Hello World!</h6>
          </column>

          <column data-cols="4">
            <span className="label label-primary">Primary</span>
            <span className="label label-error">Error</span>
            <span className="label label-success">Success</span>
            <span className="label label-warning">Warning</span>
          </column>

          <column data-cols="4">
            <button data-small data-outline data-upper>Button</button>
            <button type="black" data-small data-outline data-upper>Button</button>
            <button type="primary" data-small data-outline data-upper>Button</button>
          </column>
        </row>
      </div>
    );
  }

}

ReactDOM.render(<Main />, document.getElementById('app'));
