# pass.in

O pass.in é uma aplicação de gestão de participantes em eventos presenciais

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento

O sistema fará um scan da credencial do participante para permitir a entrada no evento

## Requisitos

### Requisitos funcionais

- [] O organizador deve poder cadastra um novo evento;
- [] O organizador deve poder visualizar dados de um evento;
- [] O organizador deve poder visualizar a lista de participantes;
- [] O participante deve poder se inscrever em um evento;
- [] O participante deve poder visualizar seu crachá de inscrição;
- [] O participante deve poder realizar chech-in no evento;

### Regras de negócio

- [] O participante só pode se inscrever em um evento umúnica vez;
- [] O participante só pode se inscrever em eventos com vagas disponíveis;
- [] O participante só pode realizar chech-in em um evento uma única vez;

### Requisitos não-funcionais

- [] O chech-in no evento será realizado através de um QRcode;


Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, ...
Corpo da requisição (request body)
Parâmetros de busca (search params / query parms) 'http://localhost:3333/users?name=gabriel'
Parâmetros de rota (route param) -> identificação de recursos 'DELETE http://localhost:3333/users/5'
Cabeçalhos (headers) -> contexto

Semânticas = significado

Driver nativo / Query builders / ORMs