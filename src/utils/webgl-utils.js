import * as THREE from 'three';

// Fonction pour détecter la version de WebGL disponible
export const detectWebGLVersion = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      return gl instanceof WebGL2RenderingContext ? 'webgl2' : 'webgl';
    }
  } catch (e) {
    return null;
  }
  return null;
};

// Fonction pour obtenir un renderer adapté à la version de WebGL détectée
export const getWebGLRenderer = () => {
  const webglVersion = detectWebGLVersion();
  let renderer;

  if (webglVersion === 'webgl2') {
    // Utiliser WebGL2Renderer si WebGL2 est disponible
    renderer = new THREE.WebGLRenderer({ antialias: true });
  } else {
    // Utiliser WebGLRenderer pour WebGL 1 (ou en cas de détection non réussie)
    renderer = new THREE.WebGLRenderer({ antialias: true });
  }

  return renderer;
};
