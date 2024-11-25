import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732534533100 implements MigrationInterface {
    name = 'Migration1732534533100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" ADD "lesson_illustration" text NOT NULL DEFAULT 'https://gsqubspdsrnvkpdpmbyg.supabase.co/storage/v1/object/public/assets/tennis_ball_lesson.png'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "lesson_illustration"`);
    }

}
