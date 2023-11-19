import { niuxApi } from '../api/niuxApi';

export class productService {

  static getImages = (image_name) => {
    try {
      return `http://localhost:3000/api/files/product/${image_name}`;
    } catch (error) {
      throw error.response.data.message;
    }
  }

  static getAll = async () => {
    try {
      const { data } = await niuxApi.get('/products');
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };

  static getProductBySlug = async (slug) => {
    try {
      const { data } = await niuxApi.get(`/products/${slug}`);
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };

  static setProductCart = async (productId, quantity) => {
    try {
      const { data } = await niuxApi.post('cart/product', { productId, quantity });
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };

  static deleteProductsCart = async (productId) => {
    try {
      const { data } = await niuxApi.delete(`cart/${productId}`);
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };

  static getCartUser = async () => {
    try {
      const { data } = await niuxApi.get('cart/items');
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };
}
