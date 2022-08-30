import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';

import css from 'components/App/App.module.css' //todo = старый вариант импорта стилей





export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  //! Дополнительная статистика feedBack
  feedBack = {
    total: 0,
    positivePercentage: 0,
  }


//! onIncrement - для ВСЕХ КНОПОК
  onIncrement = event => {
    const btnName = (event.target.textContent).toLowerCase();

    // console.log('event.target:', event.target.textContent); //!
    // console.log('btnNamt:', btnName); //!

    this.setState(prevState => ({ [btnName]: (prevState[btnName] + 1) }));
  };




  //! Отображение общего количества собранных отзывов из всех категорий: 1-ый вариант
  countTotalFeedback1 = (good, neutral, bad) => {
    // console.log("good: ", good); //!
    // console.log("neutral: ", neutral); //!
    // console.log("bad: ", bad); //!
    return (good + neutral + bad);
  };

  //* Отображение общего количества собранных отзывов из всех категорий: 2-ой вариант
  countTotalFeedback2 = () => {
    return Object.values(this.state).reduce((accum, item) => accum + item, 0);
  };


  //! Процент положительных отзывов: 1-ый вариант
  countPositiveFeedbackPercentage1 = (total, good) => {
    // console.log("total: ", total); //!
    // console.log("good: ", good); //!

    let percentage = (good * 100) / total;
    // console.log("percentage: ", percentage); //!
    // console.log(isNaN(percentage)); //!
    // console.log("initialPositivePercentage: ", this.props.initialPositivePercentage); //!

    if (isNaN(percentage)) percentage = this.props.initialPositivePercentage;
    // isNaN(percentage) ? percentage = 0 : percentage = (good * 100) / total;

    return (percentage).toFixed(0);
  };

//* Процент положительных отзывов: 2-ой вариант
  countPositiveFeedbackPercentage2 = () => {
    return Number((this.state.good / this.countTotalFeedback2() * 100).toFixed(0));;
  };




  render() {
    const { good, neutral, bad } = this.state;
    // console.log("good: ", good); //!
    // console.log("neutral: ", neutral); //!
    // console.log("bad: ", bad); //!

    //! Отображение общего количества собранных отзывов из всех категорий:
    // this.feedBack.total = this.countTotalFeedback1(good, neutral, bad); //! 1-ый вариант
    this.feedBack.total = this.countTotalFeedback2(); //* 2-ой вариант
    // const totalFeedback1 = this.countTotalFeedback(good, neutral, bad); //? 3-ий вариант, более простой, без feedBack {}
    
    const { total } = this.feedBack;

    //! Процент положительных отзывов:
    // this.feedBack.positivePercentage = this.countPositiveFeedbackPercentage1(total, good); //! 1-ый вариант
    this.feedBack.positivePercentage = this.countPositiveFeedbackPercentage2(); //* 2-ой вариант
    // const positivePercentage1 = this.countPositiveFeedbackPercentage(totalFeedback1, good); //? 3-ий вариант, более простой, без feedBack {}

    const { positivePercentage } = this.feedBack;

    // console.log("total: ", total); //!
    // console.log("positivePercentage: ", positivePercentage); //!


    // this.state.good = this.goodIncrement;
    // this.state.neutral = this.neutralIncrement;
    // this.state.bad = this.badIncrement;

    // console.log(this.state); //!
    

    return (
      <div className={css.FeedBack}>

        <SectionTitle title="Please leave feedback">
  
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onIncrement}
          />

        </SectionTitle>

        
        <SectionTitle title="Statistics">
          {total
            ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
            :
            <NotificationMessage message="There is no feedback" />}
          
        </SectionTitle>
      </div>
    );
  }
}












//! OLD ========================================================
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 80,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
