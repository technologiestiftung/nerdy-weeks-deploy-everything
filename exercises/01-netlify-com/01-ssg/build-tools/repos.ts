import fetch from "node-fetch";
import fs from "fs";
import path from "path";
interface Generic {
  [key: string]: any;
}
interface ReducedRepo {
  name: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
}
export function fsCallback(err: any | null) {
  if (err) throw err;
}
export function repoPropPicker({
  name,
  html_url,
  stargazers_count,
  updated_at,
}: Generic): ReducedRepo {
  return { name, html_url, stargazers_count, updated_at };
}
export async function main(): Promise<void> {
  if (process.env.GITHUB_TOKEN === undefined) {
    console.error(`You need to create a GITHUB_TOKEN (personal access token)
    and add it to your shell. See https://github.com/settings/tokens

    For bash run
    echo "export GITHUB_TOKEN='XXXX--YOUR-TOKEN'" >> ~/.bashrc
    For zsh run
    echo "export GITHUB_TOKEN='XXXX--YOUR-TOKEN'" >> ~/.zshrc
    `);

    process.exit(1);
  }
  try {
    const response = await fetch(
      "http://api.github.com/orgs/technologiestiftung/repos",
      {
        method: "GET",
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("response not ok");
    }
    const json = await response.json();
    const repos: ReducedRepo[] = json.map((repo: Generic) => {
      if (repo.private === false) {
        return repoPropPicker(repo);
      } else {
        return;
      }
    });
    const reposFiltered = repos.filter(Boolean);
    fs.writeFile(
      path.resolve(__dirname, "../_data/reposList.json"),
      JSON.stringify({ data: { repos: reposFiltered } }),
      "utf8",
      fsCallback
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

if (require.main === module) {
  main().catch((err) => console.error(err));
}
