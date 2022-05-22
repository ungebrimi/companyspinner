import * as THREE from 'three'
import Experience from '../../../Experience'

export default class Ring2
{
    constructor()
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.setRing2()

        this.time.on("tick", () =>
        {
          this.secondRing.rotation.z += 0.003
        })
    }

    setRing2()
    {
        this.secondRing = new THREE.Group()
        this.secondRing.rotation.x = 1.56
        this.secondRing.rotation.y = 0.7
        this.secondRing.rotation.z = 0.88
        this.scene.add(this.secondRing)
    }
}