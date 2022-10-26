const member_data = 
    [
        {
            name:'email',
            id:'email',
            error:'This is not a valid email address !',
            type:'email'
        },
        {
            name:'first_name',
            id:'first_name',
            error:'First name requierd !',
            type:'text'
        },
        {
            name:'last_name',
            id:'last_name',
            error:'Last name requierd !',
            type:'text'
        },
        {
            name:'full_name',
            id:'Full name',
            error:'full_name requierd !',
            type:'text'
        },
        {
            name:'birthday',
            id:'birthday',
            error:'Birthday required !',
            type:'date',
            value:'1999-01-01'
        },
        {
            name:'address',
            id:'address',
            error:'Address required !',
            type:'text'
        },
        {
            name:'grade',
            id:'grade',
            error:'Grade required !',
            type:'text'
        },
        {
            name:'phone',
            id:'phone',
            error:'Please enter your mobile number that contains 10 digits without country code !',
            type:'text',
            patern:'^[0-9]{10}$'
        },
        {
            name:'gender',
            id:'gender',
            error:'Gender required !',
            type:'gender'
        },
        {
            name:'parent_name',
            id:'parent_name',
            error:'Parent Name required !',
            type:'text'
        },
        {
            name:'parent_phone',
            id:'parent_phone',
            error:'Please enter your mobile number that contains 10 digits without country code !',
            type:'text',
            patern:'^[0-9]{10}$'
        },
        {
            name:'parent_adress',
            id:'parent_adress',
            error:'Parent adress required !',
            type:'text'
        }
    ]
export {member_data}