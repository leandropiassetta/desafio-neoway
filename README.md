<h1 align="center">Desafio Neoway</h1>

<h1 align="center">  
<a href="https://imgbb.com/"><img src="https://i.ibb.co/cwNmSqG/neo.jpg" alt="neoway" width="300px" border="2"></a></h1>

<p align="center">Este desafio consiste em um serviço de captura/coleta de dados e persistência dos mesmos em um banco de dados.</p>



# Sumário

- [Construção do desafio](#construção-do-desafio)
- [Tecnologias envolvidas](#tecnologias-envolvidas)
- [Requisitos do desafio](#requisitos-do-desafio)
- [Requisitos desenvolvidos](#requisitos-desenvolvidos)
- [Demonstração](#demonstracao)
- [Referencias](#referencias)
- [Instalação e uso](#instalação-e-uso)

---

# Construção do desafio

Optei por utilizar o NODEJS para desenvolver o desafio pois tenho um domínio maior com a linguagem JavaScript para desenvolver meus códigos, e é uma linguagem que eu prático mais no dia dia, apesar de já estar usando e estudando PYTHON, resolvi usar o NODEJS, até como forma de descobrir mais funcionalidades dele que ainda não tinha treinado no meu dia dia, como para fazer crawley e scrapping.

Durante a resolução do desafio tive que fazer minhas pesquisas como iria fazer a raspagem de dados, e assistindo alguns tutoriais de vídeo no youtube, conheci a biblioteca puppeteer e foi uma ótima experiência aprendida com o NODEJS.

---

# Tecnologias envolvidas:
[NodeJs](https://nodejs.org/pt-br/docs/)

[Express](https://expressjs.com/pt-br/)

[Puppeteer](https://pptr.dev/)

[Sequelize](https://sequelize.org/)

[Mysql](https://dev.mysql.com/doc/)

[dotenv](https://www.npmjs.com/package/dotenv)

[cpf-cnpj-validator](https://www.npmjs.com/package/cpf-cnpj-validator)

---

# Requisitos do desafio:

 - Criar um serviço usando uma dessas linguagens: GO, Python, Java, C#, Javascript/Typescript (NodeJS), PHP, Dart, Rust que capture a lista de pessoas listadas como aprovadas em um vestibular (dados fictícios) e que são disponibilizadas no seguinte [site](https://sample-university-site.herokuapp.com/).

- Este serviço deve persistir em um banco de dados (pode ser um MySQL, Postgres ou outro banco de dados SQL que você se sinta mais à vontade) todos os dados capturados/coletados do site (CPFs, nomes e scores).

- Deve-se fazer o split dos dados em colunas no banco de dados. Obs: pode ser feito diretamente no serviço ou em sql.

- Realizar higienização dos dados após persistência (sem acento, maiúsculas, etc).

- Validar os CPFs contidos (válidos e não válidos numericamente).

- Todo o código deve estar disponível em repositório público do GIT.
---

# Requisitos desenvolvidos:

 - [x] Captura de dados na api
 - [x] Persistência no banco de dados 
 - [x] Higienização dos dados
 - [x] Validação dos cpfs
 - [x] Versionamento do desafio   

---

# Demonstração:

Aqui deixo um print de uma pequena parte de como os dados são salvos no banco de dados:


![bd-neoway](https://user-images.githubusercontent.com/70539587/151621697-0a5b5c4c-d3b7-4ba4-84dd-9fa1a1a46e89.png)


---

#  Referências

Abaixo irei listar as fontes de informação que utilizei para o desenvolvimento desse projeto:

[Documentação puppeteer](https://pptr.dev/)

[Extraindo dados de outros sites com Puppeteer JS | Code/Drops #46](https://www.youtube.com/watch?v=K5yYBJhix5A)

[Como criar um robô que faz login e da like? | Robô com JavaScript, NodeJS e Puppeteer](https://www.youtube.com/watch?v=Ltdp9-ZTAzM)

[Como criar um robô que acessa sites com JavaScript .feat NodeJS | O que é Pupeteer?](https://www.youtube.com/watch?v=4W55nFDyIrcr)

[Fórum stackoverflow](https://pt.stackoverflow.com/)

---
# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
 - node v14.17.0  
 - npm 6.14.13  
 - git version 2.25.1  
 - mysql 8.0.27
  
```  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  

[Instale o Mysql](https://www.youtube.com/watch?v=zpssr3u1EO8)
  
### Clonando o projeto  
  
Abra o terminal de sua máquina

> Caso queira use um dos atalhos abaixo de acordo com o seu sistema
> operacional
>  - **Linux**: Ctrl+Alt+T
>  - **MacOS**: COMMAND + ESPAÇO
>  - **Windows**: Tecla do Windows + R

e digite o comando abaixo para clonar o projeto.  
  
```  
git@github.com:leandropiassetta/desafio-neoway.git
   
```  
  
### Configurando a variável de ambiente

crie um arquivo `.env` e coloque os valores de acordo com a configuração do seu banco de dados
  
```  
MYSQL_USER=_Insira aqui seu nome de usuario do mysql_
MYSQL_PASSWORD=_Insira aqui sua senha de usuario_
HOSTNAME=_Insira aqui o hostname, de acordo com a configuração do mysql_
DATABASE=sample_university
  
```

Ainda Entre na pasta  
  
```  
cd desafio-neoway
  
```  
  
### Instalando as dependências  
  
```  
npm install  
  
```  
  
### Executando o sequelize  
  
use esse comando personalizado para criar o banco de dados e executar a migration do sequelize
```  
npm run restart
  
```

### Executando o projeto  
  
```  
npm start  
ou
npm run dev
  
``` 

### Abra seu mysql: 
  
``` 
mysql -u_Seu Nome de usuario_ -p_Sua senha_
``` 

### Execute a query para ver os dados salvos no seu banco de dados: 
  
``` 
SELECT * FROM sample_university.approved_candidates;
  
``` 
esse comando irá retornar todos os dados cadastrados no banco de dados

---------
