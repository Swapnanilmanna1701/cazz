/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/utils/db/dbConfig";
import { AiChatSession } from "@/utils/db/form-gemini";
import { JsonForms } from "@/utils/db/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { Loader2 } from "lucide-react";
import moment from "moment/moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const PROMPT =
  "On Basis of description create JSON form with formTitle, formHeading along with fieldName, FieldTitle, FieldType, Placeholder, label , required fields, and checkbox and select field type options will be in array only and in JSON format";

export default function CreateForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [userInput, setUserInput] = useState();
  const [loading, setLoading] = useState();
  const { user } = useUser();
  const route = useRouter();

  const [formList, setFormList] = useState();

  useEffect(() => {
    user && GetFormList();
  }, [user]);

  const GetFormList = async () => {
    const result = db
      .select()
      .from(JsonForms)
      .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(JsonForms.id));

    setFormList(result);
  };
  const onCreateForm = async () => {
    setLoading(true);
    const result = await AiChatSession.sendMessage(
      "Description:" + userInput + PROMPT,
    );
    console.log(result.response.text());
    if (result.response.text()) {
      const resp = db
        .insert(JsonForms)
        .values({
          jsonform: result.response.text(),
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD/MM/yyyy"),
        })
        .returning({ id: JsonForms.id });

      console.log("New Form ID", resp[0]?.id);
      if (resp[0]?.id) {
        route.push("/dashboard/edit-form/" + resp[0].id);
      }
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <div>
      <Button onClick={() => setOpenDialog(true)}>+ Create Form</Button>
      <Dialog open={openDialog}>
        <DialogContent className="bg-white text-black">
          <DialogHeader>
            <DialogTitle>Create new form </DialogTitle>
            <DialogDescription>
              <Textarea
                className="my-2 text-black"
                onChange={(event) => setUserInput(event.target.value)}
                placeholder="Write description of your form"
              />
              <div className="flex gap-2 my-3 justify-end text-black">
                <Button
                  className="bg-red-700 text-white hover:bg-red-600"
                  onClick={() => setOpenDialog(false)}
                  variant="destructive"
                >
                  Cancel
                </Button>
                <Button
                  className="bg-blue-700 text-white hover:bg-blue-600"
                  disabled={loading}
                  onClick={() => onCreateForm()}
                >
                  {loading ? <Loader2 className="animate-spin" /> : "Create"}
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
