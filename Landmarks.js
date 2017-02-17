print("Classement des arrondissements en fonction du nombre de monuments historiques")
db.Landmarks.aggregate([
      { $group: { _id: "$BoroughID", cum: { $sum: 1 } } },
      { $sort : { cum : -1 } }
])