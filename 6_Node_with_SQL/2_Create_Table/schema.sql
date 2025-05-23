create table create_table_ke_schema_secreatekrihai(
    id int primary key,
    username varchar(20) unique,
    email varchar(50) unique not null,
    password varchar(30) not null
);