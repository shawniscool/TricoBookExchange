class BooksController < ApplicationController
	before_action :logged_in_user, only: [:create,:destroy]
	before_action :correct_user, only: :destroy
  respond_to :html,:js

	def new
		@book = Book.new	
	end

	def create
		@book = current_user.books.build(book_params)
		if @book.save
			flash[:success] = "Your post created!"
			redirect_to root_url
		else
			render 'static_pages/home'
		end
	end

	def destroy
		@book.destroy
		flash[:success] = "Book sale info deleted"
		redirect_to request.referrer || root_url
	end

	def find
		respond_to do |format|
			@books = Book.where("college = ? AND department = ? AND courseNumber = ?", params[:college],params[:department],params[:courseNumber].to_i)
			puts "size of books is " + @books.size.to_s
			format.html {render @books}
			format.js {render @books}
		end
	end

	private
		def book_params
			params.require(:book).permit(:name,:college,:department,:courseNumber)
		end

		def correct_user
			@book = current_user.books.find_by(id: params[:id])
			redirect_to root_url if @book.nil?
		end
end
