# 📚 Book Finder

A simple React application that allows users to search for books using the [Open Library API](https://openlibrary.org/developers/api).
Built as a take-home assignment to demonstrate clean UI, API integration, and good developer practices.

---

## ✨ Features

* 🔍 Search for books by title or author
* 📖 Display book details (title, author, first publish year, cover image)
* 🖼️ Graceful fallbacks for missing data (default cover & "Author Not Available")
* ⏳ Loading spinner while fetching results
* 🚫 Clear "No books found" message for empty results
* ⚡ Built with Vite for a fast development experience

---

## 🛠️ Tech Stack

* [React](https://react.dev/) – component-based UI
* [Vite](https://vitejs.dev/) – fast bundler & dev server
* [Tailwind CSS](https://tailwindcss.com/) – utility-first styling (if you used it)
* Open Library API – book data

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18+ recommended)
* npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-finder.git
   cd book-finder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📂 Project Structure

```
src/
├── api/          # API logic
│   └── books.js
├── components/   # Reusable UI components
│   ├── BookCard.jsx
│   ├── BookList.jsx
│   └── SearchBar.jsx
├── hooks/        # Custom hooks
│   └── useBookSearch.js
├── pages/        # Page-level components
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📸 Screenshots

*(Optional: Add a few screenshots of your UI here)*

---

## 🙌 Acknowledgements

* [Open Library](https://openlibrary.org/) for providing the book data API
* Placeholder images via [Placeholder.com](https://placeholder.com/)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
