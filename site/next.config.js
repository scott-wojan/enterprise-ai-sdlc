const basePath = process.env.PAGES_BASE_PATH || "";

export default {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true }
};
