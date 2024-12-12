import { useLoaderData } from "react-router-dom";

export function OrdersIndexPage() {
  const orders = useLoaderData();
  console.log(orders[0]);
  return (
    <div>
      <h1>All orders ({orders.length} total)</h1>
      {orders.map((order) => (
        <div key={order.id}>{order.id}</div>
      ))}
    </div>
  );
}
