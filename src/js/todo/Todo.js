import React, { Component } from 'react';

import Table from 'jazasoft/components/GTable';
import Box from 'grommet/components/Box';
import PageHeader from 'jazasoft/components/PageHeader';

class Todo extends Component {

  constructor () {
    super();
    this._onClick = this._onClick.bind(this);

    this.state = {
      data: [
        {id: 1, text: 'Pay Electricity Bill'},
        {id: 2, text: 'Recharge TV'}
      ]
    };
  }

  _onClick (action, index) {
    console.log(action);
    console.log(index);
  }

  render() {

    return (
      <Box>
        <PageHeader title='Todo' addControl={true}/>
        <Box alignSelf='center'>
          <Table  
            headers={['text']}
            data={this.state.data}
            container='list'
            width='medium'
            scope='delete'
            onClick={this._onClick}
          />
        </Box>
      </Box>
    );
  }
}

export default Todo;