# Meu Currículo Minimalista 📄 (Template)

### você pode usar este template para criar seu próprio currículo, basta seguir as instruções e deixar seu star neste repo. 💫

<img src="public/cv.png" alt="CV">

---

![CV-Minimalista](https://img.shields.io/badge/CV-Minimalista-blue) ![GitHub repo size](https://img.shields.io/github/repo-size/codejota/minimalist-cv) ![GitHub](https://img.shields.io/github/license/codejota/minimalist-cv) ![GitHub last commit](https://img.shields.io/github/last-commit/codejota/minimalist-cv) ![GitHub followers](https://img.shields.io/github/followers/codejota?style=social)
![GitHub Stars](https://img.shields.io/github/stars/codejota/minimalist-cv?style=social) ![GitHub forks](https://img.shields.io/github/forks/codejota/minimalist-cv?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/codejota/minimalist-cv?style=social)

acesse para ver um exemplo do template: [Meu Currículo](https://cv.jotacode.dev/)

## 🚀 Intro

Decidi criar esse projeto e tornar-lo Open Source para ajudar pessoas a criarem seus currículos de forma simples e rápida. O projeto foi construído com Next.js, Tailwind CSS e TypeScript.
usando componentes shadcn/ui para estilização consistente e acessibilidade. A ideia, que com um unico arquivo de configuração, você possa personalizar o conteúdo do seu currículo, tornando a criação de um currículo mais fácil
de uma forma mais moderna e responsiva. Usei minha experiência com os frameworks que estou aprendendo para criar esse projeto, e espero que possa ajudar vocês também.
Meu unico pedido é que deixe um star no repositório e compartilhe com seus amigos, para que mais pessoas possam conhecer o projeto.

## ✨ Funcionalidades

- 🎨 Interface moderna com suporte a modo claro/escuro
- 📱 Design responsivo
- 🔄 Visualização em tempo real
- 📥 Exportação para PDF/PNG
- 🖨️ Layout otimizado para impressão.
- 🔌 Integração com API do GitHub, caso voce armazene aqui. [Exemplo](https://github.com/codejota/Certificates/tree/main)
- ⚡ Construído com Next.js 14
- 🎯 TypeScript.
- 🎨 Tailwind CSS.
- 📦 Componentes shadcn/ui

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório:

```bash
git clone git@github.com:codejota/free-cv-template.git
cd
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Crie um arquivo `.env.local`: (caso queira usar a integração com o GitHub)

```env
NEXT_PUBLIC_GITHUB_TOKEN=seu_token_github
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse `http://localhost:3000` para ver sua aplicação.

## 🛠️ Configuração

Edite `config/resume.ts` para personalizar o conteúdo do seu currículo:

- Informações pessoais
- Experiência profissional
- Educação
- Habilidades
- Projetos
- Certificados
- Idiomas
- Links de redes sociais

## 📦 Estrutura do Projeto

```
├── app/
│   ├── config/
│   │   └── resume.ts         # Configuração do currículo
│   ├── components/
│   │   ├── Resume.tsx        # Componente principal do currículo
│   │   ├── Certificates.tsx  # Exibição de certificados
│   │   └── ...              # Outros componentes
│   └── layout.tsx            # Layout da aplicação
├── public/                   # Ativos estáticos
├── styles/                   # Estilos globais
└── package.json             # Dependências
```

## 🎨 Personalização

### Temas

A aplicação suporta modos claro e escuro. Personalize as cores no seu `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Suas cores personalizadas
    }
  }
}
```

### Componentes

Construído com componentes shadcn/ui para estilização consistente e acessibilidade. Personalize os componentes no diretório `components/ui`.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

- Caso quyera usar o template, deixe um star no repositório e fork.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

1. Faça um fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/AdicionadoAlgo`)
3. Faça commit de suas mudanças (`git commit -m 'Adiciona algum RecursoBacana'`)
4. Faça push para a branch (`git push origin feature/RecursoBacana`)
5. Abra um Pull Request

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [GitHub API](https://docs.github.com/en/rest)
- Você! <3

## 📧 Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para me contatar por e-mail:

- [contato@jotacode.dev](mailto:contato@jotacode.dev)
- [LinkedIn](https://www.linkedin.com/in/juniorjota/)
- Outros dados de contato disponíveis no meu curriculo :) [cv.jotacode.dev](https://cv.jotacode.dev)
