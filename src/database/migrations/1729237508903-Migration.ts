import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1729237508903 implements MigrationInterface {
    name = 'Migration1729237508903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "guestbook" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "guestbook" ADD "description2" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "guestbook" DROP COLUMN "description2"`);
        await queryRunner.query(`ALTER TABLE "guestbook" DROP COLUMN "description"`);
    }

}
