/* PALE LODGE // TEAM 009 LIVE PERSONNEL BRIDGE
   Reads character-only data from the public recruitment API. Historic cycles remain unchanged.
   If the live API is unavailable, the archive displays its existing placeholders.
*/
(async function () {
  const current = window.TEAM009_DATA?.cycles?.find(c => c.number === 844);
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    let result;
    try {
      const response = await fetch("https://strider-relay-api.siearrawebb.workers.dev/archive/personnel",
        {signal:controller.signal,cache:"no-store"});
      if (!response.ok) throw new Error("Live archive unavailable");
      result = await response.json();
    } finally { clearTimeout(timeout); }
    if (current && Array.isArray(result.personnel)) {
      const active = result.personnel.filter(p =>
        p && p.cycle === 844 && /^009-[0-9]{4,}$/.test(p.id) &&
        typeof p.name === "string" && typeof p.species === "string");
      // A single permanent personnel ID maps to one current record.
      const unique = [...new Map(active.map(p => [p.id, p])).values()];
      const placeholders = Math.max(0, 3 - unique.length);
      current.members = unique.map(p => ({
        id:p.id, name:p.name, species:p.species, className:p.class_name,
        status:["ACTIVE","DECEASED","TRANSFERRED","RETIRED"].includes(p.status)?p.status:"ACTIVE",
        firstCycle:844,lastCycle:844,serviceCycles:[844],
        portrait:typeof p.portrait === "string" && /^data:image\\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(p.portrait)
          ?p.portrait:undefined
      }));
      for(let i=0;i<placeholders;i++) current.members.push({
        id:null,name:"UNASSIGNED",species:null,status:"PENDING"
      });
    }
  } catch (error) {
    console.warn("Live personnel sync unavailable; existing archive preserved.", error);
  } finally {
    const script = document.createElement("script");
    script.src = "app.js?v=strider-network-shuffle-v2";
    document.body.append(script);
  }
})();
