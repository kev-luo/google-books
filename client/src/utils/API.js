import axios from 'axios';

export default {
  searchTitle: function(title) {
    return axios.get(`/google/?title=${title}`)
  }
}