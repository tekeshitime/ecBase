import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skv50P3pauuMGuXbQzOezkUBQYwSzrh4LUJVYVde6cXwY2UxQv4u81aCURG1jMgCudlmcSx5aQvhBz7DsVQPEM9uhh8U8mEJZzacNz8ekEYiTztqPZ0vYN2rvj5YbEktCGqx8TzLyBd9V1w4tVJpUtrGGcT3XvBkOyOxmyxsjL4qXjAJiJGt",
})
