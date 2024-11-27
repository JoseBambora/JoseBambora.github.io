import './App.css';
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Projects } from './components/content/Projects';
import { Header } from './components/sub-components/Header';
import { Career } from './components/content/Career';
import { Home } from './components/content/Home';
import { Skills } from './components/content/Skills';
import { Education } from './components/content/Education';
import '../src/style/sub-components/Body.css'

function App() {
    return (
        <Router>
            <div className="container-page">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    ></Route>
                    <Route
                        path="/skills"
                        element={<Skills />}
                    ></Route>
                    <Route
                        path="/education"
                        element={<Education />}
                    ></Route>
                    <Route
                        path="/projects"
                        element={<Projects />}
                    ></Route>
                    <Route
                        path="/career"
                        element={<Career />}
                    ></Route>
                </Routes>
            </div>
        </Router >
    );
}

export default App;
