export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IAdminUser = {
  __typename?: 'AdminUser';
  account: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
};

export type IAroundDogOutput = {
  __typename?: 'AroundDogOutput';
  distance: Scalars['Int'];
  dogId: Scalars['String'];
};

export type IBlockUser = {
  __typename?: 'BlockUser';
  blockId: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  user: IUser;
};

export type IBreed = {
  __typename?: 'Breed';
  dogs: Array<IDog>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ICharacter = {
  __typename?: 'Character';
  character: Scalars['String'];
  dogs: Array<IDog>;
  id: Scalars['String'];
};

export type IChatMessage = {
  __typename?: 'ChatMessage';
  chatRoom: IChatRoom;
  id: Scalars['String'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  meetAt?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  senderId: Scalars['String'];
  type: Scalars['String'];
};

/** 메시지 데이터 입력형식 */
export type IChatMessageInput = {
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  meetAt?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  senderId: Scalars['String'];
  type: Scalars['String'];
};

export type IChatRoom = {
  __typename?: 'ChatRoom';
  chatMessages: Array<IChatMessage>;
  chatPairId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  dog: IDog;
  id: Scalars['String'];
};

/** findChatRooms 출력 형식 */
export type IChatRoomsOutput = {
  __typename?: 'ChatRoomsOutput';
  chatPairDog?: Maybe<IDog>;
  id?: Maybe<Scalars['String']>;
  lastMessage?: Maybe<IChatMessage>;
};

export type ICreateDogInput = {
  age: Scalars['Int'];
  birthday?: InputMaybe<Scalars['String']>;
  characters?: InputMaybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  img?: InputMaybe<Array<Scalars['String']>>;
  interests?: InputMaybe<Array<Scalars['String']>>;
  locations: ILocationInput;
  userId: Scalars['String'];
};

export type ICreateInterestInput = {
  interest: Scalars['String'];
  interestImg: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

/** 좋아요를 눌렀을 때 매칭여부와 sendId, receiveId */
export type ICreateLikeOutput = {
  __typename?: 'CreateLikeOutput';
  isMatch: Scalars['Boolean'];
  receiveId: Scalars['String'];
  sendId: Scalars['String'];
};

export type ICreateOrderInput = {
  address: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  goodsQnt?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  receiver: Scalars['String'];
};

export type ICreateProductInput = {
  category: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
  productName: Scalars['String'];
};

export type ICreateReviewInput = {
  receiveReviewId: Scalars['String'];
  reviewDetail?: InputMaybe<Array<Scalars['String']>>;
  reviewMessage?: InputMaybe<Scalars['String']>;
  sendReview: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  pet?: InputMaybe<Scalars['Boolean']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IDog = {
  __typename?: 'Dog';
  age: Scalars['Int'];
  birthday?: Maybe<Scalars['String']>;
  breeds: Array<IBreed>;
  characters: Array<ICharacter>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  img: Array<IDogImage>;
  interests: Array<IInterest>;
  isNeut: Scalars['Boolean'];
  locations: ILocation;
  name: Scalars['String'];
  registerNumber: Scalars['String'];
  sendId: Array<ILike>;
  sendReview: Array<IReview>;
  targetAgeMax?: Maybe<Scalars['Int']>;
  targetAgeMin?: Maybe<Scalars['Int']>;
  targetDistance?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IDogElasticsearchOutPut = {
  __typename?: 'DogElasticsearchOutPut';
  age?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  registerNumber: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type IDogImage = {
  __typename?: 'DogImage';
  dog: IDog;
  id: Scalars['String'];
  img: Scalars['String'];
  isMain: Scalars['Boolean'];
};

export type IInterest = {
  __typename?: 'Interest';
  dogs: Array<IDog>;
  iChatRoom: IInterestChatRoom;
  id: Scalars['String'];
  interest: Scalars['String'];
  interestImg: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export type IInterestCategoryOutput = {
  __typename?: 'InterestCategoryOutput';
  iChatRoomId: Scalars['String'];
  interest: Scalars['String'];
  interestImg: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export type IInterestChatMessage = {
  __typename?: 'InterestChatMessage';
  id: Scalars['String'];
  interestChatRoom: IInterestChatRoom;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  meetAt?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  senderId: Scalars['String'];
  type: Scalars['String'];
};

export type IInterestChatRoom = {
  __typename?: 'InterestChatRoom';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  interest: IInterest;
  interestChatMessages: Array<IInterestChatMessage>;
};

export type ILike = {
  __typename?: 'Like';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  receiveId: Scalars['String'];
  sendId: IDog;
};

export type ILocation = {
  __typename?: 'Location';
  dog: IDog;
  id: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type ILocationInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type IMutation = {
  __typename?: 'Mutation';
  /** Return : 발급된 Admin AccessToken */
  adminLogin: Scalars['String'];
  /** Return : Admin User 로그아웃 성공여부 (true / false) */
  adminLogout: Scalars['Boolean'];
  /** Return : 삭제된 결제 정보 */
  cancelPayment: IPayment;
  /** Return : 포인트 취소내역 */
  cancelPaymentForPoints: IPayment;
  /** Return : 가입성공한 관리자 계정 정보 */
  createAdminUser: IAdminUser;
  /** Return: 차단된 유저 정보 */
  createBlockUser: IBlockUser;
  createCharacter: ICharacter;
  /** Return : 생성된 채팅 메시지 정보 */
  createChatMessage: IChatMessage;
  /** Return : 생성된 채팅방 정보 */
  createChatRoom: IChatRoom;
  createDog: IDog;
  createIChatMessage: IInterestChatMessage;
  createIamportAuth: Scalars['Boolean'];
  /** 관심사 항목 생성 */
  createInterest: IInterest;
  /** return : 좋아요 매칭여부, sendId, DogId */
  createLike: ICreateLikeOutput;
  /** Return : 메일발송 성공 여부 (true / false) */
  createMailToken: Scalars['Boolean'];
  /** Return : 주문 정보 */
  createOrder: IOrder;
  /** Return : 생성된 패스 티켓 정보 */
  createPassTicket: IPassTicket;
  /** Return : 생성된 결제 정보 */
  createPayment: IPayment;
  createPaymentForPassTicket: IPassTicket;
  /** Return : 포인트 결제내역 */
  createPaymentForPoints: IPayment;
  /** Return : 생성된 상품 정보 */
  createProduct: IProduct;
  /** Return : 생성된 신고 게시물 */
  createReport: IReport;
  createReview: IReview;
  createReviewDetail: IReviewDetail;
  /** Return : 가입된 유저 정보 */
  createUser: IUser;
  /** Return : 계정 삭제 여부 */
  deleteAdminUser: Scalars['Boolean'];
  deleteCharacter: Scalars['Boolean'];
  /** Return : 채팅방 삭제 여부  (true, false) */
  deleteChatRoom: Scalars['Boolean'];
  deleteDog: Scalars['Boolean'];
  deleteInterest: Scalars['Boolean'];
  /** Return : 채팅방 삭제 여부  (true, false) */
  deleteInterestChatRoom: Scalars['Boolean'];
  /** Return : 주문 삭제된 시간 */
  deleteOrder: Scalars['Boolean'];
  /** Return : deletedAt(패스 티켓 정보 삭제된 시간) */
  deletePassTicket: Scalars['Boolean'];
  /** Return : 상품 삭제된 시간 */
  deleteProduct: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  deleteReviewDetail: Scalars['Boolean'];
  /** Return : deletedAt(유저 정보 삭제된 시간) */
  deleteUser: Scalars['Boolean'];
  getDogInfo: Scalars['Boolean'];
  /** return : 내가 좋아요 누른 댕댕이가 나를 좋아요 누른 기록 있는지 조회 */
  isLike: Scalars['Boolean'];
  /** Return : 참가할 채팅방 정보(fetch + create) */
  joinChatRoom: IChatRoom;
  /** Return : 참가할 채팅방 정보 */
  joinIChatRoom: IInterestChatRoom;
  /** Return : 재발급된 AccessToken */
  restoreAccessToken: Scalars['String'];
  /** Return : 재발급된 AdminAccessToken */
  restoreAdminAccessToken: Scalars['String'];
  /** Return : 유저 정보 */
  stopUser: IUser;
  updateDog: IDog;
  updateDogsLocation: ILocation;
  /** Return : 업데이트 된 주문 정보 */
  updateOrder: IOrder;
  /** Return : 업데이트 된 상품 정보 */
  updateProduct: IProduct;
  updateTargetAge: IDog;
  updateTargetDistance: IDog;
  /** Return : 바뀐 유저 정보 */
  updateUser: IUser;
  /** Return : 버킷 주소 (파일 위치). prefix : [https://storage.googleapis.com/] */
  uploadFile: Array<Scalars['String']>;
  /** Return : 발급된 AccessToken */
  userLogin: Scalars['String'];
  /** Return : 로그아웃 성공여부 (true / false) */
  userLogout: Scalars['Boolean'];
  /** Return : 인증토큰 일치 여부 (true / false) */
  verifyMailToken: Scalars['Boolean'];
};


export type IMutationAdminLoginArgs = {
  account: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationCancelPaymentArgs = {
  impUid: Scalars['String'];
};


export type IMutationCancelPaymentForPointsArgs = {
  impUid: Scalars['String'];
};


export type IMutationCreateAdminUserArgs = {
  account: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationCreateBlockUserArgs = {
  blockId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationCreateCharacterArgs = {
  character: Scalars['String'];
};


export type IMutationCreateChatMessageArgs = {
  chatMessageInput: IChatMessageInput;
  chatRoomId: Scalars['String'];
};


export type IMutationCreateChatRoomArgs = {
  chatPairId: Scalars['String'];
  dogId: Scalars['String'];
};


export type IMutationCreateDogArgs = {
  createDogInput: ICreateDogInput;
  dogRegNum: Scalars['String'];
  ownerBirth: Scalars['String'];
};


export type IMutationCreateIChatMessageArgs = {
  iRoomId: Scalars['String'];
  testMsg: Scalars['String'];
};


export type IMutationCreateInterestArgs = {
  createInterestInput: ICreateInterestInput;
};


export type IMutationCreateLikeArgs = {
  createLikeInput: ICreateLikeInput;
};


export type IMutationCreateMailTokenArgs = {
  email: Scalars['String'];
  type: Scalars['String'];
};


export type IMutationCreateOrderArgs = {
  createOrderInput: ICreateOrderInput;
};


export type IMutationCreatePassTicketArgs = {
  expiredAt: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationCreatePaymentArgs = {
  impUid: Scalars['String'];
  payMoney: Scalars['Float'];
};


export type IMutationCreatePaymentForPassTicketArgs = {
  impUid: Scalars['String'];
  payMoney: Scalars['Float'];
};


export type IMutationCreatePaymentForPointsArgs = {
  impUid: Scalars['String'];
  payMoney: Scalars['Float'];
};


export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
};


export type IMutationCreateReportArgs = {
  reportContent: Scalars['String'];
  targetId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationCreateReviewArgs = {
  createReviewInput: ICreateReviewInput;
};


export type IMutationCreateReviewDetailArgs = {
  reviewDetail: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteAdminUserArgs = {
  account: Scalars['String'];
};


export type IMutationDeleteCharacterArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteChatRoomArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteDogArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteInterestArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteInterestChatRoomArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteOrderArgs = {
  id: Scalars['String'];
};


export type IMutationDeletePassTicketArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteProductArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteReviewArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteReviewDetailArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
};


export type IMutationGetDogInfoArgs = {
  dogRegNum: Scalars['String'];
  ownerBirth: Scalars['String'];
};


export type IMutationIsLikeArgs = {
  receiveId: Scalars['String'];
  sendId: Scalars['String'];
};


export type IMutationJoinChatRoomArgs = {
  chatPairId: Scalars['String'];
  dogId: Scalars['String'];
};


export type IMutationJoinIChatRoomArgs = {
  email: Scalars['String'];
  iChatRoomId: Scalars['String'];
};


export type IMutationStopUserArgs = {
  id: Scalars['String'];
};


export type IMutationUpdateDogArgs = {
  dogId: Scalars['String'];
  updateDogInput: IUpdateDogInput;
};


export type IMutationUpdateDogsLocationArgs = {
  id: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};


export type IMutationUpdateOrderArgs = {
  id: Scalars['String'];
  updateOrderInput: IUpdateOrderInput;
};


export type IMutationUpdateProductArgs = {
  id: Scalars['String'];
  updateProductInput: IUpdateProductInput;
};


export type IMutationUpdateTargetAgeArgs = {
  dogId: Scalars['String'];
  targetAgeMax: Scalars['Float'];
  targetAgeMin: Scalars['Float'];
};


export type IMutationUpdateTargetDistanceArgs = {
  dogId: Scalars['String'];
  targetDistance: Scalars['Float'];
};


export type IMutationUpdateUserArgs = {
  email: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUserLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationVerifyMailTokenArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type IOrder = {
  __typename?: 'Order';
  address: Scalars['String'];
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  goodsQnt: Scalars['Int'];
  id: Scalars['String'];
  phone: Scalars['String'];
  receiver: Scalars['String'];
};

export enum IPayment_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPassTicket = {
  __typename?: 'PassTicket';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  expiredAt: Scalars['String'];
  id: Scalars['String'];
  user: IUser;
};

export type IPayment = {
  __typename?: 'Payment';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  payMoney: Scalars['Int'];
  paymentType: IPayment_Status_Enum;
  user: IUser;
};

export type IProduct = {
  __typename?: 'Product';
  category: Scalars['String'];
  deletedAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  price: Scalars['Int'];
  productName: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchAllReviews: Array<IReview>;
  fetchAroundDogs: Array<IDog>;
  /** Return : 차단된 유저 정보 */
  fetchBlockUser: IBlockUser;
  /** Return : 차단된 모든 유저 정보 */
  fetchBlockUsers: Array<IBlockUser>;
  /** 견종 종류 조회 */
  fetchBreeds: IBreed;
  fetchCategoryDogs: Array<IDog>;
  /** 성격 정보 조회 */
  fetchCharacters: Array<ICharacter>;
  /** Return : chatRoomId로 찾은 메시지들의 정보 */
  fetchChatMessagesByChatRoomId: Array<IChatMessage>;
  /** Return : 조회된 채팅방 정보 */
  fetchChatRoom: IChatRoom;
  /** Return : 채팅방id, 상대강아지정보, 채팅방의 마지막메시지 */
  fetchChatRooms: Array<IChatRoomsOutput>;
  fetchDogImage: Array<IDogImage>;
  /**  Return : 모든 강아지 정보 */
  fetchDogs: Array<IDog>;
  /** 강아지 검색 */
  fetchDogsBySearch: Array<IDogElasticsearchOutPut>;
  fetchDogsDistance: Array<IAroundDogOutput>;
  /** Return : iChatRoomId로 찾은 메시지들의 정보 */
  fetchIChatMessagesByIChatRoomId: Array<IInterestChatMessage>;
  fetchInterestCategory: Array<IInterestCategoryOutput>;
  /** Return : 조회된 관심사 채팅방 정보 */
  fetchInterestChatRoom: IInterestChatRoom;
  /** Return : 로그인한 유저, 유저의 강아지 데이터 */
  fetchLoginUser: IUserOutput;
  /** 로그인 중인 유저의 이용권 유효 여부 확인하기 */
  fetchLoginUserIsCert: Scalars['Boolean'];
  fetchMainDogImage: Array<IDogImage>;
  /** 유저 정보로 내 강아지 정보 조회 */
  fetchMyDog: IDog;
  /** 한마리의 강아지 정보 조회 */
  fetchOneDog: IDog;
  /** Return : 주문 정보 */
  fetchOrderById: IOrder;
  /** Return : 주문 정보 */
  fetchOrderByPhone: IOrder;
  /** Return : 패스 티켓 정보 */
  fetchPassTicket: IPassTicket;
  /** Return : 결제 정보 */
  fetchPayments: IPayment;
  /** Return : 조회한 상품 정보 */
  fetchProduct: IProduct;
  fetchReceiveReviews: Array<IReview>;
  /** Return : 신고 정보 */
  fetchReports: Array<IReportOutput>;
  fetchReviewDetails: Array<IReviewDetail>;
  fetchReviews: Scalars['Boolean'];
  fetchSendReviews: Array<IReview>;
  /** Return : 로그인한 유저 데이터 */
  fetchSocialLoginUser: IUser;
  /** Return : 신고 정보 */
  fetchTarget: IReport;
  /** return : 좋아요 많이 받은 12마리 댕댕이 */
  fetchTodayDog: Array<ITodayLikeDogOutput>;
  /** Return : 유저 정보 */
  fetchUser: IUser;
  /** Return : 전체 유저 정보 */
  fetchUsers: Array<IUser>;
  /** 유저 검색 */
  fetchUsersBySearch: Array<IUserElasticsearchOutPut>;
  /** Return : 신고 정보 */
  fetchWhoReport: IReport;
};


export type IQueryFetchAroundDogsArgs = {
  id: Scalars['String'];
  page: Scalars['Float'];
};


export type IQueryFetchBlockUserArgs = {
  blockId: Scalars['String'];
};


export type IQueryFetchBlockUsersArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchCategoryDogsArgs = {
  interest: Scalars['String'];
};


export type IQueryFetchChatMessagesByChatRoomIdArgs = {
  chatRoomId: Scalars['String'];
};


export type IQueryFetchChatRoomArgs = {
  roomId: Scalars['String'];
};


export type IQueryFetchChatRoomsArgs = {
  dogId: Scalars['String'];
};


export type IQueryFetchDogImageArgs = {
  dogId: Scalars['String'];
};


export type IQueryFetchDogsArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchDogsBySearchArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchDogsDistanceArgs = {
  id: Scalars['String'];
};


export type IQueryFetchIChatMessagesByIChatRoomIdArgs = {
  iChatRoomId: Scalars['String'];
};


export type IQueryFetchInterestChatRoomArgs = {
  iRoomId: Scalars['String'];
};


export type IQueryFetchMainDogImageArgs = {
  dogId: Scalars['String'];
};


export type IQueryFetchMyDogArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchOneDogArgs = {
  id: Scalars['String'];
};


export type IQueryFetchOrderByIdArgs = {
  id: Scalars['String'];
};


export type IQueryFetchOrderByPhoneArgs = {
  phone: Scalars['String'];
};


export type IQueryFetchPassTicketArgs = {
  email: Scalars['String'];
};


export type IQueryFetchPaymentsArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchProductArgs = {
  id: Scalars['String'];
};


export type IQueryFetchReceiveReviewsArgs = {
  id: Scalars['String'];
};


export type IQueryFetchReportsArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchReviewsArgs = {
  myId: Scalars['String'];
  targetId: Scalars['String'];
};


export type IQueryFetchSendReviewsArgs = {
  id: Scalars['String'];
};


export type IQueryFetchTargetArgs = {
  page: Scalars['Float'];
  targetId: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};


export type IQueryFetchUsersArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchUsersBySearchArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchWhoReportArgs = {
  page: Scalars['Float'];
  userId: Scalars['String'];
};

export type IReport = {
  __typename?: 'Report';
  email: Scalars['String'];
  id: Scalars['String'];
  reportContent: Scalars['String'];
  targetId: Scalars['String'];
  user: IUser;
};

/** fetchReports의 Return Type */
export type IReportOutput = {
  __typename?: 'ReportOutput';
  email?: Maybe<Scalars['String']>;
  reportContent?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
};

export type IReview = {
  __typename?: 'Review';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  receiveReviewId: Scalars['String'];
  reviewDetail: Array<IReviewDetail>;
  reviewMessage: Scalars['String'];
  sendReview: IDog;
};

export type IReviewDetail = {
  __typename?: 'ReviewDetail';
  id: Scalars['String'];
  reviewDetail: Scalars['String'];
};

/** 인기댕댕 */
export type ITodayLikeDogOutput = {
  __typename?: 'TodayLikeDogOutput';
  age: Scalars['Int'];
  id: Scalars['String'];
  mainImg: Scalars['String'];
  name: Scalars['String'];
};

export type IUpdateDogInput = {
  age?: InputMaybe<Scalars['Int']>;
  birthday?: InputMaybe<Scalars['String']>;
  characters?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Array<Scalars['String']>>;
  interests?: InputMaybe<Array<Scalars['String']>>;
  locations?: InputMaybe<ILocationInput>;
  userId?: InputMaybe<Scalars['String']>;
};

export type IUpdateOrderInput = {
  address?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  goodsQnt?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  receiver?: InputMaybe<Scalars['String']>;
};

export type IUpdateProductInput = {
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productName?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  ddMoney?: InputMaybe<Scalars['Int']>;
  donateGrade?: InputMaybe<Scalars['String']>;
  donateTotal?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  isCert?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  pet?: InputMaybe<Scalars['Boolean']>;
  phone?: InputMaybe<Scalars['String']>;
  reportCnt?: InputMaybe<Scalars['Int']>;
};

export type IUser = {
  __typename?: 'User';
  blockUsers: Array<IBlockUser>;
  createdAt: Scalars['DateTime'];
  ddMoney: Scalars['Int'];
  dog: IDog;
  donateGrade: Scalars['String'];
  donateTotal: Scalars['Int'];
  email: Scalars['String'];
  id: Scalars['String'];
  isCert: Scalars['Boolean'];
  isStop: Scalars['Boolean'];
  passTickets: Array<IPassTicket>;
  payments: Array<IPayment>;
  pet: Scalars['Boolean'];
  phone: Scalars['String'];
  reportCnt: Scalars['Int'];
  reports: Array<IReport>;
  updatedAt: Scalars['DateTime'];
};

export type IUserElasticsearchOutPut = {
  __typename?: 'UserElasticsearchOutPut';
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  dogId?: Maybe<Scalars['String']>;
  dogName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  isStop: Scalars['Boolean'];
  reportCnt: Scalars['Int'];
};

/** fetchLoginUser 의 Return Type */
export type IUserOutput = {
  __typename?: 'UserOutput';
  dog?: Maybe<IDog>;
  user?: Maybe<IUser>;
};

export type ICreateLikeInput = {
  receiveId: Scalars['String'];
  sendId: Scalars['String'];
};
