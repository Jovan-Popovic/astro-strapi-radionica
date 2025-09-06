export const articlesService = {
  getArticles: async () =>
    await fetch(
      `${import.meta.env.PUBLIC_STRAPI_BASE_URL}/articles?populate=*`
    ),
};
