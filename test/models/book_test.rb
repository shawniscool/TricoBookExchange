require 'test_helper'

class BookTest < ActiveSupport::TestCase
	def setup
		@user = users(:michael)
		@book = @user.books.build(name:"Intro to CS21")
	end

	test "order should be most recent first" do
		assert_equal Book.first, books(:most_recent)
	end
end
