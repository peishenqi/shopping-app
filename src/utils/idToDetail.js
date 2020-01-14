import {
  get,
  post
} from 'axios';
export function detailRequst(id) {
  get('/api/v1/products/' + id)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err);
    })

}
