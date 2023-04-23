export const getIdByPersonUrl = (url: string): number => {
  const [id] = url.match(/\d+/g) || []

  return Number(id)
}
