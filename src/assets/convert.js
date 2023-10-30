let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];

let convert = (arr) => {
    let idMap = {};
    let childrenMap = {};
    arr.map(item => {
        idMap[item.id] = item;
        let parentId = item.parentId;
        if (childrenMap[parentId]) {
            childrenMap[parentId].push(item.id)
        } else {
            childrenMap[parentId] = [item.id]
        }
    });
    console.log(idMap, childrenMap)

    let generateNode = (id) => {
        if (childrenMap[id]) {
            idMap[id].children = childrenMap[id].map(idItem => {
                return generateNode(idItem)
            })
        }
        return idMap[id]
    }

    let res = [];
    Object.keys(childrenMap).map(key => {
        if (!idMap[key]) {
            childrenMap[key].map(id => {
                res.push(generateNode(id))
            })
        }
    })

    return res;
}


console.log(JSON.stringify(convert(list)));