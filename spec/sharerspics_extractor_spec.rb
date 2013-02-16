require 'spec_helper'

describe SharerPicsLinkExtractor do
  
  its(:url_pattern) { should == /http:\/\/sharerpics\.com/ }
  it { should == SharerPicsLinkExtractor.new }

  describe 'extracting content' do
    let(:a_url) { 'http://sharerpics.com/p/141644.html' }
    let(:extractor) { SharerPicsLinkExtractor.new }

    it 'extracts the image url if present' do
      RestClient.stub!(:get).with(a_url).and_return('<img alt="something" src="http://path.to.image">')
      extractor.image_in(a_url).should == 'http://path.to.image'
    end

    it 'returns empty if image url is not present' do
      RestClient.stub!(:get).with(a_url).and_return('<span>no link here</span>')
      extractor.image_in(a_url).should be_empty
    end
  end

end
