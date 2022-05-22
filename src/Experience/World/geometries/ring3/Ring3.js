import * as THREE from 'three'
import Experience from '../../../Experience'

export default class Ring3
{
    constructor()
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.scene = this.experience.scene
        this.setRing3()

        this.time.on("tick", () =>
        {
          this.thirdRing.rotation.z += 0.003
        })
    }

    setRing3()
    {
        this.thirdRing = new THREE.Group()
        this.thirdRing.rotation.x = 1.56
        this.thirdRing.rotation.y = 2.54
        this.thirdRing.rotation.z = 0.6
        this.scene.add(this.thirdRing)
    }
}