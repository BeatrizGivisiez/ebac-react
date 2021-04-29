# Construindo uma aplicação front-end com React.js

Esse projeto foi desenvolvido junto da [EBAC](https://ebaconline.com.br/webinars/workshop-programming-2021-04-27-28-29) Escola Britânica de Artes Criativas & Tecnologia.
<br>Instrutor: Daniel Castro @danieldcs.com

## Introdução

- Biblioteca JavaScript.
- Serve para criar interfaces visuais (UI).
- Criado pelo Facebook.
- Baseado em componentes.
- Trabalha com React DOM.
- Atualiza somente o que é necessário.
- Programação declarativa.
- Também utilizada no desenvolvimento mobile com React Native.

## Fundamentos

### JSX:

É uma extensão de sintaxe do JavaScript (JavaScript Syntax eXtension) que nos permite escrever HTML dentro do JavaScript.

- Ajuda a descrever como uma UI deve ser.
- Lembra uma linguagem de template, mas poder do JS.
- É possível usar expressões.
- Representa objetos.
- Pode conter elementos filhos.
- Ajuda a prevenir ataques de injeção XSS.
- Você pode usar React sem JSX.

#### Exemplo A:

```javascript
const element = <h1>Hello, world!</h1>;
```

#### Exemplo B:

```javascript
const name = "Beatriz Givisiez";
const element = <h1>Hello, {name}</h1>;
```

### Componentes, Props e Children:

Componentes representam a UI/Interface (por exemplo uma tabela, botão, video e todo esse pequenos fragmentos/interface eles são meus componentes) e o props é o atributos deste componente.

- Um componente pode retornar uma ou mais partes da UI.
- Um componente é uma função javascript que sempre retorna um elemento.
- Um componente pode compor outros componentes.
- Componentes podem possuir atributos (Props).
- Componentes podem acessar filhos (Children).
- Componentes podem ser de Classe ou Funções.
- Um componente de classe possui o método render().
- Um componente de classe possui um contrutor elevando props.
- Os métodos de um componente de classe precisam ser vinculados usando bind.
- Para usar o this em funções é necessário fazer o binding das funções.
- Componentes podem ou não conter estado.
- Um componente deve ter pouca responsabilidade (boas práticas).
- As props são atributos passados da declaração do componente.
- Um atributo é acessível na variável props.
- Todo componente uma propriedade chamada children.

#### Exemplo de componente de função:

```javascript
funciton Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}
const elemento = <Welcome name="Beatriz">;
```

#### Exemplo de componente de função com children e props:

```javascript
function Welcome(props) {
  return (
    <h1>
      {children}, {props.name}
    </h1>
  );
}
const elemento = <Welcome name="Beatriz">Hello</Welcome>;
```

#### Exemplo de componente de classe com estado:

```jsx
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        return {
            <div>
                <h1>Hello, world!</h1>
                <h2>It is { this.state.date.toLocateTimeString() }</h2>
            </div>
        };
    }
}
```

### State:

O state é uma variável que armazena o estado de alguma informação.

- O estado é similar à props, mas privado e somente controlado pelo componente.
- O state não deve ser modificiado diretamente, utilize a função this.setState().
- Atualizações de state pode ser arríncronas. O React pode agrupar chamadas para performance.
- Não confie no valor de state para calcular o valor de um próximo state.

### Ciclo de vida:

São métodos reservados para controlar do ciclo de vida do componente:

- `componentWillMount:` antes do primeiro render.
- `componentDidMount:` após primeiro render, geralmente para chamadas de assíncronas.
- `componentWillUpdate:` executa antes de atualização de um componente.
- `componentDidUpdate:` executa depois da atualização de um componente.
- `compenentWillReceiveProps:` quando as props que o componente recebe são atualizadas.
- `componentWillUnmount:` executa quando o ciclo de vida de um componente termina e ele vai ser removido do DOM. É muito usado para remover setTimeouts e setIntervals que foram adicionados.
- `shouldComponentUpdate:` deve retornar true/false. Esse valor vai dizer que se o componente deve ser atualizado ou não, com base em certos parâmetros. Geralmente é usado para resolver questões de performace.

### Manipulação de Eventos:

Eventos no React são muito similares a eventos no HTML (DOM).

- São nomeados usando camelCase, ao invés de letras minúsculas.
- Com JSX você passa uma função como manipulador de eventos, ao invés de um texto.
- Com HTML, retorna false em um link para evitar a abertura de uma nova página.
- Eventos: onClick, onChange
  <a href="#" onClick=(handleClick)>...</a>

### Estilização (CSS):

### Renderização Condicional.

### `yarn`

`npm install -g yarn`<br>
`npm start`

# Reforçando estudos de JS.

- Variáveis
- Tipos de dados
- Operadores
- Funções
- Condicionais
- Repetição
- Manipulação de erro
- JS Assíncrono
- Map, Filter, Reduce

# Novos fundamentos do React.

- Forms.
- Componentes de Função.
- Hooks (useState, useEffect, useMemo, useRef).
- Context API.
