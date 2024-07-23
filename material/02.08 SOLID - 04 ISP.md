# Interface Segregation Principle - ISP

Já o Princípio de Segregação de Interface (ISP) é um dos princípios SOLID que foca em criar interfaces específicas e coesas em vez de interfaces genéricas e volumosas. Este princípio afirma que "nenhum cliente deve ser forçado a depender de métodos que não utiliza".

O ISP sugere que é melhor ter várias interfaces pequenas e específicas do que uma única interface grande. Isso permite que as classes implementem apenas os métodos de que realmente precisam, evitando a dependência de métodos desnecessários.

Veja o seguinte exemplo de interface grande:

```typescript
interface Order {
  processPayment(): void;
  shipOrder(): void; // Nem todos os pedidos são enviados fisicamente
  sendDownloadLink(): void; // Nem todos os pedidos têm links de download
}

class PhysicalOrder implements Order {
  processPayment(): void {
    console.log("Processing payment for physical order");
  }

  shipOrder(): void {
    console.log("Shipping physical order");
  }

  sendDownloadLink(): void {
    throw new Error("Physical orders do not have download links");
  }
}

class DigitalOrder implements Order {
  processPayment(): void {
    console.log("Processing payment for digital order");
  }

  shipOrder(): void {
    throw new Error("Digital orders are not shipped");
  }

  sendDownloadLink(): void {
    console.log("Sending download link for digital order");
  }
}
```

Refatorando esse exemplo aplicando o princípio ISP:

```typescript
interface Payment {
  processPayment(): void;
}

interface Shipping {
  shipOrder(): void;
}

interface Download {
  sendDownloadLink(): void;
}

class PhysicalOrder implements Payment, Shipping {
  processPayment(): void {
    console.log("Processing payment for physical order");
  }

  shipOrder(): void {
    console.log("Shipping physical order");
  }
}

class DigitalOrder implements Payment, Download {
  processPayment(): void {
    console.log("Processing payment for digital order");
  }

  sendDownloadLink(): void {
    console.log("Sending download link for digital order");
  }
}
```

Ao aplicar o Princípio de Segregação de Interface ajuda a criar interfaces mais específicas e coesas, facilitando a manutenção e extensão do sistema. Isso evita dependências desnecessárias e mantém o código mais limpo e compreensível.
