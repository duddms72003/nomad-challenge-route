import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./routes/Home";
import About from "./routes/About";
import Author from "./routes/Author";
import Book from "./routes/Book";
import Chapters from "./routes/Chapters";
import Characters from "./routes/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "author/:authorId",
        element: <Author />,
        children: [
          {
            path: ":bookTitle",
            element: <Book />,
            children: [
              {
                path: "chapters",
                element: <Chapters />,
              },
              {
                path: "characters",
                element: <Characters />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
