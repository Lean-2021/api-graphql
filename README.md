# GraphQl Api


## *1. Instalar dependencias*

    npm install

## *2. Levantar Servidor*

    npm start

## *3. Dirección local del servidor*


[API GRAPHQL ](http://localhost:8081/api/graphql)


## *4. CRUD (ejemplos)*

#### GET ALL USERS

> query{   users{
>     _id
>     firstname
>     lastname
>     email
>     phone
>     age   } }


#### GET USER (ID)

> query{   user(_id:"6324f593b19e4eaad745750a"){
>     firstname
>     lastname
>     email
>     phone   } }


 #### CREATE USER (USER)

> mutation{ 	createUser(input:{
>     firstname:"Shoe"
>     lastname:"Test5"
>     email:"test5@test.com"
>     password:"123"
>     phone:345
>     age:27   }){
>     _id
>     firstname
>     lastname
>     email
>     phone
>     age   } }



#### UPDATE USER (ID,DATA)

> mutation{   updateUser(_id:"6324fc784beade8a19e6e4e6",input:{
>     firstname:"Juan"
>     lastname:"Palomino"
>     email:"juan@test2.com"
>     phone:1133556678
>     age:48   }){
>     _id
>     firstname
>     lastname
>     email
>     password
>     phone
>     age   } }


#### DELETE USER (ID)

> mutation{   deleteUser(_id:"6324fd004d82366ab7d6621"),{
>     _id
>     firstname
>     email   } }