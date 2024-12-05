const user = {
    name : "test",
    img : "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
}

const arr = [
    {
        id: 1,
        name : "mango"
    },
    {
        id: 2,
        name : "orange"
    },
    {
        id: 3,
        name : "banana"
    }
];

const liItem = arr.map(product =>{
    return <li key={product.id}>{product.name}</li>
})
function Profile(){
    return (
        <>
            <h1>{user.name}</h1>
            <img src={user.img} alt="txt"  height="200px" width="200px"/>
            <ul>
                {liItem}
            </ul>
        </>
    )
}

export default Profile;