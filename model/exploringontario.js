const scenes = require('./scenes')

scenes.createScene("week_one", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "midland"},
    { description: "explore coldwater.", scene: "coldwater"},
    { description: "explore orillia.", scene: "orillia"},
])

scenes.createScene("midland", 
``,
[
    { description: "continiue on", scene: "week_two"},
])

scenes.createScene("coldwater", 
``,
[
    { description: "you can explore one Midland", scene: "week_two"},
])

scenes.createScene("orillia", 
``,
[
    { description: "you can explore one Midland", scene: "week_two"},
])

scenes.createScene("week_two", 
`This week, You are starting in Orillia, ON. And you will be hiking to and through
gravenhurst, bracebridge and huntsville`,
[
    { description: "explore Gravenhurst", scene: "gravenhurst"},
    { description: "explore Bracebridge.", scene: "bracebridge"},
    { description: "explore Huntsville.", scene: "huntsville"},
])

scenes.createScene("Gravenhurst", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "continiue on", scene: "week_three"},
])

scenes.createScene("Bracebridge", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_three"},
])

scenes.createScene("Huntsville", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_three"},
])

scenes.createScene("week_three", 
`This week, You are at your starting point in Huntsville, ON. And you will be hiking to and through
Sprucedale, Magnetawan and Commanda`,
[
    { description: "explore Sprucedale", scene: "sprucedale"},
    { description: "explore Magnetawan.", scene: "magnetawan"},
    { description: "explore Commanda.", scene: "commanda"},
])

scenes.createScene("sprucedale", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "continiue on", scene: "week_four"},
])

scenes.createScene("magnetawan", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_four"},
])

scenes.createScene("commanda", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_four"},
])

scenes.createScene("week_four", 
`This week, You are at your starting point in Commanda, ON. And you will be hiking to and through
North Bay, Sudbury and Espanola`,
[
    { description: "Explore North Bay", scene: "north bay"},
    { description: "explore Sudbury.", scene: "sudbury"},
    { description: "explore Espanola", scene: "espanola"},
])

scenes.createScene("north bay", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "continiue on", scene: "week_five"},
])

scenes.createScene("sudbury", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_five"},
])

scenes.createScene("espanola", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_five"},
])

scenes.createScene("week_five", 
`This week, You are at your starting point in espanola, ON. And you will be hiking to and through
Blind river, Bruce mines, Echo bay`,
[
    { description: "Explore Blind river", scene: "blind river"},
    { description: "explore Bruce mines.", scene: "bruce mines"},
    { description: "explore Echo bay.", scene: "echo bay"},
])

scenes.createScene("blind river", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "continiue on", scene: "week_six"},
])

scenes.createScene("bruce mines", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_six"},
])

scenes.createScene("echo bay", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_six"},
])

scenes.createScene("week_six", 
`This week, You are at your starting point in Berrie, ON. And you will be hiking to and through
sault ste. marie, Lake Superior P.P and Wawa`,
[
    { description: "Explore sault ste. marie", scene: "sault ste. marie"},
    { description: "explore Lake Superior P.P", scene: "lake_superior_pp"},
    { description: "explore Wawa", scene: "wawa"},
])

scenes.createScene("sault ste. marie", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "continiue on", scene: "week_seven"},
])

scenes.createScene("lake_superior_pp", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_seven"},
])

scenes.createScene("wawa", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_seven"},
])

scenes.createScene("week_seven", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
white river, terrace bay and Thunder bay`,
[
    { description: "explore white river", scene: "white_river"},
    { description: "explore terrace bay.", scene: "terrace_bay"},
    { description: "explore thunder bay.", scene: "thunder_bay"},
])

scenes.createScene("white_river", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "continiue on", scene: "week_eight"},
])

scenes.createScene("terrace_bay", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "eight"},
])

scenes.createScene("thunder_bay", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_eight"},
])

scenes.createScene("week_eight", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
kakabeka falls, dryden and Kenora`,
[
    { description: "explore Kakabeka falls", scene: "kakabeka_falls"},
    { description: "explore dryden", scene: "dryden"},
    { description: "explore kenora", scene: "kenora"},
])

scenes.createScene("kakabeka_falls", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "continiue on", scene: "week_eight"},
])

scenes.createScene("dryden", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "eight"},
])

scenes.createScene("kenora", 
`In this week, You are at your starting point in Berrie, ON. And you will be hiking to and through
midland, coldwater and orillia`,
[
    { description: "you can explore one Midland", scene: "week_eight"},
])