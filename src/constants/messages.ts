export const USERS_MESSAGES = {
  VALIDATION_ERROR: 'Validation error',
  NAME_NOT_EMPTY: 'Name must not be empty',
  NAME_IS_STRING: 'Name must be a string',
  NAME_LENGTH: 'Name must be between 1 and 100 characters',

  EMAIL_NOT_EMPTY: 'Email must not be empty',
  EMAIL_IS_STRING: 'Email must be a string',
  EMAIL_CORECT_FORMAT: 'Invalid email format',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  EMAIL_OR_PASSWORD_IS_INCORRECT: 'Email or password is incorrect',

  PASSWORD_NOT_EMPTY: 'Password must not be empty',
  PASSWORD_IS_STRONG:
    'Password must be at least 6 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol',

  CONFIRM_PASSWORD_NOT_EMPTY: 'Confirm password must not be empty',
  CONFRIM_PASSWORD_IS_STRONG:
    'Password must be at least 6 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol',
  CONFIRM_PASSWORD_MATCH: 'Password confirmation does not match password',

  DATE_OF_BIRTH_IS_ISO8601: 'Date of birth must be in ISO8601 format',

  REGISTER_SUCCESS: 'Register success',
  LOGIN_SUCCESS: 'Login success',

  ACCESS_TOKEN_NOT_EMPTY: 'Access token must not be empty',
  REFRESH_TOKEN_NOT_EMPTY: 'Refresh token must not be empty',
  REFRESH_TOKEN_IS_INVALID: 'Refresh token is invalid',
  USED_REFRESH_TOKEN_OR_NOT_EXIST: 'Used refresh token or not exist',
  LOGOUT_SUCCESS: 'Logged out successfully',
  ACCESS_TOKEN_IS_INVALID: 'Access token is invalid',

  VERIFY_EMAIL_TOKEN_NOT_EMPTY: 'Email verify token is empty',
  USER_NOT_FOUND: 'User not found',
  EMAIL_ALREADY_VERIFIED_BEFORE: 'Email already verified before',
  EMAIL_VERIFY_SUCCESS: 'Email verify success',
  RESEND_VERIFY_EMAIL_SUCCESS: 'Resend verify email success',
  CHECK_EMAIL_TO_RESET_PASSWORD: 'Check email to reset password',
  FORGOT_PASSWORD_TOKEN_NOT_EMPTY: 'Forgot password token not empty',
  VERIFY_FORGOT_PASSWORD_SUCCESS: 'Verify forgot password success',
  FORGOT_PASSWORD_TOKEN_INVALID: 'Forgot password token invalid',
  RESET_PASSWORD_SUCCESS: 'Reset password success',
  GET_ME_SUCCESS: 'Get me success',
  USER_NOT_VERIFIED: 'User not verified',
  BIO_IS_STRING: 'Bio must be a string',
  BIO_LENGTH: 'Bio length must be from 1 to 200 characters',
  LOCATION_IS_STRING: 'Location must be a string',
  LOCATION_LENGTH: 'Location length must be from 1 to 200 characters',
  WEBSITE_IS_STRING: 'Website must be a string',
  WEBSITE_LENGTH: 'Website length must be from 1 to 200 characters',
  USERNAME_IS_STRING: 'Username must be a string',
  USERNAME_INVALID:
    'Username must be 4-15 characters long and contain only letters, numbers and underscores, not only numbers',
  IMAGE_IS_STRING: 'Image must be a string',
  IMAGE_LENGTH: 'Image length must be from 1 to 400 characters',
  UPDATE_ME_SUCCESS: 'Update me success',
  GET_PROFILE_SUCCESS: 'Get profile success',
  FOLLOWER_SUCCESS: 'Follower success',
  INVALID_USER_ID: 'Invalid user id',
  FOLLOWED: 'Followed user',
  ALREADY_UNFOLLOWED: 'Already unfollowed',
  UNFOLLOWED_SUCCESS: 'Unfollowed success',
  USERNAME_EXISTED: 'Username existed',
  OLD_PASSWORD_NOT_MATCH: 'Old password not match',
  CHANGE_PASSWORD_SUCCESS: 'Change password success',
  GMAIL_NOT_VERIFIED: 'Gmail not verified',
  UPLOAD_SUCCESS: 'Upload success',
  IMAGE_NOT_FOUND: 'Image not found',
  VIDEO_NOT_FOUND: 'Video not found',
  RANGE_NOT_FOUND: 'Range not found',
  REFRESH_TOKEN_SUCCESS: 'Refresh token success',
  UNAUTHORIZED: 'Unauthorized'
} as const

export const TWEETS_MESSAGES = {
  INVALID_TYPE: 'Invalid type',
  INVALID_AUDIENCE: 'Invalid audience',
  PARENT_ID_MUST_BE_A_VALID_TWEET_ID: 'Parent id must be a valid tweet id',
  PARENT_ID_MUST_BE_NULL: 'Parent id must be null',
  CONTENT_MUST_BE_A_NON_EMPTY_STRING: 'Content must be a non-empty string',
  CONTENT_MUST_BE_EMPTY_STRING: 'Content must be empty string',
  HASHTAGS_MUST_BE_ARRAY_STRING: 'Hashtags must be array string',
  MENTIONS_MUST_BE_ARRAY_USER_ID: 'Mentions must be array user id',
  MEDIA_MUST_BE_ARRAY_MEDIA_OBJECT: 'Media must be array media object',
  CREATE_TWEET_SUCCESS: 'Create tweet success',
  INVALID_TWEET_ID: 'Invalid tweet id',
  TWEET_NOT_FOUND: 'Tweet not found',
  TWEET_IS_NOT_PUBLIC: 'Tweet is not public',
  GET_TWEET_SUCCESS: 'Get tweet success',
  GET_TWEET_CHILDREN_SUCCESS: 'Get tweet children success',
  GET_NEW_FEEDS_SUCCESS: 'Get new feeds success'
} as const

export const BOOKMARKS_MESSAGES = {
  BOOKMARK_TWEET_SUCCESS: 'Bookmark tweet success',
  UNBOOKMARK_TWEET_SUCCESS: 'Unbookmark tweet success'
} as const

export const LIKES_MESSAGES = {
  LIKE_TWEET_SUCCESS: 'Like tweet success',
  UNLIKE_TWEET_SUCCESS: 'Unlike tweet success'
} as const

export const SEARCH_MESSAGE = {
  SEARCH_SUCCESS: 'Search success',
  CONTENT_IS_STRING: 'Content must be a string',
  INVALID_MEDIA_TYPE: 'Invalid media type',
  INVALID_PEOPLE_FOLLOW: 'Invalid people follow'
} as const

export const CONVERSATIONS_MESSAGES = {
  GET_CONVERSATIONS_SUCCESS: 'Get conversations success'
} as const

export const COMMON_MESSAGES = {
  LIMIT_MUST_BE_LESS_THAN_100_AND_GREATER_THAN_1: 'Limit must be less than 100 and greater than 1',
  PAGE_MUST_BE_GREATER_THAN_1: 'Page must be greater than 1',
  LIMIT_MUST_BE_A_NUMBER: 'Limit must be a number',
  PAGE_MUST_BE_A_NUMBER: 'Page must be a number',
  INTERNAL_SERVER_ERROR: 'Internal server error'
} as const

export const EMAIL_MESSAGES = {
  SUBJECT_VERIFY_EMAIL: 'Verify email',
  TITLE_VERIFY_EMAIL: 'Request Verify Your Account',
  CONTENT_VERIFY_EMAIL: 'Click the button below to verify your email address.',
  SUBJECT_RESET_PASSWORD: 'Reset password',
  TITLE_RESET_PASSWORD: 'Request Reset Password',
  CONTENT_RESET_PASSWORD: 'Click the button below to reset your password.'
}
