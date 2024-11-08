import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731055479502 implements MigrationInterface {
    name = 'Migration1731055479502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON TABLE "diaryStatusOptions" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON TABLE "diaryStatusOptions" IS 'This is a duplicate of diaryOptions'`);
    }

}
