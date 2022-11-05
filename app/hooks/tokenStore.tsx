import create from 'zustand';

type TokenState = {
  token: string;
  setToken: Function;
};

export const useToken = create<TokenState>((set) => ({
  token: '',
  setToken: (value: string) => set((state) => ({ ...state, token: value })),
}));
