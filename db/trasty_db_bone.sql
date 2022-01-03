-- Adminer 4.7.7 PostgreSQL dump

DROP TABLE IF EXISTS "chat_rooms";
DROP SEQUENCE IF EXISTS chat_rooms_id_seq;
CREATE SEQUENCE chat_rooms_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."chat_rooms" (
    "id" integer DEFAULT nextval('chat_rooms_id_seq') NOT NULL,
    "slug" character varying(30) NOT NULL,
    "is_locked" boolean NOT NULL,
    "is_success" boolean NOT NULL,
    "request_id" integer NOT NULL,
    "offer_id" integer NOT NULL,
    "traveler_id" integer NOT NULL,
    "requester_id" integer NOT NULL,
    CONSTRAINT "offerpk" PRIMARY KEY ("offer_id"),
    CONSTRAINT "unique_slug" UNIQUE ("slug")
) WITH (oids = false);

CREATE INDEX "index_slug" ON "public"."chat_rooms" USING btree ("slug");

COMMENT ON COLUMN "public"."chat_rooms"."is_locked" IS 'in case something is wrong';

COMMENT ON COLUMN "public"."chat_rooms"."is_success" IS 'when request is delivered';


DROP TABLE IF EXISTS "messages";
DROP SEQUENCE IF EXISTS messages_id_seq;
CREATE SEQUENCE messages_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."messages" (
    "id" integer DEFAULT nextval('messages_id_seq') NOT NULL,
    "room_id" character varying NOT NULL,
    "msg_from" integer NOT NULL,
    "msg" character varying(2000) NOT NULL,
    "is_seen" boolean DEFAULT false NOT NULL,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
) WITH (oids = false);

COMMENT ON COLUMN "public"."messages"."is_seen" IS 'for notifications';


DROP TABLE IF EXISTS "notifs";
DROP SEQUENCE IF EXISTS notifs_id_seq;
CREATE SEQUENCE notifs_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."notifs" (
    "id" integer DEFAULT nextval('notifs_id_seq') NOT NULL,
    "new_offer" jsonb,
    "accepted_offer" jsonb,
    "is_seen" boolean DEFAULT false NOT NULL,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "user_id" integer NOT NULL,
    "notif_type" character varying(20)
) WITH (oids = false);


DROP TABLE IF EXISTS "offers";
DROP SEQUENCE IF EXISTS offers_id_seq;
CREATE SEQUENCE offers_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."offers" (
    "id" integer DEFAULT nextval('offers_id_seq') NOT NULL,
    "offer_by" integer NOT NULL,
    "offer_to" integer NOT NULL,
    "delivery_date" date NOT NULL,
    "delivery_from" json NOT NULL,
    "offer_reward" numeric(9,2) NOT NULL,
    "notes" character varying(250) NOT NULL,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "is_accepted" boolean DEFAULT false NOT NULL,
    CONSTRAINT "offers_id" PRIMARY KEY ("id"),
    CONSTRAINT "offers_offer_by_offer_to" UNIQUE ("offer_by", "offer_to")
) WITH (oids = false);


DROP TABLE IF EXISTS "requests";
DROP SEQUENCE IF EXISTS requests_id_seq;
CREATE SEQUENCE requests_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."requests" (
    "id" integer DEFAULT nextval('requests_id_seq') NOT NULL,
    "slug" character varying(35) NOT NULL,
    "product_unit_price" numeric(9,2) NOT NULL,
    "product_img" character varying(250),
    "product_desc" character varying(250),
    "quantity" integer DEFAULT '1' NOT NULL,
    "product_link" character varying(500),
    "request_by" integer NOT NULL,
    "product_title" character varying(150) NOT NULL,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "deliver_to" json NOT NULL,
    "deliver_from" json NOT NULL,
    "product_size" character varying(10) NOT NULL,
    "deliver_before" integer DEFAULT '0' NOT NULL,
    "willing_to_pay" numeric,
    "category" character varying(20),
    CONSTRAINT "requests_slug" PRIMARY KEY ("slug")
) WITH (oids = false);

CREATE INDEX "requests_id" ON "public"."requests" USING btree ("id");


DROP TABLE IF EXISTS "trips";
DROP SEQUENCE IF EXISTS trips_id_seq;
CREATE SEQUENCE trips_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."trips" (
    "id" integer DEFAULT nextval('trips_id_seq') NOT NULL,
    "slug" character varying(20) NOT NULL,
    "travel_from" json NOT NULL,
    "travel_to" json NOT NULL,
    "type" smallint DEFAULT '1' NOT NULL,
    "travel_date" date NOT NULL,
    "back_date" date,
    "travel_by" integer NOT NULL
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
    "join_method" character varying(10) NOT NULL,
    CONSTRAINT "users_email" UNIQUE ("email")
) WITH (oids = false);

CREATE INDEX "users_id" ON "public"."users" USING btree ("id");
