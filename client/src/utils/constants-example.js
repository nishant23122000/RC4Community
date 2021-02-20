const githubClientID = process.env.GITHUB_CLIENT_ID || "YOUR_GITHUB_CLIENT_ID";
const githubPrivateRepoAccessClientID =
  process.env.GITHUB_PRIVATE_REPO_ACCESS_CLIENT_ID ||
  "YOUR_GITHUB_PRIVATE_REPO_ACCESS_CLIENT_ID";
const rcApiDomain =
  process.env.RC_API_DOMAIN || "https://omni2.rceng.shop/";
const githubApiDomain =
  process.env.GITHUB_API_DOMAIN || "https://api.github.com";
const rc4gitDomain =
  process.env.RC4GIT_DOMAIN || "https://rc4git.rceng.shop"

export {
  githubClientID,
  githubPrivateRepoAccessClientID,
  rcApiDomain,
  githubApiDomain,
  rc4gitDomain
};
