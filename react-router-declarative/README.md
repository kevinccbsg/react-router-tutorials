# React Router Declarative Example

This example demonstrates the declarative mode of React Router. Declarative mode is similar to the previous versions of React Router and is ideal if you prefer to use your own libraries for state management, data fetching, or other tools. In this mode, React Router functions purely as a router, providing components like `<Routes>`, `<Route>`, `<Outlet />`, and hooks such as `useParams`, `useNavigate`, and `useSearchParams`.

For a detailed overview of the features available in declarative mode, refer to the [React Router API and Mode Availability Table](https://reactrouter.com/start/modes#api--mode-availability-table).

## Installation

To use this mode, install the React Router library:

```bash
npm install react-router
```

## Running This Example

Follow these steps to run the example:

1. **Install Dependencies**  
  Navigate to the project directory and install the required dependencies:

  ```bash
  npm install
  ```

2. **Start the Development Server**  
  Run the following command to start the development server and the fake data which is provided by [json-sever](https://www.npmjs.com/package/json-server).

  ```bash
  npm run serve:dev
  ```

3. **Access the Application**  
  Open your browser and navigate to the URL provided in the terminal to view the application.

---

Feel free to explore the code in this folder to understand how declarative routing is implemented in this example.
## Tools Used in This Example

This example leverages the following tools:

- **React Router**: A library for declarative routing in React applications.
- **json-server**: A simple tool to create a fake REST API for testing and prototyping.
- **Zustand**: A small, fast, and scalable state management library for React applications.


These tools help demonstrate how declarative routing works in a practical scenario, with React Router handling navigation, json-server providing mock data for the application and Zustand is used in this example to manage application state.

