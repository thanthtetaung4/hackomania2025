import Course from "@/components/course";
import {Card, CardContent} from "@/components/ui/card"
  
export default function HomePage() {
	return (
		<div>
			<Card className="bg-primary pt-5 mb-10">
				<CardContent className="text-accent font-bold text-2xl">Welcome Back! <span className="text-white">Jane</span></CardContent>
				<CardContent className="text-white -mt-3 text-lg">Continue on where you left off.</CardContent>
			</Card>
			<Course courseName={"Python 101"} lessonName={"Introduction to Python"} />
			<Course courseName={"Python 101"} lessonName={"Introduction to Python"} />
			
		</div>
	);
}
