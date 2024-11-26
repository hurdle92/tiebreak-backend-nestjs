import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732603898397 implements MigrationInterface {
    name = 'Migration1732603898397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" ADD "club_id" bigint`);
        await queryRunner.query(`ALTER TABLE "meetings" ADD CONSTRAINT "FK_86cdfb64429095d317bf46ee506" FOREIGN KEY ("club_id") REFERENCES "clubs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" DROP CONSTRAINT "FK_86cdfb64429095d317bf46ee506"`);
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "club_id"`);
    }

}
