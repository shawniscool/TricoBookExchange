require 'test_helper'

class UsersProfileTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:michael)
  end

	test "profile display" do
    get user_path(@user)
    assert_template 'users/show'
    assert_select 'h1', text: @user.name
    assert_match @user.books.count.to_s, response.body
  end
end
