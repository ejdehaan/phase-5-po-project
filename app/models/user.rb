class User < ApplicationRecord
    belongs_to :supplier

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end
