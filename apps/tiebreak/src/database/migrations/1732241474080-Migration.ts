import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732241474080 implements MigrationInterface {
    name = 'Migration1732241474080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "guestbook" ADD "hi" text NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "guestbook" DROP COLUMN "hi"`);
    }

}
