class CreateOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :owners do |t|
      t.string :first_name
      t.string :last_name
      t.string :account_type
      t.string :email
      t.string :password_digest
      t.timestamps
    end
  end
end
