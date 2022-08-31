import { useState  } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';

import css from 'components/App/App.module.css' //todo = старый вариант импорта стилей




export default function App() {
  
  //! State
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  //! Дополнительная статистика feedBack
  let total = 0;
  let positivePercentage = 0;


  //! onIncrement - Набор статистики для ВСЕХ КНОПОК
  const onIncrement = event => {
    const btnName = (event.target.textContent).toLowerCase();

    switch (btnName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };



  //! Отображение общего количества собранных отзывов из всех категорий:
  total = good + neutral + bad; 



  //! Процент положительных отзывов:
  positivePercentage = ((good * 100) / total).toFixed(0);
  

  //! Имитация объекта State для FeedbackOptions
  const allState = {
    good,
    neutral,
    bad,
  }


  console.log("State: ", allState); //!
  

    return (
      <div className={css.FeedBack}>

        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={allState} 
            onLeaveFeedback={onIncrement}
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

