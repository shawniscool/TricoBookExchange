# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(name:  "Example User",
             email: "example@railstutorial.org",
             password:              "foobar",
             password_confirmation: "foobar",
             activated: true,
             activated_at: Time.zone.now)

99.times do |n|
  name  = Faker::Name.name
  email = "example-#{n+1}@railstutorial.org"
  password = "password"
  User.create!(name:  name,
              email: email,
              password:              password,
              password_confirmation: password,
              activated: true,
              activated_at: Time.zone.now)
end

users = User.order(:created_at).take(6)
50.times do |n|
  condition = ["perfect","used","poor","excellent"].sample
  name = Faker::Lorem.word
  users.each { |user| user.books.create!(name: name, college:"Swarthmore College", department:"Mathematics", coursenumber: n%5,condition:condition,price:Random.new.rand(5..70)) }
  users.each { |user| user.books.create!(name: name, college:"Swarthmore College", department:"Computer Science", coursenumber: n%8,condition:condition,price:Random.new.rand(5..70)) }
  users.each { |user| user.books.create!(name: name, college:"Swarthmore College", department:"Political Science", coursenumber: n%11,condition:condition,price:Random.new.rand(5..170)) }
  users.each { |user| user.books.create!(name: name, college:"Swarthmore College", department:"English Literature", coursenumber: n%3+64,condition:condition,price:Random.new.rand(25..70)) }
  users.each { |user| user.books.create!(name: name, college:"Harvard University", department:"Computer Science", coursenumber: n%14,condition:condition,price:Random.new.rand(5..370)) }
  users.each { |user| user.books.create!(name: name, college:"Harverford College", department:"Computer Science", coursenumber: n%10+33,condition:condition,price:Random.new.rand(45..70)) }
  users.each { |user| user.books.create!(name: name, college:"University of Maryland", department:"Computer Science", coursenumber: n%8,condition:condition,price:Random.new.rand(65..70)) }
  users.each { |user| user.books.create!(name: name, college:"Rutgers University", department:"Computer Science", coursenumber: n%7,condition:condition,price:Random.new.rand(5..70)) }

end