# Open/Closed Principle - OCP

O Princípio Aberto/Fechado diz que as Entidades de software (classes, módulos, funções, etc.) devem estar abertas para extensão, mas fechadas para modificação. Isso significa que você deve ser capaz de adicionar novas funcionalidades ao sistema sem alterar o código existente.

O princípio do aberto/fechado é muito utilizado quando:

1. **Múltiplas Condições em um Método**, com muitos if/else ou switch cases que determinam comportamentos diferentes
2. **Código com Mudanças Frequentes** para adicionar novos comportamentos ou funcionalidades
3. **Duplicação de Código**, onde novos comportamentos são adicionados copiando e colando código existente com pequenas variações.

Veja o exemplo de uma classe responsável por processar pagamentos. O processo de pagamento com cartão de crédito é diferente do débito em conta. Além do mais, existe uma alta chance desse e-commerce fazer a integração com outros sistemas de pagamento, como PIX:

```typescript
class PaymentProcessor {
  process(paymentMethod: string): void {
    if (paymentMethod === "credit-card") {
      console.log("Processing credit card payment");
    } else if (paymentMethod === "debit-account") {
      console.log("Processing Debit account payment");
    }
  }
}
```

Ao utilizar os recursos da orientação objetos, como interfaces e herança, é possível extrair a lógica de cada tipo de pagamento para sua classe independente:

```typescript
interface PaymentStrategy {
  process(): void;
}

class CreditCardPayment implements PaymentStrategy {
  process(): void {
    console.log("Processing credit card payment");
  }
}

class DebitAccountPayment implements PaymentStrategy {
  process(): void {
    console.log("Processing debit account payment");
  }
}

class PaymentProcessor {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  process(): void {
    this.strategy.process();
  }
}

// Uso
const creditCardPayment = new CreditCardPayment();
const debitAccountPayment = new DebitAccountPayment();

const processor = new PaymentProcessor(creditCardPayment);
processor.process(); // Processing credit card payment

const processor2 = new PaymentProcessor(debitAccountPayment);
processor2.process(); // Processing debit account payment
```

Ao aplicar o princípio aberto/fechado torna mais fácil a adição de um novo meio de pagamento!
