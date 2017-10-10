create table Posts (
    id serial primary key,
    title varchar(500),
    subtitle varchar(500),
    body text,
    author varchar(100),
    date timestamp
)