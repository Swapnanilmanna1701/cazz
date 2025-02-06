import Image from "next/image";
import SourceCard from "./SourceCard";
import { Eye } from "lucide-react";

export default function Sources({
  sources,
  isLoading,
}: {
  sources: SearchResult[];
  isLoading: boolean;
}) {
  return (
    <div className="container h-auto w-full text-white shrink-0 rounded-lg border-2 border-solid border-white bg-gradient-to-r from-[#ff0b85] via-violet-500 to-cyan-300 p-5 lg:p-10">
      <div className="flex items-start gap-4 pb-3 lg:pb-3.5">
        <Eye size={24} />
        <h3 className="text-base font-bold uppercase leading-[152.5%] text-white">
          sources:{" "}
        </h3>
      </div>
      <div className="flex w-full max-w-5xl justify-center flex-wrap content-center items-center gap-[15px]">
        {isLoading ? (
          <>
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-gray-300" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-gray-300" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-gray-300" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-gray-300" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-gray-300" />
            <div className="h-20 w-[260px] max-w-sm animate-pulse rounded-md bg-gray-300" />
          </>
        ) : sources.length > 0 ? (
          sources.map((source, index) => (
            <SourceCard source={source} key={index} />
          ))
        ) : (
          <div>Could not fetch sources.</div>
        )}
      </div>
    </div>
  );
}
