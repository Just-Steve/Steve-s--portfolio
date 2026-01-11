// import { useState } from "react";
// // import axios from "axios";

// type Blog = {
//   title: string;
//   summary: string;
//   url: string;
// };

// export default function AIBlogSearch() {
//   const [prompt, setPrompt] = useState("");
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!prompt.trim()) return;

//     setIsLoading(true);
//     setError("");

//     try {
//       // First try OpenAI
//       const aiResponse = await axios.post("/api/ai-request", { prompt });
//       if (aiResponse.data.length > 0) {
//         setBlogs(aiResponse.data);
//       } else {
//         // Fallback to Dev.to API
//         const devToResponse = await axios.get(`/api/fetch-blogs?query=${prompt}`);
//         setBlogs(devToResponse.data);
//       }
//     } catch (err) {
//       setError("Failed to fetch blogs. Please try again.");
//       console.error(err);
//     // } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">AI Tech Blog Finder</h1>
      
//       <form onSubmit={handleSubmit} className="mb-6">
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Search for blogs (e.g., React, AI, Next.js)"
//             className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
//           >
//             {isLoading ? "Searching..." : "Search"}
//           </button>
//         </div>
//       </form>

//       {error && (
//         <div className="p-4 mb-6 bg-red-100 text-red-700 rounded-lg">
//           {error}
//         </div>
//       )}

//       <div className="space-y-4">
//         {blogs.map((blog, index) => (
//           <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               <a href={blog.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
//                 {blog.title}
//               </a>
//             </h2>
//             <p className="text-gray-600">{blog.summary}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }