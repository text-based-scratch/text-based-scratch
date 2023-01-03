var id = 0
var project = {
  "targets": [], // sprites
  "monitors": [],
  "extensions": [],
  "meta": {
    "semver": "3.0.0",
    "vm": "1.23421341234.123490158",
    "agent": "screw you"
  }
}
var assets = {} // [file name]: [data uri]

function md5ext() {
  return (new Array(32)).fill(0).map(e => "1234567890abcdef"[Math.floor(Math.random() * 16)]).join("")
}

function asset(name, type, data) {
  var assetID = md5ext()
  assets[assetID] = data
  switch(type) {
    case "png":
    case "jpg":
    case "svg":
      return {
        "name": name,
        "dataFormat": type,
        "assetId": assetID,
        "md5ext": `${assetID}.${type}`,
        "rotationCenterX": 240,
        "rotationCenterY": 180
      }
    case "mp3":
    case "wav":
      return {
        "name": name,
        "assetId": assetID,
        "dataFormat": type,
        "rate": 48000, // MAY CAUSE BUGS
        "sampleCount": 3073253, // MAY CAUSE BUGS
        "md5ext": `${assetID}.${type}`
      }
    default:
      throw new Error("unrecognized file type!")
  }
}

function sprite(name) {
  return {
    "isStage": false,
    "name": name,
    "variables": {},
    "lists": {},
    "broadcasts": {},
    "blocks": {},
    "comments": {},
    "currentCostume": 0,
    "costumes": [],
    "sounds": [],
    "volume": 100,
    "layerOrder": 0,
    "tempo": 60,
    "videoTransparency": 50,
    "videoState": "on",
    "textToSpeechLanguage": null
  }
}

function comment(blockID, text) {
  id++
  return {
    "blockId": blockID,
    "x": 0,
    "y": 0,
    "width": 200,
    "height": 200,
    "minimized": false,
    "text": text
  }
}