create table products (
id serial primary key,
name varchar(25),
price integer,
img text
)

insert into products (
name, price, img)
values (
'Jeans', 50, 'https://images.express.com/is/image/expressfashion/0024_02846399_0018?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
)
