"use client";

import { db } from "@/utils/db/dbConfig";
import { MockInterview } from "@/utils/db/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import InterviewItemCard from "./interview-card";

export default function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    try {
      setIsLoading(true);
      const result = await db
        .select()
        .from(MockInterview)
        .where(
          eq(
            MockInterview.createdBy,
            user?.primaryEmailAddress?.emailAddress || ""
          )
        )
        .orderBy(desc(MockInterview.id));

      console.log(result);
      setInterviewList(result);
    } catch (error) {
      console.error("Failed to fetch interview list:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-5rem)]">
      <h2 className="text-xl lowercase font-semibold">
        Previous mock interviews.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {isLoading ? (
          [1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="h-[100px] w-full bg-gray-200 animate-pulse rounded-lg "
            ></div>
          ))
        ) : interviewList?.length > 0 ? (
          interviewList.map((interview, index) => (
            <InterviewItemCard interview={interview} key={index} />
          ))
        ) : (
          <p>No interviews found.</p>
        )}
      </div>
    </div>
  );
}
