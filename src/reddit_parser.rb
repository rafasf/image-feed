require 'json'

class RedditParser

  def parse(response)
    entries_of children_in response
  end

  private
  def children_in(response)
    JSON.parse(response)['data']['children']
  end

  def entries_of(children)
    all_entries = children.map { |entry| create_entry_from entry }
    all_entries.reject { |entry| entry[:image_url].empty? }.reverse
  end

  def create_entry_from(reddit_entry)
    image_url = Extractor.new.extract_image_from reddit_entry['data']['url']
    { title: reddit_entry['data']['title'], image_url: image_url }
  end
end


