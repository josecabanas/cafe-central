# Template base — site para negócio local

Site estático feito com **Astro + Tailwind CSS**, pensado para ser alojado no **Cloudflare Pages**.
O exemplo é um café ("Café Central"), mas serve para qualquer pequeno negócio local.

## Começar

```bash
npm install     # só da primeira vez
npm run dev     # abre em http://localhost:4321
```

Outros comandos:

| Comando           | O que faz                                          |
| ----------------- | -------------------------------------------------- |
| `npm run build`   | Gera o site final na pasta `dist/`                 |
| `npm run preview` | Mostra localmente o site gerado (antes de publicar)|

## Onde editar

| Quero mudar...                                    | Ficheiro                                      |
| ------------------------------------------------- | --------------------------------------------- |
| Nome, textos, contactos, horário, menu, redes     | `src/config.ts`                               |
| Cores e fontes                                    | `src/styles/global.css` (bloco `@theme`)      |
| Foto principal                                    | `src/assets/hero.jpg`                         |
| Fotos da galeria                                  | `src/assets/galeria/` + lista em `src/config.ts` |
| Ordem das secções / tirar secções                 | `src/pages/index.astro`                       |
| Política de privacidade                           | `src/pages/privacidade.astro`                 |
| Domínio                                           | `astro.config.mjs` + `site.url` em `src/config.ts` + `public/robots.txt` |
| Favicon                                           | `public/favicon.svg`                          |

As fotos de `src/assets/` são otimizadas automaticamente (redimensionadas e convertidas para WebP).
As fotos atuais são **marcadores** — substitui por fotos reais com os mesmos nomes (ou atualiza a lista).

## Estrutura

```
src/
  config.ts              ← dados do cliente (começa sempre aqui)
  styles/global.css      ← tema (cores, fontes)
  layouts/Base.astro     ← <head>, SEO, dados estruturados para o Google
  components/
    Cabecalho.astro      ← barra de navegação
    Hero.astro           ← topo da página
    EstadoAberto.astro   ← "Aberto agora, fecha às 19:30" (calculado no browser)
    Menu.astro           ← tabela de preços / serviços
    Horario.astro        ← horário com o dia de hoje destacado
    Sobre.astro
    Galeria.astro
    Contactos.astro      ← contactos, mapa (carrega só com clique) e formulário
    FaixaAzulejo.astro   ← faixa decorativa (identidade visual)
    BotaoWhatsapp.astro
    Rodape.astro         ← inclui link obrigatório do Livro de Reclamações
  lib/horario.ts         ← lógica de "aberto / fechado"
  pages/
    index.astro, privacidade.astro, obrigado.astro, 404.astro
public/
  favicon.svg, robots.txt
  _headers               ← cabeçalhos de segurança e cache para o Cloudflare
```

## Checklist para cada cliente novo

1. Copiar a pasta e mudar o `name` em `package.json`.
2. Preencher `src/config.ts` (todos os campos).
3. Ajustar cores e, se for preciso, fontes em `src/styles/global.css`.
4. Substituir fotos (escrever bons `alt`).
5. Mudar o domínio nos 3 sítios (ver tabela acima).
6. Formulário: criar chave grátis em https://web3forms.com com o email do cliente e colar em `formulario.chaveWeb3Forms`.
7. Mapa: Google Maps → Partilhar → Incorporar um mapa → copiar o URL do `src` para `contactos.mapaEmbed`.
8. Rever a política de privacidade.
9. `npm run build` sem erros → publicar.

## Publicar (Cloudflare Pages)

1. Enviar o projeto para um repositório no GitHub.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset **Astro**, build command `npm run build`, output `dist`.
4. Custom domains → adicionar o domínio do cliente (e o `www`).
5. Ativar **Web Analytics** no projeto (sem cookies; já referido na política de privacidade).

Cada `git push` para `main` volta a publicar o site automaticamente.

## Manutenção

- `npm outdated` / `npm update` de vez em quando, depois `npm run build` para confirmar.
- Ativar o Dependabot no GitHub.
- Monitorizar o site com o UptimeRobot.
