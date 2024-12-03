import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733214634845 implements MigrationInterface {
    name = 'Migration1733214634845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_768dfb225039aab383e43b778e6"`);
        await queryRunner.query(`CREATE TABLE "meeting_game_court_options" ("id" BIGSERIAL NOT NULL, "court_option_value" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "meeting_id" bigint, CONSTRAINT "PK_15477e476d77620c3dfe8564199" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "meeting_game_court_options" ADD CONSTRAINT "FK_be47c79a54767ac8a78d3c67637" FOREIGN KEY ("meeting_id") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_768dfb225039aab383e43b778e6" FOREIGN KEY ("meeting_game_court_option_id") REFERENCES "meeting_game_court_options"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_768dfb225039aab383e43b778e6"`);
        await queryRunner.query(`ALTER TABLE "meeting_game_court_options" DROP CONSTRAINT "FK_be47c79a54767ac8a78d3c67637"`);
        await queryRunner.query(`DROP TABLE "meeting_game_court_options"`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_768dfb225039aab383e43b778e6" FOREIGN KEY ("meeting_game_court_option_id") REFERENCES "meeintg_game_court_options"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
