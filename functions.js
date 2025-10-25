// Global variables
let lowerThirds = [];
let currentLogoData = null;
let currentBgImageData = null;

// Helper function to sync hex input with color picker
function syncHexToColorPicker(hexInputId, colorPickerId) {
    const hexInput = document.getElementById(hexInputId);
    let hex = hexInput.value;
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
        document.getElementById(colorPickerId).value = hex;
        updateLivePreview();
    }
}

// Sync color picker with hex input - Background Color
document.getElementById('bgColor').addEventListener('input', function(e) {
    document.getElementById('bgColorHex').value = e.target.value.toUpperCase();
});

document.getElementById('bgColorHex').addEventListener('input', function(e) {
    syncHexToColorPicker('bgColorHex', 'bgColor');
});

document.getElementById('bgColorHex').addEventListener('paste', function(e) {
    setTimeout(() => syncHexToColorPicker('bgColorHex', 'bgColor'), 10);
});

document.getElementById('bgColorHex').addEventListener('change', function(e) {
    syncHexToColorPicker('bgColorHex', 'bgColor');
});

// Handle transparent background toggle
document.getElementById('bgTransparent').addEventListener('change', function(e) {
    const isTransparent = e.target.checked;
    const bgGradient = document.getElementById('bgGradient').checked;

    document.getElementById('bgColor').disabled = isTransparent || bgGradient;
    document.getElementById('bgColorHex').disabled = isTransparent || bgGradient;
    document.getElementById('bgOpacity').disabled = isTransparent;

    if (isTransparent) {
        document.getElementById('bgColor').style.opacity = '0.5';
        document.getElementById('bgColorHex').style.opacity = '0.5';
        document.getElementById('bgOpacity').style.opacity = '0.5';
        document.getElementById('bgGradient').disabled = true;
        document.getElementById('bgGradient').style.opacity = '0.5';
    } else {
        document.getElementById('bgColor').style.opacity = bgGradient ? '0.5' : '1';
        document.getElementById('bgColorHex').style.opacity = bgGradient ? '0.5' : '1';
        document.getElementById('bgOpacity').style.opacity = '1';
        document.getElementById('bgGradient').disabled = false;
        document.getElementById('bgGradient').style.opacity = '1';
    }
    updateLivePreview();
});

// Handle gradient background toggle
document.getElementById('bgGradient').addEventListener('change', function(e) {
    const isGradient = e.target.checked;
    const bgTransparent = document.getElementById('bgTransparent').checked;

    document.getElementById('bgColor').disabled = isGradient;
    document.getElementById('bgColorHex').disabled = isGradient;
    document.getElementById('bgGradientColor1').disabled = !isGradient;
    document.getElementById('bgGradientColor1Hex').disabled = !isGradient;
    document.getElementById('bgGradientColor2').disabled = !isGradient;
    document.getElementById('bgGradientColor2Hex').disabled = !isGradient;
    document.getElementById('bgGradientDirection').disabled = !isGradient;

    if (isGradient) {
        document.getElementById('bgColor').style.opacity = '0.5';
        document.getElementById('bgColorHex').style.opacity = '0.5';
        document.getElementById('bgGradientColor1').style.opacity = '1';
        document.getElementById('bgGradientColor1Hex').style.opacity = '1';
        document.getElementById('bgGradientColor2').style.opacity = '1';
        document.getElementById('bgGradientColor2Hex').style.opacity = '1';
        document.getElementById('bgGradientDirection').style.opacity = '1';
    } else {
        document.getElementById('bgColor').style.opacity = '1';
        document.getElementById('bgColorHex').style.opacity = '1';
        document.getElementById('bgGradientColor1').style.opacity = '0.5';
        document.getElementById('bgGradientColor1Hex').style.opacity = '0.5';
        document.getElementById('bgGradientColor2').style.opacity = '0.5';
        document.getElementById('bgGradientColor2Hex').style.opacity = '0.5';
        document.getElementById('bgGradientDirection').style.opacity = '0.5';
    }
    updateLivePreview();
});

// Sync color picker with hex input - Gradient Color 1
document.getElementById('bgGradientColor1').addEventListener('input', function(e) {
    document.getElementById('bgGradientColor1Hex').value = e.target.value.toUpperCase();
});

document.getElementById('bgGradientColor1Hex').addEventListener('input', function(e) {
    syncHexToColorPicker('bgGradientColor1Hex', 'bgGradientColor1');
});

document.getElementById('bgGradientColor1Hex').addEventListener('paste', function(e) {
    setTimeout(() => syncHexToColorPicker('bgGradientColor1Hex', 'bgGradientColor1'), 10);
});

document.getElementById('bgGradientColor1Hex').addEventListener('change', function(e) {
    syncHexToColorPicker('bgGradientColor1Hex', 'bgGradientColor1');
});

// Sync color picker with hex input - Gradient Color 2
document.getElementById('bgGradientColor2').addEventListener('input', function(e) {
    document.getElementById('bgGradientColor2Hex').value = e.target.value.toUpperCase();
});

document.getElementById('bgGradientColor2Hex').addEventListener('input', function(e) {
    syncHexToColorPicker('bgGradientColor2Hex', 'bgGradientColor2');
});

document.getElementById('bgGradientColor2Hex').addEventListener('paste', function(e) {
    setTimeout(() => syncHexToColorPicker('bgGradientColor2Hex', 'bgGradientColor2'), 10);
});

document.getElementById('bgGradientColor2Hex').addEventListener('change', function(e) {
    syncHexToColorPicker('bgGradientColor2Hex', 'bgGradientColor2');
});

// Sync color picker with hex input - Neon Color
document.getElementById('neonColor').addEventListener('input', function(e) {
    document.getElementById('neonColorHex').value = e.target.value.toUpperCase();
});

document.getElementById('neonColorHex').addEventListener('input', function(e) {
    syncHexToColorPicker('neonColorHex', 'neonColor');
});

document.getElementById('neonColorHex').addEventListener('paste', function(e) {
    setTimeout(() => syncHexToColorPicker('neonColorHex', 'neonColor'), 10);
});

document.getElementById('neonColorHex').addEventListener('change', function(e) {
    syncHexToColorPicker('neonColorHex', 'neonColor');
});

// Sync color picker with hex input - Text Color Main
document.getElementById('textColorMain').addEventListener('input', function(e) {
    document.getElementById('textColorMainHex').value = e.target.value.toUpperCase();
});

document.getElementById('textColorMainHex').addEventListener('input', function(e) {
    syncHexToColorPicker('textColorMainHex', 'textColorMain');
});

document.getElementById('textColorMainHex').addEventListener('paste', function(e) {
    setTimeout(() => syncHexToColorPicker('textColorMainHex', 'textColorMain'), 10);
});

document.getElementById('textColorMainHex').addEventListener('change', function(e) {
    syncHexToColorPicker('textColorMainHex', 'textColorMain');
});

// Sync color picker with hex input - Text Color Secondary
document.getElementById('textColorSecondary').addEventListener('input', function(e) {
    document.getElementById('textColorSecondaryHex').value = e.target.value.toUpperCase();
});

document.getElementById('textColorSecondaryHex').addEventListener('input', function(e) {
    syncHexToColorPicker('textColorSecondaryHex', 'textColorSecondary');
});

document.getElementById('textColorSecondaryHex').addEventListener('paste', function(e) {
    setTimeout(() => syncHexToColorPicker('textColorSecondaryHex', 'textColorSecondary'), 10);
});

document.getElementById('textColorSecondaryHex').addEventListener('change', function(e) {
    syncHexToColorPicker('textColorSecondaryHex', 'textColorSecondary');
});

// Load logo
document.getElementById('logoUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            currentLogoData = event.target.result;
            updateLivePreview();
        };
        reader.readAsDataURL(file);
    } else {
        currentLogoData = null;
        updateLivePreview();
    }
});

// Load background image
document.getElementById('bgImageUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            currentBgImageData = event.target.result;

            // Deshabilitar TODOS los controles de la sección fondo cuando hay imagen de fondo
            document.getElementById('bgColor').disabled = true;
            document.getElementById('bgColorHex').disabled = true;
            document.getElementById('bgOpacity').disabled = true;
            document.getElementById('bgTransparent').disabled = true;
            document.getElementById('bgGradient').disabled = true;
            document.getElementById('bgGradientColor1').disabled = true;
            document.getElementById('bgGradientColor1Hex').disabled = true;
            document.getElementById('bgGradientColor2').disabled = true;
            document.getElementById('bgGradientColor2Hex').disabled = true;
            document.getElementById('bgGradientDirection').disabled = true;
            document.getElementById('cornerStyle').disabled = true;

            document.getElementById('bgColor').style.opacity = '0.5';
            document.getElementById('bgColorHex').style.opacity = '0.5';
            document.getElementById('bgOpacity').style.opacity = '0.5';
            document.getElementById('bgTransparent').style.opacity = '0.5';
            document.getElementById('bgGradient').style.opacity = '0.5';
            document.getElementById('bgGradientColor1').style.opacity = '0.5';
            document.getElementById('bgGradientColor1Hex').style.opacity = '0.5';
            document.getElementById('bgGradientColor2').style.opacity = '0.5';
            document.getElementById('bgGradientColor2Hex').style.opacity = '0.5';
            document.getElementById('bgGradientDirection').style.opacity = '0.5';
            document.getElementById('cornerStyle').style.opacity = '0.5';

            updateLivePreview();
        };
        reader.readAsDataURL(file);
    } else {
        // Si se elimina la imagen, reactivar los controles según el estado actual
        currentBgImageData = null;
        const isTransparent = document.getElementById('bgTransparent').checked;
        const isGradient = document.getElementById('bgGradient').checked;

        // Reactivar controles base
        document.getElementById('bgTransparent').disabled = false;
        document.getElementById('bgTransparent').style.opacity = '1';
        document.getElementById('bgGradient').disabled = false;
        document.getElementById('bgGradient').style.opacity = '1';
        document.getElementById('cornerStyle').disabled = false;
        document.getElementById('cornerStyle').style.opacity = '1';

        // Color sólido (solo si no está marcado degradado o transparente)
        if (!isGradient && !isTransparent) {
            document.getElementById('bgColor').disabled = false;
            document.getElementById('bgColorHex').disabled = false;
            document.getElementById('bgColor').style.opacity = '1';
            document.getElementById('bgColorHex').style.opacity = '1';
        } else {
            document.getElementById('bgColor').disabled = true;
            document.getElementById('bgColorHex').disabled = true;
            document.getElementById('bgColor').style.opacity = '0.5';
            document.getElementById('bgColorHex').style.opacity = '0.5';
        }

        // Opacidad (solo si no está transparente)
        if (!isTransparent) {
            document.getElementById('bgOpacity').disabled = false;
            document.getElementById('bgOpacity').style.opacity = '1';
        } else {
            document.getElementById('bgOpacity').disabled = true;
            document.getElementById('bgOpacity').style.opacity = '0.5';
        }

        // Controles de degradado (solo si está marcado degradado)
        if (isGradient) {
            document.getElementById('bgGradientColor1').disabled = false;
            document.getElementById('bgGradientColor1Hex').disabled = false;
            document.getElementById('bgGradientColor2').disabled = false;
            document.getElementById('bgGradientColor2Hex').disabled = false;
            document.getElementById('bgGradientDirection').disabled = false;
            document.getElementById('bgGradientColor1').style.opacity = '1';
            document.getElementById('bgGradientColor1Hex').style.opacity = '1';
            document.getElementById('bgGradientColor2').style.opacity = '1';
            document.getElementById('bgGradientColor2Hex').style.opacity = '1';
            document.getElementById('bgGradientDirection').style.opacity = '1';
        } else {
            document.getElementById('bgGradientColor1').disabled = true;
            document.getElementById('bgGradientColor1Hex').disabled = true;
            document.getElementById('bgGradientColor2').disabled = true;
            document.getElementById('bgGradientColor2Hex').disabled = true;
            document.getElementById('bgGradientDirection').disabled = true;
            document.getElementById('bgGradientColor1').style.opacity = '0.5';
            document.getElementById('bgGradientColor1Hex').style.opacity = '0.5';
            document.getElementById('bgGradientColor2').style.opacity = '0.5';
            document.getElementById('bgGradientColor2Hex').style.opacity = '0.5';
            document.getElementById('bgGradientDirection').style.opacity = '0.5';
        }

        updateLivePreview();
    }
});

// Add lower third
function addLowerThird() {
    const mainText = document.getElementById('mainText').value;
    const secondaryText = document.getElementById('secondaryText').value;

    if (!mainText) {
        alert('Por favor ingresa al menos el texto principal');
        return;
    }

    // Obtener valor del cornerStyle de forma segura
    const cornerStyleElement = document.getElementById('cornerStyle');
    const cornerStyleValue = cornerStyleElement ? cornerStyleElement.value : 'rounded';

    if (!cornerStyleElement) {
        console.warn('⚠️ Advertencia: elemento cornerStyle no encontrado, usando valor por defecto "rounded"');
    }

    const lowerThird = {
        id: Date.now(),
        logo: currentLogoData,
        mainText: mainText,
        secondaryText: secondaryText,
        font: document.getElementById('fontSelect').value,
        textSizeMain: document.getElementById('textSizeMain').value,
        textSizeSecondary: document.getElementById('textSizeSecondary').value,
        textColorMain: document.getElementById('textColorMain').value,
        textColorSecondary: document.getElementById('textColorSecondary').value,
        textAlignMain: document.getElementById('textAlignMain').value,
        textAlignSecondary: document.getElementById('textAlignSecondary').value,
        textOffsetMainX: document.getElementById('textOffsetMainX').value,
        textOffsetSecondaryX: document.getElementById('textOffsetSecondaryX').value,
        bgColor: document.getElementById('bgColor').value,
        bgOpacity: document.getElementById('bgOpacity').value,
        bgTransparent: document.getElementById('bgTransparent').checked,
        bgGradient: document.getElementById('bgGradient').checked,
        bgGradientColor1: document.getElementById('bgGradientColor1').value,
        bgGradientColor2: document.getElementById('bgGradientColor2').value,
        bgGradientDirection: document.getElementById('bgGradientDirection').value,
        cornerStyle: cornerStyleValue,
        bgImage: currentBgImageData,
        bgImageSize: document.getElementById('bgImageSize').value,
        bgImageOffsetX: document.getElementById('bgImageOffsetX').value,
        containerAnimation: document.getElementById('containerAnimation').value,
        exitAnimation: document.getElementById('exitAnimation').value,
        textAnimation: document.getElementById('textAnimation').value,
        neonEffect: document.getElementById('neonEffect').checked,
        neonColor: document.getElementById('neonColor').value,
        animDuration: document.getElementById('animDuration').value,
        screenPosition: document.getElementById('screenPosition').value,
        logoSize: document.getElementById('logoSize').value,
        logoBorderRadius: document.getElementById('logoBorderRadius').value,
        displayDuration: document.getElementById('displayDuration').value,
        loopAnimation: document.getElementById('loopAnimation').value
    };

    console.log('Agregando lower third:', lowerThird);
    lowerThirds.push(lowerThird);
    console.log('Total lower thirds:', lowerThirds.length);
    renderLowerThirdsList();
    saveToLocalStorage(); // Auto-guardar en localStorage

    // Clear inputs
    document.getElementById('mainText').value = '';
    document.getElementById('secondaryText').value = '';
    currentLogoData = null;
    currentBgImageData = null;
    document.getElementById('logoUpload').value = '';
    document.getElementById('bgImageUpload').value = '';

    // Reactivar controles de fondo según el estado actual
    const isTransparent = document.getElementById('bgTransparent').checked;
    const isGradient = document.getElementById('bgGradient').checked;

    // Reactivar controles base
    document.getElementById('bgTransparent').disabled = false;
    document.getElementById('bgTransparent').style.opacity = '1';
    document.getElementById('bgGradient').disabled = false;
    document.getElementById('bgGradient').style.opacity = '1';
    document.getElementById('cornerStyle').disabled = false;
    document.getElementById('cornerStyle').style.opacity = '1';

    // Color sólido (solo si no está marcado degradado o transparente)
    if (!isGradient && !isTransparent) {
        document.getElementById('bgColor').disabled = false;
        document.getElementById('bgColorHex').disabled = false;
        document.getElementById('bgColor').style.opacity = '1';
        document.getElementById('bgColorHex').style.opacity = '1';
    } else {
        document.getElementById('bgColor').disabled = true;
        document.getElementById('bgColorHex').disabled = true;
        document.getElementById('bgColor').style.opacity = '0.5';
        document.getElementById('bgColorHex').style.opacity = '0.5';
    }

    // Opacidad (solo si no está transparente)
    if (!isTransparent) {
        document.getElementById('bgOpacity').disabled = false;
        document.getElementById('bgOpacity').style.opacity = '1';
    } else {
        document.getElementById('bgOpacity').disabled = true;
        document.getElementById('bgOpacity').style.opacity = '0.5';
    }

    // Controles de degradado (solo si está marcado degradado)
    if (isGradient) {
        document.getElementById('bgGradientColor1').disabled = false;
        document.getElementById('bgGradientColor1Hex').disabled = false;
        document.getElementById('bgGradientColor2').disabled = false;
        document.getElementById('bgGradientColor2Hex').disabled = false;
        document.getElementById('bgGradientDirection').disabled = false;
        document.getElementById('bgGradientColor1').style.opacity = '1';
        document.getElementById('bgGradientColor1Hex').style.opacity = '1';
        document.getElementById('bgGradientColor2').style.opacity = '1';
        document.getElementById('bgGradientColor2Hex').style.opacity = '1';
        document.getElementById('bgGradientDirection').style.opacity = '1';
    } else {
        document.getElementById('bgGradientColor1').disabled = true;
        document.getElementById('bgGradientColor1Hex').disabled = true;
        document.getElementById('bgGradientColor2').disabled = true;
        document.getElementById('bgGradientColor2Hex').disabled = true;
        document.getElementById('bgGradientDirection').disabled = true;
        document.getElementById('bgGradientColor1').style.opacity = '0.5';
        document.getElementById('bgGradientColor1Hex').style.opacity = '0.5';
        document.getElementById('bgGradientColor2').style.opacity = '0.5';
        document.getElementById('bgGradientColor2Hex').style.opacity = '0.5';
        document.getElementById('bgGradientDirection').style.opacity = '0.5';
    }
}

// Remove lower third
function removeLowerThird(id) {
    lowerThirds = lowerThirds.filter(lt => lt.id !== id);
    renderLowerThirdsList();
    saveToLocalStorage(); // Auto-guardar en localStorage
}

// Render list
function renderLowerThirdsList() {
    console.log('Renderizando lista de lower thirds. Total:', lowerThirds.length);
    const container = document.getElementById('lowerThirdsList');

    if (!container) {
        console.error('Error: No se encontró el contenedor lowerThirdsList');
        return;
    }

    if (lowerThirds.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No hay lower thirds agregados</p>';
        return;
    }

    console.log('Generando HTML para', lowerThirds.length, 'lower thirds');
    container.innerHTML = lowerThirds.map(lt => `
        <div class="lower-third-item">
            <div class="lower-third-preview">
                ${lt.logo ? `<img src="${lt.logo}" class="preview-logo" alt="Logo">` : '<div class="preview-logo"></div>'}
                <div class="preview-text">
                    <h3>${lt.mainText}</h3>
                    <p>${lt.secondaryText || 'Sin subtítulo'}</p>
                    <span class="preview-badge">${lt.font}</span>
                    ${lt.displayDuration ? `<span class="preview-badge" style="background: #4facfe;">⏱️ ${lt.displayDuration}s</span>` : ''}
                    ${lt.bgImage ? '<span class="preview-badge" style="background: #ff6b6b; color: #fff;">🖼️ Fondo PNG</span>' : ''}
                    ${lt.bgTransparent && !lt.bgImage ? '<span class="preview-badge" style="background: rgba(0,0,0,0.1); color: #333; border: 2px dashed #999;">🔲 Transparente</span>' : ''}
                    ${lt.neonEffect ? '<span class="preview-badge" style="background: #00ffff; color: #000;">✨ Neón</span>' : ''}
                </div>
            </div>
            <button class="btn-danger" onclick="removeLowerThird(${lt.id})">✕</button>
        </div>
    `).join('');
}

// Save configuration
function saveConfiguration() {
    const config = {
        lowerThirds: lowerThirds,
        rotation: {
            enabled: document.getElementById('enableRotation').checked,
            interval: document.getElementById('rotationInterval').value
        }
    };

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lowerthirds-config.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Load configuration
function loadConfiguration() {
    document.getElementById('loadConfigInput').click();
}

document.getElementById('loadConfigInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const config = JSON.parse(event.target.result);
                lowerThirds = config.lowerThirds || [];
                if (config.rotation) {
                    document.getElementById('enableRotation').checked = config.rotation.enabled;
                    document.getElementById('rotationInterval').value = config.rotation.interval;
                }
                renderLowerThirdsList();
                alert('Configuración cargada exitosamente');
            } catch (error) {
                alert('Error al cargar el archivo: ' + error.message);
            }
        };
        reader.readAsText(file);
    }
});

// Export JSON
function exportJSON() {
    if (lowerThirds.length === 0) {
        alert('No hay lower thirds para exportar');
        return;
    }

    const data = {
        lowerThirds: lowerThirds,
        rotation: {
            enabled: document.getElementById('enableRotation').checked,
            interval: document.getElementById('rotationInterval').value
        },
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lowerthirds-export-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Import JSON
function importJSON() {
    document.getElementById('importJSONInput').click();
}

document.getElementById('importJSONInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const data = JSON.parse(event.target.result);
                lowerThirds = data.lowerThirds || [];
                if (data.rotation) {
                    document.getElementById('enableRotation').checked = data.rotation.enabled;
                    document.getElementById('rotationInterval').value = data.rotation.interval;
                }
                renderLowerThirdsList();
                alert('JSON importado exitosamente');
            } catch (error) {
                alert('Error al importar JSON: ' + error.message);
            }
        };
        reader.readAsText(file);
    }
});

// Show viewer path
function showViewerPath() {
    let currentPath = decodeURIComponent(window.location.href);
    let directory = currentPath.substring(0, currentPath.lastIndexOf('/'));
    if (directory.startsWith('file:///')) {
        directory = directory.replace('file:///', '').replace(/\//g, '\\');
    }
    const viewerPath = directory + '\\lowerthirds-viewer.html';

    document.getElementById('viewerLink').textContent = viewerPath;
    alert('📂 Ruta del archivo viewer:\n\n' + viewerPath + '\n\n✅ Usa esta ruta en OBS como "Browser Source" → "Local file"');
}

// Generate and download viewer file
function generateViewerLink() {
    console.log('📦 Generando archivo viewer. Lower thirds disponibles:', lowerThirds.length);

    if (lowerThirds.length === 0) {
        alert('⚠️ Agrega al menos un lower third antes de generar el archivo');
        return;
    }

    const viewerData = {
        lowerThirds: lowerThirds,
        rotation: {
            enabled: document.getElementById('enableRotation').checked,
            interval: parseInt(document.getElementById('rotationInterval').value)
        }
    };

    console.log('📊 Datos del viewer:', viewerData);

    // Fixed filename
    const fileName = 'lowerthirds-view.html';

    // Create viewer HTML file
    const viewerHTML = generateViewerHTML(viewerData);
    console.log('✅ HTML generado, tamaño:', viewerHTML.length, 'caracteres');
    const blob = new Blob([viewerHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);

    // Get the current directory path (Windows compatible)
    let currentPath = decodeURIComponent(window.location.href);
    let directory = currentPath.substring(0, currentPath.lastIndexOf('/'));
    if (directory.startsWith('file:///')) {
        directory = directory.replace('file:///', '').replace(/\//g, '\\');
    }

    const viewerPath = directory + '\\' + fileName;

    showSaveNotification('✅ Archivo descargado: ' + fileName);

    setTimeout(() => {
        alert('✅ Archivo ' + fileName + ' descargado!\n\n' +
              '📝 MODO ARCHIVO INDEPENDIENTE:\n' +
              '1. Busca el archivo en tu carpeta de Descargas\n' +
              '2. Muévelo a: ' + directory + '\n' +
              '3. En OBS: Browser Source → Local file → Selecciona el archivo\n\n' +
              '💡 Este archivo contiene tu configuración actual y NO se actualiza automáticamente.\n' +
              'Para cambios, genera un nuevo archivo y reemplázalo.');
    }, 500);
}

// Generate viewer HTML
function generateViewerHTML(data) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lower Thirds Viewer - OBS</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;700&family=Poppins:wght@400;700&family=Bebas+Neue&family=Oswald:wght@400;700&family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&family=Inter:wght@400;700&family=Lato:wght@400;700&family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&family=Source+Sans+Pro:wght@400;700&family=Ubuntu:wght@400;700&family=Nunito:wght@400;700&family=PT+Sans:wght@400;700&family=Merriweather:wght@400;700&family=Anton&family=Pacifico&family=Permanent+Marker&family=Righteous&family=Abril+Fatface&family=Cinzel:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: transparent;
            overflow: hidden;
            width: 1920px;
            height: 1080px;
        }
        .lower-third {
            position: absolute;
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 0;
            border-radius: 15px;
            opacity: 0;
        }

        /* Posiciones en pantalla */
        .position-bottom-left { bottom: 50px; left: 50px; }
        .position-bottom-center { bottom: 50px; left: 50%; transform: translateX(-50%); }
        .position-bottom-right { bottom: 50px; right: 50px; }
        .position-top-left { top: 50px; left: 50px; }
        .position-top-center { top: 50px; left: 50%; transform: translateX(-50%); }
        .position-top-right { top: 50px; right: 50px; }
        .position-middle-left { top: 50%; left: 50px; transform: translateY(-50%); }
        .position-middle-center { top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .position-middle-right { top: 50%; right: 50px; transform: translateY(-50%); }
        .lower-third.active { opacity: 1; transform: translateX(0); }
        .logo {
            object-fit: contain;
            filter: drop-shadow(0 5px 15px rgba(0,0,0,0.5));
        }
        .text-content { display: flex; flex-direction: column; gap: 5px; flex: 1; }
        .main-text {
            font-size: 32px;
            font-weight: 700;
            color: white;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
        }
        .secondary-text {
            font-size: 20px;
            font-weight: 400;
            color: rgba(255,255,255,0.9);
            text-shadow: 1px 1px 6px rgba(0,0,0,0.8);
        }
        .neon {
            text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 2px 2px 4px rgba(0, 0, 0, 0.5);
            -webkit-text-stroke: 0.5px rgba(0, 0, 0, 0.3);
            text-stroke: 0.5px rgba(0, 0, 0, 0.3);
        }

        /* Animations */
        @keyframes slideInLeft { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInBottom { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes bounceIn {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes typewriter { from { width: 0; } to { width: 100%; } }
        @keyframes fadeInUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
        }
        @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        /* Exit Animations */
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }

        @keyframes slideOutLeft {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(-100%); opacity: 0; }
        }

        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }

        @keyframes slideOutBottom {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(100%); opacity: 0; }
        }

        @keyframes slideOutTop {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-100%); opacity: 0; }
        }

        @keyframes zoomOut {
            from { transform: scale(1); opacity: 1; }
            to { transform: scale(0); opacity: 0; }
        }

        @keyframes bounceOut {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(0.9); }
            100% { transform: scale(0); opacity: 0; }
        }

        /* Corner Styles - Optimized and Tested */
        .corner-none { border-radius: 0; }
        .corner-rounded-sm { border-radius: 5px; }
        .corner-rounded-md { border-radius: 10px; }
        .corner-rounded-lg { border-radius: 20px; }
        .corner-cut-left { clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px); }
        .corner-cut-right { clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%); }
        .corner-cut-both { clip-path: polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%, 0 20px); }
        .corner-diagonal-tl { clip-path: polygon(30px 0, 100% 0, 100% 100%, 0 100%, 0 30px); }
        .corner-diagonal-tr { clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%); }
        .corner-diagonal-br { clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%); }
        .corner-diagonal-bl { clip-path: polygon(0 0, 100% 0, 100% 100%, 30px 100%, 0 calc(100% - 30px)); }
        .corner-chevron-right { clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%); }
        .corner-chevron-left { clip-path: polygon(30px 0, 100% 0, 100% 100%, 30px 100%, 0 50%); }
        .corner-pentagon { clip-path: polygon(50% 0, 100% 38%, 82% 100%, 18% 100%, 0 38%); }
        .corner-hexagon { clip-path: polygon(30% 0, 70% 0, 100% 50%, 70% 100%, 30% 100%, 0 50%); }
    </style>
</head>
<body>
    <div id="lowerThirdContainer"></div>
    <script>
        const data = ${JSON.stringify(data)};
        let currentIndex = 0;
        let rotationTimer = null;

        function hexToRgba(hex, opacity) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return \`rgba(\${r}, \${g}, \${b}, \${opacity / 100})\`;
        }

        function showLowerThird(index) {
            console.log(\`🎬 showLowerThird llamado para índice \${index}\`);
            const container = document.getElementById('lowerThirdContainer');
            const lt = data.lowerThirds[index];
            console.log(\`📊 Lower third: loopAnimation=\${lt.loopAnimation}, loopInterval=\${lt.loopInterval}\`);

            // Determinar el estilo de fondo (PNG tiene prioridad sobre color)
            let backgroundStyle = '';
            let textContentBgStyle = '';
            let containerPadding = '';
            if (lt.bgImage) {
                const bgSize = lt.bgImageSize || '100';
                const bgOffsetX = lt.bgImageOffsetX || '0';
                containerPadding = 'padding: 20px 40px;';
                textContentBgStyle = \`background-image: url('\${lt.bgImage}'); background-size: \${bgSize}%; background-repeat: no-repeat; background-position: calc(50% + \${bgOffsetX}px) center; padding: 20px; border-radius: 15px; min-width: 400px; flex: 1;\`;
            } else if (lt.bgGradient) {
                containerPadding = 'padding: 20px 40px;';
                const color1 = hexToRgba(lt.bgGradientColor1 || '#667eea', lt.bgOpacity);
                const color2 = hexToRgba(lt.bgGradientColor2 || '#764ba2', lt.bgOpacity);
                const direction = lt.bgGradientDirection || 'to right';
                backgroundStyle = \`background: linear-gradient(\${direction}, \${color1}, \${color2});\`;
                textContentBgStyle = \`flex: 1;\`;
            } else {
                containerPadding = 'padding: 20px 40px;';
                const bgColor = lt.bgTransparent ? 'transparent' : hexToRgba(lt.bgColor, lt.bgOpacity);
                backgroundStyle = \`background: \${bgColor};\`;
                textContentBgStyle = \`flex: 1;\`;
            }

            const neonClass = lt.neonEffect ? 'neon' : '';
            const textColorMain = lt.textColorMain || lt.textColor || '#ffffff';
            const textColorSecondary = lt.textColorSecondary || lt.textColor || '#ffffff';
            const textStyleMain = lt.neonEffect ? \`color: \${lt.neonColor};\` : \`color: \${textColorMain};\`;
            const textStyleSecondary = lt.neonEffect ? \`color: \${lt.neonColor};\` : \`color: \${textColorSecondary};\`;

            const positionClass = 'position-' + (lt.screenPosition || 'bottom-left');
            const cornerClass = (!lt.bgImage && lt.cornerStyle) ? 'corner-' + lt.cornerStyle : '';

            container.innerHTML = \`
                <div class="lower-third active \${positionClass} \${cornerClass}" style="
                    \${backgroundStyle}
                    \${containerPadding}
                    font-family: '\${lt.font}', sans-serif;
                    animation: \${lt.containerAnimation} \${lt.animDuration}s ease-out;
                    animation-delay: 0s;
                ">
                    \${lt.logo ? \`<img src="\${lt.logo}" class="logo" style="width: \${lt.logoSize}px; height: \${lt.logoSize}px; border-radius: \${lt.logoBorderRadius || 0}%;" alt="Logo">\` : ''}
                    <div class="text-content" style="\${textContentBgStyle}">
                        <div class="main-text \${neonClass}" style="\${textStyleMain} font-size: \${lt.textSizeMain || 32}px; text-align: \${lt.textAlignMain || 'left'}; transform: translateX(\${lt.textOffsetMainX || 0}px); \${lt.textAnimation && lt.textAnimation !== 'none' ? \`animation: \${lt.textAnimation} \${lt.animDuration}s ease-out;\` : ''}">\${lt.mainText}</div>
                        \${lt.secondaryText ? \`<div class="secondary-text" style="\${textStyleSecondary} font-size: \${lt.textSizeSecondary || 20}px; text-align: \${lt.textAlignSecondary || 'left'}; transform: translateX(\${lt.textOffsetSecondaryX || 0}px); \${lt.textAnimation && lt.textAnimation !== 'none' ? \`animation: \${lt.textAnimation} \${lt.animDuration}s ease-out; animation-delay: 0.2s;\` : ''}">\${lt.secondaryText}</div>\` : ''}
                    </div>
                </div>
            \`;

            const animationDuration = parseFloat(lt.animDuration) * 1000;
            const displayTime = 5000; // 5 segundos de visualización estática
            const fadeOutDuration = 500; // 0.5 segundos de fade-out

            // Clear any existing timer
            clearTimeout(rotationTimer);

            // Determinar el comportamiento de repetición
            const loopMode = lt.loopAnimation || 'none';
            console.log(\`🔄 Modo de loop: \${loopMode}\`);

            // Programar animación de salida después de: animación + 5s de visualización
            const timeUntilExit = animationDuration + displayTime;
            const exitAnim = lt.exitAnimation || 'fadeOut';

            setTimeout(() => {
                const element = container.querySelector('.lower-third');
                if (element) {
                    console.log(\`👋 Aplicando \${exitAnim} después de 5s de visualización...\`);
                    element.style.animation = \`\${exitAnim} 0.5s ease-out forwards\`;

                    // Asegurar que el elemento se mantenga oculto después de la animación
                    setTimeout(() => {
                        element.style.opacity = '0';
                        element.style.visibility = 'hidden';
                    }, 500);
                }
            }, timeUntilExit);

            // Si la rotación automática está activada Y hay múltiples lower thirds
            if (data.rotation.enabled && data.lowerThirds.length > 1) {
                // Esperar el ciclo completo: entrada + visible + salida
                const fullCycleDuration = animationDuration + displayTime + fadeOutDuration;

                console.log(\`🔄 Rotación automática activada: esperando ciclo completo de \${fullCycleDuration}ms antes del siguiente\`);
                console.log(\`   - Entrada: \${animationDuration}ms + Visible: \${displayTime}ms + Salida: \${fadeOutDuration}ms\`);

                // Programar el siguiente lower third después del ciclo completo
                rotationTimer = setTimeout(() => {
                    console.log('⏭️ Cambiando al siguiente lower third...');
                    currentIndex = (currentIndex + 1) % data.lowerThirds.length;
                    showLowerThird(currentIndex);
                }, fullCycleDuration);
            }
            // Si el modo es "infinite" (repetir indefinidamente)
            else if (loopMode === 'infinite') {
                // Tiempo total: animación + 5s visible + 0.5s fade-out
                const cycleDuration = animationDuration + displayTime + fadeOutDuration;
                console.log(\`🔄 Repetición infinita: ciclo cada \${cycleDuration}ms (\${cycleDuration/1000}s)\`);

                rotationTimer = setTimeout(() => {
                    console.log('⏰ Reiniciando animación infinita...');
                    showLowerThird(index);
                }, cycleDuration);
            }
            // Si el modo es un número (repetir después de X minutos)
            else if (loopMode !== 'none' && !isNaN(parseInt(loopMode))) {
                const waitInterval = parseInt(loopMode) * 1000; // Ya viene en segundos
                // Tiempo total: animación + 5s visible + 0.5s fade-out + tiempo de espera
                const totalDuration = animationDuration + displayTime + fadeOutDuration + waitInterval;

                console.log(\`🔄 Repetición programada: \${totalDuration}ms total (\${totalDuration/60000} minutos)\`);
                console.log(\`   - Animación: \${animationDuration}ms\`);
                console.log(\`   - Visible: \${displayTime}ms\`);
                console.log(\`   - Fade-out: \${fadeOutDuration}ms\`);
                console.log(\`   - Espera: \${waitInterval}ms\`);

                rotationTimer = setTimeout(() => {
                    console.log('⏰ Reiniciando animación después del intervalo...');
                    showLowerThird(index);
                }, totalDuration);
            }
            // Si el modo es 'none', aplicar fade-out y dejar oculto
            else {
                console.log('✋ No hay repetición configurada, se quedará oculto después del fade-out');
            }
        }

        function startRotation() {
            if (data.lowerThirds.length > 0) {
                showLowerThird(currentIndex);
            }
        }

        startRotation();
    </script>
</body>
</html>`;
}

// Copy viewer link
function copyViewerLink() {
    let currentPath = decodeURIComponent(window.location.href);
    let directory = currentPath.substring(0, currentPath.lastIndexOf('/'));
    if (directory.startsWith('file:///')) {
        directory = directory.replace('file:///', '').replace(/\//g, '\\');
    }
    const viewerPath = directory + '\\lowerthirds-viewer.html';

    navigator.clipboard.writeText(viewerPath).then(() => {
        document.getElementById('viewerLink').textContent = viewerPath;
        alert('✅ Ruta copiada al portapapeles!\n\n📁 Archivo: lowerthirds-viewer.html\n\n💡 Pega esta ruta en OBS como "Browser Source" → "Local file"');
    }).catch(() => {
        alert('❌ Error al copiar. Haz clic en "📂 Mostrar Ruta" para ver la ubicación del archivo.');
    });
}

// Save to localStorage
function saveToLocalStorage() {
    try {
        const data = {
            lowerThirds: lowerThirds,
            rotation: {
                enabled: document.getElementById('enableRotation').checked,
                interval: parseInt(document.getElementById('rotationInterval').value)
            },
            lastUpdate: new Date().toISOString()
        };
        console.log('💾 Guardando en localStorage:', lowerThirds.length, 'lower thirds');
        localStorage.setItem('lowerThirdsData', JSON.stringify(data));
        console.log('✅ Configuración guardada automáticamente en localStorage');

        // Mostrar notificación visual
        showSaveNotification('✅ Guardado automáticamente');
    } catch (error) {
        console.error('Error al guardar en localStorage:', error);
        showSaveNotification('⚠️ Error al guardar. Usa "Descargar Archivo" como alternativa', true);
    }
}

// Mostrar notificación de guardado
function showSaveNotification(message, isError = false) {
    // Crear o obtener el elemento de notificación
    let notification = document.getElementById('saveNotification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'saveNotification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: 500;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        document.body.appendChild(notification);
    }

    notification.textContent = message;
    notification.style.background = isError ? '#ff5252' : '#4caf50';
    notification.style.color = 'white';
    notification.style.opacity = '1';

    setTimeout(() => {
        notification.style.opacity = '0';
    }, 2000);
}

// Load from localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('lowerThirdsData');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            lowerThirds = data.lowerThirds || [];
            console.log('📂 Cargando desde localStorage:', lowerThirds.length, 'lower thirds');
            if (data.rotation) {
                document.getElementById('enableRotation').checked = data.rotation.enabled;
                document.getElementById('rotationInterval').value = data.rotation.interval;
            }
            renderLowerThirdsList();
            console.log('✅ Configuración cargada desde localStorage');
        } catch (error) {
            console.error('Error al cargar desde localStorage:', error);
        }
    } else {
        console.log('ℹ️ No hay datos guardados en localStorage');
    }
}

// Auto-save rotation settings when changed
document.getElementById('enableRotation').addEventListener('change', saveToLocalStorage);
document.getElementById('rotationInterval').addEventListener('change', saveToLocalStorage);

// Initialize viewer path display
function initializeViewerPath() {
    let currentPath = decodeURIComponent(window.location.href);
    let directory = currentPath.substring(0, currentPath.lastIndexOf('/'));
    if (directory.startsWith('file:///')) {
        directory = directory.replace('file:///', '').replace(/\//g, '\\');
    }
    const viewerPath = directory + '\\lowerthirds-viewer.html';
    document.getElementById('viewerLink').textContent = viewerPath;
}

// Test localStorage availability
function testLocalStorage() {
    try {
        const test = '__localStorage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        console.log('✅ localStorage está disponible');
        return true;
    } catch (e) {
        console.error('❌ localStorage NO disponible:', e);
        showSaveNotification('⚠️ Guardado automático no disponible. Usa "💾 Guardar Configuración" o "📦 Descargar Archivo Viewer"', true);
        return false;
    }
}

// Update live preview
function updateLivePreview() {
    const mainText = document.getElementById('mainText').value || 'Texto Principal';
    const secondaryText = document.getElementById('secondaryText').value || 'Texto Secundario';
    const font = document.getElementById('fontSelect').value;
    const textSizeMain = document.getElementById('textSizeMain').value;
    const textSizeSecondary = document.getElementById('textSizeSecondary').value;
    const bgColor = document.getElementById('bgColor').value;
    const bgOpacity = document.getElementById('bgOpacity').value;
    const bgTransparent = document.getElementById('bgTransparent').checked;
    const neonEffect = document.getElementById('neonEffect').checked;
    const neonColor = document.getElementById('neonColor').value;
    const logoSize = document.getElementById('logoSize').value;

    // Update text content
    document.getElementById('previewMainText').textContent = mainText;
    document.getElementById('previewSecondaryText').textContent = secondaryText;

    // Update font
    document.getElementById('previewMainText').style.fontFamily = `'${font}', sans-serif`;
    document.getElementById('previewSecondaryText').style.fontFamily = `'${font}', sans-serif`;

    // Update text sizes
    document.getElementById('previewMainText').style.fontSize = textSizeMain + 'px';
    document.getElementById('previewSecondaryText').style.fontSize = textSizeSecondary + 'px';

    // Update text alignment
    const textAlignMain = document.getElementById('textAlignMain').value;
    const textAlignSecondary = document.getElementById('textAlignSecondary').value;
    document.getElementById('previewMainText').style.textAlign = textAlignMain;
    document.getElementById('previewSecondaryText').style.textAlign = textAlignSecondary;

    // Update text horizontal offset
    const textOffsetMainX = document.getElementById('textOffsetMainX').value;
    const textOffsetSecondaryX = document.getElementById('textOffsetSecondaryX').value;
    document.getElementById('previewMainText').style.transform = `translateX(${textOffsetMainX}px)`;
    document.getElementById('previewSecondaryText').style.transform = `translateX(${textOffsetSecondaryX}px)`;

    // Update background
    const previewDisplay = document.querySelector('.lower-third-preview-display');
    const previewTextContent = document.querySelector('.preview-text-content');
    const bgImageSize = document.getElementById('bgImageSize').value;
    const bgImageOffsetX = document.getElementById('bgImageOffsetX').value;
    const bgGradient = document.getElementById('bgGradient').checked;
    const cornerStyleElement = document.getElementById('cornerStyle');
    const cornerStyle = cornerStyleElement ? cornerStyleElement.value : 'rounded';

    // Remove all corner style classes
    previewDisplay.classList.remove(
        'corner-none', 'corner-rounded-sm', 'corner-rounded-md', 'corner-rounded-lg',
        'corner-cut-left', 'corner-cut-right', 'corner-cut-both',
        'corner-diagonal-tl', 'corner-diagonal-tr', 'corner-diagonal-br', 'corner-diagonal-bl',
        'corner-chevron-right', 'corner-chevron-left', 'corner-pentagon', 'corner-hexagon'
    );

    if (currentBgImageData) {
        // Cuando hay PNG, aplicar al contenedor de texto (no aplicar estilo de esquinas)
        previewDisplay.style.background = 'transparent';
        previewDisplay.style.backgroundImage = 'none';
        previewDisplay.style.border = 'none';

        previewTextContent.style.backgroundImage = `url('${currentBgImageData}')`;
        previewTextContent.style.backgroundSize = bgImageSize + '%';
        previewTextContent.style.backgroundPosition = `calc(50% + ${bgImageOffsetX}px) center`;
        previewTextContent.style.backgroundRepeat = 'no-repeat';
        previewTextContent.style.backgroundColor = 'transparent';
        previewTextContent.style.padding = '20px';
        previewTextContent.style.borderRadius = '15px';
        previewTextContent.style.minWidth = '400px';
        // Mostrar límites del contenedor cuando hay fondo PNG
        previewTextContent.style.border = '2px dashed #667eea';
        previewTextContent.style.boxShadow = '0 0 10px rgba(102, 126, 234, 0.5)';
    } else if (bgTransparent) {
        previewTextContent.style.backgroundImage = 'none';
        previewTextContent.style.padding = '0';
        previewTextContent.style.borderRadius = '0';
        previewTextContent.style.minWidth = 'auto';
        previewTextContent.style.border = 'none';
        previewTextContent.style.boxShadow = 'none';

        previewDisplay.style.background = 'transparent';
        previewDisplay.style.border = '2px dashed rgba(255, 255, 255, 0.3)';
        previewDisplay.style.backgroundImage = 'none';

        // Aplicar estilo de esquinas
        previewDisplay.classList.add('corner-' + cornerStyle);
    } else if (bgGradient) {
        // Degradado activado
        previewTextContent.style.backgroundImage = 'none';
        previewTextContent.style.padding = '0';
        previewTextContent.style.borderRadius = '0';
        previewTextContent.style.minWidth = 'auto';
        previewTextContent.style.border = 'none';
        previewTextContent.style.boxShadow = 'none';

        const gradientColor1 = document.getElementById('bgGradientColor1').value;
        const gradientColor2 = document.getElementById('bgGradientColor2').value;
        const gradientDirection = document.getElementById('bgGradientDirection').value;

        const r1 = parseInt(gradientColor1.slice(1, 3), 16);
        const g1 = parseInt(gradientColor1.slice(3, 5), 16);
        const b1 = parseInt(gradientColor1.slice(5, 7), 16);
        const color1 = `rgba(${r1}, ${g1}, ${b1}, ${bgOpacity / 100})`;

        const r2 = parseInt(gradientColor2.slice(1, 3), 16);
        const g2 = parseInt(gradientColor2.slice(3, 5), 16);
        const b2 = parseInt(gradientColor2.slice(5, 7), 16);
        const color2 = `rgba(${r2}, ${g2}, ${b2}, ${bgOpacity / 100})`;

        previewDisplay.style.background = `linear-gradient(${gradientDirection}, ${color1}, ${color2})`;
        previewDisplay.style.backgroundImage = `linear-gradient(${gradientDirection}, ${color1}, ${color2})`;
        previewDisplay.style.border = 'none';

        // Aplicar estilo de esquinas
        previewDisplay.classList.add('corner-' + cornerStyle);
    } else {
        // Color sólido
        previewTextContent.style.backgroundImage = 'none';
        previewTextContent.style.padding = '0';
        previewTextContent.style.borderRadius = '0';
        previewTextContent.style.minWidth = 'auto';
        previewTextContent.style.border = 'none';
        previewTextContent.style.boxShadow = 'none';

        const r = parseInt(bgColor.slice(1, 3), 16);
        const g = parseInt(bgColor.slice(3, 5), 16);
        const b = parseInt(bgColor.slice(5, 7), 16);
        previewDisplay.style.background = `rgba(${r}, ${g}, ${b}, ${bgOpacity / 100})`;
        previewDisplay.style.border = 'none';
        previewDisplay.style.backgroundImage = 'none';

        // Aplicar estilo de esquinas
        previewDisplay.classList.add('corner-' + cornerStyle);
    }

    // Update text color and neon effect
    const textColorMain = document.getElementById('textColorMain').value;
    const textColorSecondary = document.getElementById('textColorSecondary').value;

    if (neonEffect) {
        document.getElementById('previewMainText').style.color = neonColor;
        document.getElementById('previewSecondaryText').style.color = neonColor;
        document.getElementById('previewMainText').style.textShadow = `
            0 0 10px ${neonColor},
            0 0 20px ${neonColor},
            0 0 30px ${neonColor},
            0 0 40px ${neonColor},
            0 0 70px ${neonColor},
            2px 2px 4px rgba(0, 0, 0, 0.5)
        `;
        document.getElementById('previewSecondaryText').style.textShadow = `
            0 0 10px ${neonColor},
            0 0 20px ${neonColor},
            0 0 30px ${neonColor},
            0 0 40px ${neonColor},
            0 0 70px ${neonColor},
            2px 2px 4px rgba(0, 0, 0, 0.5)
        `;
        // Agregar contorno MUY sutil para un poquito más de definición
        document.getElementById('previewMainText').style.webkitTextStroke = '0.5px rgba(0, 0, 0, 0.3)';
        document.getElementById('previewSecondaryText').style.webkitTextStroke = '0.5px rgba(0, 0, 0, 0.3)';
    } else {
        document.getElementById('previewMainText').style.color = textColorMain;
        document.getElementById('previewSecondaryText').style.color = textColorSecondary;
        document.getElementById('previewMainText').style.textShadow = '2px 2px 8px rgba(0,0,0,0.8)';
        document.getElementById('previewSecondaryText').style.textShadow = '1px 1px 6px rgba(0,0,0,0.8)';
        // Remover contorno cuando no hay efecto neón
        document.getElementById('previewMainText').style.webkitTextStroke = '';
        document.getElementById('previewSecondaryText').style.webkitTextStroke = '';
    }

    // Update logo
    const previewLogo = document.getElementById('previewLogo');
    const logoBorderRadius = document.getElementById('logoBorderRadius').value;
    if (currentLogoData) {
        previewLogo.src = currentLogoData;
        previewLogo.style.display = 'block';
        previewLogo.style.width = logoSize + 'px';
        previewLogo.style.height = logoSize + 'px';
        previewLogo.style.borderRadius = logoBorderRadius + '%';
    } else {
        previewLogo.style.display = 'none';
    }
}

// Add event listeners for live preview updates
document.getElementById('mainText').addEventListener('input', updateLivePreview);
document.getElementById('secondaryText').addEventListener('input', updateLivePreview);
document.getElementById('fontSelect').addEventListener('change', updateLivePreview);
document.getElementById('textSizeMain').addEventListener('change', updateLivePreview);
document.getElementById('textSizeSecondary').addEventListener('change', updateLivePreview);
document.getElementById('textColorMain').addEventListener('input', updateLivePreview);
document.getElementById('textColorSecondary').addEventListener('input', updateLivePreview);
document.getElementById('textAlignMain').addEventListener('change', updateLivePreview);
document.getElementById('textAlignSecondary').addEventListener('change', updateLivePreview);
document.getElementById('textOffsetMainX').addEventListener('input', function(e) {
    document.getElementById('textOffsetMainXValue').textContent = e.target.value + 'px';
    updateLivePreview();
});
document.getElementById('textOffsetSecondaryX').addEventListener('input', function(e) {
    document.getElementById('textOffsetSecondaryXValue').textContent = e.target.value + 'px';
    updateLivePreview();
});
document.getElementById('bgColor').addEventListener('input', updateLivePreview);
document.getElementById('bgOpacity').addEventListener('input', updateLivePreview);
document.getElementById('bgTransparent').addEventListener('change', updateLivePreview);
document.getElementById('bgGradientColor1').addEventListener('input', updateLivePreview);
document.getElementById('bgGradientColor2').addEventListener('input', updateLivePreview);
document.getElementById('bgGradientDirection').addEventListener('change', updateLivePreview);
const cornerStyleElement = document.getElementById('cornerStyle');
if (cornerStyleElement) {
    cornerStyleElement.addEventListener('change', updateLivePreview);
} else {
    console.error('Error: elemento cornerStyle no encontrado al inicializar event listeners');
}
document.getElementById('bgImageSize').addEventListener('input', updateLivePreview);
document.getElementById('bgImageOffsetX').addEventListener('input', function(e) {
    document.getElementById('bgImageOffsetXValue').textContent = e.target.value + 'px';
    updateLivePreview();
});
document.getElementById('neonEffect').addEventListener('change', updateLivePreview);
document.getElementById('neonColor').addEventListener('input', updateLivePreview);
document.getElementById('logoSize').addEventListener('input', updateLivePreview);
document.getElementById('logoBorderRadius').addEventListener('input', function(e) {
    document.getElementById('logoBorderRadiusValue').textContent = e.target.value + '%';
    updateLivePreview();
});

// Initialize controls state
function initializeControlsState() {
    // Deshabilitar controles de degradado por defecto (ya que el checkbox está desmarcado)
    document.getElementById('bgGradientColor1').disabled = true;
    document.getElementById('bgGradientColor1Hex').disabled = true;
    document.getElementById('bgGradientColor2').disabled = true;
    document.getElementById('bgGradientColor2Hex').disabled = true;
    document.getElementById('bgGradientDirection').disabled = true;

    document.getElementById('bgGradientColor1').style.opacity = '0.5';
    document.getElementById('bgGradientColor1Hex').style.opacity = '0.5';
    document.getElementById('bgGradientColor2').style.opacity = '0.5';
    document.getElementById('bgGradientColor2Hex').style.opacity = '0.5';
    document.getElementById('bgGradientDirection').style.opacity = '0.5';

    // El selector de esquinas debe estar habilitado por defecto
    const cornerStyleElement = document.getElementById('cornerStyle');
    if (cornerStyleElement) {
        cornerStyleElement.disabled = false;
        cornerStyleElement.style.opacity = '1';
    }

    console.log('✅ Controles inicializados correctamente');
}

// Initialize
console.log('🚀 Inicializando Lower Thirds Editor...');
testLocalStorage();
initializeControlsState();
loadFromLocalStorage();
renderLowerThirdsList();
initializeViewerPath();
updateLivePreview(); // Initial preview update
console.log('✅ Editor inicializado correctamente');
