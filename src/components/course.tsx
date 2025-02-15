import { Button } from "./ui/button";
import { Card, CardContent} from "./ui/card";
type Course = {
	courseName: String,
	lessonName: String,
}
export default function Course(course : Course) {
	return (
		<>
			<Card className="pt-5 flex items-center pr-5 justify-between my-5">
				<div>
					<CardContent className="text-primary font-bold text-xl">{course.courseName}</CardContent>
					<CardContent className="text-black -mt-3 text-m">{course.lessonName}</CardContent>
				</div>
				<Button>Resume</Button>
			</Card>
		</>
	);
}
