import './App.css';
import WriteEmailTask from './tasks/WriteEmail';

function App() {
  return (
    <div className="App bg-slate-50">
      <header className="App-header bg-slate-800 p-2">
        <h1 className="text-2xl px-2 font-bold text-white tracking-tighter">
          WeCare
        </h1>
      </header>
      <main className="text-base px-4">
        <WriteEmailTask />
      </main>
    </div>
  );
}

export default App;
