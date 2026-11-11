/* PALE LODGE // CANONICAL TEAM 009 ARCHIVE
   Archive timekeeping: one cycle equals 13 Earth days.
   57 expedition/personnel snapshots across Cycles 0282–0843 (~20 Earth years).
   Records are NOT consecutive roster changes; gaps reflect operations and downtime.
   Cycle 0844 remains the current recruitment cycle with three UNASSIGNED slots.
   An optional fourth Cycle 0844 slot is planned for the future Strider Relay,
   not yet active on this standalone historical archive.
   The originalCycle field retains each record's original source number
   (0742–0798) for provenance and is not a current in-world date.
   57 historical records, 117 unique Striders, 171 deployment slots;
   98 deceased, 18 permanent transfers, 1 retirement.
   Historical portrait references and all approved portrait descriptions
   are preserved, with the Pale Lodge emblem as the missing-image fallback.
*/
window.TEAM009_DATA = {
  "cycles": [
    {
      "number": 844,
      "mission": "Current Team 009 Recruitment",
      "location": "Pale Lodge",
      "annex": "Personnel Assignment Pending",
      "members": [
        {
          "id": null,
          "name": "UNASSIGNED",
          "species": null,
          "status": "PENDING"
        },
        {
          "id": null,
          "name": "UNASSIGNED",
          "species": null,
          "status": "PENDING"
        },
        {
          "id": null,
          "name": "UNASSIGNED",
          "species": null,
          "status": "PENDING"
        }
      ]
    },
    {
      "number": 843,
      "mission": "The Lighthouse Beneath the Desert",
      "location": "Sunken Kingdom of Vael-Sarith",
      "annex": "L-5528",
      "originalCycle": 798,
      "members": [
        {
          "id": "009-0110",
          "name": "Darran Blackmere",
          "species": "Half-Orc",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 782,
          "lastCycle": 843,
          "serviceCycles": [
            843,
            818,
            794,
            782
          ],
          "finalExpedition": "The Lighthouse Beneath the Desert",
          "portrait": "assets/portraits/009-0110.webp"
        },
        {
          "id": "009-0116",
          "name": "Nerissa Tideveil",
          "species": "Water Genasi",
          "universe": "D&D 5e",
          "status": "TRANSFERRED",
          "firstCycle": 843,
          "lastCycle": 843,
          "serviceCycles": [
            843
          ],
          "finalExpedition": "The Lighthouse Beneath the Desert",
          "transferDivision": "Pale Lodge Dimensional Hydrography & Submerged Realities Division",
          "transferNote": "Survived the Vael-Sarith expedition, then permanently reassigned after Cycle 0843; ineligible to return to Team 009.",
          "portrait": "assets/portraits/009-0116.webp"
        },
        {
          "id": "009-0117",
          "name": "The One Who Remembers Tides",
          "species": "Hanar",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 843,
          "lastCycle": 843,
          "serviceCycles": [
            843
          ],
          "finalExpedition": "The Lighthouse Beneath the Desert",
          "portrait": "assets/portraits/009-0117.webp"
        }
      ]
    },
    {
      "number": 818,
      "mission": "The Post Office at the End of the World",
      "location": "Last Township of Greyhaven",
      "annex": "P-4168",
      "originalCycle": 797,
      "members": [
        {
          "id": "009-0110",
          "name": "Darran Blackmere",
          "species": "Half-Orc",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 782,
          "lastCycle": 843,
          "serviceCycles": [
            843,
            818,
            794,
            782
          ],
          "finalExpedition": "The Lighthouse Beneath the Desert",
          "portrait": "assets/portraits/009-0110.webp"
        },
        {
          "id": "009-0114",
          "name": "Brynna Copperseal",
          "species": "Hill Dwarf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 818,
          "lastCycle": 818,
          "serviceCycles": [
            818
          ],
          "finalExpedition": "The Post Office at the End of the World",
          "portrait": "assets/portraits/009-0114.webp"
        },
        {
          "id": "009-0115",
          "name": "Perrik Voss",
          "species": "Ysoki",
          "universe": "Starfinder",
          "status": "TRANSFERRED",
          "firstCycle": 818,
          "lastCycle": 818,
          "serviceCycles": [
            818
          ],
          "finalExpedition": "The Post Office at the End of the World",
          "transferDivision": "Pale Lodge Interdimensional Communications & Courier Systems Division",
          "portrait": "assets/portraits/009-0115.webp"
        }
      ]
    },
    {
      "number": 794,
      "mission": "The Wedding at the End of Winter",
      "location": "Frostbound Palace of Eirathen",
      "annex": "H-8264",
      "originalCycle": 796,
      "members": [
        {
          "id": "009-0110",
          "name": "Darran Blackmere",
          "species": "Half-Orc",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 782,
          "lastCycle": 843,
          "serviceCycles": [
            843,
            818,
            794,
            782
          ],
          "finalExpedition": "The Lighthouse Beneath the Desert",
          "portrait": "assets/portraits/009-0110.webp"
        },
        {
          "id": "009-0112",
          "name": "Elaris Wintermere",
          "species": "High Elf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 794,
          "lastCycle": 794,
          "serviceCycles": [
            794
          ],
          "finalExpedition": "The Wedding at the End of Winter",
          "portrait": "assets/portraits/009-0112.webp"
        },
        {
          "id": "009-0113",
          "name": "Tavros Kel",
          "species": "Muun",
          "universe": "Star Wars",
          "status": "DECEASED",
          "firstCycle": 794,
          "lastCycle": 794,
          "serviceCycles": [
            794
          ],
          "finalExpedition": "The Wedding at the End of Winter",
          "portrait": "assets/portraits/009-0113.webp"
        }
      ]
    },
    {
      "number": 782,
      "mission": "The Cemetery of Unfinished Wars",
      "location": "Ashen Plains of Vel-Kareth",
      "annex": "G-1937",
      "originalCycle": 795,
      "members": [
        {
          "id": "009-0106",
          "name": "Rhaelis Sunstride",
          "species": "Pahtra",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 732,
          "lastCycle": 782,
          "serviceCycles": [
            782,
            767,
            751,
            732
          ],
          "finalExpedition": "The Cemetery of Unfinished Wars",
          "portrait": "assets/portraits/009-0106.webp"
        },
        {
          "id": "009-0110",
          "name": "Darran Blackmere",
          "species": "Half-Orc",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 782,
          "lastCycle": 843,
          "serviceCycles": [
            843,
            818,
            794,
            782
          ],
          "finalExpedition": "The Lighthouse Beneath the Desert",
          "portrait": "assets/portraits/009-0110.webp"
        },
        {
          "id": "009-0111",
          "name": "Veyra Seln",
          "species": "Chiss",
          "universe": "Star Wars",
          "status": "DECEASED",
          "firstCycle": 782,
          "lastCycle": 782,
          "serviceCycles": [
            782
          ],
          "finalExpedition": "The Cemetery of Unfinished Wars",
          "portrait": "assets/portraits/009-0111.webp"
        }
      ]
    },
    {
      "number": 767,
      "mission": "The Moon That Knocked Three Times",
      "location": "Tidal Kingdom of Orravelle",
      "annex": "M-7406",
      "originalCycle": 794,
      "members": [
        {
          "id": "009-0106",
          "name": "Rhaelis Sunstride",
          "species": "Pahtra",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 732,
          "lastCycle": 782,
          "serviceCycles": [
            782,
            767,
            751,
            732
          ],
          "finalExpedition": "The Cemetery of Unfinished Wars",
          "portrait": "assets/portraits/009-0106.webp"
        },
        {
          "id": "009-0108",
          "name": "Mara Vellthorne",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 767,
          "lastCycle": 767,
          "serviceCycles": [
            767
          ],
          "finalExpedition": "The Moon That Knocked Three Times",
          "portrait": "assets/portraits/009-0108.webp"
        },
        {
          "id": "009-0109",
          "name": "Korvak Threnn",
          "species": "Shobhad",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 767,
          "lastCycle": 767,
          "serviceCycles": [
            767
          ],
          "finalExpedition": "The Moon That Knocked Three Times",
          "portrait": "assets/portraits/009-0109.webp"
        }
      ]
    },
    {
      "number": 751,
      "mission": "The Parliament of Empty Thrones",
      "location": "Crownless City of Avarenne",
      "annex": "V-6328",
      "originalCycle": 793,
      "members": [
        {
          "id": "009-0102",
          "name": "Theron Valecrest",
          "species": "Half-Elf",
          "universe": "D&D 5e",
          "status": "TRANSFERRED",
          "firstCycle": 727,
          "lastCycle": 751,
          "serviceCycles": [
            751,
            732,
            727
          ],
          "finalExpedition": "The Parliament of Empty Thrones",
          "transferDivision": "Pale Lodge Diplomatic Anomalies & Interdimensional Governance Division",
          "portrait": "assets/portraits/009-0102.webp"
        },
        {
          "id": "009-0106",
          "name": "Rhaelis Sunstride",
          "species": "Pahtra",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 732,
          "lastCycle": 782,
          "serviceCycles": [
            782,
            767,
            751,
            732
          ],
          "finalExpedition": "The Cemetery of Unfinished Wars",
          "portrait": "assets/portraits/009-0106.webp"
        },
        {
          "id": "009-0107",
          "name": "Ilyssara Venn",
          "species": "Lashunta",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 751,
          "lastCycle": 751,
          "serviceCycles": [
            751
          ],
          "finalExpedition": "The Parliament of Empty Thrones",
          "portrait": "assets/portraits/009-0107.webp"
        }
      ]
    },
    {
      "number": 732,
      "mission": "The City Beneath the Last Sunrise",
      "location": "Buried Metropolis of Solmara",
      "annex": "C-2816",
      "originalCycle": 792,
      "members": [
        {
          "id": "009-0102",
          "name": "Theron Valecrest",
          "species": "Half-Elf",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 727,
          "lastCycle": 751,
          "serviceCycles": [
            751,
            732,
            727
          ],
          "finalExpedition": "The Parliament of Empty Thrones",
          "transferDivision": "Pale Lodge Diplomatic Anomalies & Interdimensional Governance Division",
          "portrait": "assets/portraits/009-0102.webp"
        },
        {
          "id": "009-0105",
          "name": "Brunna Emberpick",
          "species": "Hill Dwarf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 732,
          "lastCycle": 732,
          "serviceCycles": [
            732
          ],
          "finalExpedition": "The City Beneath the Last Sunrise",
          "portrait": "assets/portraits/009-0105.webp"
        },
        {
          "id": "009-0106",
          "name": "Rhaelis Sunstride",
          "species": "Pahtra",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 732,
          "lastCycle": 782,
          "serviceCycles": [
            782,
            767,
            751,
            732
          ],
          "finalExpedition": "The Cemetery of Unfinished Wars",
          "portrait": "assets/portraits/009-0106.webp"
        }
      ]
    },
    {
      "number": 727,
      "mission": "The House That Kept Its Guests",
      "location": "Everlasting Estate of Bellwraith",
      "annex": "J-7193",
      "originalCycle": 791,
      "members": [
        {
          "id": "009-0102",
          "name": "Theron Valecrest",
          "species": "Half-Elf",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 727,
          "lastCycle": 751,
          "serviceCycles": [
            751,
            732,
            727
          ],
          "finalExpedition": "The Parliament of Empty Thrones",
          "transferDivision": "Pale Lodge Diplomatic Anomalies & Interdimensional Governance Division",
          "portrait": "assets/portraits/009-0102.webp"
        },
        {
          "id": "009-0103",
          "name": "Seyra Khel",
          "species": "Drell",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 727,
          "lastCycle": 727,
          "serviceCycles": [
            727
          ],
          "finalExpedition": "The House That Kept Its Guests",
          "portrait": "assets/portraits/009-0103.webp"
        },
        {
          "id": "009-0104",
          "name": "The Third Uninvited",
          "species": "Vesperwraith",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 727,
          "lastCycle": 727,
          "serviceCycles": [
            727
          ],
          "finalExpedition": "The House That Kept Its Guests",
          "portrait": "assets/portraits/009-0104.webp"
        }
      ]
    },
    {
      "number": 725,
      "mission": "The Museum of Tomorrow's Extinctions",
      "location": "Last Menagerie of Vhal-Sor",
      "annex": "E-4409",
      "originalCycle": 790,
      "members": [
        {
          "id": "009-0096",
          "name": "Pellik Sixpockets",
          "species": "Skittermander",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 715,
          "lastCycle": 725,
          "serviceCycles": [
            725,
            716,
            715
          ],
          "finalExpedition": "The Museum of Tomorrow's Extinctions",
          "portrait": "assets/portraits/009-0096.webp"
        },
        {
          "id": "009-0100",
          "name": "Keshi-of-the-Quiet-Brood",
          "species": "Shirren",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 725,
          "lastCycle": 725,
          "serviceCycles": [
            725
          ],
          "finalExpedition": "The Museum of Tomorrow's Extinctions",
          "portrait": "assets/portraits/009-0100.webp"
        },
        {
          "id": "009-0101",
          "name": "Naree Vossk",
          "species": "Bothan",
          "universe": "Star Wars",
          "status": "DECEASED",
          "firstCycle": 725,
          "lastCycle": 725,
          "serviceCycles": [
            725
          ],
          "finalExpedition": "The Museum of Tomorrow's Extinctions",
          "portrait": "assets/portraits/009-0101.webp"
        }
      ]
    },
    {
      "number": 716,
      "mission": "The Lighthouse That Followed Us",
      "location": "Wandering Coast of Eshmar",
      "annex": "L-3087",
      "originalCycle": 789,
      "members": [
        {
          "id": "009-0096",
          "name": "Pellik Sixpockets",
          "species": "Skittermander",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 715,
          "lastCycle": 725,
          "serviceCycles": [
            725,
            716,
            715
          ],
          "finalExpedition": "The Museum of Tomorrow's Extinctions",
          "portrait": "assets/portraits/009-0096.webp"
        },
        {
          "id": "009-0098",
          "name": "Maerith Seaborn",
          "species": "Sea Elf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 716,
          "lastCycle": 716,
          "serviceCycles": [
            716
          ],
          "finalExpedition": "The Lighthouse That Followed Us",
          "portrait": "assets/portraits/009-0098.webp"
        },
        {
          "id": "009-0099",
          "name": "Captain Isolde Marr",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "TRANSFERRED",
          "firstCycle": 716,
          "lastCycle": 716,
          "serviceCycles": [
            716
          ],
          "finalExpedition": "The Lighthouse That Followed Us",
          "transferDivision": "Pale Lodge Dimensional Cartography Division",
          "gender": "Male",
          "portrait": "assets/portraits/009-0099.webp"
        }
      ]
    },
    {
      "number": 715,
      "mission": "The Market of Stolen Tomorrows",
      "location": "Gilded Bazaar of Oris-Vey",
      "annex": "H-6614",
      "originalCycle": 788,
      "members": [
        {
          "id": "009-0094",
          "name": "Borrik Frostvein",
          "species": "Mountain Dwarf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 711,
          "lastCycle": 715,
          "serviceCycles": [
            715,
            711
          ],
          "finalExpedition": "The Market of Stolen Tomorrows",
          "portrait": "assets/portraits/009-0094.webp"
        },
        {
          "id": "009-0096",
          "name": "Pellik Sixpockets",
          "species": "Skittermander",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 715,
          "lastCycle": 725,
          "serviceCycles": [
            725,
            716,
            715
          ],
          "finalExpedition": "The Museum of Tomorrow's Extinctions",
          "portrait": "assets/portraits/009-0096.webp"
        },
        {
          "id": "009-0097",
          "name": "Orren-of-the-Last-Bargain",
          "species": "Veylkin",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 715,
          "lastCycle": 715,
          "serviceCycles": [
            715
          ],
          "finalExpedition": "The Market of Stolen Tomorrows",
          "portrait": "assets/portraits/009-0097.webp"
        }
      ]
    },
    {
      "number": 711,
      "mission": "The Bells Beneath the Ice",
      "location": "Frozen City of Nareth-Voss",
      "annex": "V-9172",
      "originalCycle": 787,
      "members": [
        {
          "id": "009-0089",
          "name": "Vexa-12",
          "species": "Android",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 696,
          "lastCycle": 711,
          "serviceCycles": [
            711,
            709,
            696
          ],
          "finalExpedition": "The Bells Beneath the Ice",
          "portrait": "assets/portraits/009-0089.webp"
        },
        {
          "id": "009-0094",
          "name": "Borrik Frostvein",
          "species": "Mountain Dwarf",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 711,
          "lastCycle": 715,
          "serviceCycles": [
            715,
            711
          ],
          "finalExpedition": "The Market of Stolen Tomorrows",
          "portrait": "assets/portraits/009-0094.webp"
        },
        {
          "id": "009-0095",
          "name": "Tilda Brasswhistle",
          "species": "Rock Gnome",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 711,
          "lastCycle": 711,
          "serviceCycles": [
            711
          ],
          "finalExpedition": "The Bells Beneath the Ice",
          "portrait": "assets/portraits/009-0095.webp"
        }
      ]
    },
    {
      "number": 709,
      "mission": "The Forest That Grew Downward",
      "location": "Hanging Wilds of Vaelith",
      "annex": "K-2049",
      "originalCycle": 786,
      "members": [
        {
          "id": "009-0089",
          "name": "Vexa-12",
          "species": "Android",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 696,
          "lastCycle": 711,
          "serviceCycles": [
            711,
            709,
            696
          ],
          "finalExpedition": "The Bells Beneath the Ice",
          "portrait": "assets/portraits/009-0089.webp"
        },
        {
          "id": "009-0092",
          "name": "Aelira Thornweave",
          "species": "Wood Elf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 709,
          "lastCycle": 709,
          "serviceCycles": [
            709
          ],
          "finalExpedition": "The Forest That Grew Downward",
          "portrait": "assets/portraits/009-0092.webp"
        },
        {
          "id": "009-0093",
          "name": "Korrin Nightstride",
          "species": "Pahtra",
          "universe": "Starfinder",
          "status": "TRANSFERRED",
          "firstCycle": 709,
          "lastCycle": 709,
          "serviceCycles": [
            709
          ],
          "finalExpedition": "The Forest That Grew Downward",
          "transferDivision": "Pale Lodge Temporal Ecology & Inverted Biomes Division",
          "portrait": "assets/portraits/009-0093.webp"
        }
      ]
    },
    {
      "number": 696,
      "mission": "The City That Wore Our Faces",
      "location": "Mirrored City of Caldris",
      "annex": "Q-5813",
      "originalCycle": 785,
      "members": [
        {
          "id": "009-0089",
          "name": "Vexa-12",
          "species": "Android",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 696,
          "lastCycle": 711,
          "serviceCycles": [
            711,
            709,
            696
          ],
          "finalExpedition": "The Bells Beneath the Ice",
          "portrait": "assets/portraits/009-0089.webp"
        },
        {
          "id": "009-0090",
          "name": "Rellin Ashbrook",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 696,
          "lastCycle": 696,
          "serviceCycles": [
            696
          ],
          "finalExpedition": "The City That Wore Our Faces",
          "portrait": "assets/portraits/009-0090.webp"
        },
        {
          "id": "009-0091",
          "name": "Elyss-of-the-Unwritten",
          "species": "Glyphborn",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 696,
          "lastCycle": 696,
          "serviceCycles": [
            696
          ],
          "finalExpedition": "The City That Wore Our Faces",
          "portrait": "assets/portraits/009-0091.webp"
        }
      ]
    },
    {
      "number": 688,
      "mission": "The Sea That Knows Your Name",
      "location": "Drowned Kingdom of Velmora",
      "annex": "R-8461",
      "originalCycle": 784,
      "members": [
        {
          "id": "009-0083",
          "name": "Drenrik Voss",
          "species": "Hobgoblin",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 672,
          "lastCycle": 688,
          "serviceCycles": [
            688,
            675,
            672
          ],
          "finalExpedition": "The Sea That Knows Your Name",
          "portrait": "assets/portraits/009-0083.webp"
        },
        {
          "id": "009-0087",
          "name": "Serava T'Korin",
          "species": "Asari",
          "universe": "Mass Effect",
          "status": "TRANSFERRED",
          "firstCycle": 688,
          "lastCycle": 688,
          "serviceCycles": [
            688
          ],
          "finalExpedition": "The Sea That Knows Your Name",
          "transferDivision": "Pale Lodge Deepwater Anomalies & Submerged Civilizations Division",
          "portrait": "assets/portraits/009-0087.webp"
        },
        {
          "id": "009-0088",
          "name": "Kaelor Tideborn",
          "species": "Triton",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 688,
          "lastCycle": 688,
          "serviceCycles": [
            688
          ],
          "finalExpedition": "The Sea That Knows Your Name",
          "portrait": "assets/portraits/009-0088.webp"
        }
      ]
    },
    {
      "number": 675,
      "mission": "The Town That Buried the Moon",
      "location": "Village of Mournhollow",
      "annex": "H-3076",
      "originalCycle": 783,
      "members": [
        {
          "id": "009-0083",
          "name": "Drenrik Voss",
          "species": "Hobgoblin",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 672,
          "lastCycle": 688,
          "serviceCycles": [
            688,
            675,
            672
          ],
          "finalExpedition": "The Sea That Knows Your Name",
          "portrait": "assets/portraits/009-0083.webp"
        },
        {
          "id": "009-0085",
          "name": "Isera-of-the-Hollow-Sky",
          "species": "Noctilith",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 675,
          "lastCycle": 675,
          "serviceCycles": [
            675
          ],
          "finalExpedition": "The Town That Buried the Moon",
          "portrait": "assets/portraits/009-0085.webp"
        },
        {
          "id": "009-0086",
          "name": "Orwyn Hollowbark",
          "species": "Firbolg",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 675,
          "lastCycle": 675,
          "serviceCycles": [
            675
          ],
          "finalExpedition": "The Town That Buried the Moon",
          "portrait": "assets/portraits/009-0086.webp"
        }
      ]
    },
    {
      "number": 672,
      "mission": "The Orchard of Second Chances",
      "location": "Glassroot Vale",
      "annex": "F-6217",
      "originalCycle": 782,
      "members": [
        {
          "id": "009-0079",
          "name": "Vaela Tesh",
          "species": "Angara",
          "universe": "Mass Effect Andromeda",
          "status": "DECEASED",
          "firstCycle": 636,
          "lastCycle": 672,
          "serviceCycles": [
            672,
            638,
            636
          ],
          "finalExpedition": "The Orchard of Second Chances",
          "portrait": "assets/portraits/009-0079.webp"
        },
        {
          "id": "009-0083",
          "name": "Drenrik Voss",
          "species": "Hobgoblin",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 672,
          "lastCycle": 688,
          "serviceCycles": [
            688,
            675,
            672
          ],
          "finalExpedition": "The Sea That Knows Your Name",
          "portrait": "assets/portraits/009-0083.webp"
        },
        {
          "id": "009-0084",
          "name": "Pipra Copperwhisk",
          "species": "Ysoki",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 672,
          "lastCycle": 672,
          "serviceCycles": [
            672
          ],
          "finalExpedition": "The Orchard of Second Chances",
          "portrait": "assets/portraits/009-0084.webp"
        }
      ]
    },
    {
      "number": 638,
      "mission": "The Last Train to Nowhere",
      "location": "Terminal of Saint Vesper",
      "annex": "T-5902",
      "originalCycle": 781,
      "members": [
        {
          "id": "009-0079",
          "name": "Vaela Tesh",
          "species": "Angara",
          "universe": "Mass Effect Andromeda",
          "status": "SURVIVED",
          "firstCycle": 636,
          "lastCycle": 672,
          "serviceCycles": [
            672,
            638,
            636
          ],
          "finalExpedition": "The Orchard of Second Chances",
          "portrait": "assets/portraits/009-0079.webp"
        },
        {
          "id": "009-0081",
          "name": "Thessa Virel",
          "species": "Lashunta",
          "universe": "Starfinder",
          "status": "TRANSFERRED",
          "firstCycle": 638,
          "lastCycle": 638,
          "serviceCycles": [
            638
          ],
          "finalExpedition": "The Last Train to Nowhere",
          "transferDivision": "Pale Lodge Transit Anomalies & Interdimensional Passage Division",
          "portrait": "assets/portraits/009-0081.webp"
        },
        {
          "id": "009-0082",
          "name": "Orrik-of-the-Low-Lantern",
          "species": "Gravemoth",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 638,
          "lastCycle": 638,
          "serviceCycles": [
            638
          ],
          "finalExpedition": "The Last Train to Nowhere",
          "portrait": "assets/portraits/009-0082.webp"
        }
      ]
    },
    {
      "number": 636,
      "mission": "The Mine of Forgotten Childhoods",
      "location": "Hollow Mountains of Drosven",
      "annex": "D-4427",
      "originalCycle": 780,
      "members": [
        {
          "id": "009-0075",
          "name": "Kavra Stonewake",
          "species": "Goliath",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 621,
          "lastCycle": 636,
          "serviceCycles": [
            636,
            629,
            621
          ],
          "finalExpedition": "The Mine of Forgotten Childhoods",
          "portrait": "assets/portraits/009-0075.webp"
        },
        {
          "id": "009-0079",
          "name": "Vaela Tesh",
          "species": "Angara",
          "universe": "Mass Effect Andromeda",
          "status": "SURVIVED",
          "firstCycle": 636,
          "lastCycle": 672,
          "serviceCycles": [
            672,
            638,
            636
          ],
          "finalExpedition": "The Orchard of Second Chances",
          "portrait": "assets/portraits/009-0079.webp"
        },
        {
          "id": "009-0080",
          "name": "Morrin Vex",
          "species": "Vorcha",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 636,
          "lastCycle": 636,
          "serviceCycles": [
            636
          ],
          "finalExpedition": "The Mine of Forgotten Childhoods",
          "portrait": "assets/portraits/009-0080.webp"
        }
      ]
    },
    {
      "number": 629,
      "mission": "The Night Beneath Our Feet",
      "location": "Inverted Expanse of Nhalor",
      "annex": "A-3904",
      "originalCycle": 779,
      "members": [
        {
          "id": "009-0075",
          "name": "Kavra Stonewake",
          "species": "Goliath",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 621,
          "lastCycle": 636,
          "serviceCycles": [
            636,
            629,
            621
          ],
          "finalExpedition": "The Mine of Forgotten Childhoods",
          "portrait": "assets/portraits/009-0075.webp"
        },
        {
          "id": "009-0077",
          "name": "Elion Thornvale",
          "species": "High Elf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 629,
          "lastCycle": 629,
          "serviceCycles": [
            629
          ],
          "finalExpedition": "The Night Beneath Our Feet",
          "portrait": "assets/portraits/009-0077.webp"
        },
        {
          "id": "009-0078",
          "name": "Zhirra-of-the-Third-Song",
          "species": "Auralith",
          "universe": "Original",
          "status": "TRANSFERRED",
          "firstCycle": 629,
          "lastCycle": 629,
          "serviceCycles": [
            629
          ],
          "finalExpedition": "The Night Beneath Our Feet",
          "transferDivision": "Pale Lodge Astral Phenomena & Deep-Sky Research Division",
          "portrait": "assets/portraits/009-0078.webp"
        }
      ]
    },
    {
      "number": 621,
      "mission": "The Lodge That Wasn't Ours",
      "location": "Blackglass Citadel",
      "annex": "P-8816",
      "originalCycle": 778,
      "members": [
        {
          "id": "009-0070",
          "name": "This-One-Remembers",
          "species": "Hanar",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 593,
          "lastCycle": 621,
          "serviceCycles": [
            621,
            619,
            605,
            593
          ],
          "finalExpedition": "The Lodge That Wasn't Ours",
          "portrait": "assets/portraits/009-0070.webp"
        },
        {
          "id": "009-0075",
          "name": "Kavra Stonewake",
          "species": "Goliath",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 621,
          "lastCycle": 636,
          "serviceCycles": [
            636,
            629,
            621
          ],
          "finalExpedition": "The Mine of Forgotten Childhoods",
          "portrait": "assets/portraits/009-0075.webp"
        },
        {
          "id": "009-0076",
          "name": "Brugg Mossmantle",
          "species": "Bugbear",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 621,
          "lastCycle": 621,
          "serviceCycles": [
            621
          ],
          "finalExpedition": "The Lodge That Wasn't Ours",
          "portrait": "assets/portraits/009-0076.webp"
        }
      ]
    },
    {
      "number": 619,
      "mission": "The People Who Were Never There",
      "location": "Empty Kingdom of Vael Taris",
      "annex": "V-7308",
      "originalCycle": 777,
      "members": [
        {
          "id": "009-0070",
          "name": "This-One-Remembers",
          "species": "Hanar",
          "universe": "Mass Effect",
          "status": "SURVIVED",
          "firstCycle": 593,
          "lastCycle": 621,
          "serviceCycles": [
            621,
            619,
            605,
            593
          ],
          "finalExpedition": "The Lodge That Wasn't Ours",
          "portrait": "assets/portraits/009-0070.webp"
        },
        {
          "id": "009-0073",
          "name": "Haldren Stonebrook",
          "species": "Hill Dwarf",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 619,
          "lastCycle": 619,
          "serviceCycles": [
            619
          ],
          "retiredAfter": 822,
          "portrait": "assets/portraits/009-0073.webp"
        },
        {
          "id": "009-0074",
          "name": "Veyra Sorn",
          "species": "Falleen",
          "universe": "Star Wars",
          "status": "DECEASED",
          "firstCycle": 619,
          "lastCycle": 619,
          "serviceCycles": [
            619
          ],
          "finalExpedition": "The People Who Were Never There",
          "portrait": "assets/portraits/009-0074.webp"
        }
      ]
    },
    {
      "number": 605,
      "mission": "The Photograph of Tomorrow",
      "location": "City of Silvermere",
      "annex": "M-2169",
      "originalCycle": 776,
      "members": [
        {
          "id": "009-0070",
          "name": "This-One-Remembers",
          "species": "Hanar",
          "universe": "Mass Effect",
          "status": "SURVIVED",
          "firstCycle": 593,
          "lastCycle": 621,
          "serviceCycles": [
            621,
            619,
            605,
            593
          ],
          "finalExpedition": "The Lodge That Wasn't Ours",
          "portrait": "assets/portraits/009-0070.webp"
        },
        {
          "id": "009-0071",
          "name": "Varkesh Drenn",
          "species": "Dragonkin",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 605,
          "lastCycle": 605,
          "serviceCycles": [
            605
          ],
          "finalExpedition": "The Photograph of Tomorrow",
          "portrait": "assets/portraits/009-0071.webp"
        },
        {
          "id": "009-0072",
          "name": "Mira Thistledown",
          "species": "Lightfoot Halfling",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 605,
          "lastCycle": 605,
          "serviceCycles": [
            605
          ],
          "finalExpedition": "The Photograph of Tomorrow",
          "portrait": "assets/portraits/009-0072.webp"
        }
      ]
    },
    {
      "number": 593,
      "mission": "The City of Borrowed Doors",
      "location": "Hanging Borough of Velis",
      "annex": "C-7741",
      "originalCycle": 775,
      "members": [
        {
          "id": "009-0065",
          "name": "Nyx-4",
          "species": "Android",
          "universe": "Starfinder",
          "status": "TRANSFERRED",
          "firstCycle": 543,
          "lastCycle": 593,
          "serviceCycles": [
            593,
            575,
            562,
            543
          ],
          "finalExpedition": "The City of Borrowed Doors",
          "transferDivision": "Pale Lodge Threshold Systems & Dimensional Infrastructure Division",
          "portrait": "assets/portraits/009-0065.webp"
        },
        {
          "id": "009-0069",
          "name": "Kessik Nar",
          "species": "Volus",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 593,
          "lastCycle": 593,
          "serviceCycles": [
            593
          ],
          "finalExpedition": "The City of Borrowed Doors",
          "portrait": "assets/portraits/009-0069.webp"
        },
        {
          "id": "009-0070",
          "name": "This-One-Remembers",
          "species": "Hanar",
          "universe": "Mass Effect",
          "status": "SURVIVED",
          "firstCycle": 593,
          "lastCycle": 621,
          "serviceCycles": [
            621,
            619,
            605,
            593
          ],
          "finalExpedition": "The Lodge That Wasn't Ours",
          "portrait": "assets/portraits/009-0070.webp"
        }
      ]
    },
    {
      "number": 575,
      "mission": "The Faces We Left Behind",
      "location": "Village of Secondwake",
      "annex": "R-6815",
      "originalCycle": 774,
      "members": [
        {
          "id": "009-0065",
          "name": "Nyx-4",
          "species": "Android",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 543,
          "lastCycle": 593,
          "serviceCycles": [
            593,
            575,
            562,
            543
          ],
          "finalExpedition": "The City of Borrowed Doors",
          "transferDivision": "Pale Lodge Threshold Systems & Dimensional Infrastructure Division",
          "portrait": "assets/portraits/009-0065.webp"
        },
        {
          "id": "009-0067",
          "name": "Calder Voss",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 575,
          "lastCycle": 575,
          "serviceCycles": [
            575
          ],
          "finalExpedition": "The Faces We Left Behind",
          "portrait": "assets/portraits/009-0067.webp"
        },
        {
          "id": "009-0068",
          "name": "Sareth Vey",
          "species": "Drell",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 575,
          "lastCycle": 575,
          "serviceCycles": [
            575
          ],
          "finalExpedition": "The Faces We Left Behind",
          "portrait": "assets/portraits/009-0068.webp"
        }
      ]
    },
    {
      "number": 562,
      "mission": "The Ship That Dreamed of Land",
      "location": "The Ashen Ark",
      "annex": "X-3046",
      "originalCycle": 773,
      "members": [
        {
          "id": "009-0057",
          "name": "Mirelle Duskwisp",
          "species": "Fairy",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 500,
          "lastCycle": 562,
          "serviceCycles": [
            562,
            543,
            514,
            500
          ],
          "finalExpedition": "The Ship That Dreamed of Land",
          "leaveCycles": [
            527
          ],
          "portrait": "assets/portraits/009-0057.webp"
        },
        {
          "id": "009-0065",
          "name": "Nyx-4",
          "species": "Android",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 543,
          "lastCycle": 593,
          "serviceCycles": [
            593,
            575,
            562,
            543
          ],
          "finalExpedition": "The City of Borrowed Doors",
          "transferDivision": "Pale Lodge Threshold Systems & Dimensional Infrastructure Division",
          "portrait": "assets/portraits/009-0065.webp"
        },
        {
          "id": "009-0066",
          "name": "Damar Keth",
          "species": "Zabrak",
          "universe": "Star Wars",
          "status": "DECEASED",
          "firstCycle": 562,
          "lastCycle": 562,
          "serviceCycles": [
            562
          ],
          "finalExpedition": "The Ship That Dreamed of Land",
          "portrait": "assets/portraits/009-0066.webp"
        }
      ]
    },
    {
      "number": 543,
      "mission": "The Sun Beneath the Soil",
      "location": "Buried Village of Hollowfen",
      "annex": "E-2084",
      "originalCycle": 772,
      "members": [
        {
          "id": "009-0057",
          "name": "Mirelle Duskwisp",
          "species": "Fairy",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 500,
          "lastCycle": 562,
          "serviceCycles": [
            562,
            543,
            514,
            500
          ],
          "finalExpedition": "The Ship That Dreamed of Land",
          "leaveCycles": [
            527
          ],
          "portrait": "assets/portraits/009-0057.webp"
        },
        {
          "id": "009-0064",
          "name": "Edrin Valehart",
          "species": "Half-Elf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 543,
          "lastCycle": 543,
          "serviceCycles": [
            543
          ],
          "finalExpedition": "The Sun Beneath the Soil",
          "portrait": "assets/portraits/009-0064.webp"
        },
        {
          "id": "009-0065",
          "name": "Nyx-4",
          "species": "Android",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 543,
          "lastCycle": 593,
          "serviceCycles": [
            593,
            575,
            562,
            543
          ],
          "finalExpedition": "The City of Borrowed Doors",
          "transferDivision": "Pale Lodge Threshold Systems & Dimensional Infrastructure Division",
          "portrait": "assets/portraits/009-0065.webp"
        }
      ]
    },
    {
      "number": 527,
      "mission": "The Road That Ate the Map",
      "location": "The Unending Causeway",
      "annex": "N-7718",
      "originalCycle": 771,
      "members": [
        {
          "id": "009-0061",
          "name": "Brynja Copperpath",
          "species": "Mountain Dwarf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 527,
          "lastCycle": 527,
          "serviceCycles": [
            527
          ],
          "finalExpedition": "The Road That Ate the Map",
          "portrait": "assets/portraits/009-0061.webp"
        },
        {
          "id": "009-0062",
          "name": "Korrash Venn",
          "species": "Vesk",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 527,
          "lastCycle": 527,
          "serviceCycles": [
            527
          ],
          "finalExpedition": "The Road That Ate the Map",
          "portrait": "assets/portraits/009-0062.webp"
        },
        {
          "id": "009-0063",
          "name": "Torren Ashhorn",
          "species": "Minotaur",
          "universe": "D&D 5e",
          "status": "TRANSFERRED",
          "firstCycle": 527,
          "lastCycle": 527,
          "serviceCycles": [
            527
          ],
          "finalExpedition": "The Road That Ate the Map",
          "transferDivision": "Pale Lodge Dimensional Navigation Division",
          "portrait": "assets/portraits/009-0063.webp"
        }
      ]
    },
    {
      "number": 514,
      "mission": "The Thirteenth Prayer",
      "location": "Monastery of Saint Veyr",
      "annex": "S-4912",
      "originalCycle": 770,
      "members": [
        {
          "id": "009-0057",
          "name": "Mirelle Duskwisp",
          "species": "Fairy",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 500,
          "lastCycle": 562,
          "serviceCycles": [
            562,
            543,
            514,
            500
          ],
          "finalExpedition": "The Ship That Dreamed of Land",
          "leaveCycles": [
            527
          ],
          "portrait": "assets/portraits/009-0057.webp"
        },
        {
          "id": "009-0059",
          "name": "Kaedros Emberveil",
          "species": "Bronze Dragonborn",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 514,
          "lastCycle": 514,
          "serviceCycles": [
            514
          ],
          "finalExpedition": "The Thirteenth Prayer",
          "portrait": "assets/portraits/009-0059.webp"
        },
        {
          "id": "009-0060",
          "name": "Oru-of-the-Deep-Tide",
          "species": "Tidemind",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 514,
          "lastCycle": 514,
          "serviceCycles": [
            514
          ],
          "finalExpedition": "The Thirteenth Prayer",
          "portrait": "assets/portraits/009-0060.webp"
        }
      ]
    },
    {
      "number": 500,
      "mission": "The Letters We Never Sent",
      "location": "City of Vesperfall",
      "annex": "P-8043",
      "originalCycle": 769,
      "members": [
        {
          "id": "009-0056",
          "name": "Vorrik Nhal",
          "species": "Quarren",
          "universe": "Star Wars",
          "status": "DECEASED",
          "firstCycle": 497,
          "lastCycle": 500,
          "serviceCycles": [
            500,
            497
          ],
          "finalExpedition": "The Letters We Never Sent",
          "portrait": "assets/portraits/009-0056.webp"
        },
        {
          "id": "009-0057",
          "name": "Mirelle Duskwisp",
          "species": "Fairy",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 500,
          "lastCycle": 562,
          "serviceCycles": [
            562,
            543,
            514,
            500
          ],
          "finalExpedition": "The Ship That Dreamed of Land",
          "leaveCycles": [
            527
          ],
          "portrait": "assets/portraits/009-0057.webp"
        },
        {
          "id": "009-0058",
          "name": "Thren-of-the-First-Light",
          "species": "Mnemonic Crystalborn",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 500,
          "lastCycle": 500,
          "serviceCycles": [
            500
          ],
          "finalExpedition": "The Letters We Never Sent",
          "portrait": "assets/portraits/009-0058.webp"
        }
      ]
    },
    {
      "number": 497,
      "mission": "The Feast of the Drowned",
      "location": "Empty City of Marrowtide",
      "annex": "M-5520",
      "originalCycle": 768,
      "members": [
        {
          "id": "009-0049",
          "name": "Liora Fencrest",
          "species": "Half-Elf",
          "universe": "D&D 5e",
          "status": "TRANSFERRED",
          "firstCycle": 479,
          "lastCycle": 497,
          "serviceCycles": [
            497,
            495,
            487,
            479
          ],
          "finalExpedition": "The Feast of the Drowned",
          "transferDivision": "Pale Lodge Cartographic Intelligence Division",
          "portrait": "assets/portraits/009-0049.webp"
        },
        {
          "id": "009-0055",
          "name": "Rhaegar Sunmane",
          "species": "Leonin",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 497,
          "lastCycle": 497,
          "serviceCycles": [
            497
          ],
          "finalExpedition": "The Feast of the Drowned",
          "portrait": "assets/portraits/009-0055.webp"
        },
        {
          "id": "009-0056",
          "name": "Vorrik Nhal",
          "species": "Quarren",
          "universe": "Star Wars",
          "status": "SURVIVED",
          "firstCycle": 497,
          "lastCycle": 500,
          "serviceCycles": [
            500,
            497
          ],
          "finalExpedition": "The Letters We Never Sent",
          "portrait": "assets/portraits/009-0056.webp"
        }
      ]
    },
    {
      "number": 495,
      "mission": "The Library of Unborn Names",
      "location": "Unwritten Athenaeum",
      "annex": "A-6109",
      "originalCycle": 767,
      "members": [
        {
          "id": "009-0049",
          "name": "Liora Fencrest",
          "species": "Half-Elf",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 479,
          "lastCycle": 497,
          "serviceCycles": [
            497,
            495,
            487,
            479
          ],
          "finalExpedition": "The Feast of the Drowned",
          "transferDivision": "Pale Lodge Cartographic Intelligence Division",
          "portrait": "assets/portraits/009-0049.webp"
        },
        {
          "id": "009-0053",
          "name": "Vaelis Nocthar",
          "species": "Drow",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 495,
          "lastCycle": 495,
          "serviceCycles": [
            495
          ],
          "finalExpedition": "The Library of Unborn Names",
          "portrait": "assets/portraits/009-0053.webp"
        },
        {
          "id": "009-0054",
          "name": "Iona-6",
          "species": "Synthetic humanoid",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 495,
          "lastCycle": 495,
          "serviceCycles": [
            495
          ],
          "finalExpedition": "The Library of Unborn Names",
          "portrait": "assets/portraits/009-0054.webp"
        }
      ]
    },
    {
      "number": 487,
      "mission": "The Midnight Line",
      "location": "Terminus Station",
      "annex": "R-3386",
      "originalCycle": 766,
      "members": [
        {
          "id": "009-0049",
          "name": "Liora Fencrest",
          "species": "Half-Elf",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 479,
          "lastCycle": 497,
          "serviceCycles": [
            497,
            495,
            487,
            479
          ],
          "finalExpedition": "The Feast of the Drowned",
          "transferDivision": "Pale Lodge Cartographic Intelligence Division",
          "portrait": "assets/portraits/009-0049.webp"
        },
        {
          "id": "009-0051",
          "name": "Tavrik Windtalon",
          "species": "Aarakocra",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 479,
          "lastCycle": 487,
          "serviceCycles": [
            487,
            479
          ],
          "finalExpedition": "The Midnight Line",
          "portrait": "assets/portraits/009-0051.webp"
        },
        {
          "id": "009-0052",
          "name": "Atlas-9",
          "species": "Warforged",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 487,
          "lastCycle": 487,
          "serviceCycles": [
            487
          ],
          "finalExpedition": "The Midnight Line",
          "portrait": "assets/portraits/009-0052.webp"
        }
      ]
    },
    {
      "number": 479,
      "mission": "The Gods Who Dream Beneath Stone",
      "location": "Valley of Sleeping Giants",
      "annex": "G-2271",
      "originalCycle": 765,
      "members": [
        {
          "id": "009-0049",
          "name": "Liora Fencrest",
          "species": "Half-Elf",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 479,
          "lastCycle": 497,
          "serviceCycles": [
            497,
            495,
            487,
            479
          ],
          "finalExpedition": "The Feast of the Drowned",
          "transferDivision": "Pale Lodge Cartographic Intelligence Division",
          "portrait": "assets/portraits/009-0049.webp"
        },
        {
          "id": "009-0050",
          "name": "Drevan Korr",
          "species": "Batarian",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 479,
          "lastCycle": 479,
          "serviceCycles": [
            479
          ],
          "finalExpedition": "The Gods Who Dream Beneath Stone",
          "portrait": "assets/portraits/009-0050.webp"
        },
        {
          "id": "009-0051",
          "name": "Tavrik Windtalon",
          "species": "Aarakocra",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 479,
          "lastCycle": 487,
          "serviceCycles": [
            487,
            479
          ],
          "finalExpedition": "The Midnight Line",
          "portrait": "assets/portraits/009-0051.webp"
        }
      ]
    },
    {
      "number": 476,
      "mission": "The Second Shadow of Briarwick",
      "location": "Twin Towns of Briarwick",
      "annex": "B-9047",
      "originalCycle": 764,
      "members": [
        {
          "id": "009-0046",
          "name": "Nixie Bramblegear",
          "species": "Goblin",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 476,
          "lastCycle": 476,
          "serviceCycles": [
            476
          ],
          "finalExpedition": "The Second Shadow of Briarwick",
          "portrait": "assets/portraits/009-0046.webp"
        },
        {
          "id": "009-0047",
          "name": "Eris Vell",
          "species": "Changeling",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 476,
          "lastCycle": 476,
          "serviceCycles": [
            476
          ],
          "finalExpedition": "The Second Shadow of Briarwick",
          "portrait": "assets/portraits/009-0047.webp"
        },
        {
          "id": "009-0048",
          "name": "Grask Urdan",
          "species": "Krogan",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 476,
          "lastCycle": 476,
          "serviceCycles": [
            476
          ],
          "finalExpedition": "The Second Shadow of Briarwick",
          "portrait": "assets/portraits/009-0048.webp"
        }
      ]
    },
    {
      "number": 475,
      "mission": "The Hour of the Last Bell",
      "location": "Town of Bellwether",
      "annex": "B-5814",
      "originalCycle": 763,
      "members": [
        {
          "id": "009-0041",
          "name": "Rorrak",
          "species": "Wookiee",
          "universe": "Star Wars",
          "status": "TRANSFERRED",
          "firstCycle": 454,
          "lastCycle": 475,
          "serviceCycles": [
            475,
            459,
            454
          ],
          "finalExpedition": "The Hour of the Last Bell",
          "transferDivision": "Pale Lodge Expedition Security Division",
          "portrait": "assets/portraits/009-0041.webp"
        },
        {
          "id": "009-0044",
          "name": "Aelith Rowanfall",
          "species": "Wood Elf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 475,
          "lastCycle": 475,
          "serviceCycles": [
            475
          ],
          "finalExpedition": "The Hour of the Last Bell",
          "portrait": "assets/portraits/009-0044.webp"
        },
        {
          "id": "009-0045",
          "name": "Nymera Galeveil",
          "species": "Air Genasi",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 475,
          "lastCycle": 475,
          "serviceCycles": [
            475
          ],
          "finalExpedition": "The Hour of the Last Bell",
          "portrait": "assets/portraits/009-0045.webp"
        }
      ]
    },
    {
      "number": 459,
      "mission": "The Roots of Tomorrow",
      "location": "Weeping Canopy",
      "annex": "W-3527",
      "originalCycle": 762,
      "members": [
        {
          "id": "009-0041",
          "name": "Rorrak",
          "species": "Wookiee",
          "universe": "Star Wars",
          "status": "SURVIVED",
          "firstCycle": 454,
          "lastCycle": 475,
          "serviceCycles": [
            475,
            459,
            454
          ],
          "finalExpedition": "The Hour of the Last Bell",
          "transferDivision": "Pale Lodge Expedition Security Division",
          "portrait": "assets/portraits/009-0041.webp"
        },
        {
          "id": "009-0042",
          "name": "Pippa Thistlewick",
          "species": "Halfling",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 459,
          "lastCycle": 459,
          "serviceCycles": [
            459
          ],
          "finalExpedition": "The Roots of Tomorrow",
          "portrait": "assets/portraits/009-0042.webp"
        },
        {
          "id": "009-0043",
          "name": "Kevar Nar'Raan",
          "species": "Quarian",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 459,
          "lastCycle": 459,
          "serviceCycles": [
            459
          ],
          "finalExpedition": "The Roots of Tomorrow",
          "portrait": "assets/portraits/009-0043.webp"
        }
      ]
    },
    {
      "number": 454,
      "mission": "The Procession of Hollow Kings",
      "location": "Necropolis of Veyr",
      "annex": "K-7183",
      "originalCycle": 761,
      "members": [
        {
          "id": "009-0036",
          "name": "Seyra Venn",
          "species": "Mirialan",
          "universe": "Star Wars",
          "status": "DECEASED",
          "firstCycle": 420,
          "lastCycle": 454,
          "serviceCycles": [
            454,
            449,
            420
          ],
          "finalExpedition": "The Procession of Hollow Kings",
          "portrait": "assets/portraits/009-0036.webp"
        },
        {
          "id": "009-0040",
          "name": "Hedra Stoneveil",
          "species": "Dwarf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 454,
          "lastCycle": 454,
          "serviceCycles": [
            454
          ],
          "finalExpedition": "The Procession of Hollow Kings",
          "portrait": "assets/portraits/009-0040.webp"
        },
        {
          "id": "009-0041",
          "name": "Rorrak",
          "species": "Wookiee",
          "universe": "Star Wars",
          "status": "SURVIVED",
          "firstCycle": 454,
          "lastCycle": 475,
          "serviceCycles": [
            475,
            459,
            454
          ],
          "finalExpedition": "The Hour of the Last Bell",
          "transferDivision": "Pale Lodge Expedition Security Division",
          "portrait": "assets/portraits/009-0041.webp"
        }
      ]
    },
    {
      "number": 449,
      "mission": "The Ward of Unfinished Lives",
      "location": "Saint Orison's Infirmary",
      "annex": "P-1179",
      "originalCycle": 760,
      "members": [
        {
          "id": "009-0036",
          "name": "Seyra Venn",
          "species": "Mirialan",
          "universe": "Star Wars",
          "status": "SURVIVED",
          "firstCycle": 420,
          "lastCycle": 454,
          "serviceCycles": [
            454,
            449,
            420
          ],
          "finalExpedition": "The Procession of Hollow Kings",
          "portrait": "assets/portraits/009-0036.webp"
        },
        {
          "id": "009-0038",
          "name": "Malrec Voss",
          "species": "Tiefling",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 449,
          "lastCycle": 449,
          "serviceCycles": [
            449
          ],
          "finalExpedition": "The Ward of Unfinished Lives",
          "portrait": "assets/portraits/009-0038.webp"
        },
        {
          "id": "009-0039",
          "name": "Vetra Solan",
          "species": "Turian",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 449,
          "lastCycle": 449,
          "serviceCycles": [
            449
          ],
          "finalExpedition": "The Ward of Unfinished Lives",
          "portrait": "assets/portraits/009-0039.webp"
        }
      ]
    },
    {
      "number": 420,
      "mission": "The Lighthouse at the End of Everything",
      "location": "Blackwater Expanse",
      "annex": "N-4406",
      "originalCycle": 759,
      "members": [
        {
          "id": "009-0033",
          "name": "Cassian Rook",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 417,
          "lastCycle": 420,
          "serviceCycles": [
            420,
            417
          ],
          "finalExpedition": "The Lighthouse at the End of Everything",
          "portrait": "assets/portraits/009-0033.webp"
        },
        {
          "id": "009-0036",
          "name": "Seyra Venn",
          "species": "Mirialan",
          "universe": "Star Wars",
          "status": "SURVIVED",
          "firstCycle": 420,
          "lastCycle": 454,
          "serviceCycles": [
            454,
            449,
            420
          ],
          "finalExpedition": "The Procession of Hollow Kings",
          "portrait": "assets/portraits/009-0036.webp"
        },
        {
          "id": "009-0037",
          "name": "Brunna Coalhand",
          "species": "Dwarf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 420,
          "lastCycle": 420,
          "serviceCycles": [
            420
          ],
          "finalExpedition": "The Lighthouse at the End of Everything",
          "portrait": "assets/portraits/009-0037.webp"
        }
      ]
    },
    {
      "number": 417,
      "mission": "The Museum of Things That Never Were",
      "location": "Gallery of Impossible Histories",
      "annex": "I-9042",
      "originalCycle": 758,
      "members": [
        {
          "id": "009-0033",
          "name": "Cassian Rook",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 417,
          "lastCycle": 420,
          "serviceCycles": [
            420,
            417
          ],
          "finalExpedition": "The Lighthouse at the End of Everything",
          "portrait": "assets/portraits/009-0033.webp"
        },
        {
          "id": "009-0034",
          "name": "Veyla Sorn",
          "species": "Twi'lek",
          "universe": "Star Wars",
          "status": "DECEASED",
          "firstCycle": 417,
          "lastCycle": 417,
          "serviceCycles": [
            417
          ],
          "finalExpedition": "The Museum of Things That Never Were",
          "portrait": "assets/portraits/009-0034.webp"
        },
        {
          "id": "009-0035",
          "name": "Keth'zar of the Amber Brood",
          "species": "Thri-kreen",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 417,
          "lastCycle": 417,
          "serviceCycles": [
            417
          ],
          "finalExpedition": "The Museum of Things That Never Were",
          "portrait": "assets/portraits/009-0035.webp"
        }
      ]
    },
    {
      "number": 405,
      "mission": "The Cathedral of Empty Voices",
      "location": "Basilica of the Unspoken",
      "annex": "V-6620",
      "originalCycle": 757,
      "members": [
        {
          "id": "009-0027",
          "name": "Lysara T'Venn",
          "species": "Asari",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 393,
          "lastCycle": 405,
          "serviceCycles": [
            405,
            399,
            393
          ],
          "finalExpedition": "The Cathedral of Empty Voices",
          "portrait": "assets/portraits/009-0027.webp"
        },
        {
          "id": "009-0031",
          "name": "Maelin Cross",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 405,
          "lastCycle": 405,
          "serviceCycles": [
            405
          ],
          "finalExpedition": "The Cathedral of Empty Voices",
          "portrait": "assets/portraits/009-0031.webp"
        },
        {
          "id": "009-0032",
          "name": "Unit Vesper-3",
          "species": "Geth",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 405,
          "lastCycle": 405,
          "serviceCycles": [
            405
          ],
          "finalExpedition": "The Cathedral of Empty Voices",
          "portrait": "assets/portraits/009-0032.webp"
        }
      ]
    },
    {
      "number": 399,
      "mission": "The Mercy of Forgotten Things",
      "location": "Sanctuary of Lost Hours",
      "annex": "E-4821",
      "originalCycle": 756,
      "members": [
        {
          "id": "009-0027",
          "name": "Lysara T'Venn",
          "species": "Asari",
          "universe": "Mass Effect",
          "status": "SURVIVED",
          "firstCycle": 393,
          "lastCycle": 405,
          "serviceCycles": [
            405,
            399,
            393
          ],
          "finalExpedition": "The Cathedral of Empty Voices",
          "portrait": "assets/portraits/009-0027.webp"
        },
        {
          "id": "009-0029",
          "name": "Corven Hale",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 399,
          "lastCycle": 399,
          "serviceCycles": [
            399
          ],
          "finalExpedition": "The Mercy of Forgotten Things",
          "portrait": "assets/portraits/009-0029.webp"
        },
        {
          "id": "009-0030",
          "name": "Zareth Kaal-Vesh",
          "species": "Kasatha",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 399,
          "lastCycle": 399,
          "serviceCycles": [
            399
          ],
          "finalExpedition": "The Mercy of Forgotten Things",
          "portrait": "assets/portraits/009-0030.webp"
        }
      ]
    },
    {
      "number": 393,
      "mission": "The Last Light of Autumn",
      "location": "Autumn's Bastion",
      "annex": "Compendium Vol. 1",
      "originalCycle": 755,
      "members": [
        {
          "id": "009-0025",
          "name": "Darruk Ashfall",
          "species": "Half-Orc",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 384,
          "lastCycle": 393,
          "serviceCycles": [
            393,
            386,
            384
          ],
          "finalExpedition": "The Last Light of Autumn",
          "portrait": "assets/portraits/009-0025.webp"
        },
        {
          "id": "009-0027",
          "name": "Lysara T'Venn",
          "species": "Asari",
          "universe": "Mass Effect",
          "status": "SURVIVED",
          "firstCycle": 393,
          "lastCycle": 405,
          "serviceCycles": [
            405,
            399,
            393
          ],
          "finalExpedition": "The Cathedral of Empty Voices",
          "portrait": "assets/portraits/009-0027.webp"
        },
        {
          "id": "009-0028",
          "name": "Korvath Embercrest",
          "species": "Dragonborn",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 393,
          "lastCycle": 393,
          "serviceCycles": [
            393
          ],
          "finalExpedition": "The Last Light of Autumn",
          "portrait": "assets/portraits/009-0028.webp"
        }
      ]
    },
    {
      "number": 386,
      "mission": "The Children of Yesterday",
      "location": "Village of Hollowmere",
      "annex": "Y-3048",
      "originalCycle": 754,
      "members": [
        {
          "id": "009-0022",
          "name": "Elara Voss",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "TRANSFERRED",
          "firstCycle": 382,
          "lastCycle": 386,
          "serviceCycles": [
            386,
            384,
            382
          ],
          "finalExpedition": "The Children of Yesterday",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0022.webp"
        },
        {
          "id": "009-0025",
          "name": "Darruk Ashfall",
          "species": "Half-Orc",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 384,
          "lastCycle": 393,
          "serviceCycles": [
            393,
            386,
            384
          ],
          "finalExpedition": "The Last Light of Autumn",
          "portrait": "assets/portraits/009-0025.webp"
        },
        {
          "id": "009-0026",
          "name": "Neris Vahl",
          "species": "Salarian",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 386,
          "lastCycle": 386,
          "serviceCycles": [
            386
          ],
          "finalExpedition": "The Children of Yesterday",
          "portrait": "assets/portraits/009-0026.webp"
        }
      ]
    },
    {
      "number": 384,
      "mission": "The House of Unwritten Names",
      "location": "Manor of Last Remembrance",
      "annex": "H-6312",
      "originalCycle": 753,
      "members": [
        {
          "id": "009-0022",
          "name": "Elara Voss",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 382,
          "lastCycle": 386,
          "serviceCycles": [
            386,
            384,
            382
          ],
          "finalExpedition": "The Children of Yesterday",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0022.webp"
        },
        {
          "id": "009-0024",
          "name": "Sylwen Thornbrook",
          "species": "Wood Elf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 382,
          "lastCycle": 384,
          "serviceCycles": [
            384,
            382
          ],
          "finalExpedition": "The House of Unwritten Names",
          "portrait": "assets/portraits/009-0024.webp"
        },
        {
          "id": "009-0025",
          "name": "Darruk Ashfall",
          "species": "Half-Orc",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 384,
          "lastCycle": 393,
          "serviceCycles": [
            393,
            386,
            384
          ],
          "finalExpedition": "The Last Light of Autumn",
          "portrait": "assets/portraits/009-0025.webp"
        }
      ]
    },
    {
      "number": 382,
      "mission": "The King Beneath the Ash",
      "location": "Cinderbound Throne",
      "annex": "F-2087",
      "originalCycle": 752,
      "members": [
        {
          "id": "009-0022",
          "name": "Elara Voss",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 382,
          "lastCycle": 386,
          "serviceCycles": [
            386,
            384,
            382
          ],
          "finalExpedition": "The Children of Yesterday",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0022.webp"
        },
        {
          "id": "009-0023",
          "name": "Bromm Ironvein",
          "species": "Dwarf",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 382,
          "lastCycle": 382,
          "serviceCycles": [
            382
          ],
          "finalExpedition": "The King Beneath the Ash",
          "portrait": "assets/portraits/009-0023.webp"
        },
        {
          "id": "009-0024",
          "name": "Sylwen Thornbrook",
          "species": "Wood Elf",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 382,
          "lastCycle": 384,
          "serviceCycles": [
            384,
            382
          ],
          "finalExpedition": "The House of Unwritten Names",
          "portrait": "assets/portraits/009-0024.webp"
        }
      ]
    },
    {
      "number": 375,
      "mission": "The City That Forgot Its Dead",
      "location": "Sepulcher of a Thousand Doors",
      "annex": "D-7714",
      "originalCycle": 751,
      "members": [
        {
          "id": "009-0015",
          "name": "Taliira Venn'Sol",
          "species": "Quarian",
          "universe": "Mass Effect",
          "status": "TRANSFERRED",
          "firstCycle": 364,
          "lastCycle": 375,
          "serviceCycles": [
            375,
            370,
            364
          ],
          "finalExpedition": "The City That Forgot Its Dead",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0015.webp"
        },
        {
          "id": "009-0020",
          "name": "Garrick Vale",
          "species": "Human",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 375,
          "lastCycle": 375,
          "serviceCycles": [
            375
          ],
          "finalExpedition": "The City That Forgot Its Dead",
          "portrait": "assets/portraits/009-0020.webp"
        },
        {
          "id": "009-0021",
          "name": "Seraphine Duskryn",
          "species": "Tiefling",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 375,
          "lastCycle": 375,
          "serviceCycles": [
            375
          ],
          "finalExpedition": "The City That Forgot Its Dead",
          "portrait": "assets/portraits/009-0021.webp"
        }
      ]
    },
    {
      "number": 370,
      "mission": "The Silence Between Stars",
      "location": "Ossuary of Sleeping Suns",
      "annex": "S-1176",
      "originalCycle": 750,
      "members": [
        {
          "id": "009-0015",
          "name": "Taliira Venn'Sol",
          "species": "Quarian",
          "universe": "Mass Effect",
          "status": "SURVIVED",
          "firstCycle": 364,
          "lastCycle": 375,
          "serviceCycles": [
            375,
            370,
            364
          ],
          "finalExpedition": "The City That Forgot Its Dead",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0015.webp"
        },
        {
          "id": "009-0018",
          "name": "Vaesh Korrin",
          "species": "Githzerai",
          "universe": "D&D 5e",
          "status": "TRANSFERRED",
          "firstCycle": 370,
          "lastCycle": 370,
          "serviceCycles": [
            370
          ],
          "finalExpedition": "The Silence Between Stars",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0018.webp"
        },
        {
          "id": "009-0019",
          "name": "Nhal-Without-Shape",
          "species": "Pelagic neural colony",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 370,
          "lastCycle": 370,
          "serviceCycles": [
            370
          ],
          "finalExpedition": "The Silence Between Stars",
          "portrait": "assets/portraits/009-0019.webp"
        }
      ]
    },
    {
      "number": 364,
      "mission": "The Lanterns of the Unreturned",
      "location": "Hollow Lantern Fields",
      "annex": "L-5093",
      "originalCycle": 749,
      "members": [
        {
          "id": "009-0015",
          "name": "Taliira Venn'Sol",
          "species": "Quarian",
          "universe": "Mass Effect",
          "status": "SURVIVED",
          "firstCycle": 364,
          "lastCycle": 375,
          "serviceCycles": [
            375,
            370,
            364
          ],
          "finalExpedition": "The City That Forgot Its Dead",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0015.webp"
        },
        {
          "id": "009-0016",
          "name": "Whispers-Beneath-Snow",
          "species": "Tabaxi",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 364,
          "lastCycle": 364,
          "serviceCycles": [
            364
          ],
          "finalExpedition": "The Lanterns of the Unreturned",
          "portrait": "assets/portraits/009-0016.webp"
        },
        {
          "id": "009-0017",
          "name": "Vaelor Threnn",
          "species": "Chiss",
          "universe": "Star Wars",
          "status": "DECEASED",
          "firstCycle": 364,
          "lastCycle": 364,
          "serviceCycles": [
            364
          ],
          "finalExpedition": "The Lanterns of the Unreturned",
          "portrait": "assets/portraits/009-0017.webp"
        }
      ]
    },
    {
      "number": 362,
      "mission": "The Sea Without a Shore",
      "location": "Drowned Firmament",
      "annex": "M-8302",
      "originalCycle": 748,
      "members": [
        {
          "id": "009-0013",
          "name": "Orrum Flintwake",
          "species": "Stone construct",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 359,
          "lastCycle": 362,
          "serviceCycles": [
            362,
            359
          ],
          "finalExpedition": "The Sea Without a Shore",
          "portrait": "assets/portraits/009-0013.webp"
        },
        {
          "id": "009-0011",
          "name": "Ilyra Shardveil",
          "species": "Crystalline humanoid",
          "universe": "Original",
          "status": "DECEASED",
          "firstCycle": 322,
          "lastCycle": 362,
          "serviceCycles": [
            362,
            322
          ],
          "finalExpedition": "The Sea Without a Shore",
          "leaveCycles": [
            359
          ],
          "portrait": "assets/portraits/009-0011.webp"
        },
        {
          "id": "009-0014",
          "name": "Draxen Korr",
          "species": "Krogan",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 362,
          "lastCycle": 362,
          "serviceCycles": [
            362
          ],
          "finalExpedition": "The Sea Without a Shore",
          "portrait": "assets/portraits/009-0014.webp"
        }
      ]
    },
    {
      "number": 359,
      "mission": "The Garden That Remembered",
      "location": "Mourning Conservatory",
      "annex": "G-2916",
      "originalCycle": 747,
      "members": [
        {
          "id": "009-0008",
          "name": "Eirwen Mosswake",
          "species": "Firbolg",
          "universe": "D&D 5e",
          "status": "TRANSFERRED",
          "firstCycle": 308,
          "lastCycle": 359,
          "serviceCycles": [
            359,
            322,
            308
          ],
          "finalExpedition": "The Garden That Remembered",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0008.webp"
        },
        {
          "id": "009-0012",
          "name": "Vesha-of-the-Quiet-Swarm",
          "species": "Shirren",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 359,
          "lastCycle": 359,
          "serviceCycles": [
            359
          ],
          "finalExpedition": "The Garden That Remembered",
          "portrait": "assets/portraits/009-0012.webp"
        },
        {
          "id": "009-0013",
          "name": "Orrum Flintwake",
          "species": "Stone construct",
          "universe": "Original",
          "status": "SURVIVED",
          "firstCycle": 359,
          "lastCycle": 362,
          "serviceCycles": [
            362,
            359
          ],
          "finalExpedition": "The Sea Without a Shore",
          "portrait": "assets/portraits/009-0013.webp"
        }
      ]
    },
    {
      "number": 322,
      "mission": "The Bell That Rang Tomorrow",
      "location": "Cathedral of Unfinished Hours",
      "annex": "T-4418",
      "originalCycle": 746,
      "members": [
        {
          "id": "009-0008",
          "name": "Eirwen Mosswake",
          "species": "Firbolg",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 308,
          "lastCycle": 359,
          "serviceCycles": [
            359,
            322,
            308
          ],
          "finalExpedition": "The Garden That Remembered",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0008.webp"
        },
        {
          "id": "009-0010",
          "name": "Selik Orr-Venn",
          "species": "Salarian",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 322,
          "lastCycle": 322,
          "serviceCycles": [
            322
          ],
          "finalExpedition": "The Bell That Rang Tomorrow",
          "portrait": "assets/portraits/009-0010.webp"
        },
        {
          "id": "009-0011",
          "name": "Ilyra Shardveil",
          "species": "Crystalline humanoid",
          "universe": "Original",
          "status": "SURVIVED",
          "firstCycle": 322,
          "lastCycle": 362,
          "serviceCycles": [
            362,
            322
          ],
          "finalExpedition": "The Sea Without a Shore",
          "leaveCycles": [
            359
          ],
          "portrait": "assets/portraits/009-0011.webp"
        }
      ]
    },
    {
      "number": 308,
      "mission": "The Orchard of Borrowed Suns",
      "location": "Vesper Orchard",
      "annex": "R-6081",
      "originalCycle": 745,
      "members": [
        {
          "id": "009-0007",
          "name": "Unit Morrow-7",
          "species": "SRO",
          "universe": "Starfinder",
          "status": "DECEASED",
          "firstCycle": 294,
          "lastCycle": 308,
          "serviceCycles": [
            308,
            294
          ],
          "finalExpedition": "The Orchard of Borrowed Suns",
          "portrait": "assets/portraits/009-0007.webp"
        },
        {
          "id": "009-0008",
          "name": "Eirwen Mosswake",
          "species": "Firbolg",
          "universe": "D&D 5e",
          "status": "SURVIVED",
          "firstCycle": 308,
          "lastCycle": 359,
          "serviceCycles": [
            359,
            322,
            308
          ],
          "finalExpedition": "The Garden That Remembered",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0008.webp"
        },
        {
          "id": "009-0009",
          "name": "Tivik Norr",
          "species": "Rodian",
          "universe": "Star Wars",
          "status": "DECEASED",
          "firstCycle": 308,
          "lastCycle": 308,
          "serviceCycles": [
            308
          ],
          "finalExpedition": "The Orchard of Borrowed Suns",
          "portrait": "assets/portraits/009-0009.webp"
        }
      ]
    },
    {
      "number": 294,
      "mission": "The Choir Beneath the Clouds",
      "location": "Cloud Cities of the Rijklands",
      "annex": "C-7329D",
      "originalCycle": 744,
      "members": [
        {
          "id": "009-0002",
          "name": "Sahri Venn-Kaal",
          "species": "Kasatha",
          "universe": "Starfinder",
          "status": "TRANSFERRED",
          "firstCycle": 282,
          "lastCycle": 294,
          "serviceCycles": [
            294,
            290,
            282
          ],
          "finalExpedition": "The Choir Beneath the Clouds",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0002.webp"
        },
        {
          "id": "009-0006",
          "name": "Keth'rix of the Sundered Brood",
          "species": "Thri-kreen",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 294,
          "lastCycle": 294,
          "serviceCycles": [
            294
          ],
          "finalExpedition": "The Choir Beneath the Clouds",
          "portrait": "assets/portraits/009-0006.webp"
        },
        {
          "id": "009-0007",
          "name": "Unit Morrow-7",
          "species": "SRO",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 294,
          "lastCycle": 308,
          "serviceCycles": [
            308,
            294
          ],
          "finalExpedition": "The Orchard of Borrowed Suns",
          "portrait": "assets/portraits/009-0007.webp"
        }
      ]
    },
    {
      "number": 290,
      "mission": "The Glasswake Incident",
      "location": "Shattered Observatory",
      "annex": "V-0194",
      "originalCycle": 743,
      "members": [
        {
          "id": "009-0002",
          "name": "Sahri Venn-Kaal",
          "species": "Kasatha",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 282,
          "lastCycle": 294,
          "serviceCycles": [
            294,
            290,
            282
          ],
          "finalExpedition": "The Choir Beneath the Clouds",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0002.webp"
        },
        {
          "id": "009-0004",
          "name": "Caelus Varr",
          "species": "Turian",
          "universe": "Mass Effect",
          "status": "DECEASED",
          "firstCycle": 290,
          "lastCycle": 290,
          "serviceCycles": [
            290
          ],
          "finalExpedition": "The Glasswake Incident",
          "portrait": "assets/portraits/009-0004.webp"
        },
        {
          "id": "009-0005",
          "name": "Nym-of-Seven",
          "species": "Plasmoid",
          "universe": "D&D 5e",
          "status": "TRANSFERRED",
          "firstCycle": 290,
          "lastCycle": 290,
          "serviceCycles": [
            290
          ],
          "finalExpedition": "The Glasswake Incident",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0005.webp"
        }
      ]
    },
    {
      "number": 282,
      "mission": "The Hollow Meridian",
      "location": "Cloud Cities of the Rijklands",
      "annex": "C-7329D",
      "originalCycle": 742,
      "members": [
        {
          "id": "009-0001",
          "name": "Veyr Blackquill",
          "species": "Kenku",
          "universe": "D&D 5e",
          "status": "DECEASED",
          "firstCycle": 282,
          "lastCycle": 282,
          "serviceCycles": [
            282
          ],
          "finalExpedition": "The Hollow Meridian",
          "portrait": "assets/portraits/009-0001.webp"
        },
        {
          "id": "009-0002",
          "name": "Sahri Venn-Kaal",
          "species": "Kasatha",
          "universe": "Starfinder",
          "status": "SURVIVED",
          "firstCycle": 282,
          "lastCycle": 294,
          "serviceCycles": [
            294,
            290,
            282
          ],
          "finalExpedition": "The Choir Beneath the Clouds",
          "transferDivision": "Pale Lodge (division not recorded)",
          "portrait": "assets/portraits/009-0002.webp"
        },
        {
          "id": "009-0003",
          "name": "Thorn-of-the-Last-Rain",
          "species": "Flora colossus",
          "universe": "Marvel",
          "status": "DECEASED",
          "firstCycle": 282,
          "lastCycle": 282,
          "serviceCycles": [
            282
          ],
          "finalExpedition": "The Hollow Meridian",
          "portrait": "assets/portraits/009-0003.webp"
        }
      ]
    }
  ],
  "portraitPrompts": {
    "009-0056": "cinematic realistic Star Wars Quarren alien male portrait orange salmon skin squid like head with four facial tentacles turquoise blue eyes dark teal rugged salvage expedition jacket metal utility harness atmospheric warm amber lighting",
    "009-0057": "cinematic realistic fantasy portrait female Dungeons and Dragons fairy small winged humanoid adult lavender blue skin iridescent translucent mothlike wings silver white curly hair violet eyes layered dark plum miniature expedition coat warm amber magical lantern lighting detailed character portrait",
    "009-0058": "cinematic realistic science fantasy portrait alien crystalline humanoid being translucent smoky violet quartz skin faceted angular face luminous pale gold eyes delicate geometric crystal growths around head and shoulders layered charcoal expedition robes subtle internal starlight warm amber atmospheric lighting",
    "009-0059": "cinematic realistic fantasy character portrait male Dungeons Dragons bronze dragonborn reptilian humanoid bronze copper scales swept back horns emerald green eyes weathered black leather relic hunter armor dark forest green expedition cloak warm amber lantern lighting detailed face",
    "009-0060": "cinematic realistic science fantasy portrait original alien humanoid made of living dark blue liquid with translucent flowing skin subtle glowing silver veins luminous pale cyan eyes elongated graceful face contained within delicate brass collar and dark layered expedition clothing warm amber atmospheric lighting",
    "009-0089": "cinematic realistic Starfinder female android humanoid dark bronze synthetic skin delicate glowing magenta circuitry around temples and cheekbones asymmetrical cropped silver hair amber eyes wearing dark forest green archive investigator coat copper data recording apparatus warm amber atmospheric cinematic lighting highly detailed distinctive science fantasy portrait",
    "009-0090": "cinematic realistic dark fantasy portrait male Dungeons and Dragons human adult pale freckled skin messy dark auburn hair gray eyes narrow face wearing faded midnight blue archivist expedition coat leather scroll case brass spectacles hanging from collar warm amber lantern lighting detailed unique fantasy character",
    "009-0091": "cinematic realistic original science fantasy alien portrait female humanoid with translucent pale mint green skin filled with floating tiny luminous geometric symbols and ink black branching veins elongated elegant face large glowing rose gold eyes no visible hair instead delicate floating ribbon like strands of dark violet light from scalp wearing layered charcoal expedition robes brass memory recording devices warm amber atmospheric lighting highly detailed distinct nonhuman portrait",
    "009-0092": "cinematic realistic dark fantasy portrait female Dungeons and Dragons wood elf ranger deep copper brown skin long dark chestnut braided hair pointed ears bright moss green eyes delicate pale freckles across cheeks wearing weathered olive green forest expedition cloak dark leather climbing harness small brass botanical instruments warm amber lantern lighting highly detailed distinctive fantasy character portrait",
    "009-0093": "cinematic realistic science fantasy portrait male Starfinder pahtra feline humanoid alien with short midnight blue black fur subtle silver rosette markings angular feline face pointed ears long white whiskers bright golden eyes wearing dark burgundy explorer jacket with brass chronometer and charcoal climbing equipment warm amber cinematic lighting highly detailed distinct nonhuman character portrait",
    "009-0094": "cinematic realistic dark fantasy portrait male Dungeons Dragons mountain dwarf broad weathered face warm ruddy skin thick silver blond beard braided into two sections short cropped sandy hair steel gray eyes wearing heavy dark navy winter expedition coat fur lined collar brass climbing hooks and leather gloves warm amber lantern lighting highly detailed distinct fantasy character portrait",
    "009-0095": "cinematic realistic dark fantasy character portrait female Dungeons and Dragons rock gnome adult short compact humanoid warm brown skin large pointed ears round brass spectacles thick curly copper red hair intelligent dark green eyes heavy teal winter explorer coat fur collar intricate brass tuning forks and sound measuring instruments warm amber lantern light unique detailed fantasy portrait",
    "009-0096": "cinematic realistic science fantasy portrait male Starfinder skittermander alien small round furry six armed humanoid bright lavender purple fur oversized triangular ears enormous expressive golden eyes short soft muzzle wearing dark navy explorer vest with six sleeves miniature brass trade instruments and leather satchels warm amber lantern lighting highly detailed charming distinctive nonhuman alien portrait",
    "009-0097": "cinematic realistic original science fantasy portrait male alien humanoid with smooth deep indigo skin patterned with faint luminous gold branching lines four small black eyes arranged in symmetrical diamond on face elongated pointed ears no visible hair wearing layered charcoal merchant expedition robes copper contract seals and hanging brass keys warm amber lantern lighting highly detailed distinctive nonhuman character portrait",
    "009-0098": "cinematic realistic dark fantasy portrait female Dungeons and Dragons sea elf humanoid sea green skin long flowing dark teal hair pointed ears bright silver blue eyes subtle aquatic facial markings wearing weathered black and turquoise nautical expedition armor dark sea cloak brass navigation compass and silver shell ornaments warm amber lantern lighting highly detailed distinctive fantasy character portrait",
    "009-0099": "cinematic realistic dark fantasy portrait female Dungeons and Dragons human nautical astronomer adult dark brown skin long black hair braided with tiny silver rings thoughtful gray green eyes wearing deep indigo sea captain coat brass celestial navigation instruments antique star charts leather belt warm amber lighthouse lantern lighting dramatic atmospheric detailed unique character portrait",
    "009-0100": "cinematic realistic science fantasy portrait female Starfinder shirren insectoid humanoid iridescent deep green chitin segmented angular mantislike face two long antennae luminous amber compound eyes four delicate arms wearing burgundy field biologist jacket brass specimen vials and research equipment warm amber museum lighting highly detailed distinct nonhuman alien portrait",
    "009-0101": "cinematic realistic dark science fantasy portrait female Star Wars bothan alien foxlike humanoid fine russet brown facial fur long pointed ears expressive golden brown eyes short dark auburn mane wearing charcoal archaeological explorer coat with burgundy trim brass fossil scanner leather specimen pouches warm amber museum lantern lighting highly detailed distinctive alien character portrait",
    "009-0102": "cinematic realistic dark fantasy portrait male Dungeons Dragons half elf adult warm medium brown skin shoulder length dark wavy hair pointed ears deep hazel eyes small scar over left eyebrow wearing weathered charcoal gray investigator coat deep burgundy scarf brass pocket watch and leather field journal warm amber candlelit gothic mansion atmosphere highly detailed distinctive fantasy character portrait",
    "009-0103": "cinematic realistic science fantasy portrait female Mass Effect drell alien slender humanoid smooth jade green reptilian skin fine geometric scale markings along cheekbones large luminous violet eyes graceful elongated face wearing elegant dark plum archival investigator jacket black leather gloves delicate silver memory recording device warm amber gothic mansion candlelight highly detailed distinctive nonhuman alien portrait",
    "009-0104": "cinematic realistic original science fantasy portrait nonhumanoid alien intelligent floating hollow porcelain mask shaped creature ivory ceramic oval face with three asymmetrical glowing turquoise eyes no mouth long trailing ribbons of translucent midnight blue spectral fabric and tiny floating brass clockwork rings around body hovering in candlelit gothic manor hallway warm amber lantern lighting highly detailed eerie distinctive alien character portrait",
    "009-0105": "cinematic realistic dark fantasy portrait female Dungeons Dragons hill dwarf archaeologist warm bronze skin thick dark auburn hair in two heavy braids short neatly braided beard decorated with bronze rings broad round face intelligent hazel eyes wearing weathered sand colored desert excavation coat dark teal scarf leather archaeological satchel brass measuring instruments warm amber desert sunlight highly detailed distinctive fantasy character portrait",
    "009-0106": "cinematic realistic science fantasy portrait male Starfinder contemplative pahtra feline humanoid alien with tawny sand colored fur dark brown tiger stripes angular feline face large pointed ears long white whiskers luminous emerald eyes wearing dark teal desert surveyor jacket brass solar chronometer and rugged leather expedition harness warm golden desert sunrise lighting highly detailed distinctive nonhuman alien portrait",
    "009-0107": "cinematic realistic science fantasy portrait female Starfinder lashunta humanoid alien warm lavender skin long graceful antennae emerging from forehead deep violet eyes flowing dark indigo hair wearing elegant charcoal diplomatic investigator robes copper circlet crystalline telepathic recording instruments warm amber marble parliamentary chamber lighting highly detailed distinctive alien character portrait",
    "009-0108": "cinematic realistic dark fantasy portrait female Dungeons Dragons human lunar occultist adult dark olive skin long thick black hair with a single silver white streak expressive dark brown eyes faint crescent shaped birthmark beneath left eye wearing weathered deep violet astronomer robes charcoal traveling cloak antique silver moon phase pendant brass telescope and leather celestial field journal eerie cool moonlight mixed with warm amber lantern light highly detailed distinctive fantasy character portrait",
    "009-0109": "cinematic realistic science fantasy portrait male Starfinder shobhad alien towering four armed humanoid with dusty rust red skin elongated angular face small lower tusks deep set pale blue eyes rugged dark charcoal spacefaring explorer armor with silver lunar mapping instruments two upper arms crossed and lower arms holding antique brass astrolabe moonlit coastal observatory background highly detailed distinctive alien character portrait",
    "009-0110": "cinematic realistic dark fantasy portrait male Dungeons and Dragons half orc battlefield historian adult muted olive green skin short cropped black hair strong jaw small lower tusks weathered face dark amber eyes old scar across nose wearing charcoal military historian expedition coat with worn brass buttons dark burgundy scarf leather map case and antique battlefield compass standing in misty cemetery of silver grass warm amber twilight lighting highly detailed distinctive fantasy character portrait",
    "009-0111": "cinematic realistic science fantasy portrait female Star Wars chiss alien humanoid deep cobalt blue skin vivid glowing crimson red eyes sharp elegant face straight jet black hair cut in chin length angular bob wearing dark charcoal military intelligence coat with silver insignia compact holographic battlefield scanner and leather tactical gloves standing among strange war memorial stones under amber twilight highly detailed distinctive alien character portrait",
    "009-0112": "cinematic realistic dark fantasy portrait female Dungeons and Dragons high elf winter court scholar pale porcelain skin long flowing midnight black hair pointed ears luminous ice blue eyes delicate silver snowflake tattoos along temples wearing elegant dark forest green velvet expedition cloak white fur lined collar antique silver botanical instruments and leather journal candlelit frozen palace background warm amber lighting highly detailed distinctive fantasy character portrait",
    "009-0113": "cinematic realistic science fantasy portrait male Star Wars muun alien tall slender humanoid with elongated narrow bald head pale gray lavender skin deep set amber eyes long elegant neck wearing charcoal diplomatic archivist coat with deep burgundy embroidered trim antique brass temporal measuring instrument and silver ceremonial document seals standing in candlelit ice palace corridor highly detailed distinctive nonhuman alien character portrait",
    "009-0114": "cinematic realistic dark fantasy portrait female Dungeons and Dragons dwarf postal archivist warm chestnut brown skin short broad face thick curly black hair tied back in practical bun small braided beard decorated with copper beads intelligent hazel eyes wearing weathered burgundy postal expedition coat brass mail sorting insignia leather satchel stuffed with old envelopes antique key ring standing inside candlelit magical post office warm amber lighting highly detailed distinctive fantasy character portrait",
    "009-0115": "cinematic realistic science fantasy portrait male Starfinder contemplative ysoki ratfolk alien small humanoid with fine charcoal gray fur white muzzle long whiskers oversized round ears vivid turquoise eyes wearing tailored dark forest green courier jacket brass dimensional navigation compass miniature leather mail satchels and silver communication headset standing in mysterious infinite postal sorting chamber warm amber lantern lighting highly detailed distinctive nonhuman alien character portrait",
    "009-0116": "cinematic realistic dark fantasy portrait female Dungeons Dragons water genasi humanoid with deep turquoise blue skin subtle flowing wave patterns along cheeks long white silver hair braided with tiny seashells luminous sea green eyes wearing dark navy nautical expedition coat brass diving compass weathered leather shoulder harness standing in eerie desert lighthouse with pale blue ocean light warm amber lantern highlights highly detailed distinctive fantasy character portrait",
    "009-0117": "cinematic realistic science fantasy portrait male Mass Effect hanar alien nonhumanoid translucent jellyfish shaped floating aquatic creature with luminous pale violet bell shaped body long delicate trailing bioluminescent tentacles intricate silver blue internal light patterns wearing small attached brass translation device and dark metal environmental sensor collar hovering inside mysterious lighthouse chamber with blue underwater light warm amber atmospheric accents highly detailed distinctive alien portrait"
  }
};
