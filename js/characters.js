/* DANH SÁCH TƯỚNG (DATABASE)
  ID: Mã định danh (không trùng)
  Name: Tên tướng
  Faction: Phe (ignis, sylva, omega, zarok)
  Rarity: Độ hiếm (1: Common, 2: Rare, 3: Epic, 4: Legendary)
  Stats: Chỉ số (Atk: Công, Hp: Máu, Cost: Năng lượng triệu hồi)
*/

const charactersData = [
    // --- PHE IGNIS (HỎA) ---
    {
        id: "ignis_01",
        name: "IGNIS PRIME",
        faction: "ignis",
        rarity: 4, // Legendary
        stats: { atk: 800, hp: 2500, cost: 10 },
        desc: "Thủ lĩnh tối cao của quân đoàn Hỏa Ngục.",
        image: "./assets/card_ignis_prime.jpg" // Bạn sẽ tạo ảnh này sau
    },
    {
        id: "ignis_02",
        name: "LAVA HOUND",
        faction: "ignis",
        rarity: 2, // Rare
        stats: { atk: 300, hp: 800, cost: 4 },
        desc: "Chó săn địa ngục với hàm răng rực lửa.",
        image: "./assets/card_lava_hound.jpg"
    },

    // --- PHE SYLVA (RỪNG) ---
    {
        id: "sylva_01",
        name: "GAIA MOTHER",
        faction: "sylva",
        rarity: 4, 
        stats: { atk: 400, hp: 3500, cost: 10 },
        desc: "Người mẹ thiên nhiên ban phát sự sống.",
        image: "./assets/card_gaia.jpg"
    },

    // --- PHE OMEGA (MÁY) ---
    {
        id: "omega_01",
        name: "OMEGA WEAPON",
        faction: "omega",
        rarity: 4, 
        stats: { atk: 900, hp: 2000, cost: 10 },
        desc: "Vũ khí hủy diệt tối thượng.",
        image: "./assets/card_omega.jpg"
    },

    // --- PHE ZAROK (HƯ KHÔNG) ---
    {
        id: "zarok_01",
        name: "ABYSSAL EYE",
        faction: "zarok",
        rarity: 4, 
        stats: { atk: 600, hp: 2200, cost: 9 },
        desc: "Con mắt nhìn thấu tâm can kẻ địch.",
        image: "./assets/card_zarok.jpg"
    }
];
