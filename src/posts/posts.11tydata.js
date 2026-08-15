module.exports = {
  layout: "layouts/post.njk",
  tags: "posts",
  eleventyComputed: {
    // A draft must produce NO OUTPUT AT ALL — returning `false` here stops the
    // file being written. Merely hiding it from the sitemap/index is NOT enough:
    // an unlisted page is still a public URL, which is exactly how a client
    // proposal leaked from this site in Aug 2026.
    permalink: (data) =>
      data.draft ? false : `/blog/${data.page.fileSlug}/`,
    eleventyExcludeFromCollections: (data) => Boolean(data.draft),
  },
};
