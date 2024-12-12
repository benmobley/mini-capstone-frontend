import { useLoaderData } from "react-router-dom";

export function OrdersShowPage() {
  const order = useLoaderData();
  console.log(order);
  return (
    <div>
      <h1>Order Total: {order.total}</h1>
    </div>
  );
}
