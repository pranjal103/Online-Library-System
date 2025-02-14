# Online Library System

A React-based online library system where users can browse books by category, view details of books, and add new books to the library. The application includes dynamic routing, search functionality, and form validation for adding books, along with state management using Redux.

## Features

- **Home Page**: 
  - Welcome message and a list of book categories (Fiction, Non-Fiction, Sci-Fi, etc.).
  - Display of popular books with a link to view more details.
  - Navigation bar with links to "Home", "Browse Books", and "Add Book".
  
- **Browse Books Page**:
  - List of books filtered by category.
  - Dynamic routing to filter books by category (e.g., `/books/:category`).
  - Search functionality to filter books by title or author.
  - "View Details" link for each book leading to the Book Details page.
  
- **Book Details Page**:
  - Displays detailed information about the selected book (title, author, description, and rating).
  - "Back to Browse" button to return to the Browse Books page.

- **Add Book Page**:
  - A form for adding new books to the library.
  - Redux state management for the books list.
  - After submission, the user is redirected to the Browse Books page with the newly added book.
  - Form validation to ensure all fields are correctly filled out.
  
- **404 Page**:
  - A "Page Not Found" route for any undefined routes.
  - A link to navigate back to the Home page.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.0 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pranjal103/Online-Library-System.git
   
2. navigate to Project directory
3. install dependencies
    ```bash
    npm install 

4. running the application
    ```bash
    npm run dev
    
