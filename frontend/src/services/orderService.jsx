import { niuxApi } from '../api/niuxApi';

export class OrderService {
  static getOrdersUser = async () => {
    try {
      const { data } = await niuxApi.get('/orders/user-orders');

      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };

  static createOrder = async (order) => {
    try {
      const { data } = await niuxApi.post('/orders', order);

      return data;
    } catch (error) {
      throw error.response.data.message;
    } 
  };

  static getRecentOrderUser = async () => {
    try {
      const { data } = await niuxApi.get('/orders/recent-order');

      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };
}
