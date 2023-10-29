import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Customer",
};
export default async function CustomerPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = searchParams;
  const customers = await fetchFilteredCustomers(query);
  const customers2 = await fetchCustomers();
  console.log("customers2", customers2);
  return (
    <div className="w-full">
      <CustomersTable customers={customers} />
    </div>
  );
}
