import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Quiz from "../_components/quiz";

export default function MockInterviewPage() {
return ( <div className="container mx-auto space-y-6 py-10 bg-white text-gray-800 min-h-screen"> <div className="flex flex-col space-y-3 mx-2"> <Link href="/interview"> <Button
         variant="link"
         className="gap-2 pl-0 text-[rgb(202,148,225)] hover:text-[rgb(180,120,210)] transition"
       > <ArrowLeft className="h-4 w-4" />
Back to Interview Preparation </Button> </Link>

```
    <div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
        Mock Interview
      </h1>
      <p className="text-gray-600">
        Test your knowledge with industry-specific questions
      </p>
    </div>
  </div>

  <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6">
    <Quiz />
  </div>
</div>

);
}
