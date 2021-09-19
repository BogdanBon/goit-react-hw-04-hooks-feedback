import { useState } from 'react';
// import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../section/Section';
import Statistics from '../statistics/Statistics';
import Analitics from '../analitics/Analitics';
import Notification from '../notification/Notification';

export default function ReviewCounter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = { good, neutral, bad };

  const handleIncrement = option => {
    switch (option) {
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
        break;
    }
  };

  const countTotalFeedback = () => {
    const totalReviews = good + neutral + bad;

    return totalReviews;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalReviews = good + neutral + bad;
    const positiveReviews = good;

    return `${Math.round((positiveReviews / totalReviews) * 100)} %`;
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={state} handleIncrement={handleIncrement} />
      </Section>

      {countTotalFeedback() > 0 ? (
        <div>
          <Section title={'Reviews statistics'}>
            <Statistics
              onReviewGood={good}
              onReviewNeutral={neutral}
              onReviewBad={bad}
            />
          </Section>
          <Section title={'Reviews analitics'}>
            <Analitics
              onTotalReviews={countTotalFeedback()}
              onPositiveReviews={countPositiveFeedbackPercentage()}
            />
          </Section>
        </div>
      ) : (
        <div>
          <Section title={'Reviews statistics'}>
            <Notification message="🤷‍♀️ No feedback given yet 🤷‍♂️" />
          </Section>
        </div>
      )}
    </div>
  );
}

// class OldReviewCounter extends React.Component {
//   static defaultProps = {
//     initialValueGood: 0,
//     initialValueNeutral: 0,
//     initialValueBad: 0,
//   };

//   static propTypes = {
//     initialValueGood: PropTypes.number,
//     initialValueNeutral: PropTypes.number,
//     initialValueBad: PropTypes.number,
//   };

//   state = {
//     good: this.props.initialValueGood,
//     neutral: this.props.initialValueNeutral,
//     bad: this.props.initialValueBad,
//   };

//   handleIncrement = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback() {
//     const totalReviews = this.state.good + this.state.neutral + this.state.bad;

//     return totalReviews;
//   }

//   countPositiveFeedbackPercentage() {
//     const totalReviews = this.state.good + this.state.neutral + this.state.bad;
//     const positiveReviews = this.state.good;

//     return `${Math.round((positiveReviews / totalReviews) * 100)} %`;
//   }

//   render() {
//     return (
//       <div>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={this.state}
//             handleIncrement={this.handleIncrement}
//           />
//         </Section>

//         {this.countTotalFeedback() > 0 ? (
//           <div>
//             <Section title={'Reviews statistics'}>
//               <Statistics
//                 onReviewGood={this.state.good}
//                 onReviewNeutral={this.state.neutral}
//                 onReviewBad={this.state.bad}
//               />
//             </Section>
//             <Section title={'Reviews analitics'}>
//               <Analitics
//                 onTotalReviews={this.countTotalFeedback()}
//                 onPositiveReviews={this.countPositiveFeedbackPercentage()}
//               />
//             </Section>
//           </div>
//         ) : (
//           <div>
//             <Section title={'Reviews statistics'}>
//               <Notification message="🤷‍♀️ No feedback given yet 🤷‍♂️" />
//             </Section>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default ReviewCounter;
