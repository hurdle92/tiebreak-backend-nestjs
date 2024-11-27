import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732690156848 implements MigrationInterface {
    name = 'Migration1732690156848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_052360569e5dffeebcb6abe881d"`);
        await queryRunner.query(`ALTER TABLE "teams" DROP COLUMN "playersId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" ADD "playersId" bigint`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_052360569e5dffeebcb6abe881d" FOREIGN KEY ("playersId") REFERENCES "players"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
