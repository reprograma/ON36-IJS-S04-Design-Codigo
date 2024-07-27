// Single Responsibility Principle - SRP

// Responsável por gerenciar produtos
class Product {
  constructor(
    public producId: number,
    public name: string,
    public price: number,
    public stockQuantity: number
  ) {}
}

// Responsável por gerenciar items de um pedido
class ProductOrder {
  constructor(public product: Product, public quantity: number) {}
}

// Responsável por gerenciar pedidos
class Order {
  constructor(
    public orderId: number,
    public paymentMethod: string,
    public items: ProductOrder[]
  ) {}

  calculateTotal(): number {
    return this.items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }

  processPayment(): void {
    console.log(`Process payment here of ${this.paymentMethod}`);
  }

  sendConfirmationEmail(): void {
    console.log(`Sending confirmation email for order ${this.orderId}`);
  }
}
