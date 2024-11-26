import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732583531403 implements MigrationInterface {
    name = 'Migration1732583531403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clubs" ADD "thumbnail" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "clubs" ADD "club_created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "clubId" bigint`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_7c847424bb951725774214c5ac6" FOREIGN KEY ("clubId") REFERENCES "clubs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_7c847424bb951725774214c5ac6"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "clubId"`);
        await queryRunner.query(`ALTER TABLE "clubs" DROP COLUMN "club_created_at"`);
        await queryRunner.query(`ALTER TABLE "clubs" DROP COLUMN "thumbnail"`);
    }

}
