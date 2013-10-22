Dir.glob(File.expand_path(File.dirname(__FILE__) +  '/../src/*.rb')).sort.each { |file| require file unless file.include?('assets') }
