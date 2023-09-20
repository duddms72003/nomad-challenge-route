import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "./db";

function Author() {
  const { authorId } = useParams();
  const selectedAuthor = authors.find(
    (author) => author.id === Number(authorId)
  );

  return (
    <div>
      <h1>{selectedAuthor?.name}</h1>

      <ul>
        {selectedAuthor?.books.map((book) => (
          <li key={book.id}>
            <Link to={`${book.title}`}>{book.title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default Author;
