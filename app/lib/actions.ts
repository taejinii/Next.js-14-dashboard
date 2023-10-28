"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

const CreateInvoice = InvoiceSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { amount, customerId, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  // 일반적으로 DB에 화폐 값을 센트 단위로 저장하여 자바스크립트 부동소수점 오류를 없애고 정확성을 높이기위해 센트 단위로 변환하여 저장한다.
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  try {
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  // revalidatePath를 사용하면 특정 경로에 대해 캐시된 데이터를 온디맨드 방식으로 제거할수 있다. 즉 여기서 인보이스를 업데이트해서 /dashboard/invoices로 이동하면 해당 페이지는 캐시를 지웠기때문에 새로운데이터 요청을 보낼테고 데이터는 최신화된다.
  revalidatePath("/dashboard/invoices");
  // try문이 작동해야 redirect된다. catch문이 실행되면 redirect가 안된다는뜻.
  redirect("/dashboard/invoices");
}

const UpdateInvoice = InvoiceSchema.omit({ date: true });
export async function updateInvoice(formData: FormData) {
  const { id, customerId, amount, status } = UpdateInvoice.parse({
    id: formData.get("id"),
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
const DeleteInvoice = InvoiceSchema.pick({ id: true });
export async function deleteInvoice(formData: FormData) {
  const { id } = DeleteInvoice.parse({
    id: formData.get("id"),
  });

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath("/dashboard/invoices");
    return { message: "Deleted Invoice." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Invoice." };
  }
}
