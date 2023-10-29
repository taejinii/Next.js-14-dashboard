import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer",
};
export default function CustomerPage() {
  return (
    <div className="w-full">
      <CustomersTable customers={[]} />
    </div>
  );
}
