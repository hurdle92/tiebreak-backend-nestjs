import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732584567632 implements MigrationInterface {
    name = 'Migration1732584567632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_7c847424bb951725774214c5ac6"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "clubId" TO "club_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_e58379384536c965ebebefb12a3" FOREIGN KEY ("club_id") REFERENCES "clubs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_e58379384536c965ebebefb12a3"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "club_id" TO "clubId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_7c847424bb951725774214c5ac6" FOREIGN KEY ("clubId") REFERENCES "clubs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
