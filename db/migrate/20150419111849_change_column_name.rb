class ChangeColumnName < ActiveRecord::Migration
  def change
  	change_table :books do |t|
  		t.rename :courseNumber, :coursenumber
  	end
  end
end
