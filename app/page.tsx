import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import RecipeGallery from "@/components/RecipeGallery";

export default async function HomePage() {
	return (
		<div className=" min-h-screen bg-gradient-to-r from-red-400 to-orange-400">
			<header className="p-4 md:p-6 bg-gray-950 flex flex-row justify-between text-white">
				<div className="flex flex-row items-center gap-2 text-2xl font-bold ">
					<FaBook /><h3>RecipeRealm</h3>
				</div>
				<Link className={buttonVariants({variant: "ghost"})} href="/create-recipe">Create new recipe</Link>
			</header>
			<RecipeGallery />
		</div>
	);
}
