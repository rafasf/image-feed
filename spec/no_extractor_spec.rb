require 'spec_helper'

describe NoExtractor do

  its(:url_pattern) { should == /.\.(jpg|gif|png)$/ }
  it { should == NoExtractor.new }

  it 'returns the url itself since its a direct link to the image' do
    NoExtractor.new.image_in('url.jpg').should == 'url.jpg'
  end

end
