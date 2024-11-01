import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730422351759 implements MigrationInterface {
    name = 'Migration1730422351759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "update_config" ("id" SERIAL NOT NULL, "isNeedUpdate" boolean NOT NULL DEFAULT false, "currentVersion" text NOT NULL, "minReuqiredUpdateVersion" text NOT NULL, "expireTimeHours" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5785411c290fceeedd446d0677c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "update_config"`);
    }

}
