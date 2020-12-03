-- Adminer 4.7.7 PostgreSQL dump

DROP TABLE IF EXISTS "requests";
DROP SEQUENCE IF EXISTS requests_id_seq;
CREATE SEQUENCE requests_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."requests" (
    "id" integer DEFAULT nextval('requests_id_seq') NOT NULL,
    "slug" character varying(20) NOT NULL,
    "product_unit_price" real NOT NULL,
    "product_img" character varying(250),
    "product_desc" character varying(250),
    "quantity" integer DEFAULT '1' NOT NULL,
    "packaging" smallint DEFAULT '1' NOT NULL,
    "link" character varying(200),
    "request_by" integer NOT NULL,
    "deliver_to" integer NOT NULL,
    "deliver_from" integer NOT NULL,
    "deliver_before" date NOT NULL,
    "product_title" character varying(150) NOT NULL,
    "category" integer
) WITH (oids = false);


DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS users_id_seq;
CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "fullname" character varying(50) NOT NULL,
    "image" character varying(250) NOT NULL,
    "email" character varying(200) NOT NULL,
    "password" character varying(50),
    "phone" character varying(15) NOT NULL,
    "is_phone_verified" boolean DEFAULT false NOT NULL,
    "is_email_verified" boolean DEFAULT false NOT NULL,
    "phone_verify_token" character varying(50) NOT NULL,
    "email_verify_token" character varying(50) NOT NULL,
    "joined_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "join_method" character varying(10) NOT NULL
) WITH (oids = false);


-- 2020-12-03 16:00:17.927249+00
