# valoriza
É uma plataforma para promover o reconhecimento entre companheiros de equipe.


## :tada: Regras de negócio
  - __Cadastro de usuário__
    * Não é permitido cadastrar mais de um usuário com o mesmo email;
    * Não é permitido cadastrar usuário sem email.

  - __Cadastro de TAG__
    * Não é permitido cadastrar tag sem nome;
    * Não é permitido cadastrar mais de uma tag com o mesmo nome;
    * Não é permitido o cadastro por usuários que não sejam administradores.

  - __Cadastro de elogios__
    * Não é permitido um usuário cadastrar um elogio para si mesmo;
    * Não é permitido cadastrar elogios para usuários inválidos;
    * O usuário precisa estar autenticado na aplicação para cadastrar um elogio.
   
  
 
## :vertical_traffic_light: Rotas
  - __User__
    * ```GET /users:``` Lista todos os usuários cadastrados;
      * Response (exemplo):
        ```js
          {
            "id": "8064b8f1-852c-45d1-b451-7b6bd8eddadc",
            "name": "Alfredo Savi",
            "email": "alfredosavi@hotmail.com",
            "admin": true,
            "created_at": "2021-09-12T01:14:25.000Z",
            "updated_at": "2021-09-12T01:14:25.000Z"
          }
        ```

    * ```POST /users:``` Cria um novo usuário;
      * Body JSON (exemplo):
        ```js
          {
            "name": "Alfredo Savi",
            "email": "noadmin1@hotmail.com",
            "password": "123123",
            "admin": false
          }
        ```
       * Response (exemplo):
          ```js
            {
              "id": "634d125a-4c50-45ab-9a1b-f943163a8a9b",
              "name": "Alfredo Savi",
              "email": "noadmin1@hotmail.com",
              "password": "$2a$08$dWF5FsPhSl1tL9VUSibxiuH57EsuSpVgmjG4av5T2ES16TfXlTRs.",
              "admin": false,
              "created_at": "2021-09-12T02:19:30.000Z",
              "updated_at": "2021-09-12T02:19:30.000Z"
            }
          ```
        
  - __Tag__
    * ```GET /tags```: Lista toda as tags cadastradas;
      * Response (exemplo):
          ```js
          {
            "id": "70748a71-3020-49f8-85ec-b283608a09d9",
            "name": "Teste",
            "created_at": "2021-09-12T01:45:41.000Z",
            "updated_at": "2021-09-12T01:45:41.000Z",
            "tagCustomName": "#Teste"
          }
          ```
    * ```POST /tags```: Cria uma TAG com o nome informado; 
      * Body JSON (exemplo):
        ```js
          {
            "name": "Xonado"
          }
        ```
      * Response (exemplo):
        ```js
          {
            "id": "02889787-27fd-4622-8968-66af621e8894",
            "name": "Xonado",
            "created_at": "2021-09-12T02:26:23.000Z",
            "updated_at": "2021-09-12T02:26:23.000Z"
          }
        ```
    
  - __Session__
    * ```POST /session:```: Cria uma session, isto é, um TOKEN JWT para autenticação; 
      * Body JSON (exemplo):
        ```js
          {
            "email": "alfredosavi@hotmail.com",
            "password": "123123"
          }
        ```
      * Response (exemplo):
        ```js
          {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZnJlZG9zYXZpQGhvdG1haWwuY29tIiwiaWF0IjoxNjMxNDEzNTkyLCJleHAiOjE2MzE0OTk5OTIsInN1YiI6ImZlNDU0OWIzLWYzOGUtNGVmOS1hZmRjLWQ2NjBjNzBjNjgxMSJ9.M463kBITo5rIq4isnGFenHwjPWetJSvvmRDX2dC5rHU"
          }
        ```
    
  - __Compliment__
    * ```GET /users/compliments/receive:``` Lista todos os elogios recebidos do usuário logado;
      * Response (exemplo):
        ```js
          {
          "id": "5c3ac702-b1b4-4566-adb6-0fb6b9fe3ff0",
          "user_sender": "eb48627a-8ea1-403c-ba16-002acb2a91ff",
          "user_receiver": "634d125a-4c50-45ab-9a1b-f943163a8a9b",
          "tag_id": "02889787-27fd-4622-8968-66af621e8894",
          "message": "Testando :D dnv",
          "created_at": "2021-09-12T17:32:22.000Z",
          "updated_at": "2021-09-12T17:32:22.000Z",
          "userSender": {
            "id": "eb48627a-8ea1-403c-ba16-002acb2a91ff",
            "name": "Alfredo Savi",
            "email": "admin1@hotmail.com",
            "admin": true,
            "created_at": "2021-09-12T02:22:45.000Z",
            "updated_at": "2021-09-12T02:22:45.000Z"
          },
          "userReceiver": {
            "id": "634d125a-4c50-45ab-9a1b-f943163a8a9b",
            "name": "Alfredo Savi",
            "email": "noadmin1@hotmail.com",
            "admin": false,
            "created_at": "2021-09-12T02:19:30.000Z",
            "updated_at": "2021-09-12T02:19:30.000Z"
          },
          "tag": {
            "id": "02889787-27fd-4622-8968-66af621e8894",
            "name": "Xonado",
            "created_at": "2021-09-12T02:26:23.000Z",
            "updated_at": "2021-09-12T02:26:23.000Z",
            "tagCustomName": "#Xonado"
          }
        }
        ```
    * ```GET /users/compliments/send:``` Lista todos os elogios enviados pelo usuário logado;
      * Response (exemplo):
        ```js
          {
            "id": "c972b123-c3e6-49b9-b66c-70e065a5d6c0",
            "user_sender": "634d125a-4c50-45ab-9a1b-f943163a8a9b",
            "user_receiver": "fe4549b3-f38e-4ef9-afdc-d660c70c6811",
            "tag_id": "02889787-27fd-4622-8968-66af621e8894",
            "message": "Testando :D dnv",
            "created_at": "2021-09-12T17:42:13.000Z",
            "updated_at": "2021-09-12T17:42:13.000Z"
          }
        ```
    * ```POST /compliments:``` Cria uma mensagem de elogio para o usuário informado com uma respectiva TAG já existente;
      * Body JSON (exemplo):
        ```js
          {
            "tag_id": "02889787-27fd-4622-8968-66af621e8894",
            "user_receiver": "d22d7392-3557-4a64-aa1f-dcb6b8c92f05",
            "message": "Testando :D dnv"
          }
        ```
      * Response (exemplo):
        ```js
          {
            "id": "05e7b756-922c-4ec8-9be7-8c537d58bf3c",
            "user_sender": "eb48627a-8ea1-403c-ba16-002acb2a91ff",
            "user_receiver": "d22d7392-3557-4a64-aa1f-dcb6b8c92f05",
            "tag_id": "02889787-27fd-4622-8968-66af621e8894",
            "message": "Testando :D dnv",
            "created_at": "2021-09-12T03:03:42.000Z",
            "updated_at": "2021-09-12T03:03:42.000Z"
          }
        ```
 
O arquivo ```INSOMNIA``` contendo todas as rotas foi disponibilizado e pode ser importado clicando aqui:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Valoriza&uri=https%3A%2F%2Fgithub.com%2FAlfredosavi%2Fvaloriza%2Fblob%2Fmain%2FInsomnia_2021-09-12.json)
  
 
## :book: Diagrama ER

![Diagrama_ER](https://i.imgur.com/UgeKvBQ.png)

## 🔥 Instalação e execução
  1. Faça um clone desse repositório: ```git clone git@github.com:Alfredosavi/rocketseat-codes.git```;
  2. Entre dentro do diretório: ```cd rocketseat-codes/valoriza/```;
  3. Instale as dependências com: ```yarn install```;
  4. Rode o comando para criar as migrations no Banco de dados SQLite: ```yarn typeorm migration:run```
  4. Rode com ```yarn dev```.


## :eyes: Observações
  1. Variáveis ambiente ```ENV```:
      * __PORT__: Porta do ```server listen``` (default 3000);
      * __BCRYPT_SALT__: Tamanho do salt;
      * __JWT_PAYLOAD__: Secredo para ser usado na criptografia do JWT;
      * __JWT_EXPIRESIN__: Tempo de expiração do token JWT.
  2. A database encontra-se em: ```./src/database/database.sqlite```;
  3. Foi utilizado o INSOMNIA para realizar os teste nas rotas. O arquivo está disponível ```Insomnia_2021-09-12.json```.


## ⚡️ Como contribuir
  - Faça um fork desse repositório;
  - Cria uma branch com a sua feature: `git checkout -b minha-feature`;
  - Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
  - Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.


## :credit_card: Créditos
  * :rocket: [Rocketseat](https://rocketseat.com.br/)


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
