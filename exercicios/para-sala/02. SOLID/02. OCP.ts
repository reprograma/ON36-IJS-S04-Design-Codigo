// Open/Closed Principle - OCP

class PaymentProcessor {
  process(paymentMethod: string): void {
    if (paymentMethod === "credit-card") {
      console.log("Processing credit card payment");
    } else if (paymentMethod === "debit-account") {
      console.log("Processing Debit account payment");
    }
  }
}