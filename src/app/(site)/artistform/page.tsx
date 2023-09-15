"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function ArtistForm() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [data, setData] = useState({
    category: "",
    socialHandles: "",
    name: "",
    contactNumber: "",
    officialEmail: "",
    alternateEmail: "",
    feedback: "",
  });

  const createArtist = async (e: React.FormEvent<HTMLFormElement>) => {
    data.officialEmail = session?.user?.email!;
    data.name = session?.user?.name!;
    e.preventDefault();

    axios
      .post("/api/createartist", data)
      .then(() => toast.success("Artist Form filled successfully"))
      .catch(() => toast.error("Error in filling Artist Form"));
  };
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Artist Form
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={createArtist}>
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
                    required
                    value={data.category}
                    onChange={(e) =>
                      setData({ ...data, category: e.target.value })
                    }
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
                    value={data.socialHandles}
                    onChange={(e) =>
                      setData({ ...data, socialHandles: e.target.value })
                    }
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
                    required
                    value={data.contactNumber}
                    onChange={(e) =>
                      setData({ ...data, contactNumber: e.target.value })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <label
                  htmlFor="alrenateEmail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Alternate Email
                </label>
                <div className="mt-2">
                  <input
                    id="alrenateEmail"
                    name="alternateEmail"
                    type="text"
                    autoComplete="email"
                    value={data.alternateEmail}
                    onChange={(e) =>
                      setData({ ...data, alternateEmail: e.target.value })
                    }
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
                    value={data.feedback}
                    onChange={(e) =>
                      setData({ ...data, feedback: e.target.value })
                    }
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
  } else {
    return (
      <p>
        <a href="/login">Sign in</a>
      </p>
    );
  }
}
