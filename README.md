# Construindo uma aplicação front-end com React.js
Esse projeto foi desenvolvido junto da - [EBAC](https://ebaconline.com.br/webinars/workshop-programming-2021-04-27-28-29) Escola Britânica de Artes Criativas & Tecnologia. 
<br>Instrutor: Daniel Castro @danieldcs.com

## Introdução 
* Biblioteca JavaScript.
* Serve para criar interfaces visuais (UI).
* Criado pelo Facebook.
* Baseado em componentes. 
* Trabalha com React DOM.
* Atualiza somente o que é necessário.
* Programação declarativa.
* Também utilizada no desenvolvimento mobile com React Native.


## Fundamentos
* State.
* Ciclo de vida.
* Manipulação de Eventos.
* Estilização (CSS).
* Renderização Condicional.

### JSX
É uma extensão de sintaxe do JavaScript (JavaScript Syntax eXtension) que nos permite escrever HTML dentro do JavaScript.
* Ajuda a descrever como uma UI deve ser.
* Lembra uma linguagem de template, mas poder do JS.
* É possível usar expressões.
* Representa objetos.
* Pode conter elementos filhos.
* Ajuda a prevenir ataques de injeção XSS.
* Você pode usar React sem JSX.

#### Exemplo A:
```javascript
const element = <h1>Olá, Mundo!</h1>
```
#### Exemplo B:
```javascript
const name = 'Beatriz Givisiez';
const element = <h1>Olá, {name}</h1>;
```

### componentes, Props e Children
Componentes representam a UI/Interface (por exemplo uma tabela, botão, video e todo esse pequenos fragmentos/interface eles são meus componentes) e o props é o atributos deste componente.
* Um componente pode retornar uma ou mais partes da UI.
* Um componente é uma função javascript que sempre retorna um elemento.
* Um componente pode compor outros componentes.
* Componentes podem possuir atributos (Props).
* Componentes podem acessar filhos (Children).
* Componentes podem ser de Classe ou Funções.
* Um componente de classe possui o método render().
* Um componente de classe possui um contrutor elevando props.
* Os métodos de um componente de classe precisam ser vinculados usando bind.
* Para usar o this em funções é necessário fazer o binding das funções.
* Componentes podem ou não conter estado.
* Um componente deve ter pouca responsabilidade (boas práticas).
* As props são atributos passados da declaração do componente.
* Um atributo é acessível na variável props.
* Todo componente uma propriedade chamada children.






## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
