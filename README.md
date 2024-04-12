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

1. Dodati state i formAction sa useFormState
2. Dodati action u formu
3. Validirati content recepta
4. Kreirati novi recept u bazu podataka i dohvatiti njegov id
5. Validirati listu slika
6. Uploadati slike na Supabase storage na folder sa id-em novog recepta
7. Revalidirati home page rutu
8. Dohvatiti pending status forme
9. Dodati Loader2 komponentu i disableat Button dok se form data šalje
10. Dodati SubmitButton komponentu

## Level 3

Prikazati thumbnailove tijekom kreiranja recepta

1. Dodati thumbnails, createThumbnail i clearThumbnails sa useThumbnails
2. Dodati Image komponentu
3. Kreirati URL objekat za sliku i postavi thumbailove
4. Očistiti thumbailove
5. Ukloniti thumbail s indexom
6. Očistiti thumbailove i kreirati nove (u onChange u file inputu)
7. Prikazati Thumbnail komponente

## Level 4

Dohvatiti slike iz supabase storagea i prikazati ih

1. Dohvatiti recepte iz baze podataka
2. Pozovi getFirstImageInFolder za svaki recept
3. Dohvatiti prvu sliku iz supabase storagea
4. Dohvatiti public url slike
5. Vratiti url i ime slike
6. Dodati Image komponentu
