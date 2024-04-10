# Zadatak

## Level 1

Postavljanje projekta

- Napraviti vlastitu aplikaciju na Supabaseu - <https://supabase.com/dashboard/projects>
- Populirati .env.local s podacima iz Supabasea (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
- Copy pasteati migracije i pokrenuti jednu po jednu u SQL editoru u Supabase-u
- Loginati se koristeći Supabase CLI i generirati db-types.ts
- PROJECT_ID zamijeniti sa svojim project_idjem od Supabasea

Kod za loginanje u Supabase i generiranje db-types.ts

```bash
npx supabase login
npx supabase gen types typescript --project-id PROJECT_ID > db-types.ts
```

## Level 2

Napraviti funkcionalnu formu za unos recepta (sa više slika)

## Level 3

Dohvatiti slike iz supabase storagea i prikazati ih
