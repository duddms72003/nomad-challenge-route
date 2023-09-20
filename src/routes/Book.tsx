import { useParams, Link, Outlet } from "react-router-dom";
import { authors } from "./db";
import Chapters from "./Chapters";

function Book() {
  const { authorId, bookTitle } = useParams();
  const selectedAuthor = authors.find(
    (author) => author.id === Number(authorId)
  );
  const selectedBook = selectedAuthor?.books.find(
    (book) => book.title === bookTitle
  ); // 선택된 책 찾기

  return (
    <div>
      <hr />
      <h2>{selectedBook?.title}</h2>

      <ul>
        <li>
          <Link to={`chapters`}>chapters</Link>
        </li>
        <li>
          <Link to={`characters`}>characters</Link>
        </li>
      </ul>

      {/* <ul>
        {selectedBook?.chapters.map((chapter) => (
          <Link to={`chapters`}>
            <li key={chapter.title}>{chapter.title}</li>
          </Link>
        ))}
      </ul> */}

      <Outlet />
    </div>
  );
}

export default Book;
