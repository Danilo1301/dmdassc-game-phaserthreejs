import Phaser from 'phaser';
import { enable3d, Scene3D, PhysicsLoader, Canvas, THREE } from '@enable3d/phaser-extension'

class MainScene extends Scene3D {
  constructor() {
    super({key: 'MainScene'})
  }

  async init() {
    this.accessThirdDimension()

    //this.renderer.setPixelRatio(1)
    //this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  async preload() {
    // preload your assets here
  }

  async create() {
    this.third.warpSpeed()
    this.third.physics.add.box()

    // set up scene (light, ground, grid, sky, orbitControls)
    //this.warpSpeed()

    // enable physics debug

    
    //this.physics.debug.enable()

    // position camera
    //this.camera.position.set(10, 10, 20)

    // blue box (without physics)
    //this.add.box({ y: 2 }, { lambert: { color: 'deepskyblue' } })

    // pink box (with physics)
    //this.physics.add.box({ y: 10 }, { lambert: { color: 'hotpink' } })
  }

  update() {
    //this.box.rotation.x += 0.01
    //this.box.rotation.y += 0.01
  }
}

// set your project configs
const config = {
    type: Phaser.WEBGL,
    transparent: true,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: window.innerWidth * Math.max(1, window.devicePixelRatio / 2),
      height: window.innerHeight * Math.max(1, window.devicePixelRatio / 2)
    },
    scene: [MainScene],
    ...Canvas()
  }

  window.addEventListener('load', () => {
    enable3d(() => new Phaser.Game(config)).withPhysics('/assets/ammo')
  })
  
// load the ammo.js file from the /lib folder and