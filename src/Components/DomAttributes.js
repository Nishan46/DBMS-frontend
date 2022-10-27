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
            value:'yyyy-MM-dd',
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
const photographer_data = [
    {
        name:'is_dslr_mirrorless_photographer',
        id:'is_dslr_mirrorless_photographer',
        // error:'Please enter your mobile number that contains 10 digits without country code !',
        type:'checkbox'
    },
    {
        name:'is_arial_photographer',
        id:'is_arial_photographer',
        // error:'Please enter your mobile number that contains 10 digits without country code !',
        type:'checkbox'
    },
    {
        name:'is_mobile_photographer',
        id:'is_mobile_photographer',
        // error:'Please enter your mobile number that contains 10 digits without country code !',
        type:'checkbox'
    }    

]

const first_photography = [
    {
        name:'type_of_cam',
        id:'type_of_cam',
        error:'This is not a valid email address !',
        type:'text'
    },
    {
        name:'type_of_lense',
        id:'type_of_lense',
        error:'This is not a valid email address !',
        type:'text'
    },
    {
        name:'has_trypod',
        id:'has_trypod',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'has_flashgun',
        id:'has_flashgun',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'has_ndfilter',
        id:'has_ndfilter',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'has_triger',
        id:'has_triger',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'has_softbox',
        id:'has_softbox',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'skil_exp',
        id:'skil_exp',
        error:'This is not a valid email address !',
        type:'textarea'
    }
    
]



const arial_photography = [
    {
        name:'type_of_drons',
        id:'type_of_drons',
        error:'This is not a valid email address !',
        type:'text'
    },
    {
        name:'is_registered',
        id:'is_registered',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'skil_exp',
        id:'skil_exp',
        error:'This is not a valid email address !',
        type:'textarea'
    },
]

const mobile_photography = [
    {
        name:'type_of_device',
        id:'type_of_device',
        error:'This is not a valid email address !',
        type:'text'
    },
    {
        name:'skil_exp',
        id:'skil_exp',
        error:'This is not a valid email address !',
        type:'textarea'
    },
]

const categories = [
    {
        name:'photoghaphy',
        id:'photoghaphy',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'videography',
        id:'videography',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'technical',
        id:'technical',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'announcing',
        id:'announcing',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'reporting',
        id:'reporting',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'photo_editing',
        id:'photo_editing',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'video_editing',
        id:'video_editing',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'graphic_design',
        id:'graphic_design',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
    {
        name:'web_design',
        id:'web_design',
        error:'This is not a valid email address !',
        type:'checkbox'
    },
]

export {member_data , photographer_data , first_photography , arial_photography , mobile_photography , categories}