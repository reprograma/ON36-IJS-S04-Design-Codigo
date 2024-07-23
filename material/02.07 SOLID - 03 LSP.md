# Liskov Substitution Principle - LSP

No princípio de Susbtiuição de Liskov, os subtipos devem ser substituíveis por seus tipos base sem alterar o funcionamento correto do programa.

Esse princípio enfatiza o uso correto da herança e a consistência do comportamento, assegurando que as subclasses preservem a funcionalidade da classe base.

No seguinte exemplo, a classe `Bicyle` herda todos os atributos e métodos da classe `Transport`. Entretanto, uma bicicleta conversional não tem `Motor` e, portanto, esse exemplo viola o princípio de substituição de Liskov:

<h1>
  <img src="../assets/uml/lsp-wrong-example.jpg" alt="Diagrama de classe para um exemplo que viola o princípio de substituiçãod de Liskov" width="500" height="500">
</h1>

Veja o exemplo em código:

```typescript
export class Motor {
  turnOn(): void {
    console.log("Motor ligado");
  }
}

export class Transport {
  constructor(
    public name: string,
    public velocity: number,
    public motor: Motor
  ) {}

  public turnMotorOn(): boolean {
    this.motor.turnOn();
    return true;
  }
}

export class Tank {
  constructor(public isEmpty: boolean) {}
}

export class Car extends Transport {
  constructor(
    public name: string,
    public velocity: number,
    public motor: Motor,
    public tank: Tank
  ) {
    super(name, velocity, motor);
    this.tank = tank;
  }

  public turnMotorOn(): boolean {
    if (this.tank.isEmpty) {
      return false;
    }
    return super.turnMotorOn();
  }
}

export class Bicycle extends Transport {
  constructor(
    public name: string,
    public velocity: number,
    public motor: Motor
  ) {
    super(name, velocity, motor);
  }
}

const bicycle = new Bicycle("Bike", 20, new Motor());
bicycle.turnMotorOn(); // ligar motor da bicileta???
```

Veja como seria o correto uso de herança para aplicar o princípio de substituição de Liskov:

<h1>
  <img src="../assets/uml/lsp-good-example.jpg" alt="Diagrama de classe para um exemplo que aplica o princípio de substituiçãod de Liskov" width="500" height="500">
</h1>

Código desse exemplo:

```typescript
export class Motor {
  turnOn(): void {
    console.log("Motor ligado");
  }
}

export class Transport {
  constructor(public name: string, public velocity: number) {}
}

export class MotorizedTransport extends Transport {
  constructor(
    public name: string,
    public velocity: number,
    public motor: Motor
  ) {}

  public turnMotorOn(): boolean {
    this.motor.turnOn();
    return true;
  }
}

export class Tank {
  constructor(public isEmpty: boolean) {}
}

export class Car extends MotorizedTransport {
  constructor(
    public name: string,
    public velocity: number,
    public motor: Motor,
    public tank: Tank
  ) {
    super(name, velocity, motor);
    this.tank = tank;
  }

  public turnMotorOn(): boolean {
    if (this.tank.isEmpty) {
      return false;
    }
    return super.turnMotorOn();
  }
}

export class Bicycle extends Transport {
  constructor(public name: string, public velocity: number) {
    super(name, velocity);
  }
}

const bicycle = new Bicycle("Bike", 20);
```

O Princípio de Substituição de Liskov é essencial para garantir que o uso da herança em seu código seja correto e mantenha a integridade do comportamento do sistema. Ao aplicar LSP, você cria um código mais robusto e menos propenso a erros ao utilizar polimorfismo e herança.
