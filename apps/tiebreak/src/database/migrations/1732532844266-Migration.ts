import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732532844266 implements MigrationInterface {
    name = 'Migration1732532844266'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "FK_a492f38af8b571f3fbdcb7cbf6c"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "icon_thumbnail"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "FK_a492f38af8b571f3fbdcb7cbf6c" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "FK_a492f38af8b571f3fbdcb7cbf6c"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "icon_thumbnail" text NOT NULL DEFAULT 'https://gsqubspdsrnvkpdpmbyg.supabase.co/storage/v1/object/public/assets/tennis_ball_lesson.png'`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "FK_a492f38af8b571f3fbdcb7cbf6c" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
