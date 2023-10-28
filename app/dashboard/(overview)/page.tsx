import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { Suspense } from "react";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchCardData } from "@/app/lib/data";
import {
  CardSkeleton,
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/ui/dashboard/skeletons";
import Cards from "@/app/ui/dashboard/cards";

export default async function Page() {
  // 아래와 같이 데이터를 요청하면 각 요청이 수행완료 될때까지 다음요청은 대기하게된다. 즉 페이지를 그리는데 오래걸린다. 이와 같은 현상을 waterfall 이라 부른다.
  // waterfall pattern 일때 데이터를 느리게 가져오는 요청이 있다면 해당요청 하나때문에 전체페이지가 block된다.
  // waterfall 을 사용해야할땐 예를들면 사용자의 정보를 가져오는 요청을 수행한후 해당 사용자의 정보를 가지고 친구목록을 가져오는 요청을하는경우 사용하면된다.
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <Cards />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
