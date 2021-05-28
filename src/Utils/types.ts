
import { InputType } from './enums';

export type TParams = { videoId: string };

// User data
export interface User {
    Id: string,
    UserName: string,
    FullName: string,
    ClientRoles: string[] | []
}

export interface Token {
    Token: string,
    TokenExpires: string
}

export interface UserData {
    User: User,
    AuthorizationToken: Token,
}

export interface LoginData {
    Username: string,
    Password: string
}

export const defaultUser = {
    User: {
        Id: '',
        UserName: '',
        FullName: '',
        ClientRoles: [],
    },
    AuthorizationToken: {
        Token: '',
        TokenExpires: ''
    }
}

export const AnonymData = {
    Username: '',
    Password: ''
}

// Video list
export interface VideoImages {
    Id: string,
    MediaId: number,
    PlatformCode: string,
    ImageTypeCode: string,
    Url: string,
    Width: number,
    Height: number
}

export interface VideoProducts {
    Id: string,
}

export interface Video {
    Id: string,
    Guid: string,
    MediaTypeCode: string,
    MediaAgeRestrictionValueMin: number,
    MediaAgeRestrictionImageUrl: string,
    Title: string,
    Description: string,
    Year: number,
    Duration: number,
    IsTrialContentAvailable: boolean,
    AvailableFrom: string,
    Images: VideoImages[],
    Products: VideoProducts[],
}

export interface VideoData {
    CacheDataValidTo: string,
    SourceType: string,
    Entities: Video[]
}

export const defaultVideoData = {
    CacheDataValidTo: '',
    SourceType: '',
    Entities: []
}

export interface SingleVideo {
    MediaId: string,
    Title: string,
    Description: string,
    MediaTypeCode: string,
    MediaTypeDisplayName: string,
    StreamId: string,
    Provider: string,
    ContentUrl: string
}

export const defaultSingleVideo = {
    MediaId: '',
    Title: '',
    Description: '',
    MediaTypeCode: '',
    MediaTypeDisplayName: '',
    StreamId: '',
    Provider: '',
    ContentUrl: ''
}

export interface FetchVideosEntryData {
    MediaListId: number,
    IncludeCategories: boolean,
    IncludeImages: boolean,
    IncludeMedia: boolean,
    PageNumber: number,
    PageSize: number
}

// Form types

// Input type text
export interface ValidationInputText {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    emailComplexity?: boolean;
    passwordComplexity?: boolean;
    refToMatch?: string;
}

export interface InputText {
    val: string;
    type: InputType;
    inputType: InputType.INPUT;
    placeholder: string;
    label: string;
    touched: boolean;
    valid: boolean;
    errorMessage?: string;
    validation?: ValidationInputText;
}

// Input type date
export interface ValidationInputDate {
    required?: boolean;
    minDate?: Date;
    maxDate?: Date;
}

export interface InputDate {
    val: string;
    type: InputType;
    inputType: InputType.INPUT;
    placeholder: string;
    label: string;
    touched: boolean;
    valid: boolean;
    errorMessage?: string;
    validation?: ValidationInputDate;
}

// Textarea
export interface ValidationTextarea {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
}

export interface Textarea {
    val: string;
    inputType: InputType.TEXTAREA;
    placeholder: string;
    label: string;
    touched: boolean;
    valid: boolean;
    errorMessage?: string;
    validation?: ValidationTextarea;
}


// Select

export interface SelectValidation {
    required: boolean;
}
export interface SelectOption {
    name: string;
    val: string;
}

export interface SelectOptionName {
    [name: string]: SelectOption;
}

export interface Select {
    val: string;
    inputType: InputType.SELECT;
    label: string;
    valid: boolean;
    options: SelectOptionName;
    validation?: SelectValidation;
    errorMessage?: string;
}

// Form interface - fix index signatures
export interface Form {
    [input: string]: Select | InputText | InputDate | Textarea;
}

// Data from form in object
export interface FormData {
    [input: string]: string;
}