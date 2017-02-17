print("Classement des arrondissements en fonction du nombre d'hopitaux")
db.Hospitals_Corporation_Facilities.aggregate([
      { $group: { _id: "$Borough", cum: { $sum: 1 } } },
      { $sort : { cum : -1 } }
])


