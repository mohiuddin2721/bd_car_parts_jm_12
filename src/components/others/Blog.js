import React from 'react';

const Blog = () => {
    return (
        <div className='my-8'>
            <h2 className='font-bold text-center text-4xl text-green-600'>Read</h2>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className='card shadow-md'>
                        <h1 className="text-2xl font-bold">How will you improve the performance of a React Application?</h1>
                        <p className="py-6indent-10 px-8 py-8 text-justify">React only renders components when the state of a component changes. If we extract the part of the code in a local component, then only the component will be rendered and no unnecessary render will happen.
                            Wrapping a child component inside React.memo higher order component, we can prevent rerendering a component if the props received in that component never changes.
                            But if props are object type, say, a function, we have to wrap the handler inside a useCallback function so that the component never rerenders unnecessarily.
                            If we have an expensive function to calculate, we have to wrap the function inside a useMemo Hook to only render or calculate that function only when the dependency changes
                            React create a huge size bundle file bundling all components. But if we split out code with dynamic import wapping component's import with React.lazy higher order function and render the components inside React.Suspense then react only downloads the code for this component.
                            By using windowing libraries like React-Window or React-Virtualized we can only render to the DOM only the visible part of the viewport to the user
                            With React-lazyload or React-lazy-load-image component images will only rendered exactly before when we are about to view to portion of the component that can improve react app performance
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className='card shadow-md'>
                        <h1 className="text-2xl font-bold">What are the different ways to manage a state in a React Application?</h1>
                        <p className="py-6indent-10 px-8 py-8 text-justify">Initially we use useState and useReducer to manage local and global states
                            There are 4 kinda states in a React application, Local State, Global State, Server State and URL State
                            Local State is used inside a local component, we use useState hook to manage local state
                            Global State is necessary when we update data in multiple components
                            Redux is one of the best library to manage Global state
                            Zustand library simplify our work without writing any boilerplate code.
                            Server State is used at the time of fetching data from an external server.
                            swr and react-query manage server side state memory efficiently
                            useLocation and useHistory help us to effectively manage our URL state
                        </p>

                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className='card shadow-md'>
                        <h1 className="text-2xl font-bold">How does prototypical inheritance work?</h1>
                        <p className="py-6indent-10 px-8 py-8 text-justify">JavaScript Objects have a property called [[prototype]]
                            In modern JavaScript the property is __proto__
                            By following the prototypical inheritance system objectA can borrow some method from objectB
                            There is no class feature in core JavaScript, But class in ES6 is specially a syntactical sugar over javascript's prototypical inheritance.
                            Class instances can extend their methods from another instances with the help of __proto__ method
                        </p>

                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className='card shadow-md'>
                        <h1 className="text-2xl font-bold">Why you do not set the state directly in React?</h1>
                        <p className="py-6indent-10 px-8 py-8 text-justify">Firstly, We use state in a react application, so that we can rerender the DOM efficiently and effectively.
                            State or useState hook causes rerendering the DOM
                            If you write code <code> products = [...]</code> in this way, our DOM will not be rerendered, and we will not see any changes or effects on the UI
                            And If we use <code>setProducts([...])</code> like that our DOM will be rerendered and we experience dynamic UI
                        </p>

                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className='card shadow-md'>
                        <h1 className="text-2xl font-bold">What is a unit test? Why should write unit tests?</h1>
                        <p className="py-6indent-10 px-8 py-8 text-justify">Unit test is testing small parts/component of our application in isolation
                            We can split testing methods in 3. Unit Tests, Integration Tests and End-to-End Tests
                            With Unit testing we can identify bugs and problems before publishing to production.
                            We should write Unit Tests because, it is easy to write
                            Unit Tests is less time consuming
                            If we write unit tests, we will face less bugs in integration and end-to-end testing, and lastly, users will face less problems on the production application
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;