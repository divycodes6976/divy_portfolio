import { create } from "zustand";

interface HoverStore {
  isHovered: string;
  setIsHovered: (isHovered: string) => void;
}

export const useHoverStore = create<HoverStore>((set) => ({
  isHovered: "none",
  setIsHovered: (isHovered) => set({ isHovered }),
}));
