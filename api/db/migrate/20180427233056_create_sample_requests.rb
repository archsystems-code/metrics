class CreateSampleRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :sample_requests do |t|
      t.string :id

      t.timestamps
    end
  end
end
