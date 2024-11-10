# React Hooks  Code Challenge - PlantShop

This is a simple React application that allows users to manage a plant shop. It features basic CRUD operations (Create, Read, Update, Delete) for plants, utilizing React hooks and state management.

## Core Features

- **Add a new plant**: Users can add new plants by providing a name, image URL, and price.
- **View plants**: A list of plants is displayed with their name, price, and availability (in stock or out of stock).
- **Update plant price**: Users can edit the price of a plant.
- **Toggle availability**: Plants can be marked as in stock or out of stock.
- **Delete plant**: Users can remove a plant from the list.

## Installation

To get started with this project, you will need to clone the repository and install the dependencies.

1. Clone the repository:
   ```bash
   git clone https://github.com/JasperMunene/react-hooks-cc-plantshop.git
   cd react-hooks-cc-plantshop
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
### Running the Mock API Server

The project uses `json-server` to simulate a backend for plants. To start the mock API server, run the following:

```bash
json-server --watch db.json
```

This will start the mock API server on [http://localhost:3000](http://localhost:3000).

### Running the Development Server

To run the React development server:

```bash
npm start
```

This will start the React app on [http://localhost:3001](http://localhost:3001).



### Adding, Updating, and Deleting Plants

The UI allows you to:

- Add a new plant by filling in the plant name, image URL, and price in the form.
- Edit the price of an existing plant by clicking the "Edit Price" button.
- Toggle availability between "In Stock" and "Out of Stock".
- Delete a plant from the list.

### Testing

To run tests using Jest:

```bash
npm test
```

This will run the tests in the project and output the results in the terminal.

## Dependencies

This project uses the following dependencies:

- `json-server`: A fake REST API server to simulate a backend for plants.
- `node-fetch`: For making network requests
- `react`: The main library for building the user interface.
- `react-dom`: For DOM rendering in React.
- `react-scripts`: A package used to run scripts for a React application.

### Development Dependencies

- `@testing-library/jest-dom`: For DOM assertions in Jest tests.
- `@testing-library/react`: For testing React components.
- `@testing-library/user-event`: For simulating user events in tests.
- `jest`: A testing framework used in the project.

## Project Structure

- **`src/`**: Contains the React components and other source files.
- **`db.json`**: The mock data file used by `json-server` to simulate a backend.
- **`package.json`**: The configuration file for managing dependencies and scripts.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request with your changes. Please ensure that your code follows the existing code style and includes appropriate tests.

## Author

Jasper Munene


## License

The content of this site is licensed under the MIT license Copyright (c) 2024.
