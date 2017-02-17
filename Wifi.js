print("Classement des arrondissements en fonction du nombre de hotspots Wi-Fi")
db.Wifi.aggregate([
      { $group: { _id: "$BORO", cum: { $sum: 1 } } },
      { $sort : { cum : -1 } }
])