// Define the API response structure
interface ApiResponse {
  data: Lesson[];
}

interface Lesson {
  id: number;
  title: string;
  created_at: string;
  description: string;
  interest_id: number;
}

// Function to validate individual lesson
function isLesson(data: unknown): data is Lesson {
  const lesson = data as Lesson;
  return (
    typeof lesson === "object" &&
    lesson !== null &&
    typeof lesson.id === "number" &&
    typeof lesson.title === "string" &&
    typeof lesson.created_at === "string" &&
    typeof lesson.description === "string" &&
    typeof lesson.interest_id === "number"
  );
}

// Function to validate and transform the API response
function transformApiResponse(data: unknown): Lesson[] {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid response format");
  }

  const response = data as ApiResponse;

  if (!Array.isArray(response.data)) {
    throw new Error("Data is not an array");
  }

  return response.data.map((item, index) => {
    if (!isLesson(item)) {
      throw new Error(`Invalid lesson data at index ${index}`);
    }
    return item;
  });
}

export default async function Test() {
  try {
    const response = await fetch("http://localhost:3000/api/lessons");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    const lessons = transformApiResponse(rawData);
    console.log("lessons", lessons);
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Lessons</h1>
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{lesson.title}</h2>
              <p className="text-gray-600 mt-2">{lesson.description}</p>
              <div className="mt-2 text-sm text-gray-500">
                <p>
                  Created: {new Date(lesson.created_at).toLocaleDateString()}
                </p>
                <p>Interest ID: {lesson.interest_id}</p>
              </div>
            </div>
          ))}
        </div>
        <details className="mt-4">
          <summary className="cursor-pointer">Raw Data</summary>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto mt-2">
            {JSON.stringify(lessons, null, 2)}
          </pre>
        </details>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4 text-red-500">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>{error instanceof Error ? error.message : "An error occurred"}</p>
      </div>
    );
  }
}
