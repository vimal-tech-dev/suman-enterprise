// src/data/products.ts
export interface Product {
    id: number
    name: string
    category: string
    // description: string
    image: string
}

// Import image paths
//Cervical Support Braces
import cervicalBraceImg1 from '@/assets/cervical-braces/cervical-braces-1.jpg'
import cervicalBraceImg2 from '@/assets/cervical-braces/cervical-braces-2.jpg'
import cervicalBraceImg3 from '@/assets/cervical-braces/cervical-braces-3.jpg'
import cervicalBraceImg4 from '@/assets/cervical-braces/cervical-braces-4.jpg'
//Abdominal Support Braces
import abdominalBraceImg1 from '@/assets/abdominal-braces/abdominal-braces-1.jpg'
import abdominalBraceImg2 from '@/assets/abdominal-braces/abdominal-braces-2.jpg'
import abdominalBraceImg3 from '@/assets/abdominal-braces/abdominal-braces-3.jpg'
import abdominalBraceImg4 from '@/assets/abdominal-braces/abdominal-braces-4.jpg'
import abdominalBraceImg5 from '@/assets/abdominal-braces/abdominal-braces-5.jpg'
import abdominalBraceImg6 from '@/assets/abdominal-braces/abdominal-braces-6.jpg'
//CORSET
import corsetImg1 from '@/assets/corset/corset-1.jpg'
import corsetImg2 from '@/assets/corset/corset-2.jpg'
import corsetImg3 from '@/assets/corset/corset-3.jpg'
//RIB / CHEST SUPPORT/ BRACES
import ribBraceImg1 from '@/assets/rib-chest-braces/rib-chest-braces-1.jpg'
import ribBraceImg2 from '@/assets/rib-chest-braces/rib-chest-braces-2.jpg'
//Back / Spinal Support / Braces
import backBraceImg1 from '@/assets/back-spinal-braces/back-spinal-braces-1.jpg'
import backBraceImg2 from '@/assets/back-spinal-braces/back-spinal-braces-2.jpg'
import backBraceImg3 from '@/assets/back-spinal-braces/back-spinal-braces-3.jpg'
import backBraceImg4 from '@/assets/back-spinal-braces/back-spinal-braces-4.jpg'
import backBraceImg5 from '@/assets/back-spinal-braces/back-spinal-braces-5.jpg'
import backBraceImg6 from '@/assets/back-spinal-braces/back-spinal-braces-6.jpg'
import backBraceImg7 from '@/assets/back-spinal-braces/back-spinal-braces-7.jpg'
// Fracture Aids Part - 1
import fractureAidImg1 from '@/assets/fracture-aids-1/fracture-aids-1.jpg'
import fractureAidImg2 from '@/assets/fracture-aids-1/fracture-aids-2.jpg'
import fractureAidImg3 from '@/assets/fracture-aids-1/fracture-aids-3.jpg'
// Fracture Aids Part - 2
import fractureAidImg4 from '@/assets/fracture-aids-2/fracture-aids-2-1.jpg'
import fractureAidImg5 from '@/assets/fracture-aids-2/fracture-aids-2-2.jpg'
import fractureAidImg6 from '@/assets/fracture-aids-2/fracture-aids-2-3.jpg'
import fractureAidImg7 from '@/assets/fracture-aids-2/fracture-aids-2-4.jpg'
import fractureAidImg8 from '@/assets/fracture-aids-2/fracture-aids-2-5.jpg'
import fractureAidImg9 from '@/assets/fracture-aids-2/fracture-aids-2-6.jpg'

const products: Product[] = [
    {
        id: 1,
        name: 'Cervical-Orthosis (Philadelphia)',
        category: 'Cervical Support Braces',
        image: cervicalBraceImg1
    },
    {
        id: 2,
        name: 'Cervical-Collar Soft with Support',
        category: 'Cervical Support Braces',
        image: cervicalBraceImg2
    },
    {
        id: 3,
        name: 'Cervical-Collar Soft(Firm Density)',
        category: 'Cervical Support Braces',
        image: cervicalBraceImg3
    },
    {
        id: 4,
        name: 'Cervical-Collar(Hard Adjustable)',
        category: 'Cervical Support Braces',
        image: cervicalBraceImg4
    },
    {
        id: 5,
        name: 'Abdominal Support 9”/22.5cm',
        category: 'Abdominal Support Braces',
        image: abdominalBraceImg1
    },
    {
        id: 6,
        name: 'Tummy Trimmer/\nAbdominal 8"/20cm',
        category: 'Abdominal Support Braces',
        image: abdominalBraceImg2
    },
    {
        id: 7,
        name: 'Ash-Brace(Hyper Extension Brace)',
        category: 'Abdominal Support Braces',
        image: abdominalBraceImg3
    },
    {
        id: 8,
        name: 'Hernia Belt',
        category: 'Abdominal Support Braces',
        image: abdominalBraceImg4
    },
    {
        id: 9,
        name: 'Scrotal Support',
        category: 'Abdominal Support Braces',
        image: abdominalBraceImg5
    },
    {
        id: 10,
        name: 'Pelvic Binder',
        category: 'Abdominal Support Braces',
        image: abdominalBraceImg6
    },
    {
        id: 11,
        name: 'Abdominal (AB-Core)',
        category: 'Corset (compression garments)',
        image: corsetImg1
    },
    {
        id: 12,
        name: 'Hip(Mini Shaper)',
        category: 'Corset (compression garments)',
        image: corsetImg2
    },
    {
        id: 13,
        name: 'Thigh Corset\n(Smart Shaper)',
        category: 'Corset (compression garments)',
        image: corsetImg3
    },
    {
        id: 14,
        name: 'Rib-Belt',
        category: 'Rib / Chest Support / Braces',
        image: ribBraceImg1
    },
    {
        id: 15,
        name: 'Chest Binder',
        category: 'Rib / Chest Support / Braces',
        image: ribBraceImg2
    },
    {
        id: 16,
        name: 'Contoured Lumbo Sacral',
        category: 'Back / Spinal Support / Braces',
        image: backBraceImg1
    },
    {
        id: 17,
        name: 'Lumbo Sacral Belt',
        category: 'Back / Spinal Support / Braces',
        image: backBraceImg2
    },
    {
        id: 18,
        name: 'Lumbo Sacral Belt(Double Support)',
        category: 'Back / Spinal Support / Braces',
        image: backBraceImg3
    },
    {
        id: 19,
        name: "Taylor's Brace",
        category: 'Back / Spinal Support / Braces',
        image: backBraceImg4
    },
    {
        id: 20,
        name: 'Lumbo Lacepull Brace',
        category: 'Back / Spinal Support / Braces',
        image: backBraceImg5
    },
    {
        id: 21,
        name: 'Posture Corrector',
        category: 'Back / Spinal Support / Braces',
        image: backBraceImg6
    },
    {
        id: 22,
        name: 'Lacepull L.S Belt',
        category: 'Back / Spinal Support / Braces',
        image: backBraceImg7
    },
    {
        id: 23,
        name: 'Universal Shoulder Immobilizer',
        category: 'FRACTURE AIDS Part - 1',
        image: fractureAidImg1
    },
    {
        id: 24,
        name: 'Elastic Shoulder Immobilizer',
        category: 'FRACTURE AIDS Part - 1',
        image: fractureAidImg2
    },
    {
        id: 25,
        name: 'Shoulder Support',
        category: 'FRACTURE AIDS Part - 1',
        image: fractureAidImg3
    },
    {
        id: 26,
        name: 'Clavicle Brace',
        category: 'FRACTURE AIDS Part - 2',
        image: fractureAidImg4
    },
    {
        id: 27,
        name: 'Arm Sling Pouch(Baggy)',
        category: 'FRACTURE AIDS Part - 2',
        image: fractureAidImg5
    },
    {
        id: 28,
        name: 'Pouch Arm Sling(Tropical)',
        category: 'FRACTURE AIDS Part - 2',
        image: fractureAidImg6
    },
    {
        id: 29,
        name: 'Arm Immobilizer(Adjustable)',
        category: 'FRACTURE AIDS Part - 2',
        image: fractureAidImg7
    },
    {
        id: 30,
        name: 'Cast Shoes',
        category: 'FRACTURE AIDS Part - 2',
        image: fractureAidImg8
    },
    {
        id: 31,
        name: 'Cast Cover Arm',
        category: 'FRACTURE AIDS Part - 2',
        image: fractureAidImg9
    }
]

export default products
