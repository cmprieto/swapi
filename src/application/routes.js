import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Page2 from '../pages/page2';
import { CharactersCard } from '../components/charactersCard';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/character/:id/" element={<CharactersCard />} />
            <Route path="/page/:pages/" element={<Home />} />
            {/*  <Route path="/people/?page=${:pages}" element={<Pagination/>} />  */}
            <Route path={"/page2/"} element={<Page2 />} />
            <Route path="*" element={<div>404</div>} />
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);
export default Router;