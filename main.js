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
    map(); -->  duyệt qua từng phần tử của mảng và tạo ra một mảng mới
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
    3. Được gọi lại (trong hàm nhận đối số)
    
Array.prototype.map2 = function(callback) {
    var output = [];
    var arrayLength = this.length;

    for( var i = 0; i < this.length; ++i){
        var result = callback(this[i], i);
        output.push(result);
    }

    return output;
}

var courses = [
    'JS',
    'PHP',
    'Ruby'
];

var htmls = courses.map2(function(course, index) {
    return `<h2>${course}</h2>`
});

for( var index in courses){}

console.log(htmls.join('')); 


// ForEach
Array.prototype.forEach2 = function(callback){ // dinh nghia cho forEach2 thanh mang trong proto cua console
    for( var index in this){ // duyet luon ca proto cua console
        if(this.hasOwnProperty(index)){ // check attribute gan nhat  
            console.log('index: ', index);
            callback(this[index], index, this);
        }   
    }
}

var courses = [
    'JS',
    'PHP',
    'Ruby'
];

courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
});

// Filter2 -- Loc 
Array.prototype.filter2 = function(callback) {
    for( var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this)
        }
    }
}

// Some true/false --> 1 trong cac ptu thoa man dieu kien
Array.prototype.some2 = function(callback) {
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true;
            };
        }
    }
    return false;
};

// Every: true/false --> tat ca phai thoa man dieu kien 

Array.prototype.every2 = function(callback){
    var output = true;
    for...
        if(!callback(this[index], index, this)){
            return output = false;
        }
}
*/

//==============================================================================

// HTML DOM, DOM API(Document object model)
/* 
    1. Element: ID, tag, class, CSS selector, HTML selector
    2. Attribute
    3. Text
*/

//-------------------------------------------------------------------------

// JavaScript: Browser | Server (NodeJS)
// Browser: HTML -> DOM -> DOM API

// document.write('Hello Guys!');

// var headingNode = document.getElementById('heading'); --> id
// console.log(headingNode);
// console.log({
//     element: headingNode
// });

// document.getElementsByClassName --> class
// document.getElementsByTagName --> thẻ h1....
// document.querySelector('html .box .heading');
// document.querySelectorAll
// document.forms['forms-1']
// document.forms.testForm
// document.anchors

// AttributeNode & Text node
// ==========================================================

//         DOM Attributte

// var headingElement = document.querySelector('h1');
// headingElement.title = 'heading';
// headingElement.id = 'heading';
// headingElement.className = 'heading';
// headingElement.href = 'heading';
// headingElement.setAttribute('class', 'heading');
// headingElement.getAttribute('title');


//      Inner Text va Text Content Property --> sua 1 textnode

// var headingElement = document.querySelector('.heading');
// headingElement.innerText = 'New heading'; --> trả về giống với web thực hiện trên màn hình -- không hiện đoạn mã code nào cả, bỏ qua elementnode
// headingElement.textContent = 'New heading'; --> lấy nguyên bản của html hiện trên console -- cả code style vì nó cũng là textnode, bỏ qua elementnode


// InnerHTML, OuterHTML
// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1>Heading</h1>' // Them element h1 -- setter cho Heading co thuoc tinh h1
// outerHTML ghi de len element va khong hien o dom hay console
// document.getElementsByTagName('ul')[0];

//      Node Properties
// var boxElement = document.querySelector('.box'); 
// Object.assign(boxElement.style, { --> internal
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green',
// });
// console.log(boxElement.style.width);

//      ClassList property --  chứa danh sách các class của element đó.
// add, -- them class
// contains, -- kiem tra xem trong 1 ptu co 1 ptu con khac khong  - co ton tai class y khong
// remove, -- xoa class
// toggle -- Bật/tắt class( setTimeOut, setInterval) -- mo menu/dong menu
// var boxElement = document.querySelector('.box');
// console.log(boxElement.classList.add('red'));

// Arrow function
// (parameter) => { statement(s) } -- tham so => gia tri

//          DOM Event
// 1. Attribute events
// 2. Assign event using the element node
// onclick -- click chuot
// onmouseover -- di chuot vao
// su kien noi bot chi can 1 su kien o the cha thi cac the con ben trong cung duoc huong

// Sử dụng onclick để đổi màu khi click chuột vào button
// 
// click.onclick = function() {
//     click.style.color = '#fff';
// };

// var click = document.querySelectorAll('button');

// for( var i = 0 ; i < click.length ; i++){
//     click[i].onclick = function(e){
//         console.log(e.target);
//     }
// };

//      DOM events exmaple

// 1. Input / select 
// 2. Key up / down

// The input
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function(e) { //oninput
//     console.log(e.target.value);
// }

// Checkbox
// var inputElement = document.querySelector('input[type="check"]'); --> text/check/select
// inputElement.onchange = function(e);

// Key up/ Key down
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeydown = function(e) {       // onkeyup -- an phim nhac len
//     console.log(e.target.value);             // onkeypress -- giu phim va no se in ra lien tuc gia tri cua phim do
// }

// 1. preventDefault
// 2. stopPropagation
// var aElements = document.links;
// var aElements = document.anchors -- cái này là nhận thẻ a khi đặt tên

// for( var i = 0; i < aElements.length; ++i){
//     aElements[i].onclick = function(e) {
//         // console.log(e.target.href);
//         if(!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault;
//         }
//     }
// }

// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }
// ulElement.onclick = function(e) {
//     console.log(e.target);
// }

// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation();
//     console.log('Click me!');
// }

// 1. DOM event / Event listener
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10.Performance

// 1. Xu ly nhieu viec khi 1 event xay ra
// 2. Lang nghe / Huy bo lang nghe

// var btn = document.getElementById('btn');
// function viec1() {
//     console.log('viec 1');   
// }
// btn.addEventListener('click', viec1);
// setTimeout(function() {
//     btn.removeEventListener('click', viec1);
// }, 3000);

//          JSON
// 1. Là 1 định dạng dữ liệu (chuỗi) (JavaScript Object Notation)
// 2. JSON: Number, String, Boolean, Null, Array
// Object
// Mã hoá / Giải mã
// Encode / Decode
// Stringify: tu JS -> JSON
// Parse: tu JSON -> JS
// var JSON = '["JS", "PHP"]';
// var json = '{"name" : "Son Dang", "age" : 18}'; -- json.parse để chuyển sang dữ liệu gốc là JS 

//      Promise
//      - Sync -- đồng bộ
//      - Async -- bất đồng bộ (SetTimeout, setInterval, fetch, XMLHttpRequest, đọc file, request animation frame)

//      Callback Hell
// Pyramid of doom
 
//      Concept
// 1. new Promise
// 2. Executor

// 1. Pending
// 2. Fulfilled
// 3. Rejected
// memory leak
// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//         // Logic
//         // Thanh cong: resolve()
//         // That bai: reject()
//     }
// );

// promise // Xử lý thao tác bất đồng bộ --> call back --> call back hell
// để tạo promise thì ta dùng từ khoá new promise là 1 object constructor và nhận 2 tham số vào function đó là resolve và reject
// xử lý thành công thì xài resolve, thất bại thì reject
// xử dụng then và catch nhận từ callback 
//     promise
    // .then(function() {
        // console.log('successfully');        
    // })
    // .catch( function() {
        // console.log('successfully');
    // })
    // .finally( function() {
        // console.log('successfully');
    // })

    // try: Chứa đoạn mã có thể phát sinh lỗi.
    // catch: Xử lý lỗi nếu có.
    // finally: Luôn được thực thi bất kể có lỗi hay không.

//      Chain ( tính chất chuỗi )
//      Promise methods (resolve, reject, all)
// Khi có reject thì phải catch thì lệnh promise mới chạy được

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// C1:
// var promise = new Promise(
//     function(resolve, reject){
//         resolve('Success!');
//     }
// );
// promise 
//     .then(function (result) {
//         console.log('result: ', result);
//     })
//     .catch(function(err) {
//         //...
//     })

// C2: 
// var promise = Promise.reject('Error!');
// Promise.all([]) ben trong la 1 mang. Sau no la then 

//      Fetch
// API (URL) -> Application programing interface
// Backend -> API -> Fetch -> JSON/XML
// JSON.parse -> JS types
// Render ra giao dien voi HTML
// var postAPI = 
//     'https://jsonplaceholder.typicode.com/posts'
// fetch(postAPI)
//     .then(function(response) {
//         return response.json();
//         // JSON.parse: tu JSON -> JS types
//     })
//     .then(function(posts) {
//         console.log(posts);
//     });

//      JSON server
// La thu vien co the Fake ra 1 API server
// var coursesApi = 'http://localhost:3000/courses';
// fetch(coursesApi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(courses) {
//         console.log(courses);
//     })

// ==================================================================================================

//      Postman
//      CRUD ( create -> POST, read -> GET, update -> PUT/PATCH, delete-> DELETE)

//              THÊM SỬA XOÁ KHOÁ HỌC 

// var listCoursesBlock = document.querySelector('#list-courses');

// var coursesApi = 'http://localhost:3000/courses';

// function start() {
//     getCourses(renderCourses);

//     handleCreateForm();
// }

// start();

// // Function
// function getCourses(callback) {
//     fetch(coursesApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
//         .catch(function(error) {
//             console.error('Failed to fetch courses:', error);
//         });
// }

// function createCourse(data) {
//     var options = {
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//     };
//     fetch(coursesApi, options)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
//         .catch(function(error) { 
//             console.error('Failed to create course:', error);
//         });
// }

// function deleteCourse(id) {
//     var options = {
//         method: 'DELETE',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//     };
//     fetch(coursesApi + '/' + id, options)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function() {
//             var courseItem = document.querySelector('.course-item-' + id);
//             if(courseItem) {
//                 courseItem.remove();
//             }
//         })
// }

// function updateCourse(id, formData, callback) {
//     fetch(`${coursesApi}/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(callback)
// }

// function renderCourses(courses) {
//     var listCoursesBlock = document.querySelector('#list-courses');
//     var htmls = courses.map(function(course) {
//         return `
//         <li class="course-item-${course.id}">
//             <h4>${course.name}</h4>
//             <p>${course.description}</p>
//             <button onclick="deleteCourse(${course.id})">Xoá</button>
//             <button onclick="handleUpdateForm(${course.id})">Sửa</button>
//         </li>
//         `;
//     });
//     listCoursesBlock.innerHTML = htmls.join('');
// }

// function handleCreateForm() {
//     var createBtn = document.querySelector('#create');

//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;

//         var formData = {
//             name: name,
//             description: description
//         };
//         createCourse(formData, function() {
//             getCourses(renderCourses);
//         });
//     }
// }

// let editingId = null;

// function handleUpdateForm(id) {
//     editingId = id; 
//     var courseItem = document.querySelector('.course-item-' + id);
//     var courseName = courseItem.querySelector('h4').innerText;
//     var courseDescription = courseItem.querySelector('p').innerText;

//     document.querySelector('input[name="name"]').value = courseName;
//     document.querySelector('input[name="description"]').value = courseDescription;

//     var submitBtn = document.querySelector('#create');
//     submitBtn.textContent = 'Cập nhật';
    
//     submitBtn.onclick = function(event) {
//         event.preventDefault(); 
//         var updatedName = document.querySelector('input[name="name"]').value;
//         var updatedDescription = document.querySelector('input[name="description"]').value;

//         var dataUpdate = {
//             name: updatedName,
//             description: updatedDescription,
//         };

//         updateCourse(editingId, dataUpdate, function() {
//             getCourses(renderCourses); 
//             resetForm(); 
//         });
//     };
// }

// function resetForm() {
//     document.querySelector('input[name="name"]').value = '';
//     document.querySelector('input[name="description"]').value = '';
//     editingId = null;
// }
// ===============================================================================================

// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let: Assignment
// Code block: if else, loop, {},...
// Phạm vi bên ngoài block thì let, const sẽ không truy cập được -- theo kiểu cha con -- phải theo tuần tự
// var thì có thể truy cập cả bên trong lẫn bên ngoài

//     Template literals / Multi-lines String
//     Arrow function 
// const logger = (log) => {
//     console.log(log);
// }
// logger('Message...');

// const obj = {
//     name: 'JS',
//     getName: () => {
//         return this.name; // context
//     }
// };

//      Classes
// class Course {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     getName() {
//         return this.name;
//     }
// }
// const php = new Course('PHP', 1000);

//      Default parameter values
// function logger(log = 'Gia tri mac dinh', type = 'log') {
//     console.log(log);
//     console[type](log);
// };
// logger(undefined);

//      Enhanced object literals
// 1. Định nghĩa key: value cho object
// 2. Đinh nghĩa method cho object
// 3. ĐỊnh nghĩa cho key cho object dưới dạng 
// var name = 'js';
// var price = 3000;
// var course = {
//     name, 
//     price,
//     getName() {
//         return this.name;
//     },
//     [name]: 'PHP',
// }

//      Destructuring, Rest ( Phan ra)
// Cach thong thuong
// var array = ['js', 'php'];

// var a = array[0];
// var b = array[1];
// var c = array[2];

// console.log(a, b, c);

// C2: 
// var array = ['js', 'php'];
// var [a, b, c] = array;
// console.log(a, b, c);

// REST
// var [a, ...rest] = array; --> Lay phan tu con lai sau a
// console.log(a);
// console.log(rest);
// var [a, ...newObject];

// Doi voi object thi sai {} --> Object thi co key va value
// Chuoi thi chi la liet ke cac phan tu thoi

//      Spread(...)
// var array = ['js', 'php'];
// var array2 = ['react', 'dart'];
// var array3 = [...array2, ...array]; // Spread k co phan tu dau [a,...rest] thi no se lay phan tu theo thu tu

//      Tagged template literals
// function highlight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()]
//         [first]
//     )
//     .join('');
// }

// var brand = 'f8';
// var course = 'js';

// const hrml = highlight` Hoc lap trinh ${course} tai ${brand} `;

//      Modules --> Import / Export
// File main.js
// import logger from './logger.js';
// logger('Test', 'warn');

// File logger.js
// function logger(log, type = 'log') {

// }
// export default logger;

//      Optional chaining(?.)
// if( obj?.cat?.cat2?.cat3?.) { // thuc hien khi ta khong chac chan key co ton tai hay khong
// }
// ?.prop or ?.[expr] or ?.[index] or ?.(args)
