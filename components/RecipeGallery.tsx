import { createClient } from "@/lib/supabase/server";
import { Tables } from "@/db-types";
import RecipeCard from "@/components/RecipeCard";

async function getFirstImageInFolder(folderName: string) {
	const supabase = createClient();
  try {
		// LEVEL 4: Step 3: Dohvatiti prvu sliku iz supabase storagea

		// LEVEL 4: Step 4: Dohvatiti public url slike

		// LEVEL 4: Step 5: Vratiti url i ime slike

  } catch (error) {
    console.error(error);
  }
}

export default async function RecipeGallery() {
	const supabase = createClient();
	const recipes: any = []

	// LEVEL 4: Step 1: Dohvatiti recepte iz baze podataka

	// LEVEL 4: Step 2: Pozovi getFirstImageInFolder za svaki recept

	return (
		<div>
			{ recipes?.length === 0 && <p className="mx-auto w-fit pt-16">No recipes found</p>}
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
				{recipes?.map((recipe) => (
					<div key={recipe.id}>
						<RecipeCard recipe={recipe}/>
					</div>
				))}
			</section>
		</div>
	);
}