import {client} from '../../services/api-service';

export const getAllPosts = () => (dispatch) =>
  new Promise(function (resolve, reject) {
    client
      .get(`/posts`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        resolve({status: 500});
        reject(err);
      });
  });

export const createPost = (requestData) => (dispatch) =>
  new Promise(function (resolve, reject) {
    client
      .post(`/posts`, requestData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        resolve({status: 500});
        reject(err);
      });
  });

export const updatePost = (requestData) => (dispatch) =>
  new Promise(function (resolve, reject) {
    client
      .put(`/posts/${requestData.id}`, requestData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        resolve({status: 500});
        reject(err);
      });
  });

export const deletePost = (postId) => (dispatch) =>
  new Promise(function (resolve, reject) {
    client
      .delete(`/posts/${postId}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        resolve({status: 500});
        reject(err);
      });
  });
