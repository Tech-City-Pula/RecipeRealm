"use client"

import { Loader2 } from "lucide-react"
import { useFormStatus, useFormState } from 'react-dom'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Thumbnail from "./Thumbnail";
import { useThumbnails } from "@/lib/hooks/useThumbnails";
import { Label } from "@/components/ui/label";
import { createRecipe } from "@/lib/actions";
import { ACCEPTED_IMAGE_TYPES } from "@/lib/const";

const initialState = {
  message: '',
}

function SubmitButton({ finished} : { finished: boolean }) {
	// LEVEL 2: Step 8: Dohvatiti pending status forme
	const { pending } = useFormStatus();

	// LEVEL 2: Step 9: Dodati Loader2 komponentu i disableat Button dok se form data šalje
	return (
			<Button type="submit" aria-disabled={pending}>
				{pending && (<Loader2 className='size-3 animate-spin' />)}
				Submit
				{finished && "✔️"}
		 </Button>
	)
}

export default function RecipeCreateForm() {
	// LEVEL 2: Step 1: Dodati state i formAction sa useFormState
	const [state, formAction] = useFormState<typeof initialState, FormData>(createRecipe, initialState);

	// LEVEL 3: Step 1: Dodati thumbnails, createThumbnail i clearThumbnails sa useThumbnails
	const { thumbnails, createThumbnail, clearThumbnails } = useThumbnails();

  return (
		// LEVEL 2: Step 2: Dodati action u formu
		<form className="max-w-sm flex flex-col gap-3" action={formAction}>
			<div className="space-y-1">
				<Label htmlFor="name">Name{" "}<span className="text-red-600">*</span></Label>
				<Input id="name" name="name" placeholder="Name of your meal" required/>
			</div>
			<div className="space-y-1">
				<Label htmlFor="description">Description</Label>
				<Textarea id="description" name="description" placeholder="This is a delicious meal from my grandma." />
			</div>
			<div className="space-y-1">
				<Label htmlFor="ingredients">Ingredients</Label>
				<Textarea id="ingredients" name="ingredients" placeholder="ex. - 2 bananas&#10;- 1 cup of sugar&#10;- 1 cup of flour&#10;- 1 cup of milk" />
			</div>
			<div className="space-y-1">
				<Label htmlFor="methods">Methods</Label>
				<Textarea id="methods" name="methods" placeholder="Cook for 30 minutes, bake for 1 hour, let it cool down for 10 minutes." />
			</div>
			<div className="space-y-1">
				<Label htmlFor="images">Images{" "}<span className="text-red-600">*</span></Label>
				<Input id="images" name="images" type="file" multiple required accept={ACCEPTED_IMAGE_TYPES.join(", ")} onChange={(event) => {
					// LEVEL 3: Step 6: Očistiti thumbailove i kreirati nove
					clearThumbnails();
					const files = event.target.files ?? [];
					for (const file of files) {
						createThumbnail(file);
					}
				}} />
				<p className="text-muted-foreground text-sm">You can add multiple images for your meal/dessert, but only <b>.jpg</b>, <b>.jpeg</b>, <b>.png</b> or <b>.webp</b> files.</p>
			</div>
			{/* LEVEL 3: Step 7: Prikazati Thumbnail komponente */}
			<div className="flex flex-wrap gap-2">
				{thumbnails.map((thumbnail, index) => (
					<Thumbnail key={index} src={thumbnail}/>
				))}
			</div>
			{/* LEVEL 2: Step 10: Dodati SubmitButton komponentu */}
			<SubmitButton finished={state.message === "Recipe submitted"}/>
			<p aria-live="polite" className="sr-only" role="status">{state.message}</p>	
		</form>
  );
}
