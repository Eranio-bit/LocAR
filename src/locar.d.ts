declare module 'locar' {
    import * as THREE from 'three';

    export class LocationBased {
        constructor(scene: THREE.Scene, camera: THREE.Camera);
        add(mesh: THREE.Mesh, longitude: number, latitude: number): void;
        startGps(): void;
        on(event: string, callback: (pos: { coords: { longitude: number, latitude: number } }, distMoved: number) => void): void;
    }

    export class WebcamRenderer {
        constructor(renderer: THREE.WebGLRenderer);
        update(): void;
    }

    export class DeviceOrientationControls {
        constructor(camera: THREE.Camera);
        update(): void;
    }
} 