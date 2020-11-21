import axios from 'axios';

export default {
  searchTitle: function(title) {
    return axios.get(`/google/?title=${title}`)
  },
  saveBook: function(book) {
    return axios.post('/api/books', book)
  }
}