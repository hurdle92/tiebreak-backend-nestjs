import { User } from "../user.entity";

export class UserResponseDto {
  id: number;
  uid: string;
  nickname: string;
  isIos: boolean;
  isAos: boolean;
  isKakao: boolean;
  isApple: boolean;
  kakaoId: string;
  appleEmail: string;
  created_at: Date;
  updated_at: Date;

  constructor(user: User) {
    this.id = user.id;
    this.uid = user.uid;
    this.nickname = user.nickname;
    this.isIos = user.isIos;
    this.isAos = user.isAos;
    this.isKakao = user.isKakao;
    this.isApple = user.isApple;
    this.kakaoId = user.kakaoId;
    this.appleEmail = user.appleEmail;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}
