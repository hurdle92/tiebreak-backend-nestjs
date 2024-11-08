import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731037585383 implements MigrationInterface {
    name = 'Migration1731037585383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "public_comments_posts_fkey"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "public_comments_users_fkey"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_5cc24bbf4a170c9f2c581d468da" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_e5492a8073292e306965b4bc364" FOREIGN KEY ("post") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_e5492a8073292e306965b4bc364"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_5cc24bbf4a170c9f2c581d468da"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "public_comments_users_fkey" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "public_comments_posts_fkey" FOREIGN KEY ("post") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
