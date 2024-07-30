## Requisitos

### Contexto
Você está desenvolvendo uma aplicação bancária usando NestJS, e seu sistema de contas possui dois tipos de contas (`SavingsAccount` e `CheckingAccount`). A aplicação atualmente integra-se com um serviço de terceiros para realizar verificações de crédito para novos clientes. Esse serviço de terceiros espera os dados das contas em um formato específico, diferente do formato que você utiliza internamente. Modificar o código existente para atender ao formato exigido pelo serviço de terceiros seria impraticável e propenso a erros.

### Problema
Você precisa adaptar suas classes `SavingsAccount` e `CheckingAccount` para que possam ser convertidas no formato esperado pelo serviço de verificação de crédito sem modificar as classes originais. Para resolver isso, você pode usar o padrão Adapter.

### Solução
A implementação do padrão Adapter permite que o sistema converta dados de contas no formato necessário para integração com o serviço de verificação de crédito de terceiros.

