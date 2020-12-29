export class Init {
    load() {
        debugger
        if (localStorage.getItem('populations') === null || localStorage.getItem('populations') == undefined) {
            console.log('No populations Found... Creating...');

            let population = [
                {
                    id: '7c58e852-4acf-40bf-ab32-52ed61d532dc',
                    firstName: 'kishore',
                    lastName: 'vardhineni',
                    password: 'Vkishore@1212',
                    gender: 'male',
                    mobileNumber: 9010052295,
                    age: 28,
                    vote: 'yes',
                    date: '04/08/1991',
                    email: 'kishore.vardhineni01@gmail.com',
                    village: 'kothapalem',
                    address: 'H.No.3, N.N.Kandrika(vil/psot), Zarugumalli mandal, Prakasam district, Andhra Pradesh - 523271.',
                    role: 'admin'
                },
                {
                    id: '76f0789b-cdc9-4dd3-8a1f-fa8e8ad22b15',
                    firstName: 'kiran',
                    lastName: 'vardhineni',
                    password: 'Vkirankumar@1212',
                    gender: 'male',
                    age: 30,
                    vote: 'yes',
                    date: '05/09/1989',
                    mobileNumber: 9618070325,
                    email: 'kiran.vardhineni01@gmail.com',
                    village: 'kothapalem',
                    address: 'H.No.3, N.N.Kandrika(vil/psot), Zarugumalli mandal, Prakasam district, Andhra Pradesh - 523271.',
                    role: 'user'
                }
            ];

            localStorage.setItem('populations', JSON.stringify(population));
            return
        } else {
            console.log('Found populations...');
        }
    }
}