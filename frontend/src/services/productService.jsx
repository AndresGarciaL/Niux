import { niuxApi } from '../api/niuxApi';

export class productService {
  static getAll = async () => {
    try {
      const { data } = await niuxApi.get('/products');
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };
}
