import create from "zustand";

const useStore = create((set) => ({
    nowTitle: "",
    setNowTitle: (title) => set({ nowTitle: title }),
    nowContent: "",
    setNowContent: (title) => set({ nowContent: title }),

    title: [],
    setTitle: (title) => set({ title }),
    content: [],
    setContent: (content) => set({ content }),
}));

export default useStore;
