require 'test_helper'

class BooksControllerTest < ActionController::TestCase
	def setup
		@book = books(:orange)
	end

	test "should redirect create when not logged in" do 
		assert_no_difference  "Book.count" do 
			post :create,book: {name:"Intro to CS"}
		end
		assert_redirected_to login_url
	end

	test "should redirect destroy when not logged in" do 
		assert_no_difference 'Book.count' do 
			delete :destroy, id: @book
		end
		assert_redirected_to login_url
	end

end
