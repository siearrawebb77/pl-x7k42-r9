/* SAMPLE DATA ONLY. Replace with your campaign's published records.
   Each cycle contains exactly three members. Status is the outcome IN THAT CYCLE.
   A returning Strider reuses the same id and portrait across appearances.
   finalExpedition appears only when the selected cycle's status is not ACTIVE.
*/
window.TEAM009_DATA = {
  cycles: [
    {number:842,members:[
      {id:null,name:'UNASSIGNED',species:null,status:'PENDING'},
      {id:null,name:'UNASSIGNED',species:null,status:'PENDING'},
      {id:null,name:'UNASSIGNED',species:null,status:'PENDING'}
    ]},
    {number:841,members:[
      {id:'009-0138',name:'Mara Voss',species:'Human',status:'SURVIVED',firstCycle:839,lastCycle:841,serviceCycles:[841,840,839],finalExpedition:'The Lantern Crossing'},
      {id:'009-0139',name:'Orin Vale',species:'Tiefling',status:'DECEASED',firstCycle:840,lastCycle:841,serviceCycles:[841,840],finalExpedition:'The Lantern Crossing'},
      {id:'009-0140',name:'Thessa Briar',species:'Elf',status:'TRANSFERRED',firstCycle:841,lastCycle:841,serviceCycles:[841],finalExpedition:'The Lantern Crossing'}
    ]},
    {number:840,members:[
      {id:'009-0138',name:'Mara Voss',species:'Human',status:'SURVIVED',firstCycle:839,lastCycle:841,serviceCycles:[841,840,839],finalExpedition:'The Lantern Crossing'},
      {id:'009-0137',name:'Nix of Hollowglass',species:'Changeling',status:'DECEASED',firstCycle:840,lastCycle:840,serviceCycles:[840],finalExpedition:'The Glass Orchard',formerNames:['Nix Ash']},
      {id:'009-0139',name:'Orin Vale',species:'Tiefling',status:'SURVIVED',firstCycle:840,lastCycle:841,serviceCycles:[841,840],finalExpedition:'The Lantern Crossing'}
    ]},
    {number:839,members:[
      {id:'009-0136',name:'Aelira',species:'Aasimar',status:'TRANSFERRED',firstCycle:839,lastCycle:839,serviceCycles:[839],finalExpedition:'The Unwritten Gate'},
      {id:'009-0138',name:'Mara Voss',species:'Human',status:'SURVIVED',firstCycle:839,lastCycle:841,serviceCycles:[841,840,839],finalExpedition:'The Lantern Crossing'},
      {id:'009-0135',name:'Sir Kael’thar of Veyr',species:'Dragonborn',status:'DECEASED',firstCycle:839,lastCycle:839,serviceCycles:[839],finalExpedition:'The Unwritten Gate'}
    ]}
  ]
};
