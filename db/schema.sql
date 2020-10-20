DROP DATABASE IF EXISTS x6mjk1gi8yjg8lh2;
CREATE DATABASE x6mjk1gi8yjg8lh2;

use x6mjk1gi8yjg8lh2;

create table burgers (
    id int not null auto_increment,
    burger_name varchar(100) not null ,
    devoured boolean not null default false,
    primary key (id)
);