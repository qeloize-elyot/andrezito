create extension if not exists pgcrypto;
create table if not exists public.letters (
 id uuid primary key default gen_random_uuid(),
 author_name text not null check (char_length(trim(author_name)) between 2 and 70),
 classroom text check (classroom is null or char_length(classroom)<=40),
 title text check (title is null or char_length(title)<=100),
 message text not null check (char_length(trim(message)) between 5 and 5000),
 created_at timestamptz not null default now()
);
alter table public.letters enable row level security;
drop policy if exists "Anyone can read letters" on public.letters;
create policy "Anyone can read letters" on public.letters for select to anon,authenticated using (true);
drop policy if exists "Anyone can submit letters" on public.letters;
create policy "Anyone can submit letters" on public.letters for insert to anon,authenticated with check (true);
grant select,insert on public.letters to anon,authenticated;