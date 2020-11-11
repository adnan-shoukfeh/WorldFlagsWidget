const countryArr = [
  ["ax", "Åland Islands"],
  ["si", "Slovenia"],
  ["vg", "Virgin Islands, British"],
  ["ar", "Argentina"],
  ["tz", "Tanzania, United Republic of"],
  ["vi", "Virgin Islands, U.S."],
  ["cr", "Costa Rica"],
  ["dj", "Djibouti"],
  ["um", "United States Minor Outlying Islands"],
  ["tw", "Taiwan, Republic Of China"],
  ["gp", "Guadeloupe"],
  ["sv", "El Salvador"],
  ["bj", "Benin"],
  ["nr", "Nauru"],
  ["mt", "Malta"],
  ["aq", "Antarctica"],
  ["sr", "Suriname"],
  ["lb", "Lebanon"],
  ["td", "Chad"],
  ["no", "Norway"],
  ["ae", "United Arab Emirates"],
  ["bw", "Botswana"],
  ["rs", "Serbia"],
  ["kz", "Kazakhstan"],
  ["be", "Belgium"],
  ["ky", "Cayman Islands"],
  ["kg", "Kyrgyzstan"],
  ["gh", "Ghana"],
  ["gl", "Greenland"],
  ["mk", "Macedonia, the Former Yugoslav Republic Of"],
  ["ss", "South Sudan"],
  ["us", "United States of America"],
  ["br", "Brazil"],
  ["ny", "Northern Cyprus"],
  ["mc", "Monaco"],
  ["ai", "Anguilla"],
  ["sj", "Svalbard And Jan Mayen"],
  ["lv", "Latvia"],
  ["pk", "Pakistan"],
  ["ga", "Gabon"],
  ["pt", "Portugal"],
  ["sd", "Sudan"],
  ["ph", "Philippines"],
  ["nu", "Niue"],
  ["so", "Somalia"],
  ["gw", "Guinea-Bissau"],
  ["hr", "Croatia"],
  ["lt", "Lithuania"],
  ["tn", "Tunisia"],
  ["pn", "Pitcairn"],
  ["gs", "South Georgia and the South Sandwich Islands"],
  ["mu", "Mauritius"],
  ["ve", "Venezuela, Bolivarian Republic of"],
  ["eg", "Egypt"],
  ["jo", "Jordan"],
  ["uy", "Uruguay"],
  ["ws", "Samoa"],
  ["bs", "Bahamas"],
  ["ro", "Romania"],
  ["tl", "Timor-Leste"],
  ["gf", "French Guiana"],
  ["ly", "Libya"],
  ["li", "Liechtenstein"],
  ["ki", "Kiribati"],
  ["ao", "Angola"],
  ["re", "Réunion"],
  ["pf", "French Polynesia"],
  ["fo", "Faroe Islands"],
  ["lr", "Liberia"],
  ["lc", "Saint Lucia"],
  ["fr", "France"],
  ["cc", "Cocos (Keeling) Islands"],
  ["pa", "Panama"],
  ["cw", "Curaçao"],
  ["ck", "Cook Islands"],
  ["sl", "Sierra Leone"],
  ["bd", "Bangladesh"],
  ["bh", "Bahrain"],
  ["na", "Namibia"],
  ["de", "Germany"],
  ["in", "India"],
  ["pr", "Puerto Rico"],
  ["yt", "Mayotte"],
  ["mn", "Mongolia"],
  ["md", "Moldova, Republic of"],
  ["bq", "Bonaire, Sint Eustatius and Saba"],
  ["eu", "European Union"],
  ["gr", "Greece"],
  ["mz", "Mozambique"],
  ["jm", "Jamaica"],
  ["kn", "Saint Kitts And Nevis"],
  ["pw", "Palau"],
  ["ah", "Artsakh"],
  ["ni", "Nicaragua"],
  ["kh", "Cambodia"],
  ["at", "Austria"],
  ["bo", "Bolivia"],
  ["gb", "United Kingdom"],
  ["ee", "Estonia"],
  ["sx", "Sint Maarten"],
  ["fm", "Micronesia, Federated States Of"],
  ["km", "Comoros"],
  ["ng", "Nigeria"],
  ["st", "Sao Tome and Principe"],
  ["ps", "Palestine, State of"],
  ["ak", "Abkhazia"],
  ["ma", "Morocco"],
  ["ca", "Canada"],
  ["mg", "Madagascar"],
  ["tm", "Turkmenistan"],
  ["gd", "Grenada"],
  ["ls", "Lesotho"],
  ["ci", "Côte D'Ivoire"],
  ["sk", "Slovakia"],
  ["sh", "Saint Helena"],
  ["au", "Australia"],
  ["ug", "Uganda"],
  ["ml", "Mali"],
  ["cu", "Cuba"],
  ["vn", "Vietnam"],
  ["pl", "Poland"],
  ["tt", "Trinidad and Tobago"],
  ["za", "South Africa"],
  ["lk", "Sri Lanka"],
  ["gm", "Gambia"],
  ["sm", "San Marino"],
  ["np", "Nepal"],
  ["dk", "Denmark"],
  ["xk", "Kosovo"],
  ["dz", "Algeria"],
  ["nc", "New Caledonia"],
  ["cf", "Central African Republic"],
  ["zm", "Zambia"],
  ["tr", "Turkey"],
  ["ru", "Russian Federation"],
  ["eh", "Western Sahara"],
  ["io", "British Indian Ocean Territory"],
  ["ne", "Niger"],
  ["vc", "Saint Vincent And The Grenadines"],
  ["fj", "Fiji"],
  ["cm", "Cameroon"],
  ["am", "Armenia"],
  ["it", "Italy"],
  ["al", "Albania"],
  ["pe", "Peru"],
  ["mr", "Mauritania"],
  ["me", "Montenegro"],
  ["ua", "Ukraine"],
  ["rw", "Rwanda"],
  ["gq", "Equatorial Guinea"],
  ["cd", "Congo, The Democratic Republic Of The"],
  ["bl", "Saint Barthélemy"],
  ["cg", "Congo"],
  ["ec", "Ecuador"],
  ["sb", "Solomon Islands"],
  ["co", "Colombia"],
  ["nl", "Netherlands"],
  ["mv", "Maldives"],
  ["sa", "Saudi Arabia"],
  ["az", "Azerbaijan"],
  ["kr", "Korea, Republic of"],
  ["jp", "Japan"],
  ["cl", "Chile"],
  ["id", "Indonesia"],
  ["bn", "Brunei Darussalam"],
  ["iq", "Iraq"],
  ["fk", "Falkland Islands (Malvinas)"],
  ["er", "Eritrea"],
  ["es", "Spain"],
  ["bf", "Burkina Faso"],
  ["la", "Lao People's Democratic Republic"],
  ["sg", "Singapore"],
  ["do", "Dominican Republic"],
  ["sz", "Swaziland"],
  ["to", "Tonga"],
  ["tf", "French Southern Territories"],
  ["nf", "Norfolk Island"],
  ["bz", "Belize"],
  ["th", "Thailand"],
  ["tk", "Tokelau"],
  ["gg", "Guernsey"],
  ["im", "Isle of Man"],
  ["hm", "Heard and McDonald Islands"],
  ["mf", "Saint Martin"],
  ["af", "Afghanistan"],
  ["nz", "New Zealand"],
  ["sy", "Syrian Arab Republic"],
  ["et", "Ethiopia"],
  ["aw", "Aruba"],
  ["sn", "Senegal"],
  ["hk", "Hong Kong"],
  ["py", "Paraguay"],
  ["ke", "Kenya"],
  ["gy", "Guyana"],
  ["zw", "Zimbabwe"],
  ["ch", "Switzerland"],
  ["se", "Sweden"],
  ["as", "American Samoa"],
  ["gi", "Gibraltar"],
  ["dm", "Dominica"],
  ["bb", "Barbados"],
  ["tg", "Togo"],
  ["pg", "Papua New Guinea"],
  ["om", "Oman"],
  ["my", "Malaysia"],
  ["ba", "Bosnia and Herzegovina"],
  ["mq", "Martinique"],
  ["gu", "Guam"],
  ["mm", "Myanmar"],
  ["uz", "Uzbekistan"],
  ["bg", "Bulgaria"],
  ["gn", "Guinea"],
  ["lu", "Luxembourg"],
  ["pm", "Saint Pierre And Miquelon"],
  ["cx", "Christmas Island"],
  ["ag", "Antigua and Barbuda"],
  ["sc", "Seychelles"],
  ["tv", "Tuvalu"],
  ["ad", "Andorra"],
  ["ge", "Georgia"],
  ["ir", "Iran, Islamic Republic Of"],
  ["ht", "Haiti"],
  ["mo", "Macao"],
  ["bm", "Bermuda"],
  ["hn", "Honduras"],
  ["fi", "Finland"],
  ["bv", "Bouvet Island"],
  ["cv", "Cape Verde"],
  ["mp", "Northern Mariana Islands"],
  ["ie", "Ireland"],
  ["by", "Belarus"],
  ["ms", "Montserrat"],
  ["hu", "Hungary"],
  ["wf", "Wallis and Futuna"],
  ["mh", "Marshall Islands"],
  ["tc", "Turks and Caicos Islands"],
  ["bi", "Burundi"],
  ["qa", "Qatar"],
  ["vu", "Vanuatu"],
  ["kw", "Kuwait"],
  ["je", "Jersey"],
  ["mw", "Malawi"],
  ["tj", "Tajikistan"],
  ["cn", "China"],
  ["mx", "Mexico"],
  ["gt", "Guatemala"],
  ["an", "Netherlands Antilles"],
  ["is", "Iceland"],
  ["cy", "Cyprus"],
  ["kp", "Korea, Democratic People's Republic Of"],
  ["bt", "Bhutan"],
  ["va", "Holy See (Vatican City State)"],
  ["ye", "Yemen"],
  ["cz", "Czech Republic"]
]

const numCountries = 254
var counter = Math.floor(Math.random() * numCountries)
var countryCode = countryArr[counter][0]
var countryName = countryArr[counter][1]
var url = `https://www.countryflags.io/${countryCode}/flat/64.png`
const req = new Request(url)
const res = await req.loadImage()



if (config.runsInWidget) {
  //   create and show widget
  let widget = createWidget("Random Flag", res, countryName , "0d1827")
  Script.setWidget(widget)
  Script.complete()
}

function createRowTxt(title, flag) {
  let row = new UITableRow()
  row.addText(title)
  row.addImage(flag)
  return row
}


function createWidget(pretitle, flagimg, countryname, color) {
  let w = new ListWidget()
  w.backgroundColor = new Color(color)
  let preTxt = w.addText(pretitle)
  preTxt.textColor = Color.white()
  preTxt.textOpacity = 0.7
  preTxt.font = Font.systemFont(15)
  w.addSpacer(1)
  let flagPic = w.addImage(flagimg)
  flagPic.centerAlignImage()
  w.addSpacer(2)
  let subTxt = w.addText(countryname)
  subTxt.textColor = Color.white()
  subTxt.font = Font.systemFont(16)
  subTxt.centerAlignText()

  w.addSpacer(5)
  // Add button to open google search of country
  let linkSymbol = SFSymbol.named("arrow.up.forward")
  let footerStack = w.addStack()
  let linkStack = footerStack.addStack()
  linkStack.centerAlignContent()
  var words = countryName.split(" ")
  var answer = words[0]
  for (var i = 1; i < words.length; i += 1) {
    answer += "+" + words
  }
  linkStack.url = "https://www.google.com/search?q=" + answer
  let linkElement = linkStack.addText("Read more")
  linkElement.font = Font.mediumSystemFont(13)
  linkElement.textColor = Color.blue()
  linkStack.addSpacer(3)
  let linkSymbolElement = linkStack.addImage(linkSymbol.image)
  linkSymbolElement.imageSize = new Size(11, 11)
  linkSymbolElement.tintColor = Color.blue()
  footerStack.addSpacer()
  return w
 }
