import { Test } from "@nestjs/testing";
import { GuestbookService } from "./guestbook.service";
import { Repository } from "typeorm";
import { Guestbook } from "./entities/guestbook.entity";
import { getRepositoryToken } from "@nestjs/typeorm";

describe("방명록 테스트", () => {
  let guestbookService: GuestbookService;
  let guestbookRepository: Repository<Guestbook>;

  const mockGuestbookRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        GuestbookService,
        {
          provide: getRepositoryToken(Guestbook),
          useValue: mockGuestbookRepository,
        },
      ],
    }).compile();

    guestbookService = module.get<GuestbookService>(GuestbookService);
    guestbookRepository = module.get<Repository<Guestbook>>(
      getRepositoryToken(Guestbook),
    );
  });

  it("service 선언", () => {
    expect(guestbookService).toBeDefined();
  });

  describe("전체 방명록을 조회합니다", () => {
    it("방명록 리스트를 리턴합니다", async () => {
      const mockGuestbooks = [
        { id: 1, title: "Test", content: "Test content" },
      ];
      mockGuestbookRepository.find.mockResolvedValue(mockGuestbooks);

      const result = await guestbookService.findAll();
      expect(result).toEqual(mockGuestbooks);
      expect(mockGuestbookRepository.find).toHaveBeenCalled();
    });
  });
});
