import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731469487101 implements MigrationInterface {
    name = 'Migration1731469487101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courts" DROP CONSTRAINT "courts_topicId_fkey"`);
        await queryRunner.query(`ALTER TABLE "courts" ADD CONSTRAINT "FK_42653be7129126cf213db272897" FOREIGN KEY ("topicId") REFERENCES "topics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courts" DROP CONSTRAINT "FK_42653be7129126cf213db272897"`);
        await queryRunner.query(`ALTER TABLE "courts" ADD CONSTRAINT "courts_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
