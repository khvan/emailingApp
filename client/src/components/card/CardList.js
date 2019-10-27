import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render () {
    return (
      <div className="ui six column doubling stackable grid container">
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
      </div>
    );
  }
}

export default CardList;
