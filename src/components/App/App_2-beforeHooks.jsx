import React, { Component } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';

import css from 'components/App/App.module.css' //todo = старый вариант импорта стилей





export default class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  //! Дополнительная статистика feedBack
  total = 0;
  positivePercentage = 0;



  //! onIncrement - Набор статистики для ВСЕХ КНОПОК
  onIncrement = event => {
    const btnName = (event.target.textContent).toLowerCase();
    this.setState(prevState => ({ [btnName]: (prevState[btnName] + 1) }));
  };



  //! Отображение общего количества собранных отзывов из всех категорий: 
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((accum, item) => accum + item, 0);
  };



//! Процент положительных отзывов:
  countPositiveFeedbackPercentage = () => {
    return Number((this.state.good / this.countTotalFeedback() * 100).toFixed(0));;
  };


  render() {
    const { good, neutral, bad } = this.state;

    //! Отображение общего количества собранных отзывов из всех категорий:
    this.total = this.countTotalFeedback(); //* 2-ой вариант
    
    //! Процент положительных отзывов:
    this.positivePercentage = this.countPositiveFeedbackPercentage(); 

    return (
      <div className={css.FeedBack}>

        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onIncrement}
          />
        </SectionTitle>

        
        <SectionTitle title="Statistics">
          {this.total
            ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total}
              positivePercentage={this.positivePercentage}
            />
            :
            <NotificationMessage message="There is no feedback" />}
        </SectionTitle>
      </div>
    );
  }
}
