CREATE TABLE "public.users" (
	"user_id" serial NOT NULL,
	"pet_id" int NOT NULL,
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"first_name" TEXT NOT NULL,
	"last_name" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.pets" (
	"pet_id" serial NOT NULL,
	"species" TEXT NOT NULL,
	"breed" TEXT NOT NULL,
	"size" int NOT NULL,
	"age" int NOT NULL,
	"color" TEXT NOT NULL,
	"picture_id" int NOT NULL,
	CONSTRAINT "pets_pk" PRIMARY KEY ("pet_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.pictures" (
	"picture_id" serial NOT NULL,
	"description" TEXT NOT NULL,
	"date_uploaded" DATE NOT NULL,
	"image_link" TEXT NOT NULL,
	CONSTRAINT "pictures_pk" PRIMARY KEY ("picture_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.transactions" (
	"transaction_id" serial NOT NULL,
	"pet_id" int NOT NULL,
	"user_id" int NOT NULL,
	"type" TEXT NOT NULL,
	"sale_price" int NOT NULL,
	CONSTRAINT "transactions_pk" PRIMARY KEY ("transaction_id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("pet_id") REFERENCES "pets"("pet_id");

ALTER TABLE "pets" ADD CONSTRAINT "pets_fk0" FOREIGN KEY ("picture_id") REFERENCES "pictures"("picture_id");


ALTER TABLE "transactions" ADD CONSTRAINT "transactions_fk0" FOREIGN KEY ("pet_id") REFERENCES "pets"("pet_id");
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_fk2" FOREIGN KEY ("type") REFERENCES "users"("user_id");




