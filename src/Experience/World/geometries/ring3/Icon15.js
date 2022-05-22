import * as THREE from 'three'
import Experience from "../../../Experience"
import Ring3 from './Ring3'

export default class Icon15
{
    constructor()
    {
        this.experience = new Experience()
        this.ring3 = new Ring3()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.setIcon()
    }

    setIcon()
    {
        const textureLoader = new THREE.TextureLoader()
        const reallusionTexture = textureLoader.load('companyLogo/Reallusion.png')

        const mediaQueryMedium = window.matchMedia('(max-width: 700px)')
        if(mediaQueryMedium.matches)
        {
         this.radius = 0.03
        }
        else
        {
         this.radius = 0.025
        }

        this.icon15 = new THREE.Mesh(
            new THREE.CircleBufferGeometry(this.radius, 20),
            new THREE.MeshBasicMaterial(
                {
                    map: reallusionTexture,
                    transparent: true,
                    side: THREE.DoubleSide
                }
            )
        )
        
        this.icon15.position.set(0.531, -0.307, 0)
        this.icon15.rotation.set(-1.64, 1.6, -2.5)
        this.ring3.thirdRing.add(this.icon15)
    }
}