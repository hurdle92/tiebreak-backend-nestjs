import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1729826700693 implements MigrationInterface {
    name = 'Migration1729826700693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "court" ("id" SERIAL NOT NULL, "name" text NOT NULL, "address" text NOT NULL, "operationTime" text NOT NULL, "phoneNumber" text NOT NULL, "instagram" text NOT NULL, "lat" double precision NOT NULL, "lng" double precision NOT NULL, "naverLink" text NOT NULL, "description" text NOT NULL, "city" text NOT NULL, "district" text NOT NULL, "isParking" boolean NOT NULL, "numberOfCourts" text NOT NULL, "courtType" text NOT NULL, "thumbnail" text NOT NULL, "isOnlineReservation" boolean NOT NULL DEFAULT false, "isUse" boolean NOT NULL DEFAULT false, "reservationLink" text NOT NULL, "koName" text NOT NULL, "isRacketString" boolean NOT NULL DEFAULT false, "isIndoor" boolean NOT NULL DEFAULT false, "isShower" boolean NOT NULL DEFAULT false, "priority" integer NOT NULL DEFAULT '0', "courtPrice" text NOT NULL, "isStore" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d8f2118c52b422b03e0331a7b91" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "court"`);
    }

}
