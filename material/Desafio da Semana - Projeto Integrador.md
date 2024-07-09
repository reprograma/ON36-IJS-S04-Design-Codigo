![Tarefa](/assets/atividade-exercicio.svg)
 
# Desafio Semanal

### Objetivos de aprendizagem do desafio 🎯

- Explorar práticas recomendadas para criar um design de código claro e eficiente
- Aplicar SOLID, DRY e KISS
- Implementar padrões de código PD_Factory, PD_Adapter, PD_Observer
- Identificar como os padrões de design influenciam a estrutura e organização de um sistema.

<h2 align=center> {Reprograma}Bank </h2>
  <h3>melhorando nossa aplicação</h3>

Nesta semana, o desafio é refatorar a aplicação desenvolvida anteriormente, aplicando práticas recomendadas para criar um design de código claro e eficiente. Além disso, serão aplicados os princípios SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion), DRY (Don't Repeat Yourself), KISS (Keep It Simple, Stupid) e alguns padrões de design, como Factory, Adapter e Observer.

Requisitos de negócio:

- Adicionar a capacidade de realizar pagamentos de contas por PIX ou número de boleto.
- O cliente deve possuir saldo em conta ou limite no cheque especial para efetuar a transação.

Sugestão de Estrutura de Pastas:

```lua
reprograma-bank/
├── src/
│   ├── controllers/
│   │   └── xxxController.ts
│   ├── models/
│   │   └── xxxModel.ts
│   ├── routes/
│   │   └── xxxRoutes.ts
│   ├── services/ 
│   │   └── xxxService.ts
│   └── index.ts
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md
```

Na estrutura sugerida:
- `src/controllers/`: Contém os controladores para manipular as requisições HTTP, lidando principalmente com a interação entre a API e o modelo de dados.
- `src/models/`: Armazena os modelos de dados das entidades Cliente, Gerente e Conta, representando a estrutura de dados da aplicação.
- `src/routes/`: Define as rotas da API para cada entidade, mapeando as solicitações HTTP para as funções correspondentes nos controladores.
- `src/services/`: Armazena os serviços responsáveis por implementar a lógica de negócios da aplicação, mantendo a separação de responsabilidades e facilitando a reutilização do código.
- `src/index.ts`: Arquivo principal que inicializa o servidor e conecta-se ao banco de dados, fornecendo a entrada para a aplicação.

#### Para profa:

#### Exemplos de Aplicação dos Princípios e Padrões:

1. **SOLID**:
   - **Single Responsibility**: Cada classe ou método deve ter apenas uma responsabilidade. Por exemplo, a classe `clienteService` deve ser responsável apenas por manipular operações relacionadas a clientes, como abrir conta, fechar conta, etc.
   - **Open/Closed**: As classes devem estar abertas para extensão, mas fechadas para modificação. Por exemplo, ao adicionar novos tipos de contas, deve-se estender a classe base `Conta` em vez de modificar diretamente.
   - **Liskov Substitution**: As subclasses devem ser substituíveis por suas superclasses. Por exemplo, todas as subclasses de `Conta` devem poder ser usadas em qualquer lugar em que `Conta` é esperada.
   - **Interface Segregation**: As interfaces devem ser específicas para os clientes que as utilizam. Por exemplo, se um cliente só precisa de métodos para interagir com sua conta, a interface deve incluir apenas esses métodos.
   - **Dependency Inversion**: As classes de alto nível não devem depender das classes de baixo nível, mas sim de abstrações. Por exemplo, as classes de controle devem depender de interfaces em vez de implementações concretas.

2. **DRY** (Don't Repeat Yourself): Evite repetir código duplicado. Por exemplo, se houver lógica semelhante em diferentes partes do sistema, ela deve ser encapsulada em uma função ou método e reutilizada.

3. **KISS** (Keep It Simple, Stupid): Mantenha o código simples e fácil de entender. Evite adicionar complexidade desnecessária ao sistema.

4. **Factory Pattern**: Utilize o padrão Factory para criar instâncias de objetos de maneira mais flexível e controlada. Por exemplo, a classe `ContaService` pode ter um método de fábrica para criar diferentes tipos de contas com base em um parâmetro.

5. **Adapter Pattern**: Use o padrão Adapter para adaptar interfaces incompatíveis. Por exemplo, se a API externa que fornece informações sobre taxas de câmbio tiver uma interface diferente da esperada pela aplicação, um adaptador pode ser usado para traduzir entre as duas interfaces.

6. **Observer Pattern**: Implemente o padrão Observer para permitir que objetos assinem e sejam notificados sobre mudanças de estado em outros objetos. Por exemplo, um serviço de notificação pode observar mudanças nas contas dos clientes e notificar o cliente sobre transações ou alterações de saldo.