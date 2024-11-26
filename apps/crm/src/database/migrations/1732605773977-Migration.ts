import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732605773977 implements MigrationInterface {
    name = 'Migration1732605773977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "meeting-court-bridges" ("id" SERIAL NOT NULL, "meeting_id" bigint NOT NULL, "court_id" bigint NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_24bfe8231d695c1cc91f871929e" PRIMARY KEY ("id", "meeting_id", "court_id"))`);
        await queryRunner.query(`ALTER TABLE "meeting-court-bridges" ADD CONSTRAINT "FK_335f0e91594122d8a284dbe2efb" FOREIGN KEY ("meeting_id") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meeting-court-bridges" ADD CONSTRAINT "FK_e2eda4bdf80d36cd7bfef0bfe80" FOREIGN KEY ("court_id") REFERENCES "courts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meeting-court-bridges" DROP CONSTRAINT "FK_e2eda4bdf80d36cd7bfef0bfe80"`);
        await queryRunner.query(`ALTER TABLE "meeting-court-bridges" DROP CONSTRAINT "FK_335f0e91594122d8a284dbe2efb"`);
        await queryRunner.query(`DROP TABLE "meeting-court-bridges"`);
    }

}
