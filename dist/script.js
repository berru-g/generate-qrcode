let qrcodeInstance;

    function generateQRCode() {
      const inputText = document.getElementById("inputText").value;
      if (!inputText) {
        alert("Veuillez saisir un texte à convertir en QR Code !");
        return;
      }

      const qrcodeContainer = document.getElementById("qrcodeContainer");
      qrcodeContainer.innerHTML = ""; // Réinitialiser le contenu précédent du conteneur QR Code

      qrcodeInstance = new QRCode(qrcodeContainer, {
        text: inputText,
        width: 256,
        height: 256,
      });
    }

    function downloadQRCode() {
      if (!qrcodeInstance) {
        alert("Veuillez d'abord générer le QR Code !");
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext("2d");

      // Dessiner le contenu HTML du conteneur QR Code sur le canvas
      const qrcodeContainer = document.getElementById("qrcodeContainer");
      context.drawImage(qrcodeContainer.querySelector("img"), 0, 0);

      // Convertir le contenu du canvas en URL de données (data URL)
      const imageDataUrl = canvas.toDataURL("image/png");

      // Créer un élément de lien temporaire pour le téléchargement
      const link = document.createElement("a");
      link.href = imageDataUrl;
      link.download = "qrcode.png"; // Nom du fichier téléchargé
      document.body.appendChild(link);

      // Simuler un clic sur le lien pour déclencher le téléchargement
      link.click();

      // Supprimer l'élément de lien temporaire
      document.body.removeChild(link);
    }