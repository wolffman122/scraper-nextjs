import { Octokit, App } from "octokit";

export default async function Page(req, res) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN
  });

  const followers = await octokit.request("/users/vercel/followers?per_page=100");
  const followerCount = followers.data.length;
  const stars = await octokit.request("/users/vercel/repos");
  const starsCount = stars.data.filter((repo) => {
    !repo.fork
  }).reduce((acc, item) => {
    return acc + item.stargazers_count;
  }, 0);

  const reposStarred = await octokit.request("/users/wolffman122/starred");
  const starredCount = reposStarred.length;

  return res.status(200).json({
    stars: starsCount,
    followers: followerCount,
    starred: starredCount
  })
}