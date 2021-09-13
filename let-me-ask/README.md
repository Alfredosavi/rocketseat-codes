<p align="center">
   <img src="https://raw.githubusercontent.com/Alfredosavi/rocketseat-codes/main/let-me-ask/src/assets/images/logo.svg" alt="LetMeAsk" width="285"/>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/Alfredosavi/rocketseat-codes">
</p>

<b>Let Me Ask</b> é um projeto construído em ```React``` com ```TypeScript``` e ```Firebase```. Esse projeto tem como função criar salas para que outras pessoas possam se cadastrar utilizando sua conta Google e criar perguntas,
para que o administrador da sala possa vir a responder.

Plataforma ideal para streamers criarem salas com o intuito de seus telespectadores criarem perguntas e votar nas que acharem mais relevantes para posteriormente o streammer responder. 

![Homepage](https://i.imgur.com/BAk3rq0.png)
![Question-Page](https://i.imgur.com/xqRs7uv.png)
![Admin-Page](https://i.imgur.com/ULDJE7W.png)

## :tada: Features
Foi adicionado algumas funcionalidades extras e efeitos visuais para melhorar e tornar o projeto ainda mais intuítivo. Dentre elas, temos:
  * ```Toasts``` de avisos utilizando o ```react-toastify```;
  * Na criação de sala, foi adicionado qual conta ```Google``` está logada e também uma opção para realizar a troca de conta.

## 🔥 Instalação e execução
  1. Faça um clone desse repositório: ```git clone git@github.com:Alfredosavi/rocketseat-codes.git```;
  2. Entre dentro do diretório: ```cd rocketseat-codes/let-me-ask/```;
  3. Instale as dependências com: ```yarn install```;
  4. Configure o [firebase](#firebase) e as [variáveis ambiente](#env);
  5. Rode com ```yarn start```.
  

<a id="firebase"></a>
## :wrench: Configurações Firebase
Assumindo que você tenha feito o cadastro no [firebase](https://firebase.google.com/):

- No menu superior clique no botão ```Ir para o console```;
- Clique em ```adicionar projeto```, e informe o nome do seu projeto (Ex.: letmeask);
- Desative o ```google analytics``` e clique em ```Criar projeto```;
- No menu lateral esquerdo clique em ```Authentication``` na seção de ```criação```;
- Clique no botão ```Primeiros passos```;
- Em ```Authentication``` vá na aba ```Sign-in method``` e ative o provedor ```Google```. Informe um email valido e clique em ```Salvar```;
- Novamente no menu lateral esquerdo, vá em ```Realtime database``` na seção de ```criação```;
- Clique no botão ```Criar banco de dados```;
- No ```Local do Realtime Database``` deixe padrão e clique em ```Próxima```;
- Deixe na opção ```Iniciar no modo bloqueado``` e clique em ```Ativar```;
- Depois de carregado, vá na aba ```Regras``` no menu de ```Realtime Database```;
- Delete o conteúdo e cole o seguinte regra:
  ```js
  {
    "rules": {
      "rooms": {
        ".read": true,
        ".write": "auth != null",
        "$roomId": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.uid)",
          "questions": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.uid)",
            "likes": {
              ".read": true,
              ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.uid)",
            }
          }
        }
      }
    }
  }
  ```
- Clique no botão ```Publicar```;

<a id="env"></a>

Depois de configurado o firebase, vamos pegar as credenciais de acesso:
- No menu lateral esquerdo clique em ```Visão geral do projeto```;
- No banner clique em: ```</>```, pois é uma aplicação WEB;
- De um apelido para o projeto (Ex.: letmeask-web);
- Antes de registrar o App, certifique que a opção ```Firebase Hosting``` esteja __Desativada__;
- Crie um ```.env``` na raiz projeto e copie as credenciais de acesso preenchendo de acordo com as variáveis ambiente abaixo:
  ```js
  # Firebase
  REACT_APP_API_KEY= <apiKey>
  REACT_APP_AUTH_DOMAIN= <authDomain>
  REACT_APP_PROJECT_ID= <projectId>
  REACT_APP_STORAGE_BUCKET= <storageBucket>
  REACT_APP_MESSAGING_SENDER_ID= <messagingSenderId>
  REACT_APP_APP_ID= <appId>
  ```


## ⚡️ Como contribuir
  - Faça um fork desse repositório;
  - Cria uma branch com a sua feature: `git checkout -b minha-feature`;
  - Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
  - Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.


## :credit_card: Créditos
  * :rocket: [Rocketseat](https://rocketseat.com.br/)


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/Alfredosavi/rocketseat-codes/blob/main/LICENSE) para mais detalhes.

