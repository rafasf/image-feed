require 'spec_helper'

describe EmptyExtractor do

  describe 'extracting content' do
    it 'returns empty' do
      EmptyExtractor.new.image_in('an url').should be_empty
    end
  end

end
