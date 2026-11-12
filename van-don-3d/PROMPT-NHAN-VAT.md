# Prompt tạo hình nhân vật — Vân Đồn 3D (năm 1149)

Bộ prompt cho các nhân vật **chưa có ảnh hợp sử** trong `assets/`. Viết bằng tiếng Anh
vì các công cụ tạo ảnh hiểu tiếng Anh tốt hơn; phần ghi chú tiếng Việt giải thích chi tiết nào
có căn cứ, chi tiết nào là cách điệu.

## Cách dùng

1. Ghép **Khối phong cách** + **prompt nhân vật** + **Khối cấm** (đưa vào ô negative prompt nếu
   công cụ có, nếu không thì nối vào cuối prompt với chữ «Avoid:»).
2. **Không yêu cầu chữ trên ảnh.** Công cụ tạo ảnh hay viết sai chính tả hoặc dùng chữ quốc ngữ
   (chữ quốc ngữ có từ thế kỷ 17). Tên nhân vật sẽ do game hiển thị.
3. Khi nhận ảnh, soát lại theo **Bảng soát** ở cuối tệp trước khi đưa vào game.
4. Cỡ ảnh: chân dung dọc 3:4 (game cắt thành khung 84×112 px, ưu tiên phần đầu và thân trên).

## Khối phong cách (dùng chung)

```
Handmade claymation stop-motion miniature figure, single character, full body, front view,
standing on a small round clay base, soft warm studio light, plain warm beige background,
visible fingerprints and clay texture, slightly chibi proportions (head a bit large),
muted earthy palette: indigo, brown, celadon green, ochre, rust red.
Setting: Van Don island trading port, Dai Viet kingdom, Ly dynasty, year 1149 AD.
```

## Khối cấm (negative)

```
text, letters, captions, labels, signs, watermark, Latin script, Vietnamese alphabet,
blue-and-white porcelain, Ming or Qing clothing, queue hairstyle, Japanese kimono,
dragon embroidery on non-royal clothing, golden fantasy armor, modern backpack, buckles,
zippers, buttons, pockets, sunglasses, modern anchor, conical hat with chin strap of modern style,
ao dai, ao ba ba, khan ran checkered scarf, tobacco pipe, firearms, glass bottles
```

---

## 1. Quan trấn thủ (nhân vật người chơi)

```
A Dai Viet court official of the Ly dynasty posted to an island trading post.
Black futou-style official cap (phoc dau) with two short stiff flat wings at the back,
dark red cross-collar robe (giao linh) with wide sleeves reaching the shins, plain dark trim,
plain cloth belt with a small jade ring, black cloth boots. Black lacquered teeth.
Holds a rolled bamboo-strip document in one hand. Calm, dignified expression.
No embroidery of dragons or phoenixes.
```

*Căn cứ:* năm 1059 nhà Lý «định triều phục, quan văn võ đi chầu đội mũ phốc đầu, đi ủng»
(*Đại Việt sử ký toàn thư*). Nhuộm răng đen là tục của người Việt thời này. Rồng là biểu
tượng của vua, quan không mặc áo thêu rồng. «Quan trấn thủ» năm 1149 là cách dựng của trò chơi
(chức quan trấn đặt năm 1349).

## 2. Nữ thương chủ (nhân vật hư cấu)

```
A Dai Viet woman merchant, about 35 years old, Ly dynasty 1149.
Hair coiled into a bun wrapped in dark brown cloth, black lacquered teeth, chewing betel.
Brown cross-collar upper garment (giao linh) over a long dark indigo wrap skirt reaching the ankles,
celadon-green cloth sash tied at the waist. Barefoot or simple straw sandals.
Carries a small woven bamboo betel box and a string of round bronze coins with square holes.
Confident, friendly smile.
```

*Ghi chú:* nhân vật hư cấu. Không dùng áo yếm làm áo ngoài (hình ảnh yếm phổ biến trong tư liệu
muộn hơn nhiều). Tiền đồng lỗ vuông có thật thời Lý.

## 3. Bà chủ xưởng dệt lụa

```
A Dai Viet silk weaver woman, Ly dynasty 1149.
Hair wrapped in a plain cloth turban-style head wrap, black lacquered teeth.
Pale celadon cross-collar top with sleeves rolled up, long dark brown wrap skirt,
rust red waist sash. Holds skeins of raw yellow silk and a wooden shuttle.
Behind her a small wooden backstrap or simple frame loom with mulberry leaves in a basket.
```

## 4. Chủ trạm trầm hương

```
A Dai Viet incense wood trader, middle-aged man, Ly dynasty 1149.
Hair in a topknot under a brown cloth head wrap, short black beard, black lacquered teeth.
Dark green cross-collar knee-length tunic, loose brown trousers, cloth belt, straw sandals.
Holds a lacquered wooden tray with dark resinous agarwood chips; a small bronze scale hangs at his belt.
```

*Ghi chú:* trầm hương ở Vân Đồn là hàng trung chuyển (từ miền trong đưa ra), không phải sản vật
của đảo; README của game đã ghi điều này.

## 5. Thợ lặn mò ngọc trai

```
A Dai Viet pearl diver from the Ha Long bay islands, young man, Ly dynasty 1149.
Lean and sun-tanned, hair in a small wet topknot, bare chest and legs,
simple dark loincloth, tattoos of sea serpents on thighs and arms.
Holds a woven rattan basket of pearl oysters and a short iron knife; a coil of rope over the shoulder.
Standing barefoot on wet sand.
```

*Căn cứ:* tục xăm mình của người Việt vùng sông nước được sử cũ chép (xăm để thuồng luồng không
hại). Năm 1348 thuyền Đồ Bồ đến Vân Đồn ngầm mua ngọc trai (*Toàn thư*).

## 6. Thư lại thuế quan

```
A low-ranking Dai Viet clerk, Ly dynasty 1149.
Hair in a topknot under a black soft cloth cap, thin moustache, black lacquered teeth.
Dark indigo cross-collar robe reaching the knees, cloth belt, cloth shoes.
Holds a writing brush and a stack of wooden tally slips; an inkstone and a small bronze
balance scale on a low wooden table beside him.
```

*Ghi chú:* thời Lý giấy tờ viết bằng chữ Hán; vì vậy càng không để ảnh có chữ, tránh chữ Hán bịa.

## 7. Thương nhân nước Tống

```
A Southern Song Chinese sea merchant visiting Dai Viet, 1149, middle-aged man.
Black soft futou cap, round-collar long robe (yuanling shan) in dark blue,
leather belt, black cloth boots, short beard.
Holds a pale green celadon bowl (Longquan or Yue ware style) and has a bolt of silk under his arm.
No blue-and-white porcelain.
```

*Căn cứ:* gốm hoa lam (men lam vẽ trên nền trắng) chỉ phổ biến từ thời Nguyên, thế kỷ 14.
Thương nhân Tống thế kỷ 12 buôn gốm men xanh (Long Tuyền, Việt Châu) hoặc men trắng xanh (thanh bạch).

## 8. Thương nhân Xiêm La

```
A Southeast Asian sea trader from the Chao Phraya river region, 12th century,
Mon-Khmer cultural style. Bare chest, short hair, large round earrings,
a knee-length patterned cotton sampot wrapped and tucked between the legs,
a simple cord necklace with a small bronze amulet. Barefoot.
Carries a bundle of rhinoceros horn wrapped in cloth and a small basket of spices.
```

*Ghi chú:* *Toàn thư* chép Xiêm La có đến Vân Đồn năm 1149 và 1184, nhưng vương quốc của người Thái
đến thế kỷ 13 mới lập; nên nhân vật này dựng theo cư dân vùng hạ lưu Chao Phraya thế kỷ 12
(văn hoá Môn–Khmer), không dựng theo trang phục Thái Lan đời sau.

## 9. Thuyền buôn (thay ảnh thuyền có mỏ neo kiểu châu Âu)

```
Claymation miniature model of a 12th-century Chinese ocean-going junk at a wooden pier:
flat transom stern, three masts with battened bamboo-mat sails, large wooden stern rudder,
a wooden grapnel anchor made of timber with stone weight hanging from the bow by rope,
cargo of celadon jars, bundles of cinnamon bark and wrapped silk on deck.
Limestone karst islands in the background, turquoise water. No text, no plaques.
```

*Ghi chú:* neo thuyền thời này làm bằng gỗ buộc đá, không phải mỏ neo sắt hai càng kiểu châu Âu.

## 10. Thương nhân Trảo Oa (Java)

Hai prompt dưới đây đã dùng để tạo tượng riêng cho Trảo Oa và Tam Phật Tề (đã đưa vào game
ngày 12/11/2026). Cỡ ảnh: dọc 3:4, **đứng thẳng trên nền
trơn, không có đế** (game tự tách nền; đế đất nặn sẽ phải cắt bỏ thủ công).

```
A Javanese sea merchant from the Kediri kingdom (East Java), 12th century, middle-aged man.
Long black hair tied in a high topknot wrapped with a narrow dark indigo headband,
round wooden ear plugs, bare chest, a simple bronze armband on each upper arm.
Dark indigo cotton hip-cloth (kain) wrapped from waist to knee, tucked in front,
with a plain red cloth sash. Barefoot.
Carries a small woven rattan basket of dried cloves in one hand and a short log of
pale sandalwood under the other arm.
Standing straight on a plain flat background, no base, no pedestal.
```

*Căn cứ:* *Toàn thư* chép thuyền Trảo Oa đến Hải Đông năm 1149. *Chư phiên chí* của Triệu
Nhữ Quát (1225) kể sản vật của Java (Đồ Bà) có đinh hương, đàn hương, hồ tiêu. Trang phục
dựng theo phù điêu và tượng Đông Java: để trần, quấn vải ngang hông, búi tóc. Đây là cách
điệu, không phục dựng theo hiện vật cụ thể.

## 11. Thương nhân Tam Phật Tề (Srivijaya, Sumatra)

```
A Malay sea merchant from Srivijaya (Palembang, Sumatra), 12th century, young man.
Shoulder-length black hair tied loosely at the nape, small gold ear studs,
bare chest with a thin cord necklace, a dark red cotton hip-cloth wrapped to mid-calf
with an ochre-yellow sash. Barefoot.
Carries a short elephant tusk in one arm and a sealed bamboo tube of camphor crystals
in the other hand; a polished tortoiseshell plate hangs from his sash.
Standing straight on a plain flat background, no base, no pedestal.
```

*Căn cứ:* *Toàn thư* chép người buôn Tam Phật Tề đến Vân Đồn năm 1184. *Chư phiên chí* kể sản
vật của Tam Phật Tề có long não, đồi mồi, trầm, ngà voi. Trang phục cách điệu theo người Mã Lai
ven biển, cố ý khác tượng Trảo Oa (tóc xõa ngang vai, vải đỏ dài hơn) để người chơi phân biệt.

**Thêm vào khối cấm cho hai prompt này:**

```
turban, Islamic cap, songkok, peci, batik pattern, songket gold brocade, kris dagger,
shirt, jacket, trousers, base, pedestal, clay disc
```

*Lý do:* khăn xếp và mũ songkok gắn với thời kỳ Hồi giáo hoá (từ thế kỷ 13–15 trở đi);
kỹ thuật batik và gấm songket chưa chắc có ở thế kỷ 12; dao kris mang dáng hiện nay muộn hơn.

---

## Bảng soát trước khi đưa ảnh vào game

- [ ] Không có chữ (quốc ngữ, chữ Hán bịa, tiếng Anh), không có nhãn «FRONT VIEW».
- [ ] Không có gốm hoa lam, không có ba lô, khoá cài, cúc áo, túi áo may sẵn.
- [ ] Quan không mặc áo thêu rồng, không mặc giáp vàng kiểu phim cổ trang.
- [ ] Người Việt: búi tóc, răng đen (nếu thấy răng), áo giao lĩnh; không áo dài, không khăn rằn.
- [ ] Không có địa danh đời sau (Bát Tràng, Chu Đậu, Yên Bái…).
- [ ] Thuyền không có mỏ neo sắt kiểu châu Âu.
- [ ] Tượng đứng trên nền trơn, không có đế (để game tách nền và cho bước đi).
