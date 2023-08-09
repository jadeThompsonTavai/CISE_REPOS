import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<ShowBookList />}  />
        <Route exact path="/create-book" element={<CreateBook />}  />
        <Route exact path="/edit-book" element={<UpdateBookInfo />}  />
        <Route exact path="/show-book" element={<ShowBookDetails />}  />
      </Routes>
    </div>
   </Router>
  );
};

export default App;
