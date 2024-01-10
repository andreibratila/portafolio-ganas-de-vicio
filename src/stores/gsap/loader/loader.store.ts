import { create } from "zustand";

export type LoaderAction = "base" | "pedir" | "about" | "cerrando";

export interface LoaderState {
  // state
  animationComplete: boolean;
  openMenu: boolean;
  componente: LoaderAction;
  timeline: gsap.core.Timeline | null;
  // actions
  setAnimationComplete: (animationComplete: boolean) => void;
  setComponente: (componente: LoaderAction) => void;
  setTimeline: (timeline: gsap.core.Timeline) => void;
  setOpenMenu: (openMenu: boolean) => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
  // state
  animationComplete: false, //TODO: cambiar a false
  openMenu: false,
  componente: "base",
  timeline: null,
  // actions
  setAnimationComplete: (animationComplete) =>
    set(() => ({ animationComplete })),
  setComponente: (componente) => set(() => ({ componente })),
  setTimeline: (timeline) => set(() => ({ timeline })),
  setOpenMenu: (openMenu) => set(() => ({ openMenu })),
}));
