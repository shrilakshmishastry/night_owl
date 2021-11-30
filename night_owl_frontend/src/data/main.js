import {Route,Routes} from 'react-router-dom';
import BookById from '../components/bookById';
import BookListPage from '../components/bookListPage';
import NotFound from '../presentational/notFound/notFound';

const Main = () =>{
    return(
        <Routes>
            <Route exact path="/" element={<BookListPage/>}/>
             
            <Route exact path="/bookdetails/:id" element={<BookById/>} />
              
            <Route path="*" element={<NotFound/>} />
         
        </Routes>
    );
}

export default Main;