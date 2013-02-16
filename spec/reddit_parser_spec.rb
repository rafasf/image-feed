require 'spec_helper'

describe RedditParser do
  let(:sample_response) { File.open(File.join(File.dirname(__FILE__), 'fixture/reddit.json'), 'rb').read }

  describe 'reddit entry with known image url' do
    it 'creates an all fun entry with title and image url' do
      Extractor.any_instance.stub(:extract_image_from).and_return('right-url')

      entries = RedditParser.new.parse sample_response
      entry = entries.first

      entry[:title].should == 'My GF wanted me to wear this shirt to the park because she thought it was cute......'
      entry[:image_url].should == 'right-url'
    end
  end

  describe 'reddit entry with unknown image url' do
    it 'ignores the entry' do
      Extractor.any_instance.stub(:extract_image_from).and_return('')

      entries = RedditParser.new.parse sample_response

      entries.size == 0
    end
  end

end
