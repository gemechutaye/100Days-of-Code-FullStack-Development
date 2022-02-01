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

/*
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
*/

/*
import React from "react"
import ReactDOM from "react-dom"

const page = (
     <div>
        <h1>Hello M1 Mac Users</h1>
        <h3>Welcome to M1 Mac Launch</h3>
        <ol>
            <li>M1 2020</li>
            <li>M1 pro 2021</li>
            <li>M1 max 2021</li>
            <li>M1 pro 2022</li>
            <li>M1 Max 2022</li>
        </Ol>
     </div>
    )
ReactDOM.render(page, document.getElementById("root"))
// .apepend(mac, document.getElementById)
*/

/*
import React from "react"
import ReactDOM from "react-dom"

const page = (
    <img src=></img>
    <img src="download.png"></img>
)
*/

// Custome Components
// experiment 1
/*
import React from "react"
import ReactDOM from "react-dom"
function TemporaryName() {
    return (
        <div>
            <h1>This is function component</h1>
        </div>   
    )
}
ReactDOM.render(<TemporaryName />, document.getElementById("root"))
*/

// Experiment 2
/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/

/*
import React from "react"
import ReactDOM from "react-dom"

function TempoName() {
    return (
        <div>
            <h1>Why I'm excited about react js</h1>
            <ol>
                <li>Beacuse ut so cool!</li>
                <li>I feel good when I using react</li>
                <li>It's simple for writing</li>
                <li>I can say a lot of things but enough for now.</li>
            </ol>
        </div>
    )
}
ReactDOM.render(<TempoName />, document.getElementById("root"))
*/


/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

/*
import React from "react"
import ReactDOM from "react-dom"
    
    function Page() {
        return (
            <div>
                <header>
                    <nav>
                        <img src="./react-logo.png" width="40px"></img>
                    </nav>
                </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            
                <footer>
                    © 2022 web development. All rights reserved."
                </footer>
            </div>
        )
    }
    ReactDOM.render(<Page />, document.getElementById("root"))
*/


// Parents or Child Components

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

import React from "react"
import ReactDOM from "react-dom"

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png"/>
            </nav>
        </header>
    )
}

function NewBody() {
    return (
           <div>
                <h1>Reasons I'm excited to learn React</h1>
                   <ol>
                        <li>It's a popular library, so I'll be 
                        able to fit in with the cool kids!</li>
                        <li>I'm more likely to get a job as a developer
                        if I know React</li>
                    </ol>
           </div>
    )
}

function Footer() {
    return (
            <footer>
              <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <NewBody />
            <footer/>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))