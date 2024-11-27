 job of Parcel
- HMR (Hot Module Replacement)
- Makes development build our project
- Hosts the develpoment onto the server
- Faster Build(caching)
- Image Optimization
- Minification of File
- Bundling
- Compressing

# JSX

- Html like Syntax

# Job of Parcel
- Transpiling jsx code
- Parcel does this transpiling job with the help of external package itself which is Babel.

# Babel
- Babel is a JavaScript compiler and toolchain primarily used to convert modern JavaScript code (ES6+ and beyond) into a version of JavaScript that is compatible with older environments, such as browsers that do not support the latest language features. Babel helps developers use the newest JavaScript features without worrying about compatibility issues.

Key Features of Babel
- Transpilation:Converts modern JavaScript syntax to ES5 (or older versions), making it compatible with older browsers or environments.
- Plugins and Presets:Babel is highly customizable. Plugins handle specific transformations, while presets are collections of plugins targeting particular goals (e.g., @babel/preset-env adapts the code for specified browser versions).

# React Element

const child = (
    <div id='container'>
        <h1>Hello World</h1>
        <h2>Hello</h2>
    </div>
);
- This child is React Element . This is not a div tag itself.

# React Component
- (button, navbar)
i. Functional Component
-Functional Component is a normal Javascript function which returns jsx

ii. Class based Component

# How to create a react app (Template)
- using command:
npx create-react-app my-app-name