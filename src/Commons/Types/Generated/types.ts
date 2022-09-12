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

export type IAvoidBreed = {
  __typename?: 'AvoidBreed';
  avoidBreed: Scalars['String'];
  dogs: Array<IDog>;
  id: Scalars['String'];
};

export type IBlockUser = {
  __typename?: 'BlockUser';
  blockId: Scalars['String'];
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
  isRead: Scalars['Boolean'];
  sendMessage: Scalars['String'];
  senderId: Scalars['String'];
};

export type IChatRoom = {
  __typename?: 'ChatRoom';
  chatPairId: Scalars['String'];
  dog: IDog;
  id: Scalars['String'];
};

export type ICreateBlockUserInput = {
  blockId: Scalars['String'];
};

export type ICreateReportInput = {
  reportContent: Scalars['String'];
  reportId: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  pet: Scalars['Boolean'];
  phone: Scalars['String'];
};

export type IDistanceType = {
  __typename?: 'DistanceType';
  distance: Scalars['Int'];
  dogId: Scalars['String'];
  id: Scalars['Int'];
};

export type IDog = {
  __typename?: 'Dog';
  age: Scalars['Int'];
  avoidBreeds: Array<IAvoidBreed>;
  birthday: Scalars['String'];
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
  updatedAt: Scalars['DateTime'];
  userId: IUser;
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
  id: Scalars['String'];
  interest: Scalars['String'];
};

export type ILike = {
  __typename?: 'Like';
  id: Scalars['String'];
  receiveId: Scalars['String'];
  sendId: IDog;
};

export type ILocation = {
  __typename?: 'Location';
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
  cancelPayment: IPayment;
  cancelPaymentForPoints: IPayment;
  createAvoidBreed: Array<IAvoidBreed>;
  createBlockUser: IBlockUser;
  createCharacter: ICharacter;
  createChatMessage: IChatMessage;
  createChatRoom: IChatRoom;
  createDog: IDog;
  createIamportAuth: Scalars['Boolean'];
  createInterest: IInterest;
  createLike: ILike;
  createMailToken: Scalars['Boolean'];
  createPayment: IPayment;
  createPaymentForPoints: IPayment;
  createReport: IReport;
  createUser: IUser;
  deleteCharacter: Scalars['Boolean'];
  deleteChatRoom: Scalars['Boolean'];
  deleteDog: Scalars['Boolean'];
  deleteInterest: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  getDogInfo: Scalars['Boolean'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  updateDog: IDog;
  updateDogsLocation: ILocation;
  updateUser: IUser;
  uploadFile: Array<Scalars['String']>;
  userLogin: Scalars['String'];
  verifyMailToken: Scalars['Boolean'];
};


export type IMutationCancelPaymentArgs = {
  impUid: Scalars['String'];
};


export type IMutationCancelPaymentForPointsArgs = {
  impUid: Scalars['String'];
};


export type IMutationCreateAvoidBreedArgs = {
  createAvoidBreedInput: ICreateAvoidBreedInput;
};


export type IMutationCreateBlockUserArgs = {
  createBlockUserInput: ICreateBlockUserInput;
};


export type IMutationCreateCharacterArgs = {
  character: Scalars['String'];
};


export type IMutationCreateChatMessageArgs = {
  sendMessage: Scalars['String'];
  senderId: Scalars['String'];
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


export type IMutationCreateInterestArgs = {
  interest: Scalars['String'];
};


export type IMutationCreateLikeArgs = {
  receiveId: Scalars['String'];
  sendId: Scalars['String'];
};


export type IMutationCreateMailTokenArgs = {
  email: Scalars['String'];
};


export type IMutationCreatePaymentArgs = {
  impUid: Scalars['String'];
  payMoney: Scalars['Float'];
};


export type IMutationCreatePaymentForPointsArgs = {
  impUid: Scalars['String'];
  payMoney: Scalars['Float'];
};


export type IMutationCreateReportArgs = {
  createReportInput: ICreateReportInput;
  userId: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
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


export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
};


export type IMutationGetDogInfoArgs = {
  dogRegNum: Scalars['String'];
  ownerBirth: Scalars['String'];
};


export type IMutationUpdateDogArgs = {
  id: Scalars['String'];
  updateDogInput: IUpdateDogInput;
};


export type IMutationUpdateDogsLocationArgs = {
  id: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
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

export enum IPayment_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  payMoney: Scalars['Int'];
  paymentType: IPayment_Status_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchAroundDogs: Array<IDog>;
  fetchAvoidBreed: Array<IAvoidBreed>;
  fetchBlockUser: IBlockUser;
  fetchBlockUsers: Array<IBlockUser>;
  fetchBreeds: IBreed;
  fetchCharacters: Array<ICharacter>;
  fetchChatMessagesBySenderId: Array<IChatMessage>;
  fetchChatRoom: Array<IChatRoom>;
  fetchDogImage: Array<IDogImage>;
  fetchDogs: Array<IDog>;
  fetchDogsDistance: Array<IDistanceType>;
  fetchInterests: Array<IInterest>;
  fetchLikes: Array<ILike>;
  fetchLoginUser: IUser;
  fetchMainDogImage: Array<IDogImage>;
  fetchMyDog: IDog;
  fetchTarget: IReport;
  fetchUser: IUser;
  fetchUsers: Array<IUser>;
  /** userId를 통해 신고게시판 조회 */
  fetchWhoReport: IReport;
};


export type IQueryFetchAroundDogsArgs = {
  id: Scalars['String'];
};


export type IQueryFetchBlockUserArgs = {
  blockId: Scalars['String'];
};


export type IQueryFetchChatMessagesBySenderIdArgs = {
  senderId: Scalars['String'];
};


export type IQueryFetchChatRoomArgs = {
  chatPairId: Scalars['String'];
  dogId: Scalars['String'];
};


export type IQueryFetchDogImageArgs = {
  dogId: Scalars['String'];
};


export type IQueryFetchDogsDistanceArgs = {
  id: Scalars['String'];
};


export type IQueryFetchLikesArgs = {
  receiveId: Scalars['String'];
};


export type IQueryFetchMainDogImageArgs = {
  dogId: Scalars['String'];
};


export type IQueryFetchMyDogArgs = {
  id: Scalars['String'];
};


export type IQueryFetchTargetArgs = {
  targetId: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};


export type IQueryFetchWhoReportArgs = {
  userId: Scalars['String'];
};

export type IReport = {
  __typename?: 'Report';
  id: Scalars['String'];
  reportContent: Scalars['String'];
  targetId: Scalars['String'];
  user: IUser;
};

export type IUpdateDogInput = {
  age?: InputMaybe<Scalars['Int']>;
  avoidBreeds?: InputMaybe<Array<Scalars['String']>>;
  birthday?: InputMaybe<Scalars['String']>;
  characters?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Array<Scalars['String']>>;
  interests?: InputMaybe<Array<Scalars['String']>>;
  locations?: InputMaybe<ILocationInput>;
  userId?: InputMaybe<Scalars['String']>;
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
  createdAt: Scalars['DateTime'];
  ddMoney: Scalars['Int'];
  donateGrade: Scalars['String'];
  donateTotal: Scalars['Int'];
  email: Scalars['String'];
  id: Scalars['String'];
  isCert: Scalars['Boolean'];
  password: Scalars['String'];
  pet: Scalars['Boolean'];
  phone?: Maybe<Scalars['String']>;
  reportCnt: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ICreateAvoidBreedInput = {
  avoidBreed: Array<Scalars['String']>;
};

export type ICreateDogInput = {
  age: Scalars['Int'];
  avoidBreeds?: InputMaybe<Array<Scalars['String']>>;
  birthday: Scalars['String'];
  characters?: InputMaybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  img: Array<Scalars['String']>;
  interests?: InputMaybe<Array<Scalars['String']>>;
  locations: ILocationInput;
  userId: Scalars['String'];
};
