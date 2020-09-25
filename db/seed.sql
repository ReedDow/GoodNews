create table if not exists peritiuser (
    user_id serial primary key,
    username varchar(20),
    password varchar(250)
);

create table if not exists ability (
    ability_id serial primary key,
    user_id int references peritiuser(user_id),
    rating int,
    ability_content varchar(500)
)