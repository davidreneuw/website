import "./App.css";

function App() {
  return (
    <html>
      <header className="App-header">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        ></link>
      </header>
      <div className="content">
        <div className="container">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                test
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                test2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                test3
              </a>
            </li>
          </ul>
        </div>
        <div className="container">test</div>
      </div>
    </html>
  );
}

export default App;
