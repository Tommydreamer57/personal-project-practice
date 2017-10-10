create table Users (
    id serial primary key,
    name varchar(100),
    username varchar(100),
    email varchar(100),
    img text,
    phone varchar(20),
    language varchar(25),
    color varchar(20)
)