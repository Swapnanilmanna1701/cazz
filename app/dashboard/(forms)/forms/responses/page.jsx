"use server";

import { FormListItemResp } from "@/components/forms/response/FormListItemResp";
import { db } from "@/utils/db/dbConfig";
import { JsonForms } from "@/utils/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

async function Responses() {
  const user = await currentUser();
  const formList = db
    .select()
    .from(JsonForms)
    .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress));

  return (
    formList && (
      <div className="py-10 px-4">
        <h2 className="font-bold text-3xl">Responses</h2>

        <div className="flex flex-row flex-wrap gap-5">
          {Array.isArray(formList) &&
            formList?.map((form, index) => (
              <FormListItemResp
                key={index}
                formRecord={form}
                jsonForm={JSON.parse(form.jsonform)}
              />
            ))}
        </div>
      </div>
    )
  );
}

export default Responses;
