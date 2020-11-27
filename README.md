# React widget App

React app used to learn about hooks and navigation

Four widgets implemented using `useState`, `useEffect` and `useRef`


>>> Live example: https://widgets-ashen.vercel.app
NOTE: Translate widget doesn't work as Google API key only valid on `localhost:3000`


- Accordion widget - `useState`
  - Displays a list that can open/close based on selection
- Search widget - `useState`, `useEffect`
  - Takes a search term and displays list of Wikipedia entries
- Dropdown widget - `useState`, `useEffect` and `useRef`
  - Reusable dropdown widget 
- Translate widget - `useState`, `useEffect`
  - Uses the Dropdown widget and a text input to search Google Translate API
  - API key only works on `localhost:3000`


## Navigation

Implemented organically (without React-Router) to get an understanding of the dynamics behind routing

### Routing

Create `Route` component
Checks the path and shows children if match

Wrap each widget in `Route` tags with relevant path

### Header/Navigation links

Using anchor tags reloads entire page each time

`Link` component that emits navigation event on selection

- Use `window.history.pushState({}, '', '/translate')` to change path
- PopStateEvent to dipatch the navigation event when path changes
  - Event listener in useEffect on Route component
  - Every Route listening for popstate change
- Set state of pathname in Route event listener
  - Force re-render on change to display relevant Route component children
