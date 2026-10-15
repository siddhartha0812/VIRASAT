const HERITAGE=[
{
    id:'chikankari',
    title:'Chikankari',
    state:'Uttar Pradesh',
    city:'Lucknow',
    category:'Textiles',
    description:'Delicate hand embroidery, known for its fine white-on-white stitches.',
    history:'Chikankari is a celebrated embroidery tradition closely associated with Lucknow. Its refined vocabulary of stitches continues to be learned and adapted by artisan communities.',
    significance:'It carries a living language of patience, skill and local identity.',
    process:[
        'Design','Tracing','Embroidery','Finishing'
    ],
    artisan:{
        name:'Shabnam Khan',
        place:'Lucknow',
        experience:'22 years',
        story:'Shabnam works with her family to keep fine hand embroidery visible to new generations.'
    },
    coordinates:[
        26.8467,80.9462
    ],
    image:'https://images.pexels.com/photos/28512779/pexels-photo-28512779.jpeg?auto=format&fit=crop&w=1200&q=80',
    tags:[
        'lucknow','embroidery','craft','textile'
    ],
    code:'CHIKANKARI-001'},

{
    id:'blue-pottery',
    title:'Blue Pottery',
    state:'Rajasthan',
    city:'Jaipur',
    category:'Crafts',
    description:'Vivid cobalt ceramic work shaped by Jaipur’s artisan traditions.',
    history:'Jaipur blue pottery is admired for its luminous palette and decorative floral forms.',
    significance:'A meeting point of material knowledge, design and regional craft.',
    process:['Mix','Mould','Paint','Fire'],
    artisan:{
        name:'Kavita Sharma',
        place:'Jaipur',
        experience:'16 years',
        story:'Kavita creates contemporary forms while honouring inherited methods.'
    },
    coordinates:[26.9124,75.7873],

    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Blue%20pottery%20from%20Jaipur.jpg?auto=format&fit=crop&w=1200&q=80',

    tags:['jaipur','ceramic','rajasthan'],
    code:'BLUEPOTTERY-001'
},

{
    id:'madhubani',
    title:'Madhubani Painting',
    state:'Bihar',
    city:'Mithila',
    category:'Art',
    description:'Narrative folk painting filled with line, colour and symbolic life.',
    history:'Madhubani painting developed in the Mithila region and is known for richly patterned storytelling.',
    significance:'Its imagery connects domestic spaces, mythology and the natural world.',
    process:['Prepare','Sketch','Colour','Detail'],
    artisan:{
        name:'Meera Devi',
        place:'Mithila, Bihar',
        experience:'18 years',
        story:'Meera teaches young artists the grammar of traditional motifs.'
    },
    coordinates:[26.3467,86.0715],

    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mithila%20Painting%20at%20Patna%20Junction.jpg?auto=format&fit=crop&w=1200&q=80',

    tags:['bihar','mithila','painting','folk'],
    code:'MADHUBANI-001'
},

{
    id:'kalamkari',
    title:'Kalamkari',
    state:'Andhra Pradesh',
    city:'Srikalahasti',
    category:'Textiles',
    description:'Hand-drawn and block-printed textile art with story-rich motifs.',
    history:'Kalamkari traditions use natural dyes and a patient sequence of drawing and colour application.',
    significance:'A textile form where narrative and craft meet.',
    process:['Wash','Draw','Dye','Finish'],
    artisan:{
        name:'Anil Rao',
        place:'Srikalahasti',
        experience:'25 years',
        story:'Anil safeguards natural-dye practices in his workshop.'
    },
    coordinates:[13.749,79.698],

    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kalamkari.jpg?auto=format&fit=crop&w=1200&q=80',

    tags:['andhra','textile','block print'],
    code:'KALAMKARI-001'
},

{
    id:'pashmina',
    title:'Pashmina',
    state:'Kashmir',
    city:'Srinagar',
    category:'Textiles',
    description:'Fine woven wool craft from the Himalayan region.',
    history:'Pashmina weaving represents deep knowledge of fibre, climate and loom work.',
    significance:'A celebrated textile heritage with exceptional material sensitivity.',
    process:['Sort','Spin','Weave','Finish'],
    artisan:{
        name:'Yusuf Mir',
        place:'Srinagar',
        experience:'29 years',
        story:'Yusuf’s family has worked with handlooms for generations.'
    },
    coordinates:[34.0837,74.7973],

    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Handwoven-kashmir-pashmina.jpg?auto=format&fit=crop&w=1200&q=80',

    tags:['kashmir','shawl','weaving'],
    code:'PASHMINA-001'
},

{
    id:'warli',
    title:'Warli Art',
    state:'Maharashtra',
    city:'Palghar',
    category:'Art',
    description:'Geometric folk art that turns everyday life into powerful visual stories.',
    history:'Warli painting is traditionally created with a restrained vocabulary of circles, triangles and lines.',
    significance:'It makes community, movement and landscape visible through simple forms.',
    process:['Prepare','Compose','Paint','Share'],
    artisan:{
        name:'Suresh Vagh',
        place:'Palghar',
        experience:'20 years',
        story:'Suresh brings village stories into public art workshops.'
    },
    coordinates:[19.6967,72.765],
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Warli%20painting.jpg?auto=format&fit=crop&w=1200&q=80',
    tags:['maharashtra','painting','tribal'],
    code:'WARLI-001'
},

{
    id:'dhokra',
    title:'Dhokra',
    state:'Chhattisgarh',
    city:'Kondagaon',
    category:'Crafts',
    description:'Ancient lost-wax metal casting with a distinct hand-made texture.',
    history:'Dhokra uses a labour-intensive lost-wax casting process practiced across several regions.',
    significance:'Every piece records the maker’s touch and process.',
    process:['Model','Wax','Cast','Polish'],
    artisan:{
        name:'Ramesh Lal',
        place:'Kondagaon',
        experience:'31 years',
        story:'Ramesh passes on casting knowledge through apprentice-led sessions.'
    },
    coordinates:[19.5909,81.664],
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dokra%20Art.jpg?auto=format&fit=crop&w=1200&q=80',
    tags:['metal','chhattisgarh','craft'],
    code:'DHOKRA-001'
},

{
    id:'kathak',
    title:'Kathak',
    state:'North India',
    city:'Delhi',
    category:'Dance',
    description:'Classical dance shaped by rhythm, gesture and storytelling.',
    history:'Kathak evolved through storytelling traditions and later developed formal performance vocabularies.',
    significance:'Its footwork and expression make narrative an embodied art.',
    process:['Rhythm','Gesture','Practice','Perform'],
    artisan:{
        name:'Naina Kapoor',
        place:'Delhi',
        experience:'17 years',
        story:'Naina leads accessible introductions to classical dance.'
    },
    coordinates:[28.6139,77.209],
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kathak%20dancer.jpg?auto=format&fit=crop&w=1200&q=80',
    tags:['dance','classical','delhi'],
    code:'KATHAK-001'
},

{
    id:'bharatanatyam',
    title:'Bharatanatyam',
    state:'Tamil Nadu',
    city:'Chennai',
    category:'Dance',
    description:'A classical Indian dance tradition combining music, rhythm and expression.',
    history:'Bharatanatyam has a rich performance vocabulary rooted in south Indian artistic practice.',
    significance:'It preserves layered forms of storytelling through movement.',
    process:['Learn','Rehearse','Express','Perform'],
    artisan:{
        name:'Priya Iyer',
        place:'Chennai',
        experience:'21 years',
        story:'Priya mentors performers in both technique and interpretation.'
    },
    coordinates:[13.0827,80.2707],
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Barathanatyam%20dancer.jpg?auto=format&fit=crop&w=1200&q=80',
    tags:['tamil nadu','dance','chennai'],
    code:'BHARAT-001'
},

{
    id:'onam',
    title:'Onam',
    state:'Kerala',
    city:'Kochi',
    category:'Festivals',
    description:'A Kerala festival of floral art, food and shared celebration.',
    history:'Onam is observed with traditions including pookalam, communal meals and performance.',
    significance:'It foregrounds hospitality, memory and local seasonal culture.',
    process:['Gather','Create','Celebrate','Share'],
    artisan:{
        name:'Anjali Nair',
        place:'Kochi',
        experience:'14 years',
        story:'Anjali documents festival food and flower traditions.'
    },
    coordinates:[9.9312,76.2673],
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Onam%20kerala.JPG?auto=format&fit=crop&w=1200&q=80',
    tags:['kerala','festival','food'],
    code:'ONAM-001'
}
];
const FACTS=[
    'Chikankari is traditionally associated with Lucknow.',
    'Warli painting uses a beautifully economical language of geometric forms.',
    'Madhubani painting originated in the Mithila region.',
    'Dhokra casting uses a lost-wax process.'
];
