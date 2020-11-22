import axios from "axios";

export default {
  searchTitle: function (title) {
    return axios.get(`/google/?title=${title}`);
  },
  saveBook: function (book) {
    return axios.post("/api/books", book);
  },
  getBooks: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (bookId) {
    return axios.delete(`/api/books/${bookId}`);
  },
};
