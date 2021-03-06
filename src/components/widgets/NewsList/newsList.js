import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Button from '../Buttons/buttons'
import axios from 'axios';

import styles from './newsList.css';

import { URL } from '../../config';

class newsList extends Component {

  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
    .then( response => {
      this.setState ({
        items: [...this.state.items, ...response.data]
      })
    })
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  }

  renderNews = (type) => {
    let template = null;

    switch(type){
      case('card'):
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter
            }}
            timeout={500}
            key={i}
          >
            <div>
              <div className={styles.newslist_item}>
                <Link to={`/articles/${item.id}`}>
                teams
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ))
      break;

      default:
        template = null;
    }

    return template;
  }

  render() {
    
    return (
      <div>
        <TransitionGroup
          component="div"
          className="list"
        >
          { this.renderNews( this.props.type )}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    );
  }
}

export default newsList;