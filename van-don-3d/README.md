# 🚶 Vân Đồn 3D — Dạo Bến (bản thử nghiệm)

Bản 3D của game Vân Đồn: người chơi là quan trấn thủ, **tự đi lại trên bến**
thay vì chỉ đặt công trình như bản 2D ([`../van-don/`](../van-don/)).

**Chơi:** mở [`index.html`](index.html). Một tệp HTML, dùng `../lib/three.min.js`
có sẵn trong kho, không tải gì từ bên ngoài.

## Nhân vật

Nhân vật dựng bằng mã (không dùng tệp mô hình ngoài): tạo hình chibi đầu to, mắt to,
tóc búi, áo giao lĩnh có viền, tay chân có khớp và bước đi. Người chơi chọn
**Quan trấn thủ** (mũ cánh chuồn) hoặc **Nữ thương chủ** (nhân vật hư cấu) ở màn mở
đầu. Mỗi thợ và mỗi thương nhân có trang phục, mũ nón và màu da riêng; khi đang mang
hàng, nhân vật đeo gùi sau lưng.

## Cách chơi

- **Đi lại:** phím W A S D hoặc mũi tên; trên điện thoại kéo vòng tròn góc trái.
- **Gặp người:** đến gần rồi bấm nút đỏ (hoặc phím E).
- **Mua hàng** ở lò gốm, xưởng dệt lụa, trạm trầm hương, bè ngọc trai. Mỗi chuyến
  mang được 10 kiện.
- **Bán hàng** cho thương nhân Tống, Nhật Bản, Trảo Oa, Xiêm La ở bốn cầu tàu.
  Mỗi thuyền chuộng hai mặt hàng (giống bản 2D) và trả giá cao cho đúng hàng đó.
- **Nhà thuế quan:** chọn thuế cảng 5%, 15% hoặc 30% cho phiên sau. Thuế cao thu
  nhiều trên mỗi kiện, nhưng thuyền mua ít đi và mất danh vọng. Tại đây cũng dâng
  cống phẩm và đánh trống kết phiên.
- **Sáu phiên chợ**, mỗi phiên 80 giây (đồng hồ dừng khi đang nói chuyện).
  Điểm = quan tiền + danh vọng × 10.
- Biến cố: bão làm một thuyền không vào bến; chiếu đòi cống phẩm.

## Ghi chú

- Mức thuế, giá hàng và nhịp phiên chợ là số liệu của trò chơi, không phải sử liệu.
- Chưa có âm thanh và chưa lưu ván giữa chừng (chỉ lưu kỷ lục điểm).
- Trò chơi không dành cho trẻ em (người chơi từ 16 tuổi).
