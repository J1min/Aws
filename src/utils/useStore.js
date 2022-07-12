import create from "zustand";

const useStore = create((set) => ({
    nowTitle: "",
    setNowTitle: (title) => set({ nowTitle: title }),
    nowContent: "",
    setNowContent: (title) => set({ nowContent: title }),

    title: ["1", "2"],
    setTitle: (title) => set({ title }),
    content: ["내용1", "내용2"],
    setContent: (content) => set({ content }),
}));

export default useStore;
