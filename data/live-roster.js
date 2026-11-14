/* PALE LODGE // TEAM 009 PUBLISHED PERSONNEL BRIDGE
   Only APPROVED archive snapshots are public. Pending statuses and recruits stay private.
   The original historical cycles remain unchanged.
*/
(async function () {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    let result;
    try {
      const response = await fetch("https://strider-relay-api.siearrawebb.workers.dev/archive/personnel",
        {signal:controller.signal,cache:"no-store"});
      if (!response.ok) throw new Error("Published archive unavailable");
      result = await response.json();
    } finally { clearTimeout(timeout); }
    if (!Array.isArray(result.cycles)) throw new Error("Invalid archive response");
    const cycles = window.TEAM009_DATA?.cycles;
    if (!Array.isArray(cycles)) return;
    for (const record of result.cycles) {
      if (!Number.isSafeInteger(record.number) || record.number < 844 ||
          !Array.isArray(record.personnel)) continue;
      const members = [...new Map(record.personnel.filter(p =>
        p && /^009-[0-9]{4,}$/.test(p.id) && typeof p.name === "string" &&
        typeof p.species === "string" && ["ACTIVE","DECEASED","TRANSFERRED","RETIRED"].includes(p.status)
      ).map(p=>[p.id,p])).values()];
      const present = members.map(p=>({
        id:p.id,name:p.name,species:p.species,className:p.class_name,status:p.status,
        firstCycle:844,lastCycle:record.number,
        serviceCycles:result.cycles.filter(c => Array.isArray(c.personnel) &&
          c.personnel.some(other=>other.id===p.id)).map(c=>c.number),
        portrait:typeof p.portrait === "string" &&
          /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(p.portrait)
          ? p.portrait : undefined
      }));
      for(let i=present.length;i<3;i++)present.push({
        id:null,name:"UNASSIGNED",species:null,status:"PENDING"
      });
      const existing=cycles.find(c=>c.number===record.number);
      if (existing) existing.members=present;
      else cycles.push({number:record.number,members:present});
    }
  } catch(error) {
    console.warn("Published personnel sync unavailable; historic archive preserved.",error);
  } finally {
    const script=document.createElement("script");
    script.src="app.js?v=archive-succession-v1";
    document.body.append(script);
  }
})();
