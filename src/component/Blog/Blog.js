import React from 'react';

const Blog = () => {
    return (
        <div className='blog-container'>
                <h3>01. How does react work?</h3>
                <p>React is a JavaScript library for building user interface.</p>
                <h3>02. Props vs state</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and can not be passed to other components.</p>
                <h3>03. What is "useEffect" used for other than loading the API?</h3>
                <p>Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect.</p>
        </div>
    );
};

export default Blog;