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
  name = Faker::Lorem.sentence(5)
  users.each { |user| user.books.create!(name: name, college:"Swarthmore College", department:"Mathematics", courseNumber: n%5) }
  users.each { |user| user.books.create!(name: name, college:"Swarthmore College", department:"Computer Science", courseNumber: n%5) }
  users.each { |user| user.books.create!(name: name, college:"Swarthmore College", department:"Political Science", courseNumber: n%5) }
  users.each { |user| user.books.create!(name: name, college:"Swarthmore College", department:"English Literature", courseNumber: n%5) }
  users.each { |user| user.books.create!(name: name, college:"Harvard University", department:"Computer Science", courseNumber: n%5) }
  users.each { |user| user.books.create!(name: name, college:"Harverford College", department:"Computer Science", courseNumber: n%5) }
  users.each { |user| user.books.create!(name: name, college:"University of Maryland", department:"Computer Science", courseNumber: n%5) }
  users.each { |user| user.books.create!(name: name, college:"Rutgers University", department:"Computer Science", courseNumber: n%5) }

end