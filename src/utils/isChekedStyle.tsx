export const isChekedStyle = (cheked: boolean) => {
  return cheked
    ? 'bg-green-300 line-through shadow w-[50%] h-13 flex items-center justify-between px-12'
    : 'shadow w-[50%] h-13 flex items-center justify-between px-12'
}
