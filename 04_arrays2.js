const marvel_heros =["thor","ironman","spiderman"]
const dc= ["superman", "flash", "batman"]

// marvel_heros.push(dc) // insert array as a element in array dont merges
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// Using concat
// let new_marvels = marvel_heros.concat(dc) //merges two array
// console.log(new_marvels)


//"Spread operator"

const all_new_heros= [...marvel_heros,...dc]
console.log(all_new_heros)

const multi_array= [1,2,3,[4,5],6,[7,8,[9,10]]]
const flat_array = multi_array.flat(Infinity)
console.log(multi_array)
console.log(flat_array)




console.log(Array.isArray('HITESH'))
console.log(Array.from('HITESH'))
console.log(Array.from({name:'HITESH'})) ///Returns empty array


score1=1000
score2=2000
score3=3000
console.log(Array.of(score1,score2,score3))