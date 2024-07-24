class UserRefactored {
    constructor(public name: string, public age: number, public email: string) {}
}

class UserManagerRefactored {
    private users: User[] = [];

    private validateUserDetails(name: string, age: number, email: string): boolean {
        return name !== '' && age > 0 && email !== '';
    }

    addUser(name: string, age: number, email: string): void {
        if (this.validateUserDetails(name, age, email)) {
            this.users.push(new User(name, age, email));
        } else {
            console.log('Invalid user details');
        }
    }

    getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    removeUser(email: string): void {
        this.users = this.users.filter(user => user.email !== email);
    }

    printAllUsers(): void {
        this.users.forEach(user => console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`));
    }
}

const userManagerRefactored = new UserManagerRefactored();
userManagerRefactored.addUser('Alice', 30, 'alice@example.com');
userManagerRefactored.addUser('Bob', 25, 'bob@example.com');
userManagerRefactored.printAllUsers();
userManagerRefactored.removeUser('alice@example.com');
userManagerRefactored.printAllUsers();
