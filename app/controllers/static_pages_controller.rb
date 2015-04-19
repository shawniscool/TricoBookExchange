class StaticPagesController < ApplicationController
  def home
  	books = Book.all
  	puts "number of books is #{books.size}"
  	@hashes = Hash.new{|key,value| key[value] = Hash.new{|key2,value2| key2[value2] = SortedSet.new}}
  	# where("college = 'Swarthmore College'")
  	books.each do |book|
  		@hashes[book.college][book.department] << book.courseNumber
  	end
  end
end
