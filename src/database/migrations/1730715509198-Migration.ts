import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730715509198 implements MigrationInterface {
    name = 'Migration1730715509198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "diary" ("id" SERIAL NOT NULL, "content" text NOT NULL, "playType" text NOT NULL, "playHours" text NOT NULL, "playGamesCount" text NOT NULL, "playDate" date NOT NULL, "playDateYear" integer NOT NULL, "playDateMonth" integer NOT NULL, "isUse" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_7422c55a0908c4271ff1918437d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "diary_option" ("id" SERIAL NOT NULL, "label" text NOT NULL, "value" text NOT NULL, "img" text NOT NULL, "priority" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_20991efc7799b29dbef521824b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "diary" ADD CONSTRAINT "FK_bda48d3f2d272ca20f3aa612e5c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary" DROP CONSTRAINT "FK_bda48d3f2d272ca20f3aa612e5c"`);
        await queryRunner.query(`DROP TABLE "diary_option"`);
        await queryRunner.query(`DROP TABLE "diary"`);
    }

}
