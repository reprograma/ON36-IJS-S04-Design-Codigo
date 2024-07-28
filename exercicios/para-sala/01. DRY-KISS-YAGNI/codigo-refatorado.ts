class UserRefactored {    
    constructor(public name: string, public age: number, public email: string) {}
}

class UserManager {
    private users: UserRefactored[] = [];

    private validateUserDetails(name: string, age: number, email: string): boolean {
        return name !== '' && age > 0 && email !== '';
    }

    addUser(name: string, age: number, email: string): void {

        if (!this.validateUserDetails(name, age, email)) {
            console.log('Invalid user details');
            return;
        }
        const user = new UserRefactored(name, age, email);
        this.users.push(user);
        
    }

    getUserByEmail(email: string): UserRefactored | undefined {
        return this.users.find(user => user.email === email);
    }

    removeUser(email: string): void {
        this.users = this.users.filter(user => user.email !== email);
    }

    printAllUsers(): void {
        this.users.forEach(user => console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`));
    }
}

const userManager = new UserManager();
userManager.addUser('Alice', 30, 'alice@example.com');
userManager.addUser('Bob', 25, 'bob@example.com');
userManager.printAllUsers();
userManager.removeUser('alice@example.com');
userManager.printAllUsers();

// Resumo das Aplicações dos Princípios
// DRY: Evitou a repetição de lógica de validação ao encapsulá-la em 
// um método separado (validateUserDetails).
// KISS: Simplificou a adição, busca, remoção e impressão de usuários 
// usando métodos de array (push, find, filter, forEach), 
// tornando o código mais direto e legível.
// YAGNI: Manteve as classes e métodos focados apenas na funcionalidade 
// necessária, sem adicionar complexidade desnecessária.