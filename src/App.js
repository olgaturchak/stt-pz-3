import './App.css';
import { getBooks } from './api/anapioficeandfire';
import { useState, useEffect } from 'react';

function App() {
    const [books, setBooks] = useState([]); // Ініціалізація стану як масив
    const [error, setError] = useState(null); // Для обробки помилок

    useEffect(() => {
        getBooks()
            .then(data => {
                console.log("Books data received:", data);
                if (data.entity && Array.isArray(data.entity)) {
                    setBooks(data.entity); // Зберігаємо тільки масив книг
                } else {
                    throw new Error("Unexpected data format");
                }
            })
            .catch(err => {
                console.error("Error fetching books:", err);
                setError("Failed to load books. Please try again later.");
            });
    }, []); // Викликається тільки після першого рендеру

    return (
        <div className="app">
            <section className="app-main">
                <h1>
                    <a
                        className="app-link"
                        href="https://www.anapioficeandfire.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn An API of Ice And Fire
                    </a>
                </h1>
                {error ? (
                    <p className="error-message">{error}</p> // Відображаємо повідомлення про помилку
                ) : books.length > 0 ? (
                    <ul className="app-list">
                        {books.map((book, index) => (
                            <li className="app-list-item" key={index}>
                                <b>{book.name}</b>:{" "}
                                <a
                                    className="app-link"
                                    href={book.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Details
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading books...</p> // Показуємо поки дані завантажуються
                )}
            </section>
        </div>
    );
}

export default App;