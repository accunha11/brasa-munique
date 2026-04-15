/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const customDomain = process.env.CUSTOM_DOMAIN?.trim()
const shouldUseProjectBasePath = isGithubActions && !customDomain
const basePath = shouldUseProjectBasePath && repositoryName ? `/${repositoryName}` : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
