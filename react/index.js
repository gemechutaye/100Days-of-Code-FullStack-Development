// reactDom.render(<h1>Hello React</h1>, document.getElelementByID("root"))
// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("start"))

/*
function MainContent() {
    return (
        <h1>Haha React</h1>
    )
}
ReactDOM.render(MainContent, getElementByID("root"))
*/

/*
ReactDOM.render(
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is paragraph</p>
    </div>
    ,
    document.getElementById("root")
)
*/

/*
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is paragraph</p>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("root")
)
*/

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <div>
        <h1>Barista Ge</h1>
        <ul>
            <li>32$ only</li>
            <li>We're Amazing</li>
            <li>Please call us!</li>
        </ul>
    </div>
)
ReactDOM.render(navbar, document.getElementById("root"))

