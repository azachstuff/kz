import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Card from './Card';
import AccountsUIWrapper  from './AccountsUIWrapper';
import { Cards } from '../api/cards';

class App extends Component {
  getCards() {
    return [
      // {url: 'http://img.taopic.com/uploads/allimg/140326/235113-1403260U22059.jpg'},
      {url: 'http://img.taopic.com/uploads/allimg/140419/240440-14041ZG54635.jpg'},
      {url: 'https://dimg03.c-ctrip.com/images/tg/696/342/740/f9f552909bdb4f0f99b34bf42488c8fb_R_1024_10000_Q90.jpg'},
      {url: 'https://dimg08.c-ctrip.com/images/fd/tg/g4/M03/6D/3B/CggYHlbXWGOAC0OgAALHCvdMHYE444_R_1600_10000_Mtg_7.jpg'},
      {url: 'https://dimg03.c-ctrip.com/images/fd/tg/g5/M06/FC/62/CggYsFbiJXOAZ7bLACV55djWJsc540_R_1600_10000_Mtg_7.jpg'},
    ]
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Kaza</h2>
        <AccountsUIWrapper />
        <ul>
          {this.props.cards.map(card => <Card key={card._id} {...card} />)}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  cards: PropTypes.array.isRequired
}

export default createContainer(() => {
  const cards = Cards.find({}).fetch();
  const currentUser = Meteor.user();
  console.log(cards);
  return { cards, currentUser };
}, App)