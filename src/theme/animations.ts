export const createEntranceAnimation = (transform: string) => ({
  in: {
    opacity: 1,
    transform: "translateY(0) translateX(0)",
  },
  out: {
    opacity: 0,
    transform,
  },
});
