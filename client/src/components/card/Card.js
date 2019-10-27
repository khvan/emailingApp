import React from 'react';
import faker from 'faker'

class Card extends React.Component {
  render () {
    return (
      <div>
        <div class="ui card">
          <div class="image">
           <img src={faker.image.people()}/>
          </div>
          <div class="content">
            <a class="header">Yuriy</a>
            <div class="meta">
              <span class="date">Joined in 2013</span>
            </div>
            <div class="description">
              Yuriy is a developer from India with 15 years of experience. Certified Walmart worker. Professional wanker. 
              \n 
            </div>
          </div>
          <div class="extra content">
            <a>
              <i class="user icon" />
              22 Friends
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default Card;
