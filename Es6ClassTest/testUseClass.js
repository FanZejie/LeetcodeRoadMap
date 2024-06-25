class Student{
    school = 'ABC School'; // 静态属性
   constructor(name, age, sex){
       this.name = name;
       this.age = age;
       this.sex = sex;
   }
   sayHello(){
       console.log(`Hello, my name is ${this.name},i study in ${this.school}`);
   }
}

const xiaoming = new Student('小明', 18, '男');
xiaoming.sayHello(); // 输出：Hello, my name is 小明