4.times do
  l = List.create(
    name: Faker::TwinPeaks.character,
  )

  10.times do
    i = Item.create(
      name: Faker::TwinPeaks.quote,
      list_id: l.id,
    )
  end
end

