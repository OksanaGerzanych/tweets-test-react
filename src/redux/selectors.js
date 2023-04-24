export const selectTweets = state => state.tweets.items;
export const selectFilter = state => state.filters.status;
export const selectError = state => state.tweets.error;
export const selectIsLoading = state => state.tweets.isLoading;