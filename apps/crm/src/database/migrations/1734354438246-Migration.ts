import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734354438246 implements MigrationInterface {
    name = 'Migration1734354438246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_464671aa0a76da23441cbf33958"`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_464671aa0a76da23441cbf33958" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_464671aa0a76da23441cbf33958"`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_464671aa0a76da23441cbf33958" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
