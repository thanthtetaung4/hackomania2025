import { Card, CardContent } from "./ui/card";

// type CourseData = {
// 	courseName:String,
// 	courseLesson: courseLesson[],
// }
// type courseLesson = {
// 	lessonName: String,
// 	status: Number,
// 	content: String,
// 	quizes: quiz[],
// }
// type quiz = {
// 	question: String,
// 	choices: String[],
// 	answer: String,
// 	status: Number,
// }

function Lesson(lessonName : String) {
	return (
		<div>
			<Card>
				<CardContent>{lessonName}</CardContent>
			</Card>
		</div>
	);
}

function LessonPage(lessonName: String, context: String)
{
	return (
		<div>
			<h1 className="text-xl">{lessonName}</h1>
			<p className="text-justify">{context}</p>
		</div>
	);
}
function LessonQuiz()
{
	return;
}

