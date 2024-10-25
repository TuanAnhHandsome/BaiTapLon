// alert ("hello! I'm Tanh")
var danhSach = [
    {
        hoTen: "Đinh Tú Anh",
        monHoc: {
            web: {
                diem:{
                    diemA: 10,
                    diemB: 6,
                    diemC: 3,
                },
                diemChu: "",
                nghiPhep: 4,
                khongPhep: 4
            },
            java: {
                diem:{
                     diemA: 5,
                     diemB: 6,
                     diemC: 7,
                },
               
                    diemChu: "",
                    nghiPhep: 1,
                    khongPhep: 4
            },
            dotNet: {
                diem:{
                    diemA: 9,
                    diemB: 8,
                    diemC: 9,
                },
                diemChu: "",
                nghiPhep: 1,
                khongPhep: 3
            },
        },
    },
    {
        hoTen: "Vũ Tuấn Anh",
        monHoc: {
            web: {
                diem:{
                    diemA: 10,
                    diemB: 6,
                    diemC: 3,
                },
                diemChu: "",
                nghiPhep: 4,
                khongPhep: 4,
                trangThai: ""
            },
            java: {
                diem:{
                    diemA: 5,
                    diemB: 6,
                    diemC: 7,
                },
                diemChu: "",
                nghiPhep: 1,
                khongPhep: 4
            },
            dotNet: {
                diem:{
                    diemA: 7,
                    diemB: 8,
                    diemC: 9,
                },
                diemChu: "",
                nghiPhep: 1,
                khongPhep: 5
            },
        },
    },
    {
        hoTen: "Vũ Viết Ba",
        monHoc: {
            web: {
                diem:{
                    diemA: 4,
                    diemB: 5,
                    diemC: 6,
                },
                diemChu: "",
                nghiPhep: 2,
                khongPhep: 2
            },
            java: {
                diem:{
                    diemA: 7,
                    diemB: 8,
                    diemC: 9,
                },
                diemChu: "",
                nghiPhep: 1,
                khongPhep: 4
            },
            dotNet: {
                diem:{
                    diemA: 9,
                    diemB: 8,
                    diemC: 9,
                },
                diemChu: "",
                nghiPhep: 1,
                khongPhep: 3
            },
        },
    },
];
function tinhDiemChu(diemA, diemB,diemC){
    var diemTong = diemA * 0.6 + diemB * 0.3 + diemC * 0.1;
    var diemChu ="";
    if(diemTong>=8){
        diemChu = "A";
    }else if(diemTong<8 && diemTong>=7){
        diemChu = "B"
    }else if(diemTong<7 && diemTong>=6){
        diemChu = "C"
    }else if(diemTong<6 && diemTong>=4){
        diemChu = "D"
    }else{
        diemChu = "F"
    }
    return diemChu;
}
for (var i = 0; i < danhSach.length; i++) {
    if(danhSach[i].hoTen.startsWith("Vũ")){
        var web = danhSach[i].monHoc.web;
        var java = danhSach[i].monHoc.java;
        var dotNet = danhSach[i].monHoc.dotNet;

        web.diemChu = tinhDiemChu(web.diem.diemA, web.diem.diemB, web.diem.diemC);
        java.diemChu = tinhDiemChu(java.diem.diemA, java.diem.diemB, java.diem.diemC);
        dotNet.diemChu = tinhDiemChu(dotNet.diem.diemA, dotNet.diem.diemB, dotNet.diem.diemC);
        // console.log(web.diemChu);
    }
    
 }
// // Hàm tính điểm trung bình cho một môn học
// function tinhDiemTrungBinh(diem) {
//     return (diem.diemA + diem.diemB + diem.diemC) / 3;
// }

// // Hàm quy đổi điểm trung bình thành điểm chữ
// function quyDoiDiemChu(diemTB) {
//     if (diemTB >= 8.5) return "A";
//     if (diemTB >= 7) return "B";
//     if (diemTB >= 5) return "C";
//     return "D";
// }

// // Hàm tìm và cập nhật điểm chữ cho những người có họ "Vũ"
// function timNguoiHoVuVaTinhDiemChu(danhSach) {
//     return danhSach.filter(sv => sv.hoTen.startsWith("Vũ")).map(sv => {
//         // Duyệt qua từng môn học và tính điểm chữ
//         for (let mon in sv.monHoc) {
//             let diemTB = tinhDiemTrungBinh(sv.monHoc[mon].diem);
//             sv.monHoc[mon].diemChu = quyDoiDiemChu(diemTB);
//         }
//         return sv;
//     });
// }

// // Gọi hàm và hiển thị kết quả
// const ketQua = timNguoiHoVuVaTinhDiemChu(danhSach);
// console.log(ketQua);
 