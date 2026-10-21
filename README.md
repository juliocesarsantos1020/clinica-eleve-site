# Site Clínica Eleve (Ana Araujo): versão SEO

Site estático (HTML, CSS e JS puro), responsivo, sem build.

Gerado em 2026-10-20 a partir da wiki do tópico `clinica-eleve-psicologia`:
- conceito [[Por que fazer terapia e seus benefícios]] (seção de benefícios e FAQ);
- fontes oficiais em `raw/articles/` (dados da clínica e apresentação da Ana).

## Antes de publicar

1. Troque o domínio de exemplo pelo real: `./publicar.sh https://www.seudominio.com.br`
   (atualiza canonical, Open Graph, JSON-LD, `robots.txt` e `sitemap.xml`).
2. Hospede em qualquer serviço de site estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages ou hospedagem comum) e use HTTPS.
3. Cadastre o site no Google Search Console e envie o `sitemap.xml`.
4. Crie o perfil no Google Meu Negócio, se houver endereço ou atendimento local.
5. Se quiser medir acessos, acrescente Google Analytics ou outra ferramenta (não incluída) e avise os visitantes (LGPD).

## O que há para SEO e desempenho

- `<title>`, meta description, canonical, Open Graph e Twitter Card.
- Dados estruturados JSON-LD: WebSite, ProfessionalService, Person e FAQPage.
- Um único `<h1>`, hierarquia de títulos, landmarks e textos alternativos.
- Seção "Por que fazer terapia" e FAQ com perguntas que as pessoas costumam buscar.
- `robots.txt`, `sitemap.xml`, `404.html`, favicons.
- Sem bibliotecas nem fontes externas (carregamento rápido); logo em WebP (800px) com JPG original de reserva, `width`/`height` definidos, `fetchpriority` no logo principal e `loading="lazy"` no rodapé.
- Acessibilidade: link para pular ao conteúdo, foco visível, `prefers-reduced-motion`, contraste revisado.

## Arquivos

- `public/logo-eleve.jpg`: logo original, sem alterações.
- `public/logo-eleve-800.webp`: cópia redimensionada do mesmo logo, só para carregar mais rápido.
- `public/favicon-48.png`, `public/favicon-192.png`: recortes quadrados do círculo do logo, para o ícone da aba.

## Pendências de conteúdo

Valores, horários, duração e frequência das sessões e como é a primeira sessão ainda não foram informados e ficaram de fora.
