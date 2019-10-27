import React from 'react';
import CardList from './card/CardList';
import './HomePage.css'
class HomePage extends React.Component {
  render () {
    return (
      <div className = 'ui container'>
        <div className="ui placeholder segment" style={{"backgroundColor": "#EFE2E5"}}>
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <label style ={{"fontFamily":"Merriweather, serif"}}>Find a perfect mentor</label>
                  <div className="ui left icon input" />
                </div>
                <div className="ui blue submit button">Subscribe</div>
              </div>
            </div>
            <div className="middle aligned column">
              <div className="ui big button">
                <i className="bug icon" />
                Try for free!
              </div>
            </div>
          </div>
          <div className="ui vertical divider">
            Or
          </div>
        </div>
        <CardList />
      </div>
    );
  }
}

export default HomePage;
