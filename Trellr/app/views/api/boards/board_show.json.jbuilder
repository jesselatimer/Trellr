json.(@board, :user_id, :title)

json.lists @board.lists do |list|
  json.(list, :board_id, :title)
  json.cards list.cards, :list_id, :title, :description
end
