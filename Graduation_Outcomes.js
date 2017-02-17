print("Classement du pourcentage moyen d'élèves diplomés par école")
db.Graduation_Outcomes.aggregate([
      { $group: { _id: "$Borough", ratio: { $avg: {$divide: ["$Total Grads - n", "$Total Cohort"] }} } },
      { $sort : { ratio : -1 } }
])
print("Classement du pourcentage moyen d'élèves recalés par école")
db.Graduation_Outcomes.aggregate([
      { $group: { _id: "$Borough", ratio: { $avg: {$divide: ["$Dropped Out - n", "$Total Cohort"] }} } },
      { $sort : { ratio : 1 } }
])