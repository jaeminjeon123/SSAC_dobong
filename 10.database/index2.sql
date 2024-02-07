create table customer(
    id VARCHAR(10) PRIMARY KEY,
    name  VARCHAR(10 ) NOT null,
    birthday date not null
);

desc customer;
INSERT into customer VALUES('aaa','손흥민','1992-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');
SELECT *from customer;

CREATE Table orderlist(
    id int AUTO_INCREMENT not null PRIMARY key,
    customer_id VARCHAR(10) not NULL,
    product_name VARCHAR(20) not null,
    quantity int, 
    FOREIGN key(customer_id) REFERENCES customer(id) 
    on UPDATE CASCADE on DELETE CASCADE
);
-- FOREIGN KEY (현재테이블 컬럼이름fk) REFERENCES 기준테이블(기준테이블 컬럼이름pk)
-- ON UPDATE CASCADE: 기준 테이블(customer)의 데이터가 변경되면 참조 테이블(orderlist)의 데이터도 변경
-- ON DELETE CASCADE: 기준 테이블의 데이터 삭제되면 참조테이블의 데이터도 삭제됨

-- 테이블을 삭제할 때
-- fk-pk 관계로 연결된 테이블은 외래키가 설정된 테이블(orderlist)을 먼저 삭제
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

SELECT *FROM orderlist;
--join
--1. inner.join과 on의 사용
select *
from customer 
    inner JOIN  orderlist
    ON customer.id=orderlist.customer_id;
--2. , 와 where 로 inner join 사용  --inner join을 ,로 구분됨
select orderlist.id,customer.id,customer.name, orderlist.product_name
from customer,orderlist 
where customer.id=orderlist.customer_id;

-- 3.inner join,on 사용,where 조건과 함께 사용
SELECT *
From orderlist inner join customer
    on customer.id=orderlist.customer_id
where orderlist.quantity>=5;

--4. table 별칭지어서 사용
SELECT o.id as order_id, c.id as customer_id, c.name, o.product_name
from customer as c,orderlist as O
where c.id=o.customer_id;
--natural JOIN
SELECT *
from orderlist NATURAL JOIN customer;

--outer JOIN
select *
from customer 
    left outer JOIN orderlist
    ON customer.id=orderlist.customer_id;
select *
from customer 
    right outer JOIN orderlist
    ON customer.id=orderlist.customer_id



