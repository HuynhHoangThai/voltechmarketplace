import {create} from 'zustand';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const useOrderStore = create((set) => ({
  orders: [],
  orderDetails: null,
  fetchOrders: async () => {
    try {
      const response = await axios.get('/api/orders');
      set({ orders: response.data });
    } catch (error) {
      toast.error(`Error fetching orders: ${error.response?.data?.message || error.message}`);
    }
  },

}));

