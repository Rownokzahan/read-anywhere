import React from "react";

const Blog = () => {
    return (
        <div className="py-6 my-12 md:my-20 text-justify">
            <h2 className="text-4xl text-purple text-center font-semibold mb-6">Q & A</h2>
            <div className="mb-6">
                <p className="text-lg font-semibold">Props vs State?</p>
                <p>
                    Props are used to pass data from a parent component to a child component, and the child component cannot modify the props. They are immutable or read-only. State, on the other hand, is an internal data storage area within the component that can be modified by the component itself.
                </p>
            </div>
            <div className="mb-6">
                <p className="text-lg font-semibold">How does the useState hook work?</p>
                <p>
                    The useState hook is a built in tool in React that allows to create and manage state in components. When it is used, it returns an array with two items: the current state value and a function to update that value. You can set the initial state value and use the update function to change it whenever you need to. Whenever the state value changes, React automatically re-renders the component with the new state value.
                </p>
            </div>
            <div className="mb-6">
                <p className="text-lg font-semibold">What is the purpose of the useEffect hook other than fetching data?</p>
                <p>The useEffect hook can be used to update the document title or setting up event listeners, setting up timers, cleaning up resources, or subscribing to external services.</p>
            </div>
            <div>
                <p className="text-lg font-semibold">How does React work?</p>
                <p>React is a JavaScript library that works by breaking down a application into small, reusable components, each with its own state and properties. When a component's state or properties change, React automatically re-renders that component and any affected child components, without re-rendering the entire application</p>
            </div>
        </div>
    );
};

export default Blog;