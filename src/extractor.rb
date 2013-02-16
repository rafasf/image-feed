class Extractor

  def initialize
    @extractors = [ ImgurLinkExtractor.new, SharerPicsLinkExtractor.new, NoExtractor.new ]
  end

  def extract_image_from(url)
    extractor_for(url).image_in url
  end

  private
  def extractor_for(url)
    @extractors.find { |e| url =~ e.url_pattern } || EmptyExtractor.new
  end

end
