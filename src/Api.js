
import instance from '../src/BaseUrl';

const API = {
  getAllData: async () => {
    try {
      const response = await instance.get('/getall');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
  
    }
  },
  deleteBlog: async (id) => {
    try {
      const response = await instance.get(`/deleteBlog/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting post:', error);
 
    }
  },
  getSingleBlog: async (postId) => {
    try {
      const response = await instance.get(`/singleblog/${postId}`);
      return response.data.post;
    } catch (error) {
      console.error('Error fetching post:', error);
     
    }
  },

  updateBlog: async (postData) => {
    try {
      const response = await instance.post('/updateblog', postData);
      return response.data;
    } catch (error) {
      console.error('Error updating post:', error);
 
    }
}
,
getParticularBlogs: async (token, uuid) => {
    try {
      const response = await instance.post('/particularblogs', { token, uuid });
      return response.data;
    } catch (error) {
      console.error('Error fetching particular blogs:', error);
    
    }
  },

  postBlog: async (postData) => {
    try {
      const response = await instance.post('/postblog', postData);
      return response.data;
    } catch (error) {
      console.error('Error posting blog:', error);
     
    }
  }, 
  
  loginUser: async (userData) => {
    try {
      const response = await instance.post('/login', userData);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
     
    }
  },
  
    registerUser: async (userData) => {
      try {
        const response = await instance.post('/register', userData);
        return response.data;
      } catch (error) {
        console.error('Error registering user:', error);
      
      }
    }
    
 


};

export default API;
