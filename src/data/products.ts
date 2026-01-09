// src/data/products.ts

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
// Fracture AIDS Part - 1
import fractureAidImg1 from '@/assets/fracture-aids-1/fracture-aids-1.jpg'
import fractureAidImg2 from '@/assets/fracture-aids-1/fracture-aids-2.jpg'
import fractureAidImg3 from '@/assets/fracture-aids-1/fracture-aids-3.jpg'
// Fracture AIDS Part - 2
import fractureAidImg4 from '@/assets/fracture-aids-2/fracture-aids-2-1.jpg'
import fractureAidImg5 from '@/assets/fracture-aids-2/fracture-aids-2-2.jpg'
import fractureAidImg6 from '@/assets/fracture-aids-2/fracture-aids-2-3.jpg'
import fractureAidImg7 from '@/assets/fracture-aids-2/fracture-aids-2-4.jpg'
import fractureAidImg8 from '@/assets/fracture-aids-2/fracture-aids-2-5.jpg'
import fractureAidImg9 from '@/assets/fracture-aids-2/fracture-aids-2-6.jpg'
// Knee Brace Part - 1
import kneeBraceImg1 from '@/assets/knee-brace-1/knee-brace-1.jpg'
import kneeBraceImg2 from '@/assets/knee-brace-1/knee-brace-2.jpg'
// Knee Brace Part - 2
import kneeBraceImg3 from '@/assets/knee-brace-2/knee-brace-2-1.jpg'
import kneeBraceImg4 from '@/assets/knee-brace-2/knee-brace-2-2.jpg'
import kneeBraceImg5 from '@/assets/knee-brace-2/knee-brace-2-3.jpg'
// Knee Brace Part - 3
import kneeBraceImg6 from '@/assets/knee-brace-3/knee-brace-3-1.jpg'
import kneeBraceImg7 from '@/assets/knee-brace-3/knee-brace-3-2.jpg'
import kneeBraceImg8 from '@/assets/knee-brace-3/knee-brace-3-3.jpg'
import kneeBraceImg9 from '@/assets/knee-brace-3/knee-brace-3-4.jpg'
// Ankle Support Part - 1
import ankleSupportImg1 from '@/assets/ankle-support-1/ankle-support-1.jpg'
import ankleSupportImg2 from '@/assets/ankle-support-1/ankle-support-2.jpg'
import ankleSupportImg3 from '@/assets/ankle-support-1/ankle-support-3.jpg'
//Elbow
import elbowImg1 from '@/assets/elbow/elbow-1.jpg'
import elbowImg2 from '@/assets/elbow/elbow-2.jpg'
import elbowImg3 from '@/assets/elbow/elbow-3.jpg'
//Walking AIDS Part - 1
import walkingAidsImg1 from '@/assets/walking-aids-1/walking-aids-1.jpg'
import walkingAidsImg2 from '@/assets/walking-aids-1/walking-aids-2.jpg'
import walkingAidsImg3 from '@/assets/walking-aids-1/walking-aids-3.jpg'
import walkingAidsImg4 from '@/assets/walking-aids-1/walking-aids-4.jpg'
//Walking AIDS Part - 2
import walkingAidsImg5 from '@/assets/walking-aids-2/walking-aids-2-1.jpg'
import walkingAidsImg6 from '@/assets/walking-aids-2/walking-aids-2-2.jpg'
import walkingAidsImg7 from '@/assets/walking-aids-2/walking-aids-2-3.jpg'
import walkingAidsImg8 from '@/assets/walking-aids-2/walking-aids-2-4.jpg'

export interface Product {
  id: number
  name: string
  category: string
  // description: string
  image: string
}

const products: Product[] = [
  {
    id: 23,
    name: 'Universal Shoulder Immobilizer',
    category: 'Fracture AIDS Part - 1',
    image: fractureAidImg1,
  },
  {
    id: 24,
    name: 'Elastic Shoulder Immobilizer',
    category: 'Fracture AIDS Part - 1',
    image: fractureAidImg2,
  },
  {
    id: 25,
    name: 'Shoulder Support',
    category: 'Fracture AIDS Part - 1',
    image: fractureAidImg3,
  },
  {
    id: 26,
    name: 'Clavicle Brace',
    category: 'Fracture AIDS Part - 2',
    image: fractureAidImg4,
  },
  {
    id: 27,
    name: 'Arm Sling Pouch(Baggy)',
    category: 'Fracture AIDS Part - 2',
    image: fractureAidImg5,
  },
  {
    id: 28,
    name: 'Pouch Arm Sling(Tropical)',
    category: 'Fracture AIDS Part - 2',
    image: fractureAidImg6,
  },
  {
    id: 29,
    name: 'Arm Immobilizer(Adjustable)',
    category: 'Fracture AIDS Part - 2',
    image: fractureAidImg7,
  },
  {
    id: 30,
    name: 'Cast Shoes',
    category: 'Fracture AIDS Part - 2',
    image: fractureAidImg8,
  },
  {
    id: 31,
    name: 'Cast Cover Arm',
    category: 'Fracture AIDS Part - 2',
    image: fractureAidImg9,
  },
  {
    id: 32,
    name: 'Knee Support (Dry-Tex)',
    category: 'Knee Brace Part - 1',
    image: kneeBraceImg1,
  },
  {
    id: 33,
    name: 'Knee Cap Furo (Pair)',
    category: 'Knee Brace Part - 1',
    image: kneeBraceImg2,
  },
  {
    id: 34,
    name: 'Knee Cap Hinged (Aluminium Hinges)',
    category: 'Knee Brace Part - 2',
    image: kneeBraceImg3,
  },
  {
    id: 35,
    name: 'Knee Cap Hinged with Patella Gel Pad',
    category: 'Knee Brace Part - 2',
    image: kneeBraceImg4,
  },
  {
    id: 36,
    name: 'Knee Support Hinged Dry-Tex',
    category: 'Knee Brace Part - 2',
    image: kneeBraceImg5,
  },
  {
    id: 37,
    name: 'Knee Brace/Immobilizer Long Type 19"/48cm',
    category: 'Knee Brace Part - 3',
    image: kneeBraceImg6,
  },
  {
    id: 38,
    name: 'Knee Brace/Immobilizer Short Type 14"/36cm',
    category: 'Knee Brace Part - 3',
    image: kneeBraceImg7,
  },
  {
    id: 39,
    name: 'Knee Cap Soft (Pair)',
    category: 'Knee Brace Part - 3',
    image: kneeBraceImg8,
  },
  {
    id: 40,
    name: 'Knee Cap Rigid Hinged (Nylon Hinges)',
    category: 'Knee Brace Part - 3',
    image: kneeBraceImg9,
  },
  {
    id: 41,
    name: 'Foot Walker Boot Short (with Airway)',
    category: 'Ankle Support Part - 1',
    image: ankleSupportImg1,
  },
  {
    id: 42,
    name: 'Anklet (Furo) (Pair)',
    category: 'Ankle Support Part - 1',
    image: ankleSupportImg2,
  },
  {
    id: 43,
    name: 'Anklet with Silicone Pad (Single)',
    category: 'Ankle Support Part - 1',
    image: ankleSupportImg3,
  },
  {
    id: 44,
    name: 'Tourniquet',
    category: 'Elbow',
    image: elbowImg1,
  },
  {
    id: 44,
    name: 'Tennis Elbow Support (Furo) (Pair)',
    category: 'Elbow',
    image: elbowImg2,
  },
  {
    id: 45,
    name: 'Tennis Elbow Brace with Silicone Pad',
    category: 'Elbow',
    image: elbowImg3,
  },
  {
    id: 46,
    name: 'Elbow Crutch Adjustable',
    category: 'Walking AIDS Part - 1',
    image: walkingAidsImg1,
  },
  {
    id: 47,
    name: "Walker Invalids's (HD)",
    category: 'Walking AIDS Part - 1',
    image: walkingAidsImg2,
  },
  {
    id: 48,
    name: "Walker Invalid's Front Wheel (HD)",
    category: 'Walking AIDS Part - 1',
    image: walkingAidsImg3,
  },
  {
    id: 49,
    name: 'Axillary Crutch (Pair)',
    category: 'Walking AIDS Part - 1',
    image: walkingAidsImg4,
  },
  {
    id: 50,
    name: 'Commode Stool',
    category: 'Walking AIDS Part - 2',
    image: walkingAidsImg5,
  },
  {
    id: 51,
    name: 'Commode Chair',
    category: 'Walking AIDS Part - 2',
    image: walkingAidsImg6,
  },
  {
    id: 52,
    name: 'Walking Stick (Soft Top Handle)',
    category: 'Walking AIDS Part - 2',
    image: walkingAidsImg7,
  },
  {
    id: 53,
    name: 'Walking Stick Quadripod',
    category: 'Walking AIDS Part - 2',
    image: walkingAidsImg8,
  },
  {
    id: 1,
    name: 'Cervical-Orthosis (Philadelphia)',
    category: 'Cervical Support Braces',
    image: cervicalBraceImg1,
  },
  {
    id: 2,
    name: 'Cervical-Collar Soft with Support',
    category: 'Cervical Support Braces',
    image: cervicalBraceImg2,
  },
  {
    id: 3,
    name: 'Cervical-Collar Soft(Firm Density)',
    category: 'Cervical Support Braces',
    image: cervicalBraceImg3,
  },
  {
    id: 4,
    name: 'Cervical-Collar(Hard Adjustable)',
    category: 'Cervical Support Braces',
    image: cervicalBraceImg4,
  },
  {
    id: 5,
    name: 'Abdominal Support 9”/22.5cm',
    category: 'Abdominal Support Braces',
    image: abdominalBraceImg1,
  },
  {
    id: 6,
    name: 'Tummy Trimmer/\nAbdominal 8"/20cm',
    category: 'Abdominal Support Braces',
    image: abdominalBraceImg2,
  },
  {
    id: 7,
    name: 'Ash-Brace(Hyper Extension Brace)',
    category: 'Abdominal Support Braces',
    image: abdominalBraceImg3,
  },
  {
    id: 8,
    name: 'Hernia Belt',
    category: 'Abdominal Support Braces',
    image: abdominalBraceImg4,
  },
  {
    id: 9,
    name: 'Scrotal Support',
    category: 'Abdominal Support Braces',
    image: abdominalBraceImg5,
  },
  {
    id: 10,
    name: 'Pelvic Binder',
    category: 'Abdominal Support Braces',
    image: abdominalBraceImg6,
  },
  {
    id: 11,
    name: 'Abdominal (AB-Core)',
    category: 'Corset (compression garments)',
    image: corsetImg1,
  },
  {
    id: 12,
    name: 'Hip(Mini Shaper)',
    category: 'Corset (compression garments)',
    image: corsetImg2,
  },
  {
    id: 13,
    name: 'Thigh Corset\n(Smart Shaper)',
    category: 'Corset (compression garments)',
    image: corsetImg3,
  },
  {
    id: 14,
    name: 'Rib-Belt',
    category: 'Rib / Chest Support / Braces',
    image: ribBraceImg1,
  },
  {
    id: 15,
    name: 'Chest Binder',
    category: 'Rib / Chest Support / Braces',
    image: ribBraceImg2,
  },
  {
    id: 16,
    name: 'Contoured Lumbo Sacral',
    category: 'Back / Spinal Support / Braces',
    image: backBraceImg1,
  },
  {
    id: 17,
    name: 'Lumbo Sacral Belt',
    category: 'Back / Spinal Support / Braces',
    image: backBraceImg2,
  },
  {
    id: 18,
    name: 'Lumbo Sacral Belt(Double Support)',
    category: 'Back / Spinal Support / Braces',
    image: backBraceImg3,
  },
  {
    id: 19,
    name: "Taylor's Brace",
    category: 'Back / Spinal Support / Braces',
    image: backBraceImg4,
  },
  {
    id: 20,
    name: 'Lumbo Lacepull Brace',
    category: 'Back / Spinal Support / Braces',
    image: backBraceImg5,
  },
  {
    id: 21,
    name: 'Posture Corrector',
    category: 'Back / Spinal Support / Braces',
    image: backBraceImg6,
  },
  {
    id: 22,
    name: 'Lacepull L.S Belt',
    category: 'Back / Spinal Support / Braces',
    image: backBraceImg7,
  }
]

export default products
