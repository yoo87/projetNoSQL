print("Classement du nombre moyen d'élèves par classe")
db.Class_Size.aggregate([
      { $group: { _id: "$BOROUGH", mean: { $avg: "$AVERAGE CLASS SIZE" } } },
      { $sort : { mean : 1 } }
])