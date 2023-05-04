Este é um aplicativo simples em Angular que se conecta à API viacep.com.br, permitindo que os usuários pesquisem rapidamente endereços brasileiros e obtenham informações detalhadas sobre eles. O aplicativo fornece uma interface de usuário intuitiva com uma barra de pesquisa na qual os usuários podem inserir um CEP e obter resultados instantâneos.

## Nova Consulta

![cep1](https://user-images.githubusercontent.com/55145973/236271388-ec9f833e-b232-4a31-889e-a2bd0fb1bdf2.png)

Para criar uma nova consulta, digite o cep desejado e clique no botão "Pesquisar".


## Resultado da Consulta

![cep2](https://user-images.githubusercontent.com/55145973/236271393-9f407434-abdf-4681-89ee-a1c57847d1c1.png)

Aguarde alguns momentos e a sua buscar será realizada!

O aplicativo usa o módulo HttpClient do Angular para fazer solicitações HTTP à API viacep.com.br e os dados de resposta são exibidos em um formato de tabela. Os usuários podem visualizar detalhes como o nome da rua, bairro, cidade e estado de um determinado endereço.

# AngularConsultaCep

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
