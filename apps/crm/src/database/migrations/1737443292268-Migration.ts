import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1737443292268 implements MigrationInterface {
    name = 'Migration1737443292268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "memos" RENAME COLUMN "content" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "memos" RENAME COLUMN "description" TO "content"`);
    }

}
