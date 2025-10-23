// Global variables
let lowerThirds = [];
let currentLogoData = null;

// Sync color picker with hex input - Background Color
document.getElementById('bgColor').addEventListener('input', function(e) {
    document.getElementById('bgColorHex').value = e.target.value.toUpperCase();
});

document.getElementById('bgColorHex').addEventListener('input', function(e) {
    let hex = e.target.value;
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
        document.getElementById('bgColor').value = hex;
    }
});

// Handle transparent background toggle
document.getElementById('bgTransparent').addEventListener('change', function(e) {
    const isTransparent = e.target.checked;
    document.getElementById('bgColor').disabled = isTransparent;
    document.getElementById('bgColorHex').disabled = isTransparent;
    document.getElementById('bgOpacity').disabled = isTransparent;

    if (isTransparent) {
        document.getElementById('bgColor').style.opacity = '0.5';
        document.getElementById('bgColorHex').style.opacity = '0.5';
        document.getElementById('bgOpacity').style.opacity = '0.5';
    } else {
        document.getElementById('bgColor').style.opacity = '1';
        document.getElementById('bgColorHex').style.opacity = '1';
        document.getElementById('bgOpacity').style.opacity = '1';
    }
});

// Sync color picker with hex input - Neon Color
document.getElementById('neonColor').addEventListener('input', function(e) {
    document.getElementById('neonColorHex').value = e.target.value.toUpperCase();
});

document.getElementById('neonColorHex').addEventListener('input', function(e) {
    let hex = e.target.value;
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
        document.getElementById('neonColor').value = hex;
    }
});

// Load logo
document.getElementById('logoUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            currentLogoData = event.target.result;
        };
        reader.readAsDataURL(file);
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

    const lowerThird = {
        id: Date.now(),
        logo: currentLogoData,
        mainText: mainText,
        secondaryText: secondaryText,
        font: document.getElementById('fontSelect').value,
        bgColor: document.getElementById('bgColor').value,
        bgOpacity: document.getElementById('bgOpacity').value,
        bgTransparent: document.getElementById('bgTransparent').checked,
        containerAnimation: document.getElementById('containerAnimation').value,
        textAnimation: document.getElementById('textAnimation').value,
        neonEffect: document.getElementById('neonEffect').checked,
        neonColor: document.getElementById('neonColor').value,
        animDuration: document.getElementById('animDuration').value,
        logoSize: document.getElementById('logoSize').value,
        displayDuration: document.getElementById('displayDuration').value,
        loopAnimation: document.getElementById('loopAnimation').checked,
        loopInterval: document.getElementById('loopInterval').value
    };

    lowerThirds.push(lowerThird);
    renderLowerThirdsList();

    // Clear inputs
    document.getElementById('mainText').value = '';
    document.getElementById('secondaryText').value = '';
    currentLogoData = null;
    document.getElementById('logoUpload').value = '';
}

// Remove lower third
function removeLowerThird(id) {
    lowerThirds = lowerThirds.filter(lt => lt.id !== id);
    renderLowerThirdsList();
}

// Render list
function renderLowerThirdsList() {
    const container = document.getElementById('lowerThirdsList');

    if (lowerThirds.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No hay lower thirds agregados</p>';
        return;
    }

    container.innerHTML = lowerThirds.map(lt => `
        <div class="lower-third-item">
            <div class="lower-third-preview">
                ${lt.logo ? `<img src="${lt.logo}" class="preview-logo" alt="Logo">` : '<div class="preview-logo"></div>'}
                <div class="preview-text">
                    <h3>${lt.mainText}</h3>
                    <p>${lt.secondaryText || 'Sin subtítulo'}</p>
                    <span class="preview-badge">${lt.font}</span>
                    ${lt.displayDuration ? `<span class="preview-badge" style="background: #4facfe;">⏱️ ${lt.displayDuration}s</span>` : ''}
                    ${lt.bgTransparent ? '<span class="preview-badge" style="background: rgba(0,0,0,0.1); color: #333; border: 2px dashed #999;">🔲 Transparente</span>' : ''}
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

// Generate viewer link
function generateViewerLink() {
    if (lowerThirds.length === 0) {
        alert('Agrega al menos un lower third antes de generar el viewer');
        return;
    }

    const viewerData = {
        lowerThirds: lowerThirds,
        rotation: {
            enabled: document.getElementById('enableRotation').checked,
            interval: parseInt(document.getElementById('rotationInterval').value)
        }
    };

    // Fixed filename
    const fileName = 'lowerthirds-view.html';

    // Create viewer HTML file
    const viewerHTML = generateViewerHTML(viewerData);
    const blob = new Blob([viewerHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);

    // Get the current directory path (Windows compatible)
    let currentPath = window.location.href;

    // Convert file:/// URL to Windows path
    let directory = currentPath.substring(0, currentPath.lastIndexOf('/'));
    if (directory.startsWith('file:///')) {
        directory = directory.replace('file:///', '').replace(/\//g, '\\');
    }

    const viewerPath = directory + '\\' + fileName;

    // Store the generated filename for copy function
    document.getElementById('viewerLink').setAttribute('data-filename', fileName);
    document.getElementById('viewerLink').textContent = viewerPath;

    alert('✅ Archivo ' + fileName + ' descargado!\n\n📝 IMPORTANTE:\n1. Busca el archivo en tu carpeta de Descargas\n2. Muévelo a la carpeta: ' + directory + '\n3. En OBS: Browser Source → Local file → Busca el archivo\n\n💡 El archivo se sobrescribirá cada vez que generes un nuevo viewer');
}

// Generate viewer HTML
function generateViewerHTML(data) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lower Thirds Viewer - OBS</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;700&family=Poppins:wght@400;700&family=Bebas+Neue&family=Oswald:wght@400;700&family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
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
            bottom: 50px;
            left: 50px;
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 20px 40px;
            border-radius: 15px;
            opacity: 0;
            transform: translateX(-100%);
        }
        .lower-third.active { opacity: 1; transform: translateX(0); }
        .logo {
            object-fit: contain;
            filter: drop-shadow(0 5px 15px rgba(0,0,0,0.5));
        }
        .text-content { display: flex; flex-direction: column; gap: 5px; }
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
            text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor;
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
            const container = document.getElementById('lowerThirdContainer');
            const lt = data.lowerThirds[index];

            const bgColor = lt.bgTransparent ? 'transparent' : hexToRgba(lt.bgColor, lt.bgOpacity);
            const neonClass = lt.neonEffect ? 'neon' : '';
            const neonStyle = lt.neonEffect ? \`color: \${lt.neonColor};\` : '';

            container.innerHTML = \`
                <div class="lower-third active" style="
                    background: \${bgColor};
                    font-family: '\${lt.font}', sans-serif;
                    animation: \${lt.containerAnimation} \${lt.animDuration}s ease-out \${lt.loopAnimation ? 'infinite' : ''};
                    animation-delay: 0s;
                ">
                    \${lt.logo ? \`<img src="\${lt.logo}" class="logo" style="width: \${lt.logoSize}px; height: \${lt.logoSize}px;" alt="Logo">\` : ''}
                    <div class="text-content">
                        <div class="main-text \${neonClass}" style="\${neonStyle}">\${lt.mainText}</div>
                        \${lt.secondaryText ? \`<div class="secondary-text">\${lt.secondaryText}</div>\` : ''}
                    </div>
                </div>
            \`;

            // Si la animación se repite indefinidamente, reiniciarla en el intervalo especificado
            if (lt.loopAnimation && lt.loopInterval) {
                const loopDuration = parseInt(lt.loopInterval) * 1000;
                clearTimeout(rotationTimer);
                rotationTimer = setTimeout(() => {
                    const element = container.querySelector('.lower-third');
                    if (element) {
                        element.style.animation = 'none';
                        setTimeout(() => {
                            element.style.animation = \`\${lt.containerAnimation} \${lt.animDuration}s ease-out\`;
                        }, 10);
                    }
                    showLowerThird(index);
                }, loopDuration);
            }
            // Schedule next lower third with individual duration
            else if (data.rotation.enabled && data.lowerThirds.length > 1) {
                const duration = lt.displayDuration ? parseInt(lt.displayDuration) * 1000 : data.rotation.interval * 1000;
                clearTimeout(rotationTimer);
                rotationTimer = setTimeout(() => {
                    currentIndex = (currentIndex + 1) % data.lowerThirds.length;
                    showLowerThird(currentIndex);
                }, duration);
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
    const viewerLinkElement = document.getElementById('viewerLink');
    const link = viewerLinkElement.textContent;

    if (link.includes('Haz clic')) {
        alert('⚠️ Primero genera el link del viewer haciendo clic en "🔗 Generar Link Viewer"');
        return;
    }

    const fileName = viewerLinkElement.getAttribute('data-filename');

    navigator.clipboard.writeText(link).then(() => {
        alert('✅ Ruta copiada al portapapeles!\n\n📁 Archivo: ' + (fileName || 'lowerthirds-view-*.html') + '\n\n💡 Recuerda:\n- Guardar el archivo descargado en la misma carpeta\n- Usar esta ruta en OBS como "Browser Source" → "Local file"');
    }).catch(() => {
        alert('❌ Error al copiar. Copia manualmente la ruta mostrada arriba.');
    });
}

// Initialize
renderLowerThirdsList();
