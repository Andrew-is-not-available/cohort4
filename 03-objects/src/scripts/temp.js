
const functions = {

    createCard(cardDiv, name, lat, long, pop, howbig, size,key) {
      let br = document.createElement("br");
      let targetDiv = document.getElementById(cardDiv);
      let node = document.createElement("div");
      node.classList.add("testCard");
      // let newCard = document.createElement('div');
      // newCard.classList.add("cardDiv");
      node.textContent = `${name}`;
      let newUpper = document.createElement("div");
      newUpper.classList.add("cardUpperDiv");
      let upperText = document.createElement("p");
      upperText.appendChild(br);
      newUpper.appendChild(upperText);
      let newLower = document.createElement("div");
      newLower.classList.add("cardLowerDiv");
      let lowerTextInfo = document.createElement("p");
      let lowerText = document.createElement("p");
      let newButtonDiv = document.createElement("div");
      let newInfo = document.createElement("div");
      let newSettings = document.createElement("div");
      newButtonDiv.classList.add("w3-bar", "w3-black");
      newInfo.classList.add("cardTabinfo");
      newInfo.id = "info";
      lowerTextInfo.textContent = `Lat: ${lat}, Long: ${long}, Population: ${pop}, 
      How big: ${howbig}, 
      Hemisphere: ${size}`;
      newInfo.appendChild(lowerTextInfo);
      newSettings.classList.add("cardTabsettings");
      newSettings.id = "settings";
      // lowerText.textContent = "Settings";
      let deleteButton = document.createElement("button");
      deleteButton.id = "deleteCity";
      deleteButton.textContent = "Delete";
      let moveInButton = document.createElement("button");
      moveInButton.id = "moveIn";
      moveInButton.textContent = "Move In";
      let moveOutButton = document.createElement("button");
      moveOutButton.id = "moveOut";
      moveOutButton.textContent = "Move Out";
      newSettings.appendChild(lowerText);
      newSettings.appendChild(deleteButton);
      let keyText = document.createElement("p");
      keyText.id= "idKey";
      keyText.classList.add("clKey");
      keyText.textContent=key;
      newSettings.appendChild(keyText)
      let textFieldIn = document.createElement("input");
      // textFieldIn.id="idTextFieldIn";
      upperText.appendChild(moveInButton);
      upperText.appendChild(textFieldIn);
  
      upperText.appendChild(br);
      let textFieldOut = document.createElement("input");
      // textFieldOut.id="idTextFieldOut";
      upperText.appendChild(moveOutButton);
      upperText.appendChild(textFieldOut);
  
      newSettings.style.display = "none";
      let newInfoButton = document.createElement("button");
      newInfoButton.classList.add("w3-bar-item", "w3-button");
      newInfoButton.textContent = "Info";
      newInfoButton.setAttribute("onclick", "openCity('info')");
      let newSettingsButton = document.createElement("button");
      newSettingsButton.classList.add("w3-bar-item", "w3-button");
      newSettingsButton.textContent = "Settings";
      newSettingsButton.setAttribute("onclick", "openCity('settings')");
  
      newButtonDiv.appendChild(newInfoButton);
      newButtonDiv.appendChild(newSettingsButton);
      newLower.appendChild(newButtonDiv);
      newLower.appendChild(newInfo);
      newLower.appendChild(newSettings);
      node.appendChild(newUpper);
      node.appendChild(newLower);
  
      // node.appendChild(newCard);
      targetDiv.appendChild(node);
    }
  
  };
    

