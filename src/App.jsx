import "./App.scss";
import "./components/TimerCount";
import TimerCount from "./components/TimerCount";
import Button from "./components/Button";
import Credit from "./components/Credit";

function App() {
  return (
    <>
      <header></header>
      <main>
        <h1>React Pomodoro Timer</h1>
        <div className="timer-wrapper">
          <p>Session</p>
          <TimerCount />
          <div className="main-buttons-wrapper">
            <Button nameIcon={`fa-play`} />
            <Button nameIcon={`fa-rotate-right`} />
          </div>
        </div>
        <div className="length-buttons-wrapper">
          <div className="length-break">
            <p>Break Length</p>
           <div className="centered-div">
           <Button nameIcon={`fa-minus`} />
            <p>5</p>
            <Button nameIcon={`fa-plus`} />
           </div>
          </div>
          <div className="length-session">
            <p>Session Length</p>
            <div className="centered-div">
            <Button className="btn-btn" role="button" nameIcon={`fa-minus`} />
            <p>25</p>
            <Button className="btn-btn" role="button" nameIcon={`fa-plus`} />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Credit />
      </footer>
    </>
  );
}

export default App;

// https://react-tomato-clock.netlify.app/
// https://clock.freecodecamp.rocks/
// https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock
