require 'simplecov'
require 'simplecov-rcov'

SimpleCov.formatter = SimpleCov::Formatter::RcovFormatter
SimpleCov.start do 
  add_filter "spec/"
end

Dir.glob(File.expand_path(File.dirname(__FILE__) +  '/../src/*.rb')).each { |file| require file }
