import { create } from 'zustand';

type MyStore = {
    asideShow: boolean;
    toggleAsideShow: () => void;
};

const useAsideStore = create<MyStore>((set) => ({
    asideShow: false,
    toggleAsideShow: () => set((state) => ({ asideShow: !state.asideShow }))
}));

export default useAsideStore;
