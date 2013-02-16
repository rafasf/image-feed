class NoExtractor < BaseExtractor

  def initialize
    @url_pattern = /.\.(jpg|gif|png)$/
  end

  def image_in(url)
    url
  end

end
