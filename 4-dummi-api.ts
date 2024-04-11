import axios from 'axios'

async function getUsers(url: string) {
   try {
      const response = await axios.get<User[]>(url);
      const users = response.data
      for (const user of users) {
         console.log(user.firstName)
      }

   }
   catch (error) {
      if (error instanceof Error) {
         console.log(error.message)
      }
   }
}


enum Gender {
   MALE = 'male',
   FEMALE = 'female'
}
enum BloodType {
   IPos = '0+',
   INeg = '0-',
   IIPos = 'A+',
   IINeg = 'A-',
   IIIPos = 'B+',
   IIINeg = 'B-',
   IVPos = 'AB+',
   IVNeg = 'AB-',
}

interface User {
   id: number,
   firstName: string,
   lastName: string,
   maidenName: string,
   age: number,
   gender: Gender,
   email: string,
   phone: string,
   username: string,
   password: string,
   birthDate: string,
   image: string,
   bloodGroup: BloodType,
   height: number,
   weight: number,
   eyeColor: string,
   hair: {
      color: string,
      type: string
   },
   domain: string,
   ip: string,
   address: {
      address: string,
      city: string,
      coordinates: {
         lat: number,
         lng: number
      },
      postalCode: string,
      state: string
   },
   macAddress: string,
   university: string,
   bank: {
      cardExpire: string,
      cardNumber: string,
      cardType: string,
      currency: string,
      iban: string
   },
   company: {
      address: {
         address: string,
         city: string,
         coordinates: {
            lat: number,
            lng: number
         },
         postalCode: string,
         state: string
      },
      department: string,
      name: string,
      title: string
   },
   ein: string,
   ssn: string,
   userAgent: string,
   crypto: {
      coin: string,
      wallet: string,
      network: string
   }
}

getUsers('https://dummyjson.com/users')