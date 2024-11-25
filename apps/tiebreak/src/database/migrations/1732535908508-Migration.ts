import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732535908508 implements MigrationInterface {
    name = 'Migration1732535908508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_time_bridge" DROP CONSTRAINT "FK_3e4f5c5abf2a15ee27a50d7b987"`);
        await queryRunner.query(`ALTER TABLE "lesson_time_bridge" ADD CONSTRAINT "FK_3e4f5c5abf2a15ee27a50d7b987" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_time_bridge" DROP CONSTRAINT "FK_3e4f5c5abf2a15ee27a50d7b987"`);
        await queryRunner.query(`ALTER TABLE "lesson_time_bridge" ADD CONSTRAINT "FK_3e4f5c5abf2a15ee27a50d7b987" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
