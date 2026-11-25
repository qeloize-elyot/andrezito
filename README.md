# André, em palavras.

Mural digital colaborativo para reunir cartas dos alunos para o professor André.

## Tecnologias
- Next.js 15, React 19 e TypeScript
- Supabase (Postgres + Row Level Security)
- CSS responsivo

## Executar localmente
1. Instale as dependências: `npm install`.
2. Copie `.env.example` para `.env.local`.
3. Preencha a URL e a chave publicável do Supabase.
4. Execute `npm run dev`.

## Configurar o Supabase
1. Crie um projeto em https://supabase.com/.
2. Execute o arquivo `supabase/schema.sql` no SQL Editor.
3. Em Project Settings → API, copie Project URL e a chave publicável (anon).
4. Configure `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` no ambiente local e na Vercel.

## Fotografias
A imagem de capa está em `app/page.tsx`. Substitua o endereço da imagem pela foto do professor. Você também pode colocar arquivos em `public/photos` e referenciá-los no código.

## Publicação
Importe o repositório na Vercel e configure as duas variáveis de ambiente do Supabase.

## Observação
As cartas são públicas e aparecem imediatamente, sem login ou aprovação. O SQL permite leitura e inserção anônimas. Antes de divulgar amplamente, recomenda-se adicionar proteção anti-spam no servidor, como Cloudflare Turnstile e limitação de requisições.