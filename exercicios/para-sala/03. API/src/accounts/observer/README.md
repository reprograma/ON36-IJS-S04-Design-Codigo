## Situação-Problema para o Padrão Observer

### Contexto

Em um sistema bancário, é importante notificar várias partes interessadas quando ocorrem mudanças no saldo de uma conta. Por exemplo, ao realizar uma transação que altera o saldo, o sistema pode precisar:

- Notificar o titular da conta via email.
- Atualizar um sistema de monitoramento de fraude.
- Registrar a mudança em um sistema de auditoria.

### Problema

Atualmente, o sistema de contas bancárias só atualiza o saldo da conta e não tem um mecanismo para notificar essas outras partes interessadas. Precisamos de uma maneira flexível para permitir que várias partes interessadas sejam notificadas automaticamente quando o saldo da conta muda, sem acoplar diretamente essas funcionalidades ao código de atualização de saldo.

### Solução com o Padrão Observer

Use o padrão Observer para resolver esse problema. O padrão Observer permite que objetos (observadores) se inscrevam em um objeto (sujeito) e sejam notificados automaticamente sobre mudanças de estado.

