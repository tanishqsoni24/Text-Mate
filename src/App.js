import './App.css';

function App() {
  return (
    <> {/* This is JSX Fragment */} 
    <nav className="navBar">
      <h1 className="brandName">TextUtils</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Blogs</a></li>
      </ul>
    </nav>
    </>
  );
}

export default App;
