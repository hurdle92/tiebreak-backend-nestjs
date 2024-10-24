import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1729737659190 implements MigrationInterface {
    name = 'Migration1729737659190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "guestbook" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "guestbook" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "guestbook" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "guestbook" DROP COLUMN "createdAt"`);
    }

}
