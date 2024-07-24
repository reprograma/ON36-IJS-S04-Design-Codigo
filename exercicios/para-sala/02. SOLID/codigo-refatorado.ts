// Define an interface for notification sending
interface NotificationSender {
    send(to: string, message: string): void;
}

// Implement the Email notification sender
class EmailNotificationSender implements NotificationSender {
    send(to: string, message: string): void {
        console.log(`Sending email to ${to}: ${message}`);
    }
}

// Implement the SMS notification sender
class SmsNotificationSender implements NotificationSender {
    send(to: string, message: string): void {
        console.log(`Sending SMS to ${to}: ${message}`);
    }
}

// NotificationManager now depends on the abstraction (interface) rather than concrete implementations
class NotificationManagerRefactored {
    constructor(private sender: NotificationSender) {}

    notify(to: string, message: string): void {
        this.sender.send(to, message);
    }
}

const emailSender = new EmailNotificationSender();
const smsSender = new SmsNotificationSender();

const emailManager = new NotificationManagerRefactored(emailSender);
const smsManager = new NotificationManagerRefactored(smsSender);

emailManager.notify('example@example.com', 'Hello via Email!');
smsManager.notify('1234567890', 'Hello via SMS!');
