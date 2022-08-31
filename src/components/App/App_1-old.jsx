import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';

import css from 'components/App/App.module.css' //todo = старый вариант импорта стилей





export class App extends Component {
  
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,

    initialTotalFeedback: 0,
    initialPositivePercentage: 0,
  };


  static propTypes = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,

    initialTotalFeedback: PropTypes.number.isRequired,
    initialPositivePercentage: PropTypes.number.isRequired,

    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,

    total: PropTypes.number,
    positivePercentage: PropTypes.number,

    title: PropTypes.string,
    message: PropTypes.string,

    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
  };



  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,

    // total: this.props.initialTotalFeedback,
    // positivePercentage: this.props.initialPositivePercentage,
  };


  //! Дополнительная статистика feedBack
  feedBack = {
    total: this.props.initialTotalFeedback,
    positivePercentage: this.props.initialPositivePercentage,
  }


//! onIncrement - для ВСЕХ КНОПОК
  onIncrement = event => {
    const btnName = (event.target.textContent).toLowerCase();

    // console.log('event.target:', event.target.textContent); //!
    // console.log('btnNamt:', btnName); //!

    this.setState(prevState => ({ [btnName]: (prevState[btnName] + 1) }));
  };


  //! good
  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };


  //! neutral
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };


  //! bad
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
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
        
          {/* <h1 className="FeedBack__title">Please leave feedback</h1> */}

          {/* <div className="FeedBack__controls">
            <button type="button" onClick={this.goodIncrement}>Good</button>
            <button type="button" onClick={this.neutralIncrement}>Neutral</button>
            <button type="button" onClick={this.badIncrement}>Bad</button>
          </div> */}
        
          {/* <FeedbackOptions
            good={this.goodIncrement}
            neutral={this.neutralIncrement}
            bad={this.badIncrement}
  
            onLeaveFeedback={"Please leave feedback"}
          /> */}
        
        <SectionTitle title="Please leave feedback">
  
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onIncrement}

            // good={this.goodIncrement}
            // neutral={this.neutralIncrement}
            // bad={this.badIncrement}
          />

          {/* {Object.keys(this.state).map(key => (
            <button key={key}>{key}</button>
          ))} */}

        </SectionTitle>

        {/* <FeedbackOptions
          good={this.goodIncrement}
          neutral={this.neutralIncrement}
          bad={this.badIncrement}
        /> */}

        
          {/* <div className="Statistics">
            <h1 className="Statistics__title">Statistics</h1>

            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>

            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
          </div> */}
        
          {/* <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          /> */}
        
        <SectionTitle
          title="Statistics"
          // total={total}
          // NotificationMessage="There is no feedback"
        >
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
            <NotificationMessage
              message="There is no feedback"
            />}
          
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
