import './App.css';
import Quiz from './components/Quiz';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <h1>HOT ACADEME 🔥 prep quiz</h1>
        <h3>Dear final-year students, the Unified Tertiary Matriculation 
          Examination (U.T.M.E.) is less than a month away. Are you prepared? 
          Test your preparedness now!
        </h3>
        <h2>Number of Cards: 20</h2>
      </div>
      <Quiz />
    </div>
  )
}

export default App
