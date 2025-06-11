// Bài 1: Hoàn thành bài tập: Viết một lớp các đối tượng hình chữ nhật lấy tên là Rectangle, mỗi hình chữ nhật đều có những đặc tính sau:
// + Có thông số chiều dài.
// + Có thông số chiều rộng.
// + Có tính năng tính diện tích.
// + Có tính năng tính chu vi.
// => Tạo một đối tượng HCN.
// + Hiển thị thông tin hình chữ nhât lên web
// + Thay đổi chiều dài và chiều rộng của hình chữ nhật
// +  In ra màn hình diện tích và chu vi của hình chữ nhật đó.
// Bài 2: Bài tập Sinh Viên: Viết một lớp Student để quản lý thông tin sinh viên gồm các thuộc tính như tên, tuổi, một mảng điểm số. Tạo các phương thức cho phép thay đổi thông tin sinh viên, hiển thị thông tin sinh viên và tính trung bình điểm của sinh viên.
// => Tạo ra 2 đối tượng student và hiển thị sinh viên có điểm trung bình cao hơn.
// Bài 3: https://james.codegym.vn/mod/assign/view.php?id=15520&forceview=1

// BÀI 1
// class Rectangle {
//     length;
//     width;
//     constructor(lengthip, widthip) {
//         this.length = lengthip;
//         this.width = widthip;
//     }
//     calculateArea() {
//         return this.length * this.width;
//     }
//     calculatePerimeter() {
//         return (this.length + this.width) * 2
//     }
// }
// let rec1 = new Rectangle(20, 10);
// console.log(rec1);
// rec1.length = 30;
// rec1.width = 15;
// console.log("Diện tích HCN mới là: ",rec1.calculateArea());
// console.log("Chu vi HCN mới là: ",rec1.calculatePerimeter());

//BÀI 2
// class Student {
//     constructor(name, age, score) {
//         this.name = name;
//         this.age = age;
//         this.score = score;
//     }
//     updateInfor(newName, newAge) {
//         this.name = newName;
//         this.age = newAge;
//     }
//     addScore(newScore) {
//         this.score.push(newScore);
//     }
//     calculateAve() {
//         if (this.score.length === 0)
//             return 0;
//         let sum = 0;
//         for (let i = 0; i < this.score.length; i++) {
//             sum += this.score[i];
//         }
//         let avg = sum / this.score.length;
//         return avg;

//     }
//     display() {
//         console.log("Tên:", this.name);
//         console.log("Tuổi:", this.age);
//         console.log("Điểm số:", this.score);
//         console.log("Điểm trung bình:", this.calculateAve().toFixed(2));
//     }
// }
// let sv1 = new Student("Địch Thị Thanh Tuyền", 18, [8, 10, 10]);
// let sv2 = new Student("Địch Thị Thanh Mai", 20, [6, 10, 9.5]);
// if (sv1.calculateAve() > sv2.calculateAve()) {
//     console.log("Sinh viên có điểm trung bình cao hơn là: ", sv1.name)
// } else if (sv1.calculateAve() < sv2.calculateAve()) {
//     console.log("Sinh viên có điểm trung bình cao hơn là: ", sv2.name)

// } else {
//     console.log("Hai bạn có điểm bằng nhau");

// }

//BÀI 3
class Temperature {
    constructor(celsius) {
        this.min = -273;
        this.celsius = celsius;
        if (this.celsius < this.min) {
            console.log("Nhiệt độ đạt mức tối thiểu")
        }
    }
    toFahrenheit() {
        return (this.celsius * 1.8 + 32);
    }
    toKevin() {
        return (this.celsius + 273.15);
    }
}
let temp = new Temperature(25);
console.log("Nhiệt độ chuyển sang độ F là:", temp.toFahrenheit());
console.log("Nhiệt độ chuyển sang độ K là:", temp.toKevin());