// githubService.ts
export interface Certificate {
  title: string;
  url: string;
  date: string;
}

export class GitHubService {
  private readonly baseUrl = "https://api.github.com";

  async fetchCertificates(
    username: string,
    repo: string
  ): Promise<Certificate[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/repos/${username}/${repo}/contents`
      );
      const data = await response.json();

      // Assumindo que cada certificado é um arquivo markdown com metadados
      return data
        .filter((file: any) => file.name.endsWith(".md"))
        .map((file: any) => ({
          title: file.name.replace(".md", ""),
          url: file.html_url,
          date: new Date().toISOString(), // Na implementação real, isso viria dos metadados do arquivo
        }));
    } catch (error) {
      console.error("Error fetching certificates:", error);
      return [];
    }
  }

  async getFavicon(url: string): Promise<string> {
    try {
      const domain = new URL(url).hostname;
      return `https://${domain}/favicon.ico`;
    } catch {
      return "/default-favicon.ico";
    }
  }
}
