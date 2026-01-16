# Data Table

> **Note:** This repository is archived. It was a learning project built in October 2023.

A React CRUD application for managing user data with form validation, sorting, and interactive table display.

## Features

- Add, edit, delete users
- Sort by ID or Name (ascending/descending)
- Form validation with error messages
- Toggle table visibility

## Tech Stack

- React 18 (Class Components)
- CSS3

## Quick Start

```bash
# Clone and install
git clone https://github.com/NeeteshNG/Data_Table.git
cd Data_Table
npm install

# Run
npm start
```

Opens at `http://localhost:3000`

## Project Structure

```
src/
├── Components/
│   ├── Table.js        # Data table
│   ├── Form.js         # Add/Edit form
│   └── Navbar.js       # Navigation
├── App.js              # Main app (Class Component)
├── App.css
└── index.js
```

## Form Validation

| Field | Rules |
|-------|-------|
| Name | Alphabetical only, max 20 chars |
| Age | Numbers only, 0-150 |
| City | Alphabetical only, max 20 chars |

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Development server |
| `npm run build` | Production build |
| `npm run deploy` | Deploy to GitHub Pages |

## Author

**Neetesh Gupta** - [GitHub](https://github.com/NeeteshNG) | [LinkedIn](https://linkedin.com/in/neetesh-gupta)
