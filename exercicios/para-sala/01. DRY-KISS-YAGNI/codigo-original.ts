class User {
    name: string;
    age: number;
    email: string;
    
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

class UserManager {
    users: User[] = [];

    addUser(name: string, age: number, email: string): void {
        if (name !== '' && age > 0 && email !== '') {
            const user = new User(name, age, email);
            this.users.push(user);
        } else {
            console.log('Invalid user details');
        }
    }

    getUserByEmail(email: string): User | null {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email === email) {
                return this.users[i];
            }
        }
        return null;
    }

    removeUser(email: string): void {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email === email) {
                this.users.splice(i, 1);
                break;
            }
        }
    }

    printAllUsers(): void {
        for (let i = 0; i < this.users.length; i++) {
            console.log(`Name: ${this.users[i].name}, Age: ${this.users[i].age}, Email: ${this.users[i].email}`);
        }
    }
}

const userManager = new UserManager();
userManager.addUser('Alice', 30, 'alice@example.com');
userManager.addUser('Bob', 25, 'bob@example.com');
userManager.printAllUsers();
userManager.removeUser('alice@example.com');
userManager.printAllUsers();
