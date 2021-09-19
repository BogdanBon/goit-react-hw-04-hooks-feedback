import ReviewCounter from './components/reviewCounter/ReviewCounter';

function App() {
  return (
    <ReviewCounter
      initialValueGood={0}
      initialValueNeutral={0}
      initialValueBad={0}
    />
  );
}

export default App;
