import CustomersTable from "@/app/ui/customers/table";

export default function CustomerPage() {
  return (
    <div className="w-full">
      <CustomersTable customers={[]} />
    </div>
  );
}
