import { HomeIcon, UserGroupIcon, BookOpenIcon, TrophyIcon, UserIcon } from "@heroicons/react/20/solid";
export default function Nav() {
	return (
		<div className="fixed bottom-0 inset-x-0">
			<div className="bg-primary h-12 mx-auto flex items-center">
				<ul className="flex gap-10 justify-center items-center w-full">
					<li><HomeIcon className="size-8 text-white hover:text-accent" /></li>
					<li><UserGroupIcon className="size-8 text-white hover:text-accent" /></li>
					<li><BookOpenIcon className="size-8 text-white hover:text-accent" /></li>
					<li><TrophyIcon className="size-8 text-white hover:text-accent" /></li>
					<li><UserIcon className="size-8 text-white hover:text-accent" /></li>
				</ul>
			</div>
		</div>
	);
}
