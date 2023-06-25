const apiKey = '37798827-4b752ebc68c39b91b512cc08a';
export async function searchImages(query, page, apiKey) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error searching images:', error);
  }
}
