require 'rest-client'
require 'nokogiri'

class ImgurLinkExtractor < BaseExtractor

  def initialize
    @url_pattern = /http:\/\/\imgur\.com/
    @xpath = '//link[@rel="image_src"]//@href'
  end

  def image_in(url)
    html = Nokogiri::HTML RestClient.get url
    value_or_empty_of html.at_xpath(@xpath)
  end

end
