import FormList from "@/components/forms/FormList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import Responses from "./responses/page";
import CreateForm from "@/components/forms/CreateForm";
import PulsatingDots from "@/components/ui/LoadingAnimation";
import { Navbar } from "@/components/Navbar";

function DashboardLayout() {
  return (
    <div>
      <div className=" justify-between">
        <div className="bg-black text-gray-100 h-20 ">
          <Navbar />
        </div>

        <Tabs defaultValue="Forms" className="w-full">
          <TabsList>
            <TabsTrigger
              value="Forms"
              className="bg-blue-700 text-white hover:bg-blue-500"
            >
              Forms
            </TabsTrigger>
            <TabsTrigger
              value="Responses"
              className="bg-blue-700 text-white hover:bg-blue-500"
            >
              Responses
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Forms">
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-60 w-full">
                  <PulsatingDots />
                </div>
              }
            >
              <FormList />
            </Suspense>
          </TabsContent>
          <TabsContent value="Responses">
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-60 w-full">
                  <PulsatingDots />
                </div>
              }
            >
              <Responses />
            </Suspense>
          </TabsContent>
        </Tabs>
        <CreateForm />
      </div>
    </div>
  );
}

export default DashboardLayout;
