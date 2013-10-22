require 'spec_helper'
require 'rest-client'
require 'nokogiri'

class SharerPicsLinkExtractor < BaseExtractor

  def initialize
    @url_pattern = /http:\/\/sharerpics\.com/
    @image_location = '//img/@src'
  end

  def image_in(url)
    page_html = Nokogiri::HTML RestClient.get url
    value_or_empty_of page_html.at_xpath(@image_location)
  end

end
