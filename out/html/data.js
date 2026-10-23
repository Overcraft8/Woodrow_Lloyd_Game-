const tooltipList = [{
    // for organizations and parties
    searchString: "CCF(SS)",
    explanationText: "The Cooperative Commonwealth Federation (Saskatchewan Section)"
    // <img src=img/CCF_logo.jpg>
}, 
{
    searchString: "FLP",
    explanationText: "The Farmer-Labour Party"
}, 
{
    searchString: "CCF",
    explanationText: "Cooperative Commonwealth Federation"
}, 
{
    searchString: "PFLP",
    explanationText: "The Progressive Farmer-Labour Party"
}, 
{
    searchString: "CPC(S)", 
    explanationText: "The Communist Party of Canada (Saskatchewan)"
},
{
    searchString: "LPS", 
    explanationText: "The Liberal Party of Saskatchewan"
},
{
    searchString: "PPS", 
    explanationText: "The Progressive Party of Saskatchewan"
},
{
    searchString: "CPS", 
    explanationText: "The Conservative Party of Saskatchewan"
},
{
    searchString: "SCPS", 
    explanationText: "The Social Credit Party of Saskatchewan"
}, 
{
    searchString: "UFC(SS)",
    explanationText: "The United Farmers of Canada (Saskatchewan Section)"
},
{
    searchString: "UFPA",
    explanationText: "The United Farmers Political Association"
},
{
    searchString: "CCYM",
    explanationText: "The Cooperative Commonwealth Youth Movement"
},
{
    searchString: "ILP",
    explanationText: "The Independent Labour Party"
},
{
    searchString: "ILP(S)",
    explanationText: "The Independent Labour Party (Saskatchewan)"
},
{
    searchString: "FUL",
    explanationText: "The Farmer's Unity League"
},
{
    searchString: "WUL",
    explanationText: "The Worker's Unity League "
},
{
    searchString: "Cooperative Coalition", 
    explanationText: "A coalition of Conservatives, Progressives, and Independents",
    detailedText: "The Cooperative Coalition was an effort by Premier James Anderson to unite the anti-Liberal forces of the province against the governing Liberals."
},
//Federal parties
{
    searchString: "CPC", 
    explanationText: "The Conservative Party of Canada"
},
// Other Provincial Parties
{
    searchString: ['UFA', 'United Farmers of Alberta'], 
    explanationText: "The United Farmers of Alberta"
},
{
    searchString: ['DLP', 'Dominion Labor Party'], 
    explanationText: "The Dominion Labor Party", 
    detailedText: "The Dominion Labor Party is of the old labor tradition in Canada and formed in Alberta. It has had limited electoral success in Alberta but is clearly overshadowed by the rising CCF."
},
{
    searchString: ["SPBC", "Socialist Party of British Columbia"], 
    explanationText: "The Socialist Party of British Columbia",
    detailedText: "The Socialist Party of British Columbia is an old Socialist Party that achieved limited electoral success in British Columbia and has contributed to the province's long-standing labor and socialist tradition."
},
{
    searchString: ['ASCP', 'Alberta Social Credit Party'], 
    explanationText: "Alberta Social Credit Party"
},
/*
{
    searchString: "Socialist Party of British Columbia", 
    explanationText: "The Socialist Party of British Columbia",
    detailedText: "The Socialist Party of British Columbia is an old Socialist Party that achieved limited electoral success in British Columbia and has contributed to the province's long-standing labor and socialist tradition."
},*/
// Below organizations
{
    searchString: ['KKK', 'Ku Klux Klan'], 
    explanationText: "The Ku Klux Klan",
    detailedText: "The Knights of the Ku Klux Klan entered the province in 1926, an import from the United States. The founding American Klansmen left with the treasury in 1927 but by then, the movement had grown popular enough to warrant local leadership. They have primarily railed against the 'unassimilable' immigrants coming from Central and Eastern Europe, the French, and the Catholic Church. While KKK membership includes members of all old parties, the Conservatives and Progressives raised issues of immigration and education that drew upon prejudicies raised by the KKK in the 1929 election. In addition, the KKK has praised Anderson's ban on religious garb/symbols and French instruction in public schools."
},
{
    searchString: ['Wheat Pool'], 
    explanationText: "The Wheat Pool",
    detailedText: ""
},
{
    searchString: "STA", 
    explanationText: "The Saskatchewan Teacher's Alliance "
},
{
    searchString: "TLC", 
    explanationText: "The Trades and Labour Congress of Canada "
},
{
    searchString: "ACCL", 
    explanationText: "All-Canadian Congress of Labour "
},
{
    searchString: "CLL", 
    explanationText: "The Civic Labor League"
},
{
    searchString: "Res. Workers", 
    explanationText: "Workers in the Resouce industry (lumber, mining, etc.)"
},
// Ideologies
{
    searchString: "Social Democracy", 
    explanationText: "Social Democracy in Saskatchewan represents a moderation of the CCF's original Socialist goals as outlined in the Regina Manifesto. Social Democracy posits that the most realistic way for the CCF to maintain relevancy is to do away with the more radical aspects of the Regina Manifesto in favour of meeting immediate humanitarian needs. The Douglas government undertook in several areas state-intervention to achieve this: public ownership of utilities, government car insurance and hospitalization, marketing boards for Northern resources, and a state-owned inter-city transportation company. In other areas such as mining and O&L, the CCF has allowed private companies to take the lead, largely in part due to insufficient government expertise and funds. "
},
];


const colourList = [{
    // For organizations + parties
        word: ['CCF(SS)', 'Cooperative Commonwealth Federation (Saskatchewan Section)'],
        style: "color: #D26E28; font-weight: bold;"
    },
    {
        word: ['FLP', 'Farmer-Labour Party'],
        style: "color: #D26E28; font-weight: bold;"
    },
    {
        word: ['CCF', 'Cooperative Commonwealth Federation', 'Cooperative Commonwealth Federation (Farmer-Labour-Socialist)'],
        style: "color: #D26E28; font-weight: bold;"
    },
    {
        word: ['PFLP', 'Progressive Farmer-Labour Party'],
        style: "color: #D26E28; font-weight: bold;"
    },
    {
        word: "CPC(S)", 
        style: "color: #920c0c; font-weight: bold;"
    },
    {
        word: "LPS", 
        style: "color: #BE0028; font-weight: bold;"
    },
    {
        word: "PPS", 
        style: "color: #7e741ab3; font-weight: bold;"
    },
    {
        word: "CPS", 
        style: "color: #0055A5; font-weight: bold;"
    },
    {
        word: ["SCPS", 'Social Credit', 'Socred', 'social credit', 'socred'], 
        style: "color: #49be39; font-weight: bold;"
    },
    // Federal Parties
    {
        word: "CPC", 
        style: "color: #0055A5; font-weight: bold;"
    },
    {
        word: "UFC(SS)",
        style: "color: #86a71b; font-weight: bold;"
    },
    {
        word: "UFPA",
        style: "color: #86a71b; font-weight: bold;"
    },
    {
        word: ["ILP", 'Independent Labour Party'],
        style: "color: #b06262; font-weight: bold;"
    },
    {
        word: "ILP(S)",
        style: "color: #b06262; font-weight: bold;"
    },
    {
        word: "Cooperative Coalition", 
        style: "color: #288ed2; font-weight: bold;"
    },
    {
        word: "CCYM", 
        style: "color: #7b1616; font-weight: bold;"
    },
    {
        word: "FUL", 
        style: "color: #920c0c; font-weight: bold;"
    },
    {
        word: "WUL", 
        style: "color: #920c0c; font-weight: bold;"
    },
    {
        word: ['KKK', 'Ku Klux Klan'], 
        style: "color: #626262; font-weight: bold;"
    },
    {
        word: "STA", 
        style: "color: #b06262; font-weight: bold;"
    },
    {
        word: "TLC", 
        style: "color: #b33a3a; font-weight: bold;"
    },
    {
        word: "ACCL", 
        style: "color: #b33a3a; font-weight: bold;"
    },
    {
        word: "CLL", 
        style: "color: #ad472a; font-weight: bold;"
    },
    // Other provincial parties: 
    {
        word: ['UFA', 'United Farmers of Alberta'],
        style: "color: #86a71b; font-weight: bold;"
    },
    {
        word: ['DLP', 'Dominion Labor Party'],
        style: "color: #a7391b; font-weight: bold;"
    },
    {
        word: ['SPBC', 'Socialist Party of British Columbia', 'SPC', 'Socialist Party of Canada'],
        style: "color: #a7391b; font-weight: bold;"
    },
    {
        word: ['ASCP', 'Alberta Social Credit Party'],
        style: "color: #49be39; font-weight: bold;"
    },
    // Below Organizations
    {
        word: ['Wheat Pool'],
        style: "color: #babe39; font-weight: bold;"
    },
    // Ideologies
    {
        word: ['The Lloyd Years', 'Social Democracy: The Lloyd Years'], 
        style: "color: #e06a2a; font-weight: bold;"
    },
    {
        word: ['Communist', 'Communist Party', 'Communists', 'communist', 'communists'], 
        style: "color: #861a1a; font-weight: bold;"
    },
    {
        word: ['Liberal', 'Liberal Party', 'Grit', 'Grits'], 
        style: "color: #BE0028; font-weight: bold;"
    },
    {
        word: ['Conservative Party', 'Tory', 'Tories', 'PC', "PC's", 'Progressive Conservative', 'Progressive Conservatives', 'Progressive Conservative Party'], 
        style: "color: #0055A5; font-weight: bold;"
    },
    {
        word: ['Red Tory', 'Red Tories', 'Red Toryism'], 
        style: "color: #b7227b; font-weight: bold;"
    },
];


