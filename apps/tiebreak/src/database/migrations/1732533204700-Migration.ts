import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732533204700 implements MigrationInterface {
    name = 'Migration1732533204700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" ADD "icon_thumbnail" text NOT NULL DEFAULT 'https://gsqubspdsrnvkpdpmbyg.supabase.co/storage/v1/object/public/assets/tennis_ball_lesson.png'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "icon_thumbnail"`);
    }

}
