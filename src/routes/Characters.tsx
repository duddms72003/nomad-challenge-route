import React from "react";
import { useParams } from "react-router-dom";
import { authors } from "./db";

function Characters() {
  const { authorId, bookTitle } = useParams(); // URL 파라미터에서 authorId와 bookTitle을 가져옴
  const selectedAuthor = authors.find(
    (author) => author.id === Number(authorId)
  ); // 선택된 작가 찾기
  const selectedBook = selectedAuthor?.books.find(
    (book) => book.title === bookTitle
  ); // 선택된 책 찾기

  return (
    <div>
      <h3>Characters</h3>
      <ul>
        {selectedBook?.characters.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
