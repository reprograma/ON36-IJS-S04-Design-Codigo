class NotificationManager {
    sendEmailNotification(to: string, message: string): void {
        console.log(`Sending email to ${to}: ${message}`);
    }

    sendSmsNotification(to: string, message: string): void {
        console.log(`Sending SMS to ${to}: ${message}`);
    }
}

const notificationManager = new NotificationManager();
notificationManager.sendEmailNotification('example@example.com', 'Hello via Email!');
notificationManager.sendSmsNotification('1234567890', 'Hello via SMS!');
