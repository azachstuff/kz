import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config';
import App from '../imports/ui/App';

Meteor.startup(function(){
  render(<App />, document.getElementById('root'));
});
