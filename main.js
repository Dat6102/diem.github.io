// Định nghĩa hàm submitForm()
function submitForm() {
    // Lấy giá trị từ các input và select trong form
    const toan = parseFloat(document.getElementById('toan').value);
    const ngu_van = parseFloat(document.getElementById('ngu_van').value);
    const ngoai_ngu = parseFloat(document.getElementById('ngoai_ngu').value);
    const diem_uu_tien = parseFloat(document.getElementById('diem_uu_tien').value);

    const diem_chuan_nv1 = parseFloat(document.getElementById('diem_chuan_nv1').value);
    const diem_chuan_nv2 = parseFloat(document.getElementById('diem_chuan_nv2').value);

    const diem_ngu_van = parseFloat(document.getElementById('diem_ngu_van').value);
    const diem_toan = parseFloat(document.getElementById('diem_toan').value);
    const diem_ngoai_ngu = parseFloat(document.getElementById('diem_ngoai_ngu').value);
    const diem_gdcd = parseFloat(document.getElementById('diem_gdcd').value);
    const diem_lich_su_dia_ly = parseFloat(document.getElementById('diem_lich_su_dia_ly').value);
    const diem_khtn = parseFloat(document.getElementById('diem_khtn').value);
    const diem_cong_nghe = parseFloat(document.getElementById('diem_cong_nghe').value);
    const diem_tin_hoc = parseFloat(document.getElementById('diem_tin_hoc').value);

    const nghe_thuat = document.getElementById('nghe_thuat').value;
    const hd_trai_nghiem = document.getElementById('hd_trai_nghiem').value;
    const noi_dung_dia_phuong = document.getElementById('noi_dung_dia_phuong').value;
    const gd_the_chat = document.getElementById('gd_the_chat').value;

    // Tính điểm học bạ
    const diem_cac_mon = [diem_ngu_van, diem_toan, diem_ngoai_ngu, diem_gdcd, diem_lich_su_dia_ly, diem_khtn, diem_cong_nghe, diem_tin_hoc];
    let diem_hoc_ba = diem_cac_mon.reduce((a, b) => a + b, 0) / diem_cac_mon.length;

    // Kiểm tra môn đặc biệt
    const mon_dac_biet = [nghe_thuat, hd_trai_nghiem, noi_dung_dia_phuong, gd_the_chat];
    if (mon_dac_biet.includes('chưa đạt')) {
        diem_hoc_ba = 0;
    }

    // Xác định danh hiệu và kết quả học tập
    let danh_hieu, ket_qua_hoc_tap;
    if (diem_hoc_ba >= 9.0) {
        danh_hieu = "Xuất sắc";
        ket_qua_hoc_tap = "Tốt";
    } else if (diem_hoc_ba >= 8.0) {
        danh_hieu = "Giỏi";
        ket_qua_hoc_tap = "Tốt";
    } else if (diem_hoc_ba >= 6.5) {
        danh_hieu = "Khá";
        ket_qua_hoc_tap = "Khá";
    } else if (diem_hoc_ba >= 5.0) {
        danh_hieu = "Trung bình";
        ket_qua_hoc_tap = "Trung bình";
    } else {
        danh_hieu = "Yếu";
        ket_qua_hoc_tap = "Chưa tốt";
    }

    // Hiển thị kết quả học bạ
    document.getElementById('diem_hoc_ba').innerHTML = `Điểm TBM của bạn là: ${diem_hoc_ba.toFixed(2)}`;
    document.getElementById('danh_hieu').innerHTML = `Danh hiệu: ${danh_hieu}`;
    document.getElementById('ket_qua_hoc_tap').innerHTML = `Kết quả học tập: ${ket_qua_hoc_tap}`;

    // Tính điểm xét tuyển
    const diem_xet_tuyen = toan * 2 + ngu_van * 2 + ngoai_ngu + diem_uu_tien;

    // Hiển thị điểm xét tuyển
    document.getElementById('diem_xet_tuyen').innerHTML = `Điểm xét tuyển của bạn là: ${diem_xet_tuyen.toFixed(2)}`;

    // Kiểm tra nguyện vọng
    const trung_tuyen_nv1 = diem_xet_tuyen >= diem_chuan_nv1;
    const trung_tuyen_nv2 = diem_xet_tuyen >= diem_chuan_nv2;

    if (diem_xet_tuyen >= diem_chuan_nv1 && diem_xet_tuyen < diem_chuan_nv2) {
        document.getElementById('nguyen_vong').innerHTML = "Bạn có khả năng đỗ nguyện vọng 1.";
    } else if (diem_xet_tuyen >= trung_tuyen_nv2) {
        document.getElementById('nguyen_vong').innerHTML = "Bạn có khả năng đỗ nguyện vọng 2.";
    } else {
        document.getElementById('nguyen_vong').innerHTML = "Rất tiếc, bạn chưa đủ điểm để đỗ các nguyện vọng đã chọn.";
    }
}