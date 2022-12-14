import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import People from '../pages/characters';
import { CharactersCard } from '../components/charactersCard';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/character/:id/" element={<CharactersCard />} />
            {/*          <Route path="/page/:pages/" element={<Home/>} /> */}
            {/*  <Route path="/people/?page=${:pages}" element={<Pagination/>} />  */}
            <Route path="/characters/:pages/" element={<People />} />
            <Route path="/characters/" element={<People />} />
            <Route path="*" element={<div>404</div>} />
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);
export default Router;