// Interface Segregation Principle - ISP

interface OrderISP {
  processPayment(): void;
  shipOrder(): void; // Nem todos os pedidos são enviados fisicamente
  sendDownloadLink(): void; // Nem todos os pedidos têm links de download
}

class ProductOrderISP {
  constructor(public product: Product, public quantity: number) {}
}

class PhysicalOrder implements OrderISP {
  orderId: number;
  paymentMethod: string;
  items: ProductOrderISP[];
  
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

class DigitalOrder implements OrderISP {
  orderId: number;
  paymentMethod: string;
  items: ProductOrderISP[];

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
