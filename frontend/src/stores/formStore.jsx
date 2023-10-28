import { create } from 'zustand';

const useFormStore = create((set) => ({
  form: null,
  setForm: (form) => {
    set({ form });
  },
}));

export default useFormStore;

