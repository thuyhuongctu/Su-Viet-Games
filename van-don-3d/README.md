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

Mỗi ván có **sáu chương**, mỗi chương là một phiên chợ 90 giây; đồng hồ dừng khi đang nói
chuyện. Khanh bắt đầu với 200 quan tiền, 15 danh vọng, và gánh chỉ mang được **10 kiện**.

1. **Thuyền vào bến và đặt hàng.** Mỗi thuyền đặt một đơn gồm hai mặt hàng nó chuộng, rồi chỉ
   đợi một lúc (chip ⛵ đếm ngược). Thuyền đến lần lượt trong phiên, nhiều khi hai ba thuyền
   cùng đợi, nên phải chọn chạy cho thuyền nào trước.
2. **Mua hàng** ở bốn lò xưởng. Giá **lên xuống theo chương** (▲ đắt, ▼ rẻ).
3. **Giao hàng** ở cầu tàu. Giao trọn đơn: thưởng thêm 15% và +3 danh vọng. Để thuyền nhổ
   neo khi đơn còn thiếu: −2 danh vọng.
4. **Nhà thuế quan:** chọn thuế cảng 5%, 15% hoặc 30% cho chương sau (thuế cao thu nhiều
   trên mỗi kiện nhưng thuyền đặt ít đi và mất danh vọng), dâng cống phẩm, dựng công trình,
   và đánh trống kết phiên.
5. **Việc triều đình giao** (chip 🎯): mỗi chương một việc. Làm được: +10 danh vọng và 120 quan
   thưởng; không làm được: −6 danh vọng. **Danh vọng xuống dưới 0 là bị bãi chức**, thua ván.

| Chương | Năm | Việc triều đình giao | Theo sử hay trò chơi dựng |
|---|---|---|---|
| 1. Lập trang | 1149 | Giao trọn 2 đơn hàng (chỉ có thuyền Trảo Oa, Xiêm La) | Theo sử |
| 2. Khách buôn phương Bắc | những năm sau | Bán được 800 quan tiền hàng | Trò chơi dựng |
| 3. Tam Phật Tề đến | 1184 | Giao trọn đơn của thuyền Tam Phật Tề | Theo sử |
| 4. Giặc biển | mùa gió bấc | Đẩy lui giặc biển giữa phiên (cần Vọng lâu thủy binh) | Trò chơi dựng |
| 5. Chiếu đòi cống | năm được mùa | Dâng 3 ngọc trai và 4 lụa | Trò chơi dựng |
| 6. Thuyền Đồ Bồ | 1348 | Không bán lén ngọc trai cho người Đồ Bồ | Theo sử |

**Công trình** (dựng ở Nhà thuế quan, giữ cho cả ván):

| Công trình | Giá | Tác dụng |
|---|---|---|
| 🛒 Xe kéo hàng | 350 quan | Mang được 16 kiện |
| 🐃 Xe trâu | 800 quan | Mang được 24 kiện (cần xe kéo trước) |
| 🔥 Mở rộng lò xưởng | 600 quan | Giá mua mọi mặt hàng giảm 15% |
| 🗼 Vọng lâu thủy binh | 650 quan | Đẩy lui giặc biển; không có thì giặc cướp 35% tiền và thuyền bỏ chạy |
| 🕯️ Đền thần biển | 550 quan | Đầu mỗi chương +3 danh vọng; thuyền đợi thêm 8 giây |

**Điểm = quan tiền + danh vọng × 10.** Danh hiệu cuối ván tính theo số việc làm được:
0–1 «Trang nhỏ ven vịnh», 2–3 «Trang Vân Đồn», 4–5 «Thương cảng phồn thịnh», 6 «Đệ nhất thương cảng».

Đã chạy thử bằng bot đi bộ với tốc độ của người chơi bình thường: đa số ván làm được 5 hoặc
6 việc, có ván chỉ được 4 việc, nên không còn thắng chắc như trước.

## Địa điểm trên bến

| Nơi | Người gặp | Việc |
|---|---|---|
| Lò gốm | Thợ cả lò gốm | Mua gốm Đại Việt |
| Xưởng dệt lụa | Bà chủ xưởng dệt | Mua lụa tơ tằm |
| Trạm trầm hương | Chủ trạm trầm hương | Mua trầm hương |
| Bến mò ngọc trai | Thợ lặn mò ngọc trai | Mua ngọc trai |
| Nhà thuế quan | Thư lại thuế quan | Định thuế, dâng cống phẩm, dựng công trình, kết phiên |
| Bốn cầu tàu | Thương nhân Tống, Tam Phật Tề, Trảo Oa, Xiêm La (khi thuyền đang đợi) | Giao hàng theo đơn |
| Bia sử | Bia đá | Đọc sử liệu về Vân Đồn |

## Nhân vật

Mọi nhân vật trên bến là **tượng đất nặn** trong [`assets/tuong/`](assets/tuong/): ảnh tượng đã
tách nền (WebP trong suốt, cao 512 px), dựng đứng như tấm bìa và luôn quay mặt về máy quay.
Tượng của người chơi đã bỏ đế đất nặn và tách làm ba phần (thân, hai bàn chân:
`*.than.webp`, `*.chanT.webp`, `*.chanP.webp`). Khi đi, hai bàn chân nhấc lần lượt và thân nhún
nhẹ theo bước. Thợ, thư lại và thương nhân cũng đã bỏ đế, đứng thẳng trên nền đất như người
chơi. Khi đang mang hàng, bên hông người chơi hiện thêm một chiếc gùi.

Ở màn mở đầu, người chơi chọn **Quan trấn thủ** hoặc **Nữ thương chủ** (nhân vật hư cấu).
Trò chơi nhớ lựa chọn cho lần sau. Thợ, thư lại và bốn thương nhân mỗi người một tượng riêng.

## Ảnh minh hoạ

Ảnh mô hình đất nặn trong [`assets/`](assets/), dùng ở màn mở đầu và bảng hội thoại.
Chỉ giữ ảnh không có chi tiết lệch niên đại 1149; chữ trên ảnh gốc đã cắt bỏ.

| Tệp | Dùng ở | Ghi chú |
|---|---|---|
| `ben-cang-van-don.jpg` | Màn mở đầu | Cắt bỏ biển chữ quốc ngữ (chữ quốc ngữ có từ thế kỷ 17). |
| `ben-dem.jpg`, `cho-dem.jpg` | Bảng hết phiên (luân phiên) | Bến và chợ đêm trên cầu tàu, đèn nến, thuyền buồm. |
| `ben-hoang-hon.jpg` | Màn kết thúc | Bến lúc hoàng hôn; cắt bỏ mép bàn và kệ phòng chụp. |
| `quan-tran-thu.jpg` | Nút chọn nhân vật | Mũ phốc đầu, đi ủng (triều phục định năm 1059); áo không thêu rồng. |
| `nu-thuong-chu.jpg` | Nút chọn nhân vật | Nhân vật hư cấu; răng đen, hộp trầu, chuỗi tiền đồng lỗ vuông. |
| `tho-ca-lo-gom.jpg` | Lò gốm | Cắt bỏ nhãn «Bát Tràng / Chu Đậu»; hai lò này hưng thịnh sau thời Lý. |
| `ba-chu-xuong-lua.jpg` | Xưởng dệt lụa | Con tơ, thoi dệt, khung cửi nhỏ, rổ lá dâu. |
| `chu-tram-huong.jpg` | Trạm trầm hương | Khay trầm, cân đồng đeo ở thắt lưng. |
| `tho-lan-ngoc-trai.jpg` | Bến mò ngọc trai | Đóng khố, xăm mình, giỏ trai ngọc, dao, cuộn dây. |
| `thu-lai-thue-quan.jpg` | Nhà thuế quan | Bút lông, thẻ gỗ, cân đồng; không có chữ trên ảnh. |
| `thuong-nhan-tong.jpg` | Thuyền Tống | Áo cổ tròn, bát men xanh (không phải gốm hoa lam), cuộn lụa. |
| `thuong-nhan-xiem-la.jpg` | Thuyền Xiêm La | Dựng theo cư dân Môn–Khmer vùng Chao Phraya thế kỷ 12. |
| `thuong-nhan-trao-oa.jpg` | Thuyền Trảo Oa | Búi tóc quấn dải chàm, vải chàm ngang gối, giỏ đinh hương, khúc đàn hương (prompt mục 10). |
| `thuong-nhan-tam-phat-te.jpg` | Thuyền Tam Phật Tề | Tóc ngang vai, vải đỏ, ngà voi, ống tre long não, tấm đồi mồi (prompt mục 11). |

Các tượng nhân vật tạo theo [`PROMPT-NHAN-VAT.md`](PROMPT-NHAN-VAT.md) và đã soát theo bảng soát
trong tệp đó.

Những ảnh có các chi tiết sau thì không dùng:

- bình gốm hoa lam (phổ biến từ thế kỷ 14);
- ba lô vải có khoá cài, mỏ neo sắt kiểu châu Âu;
- áo thêu rồng cho quan (rồng là biểu tượng của vua), giáp trụ vàng kiểu phim cổ trang;
- biển chữ quốc ngữ, địa danh đời sau như «Yên Bái».

Khi tạo thêm ảnh, dùng prompt và bảng soát trong [`PROMPT-NHAN-VAT.md`](PROMPT-NHAN-VAT.md).

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

- Sáu chương gói hai trăm năm (1149–1348) vào một ván. Ba chương «Khách buôn phương Bắc»,
  «Giặc biển», «Chiếu đòi cống» là cách dựng của trò chơi, không gắn với năm cụ thể nào.
- Năm 1149 Vân Đồn mới là trang, nên «quan trấn thủ», Nhà thuế quan, thư lại, vọng lâu thủy
  binh và đền thần biển là hư cấu.
- Mức thuế, giá hàng, đơn hàng, thời gian thuyền đợi, sức mang và giá công trình là số liệu trò chơi.
- Chương 1348: *Toàn thư* chép thuyền Đồ Bồ đến Vân Đồn ngầm mua ngọc trai; việc người lạ
  hỏi mua và lựa chọn bán lén hay báo quan là tình huống trò chơi dựng thêm.
- Tên Xiêm La chép theo *Toàn thư*, dù vương quốc của người Thái đến thế kỷ 13 mới lập.
- Trầm hương là hàng trung chuyển, không phải sản vật của đảo; ngọc trai là ngọc mò ngoài biển.
- Trang phục nhân vật được cách điệu, không phục dựng theo hiện vật.

## Âm thanh

Âm thanh sinh bằng Web Audio ngay trong trang, không có tệp âm thanh nào:

- Nhạc nền gảy dây trên thang **ngũ cung** (như bản 2D), cùng tiếng sóng biển vỗ đều.
- Tiếng tù và khi thuyền vào bến, bước chân khi đi, mõ khi gặp người hoặc chọn thuế, tiền đồng
  khi mua và giao hàng, cồng khi giao trọn đơn, dâng cống, dựng công trình và hết ván, ba tiếng
  trống khi kết phiên hoặc thủy binh đẩy lui giặc, tiếng trầm khi thuyền bỏ đi hoặc bị giặc cướp.
- Nút 🔊 trên thanh trên để tắt hoặc bật; trò chơi nhớ lựa chọn. Âm thanh chỉ bắt đầu sau khi
  bấm «Ra bến» (trình duyệt chặn tự phát tiếng) và tạm dừng khi chuyển sang thẻ khác.

### Bài hát chủ đề

**«Vân Đồn – Tiếng vọng non sông»** (5 phút 17 giây), tệp
[`assets/nhac/van-don-tieng-vong-non-song.mp3`](assets/nhac/van-don-tieng-vong-non-song.mp3),
nén 96 kbps (3,8 MB), làm bằng Suno.

- Màn mở đầu có nút 🎵 «Nghe bài hát» và mục «Lời bài hát». Bài hát dừng khi bấm «Ra bến».
- Màn kết thúc (khi không bị bãi chức) tự phát bài hát sau tiếng cồng; có nút dừng.
- Khi bài hát phát, nhạc nền ngũ cung nhỏ lại; tắt âm thanh (🔇) hoặc chuyển thẻ thì bài hát dừng.
- Bài hát chỉ tải khi người chơi bấm nghe lần đầu, rồi được service worker lưu lại để nghe khi
  mất mạng; không nằm trong danh sách tải sẵn lúc cài, để lần cài đầu không nặng thêm 3,8 MB.

## Kỹ thuật

- Một tệp `index.html`, dùng [`../lib/three.min.js`](../lib/three.min.js) có sẵn trong kho.
- Ảnh và trang được `../sw.js` lưu sẵn để chơi ngoại tuyến. Khi thêm hay đổi ảnh, thêm
  đường dẫn vào danh sách `SHELL` và tăng số phiên bản `VERSION` trong `sw.js`.
- Trình duyệt chỉ lưu kỷ lục điểm và nhân vật đã chọn, không lưu ván đang chơi dở.

## Chưa có

- Lưu ván giữa chừng.
