lunch docker :

docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4.0-management


Post man :

url : POST => http://localhost:3000

{
    "name": "Chorizo",
    "prix": "10"
}


interfacr admin mq:

username : guest
password : guest