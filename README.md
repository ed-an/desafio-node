Este é app é parte do dessafio


## **Roda a app**

#Siga os passos
1. *docker-compose up -d*

2. *docker exec -it **nodeapp** bash*

3. *node index.js*

4. *acesse seu navegador com a url: **http://localhost:8080***

## Para Verificar se foi inserido dados no banco desafio e tabela people.
#Siga os passos

1. docker exec -it db mysql -u root -proot

2. use desafio;

3. SELECT * FROM people;
