# React-App-Book
This application shows user's book list that can be edited, deleted.
<br /> 
period : 2023.12 ~ 2024.01
<br />
blog : https://www.notion.so/Hands-on-Book-App-c5002196a7e644c28f5858fc470623a0

# App diagram
![Untitled](https://github.com/Tokitaka/react-book-app/assets/110197274/97d5ab2d-480b-4ee2-81ae-2eeb6688ce18)
![Untitled (1)](https://github.com/Tokitaka/react-book-app/assets/110197274/2af3d123-686c-4490-aa10-35f24f6ab019)
# Skills
- React.js 
- Redux 
- JSON-SERVER 
- REST Client (VScode built-in)
# React-Hooks
<h3>useState</h3>
Allows a component to use the state system.
<h3>useEffect</h3>
Allows a component to run code at specific points in time.
<h3>useContext</h3>
Allows a component to access values stored in context.
<h3>Custom-hooks</h3> 
- useBookContext : Allows to use BookContext.

<br />

# State Management
<h3>version-1 : Props + EventHandler </h3>
Define 'books' state and functions (create, edit, delete, fetch) in App component and pass them down to as Props. And whenever a child component changes the state, pass it up to the App through event object of handler.
<br />
Result : 
Turns out, it's very easy to make a mistake along the way.
<h3>version-2: React Context</h3>
Create a Context (React feature) for sharing 'Application State (global use)' in 'Provider' and register 'Consumer' component inside of Provider. It can be accessed anywhere from component registered as Consumers and their child.
<br />
Result : it's more intuitive and cleaner code. It doesn't have to duplicate code as passing down props where even don't need them.
