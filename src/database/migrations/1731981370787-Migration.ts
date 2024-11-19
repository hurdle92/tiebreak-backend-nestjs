import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731981370787 implements MigrationInterface {
    name = 'Migration1731981370787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "PK_f4d8e134b45bbe2f19a6af3368a"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "PK_491e0de578cb56fd3349db287ea" PRIMARY KEY ("id", "buyerId")`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "PK_491e0de578cb56fd3349db287ea"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "PK_218f3d28a1b36d483123379b5cb" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP COLUMN "buyerId"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "PK_218f3d28a1b36d483123379b5cb"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "PK_c3c86f82c487c52ad9b674e0d3c" PRIMARY KEY ("id", "lesson_id", "lesson_core_option_id")`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "FK_a492f38af8b571f3fbdcb7cbf6c"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "FK_f34d47176767070e44dcf7d4118"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ALTER COLUMN "lesson_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ALTER COLUMN "lesson_core_option_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "FK_a492f38af8b571f3fbdcb7cbf6c" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "FK_f34d47176767070e44dcf7d4118" FOREIGN KEY ("lesson_core_option_id") REFERENCES "lesson_core_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "FK_f34d47176767070e44dcf7d4118"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "FK_a492f38af8b571f3fbdcb7cbf6c"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ALTER COLUMN "lesson_core_option_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ALTER COLUMN "lesson_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "FK_f34d47176767070e44dcf7d4118" FOREIGN KEY ("lesson_core_option_id") REFERENCES "lesson_core_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "FK_a492f38af8b571f3fbdcb7cbf6c" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "PK_c3c86f82c487c52ad9b674e0d3c"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "PK_218f3d28a1b36d483123379b5cb" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD "buyerId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "PK_218f3d28a1b36d483123379b5cb"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "PK_491e0de578cb56fd3349db287ea" PRIMARY KEY ("id", "buyerId")`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD "productId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" DROP CONSTRAINT "PK_491e0de578cb56fd3349db287ea"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_bridge" ADD CONSTRAINT "PK_f4d8e134b45bbe2f19a6af3368a" PRIMARY KEY ("id", "productId", "buyerId")`);
    }

}
