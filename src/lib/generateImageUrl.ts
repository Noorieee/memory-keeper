export const generateImageUrl = (url: string) => {
  return `
    ${import.meta.env.VITE_API_BASE_URL}${url}
  `
}
