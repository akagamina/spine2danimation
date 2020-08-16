new spine.SpinePlayer("raptor", {
  jsonUrl: "assets/raptor/raptor-pro.json",
  atlasUrl: "assets/raptor/raptor-pro.atlas",
  animations: ["jump"],
  backgroundColor: "#333333",
  defaultMix: 0.1,
  showControls: false,
})
new spine.SpinePlayer("raptor-walk", {
  jsonUrl: "assets/raptor/raptor-pro.json",
  atlasUrl: "assets/raptor/raptor-pro.atlas",
  animations: ["walk"],
  backgroundColor: "#878787",
  showControls: false,
})
new spine.SpinePlayer("powerup", {
  jsonUrl: "assets/powerup/powerup-pro.json",
  atlasUrl: "assets/powerup/powerup-pro.atlas",
  backgroundColor: "#878787",
  showControls: false,
})
new spine.SpinePlayer("powerup2", {
  jsonUrl: "assets/powerup/powerup-pro.json",
  atlasUrl: "assets/powerup/powerup-pro.atlas",
  backgroundColor: "#333333",
  showControls: false,
})