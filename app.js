import React from 'react';
import ReactDOM from 'react-dom/client';



//Functional Component



const Homepage = () => {
    return (
        <div id = "container">
            <Navbar />
            <Main />
            <Footer />
            </div>
    );  
};

const Navbar = () => {
    return <nav>This is a Navbar</nav>
};

const Main = () => {
    return (
        <main>
        <p>This is the main section</p>
        </main>
    );
};

const Footer = () => {
    return (
        <footer>
            <p> This is a footer</p>
        </footer>
    );
};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Homepage />);