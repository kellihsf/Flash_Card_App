import './App.css';
import FlashCardBack from './components/FlashCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Flashcard App 🧐</h1>
      <h3>Flip cards over for definition</h3>
      </header>
<div>
    <FlashCardBack />
    <FlashCardBack />
    <FlashCardBack />
    <FlashCardBack />
</div>
<div>
    <FlashCardBack />
    <FlashCardBack />
    <FlashCardBack />
    <FlashCardBack />
</div>
<div>
    <FlashCardBack />
    <FlashCardBack />
    <FlashCardBack />
    <FlashCardBack />
</div>
    </div>
  );
}

export default App;
