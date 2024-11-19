import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732006684062 implements MigrationInterface {
    name = 'Migration1732006684062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lesson_time_bridge" ("id" SERIAL NOT NULL, "lesson_id" integer NOT NULL, "lesson_time_option_id" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_f3b361e07927e0c035074e57742" PRIMARY KEY ("id", "lesson_id", "lesson_time_option_id"))`);
        await queryRunner.query(`ALTER TABLE "lesson_time_bridge" ADD CONSTRAINT "FK_3e4f5c5abf2a15ee27a50d7b987" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson_time_bridge" ADD CONSTRAINT "FK_3825287aed9163ea50d536b469d" FOREIGN KEY ("lesson_time_option_id") REFERENCES "lesson_time_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_time_bridge" DROP CONSTRAINT "FK_3825287aed9163ea50d536b469d"`);
        await queryRunner.query(`ALTER TABLE "lesson_time_bridge" DROP CONSTRAINT "FK_3e4f5c5abf2a15ee27a50d7b987"`);
        await queryRunner.query(`DROP TABLE "lesson_time_bridge"`);
    }

}
