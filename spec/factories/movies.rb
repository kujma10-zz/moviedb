FactoryGirl.define do
  factory :movie do
    title { Faker::Lorem.word }
    description { Faker::Lorem.sentence }
    category_id { Faker::Lorem.word }
  end
end
