import tweepy

consumer_key = ""
consumer_secret = ""
access_key = ""
access_secret = ""

def get_last_tweets(screen_namen, number_tweets):
	auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
	auth.set_access_token(access_key, access_secret)
	api = tweepy.API(auth)

	#make initial request for most recent tweets (200 is the maximum allowed count)
	return api.user_timeline(screen_name = screen_name,count=number_tweets)