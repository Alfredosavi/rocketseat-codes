# NodeJS - CRUD API

Aplicação back-end com CRUD para cadastros de produtos (Título, Descrição e url) utilizando `NodeJS` e `MongoDB`.

## 🔥 Instalação e execução

1. Faça um clone desse repositório: `git clone git@github.com:Alfredosavi/rocketseat-codes.git`;
2. Entre dentro do diretório: `cd rocketseat-codes/node-js/`;
3. Instale as dependências com: `yarn install`;
4. Configure as [variáveis ambientes](#var);
5. Rode com `yarn dev`.

## :vertical_traffic_light: Rotas

- `GET /api/products:` Lista todos os produtos cadastrados com paginação. Limite de 10 por página;
  - Response (exemplo):
  ```js
    {
      "docs": [
        {
          "_id": "614397fc6b3762d20a2abe76",
          "title": "Geforce GTX 1080TI founders edition",
          "description": "Placa de vídeo",
          "url": "https://www.nvidia.com/pt-br/geforce/products/10series/geforce-gtx-1080-ti/",
          "created_At": "2021-09-16T19:16:12.513Z",
          "__v": 0
        }
      ],
      "total": 1,
      "limit": 10,
      "page": 1,
      "pages": 1
    }
  ```
- `GET /api/products/:id` Lista um produto específico;
  - Response (exemplo):
  ```js
    {
      "_id": "614397fc6b3762d20a2abe76",
      "title": "Geforce GTX 1080TI founders edition",
      "description": "Placa de vídeo",
      "url": "https://www.nvidia.com/pt-br/geforce/products/10series/geforce-gtx-1080-ti/",
      "created_At": "2021-09-16T19:16:12.513Z",
      "__v": 0
    }
  ```
- `POST /api/products:` Cria um novo produto;
  - Body JSON (exemplo):
  ```js
    {
      "title": "Geforce GTX 1080TI founders edition",
      "description": "Placa de vídeo",
      "url": "https://www.nvidia.com/pt-br/geforce/products/10series/geforce-gtx-1080-ti/"
    }
  ```
  - Response (exemplo):
  ```js
    {
      "title": "Geforce GTX 1080TI founders edition",
      "description": "Placa de vídeo",
      "url": "https://www.nvidia.com/pt-br/geforce/products/10series/geforce-gtx-1080-ti/",
      "_id": "614397fc6b3762d20a2abe76",
      "created_At": "2021-09-16T19:16:12.513Z",
      "__v": 0
    }
  ```
- `PUT /api/products/:id` Atualiza um produto específico;
  - Body JSON (exemplo):
  ```js
    {
      "title": "GTX 1080TI",
      "url": ""
    }
  ```
  - Response (exemplo):
  ```js
  {
    "_id": "614397fc6b3762d20a2abe76",
    "title": "GTX 1080TI",
    "description": "Placa de vídeo",
    "url": "",
    "created_At": "2021-09-16T19:16:12.513Z",
    "__v": 0
  }
  ```
- `DEL /api/products/:id` Deleta um produto específico.
  - Response (exemplo):
  ```js
    {
      "message": "Product deleted"
    }
  ```

O arquivo `INSOMNIA` contendo todas as rotas foi disponibilizado e pode ser importado clicando aqui:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NodeJS&uri=https%3A%2F%2Fraw.githubusercontent.com%2FAlfredosavi%2Frocketseat-codes%2Fmain%2Fnode-js%2FInsomnia_2021-09-16.json)

<a name="var"></a>

## :eyes: Observações

1. Variáveis ambiente `ENV`:
   - **PORT**: Porta do `server listen` (default 3000);
   - **MONGODB_URL**: Url de conexão do MongoDB.
2. Foi utilizado o INSOMNIA para realizar os teste nas rotas. O arquivo está disponível `Insomnia_2021-09-16.json`.

## ⚡️ Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :credit_card: Créditos

- :rocket: [Rocketseat](https://rocketseat.com.br/)

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/Alfredosavi/rocketseat-codes/blob/main/LICENSE) para mais detalhes.
