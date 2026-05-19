import React from "react";

const Avatar = ({ bg, shirt, skin = "#f9c89a", hairColor, hairStyle = "short" }) => {
  const isFemale = hairStyle === "long";
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="80" height="80" fill={bg}/>
      <ellipse cx="40" cy="84" rx="26" ry="20" fill={shirt}/>
      <rect x="35" y="57" width="10" height="8" rx="5" fill={skin}/>
      <circle cx="40" cy="44" r="19" fill={skin}/>
      {isFemale && (
        <>
          <path d={`M21 36 Q17 56 21 72 Q25 76 29 70 Q24 52 27 39`} fill={hairColor}/>
          <path d={`M59 36 Q63 56 59 72 Q55 76 51 70 Q56 52 53 39`} fill={hairColor}/>
        </>
      )}
      <ellipse cx="40" cy={isFemale ? "27" : "28"} rx="19" ry={isFemale ? "12" : "13"} fill={hairColor}/>
      <ellipse cx="40" cy="33" rx="14" ry="10" fill={skin}/>
      <ellipse cx="21" cy="45" rx="3" ry="3.5" fill={skin}/>
      <ellipse cx="59" cy="45" rx="3" ry="3.5" fill={skin}/>
      <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
      <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
      <circle cx="33.8" cy="43" r="0.9" fill="white"/>
      <circle cx="47.8" cy="43" r="0.9" fill="white"/>
      <path d="M34 51 Q40 56 46 51" fill="none" stroke={skin === "#e8a870" || skin === "#d4885a" ? "#8b4a18" : "#c07830"} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
};

const AvatarOlder = ({ bg, shirt, skin = "#e8a870", hairColor = "#ababab" }) => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill={bg}/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill={shirt}/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill={skin}/>
    <circle cx="40" cy="44" r="19" fill={skin}/>
    <ellipse cx="40" cy="28" rx="19" ry="12" fill={hairColor}/>
    <ellipse cx="40" cy="33" rx="14" ry="10" fill={skin}/>
    <ellipse cx="21" cy="45" rx="3" ry="3.5" fill={skin}/>
    <ellipse cx="59" cy="45" rx="3" ry="3.5" fill={skin}/>
    <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="33.8" cy="43" r="0.9" fill="white"/>
    <circle cx="47.8" cy="43" r="0.9" fill="white"/>
    <path d="M29 40 Q31 39 33 40" fill="none" stroke="#b07030" strokeWidth="0.7" strokeLinecap="round" opacity="0.5"/>
    <path d="M47 40 Q49 39 51 40" fill="none" stroke="#b07030" strokeWidth="0.7" strokeLinecap="round" opacity="0.5"/>
    <path d="M34 51 Q40 55.5 46 51" fill="none" stroke="#a06828" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const AvatarJamesMitchell = () => <Avatar bg="#ddeef7" shirt="#1a5276" hairColor="#6b3a2a"/>;
export const AvatarSarahChen = () => <Avatar bg="#e8f0f8" shirt="#1e6670" hairColor="#1c1c1c" hairStyle="long"/>;
export const AvatarRobertWalsh = () => <Avatar bg="#ddf0e8" shirt="#1a5e3a" hairColor="#1c1c1c"/>;
export const AvatarMichaelONeill = () => <AvatarOlder bg="#f0ece4" shirt="#1a2a3a"/>;
export const AvatarSarahMitchell = () => <Avatar bg="#fceee8" shirt="#902040" hairColor="#7b4520" hairStyle="long"/>;
export const AvatarJamesHartley = () => <Avatar bg="#ddeef7" shirt="#1a5276" hairColor="#6b3a2a"/>;
export const AvatarDavidChen = () => <Avatar bg="#fff0e0" shirt="#703010" hairColor="#1c1c1c"/>;
export const AvatarMichaelTorres = () => <Avatar bg="#f5f0e8" shirt="#2c5a1e" skin="#e8a060" hairColor="#1c1c1c"/>;
export const AvatarEmmaRichardson = () => <Avatar bg="#eef4fb" shirt="#2c4a7a" hairColor="#8b5e2a" hairStyle="long"/>;
export const AvatarDavidKumar = () => <Avatar bg="#fdf0e0" shirt="#4a3010" skin="#d4885a" hairColor="#1c1c1c"/>;
export const AvatarSarahBennett = () => <Avatar bg="#fcedee" shirt="#8a2040" hairColor="#6b3a2a" hairStyle="long"/>;
export const AvatarLisaChen = () => <Avatar bg="#eef0f8" shirt="#1e3a70" hairColor="#1c1c1c" hairStyle="long"/>;
export const AvatarLisaBrennan = () => <Avatar bg="#e8f5f0" shirt="#1e5a48" hairColor="#8b3010" hairStyle="long"/>;
export const AvatarThomasGarrett = () => <Avatar bg="#f0eef8" shirt="#3a2a7a" hairColor="#5c3a1e"/>;
export const AvatarDavidHartley = () => <Avatar bg="#eef5ee" shirt="#1a4e2a" hairColor="#1c1c1c"/>;
export const AvatarVictoriaCross = () => <Avatar bg="#f8eef4" shirt="#6a1a48" hairColor="#1c1c1c" hairStyle="long"/>;
export const AvatarLisaPatel = () => <Avatar bg="#edf4f8" shirt="#1a4a6a" skin="#d4885a" hairColor="#1c1c1c" hairStyle="long"/>;
export const AvatarThomasBrennan = () => <Avatar bg="#f2edf8" shirt="#4a2a7a" hairColor="#5c3a1e"/>;
export const AvatarVictoriaStone = () => <Avatar bg="#eef8f4" shirt="#1a6a4a" hairColor="#3a2010" hairStyle="long"/>;
