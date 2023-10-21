import { create } from 'zustand';

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const useUserStore = create((set) => ({
  user: getUserFromLocalStorage() || null,
  setUser: (user) => {
    set({ user });
    localStorage.setItem('user', JSON.stringify(user));
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem('user');
  },
}));

export default useUserStore;
