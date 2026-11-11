# 🚶 Vân Đồn 3D — Dạo Bến (bản thử nghiệm)

Năm 1149, đời vua **Lý Anh Tông**, thuyền buôn các nước phương Nam vào Hải Đông
xin cư trú buôn bán, và triều đình cho lập trang **Vân Đồn**. Trong bản 3D này,
người chơi **tự đi lại trên bến**: ghé lò xưởng mua hàng, mang ra cầu tàu bán cho
thương thuyền, và định mức thuế cảng.

Bản 2D dựng bến nằm ở [`../van-don/`](../van-don/).

**Chơi:** mở [`index.html`](index.html) bằng trình duyệt. Không cần cài đặt, không
tải gì từ bên ngoài, chơi được cả khi mất mạng sau lần mở đầu tiên.
Trò chơi không dành cho trẻ em (người chơi từ 16 tuổi).

## Cách chơi

| Việc | Máy tính | Điện thoại |
|---|---|---|
| Đi lại | W A S D hoặc phím mũi tên | Kéo vòng tròn ở góc trái |
| Gặp người, đọc bia | Phím E (hoặc Enter, Space) | Nút đỏ ở góc phải |
| Đóng bảng hội thoại | Esc | Nút «Đi tiếp» |

Mỗi ván có **sáu phiên chợ**, mỗi phiên 80 giây; đồng hồ dừng khi đang nói chuyện.
Khanh bắt đầu với 150 quan tiền và mỗi chuyến mang được **10 kiện**.

1. **Mua hàng** ở bốn lò xưởng.
2. **Bán hàng** cho bốn thương thuyền ở cầu tàu. Mỗi thuyền chuộng hai mặt hàng và trả
   giá cao cho đúng hàng đó (đánh dấu ⭐).
3. **Định thuế** ở Nhà thuế quan: 5%, 15% hoặc 30%, có hiệu lực từ phiên sau. Thuế
   cao thu nhiều hơn trên mỗi kiện, nhưng thuyền mua ít đi và khanh mất danh vọng.
4. **Kết phiên** bằng cách đánh trống ở Nhà thuế quan, hoặc chờ hết giờ.

**Điểm = quan tiền + danh vọng × 10.** Hết sáu phiên, triều đình xét công và phong bến
từ «Trang nhỏ ven vịnh» lên «Trang Vân Đồn», «Trấn Vân Đồn», rồi «Đệ Nhất Thương Cảng».

**Biến cố:** ở phiên 2 hoặc 4, bão làm một thuyền không vào bến. Ở phiên 3 và 5 có chiếu
đòi cống phẩm; dâng đủ trong phiên được thêm 15 danh vọng.

## Địa điểm trên bến

| Nơi | Người gặp | Việc |
|---|---|---|
| Lò gốm | Thợ cả lò gốm | Mua gốm Đại Việt |
| Xưởng dệt lụa | Bà chủ xưởng dệt | Mua lụa tơ tằm |
| Trạm trầm hương | Chủ trạm trầm hương | Mua trầm hương |
| Bến mò ngọc trai | Thợ lặn mò ngọc trai | Mua ngọc trai |
| Nhà thuế quan | Thư lại thuế quan | Định thuế, dâng cống phẩm, kết phiên |
| Bốn cầu tàu | Thương nhân Tống, Tam Phật Tề, Trảo Oa, Xiêm La | Bán hàng |
| Bia sử | Bia đá | Đọc sử liệu về Vân Đồn |

## Nhân vật

Nhân vật dựng bằng mã, không dùng tệp mô hình ngoài: tạo hình chibi đầu to, tóc búi,
áo giao lĩnh có viền, tay chân có khớp và bước đi. Khi đang mang hàng, nhân vật đeo gùi.

Ở màn mở đầu, người chơi chọn **Quan trấn thủ** (mũ quan hai cánh, cách điệu) hoặc
**Nữ thương chủ** (nhân vật hư cấu). Trò chơi nhớ lựa chọn cho lần sau.

## Ảnh minh hoạ

Ảnh mô hình đất nặn trong [`assets/`](assets/), dùng ở màn mở đầu và bảng hội thoại.
Chỉ giữ ảnh không có chi tiết lệch niên đại 1149; chữ trên ảnh gốc đã cắt bỏ.

| Tệp | Dùng ở | Ghi chú |
|---|---|---|
| `ben-cang-van-don.jpg` | Màn mở đầu | Cắt bỏ biển chữ quốc ngữ (chữ quốc ngữ có từ thế kỷ 17). |
| `tho-ca-lo-gom.jpg` | Lò gốm | Cắt bỏ nhãn «Bát Tràng / Chu Đậu»; hai lò này hưng thịnh sau thời Lý. |
| `thuong-nhan-phuong-nam.jpg` | Thuyền Trảo Oa, Tam Phật Tề | Trang phục cách điệu, không phục dựng theo hiện vật. |
| `khoang-thuyen-buon.jpg` | Thuyền Tống, Xiêm La | Khoang hàng: gốm men xanh, quế, ngọc trai, lụa. |

Những ảnh có các chi tiết sau thì không dùng:

- bình gốm hoa lam (phổ biến từ thế kỷ 14);
- ba lô vải có khoá cài, mỏ neo sắt kiểu châu Âu;
- áo thêu rồng cho quan (rồng là biểu tượng của vua), giáp trụ vàng kiểu phim cổ trang;
- biển chữ quốc ngữ, địa danh đời sau như «Yên Bái».

Các nhân vật còn lại chưa có ảnh. Prompt để tạo ảnh và bảng soát trước khi đưa vào game
nằm ở [`PROMPT-NHAN-VAT.md`](PROMPT-NHAN-VAT.md).

## Sử liệu và chỗ giản lược

Theo *Đại Việt sử ký toàn thư*:

- **1149**: thuyền buôn Trảo Oa, Lộ Lạc, Xiêm La vào Hải Đông; triều đình lập trang Vân Đồn.
- **1184**: người buôn Xiêm La và Tam Phật Tề vào Vân Đồn xin buôn bán.
- **1288**: Trần Khánh Dư đánh đoàn thuyền lương của Trương Văn Hổ ở vùng biển này.
- **1348**: thuyền Đồ Bồ đến Vân Đồn ngầm mua ngọc trai.
- **1349**: nhà Trần đặt quan trấn, quan lộ, sát hải sứ và quân Bình Hải ở trấn Vân Đồn.

Bốn thuyền buôn trong game lấy theo các nước sử chép có đến Vân Đồn: Trảo Oa và Xiêm La
(1149), Tam Phật Tề (1184), cùng khách buôn phương Bắc (Tống).

Những chỗ là cách dựng của trò chơi:

- Năm 1149 Vân Đồn mới là trang, nên «quan trấn thủ», Nhà thuế quan và thư lại là hư cấu.
- Mức thuế, giá hàng, sức mang 10 kiện và nhịp sáu phiên chợ là số liệu trò chơi.
- Tên Xiêm La chép theo *Toàn thư*, dù vương quốc của người Thái đến thế kỷ 13 mới lập.
- Trầm hương là hàng trung chuyển, không phải sản vật của đảo; ngọc trai là ngọc mò ngoài biển.
- Trang phục nhân vật được cách điệu, không phục dựng theo hiện vật.

## Kỹ thuật

- Một tệp `index.html`, dùng [`../lib/three.min.js`](../lib/three.min.js) có sẵn trong kho.
- Ảnh và trang được `../sw.js` lưu sẵn để chơi ngoại tuyến. Khi thêm hay đổi ảnh, thêm
  đường dẫn vào danh sách `SHELL` và tăng số phiên bản `VERSION` trong `sw.js`.
- Trình duyệt chỉ lưu kỷ lục điểm và nhân vật đã chọn, không lưu ván đang chơi dở.

## Chưa có

- Âm thanh.
- Lưu ván giữa chừng.
- Ảnh cho các nhân vật còn lại (xem [`PROMPT-NHAN-VAT.md`](PROMPT-NHAN-VAT.md)).
