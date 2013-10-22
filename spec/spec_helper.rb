Dir.glob(File.expand_path(File.dirname(__FILE__) +  '/../src/*.rb')).each { |file| require file; p file }
