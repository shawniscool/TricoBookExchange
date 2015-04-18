class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :name
      t.string :college
      t.string :condition
      t.text :additional
      t.string :courseNumber
      t.string :department
      t.float :price

      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :books, :users
    add_index :books, [:user_id, :created_at]
  end
end
