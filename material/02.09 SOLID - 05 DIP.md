# Dependency Inversion Principle - DIP

Por fim, o Princípio da Inversão de Dependência (DIP) é um dos princípios SOLID que promove a separação entre módulos de alto nível (que contêm lógica complexa) e módulos de baixo nível (que realizam operações básicas). De acordo com o DIP:

1. **Módulos de alto nível** (que contêm regras de negócio complexas e lógica de aplicação) devem depender de abstrações, como interfaces ou classes abstratas.
2. **Módulos de baixo nível** (que lidam com detalhes específicos e implementações concretas) devem implementar essas abstrações.

O DIP tem como objetivo reduzir o acoplamento entre diferentes partes do sistema. Em vez de módulos de alto nível dependerem diretamente de módulos de baixo nível, ambos devem depender de abstrações (interfaces ou classes abstratas). Isso torna o sistema mais flexível, permitindo a substituição de implementações de baixo nível sem afetar os módulos de alto nível.

Imagine um sistema de e-commerce onde o serviço de pedido depende diretamente de uma implementação específica do serviço de pagamento:

```typescript
class PaymentService {
  processPayment(amount: number): void {
    console.log(`Processing payment of ${amount} dollars`);
  }
}

class OrderService {
  private paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  placeOrder(amount: number): void {
    console.log("Placing order...");
    this.paymentService.processPayment(amount);
  }
}

// Uso
const orderService = new OrderService();
orderService.placeOrder(100);
```

Neste exemplo temos:

- **Alto Acoplamento**: OrderService depende diretamente de PaymentService.
- **Dificuldade de Testes**: Não é fácil substituir PaymentService por um mock durante os testes.
- **Pouca Flexibilidade**: Alterar a lógica de pagamento ou usar um serviço de pagamento diferente requer mudanças no OrderService.

Vamos refatorar este exemplo introduzindo uma interface para abstrair o serviço de pagamento e ajustar OrderService para depender dessa abstração:

```typescript
interface IPaymentService {
  processPayment(amount: number): void;
}

class CreditCardPaymentService implements IPaymentService {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of ${amount} dollars`);
  }
}

class PixPaymentService implements IPaymentService {
  processPayment(amount: number): void {
    console.log(`Processing PIX payment of ${amount} dollars`);
  }
}

class OrderService {
  private paymentService: IPaymentService;

  constructor(paymentService: IPaymentService) {
    this.paymentService = paymentService;
  }

  placeOrder(amount: number): void {
    console.log("Placing order...");
    this.paymentService.processPayment(amount);
  }
}

// Uso with Credit Card Payment
const creditCardPaymentService = new CreditCardPaymentService();
const orderService1 = new OrderService(creditCardPaymentService);
orderService1.placeOrder(100);

// Uso with Pix Payment
const pixPaymentService = new PixPaymentService();
const orderService2 = new OrderService(pixPaymentService);
orderService2.placeOrder(100);
```

Com isso:

- **Abstração**: Criamos uma interface IPaymentService para abstrair a lógica de pagamento
- **Injeção de Dependência**: OrderService recebe uma implementação de IPaymentService via injeção de dependência (no construtor), em vez de criar uma instância diretamente.
- **Flexibilidade**: Agora é fácil trocar a implementação de IPaymentService sem alterar OrderService.

O Princípio da Inversão de Dependência é crucial para criar sistemas flexíveis e desacoplados. Aplicando-o, melhora a testabilidade, flexibilidade e manutenção do código. Ao focar em abstrações em vez de detalhes, você garante que seu sistema seja mais resiliente a mudanças e expansível no futuro.
