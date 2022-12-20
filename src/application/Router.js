import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import People from '../pages/People';
import CharactersCard from '../components/CharactersCard';
import Layout from './Layout';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path={process.env.PUBLIC_URL + "/Character/:id/"} element={<CharactersCard />} />
                {/*  <Route path="/people/?page=${:pages}" element={<Pagination/>} />  */}
                <Route path={process.env.PUBLIC_URL + "/Characters/:pages/"} element={<People />} />
                <Route path={process.env.PUBLIC_URL + "/Characters/"} element={<People />} />
                <Route path="*" element={<div>404</div>} />
                <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
export default Router;