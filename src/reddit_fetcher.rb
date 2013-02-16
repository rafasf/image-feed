require 'rest-client'

class RedditFetcher

  def initialize
    @parser = RedditParser.new
  end

  def fetch(feed_name)
    response = RestClient.get url_for(feed_name)
    @parser.parse response
  end

  private
  def url_for(feed_name)
    "http://api.reddit.com/r/#{feed_name}"
  end

end
