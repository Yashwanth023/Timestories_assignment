import React from 'react';
import StorySection from './StorySection'; // Import the StorySection component
import './App.css'; // Import the CSS for general app styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button className="home-button">
              <i className="fas fa-home"></i> Home
            </button><h1 style={{textAlign: 'center'}}>News Portal</h1> <button className="login-button">
              <i className="fas fa-sign-in-alt"></i> Login
            </button>
      </header>
      
      
      <main>
        <StorySection /> 
      </main>
      
      {/* Footer if needed */}
      <footer className="App-footer">
        <p>© 2024 News Portal</p>
      </footer>

    </div>
  );
}

export default App;
