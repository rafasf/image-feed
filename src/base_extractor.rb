class BaseExtractor
  attr_reader :url_pattern

  def ==(other)
    @url_pattern.equal? other.url_pattern
  end

  protected
  def value_or_empty_of(attribute)
    attribute.nil? ? '' : attribute.value
  end

end
