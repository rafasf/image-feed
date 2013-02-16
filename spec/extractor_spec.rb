require 'spec_helper'

describe Extractor do
  let(:extractor) { Extractor.new }

  before :each do
    ImgurLinkExtractor.any_instance.stub(:url_pattern).and_return(/imgur-pattern/)
    ImgurLinkExtractor.any_instance.stub(:image_in).and_return('the-image-url')
  end

  it 'extracts image for given url' do
    image_url = extractor.extract_image_from 'imgur-pattern'
    image_url.should == 'the-image-url'
  end

  it 'returns empty if extractor was not found' do
    image_url = extractor.extract_image_from 'unknown-url'
    image_url.should be_empty
  end

end
