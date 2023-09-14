"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function StudentForm() {
  const router = useRouter();

  const [data, setData] = useState({
    category: "",
    CollegeName: "",
    Address: "",
    Website: "",
    SocialHandles: "",
    Name: "",
    ContactNumber: "",
    OfficialEmail: "",
    // AlternateEmail: "",
    Feedback: "",
  });

  const createStudent = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/create-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Student record created successfully");
        router.push("/dashboard"); // Redirect to dashboard after successful submission
      } else {
        const errorMessage = await response.text();
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error creating student record:", error);
      toast.error("An error occurred ");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Student Record
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={createStudent}>
            <div>
            <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2">
                <input
                  id="category"
                  name="category"
                  type="text"
                  autoComplete="category"
                  required
                  value={data.category}
                  onChange={(e) => setData({ ...data, category: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="CollegeName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                College Name
              </label>
              <div className="mt-2">
                <input
                  id="CollegeName"
                  name="CollegeName"
                  type="text"
                  autoComplete="CollegeName"
                  required
                  value={data.CollegeName}
                  onChange={(e) => setData({ ...data,CollegeName: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="Address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  id="Address"
                  name="Address"
                  type="text"
                  autoComplete="Address"
                  required
                  value={data.Address}
                  onChange={(e) => setData({ ...data, Address: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="Website"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Website
              </label>
              <div className="mt-2">
                <input
                  id="Website"
                  name="Website"
                  type="text"
                  autoComplete="Website"
                  required
                  value={data.Website}
                  onChange={(e) => setData({ ...data, Website: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              
              <label
                htmlFor="SocialHandles"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Social Handles
              </label>
              <div className="mt-2">
                <input
                  id="SocialHandles"
                  name="SocialHandles"
                  type="text"
                  autoComplete="SocialHandles"
                  required
                  value={data.SocialHandles}
                  onChange={(e) => setData({ ...data, SocialHandles: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
              <label
                htmlFor="Name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  autoComplete="Name"
                  required
                  value={data.category}
                  onChange={(e) => setData({ ...data, Name: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
              <label
                htmlFor="ContactNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contact Number
              </label>
              <div className="mt-2">
                <input
                  id="ContactNumber"
                  name="ContactNumber"
                  type="ContactNumber"
                  autoComplete="ContactNumber"
                  required
                  value={data.ContactNumber}
                  onChange={(e) => setData({ ...data, ContactNumber: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
              <label
                htmlFor="OfficialEmail"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                OfficialEmail
              </label>
              <div className="mt-2">
                <input
                  id="OfficialEmail"
                  name="OfficialEmail"
                  type="text"
                  autoComplete="OfficialEmail"
                  required
                  value={data.OfficialEmail}
                  onChange={(e) => setData({ ...data, OfficialEmail: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
              <label
                htmlFor="Feedback"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Feedback
              </label>
              <div className="mt-2">
                <input
                  id="Feedback"
                  name="Feedback"
                  type="text"
                  autoComplete="Feedback"
                  required
                  value={data.Feedback}
                  onChange={(e) => setData({ ...data, Feedback: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>



            </div>
            
          
            
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
