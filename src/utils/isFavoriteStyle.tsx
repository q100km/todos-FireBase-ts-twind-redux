export const isFavoriteStyle = (todo) => {
  return todo?.isFavorite
    ? 'shadow rounded-2xl p-3 cursor-pointer bg-yellow-500'
    : 'shadow rounded-2xl p-3 cursor-pointer'
}
