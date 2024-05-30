import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';

function App() {
    const [modal, setModal] = useState();

    const handleModal = (modal, data) => {
        const M = modal;

        setModal(<M onClick={handleModal} data={data} />);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, key) => {
                        const Layout = route.layout === null ? Fragment : route.layout ? route.layout : DefaultLayout;

                        const Page = route.component;
                        return (
                            <Route
                                key={key}
                                path={route.path}
                                element={
                                    <Layout modal={modal} onClick={handleModal}>
                                        <Page onClick={handleModal} />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
