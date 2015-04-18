class BooksController < ApplicationController
	before_action :logged_in_user, only: [:create,:destroy]

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
	end

	private

		def book_params
			params.require(:book).permit(:name)
		end
end
