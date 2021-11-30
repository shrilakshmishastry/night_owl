import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { getAllBooks } from './data/apiCall/getBooks';
import Main from './data/main';
import Header from './presentational/header/header';
import AddBook from './components/addBooks';
import { Modal, Button } from 'react-bootstrap';

function App() {
  const bodyRef = useRef(null)
  useEffect(() => {
    getAllBooks();
  }, []);

  const [modalVisible, setmodalVisible] = useState(false);

  function handleModalClose() {
    // bodyRef.current.style.visibility = "visible";
    setmodalVisible(false);
  }

  function handleModalOpen() {
    // bodyRef.current.style.visibility = "hidden";
    setmodalVisible(true)
  }

  return (
    <Router className="App">
      <AddBook
        modalVisible={modalVisible}
        handleModalClose={handleModalClose}
      />

      <Header
        handleModalOpen={handleModalOpen}
      />
      <Main />

    </Router>
  );
}

export default App;
