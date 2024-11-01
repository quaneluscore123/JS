//var: variable (bien)
/*
Giới thiệu 1 số hàm built-in
    1.Alert
    2.Console
    3.Confirm
    4.Prompt
    5.Set timeout
    6.Set interval
*/
// Alert, Prompt, Confirm se để lại trên hộp thoại
// 3 cái còn lại chạy trên console ở inspect

// console.log('Day la 1 dong log'); chạy ở inspect console
// confirm('Xac nhan ban da du tuoi!'); chỉ để ra hộp thoại có nút cancel and Ok
// prompt('Xac nhan ban da du tuoi!'); hộp thoại có ô input

// setTimeout(function() {
//     alert('Thong bao');
// }, 1000) 
//-->Chạy lệnh sau 1 khoảng thời gian và chỉ chạy 1 lần

// setInterval(function() {
//     console.log('Day la log' + Math.random);
// }, 1000)
//-->Chạy liên tục sau 1 khoảng thời gian

//==================================================

/*
Giới thiệu về toán tử JS
    1.Toán tử số học - Arithmetic
    2.Toán tử gán - Assignment
    4.Toán tử logic - Logical
    5.Toán tử so sánh - Comparison
*/

//==================================================

/*

    Toán tử số học 
        1.Cộng, trừ, nhân, chia - +, -, *, /
        2.Luỹ thừa - **
        3.Chia lấy số dư - %
        4.Tăng 1 giá trị số - ++
        5.Giảm 1 giá trị số - --
 */

//==================================================

/*
    Toán tử gán
        **=     x**=y       x = x ** y
        /=      x/=y        x = x / y

*/

//==================================================

/*
    Toán tử ++ --
    Prefix & Postfix(Tiền tố & hậu tố)

    var a = 1;
    var b = ++a * a--;
    console.log(b) ==> 4
*/

//==================================================

/*
var firstName = 'Kiều';
var lastName = 'Trang';
var fullName = firstName + ' ' + lastName; 
//--> KiềuTrang
*/

//Boolean --> True or False
// Toán tử so sánh trả về giá trị Boolean

//===================================================

/*
    If - else
        1. Trả về 0;
        2. false
        3. '' - ""
        4. undefined
        5. NaN
        6. null

    --> Ngoài các trường hợp trên thì trả về True
*/

//====================================================

/*
    Kiểu dữ liệu nguyên thuỷ - Primitive Data
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol

    --> ko sửa được

    Kiểu dữ liệu phức tạp - Complex Data
        - Function
        - Object

    --> sửa được
*/

// Undefined: chỉ có biến mà ko gán giá trị
// var isNull = null; --> ko có j
// Symbol: var id = Symbol('id'); //unique

// Function
// var myFunction= function() {
//     alert("Hi");
// }
// myFunction();

// Object types
// var myObject = {
//     name: 'Quan',
//     age: 18,
//     address: 'Ha Noi'
// };


//Array
// var myArray = [
//     'JS', 
//     'PHP',
//     'Ruby'
// ];


//--> Cach kiem tra kieu du lieu: console.log(typeof TenKieuDuLieu);
// Ket qua typeof se la 1 chuỗi

//====================================================

    //TOÁN TỬ SO SÁNH 
    /*
        == chỉ so sánh value
        === so sánh kiểu kiểu dữ liệu và value
        !== tương tự 


    */

//=======================================================

/*
    1. Hàm(function) trong JS
        - Là 1 khối mã 
        - Làm 1 việc cụ thể

    2. Loại hàm 
        - Built-in
        - Tự định nghĩa

    3. Tính chất
        - Không thực thi khi định nghĩa 
        - Sẽ thực thi khi được gọi
        - Có thể nhận tham số
        - Có thể trả về 1 giá trị
    
    4. Tạo hàm đầu tiên

    function showDialog() {
        //code
    }
    
    // showDialog(); gọi hàm
    // call(showDialog);

*/

//=====================================================

/*

    Tham số trong hàm

        function Diary(message) { 
            console.log(typeof message); //message: tham số
        }

        Diary('Day la doi so'); // Đây là đối số khi mà truyền tham số vô

*/

// function writeLog() {
//     var myString = '';
//     for( var param of arguments){
//         myString += `${param} - `
//     }
//     console.log(myString);
// }

// writeLog('Log 1', 'Log 2', 'Log 3');

//===============================================================

/*
    Return trong hàm - JS cơ bản

        function cong(a, b){
            return a + b; --> trả về phép toán

            return a.toString() + b.toString();
            --> trả về 1 nối chuỗi
        }

        var result = cong(a, b);
        console.log(result);

*/

//=================================================================

/*
    Các loại function
    1. Declaration function
    2. Expresstion function
    3. Arrow function

    function showMessage(){
        --> Declaration function
    }

    var showMessage2 = function() {
        --> Expression function
    }


*/

//=====================================================================

/*
    CHUỖI TRONG JAVASCRIPT

    1. Tạo chuỗi 
    2. 1 số case sử dụng backslash(\)
    3. Xem độ dài chuỗi 
    4. Chú ý độ dài khi viết Code
    5. Template string ES6
    --> ` ${ code } `

*/

//===============================================

/*
    Làm việc với chuỗi

    var myString = 'Quan';

    //JS string methods

    1. Length
    console.log(myString.length);

    2. Find index
    console.log(myString.indexOf('Q', vi tri cua chuoi)); --> 0
    console.log(myString.lastIndexOf('Q'));
    console.log(myString.search('Q'));

    3. Cut string
    console.log(myString.slice(1, 2));
    cat nguoc thi xai so am

    4. Replace
    console.log(myString.replace('Q', 'QQ'))
    /Q/g : Đây là biểu thức chính quy giúp ghi đè tất cả các chữ giống nhau
    
    5. Convert to upper case
    console.log(myString.toUpperCase());


    6. Convert to lower case
    console.log(myString.toLowerCase());

    7. Trim
    console.log(myString.trim());
    --> Loai bo khoang trang o 2 dau

    8. Split (Tách )
    var languages = 'JS, PHP, Ruby'
    console.log(languages.split(', '));


    9. Get a character by index
    const myString2 = 'Son Dang';
    console.log(myString2.charAt(0));

*/
//========================================================

/*
    KIỂU DỮ LIỆU SỐ

    Number.isFinite(2 / 0); // false
    Number.isFinite(20 / 5); // true
    Number.isFinite(0 / 0); // false

    Number.isInteger(999999999); // true
    Number.isInteger(0.2);       // false
    Number.isInteger(Math.PI);   // false

    Number.parseFloat('10') // 10
    Number.parseFloat('10.00') // 10
    Number.parseFloat('238,21') // 238
    Number.parseFloat('237.22') // 237.22
    Number.parseFloat('34 56 78') // 34
    Number.parseFloat(' 37 ') // 37
    Number.parseFloat('18 is my age') // 18

    Number.parseInt('10') // 10
    Number.parseInt('10.00') // 10
    Number.parseInt('238,21') // 238
    Number.parseInt('237.22') // 237
    Number.parseInt('34 56 78') // 34
    Number.parseInt(' 37 ') // 37
    Number.parseInt('18 is my age') // 18

    var numberObject = 1234.56789;

    numberObject.toFixed(); // '1235'
    numberObject.toFixed(1); // '1234.6'
    numberObject.toFixed(6); // '1234.567890'

    (11).toString();    // '11'
    (18).toString();     // '18'
    (17.3).toString();   // '17.3'

*/
//===============================================================

/*

    Tạo số cho Number

    Keyword: JS number methods

    var age = 18;
    var PI = 3.14

    var otherNumber = new Number(9);
    --> console.log --> object

    var result = 20 / 'ABC'
    console.log(isNaN(result));
    --> true

    console.log(age.toString());

    toFixed(): làm tròn số
    console.log(PI.toFixed());
    --> 3 --> string
    toFixed(3): sau chấm 3 số thập phân được làm tròn


*/
//==================================================================

/*
    Mảng trong javaScript

    1. Tạo mảng 
    2. Truy xuất mảng
  
    var languages = [
        'JS', 'PHP',
    ];

    console.log(Array.isArray(languages)); --> true
    console.log(languages.length); --> 1
    console.log(languages[2]); --> 0 1 2 : null 

*/

//====================================================================

/*

    Làm việc với arrays

    var languages = [
        'JS',
        'PHP',
        'Ruby'
    ];

    1. To string --> chuyen chuoi sang string ngan cach boi dau phay: toString()
    2. Join --> nhu To string nhung ma co the chinh dau ngan cach: join(' - ') --> ngan cach boi dau -
    3. Pop --> Xoa element cuoi mang va tra ve phan tu da xoa
    4. Shift --> Xoa phan tu dau mang va tra ve phan tu bi xoa 
    5. Unshift --> giong nhu push nhung them phan tu vao dau mang
    6. Splicing --> co the xoa va chen phan tu vao mang
    VD: languages.splice(1(start), 1(count))
    --> Xoa 1 phan tu bat dau tu phan tu thu 2
    --> xoa PHP

    languages.splice(1, 0, 'Dart'(phan tu chen));
    --> them 1 phan tu vao trc PHP

    7. Push --> them phan tu vao cuoi mang va tra ve do dai cua mang
    VD: languages.push('Dart');
    --> 1

    8. Concat --> ket hop 2 mang lai voi nhau
    console.log(languages.concat(language2));
    --> ket hop phan tu cua languages voi language2

    9. Slicing --> cat 1 vai element cua mang
    console.log(languages.slice(1(start), 2(end));
    --> cat PHP
    
*/
//=================================================================
/*

    Object JS

    Function --> Phuong thuc/ method
    getAge: function() {};

    Others --> Thuoc tinh/ property
    phone: '';
*/

/*

    object constructor
    --> khởi tạo 1 bản mô phỏng thiết kế có thể sử dụng nhiều lần

    function Example(variable){
        this.variable= variable
    }

    var Example = function(variable) {
        this.variable= variable
    }


*/

/*

    Object prototype - Basic
    1. Prototype là gì? 
    Nguyên mẫu - Khuôn 
    VD: object constructor là bản thiết kế ngôi nhà
    object prototype là nguyên liệu xây 1 ngôi nhà 
    User.prototype.className = 'F8';
    --> add them doi tuong className vao constructor User

*/

/*
    Đối tượng Date 

    var date = new Date();

    // Javascript date mozilla 
*/

/*
    Math.PI
    Math.round() --> lam tron so
    Math.abs() --> tri tuyet doi
    Math.ceil() --> lam tron tren 
    Math.floor() --> lam tron duoi 
    Math.random() --> tra ve 1 random 
    Math.min() --> tra ve so be nhat trong day so
    Math.max() --> tra ve so lon nhat  

*/

/*

    Toan tu 3 ngoi 

    var result = (Condition) ? condition true : condition false

*/

/*

    for- Lặp với điều kiện đúng
    for/in - Lặp qua key của đối tượng
    for(var key in object/array){
        console.log(key) --> in ra key cua object{} co cai gi
        console.log(object[key]) --> in ra value cua object{} tuong ung
        console.log(array) --> in ra so va tang dan co trong array vi array[]
        console.log(array[key]) --> in ra cac phan tu co trong array[]
    }

    for/of - Lặp qua value của đối tượng
    while - Lặp khi điều kiện đúng
    do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

*/

/*
    Đệ quy 
    -- Xác định điểm dừng 
    -- Logic handle => tạo điểm dừng

*/
//========================================================================
/*
    Array method:

    forEach(); --> Duyệt qua từng phần tử của mảng
    every(); --> Tất cả các phần tử phải thoả mãn điều kiện trả về true
    some(); --> Chỉ cần 1 trong tất cả phần tử thoả mãn điều kiện trả về true
    find(); --> Tìm kiếm trả về 1 ptu gần nhất thoả mãn điều kiện 
    filter(); --> Tìm kiếm trả về nhiều ptu( danh sách) thoả mãn điều kiện 
    map(); --> thay đổi element trong 1 array
    reduce(); --> tính tổng value trong 1 chuỗi có nhiều phần tử trùng key

    courses.forEach(function (course, index){
        console.log(index, course);
    });

    var isFree = courses.every(function (course, index){
        console.log(index);
        return course === 0;
    });
    console.log(isFree);

    var isFree = courses.some(function (course, index){
        console.log(index);
        return course === 0;
    });
    console.log(isFree);

    var isFree = courses.find(function (course, index){
        return course.name === 'Ruby';
    });
    console.log(isFree);

    var newcourse = courses.map(function(course) {
        return {
            id: course.id,
            name: `Khoa hoc: ${course.name}`,
            coin: course.coin,
            coinText: `Gia: ${course.coin}`,
            index: index;
            originArray: originArray,
        }
    });
    console.log(newcourse);

    == Reduce
    var totalCoin = 0;
    for(var course of courses){
        totaCoin += course.coin;
    }

    console.log(totalCoin);

    var i = 0;

    function coinHandle(accumulator, currentValue, currentIndex, originArray) {
        i++;
        return accumulator + currentValue.coin;
    }

    var totalCoin = courses.reduce(coinHandle, 0); == 0 là giá trị khởi tạo
    console.log(totalCoin);

    == flat - "Làm phẳng mảng từ depth array" - "mảng sâu"
    var dapthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

    var flatArray = depthArray.reduce(function(flatOutput, depthitem) {
        return flatOutput.concat(depthitem);
    }, []);

    String/Array.prototype.includes tìm chuỗi
    title.includes('', (vị trí)); --> String

    Array = ['JS', 'Java']
    title.includes('');
*/

/*
    Call back?

    1. Là hàm 
    2. Được chuyền qua đối số

*/


