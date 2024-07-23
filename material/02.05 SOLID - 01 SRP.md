# Single Responsibility Principle - SRP

Uma classe deve ter apenas uma responsabilidade, ou seja, apenas um motivo para mudar.

Quando uma classe tem mais de uma responsabilidade, ela se torna complexa e difícil de manter. Mudanças em uma responsabilidade podem afetar outras:

```typescript
class Product {
  // Responsável por gerenciar produtos
  constructor(
    public producId: number,
    public name: string,
    public price: number,
    public stockQuantity: number
  ) {}
}

class ProductOrder {
  // Responsável por gerenciar items de um pedido
  constructor(public product: Product, public quantity: number) {}
}

class Order {
  // Responsável por gerenciar pedidos
  constructor(
    public orderId: number,
    public paymentMethod: string,
    public items: ProductOrder[]
  ) {}

  // Responsável por calcular o total do pedido
  calculateTotal(): number {
    return this.items.reduce(
      (acc, item),
      () => item.product.price * item.quantity
    );
  }

  // Responsável por processar pagamento
  processPayment(): void {
    console.log(`Process payment here of ${paymentMethod}`);
  }

  // Responsável por enviar confirmação por e-mail
  sendConfirmationEmail(): void {
    console.log(`Sending confirmation email for order ${this.orderId}`);
  }
}
```

O melhor caminho é separar as responsabilidades em diferentes classes:

```typescript
class Product {
  // Responsável por gerenciar produtos
  constructor() {} // ...
}

class ProductOrder {
  // Responsável por gerenciar items de um pedido
  constructor() {} // ...
}

class Order {
  constructor(
    public orderId: number,
    public paymentMethod: string,
    public items: ProductOrder[]
  ) {}
}

class OrderService {
  calculateTotal(order): number {
    return order.items.reduce(
      (acc, item),
      () => item.product.price * item.quantity
    );
  }
}

class PaymentService {
  processPayment(order: Order): void {
    console.log(`Process payment here of ${order.paymentMethod}`);
  }
}

class EmailService {
  sendConfirmationEmail(order: Order): void {
    console.log(`Sending confirmation email for order ${order.orderId}`);
  }
}

// Uso
const order = new Order(1, "credit-card", [
  { product: { productId: 1, name: "Shoes", price: 10 }, quantity: 2 },
]);
const orderService = new OrderService();
const emailService = new EmailService();

const total = orderService.calculateTotal(order);
emailService.sendConfirmationEmail(order);
```
