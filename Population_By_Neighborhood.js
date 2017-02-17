print("Liste des 5 quartiers de Manhattan les moins peuplés")
db.Population_By_Neighborhood.find(
    {Borough: "Manhattan",
        Year: 2010
        },
            {"NTA Name":1,Population: 1, _id: 0 }
).sort( { Population: 1 } ).limit(5)
      
