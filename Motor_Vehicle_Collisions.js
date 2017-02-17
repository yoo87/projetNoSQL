print("Classement des arrondissements en fonction du nombre d'accidents de la route")
db.Motor_Vehicle_Collisions.aggregate([
      { $group: { _id: "$BOROUGH", cum: { $sum: 1 } } },
      { $sort : { cum : 1 } }
])