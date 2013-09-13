require 'rspec/core/rake_task'

task :default => [:unit]

RSpec::Core::RakeTask.new(:unit) do |spec|
  spec.rspec_opts = '--color --format documentation'
  spec.pattern = 'spec/*_spec.rb'
end

begin
  require 'jasmine'
  load 'jasmine/tasks/jasmine.rake'
rescue LoadError
  task :jasmine do
    abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
  end
end
