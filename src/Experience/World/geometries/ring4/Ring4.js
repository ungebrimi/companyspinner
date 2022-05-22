import * as THREE from 'three'
import Experience from '../../../Experience'

export default class Ring4
{
    constructor()
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.scene = this.experience.scene
        this.setRing4()

        this.time.on("tick", () =>
        {
          this.fourthRing.rotation.z += 0.003
        })
    }

    setRing4()
    {
        this.fourthRing = new THREE.Group()
        this.fourthRing.rotation.y = 1.56
        this.fourthRing.rotation.z = 0.85
        this.scene.add(this.fourthRing)
    }
}