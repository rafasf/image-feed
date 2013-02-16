require 'spec_helper'

describe ImgurLinkExtractor do

  its(:url_pattern) { should == /http:\/\/\imgur\.com/ }
  it { should == ImgurLinkExtractor.new }

  describe 'extracting content' do
    let(:a_url) { 'http://imgur.com/lmWOJ' }
    let(:extractor) { ImgurLinkExtractor.new }

    it 'extracts the image url if present' do
      RestClient.stub!(:get).with(a_url).and_return('<link rel="image_src" href="http://i.imgur.com/lmWOJ.jpg">')
      extractor.image_in(a_url).should == 'http://i.imgur.com/lmWOJ.jpg'
    end

    it 'returns empty if image url is not present' do
      RestClient.stub!(:get).with(a_url).and_return('<span>no link here</span>')
      extractor.image_in(a_url).should be_empty
    end
  end

end
