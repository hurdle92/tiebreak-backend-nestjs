import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730425607082 implements MigrationInterface {
    name = 'Migration1730425607082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "uid" text NOT NULL, "nickname" text NOT NULL, "isIos" boolean NOT NULL, "isAos" boolean NOT NULL, "isKakao" boolean NOT NULL, "isApple" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_df955cae05f17b2bcf5045cc021" UNIQUE ("uid"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
