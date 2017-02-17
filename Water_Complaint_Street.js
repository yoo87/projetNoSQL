print("Classement des arrondissements en fonction du nombre de plaintes au sujet de l'eau")
db.Water_Complaint_Street.aggregate([
      { $group: { _id: "$Borough", cum: { $sum: 1 } } },
      { $sort : { cum : 1 } }
])